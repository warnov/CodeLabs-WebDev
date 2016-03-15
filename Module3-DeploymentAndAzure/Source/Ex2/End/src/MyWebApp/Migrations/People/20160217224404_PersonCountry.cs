using System;
using System.Collections.Generic;
using Microsoft.Data.Entity.Migrations;

namespace MyWebApp.Migrations.People
{
    public partial class PersonCountry : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Country",
                table: "Person",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(name: "Country", table: "Person");
        }
    }
}
