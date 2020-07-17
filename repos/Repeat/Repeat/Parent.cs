using System;
using System.Collections.Generic;
using System.Linq;

namespace Repeat
{
    public class Parent
    {
        private int _number;

        public int Number
        {
            get { return _number; }
            set { _number = value; }
        }


        public Parent():this(5)
        {

        }

        public Parent(int number)
        {
            this.Number = number;
        }

        public virtual int Some(int number)
        {
            number *= 8;
            return number;
        }

        public void Some()
        {
            var array = new List<int>() { 1, 2, 3, 4, 5 };
            var query = (from number in array
                        where number > 2
                        select new
                        {
                            Numbers2= number *2,
                            Numbers = number
                        }).ToList();

            foreach (var item in query)
            {
                Console.WriteLine(item.Numbers2);
            }

        }
    }
}
