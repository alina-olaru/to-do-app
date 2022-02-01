using ToDo.Data.Models;

namespace ToDo.Repositories
{
    public interface ITaskTypeRepository:IDisposable
    {
        IEnumerable<TaskType> GetTaskTypes();
        TaskType GetTaskTypeByID(int TaskTypeId);
        TaskType InsertTaskType(TaskType TaskType);
        void DeleteTaskType(int TaskTypeId);
        void UpdateTaskType(TaskType TaskType);
        void Save();
    }
}
