using Microsoft.Data.Entity;

namespace MyWebApp.Models
{
    public class PeopleContext : DbContext
    {
        private static bool _created = false;

        public PeopleContext()
        {
            if (!_created)
            {
                _created = true;
                Database.EnsureCreated();
            }
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
        }

        public DbSet<Person> Person { get; set; }
    }
}
