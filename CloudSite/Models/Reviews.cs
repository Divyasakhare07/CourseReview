using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace StudentReviews.Models
{
    public class Reviews
    {
        [Key]
        public int ReviewId { get; set; }

        [Required]
        [StringLength(100)]
        public string StudentName { get; set; }

        [Required]
        [StringLength(50)]
        public string Dept { get; set; }

        [Required]
        [StringLength(100)]
        public string Course { get; set; }

        [Required]
        [StringLength(100)]
        public string Professor { get; set; }

        [Required]
        [Range(1, 5, ErrorMessage = "Overall Rating must be between 1 and 5.")]
        public int OverallRating { get; set; }

        [Required]
        [Range(1, 5, ErrorMessage = "Difficulty Level must be between 1 and 5.")]
        public int DifficultyLevel { get; set; }

        [Required]
        public string Comment { get; set; }
    }
}
