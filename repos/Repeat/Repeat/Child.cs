using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repeat
{
    public class Child: Parent
    {
        public Child(): base(10)
        {
            Console.WriteLine(Number);
            Func<int, int, int> func = (x, y) => { var some = x + y; return some; };
            Action<int, int> func2 = (x, y) => Console.WriteLine(x + y);
            Console.WriteLine(func(2, 3));        
        }

        public override int Some(int number)
        {
            var result = base.Some(number);
            result *= 8;
            return result;
        }
    }
}
