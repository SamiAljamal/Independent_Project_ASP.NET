using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;
using IndependentProject.Models;
namespace Independent.Tests.ModelTests
{
    public class CommentsTest
    {
        [Fact]
        public void GetDescriptionTest()
        {
            //Arrange
            var comment = new Comment();
            comment.description = "That comment is dope";

            //Act
            var result = comment.description;

            
            //Assert
            Assert.Equal("That comment is dope", result);

        }
    }
}
