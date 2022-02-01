using Microsoft.EntityFrameworkCore;
using ToDo.Data;
using ToDo.Data.Models;

namespace ToDo.Repositories
{
    public class TaskTypeRepository : ITaskTypeRepository, IDisposable
    {
        private bool disposedValue;

        private ApplicationDbContext context { get; }

        public TaskTypeRepository(ApplicationDbContext context)
        {
            this.context = context;
        }

        public void DeleteTaskType(int TaskTypeId)
        {
            var taskType = this.context.TaskTypes.Find(TaskTypeId);
            if (taskType != null)
            {
                context.TaskTypes.Remove(taskType);
            }
        }

        public TaskType GetTaskTypeByID(int TaskTypeId)
        {
            return context.TaskTypes.Find(TaskTypeId);
        }

        public IEnumerable<TaskType> GetTaskTypes()
        {
            return context.TaskTypes.ToList();
        }

        public TaskType InsertTaskType(TaskType TaskType)
        {
            return context.TaskTypes.Add(TaskType).Entity;
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public void UpdateTaskType(TaskType TaskType)
        {
            context.Update(TaskType);
            context.Entry(TaskType).State = EntityState.Modified;
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    context.Dispose();
                }

                // TODO: free unmanaged resources (unmanaged objects) and override finalizer
                // TODO: set large fields to null
                disposedValue = true;
            }
        }

        // // TODO: override finalizer only if 'Dispose(bool disposing)' has code to free unmanaged resources
        // ~TaskTypeRepository()
        // {
        //     // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
        //     Dispose(disposing: false);
        // }

        public void Dispose()
        {
            // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
            Dispose(disposing: true);
            GC.SuppressFinalize(this);
        }
    }
}
