package Tech4Good.Team4.DesviaBCN.model.services;

import Tech4Good.Team4.DesviaBCN.model.domain.LocalByType;
import Tech4Good.Team4.DesviaBCN.model.dtos.LocalByTypeDTO;
import Tech4Good.Team4.DesviaBCN.model.repository.IRepositoryLBT;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ServiceLBT implements IServiceLBT{

    @Autowired
    private IRepositoryLBT repository;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public LocalByTypeDTO findById(int pointOIid) {
        LocalByType localByType = repository.findById(pointOIid);
        return convertToDTO(localByType);
    }

    @Override
    public List<LocalByTypeDTO> findByDistrict(String district) {
        List<LocalByType> localsByType = repository.findByDistrict(district);
        return localsByType.stream().map(l -> convertToDTO(l)).collect(Collectors.toList());
    }

    @Override
    public List<LocalByTypeDTO> findByNeighbourhood(String neighbourhood) {
        List<LocalByType> localsByType = repository.findByNeighbourhood(neighbourhood);
        return localsByType.stream().map(l -> convertToDTO(l)).collect(Collectors.toList());
    }

    @Override
    public List<LocalByTypeDTO> findByUseType(String useType) {
        List<LocalByType> localsByType = repository.findByUseType(useType);
        return localsByType.stream().map(l -> convertToDTO(l)).collect(Collectors.toList());
    }

    @Override
    public LocalByTypeDTO convertToDTO(LocalByType localByType) {
        return modelMapper.map(localByType, LocalByTypeDTO.class);
    }
}
