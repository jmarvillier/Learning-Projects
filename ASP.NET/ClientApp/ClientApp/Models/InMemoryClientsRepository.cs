using System.Collections.Generic;
using System.Linq;

namespace ClientApp.Models
{
    public class InMemoryClientsRepository : IClientsRepository
    {
        private readonly List<Client> _clients;

        public InMemoryClientsRepository()
        {
            _clients = new List<Client>
            {
                new Client {Age = 33, Name = "Nicolas"},
                new Client {Age = 30, Name = "Delphine"},
                new Client {Age = 32, Name = "Alexis"},
                new Client {Age = 30, Name = "Sarah"}
            };
        }

        public Client GetClientByName(string name)
        => _clients.FirstOrDefault(client => client.Name == name);

        public List<Client> GetClients()
        => _clients;

    }
}
