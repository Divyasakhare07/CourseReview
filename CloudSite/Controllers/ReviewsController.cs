using Microsoft.AspNetCore.Mvc;
using StudentReviews.Models;
using System;
using System.Threading.Tasks;
using StudentReviews.Data;

namespace StudentReviews.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReviewsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ReviewsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // POST: api/Reviews
        [HttpPost]
        public async Task<IActionResult> CreateReview([FromBody] Reviews review)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _context.reviews.AddAsync(review);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(CreateReview), new { id = review.ReviewId }, review);
        }
    }
}
