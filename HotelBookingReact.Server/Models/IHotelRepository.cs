using System.Reflection.Metadata;
using System.Collections.Generic;

namespace HotelBooking.Models
{
    public interface IHotelRepository
    {

        IEnumerable<Hotel> GetAllHotels();
        IEnumerable<Hotel> FindHotelsByLocation(string location);
        Hotel GetHotel(int? id);

        HotelImageDTO GetHotelImage(int? id);
        //void AddHotelAsync(Hotel hotel);

        //void SaveChangesAsync();
        
    }
}
