using Microsoft.EntityFrameworkCore.Migrations;

namespace FiorellaBack.Migrations
{
    public partial class somechanges : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Experts",
                table: "Experts");

            migrationBuilder.RenameTable(
                name: "Experts",
                newName: "Expertss");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Expertss",
                table: "Expertss",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Expertss",
                table: "Expertss");

            migrationBuilder.RenameTable(
                name: "Expertss",
                newName: "Experts");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Experts",
                table: "Experts",
                column: "Id");
        }
    }
}
