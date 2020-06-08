namespace Calculator.Tests
{
    using CSharpCalculator;

    using Xunit;

    [Collection("Sequential")]
    public class CalculatorDegreesTests
    {
        private readonly Calculator _calculator;

        public CalculatorDegreesTests()
        {
            this._calculator = new Calculator();
        }

        [Fact]
        public void Sqrt_Return2_IfInputValueIs4()
        {
            //Arrange
            double expected = 2;

            //Act
            var result = this._calculator.Sqrt(4);

            //Assert
            Assert.Equal(expected, result);
        }
    }
}
