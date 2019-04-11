using ClientApp.Models;
using Microsoft.AspNetCore.Mvc;
using System;

namespace ClientApp.Controllers
{
    public class ClientsController : Controller
    {
        private readonly IClientsRepository _clientsRepository;

        public ClientsController(IClientsRepository clientRepository)
        {
            _clientsRepository = clientRepository ?? throw new ArgumentNullException(nameof(_clientsRepository));
        }

        public ActionResult GetClients()
        {
            ViewData["Clients"] = _clientsRepository.GetClients();
            return View();
        }

        public ActionResult GetClient(string id)
        {
            var client = _clientsRepository.GetClientByName(id);
            ViewData["Name"] = id;

            if (client != null)
            {
                ViewData["Age"] = client.Age;

                return View("ClientFound");
            }
            else
            {
                return View("ClientNotFound");
            }
        }
    }
}
