package Tech4Good.Team4.DesviaBCN.model.services;

import Tech4Good.Team4.DesviaBCN.model.domain.PointOfInterest;
import Tech4Good.Team4.DesviaBCN.model.domain.TouristicAccommodation;
import Tech4Good.Team4.DesviaBCN.model.dtos.PointOfInterestDTO;
import Tech4Good.Team4.DesviaBCN.model.dtos.TouristicAccommodationDTO;

import java.util.List;


public interface IServiceTA {

    TouristicAccommodationDTO findById(int id);
    List<TouristicAccommodationDTO> findByDistrict(String district);
    List<TouristicAccommodationDTO> findByNeighbourhood(String neighbourhood);
    TouristicAccommodationDTO convertToDTO(TouristicAccommodation touristicAccommodation);

}
