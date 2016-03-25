# Introduction to ASP.NET Core 1.0 #
## Exercise 1: Creating a new web site with Visual Studio 2015 ##
### Task 1 - Creating a site using the Web Application project template ###
* File / New / ASP.NET / Web Application
* Solution Explorer tour
* Bower
  * Expand Dependencies / Bower
  * Right-click jQuery
  * Show Bower commands
* Startup.cs
  * Configure: Sets up HTTP pipeline
  * ConfigureServices: Sets up application services
* Run
## Exercise 2: Working with Data ##
### Task 1 - Creating a New Model ###
* Create Person (Id, Name, Age)
### Task 2 - Creating an MVC Controller ###
* Scaffold controller (Async actions, new context)
* Show controller
### Task 3 - Running the Solution ###
* Run, nav to /People
* Show CRUD actions
## Exercise 3: Unit testing your apps ##
### Task 1 - Creating the test project ###
* Add Solution Folder named "test"
* Add Project / "Class Library (Package)"
* Open project.json
* Change frameworks to "dns451" and "dnxcore50"
* Use Package Manager to add "xunit" and "xunit.runner.dnx"
* Add command to project.json
```JSON
"commands": {
  "test": "xunit.runner.dnx"
}
```
* Solution Explorer, add ref to Web Project
### Task 2 - Creating some Simple Tests ###
* Add class `MyTest.cs`
```csharp
using Xunit;

namespace MyWebApp.UnitTests
{
     public class MyTest
     {
          [Fact]
          public void MyFirstTest()
          {
                Assert.Equal(1, 1);
          }

          [Fact]
          public void MyFirstFailingTest()
          {
                Assert.Equal(1, 2);
          }
     }
}
```
### Task 3 - Testing a Controller Action ###
* Add class `HomeControllerTests.cs`
```csharp
using Microsoft.AspNet.Mvc;
using MyWebApp.Controllers;
using Xunit;

namespace MyWebApp.UnitTests
{
    public class HomeControllerTests
    {
        [Fact]
        public void HomeControllerIndexReturnsResponse() {
            // Arrange
            var controller = new HomeController();

            // Act
            var result = controller.Index() as ViewResult;

            // Assert
            Assert.NotNull(result);
        }
    }
}
```
## Exercise 4: Cross-platform development ##
### Task 1 - Creating the Ubuntu environment ###
 > Quickly review, but this is already done on lab computers
### Task 2 - Creating a ASP.NET Core 1.0 application using Yeoman ###
* Open terminal (pinned to taskbar)
* `yo aspnet` / Web Application
* cd into directory and use `tree` to show folder structure
* `dnx restore`
### Task 3 - Opening the site in VS Code ###
* Open site in VS Code
* Run with `dnx web`
* Browse to `http://localhost:5000`
## Summary ##