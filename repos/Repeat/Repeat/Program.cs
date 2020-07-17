namespace Repeat
{
    using System;

    using PostSharp.Aspects;

    class Program
    {
        //[LoggerNew]
        static void Main(string[] args)
        {
            Console.WriteLine("Main");

            Parent parent = new Parent();
            Console.WriteLine(parent.Some(2) + "first");
            Console.WriteLine(parent.Number);
            parent.Some();
            Child child = new Child();
            Console.WriteLine(child.Some(2) + "second");
            Console.ReadLine();
        }

        //[Serializable]
        //public class LoggerNew : OnMethodBoundaryAspect
        //{
        //    public override void OnEntry(MethodExecutionArgs args)
        //    {
        //        Console.WriteLine("OnEntry");
        //    }
        //}
    }
}
