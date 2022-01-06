using Microsoft.EntityFrameworkCore.Migrations;

namespace FiorellaBack.Migrations
{
    public partial class editedTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Desc",
                table: "Experts");

            migrationBuilder.DropColumn(
                name: "Title",
                table: "Experts");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Desc",
                table: "Experts",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Experts",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
