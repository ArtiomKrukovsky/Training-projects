using Iterator.Aggregate;
using Iterator.Iterator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Iterator
{
    class Program
    {
        static void Main(string[] args)
        {
            var nyt = new NYPaper();
            var lat = new LAPaper();

            Console.WriteLine("--------   NYPaper");
            PrintCollectionItems(nyt.Reporters);

            Console.WriteLine("--------   LAPaper");
            PrintCollectionItems(lat.Reporters);

            //IIterator nypIterator = nyt.CreateIterator();
            //IIterator lapIterator = lat.CreateIterator();

            //Console.WriteLine("--------   NYPaper");
            //PrintReporters(nypIterator);

            //Console.WriteLine("--------   LAPaper");
            //PrintReporters(lapIterator);

            Console.ReadLine();
        }

        static void PrintReporters(IIterator iterator) {
            iterator.First();
            while(!iterator.IsDone()){
                Console.WriteLine(iterator.Next());
            }
        }

        static void PrintCollectionItems(IEnumerable<string> collection)
        {
            foreach (var item in collection)
            {
                Console.WriteLine(item);
            }
        }
    }
}
