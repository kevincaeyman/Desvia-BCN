package Tech4Good.Team4.DesviaBCN.model.services;

import Tech4Good.Team4.DesviaBCN.model.domain.PointOfInterest;
import Tech4Good.Team4.DesviaBCN.model.domain.TouristicAccommodation;
import Tech4Good.Team4.DesviaBCN.model.dtos.PointOfInterestDTO;
import Tech4Good.Team4.DesviaBCN.model.dtos.TouristicAccommodationDTO;
import Tech4Good.Team4.DesviaBCN.model.repository.IRepositoryPOI;
import Tech4Good.Team4.DesviaBCN.model.repository.IRepositoryTA;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ServiceTA implements IServiceTA {

    @Autowired
    private IRepositoryTA repository;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public TouristicAccommodationDTO findById(int id) {
        TouristicAccommodation touristicAccommodation = repository.findById(id);
        return convertToDTO(touristicAccommodation);
    }

    @Override
    public List<TouristicAccommodationDTO> findByDistrict(String district) {
        List<TouristicAccommodation> touristicAccommodation = repository.findByDistrict(district);
        return touristicAccommodation.stream().map(t -> convertToDTO(t)).collect(Collectors.toList());
    }

    @Override
    public List<TouristicAccommodationDTO> findByNeighbourhood(String neighbourhood) {
        List<TouristicAccommodation> touristicAccommodation = repository.findByNeighbourhood(neighbourhood);
        return touristicAccommodation.stream().map(t -> convertToDTO(t)).collect(Collectors.toList());
    }

    @Override
    public TouristicAccommodationDTO convertToDTO(TouristicAccommodation touristicAccommodation) {
        return modelMapper.map(touristicAccommodation, TouristicAccommodationDTO.class);
    }
}
