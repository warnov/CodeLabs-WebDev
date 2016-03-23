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
