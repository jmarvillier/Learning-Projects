using System.Collections.Generic;

namespace ClientApp.Models
{
    public interface IClientsRepository
    {
        List<Client> GetClients();
        Client GetClientByName(string name);
    }
}
