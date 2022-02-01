using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Web.Resource;
using ToDo.Data.Models;
using ToDo.Repositories;
using User = ToDo.Data.Models.User;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ToDo.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    [RequiredScope(RequiredScopesConfigurationKey = "AzureAd:Scopes")]
    public class UsersController : ControllerBase
    {
        public IUserRepository UserRepository { get; }

        public UsersController(IUserRepository UserRepository)
        {
            this.UserRepository = UserRepository;
        }

        // GET: api/<Users>
        [HttpGet]
        public ActionResult<IEnumerable<User>> Get()
        {
            return Ok(UserRepository.GetUsers());
        }

        // GET api/<Users>/5
        [HttpGet("{id}")]
        public ActionResult<User> Get(int id)
        {
            var User = UserRepository.GetUserByID(id);
            if (User == null)
                return BadRequest("User not found.");
            return Ok(User);
        }

        // POST api/<Users>
        [HttpPost]
        public ActionResult<User> Post([FromBody] User value)
        {
            var User = UserRepository.InsertUser(value);
            if (User == null)
                return BadRequest("Could not create User.");
            return Ok(User);
        }

        // PUT api/<Users>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] User value)
        {
            var User = UserRepository.GetUserByID(id);
            if (User == null)
                return BadRequest("User not found.");

            UserRepository.UpdateUser(value);
            return Ok();
        }

        // DELETE api/<Users>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var User = UserRepository.GetUserByID(id);
            if (User == null)
                return BadRequest("User not found.");
            UserRepository.DeleteUser(id);
            return Ok();
        }
    }
}
