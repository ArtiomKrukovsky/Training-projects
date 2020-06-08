using Xunit;

[assembly: CollectionBehavior(CollectionBehavior.CollectionPerAssembly)]
namespace Calculator.Tests
{
    using System;

    using Calculator = CSharpCalculator.Calculator;

    [Collection("Sequential")]
    public class CalculatorTests
    {
        private readonly Calculator _calculator;

        public CalculatorTests()
        {
            this._calculator = new Calculator();
        }

        [Fact]
        public void Add_Return5_IfSum2And3()
        {
            //Arrange
            double expected = 5;
            double a = 2;
            double b = 3;

            //Act
            double result = this._calculator.Add(a, b);

            //Assert

            Assert.Equal(expected, result);
        }

        [Fact]
        public void Add_ThrowInvalidCastException_IfInputValuesAreStringType()
        {
            //Arrange
            double expected = 5;
            string a = "2";
            string b = "3";

            //Assert
            Assert.Throws<InvalidCastException>(() => this._calculator.Add(a, b));
        }

        [Fact]
        public void Sub_Return1_If3Sub2()
        {
            //Arrange
            double expected = 1;
            double a = 2;
            double b = 3;

            //Act
            double result = this._calculator.Sub(b, a);

            //Assert

            Assert.Equal(expected, result);
        }

        [Fact]
        public void Multiply_Return10_If5Multiply2()
        {
            //Arrange
            double expected = 10;
            double a = 2;
            double b = 5;

            //Act
            double result = this._calculator.Multiply(b, a);

            //Assert

            Assert.Equal(expected, result);
        }

        [Fact]
        public void Divide_Return2_If6DivBy3()
        {
            //Arrange
            double expected = 2;
            double a = 3;
            double b = 6;

            //Act
            double result = this._calculator.Divide(b, a);

            //Assert

            Assert.Equal(expected, result);
        }
    }
}
