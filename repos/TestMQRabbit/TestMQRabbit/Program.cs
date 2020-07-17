using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestMQRabbit
{
    using System.IO;

    using RabbitMQ.Client;

    class Program
    {
        static void Main(string[] args)
        {
            RabbitMqService rabbitMqService = new RabbitMqService();
            IConnection connection = rabbitMqService.GetRabbitMqConnection();
            IModel model = connection.CreateModel();
            //model.QueueDeclare(RabbitMqService.LargeMessageBufferedQueue, true, false, false, null);
            //RunBufferedMessageExample(model);

            model.QueueDeclare(RabbitMqService.ChunkedMessageBufferedQueue, true, false, false, null);
            RunChunkedMessageExample(model);
        }

        private static void RunBufferedMessageExample(IModel model)
        {
            string filePath = @"E:\.NET-Mentoring-Program-for-A2-2019\Message queues\directory\3_glava.docx";
            ConsoleKeyInfo keyInfo = Console.ReadKey();
            while (true)
            {
                if (keyInfo.Key == ConsoleKey.Enter)
                {
                    IBasicProperties basicProperties = model.CreateBasicProperties();
                    byte[] fileContents = File.ReadAllBytes(filePath);
                    model.BasicPublish("", RabbitMqService.LargeMessageBufferedQueue, basicProperties, fileContents);
                }

                keyInfo = Console.ReadKey();
            }
        }

        private static void RunChunkedMessageExample(IModel model)
        {
            string filePath = @"E:\.NET-Mentoring-Program-for-A2-2019\Message queues\directory\3_glava.docx";
            int chunkSize = 16384;

            while (true)
            {
                ConsoleKeyInfo keyInfo = Console.ReadKey();
                if (keyInfo.Key == ConsoleKey.Enter)
                {
                    Console.WriteLine("Starting file read operation...");
                    FileStream fileStream = File.OpenRead(filePath);
                    StreamReader streamReader = new StreamReader(fileStream);
                    int remainingFileSize = Convert.ToInt32(fileStream.Length);
                    int totalFileSize = Convert.ToInt32(fileStream.Length);
                    bool finished = false;
                    string randomFileName = string.Concat("3_glava_", Guid.NewGuid(), ".docx");
                    byte[] buffer;
                    while (true)
                    {
                        if (remainingFileSize <= 0)
                        {
                            break;
                        }

                        var read = 0;

                        if (remainingFileSize > chunkSize)
                        {
                            buffer = new byte[chunkSize];
                            read = fileStream.Read(buffer, 0, chunkSize);
                        }
                        else
                        {
                            buffer = new byte[remainingFileSize];
                            read = fileStream.Read(buffer, 0, remainingFileSize);
                            finished = true;
                        }

                        IBasicProperties basicProperties = model.CreateBasicProperties();

                        basicProperties.Headers = new Dictionary<string, object>();
                        basicProperties.Headers.Add("output-file", randomFileName);
                        basicProperties.Headers.Add("finished", finished);

                        model.BasicPublish("", RabbitMqService.ChunkedMessageBufferedQueue, basicProperties, buffer);
                        remainingFileSize -= read;
                    }

                    Console.WriteLine("Chunks complete.");
                }
            }
        }
    }
}
