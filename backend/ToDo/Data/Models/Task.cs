namespace ToDo.Data.Models
{
    public class Task
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime Timestamp { get; set; }
        public TaskType TaskType { get; set; }
    }
}
