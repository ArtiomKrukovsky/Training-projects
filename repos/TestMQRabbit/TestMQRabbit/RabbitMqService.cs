using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestMQRabbit
{
    using RabbitMQ.Client;

    public class RabbitMqService
    {
        private string _hostName = "localhost";
        private string _userName = "root";
        private string _password = "root";

        public static string ChunkedMessageBufferedQueue = "test-query";
        public static string LargeMessageBufferedQueue = "LargeMessageBufferedQueue";

        public IConnection GetRabbitMqConnection()
        {
            ConnectionFactory connectionFactory = new ConnectionFactory();
            connectionFactory.HostName = _hostName;
            connectionFactory.UserName = _userName;
            connectionFactory.Password = _password;

            return connectionFactory.CreateConnection();
        }
    }
}
