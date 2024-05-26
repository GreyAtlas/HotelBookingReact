using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HotelBooking.Models;
using System.Diagnostics.Metrics;
using System.Net.Mime;


namespace HotelBooking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly IBookingRepository _repository;

        public BookingController(IBookingRepository context)
        {
            _repository = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Booking>> GetAllBookings()
        {
            var list =  _repository.GetAllBookings();
            return Ok(list);
        }
        [HttpGet("{id:int}")]
        public ActionResult<Booking> GetBooking(int? id)
        {
            var booking =  _repository.GetBooking(id);
            if (booking == null)
            {
                return NotFound("Booking not found");
            }
            return Ok(booking);
        }

        [HttpPost]
        public ActionResult AddBooking(BookingSubmissionDTO booking)
        {
            decimal cost = 20;
            switch(booking.RoomType)
            {
                case 0:
                    cost += 100;
                    break;
                case 1:
                    cost += 150;
                    break;
                case 2:
                    cost += 200;
                    break;
            }
            if (booking.Breakfast)
            {
                cost += (15 * booking.NumberOfPeople)*booking.LengthOfStay;
            }
            _repository.AddBooking(
                new Booking
                {
                    HotelId = booking.HotelId,
                    HotelName = booking.HotelName,
                    RoomType = booking.RoomType,
                    LengthOfStay = booking.LengthOfStay,
                    NumberOfPeople= booking.NumberOfPeople,
                    Breakfast = booking.Breakfast,
                    Cost = cost
                });
            _repository.SaveChanges();
            return Ok();
        }
    }
}
