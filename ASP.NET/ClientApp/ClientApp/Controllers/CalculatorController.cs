using Microsoft.AspNetCore.Mvc;

namespace ClientApp.Controllers
{
    public class CalculatorController : Controller
    {
        public string Add(int value1, int value2)
        {
            return (value1 + value2).ToString();
        }
    }
}
