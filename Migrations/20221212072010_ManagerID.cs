using Microsoft.EntityFrameworkCore.Migrations;

namespace LeaveApp.Migrations
{
    public partial class ManagerID : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Employees_Managers_ManID",
                table: "Employees");

            migrationBuilder.DropIndex(
                name: "IX_Employees_ManID",
                table: "Employees");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Employees_ManID",
                table: "Employees",
                column: "ManID");

            migrationBuilder.AddForeignKey(
                name: "FK_Employees_Managers_ManID",
                table: "Employees",
                column: "ManID",
                principalTable: "Managers",
                principalColumn: "ManID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
