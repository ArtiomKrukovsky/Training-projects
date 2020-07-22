using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace ExploreCalifornia.Models
{
    public class BlogDbContext: DbContext
    {
        public DbSet<Post> Posts { get; set; }

        public IQueryable<MonthlySpecial> MonthlySpecials
        {
            get
            {
                return new[]
                {
                    new MonthlySpecial
                    {
                        Key = "calm",
                        Name = "Clifornia Calm Package",
                        Type = "Day Spa Package",
                        Price = 250
                    },
                    new MonthlySpecial
                    {
                        Key = "desert",
                        Name = "From Desert to Sea",
                        Type = "2 Day Spa Sea",
                        Price = 350
                    },
                    new MonthlySpecial
                    {
                        Key = "backpack",
                        Name = "Backpack Cali",
                        Type = "Big Sur Retreat",
                        Price = 620
                    },
                    new MonthlySpecial {
                        Key = "taste",
                        Name = "Taste of California",
                        Type = "Tapas & Groves",
                        Price = 150,
                    }
                }.AsQueryable();
            }
        }

        public BlogDbContext(DbContextOptions<BlogDbContext> options):base(options)
        {
            Database.EnsureCreated();
        }
    }
}