using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace StudentReviews.Migrations
{
    /// <inheritdoc />
    public partial class M2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "rev",
                columns: table => new
                {
                    ReviewId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StudentName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Dept = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Course = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Professor = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    OverallRating = table.Column<int>(type: "int", nullable: false),
                    DifficultyLevel = table.Column<int>(type: "int", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_rev", x => x.ReviewId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "rev");
        }
    }
}
