using Microsoft.EntityFrameworkCore.Migrations;

namespace LeaveApp.Migrations
{
    public partial class newdb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Managers",
                columns: table => new
                {
                    ManID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Fname = table.Column<string>(nullable: false),
                    Lname = table.Column<string>(nullable: false),
                    Email = table.Column<string>(nullable: false),
                    Password = table.Column<string>(nullable: false),
                    ConPwd = table.Column<string>(nullable: false),
                    Gen = table.Column<string>(nullable: false),
                    Ph = table.Column<long>(nullable: false),
                    Date = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Managers", x => x.ManID);
                });

            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    EmpID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Fname = table.Column<string>(nullable: false),
                    Lname = table.Column<string>(nullable: false),
                    Email = table.Column<string>(nullable: false),
                    Password = table.Column<string>(nullable: false),
                    ConPwd = table.Column<string>(nullable: false),
                    Gen = table.Column<string>(nullable: false),
                    Ph = table.Column<long>(nullable: false),
                    Date = table.Column<string>(nullable: false),
                    ManID = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.EmpID);
                    table.ForeignKey(
                        name: "FK_Employees_Managers_ManID",
                        column: x => x.ManID,
                        principalTable: "Managers",
                        principalColumn: "ManID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Leaves",
                columns: table => new
                {
                    LID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LStatus = table.Column<string>(nullable: false),
                    LType = table.Column<string>(nullable: false),
                    Sdate = table.Column<string>(nullable: false),
                    Edate = table.Column<string>(nullable: false),
                    EmpID = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Leaves", x => x.LID);
                    table.ForeignKey(
                        name: "FK_Leaves_Employees_EmpID",
                        column: x => x.EmpID,
                        principalTable: "Employees",
                        principalColumn: "EmpID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Employees_ManID",
                table: "Employees",
                column: "ManID");

            migrationBuilder.CreateIndex(
                name: "IX_Leaves_EmpID",
                table: "Leaves",
                column: "EmpID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Leaves");

            migrationBuilder.DropTable(
                name: "Employees");

            migrationBuilder.DropTable(
                name: "Managers");
        }
    }
}
