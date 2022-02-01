using Microsoft.EntityFrameworkCore;
using ToDo.Data;

namespace ToDo.Repositories
{
    public class TaskRepository : ITaskRepository, IDisposable
    {
        private bool disposedValue;

        private ApplicationDbContext context { get; }

        public TaskRepository(ApplicationDbContext context)
        {
            this.context = context;
        }

        public void DeleteTask(int taskId)
        {
            var task = this.context.Tasks.Find(taskId);
            if (task != null)
            {
                context.Tasks.Remove(task);
            }
        }

        public Data.Models.Task GetTaskByID(int taskId)
        {
            return context.Tasks.Find(taskId);
        }

        public IEnumerable<Data.Models.Task> GetTasks()
        {
            return context.Tasks.ToList();
        }

        public Data.Models.Task InsertTask(Data.Models.Task task)
        {
            return context.Tasks.Add(task).Entity;
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public void UpdateTask(Data.Models.Task task)
        {
            context.Tasks.Update(task);
            context.Entry(task).State = EntityState.Modified;
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
        // ~TaskRepository()
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
