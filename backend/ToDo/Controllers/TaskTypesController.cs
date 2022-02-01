using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Web.Resource;
using ToDo.Data.Models;
using ToDo.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ToDo.Controllers
{
    [Authorize(Roles = "Admin")]
    [ApiController]
    [Route("api/[controller]")]
    [RequiredScope(RequiredScopesConfigurationKey = "AzureAd:Scopes")]
    public class TaskTypesController : ControllerBase
    {
        public ITaskTypeRepository TaskTypeRepository { get; }

        public TaskTypesController(ITaskTypeRepository taskTypeRepository)
        {
            TaskTypeRepository = taskTypeRepository;
        }

        // GET: api/<TaskTypes>
        [HttpGet]
        public ActionResult<IEnumerable<TaskType>> Get()
        {
            return Ok(TaskTypeRepository.GetTaskTypes());
        }

        // GET api/<TaskTypes>/5
        [HttpGet("{id}")]
        public ActionResult<TaskType> Get(int id)
        {
            var tasktype = TaskTypeRepository.GetTaskTypeByID(id);
            if (tasktype == null)
                return BadRequest("Task Type not found.");
            return Ok(tasktype);
        }

        // POST api/<TaskTypes>
        [HttpPost]
        public ActionResult<TaskType> Post([FromBody] TaskType value)
        {
            var tasktype = TaskTypeRepository.InsertTaskType(value);
            if(tasktype == null)
                return BadRequest("Could not create task type.");
            return Ok(tasktype);
        }

        // PUT api/<TaskTypes>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] TaskType value)
        {
            var taskType = TaskTypeRepository.GetTaskTypeByID(id);
            if (taskType == null)
                return BadRequest("Task type not found.");

            TaskTypeRepository.UpdateTaskType(value);
            return Ok();
        }

        // DELETE api/<TaskTypes>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var taskType = TaskTypeRepository.GetTaskTypeByID(id);
            if (taskType == null)
                return BadRequest("Task type not found.");
            TaskTypeRepository.DeleteTaskType(id);
            return Ok();
        }
    }
}
