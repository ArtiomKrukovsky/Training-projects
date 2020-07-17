using Microsoft.EntityFrameworkCore;

namespace ExploreCalifornia.Models
{
    public class BlogDbContext: DbContext
    {
        public DbSet<Post> Posts { get; set; }

        public BlogDbContext(DbContextOptions<BlogDbContext> options):base(options)
        {
            Database.EnsureCreated();
        }
    }
}