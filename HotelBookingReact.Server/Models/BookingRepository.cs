using Microsoft.EntityFrameworkCore;

namespace HotelBooking.Models
{
    public class BookingRepository: IBookingRepository
    {
        private readonly HotelBookingContext _context;

        public BookingRepository(HotelBookingContext context)
            => _context = context;

        public IEnumerable<Booking> GetAllBookings()
            =>  _context.Bookings.ToList();
        public Booking GetBooking(int? id)
            =>  _context.Bookings.Find(id);

        public void AddBooking(Booking booking)
            => _context.Add(booking);

        public void SaveChanges()
            =>  _context.SaveChanges();
    }
}
