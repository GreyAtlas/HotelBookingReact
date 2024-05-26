using static HotelBooking.Models.HotelRepository;
using System.Reflection.Metadata;
using Microsoft.EntityFrameworkCore.Storage;

using Microsoft.EntityFrameworkCore;

namespace HotelBooking.Models
{
    public class HotelRepository: IHotelRepository
    {

        private readonly HotelBookingContext _context;

        public HotelRepository(HotelBookingContext context)
            => _context = context;

        public IEnumerable<Hotel> GetAllHotels()
        {
            var hotels =  _context.Hotels.Select(h => 
            new Hotel()
            {
                Id = h.Id,
                Name = h.Name,
                Location = h.Location,
                Picture = h.Picture
            })
            .ToList();
            return hotels;
        }
        public IEnumerable<Hotel> FindHotelsByLocation(string location)
        {
            var hotels = _context.Hotels.Select(h =>
            new Hotel()
            {
                Id = h.Id,
                Name = h.Name,
                Location = h.Location,
                Picture = h.Picture
            })
            .Where(h => h.Location == location)
            .ToList();
            return hotels;
        }
        public Hotel GetHotel(int? id)
        {
            var hotels = _context.Hotels.Select(h =>
            new Hotel()
            {
                Id = h.Id,
                Name = h.Name,
                Location = h.Location,
                Picture = h.Picture
            })
            .FirstOrDefault(h => h.Id == id);
            return hotels;
        }
        public HotelImageDTO GetHotelImage(int? id)
        {
            var image = _context.Hotels.Select(h =>
            new HotelImageDTO()
            {
                Id = h.Id,
                Picture = h.Picture,
            })
            .FirstOrDefault(h => h.Id == id);
            return image;
        }

        //public void AddHotel(Hotel hotel)
        //    => _context.Add(hotel);

        //public void SaveChanges()
        //    => _context.SaveChanges();
    }
}
