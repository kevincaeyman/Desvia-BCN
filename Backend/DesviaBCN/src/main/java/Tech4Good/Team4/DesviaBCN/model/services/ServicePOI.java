package Tech4Good.Team4.DesviaBCN.model.services;

import Tech4Good.Team4.DesviaBCN.model.domain.PointOfInterest;
import Tech4Good.Team4.DesviaBCN.model.dtos.PointOfInterestDTO;
import Tech4Good.Team4.DesviaBCN.model.repository.IRepositoryPOI;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ServicePOI implements IServicePOI {

    @Autowired
    private IRepositoryPOI repository;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public PointOfInterestDTO findById(int pointOIid) {
        PointOfInterest pointOfInterest = repository.findById(pointOIid);
        return convertToDTO(pointOfInterest);
    }

    @Override
    public List<PointOfInterestDTO> findByZipcode(String zipcode) {
        List<PointOfInterest> pointsOfInterest = repository.findByZipcode(zipcode);
        return pointsOfInterest.stream()
                .filter(p -> p.getDensity() < 4)
                .map(p -> convertToDTO(p)).collect(Collectors.toList());
    }

    @Override
    public List<PointOfInterestDTO> findByDistrict(String district) {
        List<PointOfInterest> pointsOfInterest = repository.findByDistrict(district);
        return pointsOfInterest.stream()
                .filter(p -> p.getDensity() < 4)
                .map(p -> convertToDTO(p)).collect(Collectors.toList());
    }

    @Override
    public List<PointOfInterestDTO> findByNeighbourhood(String neighbourhood) {
        List<PointOfInterest> pointsOfInterest = repository.findByNeighbourhood(neighbourhood);
        return pointsOfInterest.stream()
                .filter(p -> p.getDensity() < 4)
                .map(p -> convertToDTO(p)).collect(Collectors.toList());
    }

    @Override
    public PointOfInterestDTO convertToDTO(PointOfInterest pointOfInterest) {
        return modelMapper.map(pointOfInterest, PointOfInterestDTO.class);
    }
}
