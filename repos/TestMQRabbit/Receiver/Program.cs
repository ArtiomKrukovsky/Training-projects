using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Receiver
{
    using System.IO;

    using RabbitMQ.Client;
    using RabbitMQ.Client.Events;

    using TestMQRabbit;

    class Program
    {
        static void Main(string[] args)
        {
            RabbitMqService commonService = new RabbitMqService();
            IConnection connection = commonService.GetRabbitMqConnection();
            IModel model = connection.CreateModel();
            //ReceiveBufferedMessages(model);
            ReceiveChunkedMessages(model);
        }

        private static void ReceiveBufferedMessages(IModel model)
        {
            model.BasicQos(0, 1, false);
            var consumer = new EventingBasicConsumer(model);

            consumer.Received += (sender, args) =>
            {
                byte[] messageContents = args.Body.ToArray();
                string randomFileName = string.Concat(@"E:\.NET-Mentoring-Program-for-A2-2019\Message queues\directory\3_glava_", Guid.NewGuid(), ".docx");
                Console.WriteLine("Received message, will save it to {0}", randomFileName);
                File.WriteAllBytes(randomFileName, messageContents);
                model.BasicAck(args.DeliveryTag, false);
            };

            model.BasicConsume(RabbitMqService.LargeMessageBufferedQueue, false, consumer);
            Console.WriteLine("Press \'q\' to stop listening message query.");
            while (Console.Read() != 'q')
            {
            }
        }

        private static void ReceiveChunkedMessages(IModel model)
        {
            model.BasicQos(0, 1, false);
            var consumer = new EventingBasicConsumer(model);

            consumer.Received += (sender, args) =>
            {
                Console.WriteLine("Received a chunk!");
                IDictionary<string, object> headers = args.BasicProperties.Headers;
                string randomFileName = Encoding.UTF8.GetString((headers["output-file"] as byte[]));
                bool isLastChunk = Convert.ToBoolean(headers["finished"]);
                string localFileName = string.Concat(@"E:\", randomFileName);

                using (FileStream fileStream = new FileStream(localFileName, FileMode.Append, FileAccess.Write))
                {
                    fileStream.Write(args.Body.ToArray(), 0, args.Body.Length);
                    fileStream.Flush();
                }

                Console.WriteLine("Chunk saved. Finished? {0}", isLastChunk);
                model.BasicAck(args.DeliveryTag, false);
            };

            model.BasicConsume(RabbitMqService.ChunkedMessageBufferedQueue, false, consumer);
            Console.WriteLine("Press \'q\' to stop listening message query.");
            while (Console.Read() != 'q')
            {
            }
        }
    }
}
