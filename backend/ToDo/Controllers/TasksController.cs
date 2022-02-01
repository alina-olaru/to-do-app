using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Web.Resource;
using ToDo.Data.Models;
using ToDo.Repositories;
using Task = ToDo.Data.Models.Task;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ToDo.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    [RequiredScope(RequiredScopesConfigurationKey = "AzureAd:Scopes")]
    public class TasksController : ControllerBase
    {
        public ITaskRepository TaskRepository { get; }

        public TasksController(ITaskRepository TaskRepository)
        {
            this.TaskRepository = TaskRepository;
        }

        // GET: api/<Tasks>
        [HttpGet]
        public ActionResult<IEnumerable<Task>> Get()
        {
            return Ok(TaskRepository.GetTasks());
        }

        // GET api/<Tasks>/5
        [HttpGet("{id}")]
        public ActionResult<Task> Get(int id)
        {
            var Task = TaskRepository.GetTaskByID(id);
            if (Task == null)
                return BadRequest("Task not found.");
            return Ok(Task);
        }

        // POST api/<Tasks>
        [HttpPost]
        public ActionResult<Task> Post([FromBody] Task value)
        {
            var Task = TaskRepository.InsertTask(value);
            if (Task == null)
                return BadRequest("Could not create task.");
            return Ok(Task);
        }

        // PUT api/<Tasks>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Task value)
        {
            var Task = TaskRepository.GetTaskByID(id);
            if (Task == null)
                return BadRequest("Task not found.");

            TaskRepository.UpdateTask(value);
            return Ok();
        }

        // DELETE api/<Tasks>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var Task = TaskRepository.GetTaskByID(id);
            if (Task == null)
                return BadRequest("Task not found.");
            TaskRepository.DeleteTask(id);
            return Ok();
        }
    }
}
