using Microsoft.EntityFrameworkCore;
using ToDo.Data;
using ToDo.Data.Models;

namespace ToDo.Repositories
{
    public class UserRepository : IUserRepository, IDisposable
    {
        private ApplicationDbContext context;
        private bool disposedValue;

        public UserRepository(ApplicationDbContext context)
        {
            this.context = context;
        }

        public void DeleteUser(int userId)
        {
            var user = this.context.Users.Find(userId);
            if (user != null)
            {
                context.Users.Remove(user);
            }
        }

        public User GetUserByID(int userId)
        {
            return context.Users.Find(userId);
        }

        public IEnumerable<User> GetUsers()
        {
            return context.Users.ToList();
        }

        public User InsertUser(User user)
        {
            return context.Users.Add(user).Entity;
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public void UpdateUser(User user)
        {
            context.Update(user);
            context.Entry(user).State = EntityState.Modified;
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    context.Dispose();
                }
                disposedValue = true;
            }
        }

        public void Dispose()
        {
            // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
            Dispose(disposing: true);
            GC.SuppressFinalize(this);
        }
    }
}
