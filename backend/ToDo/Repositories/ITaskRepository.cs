using ToDo.Data.Models;
using Task = ToDo.Data.Models.Task;

namespace ToDo.Repositories
{
    public interface ITaskRepository:IDisposable
    {
        IEnumerable<Task> GetTasks();
        Task GetTaskByID(int taskId);
        Task InsertTask(Task task);
        void DeleteTask(int taskId);
        void UpdateTask(Task task);
        void Save();
    }
}
