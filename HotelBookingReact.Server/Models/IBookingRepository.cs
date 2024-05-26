namespace HotelBooking.Models
{
    public interface IBookingRepository
    {
        IEnumerable<Booking> GetAllBookings();
        Booking GetBooking(int? id);

        void AddBooking(Booking booking);

        void SaveChanges();
    }
}
