using FluentAssertions;
using Meteo;
using Moq;
using Xunit;

namespace ClientApp.tests
{
    public class MeteoTests
    {
        [Fact]
        public void GetMeteoOfTheDay_AvecUnBouchon_RetourneSoleil()
        {
            Meteo.Meteo meteo = new Meteo.Meteo
            {
                Temperature = 25,
                Temps = Temps.Soleil
            };

            Mock<IDal> mock = new Mock<IDal>();
            mock.Setup(dal => dal.GetMeteoOfTheDay()).Returns(meteo);

            IDal fausseDal = mock.Object;
            Meteo.Meteo meteoOfTheDay = fausseDal.GetMeteoOfTheDay();
            meteoOfTheDay.Temperature.Should().Be(25);
            meteoOfTheDay.Temps.Should().Be(Temps.Soleil);
        }
    }
}
