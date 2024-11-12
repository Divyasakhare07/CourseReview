using StudentReviews.Models;
using Microsoft.EntityFrameworkCore;

namespace StudentReviews.Data

{
    public class ApplicationDbContext : DbContext

    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Reviews> reviews { get; set; }
       

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Category>().HasData(
        //        new Category { CategoryId = 1, Name = "Food" },
        //        new Category { CategoryId = 1, Name = "Shopping" },
        //        new Category { CategoryId = 1, Name = "Fuel" },
        //        new Category { CategoryId = 1, Name = "Rent" }

        //        );

        //}
    }
}
