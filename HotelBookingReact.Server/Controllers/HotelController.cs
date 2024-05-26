using HotelBooking.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace HotelBooking.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class HotelController : ControllerBase
    {
        private readonly IHotelRepository _repository;
        public HotelController(IHotelRepository repository)
            => _repository = repository;


        [HttpGet]
        public ActionResult<IEnumerable<Hotel>> GetAllHotels()
        {
            var list = _repository.GetAllHotels();
            return Ok(list);
        }

        [HttpGet("{id:int}")]
        public ActionResult<Hotel> GetHotel(int id)
        {
            var hotel = _repository.GetHotel(id);
            if (hotel == null)
            {
                return NotFound("Hotel not found");
            }
            return Ok(hotel);
        }
        [HttpGet("{location}")]
        public ActionResult<IEnumerable<Hotel>> GetHotelsByLocation(string location)
        {
            var list =  _repository.FindHotelsByLocation(location);
            if (list.Count() == 0)
            {
                return NotFound("No Hotels at this Location");
            }
            return Ok(list);
        }


    }

}
