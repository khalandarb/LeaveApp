using Microsoft.EntityFrameworkCore.Migrations;

namespace LeaveApp.Migrations
{
    public partial class leavesempid : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Leaves_Employees_EmpID",
                table: "Leaves");

            migrationBuilder.DropIndex(
                name: "IX_Leaves_EmpID",
                table: "Leaves");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Leaves_EmpID",
                table: "Leaves",
                column: "EmpID");

            migrationBuilder.AddForeignKey(
                name: "FK_Leaves_Employees_EmpID",
                table: "Leaves",
                column: "EmpID",
                principalTable: "Employees",
                principalColumn: "EmpID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
