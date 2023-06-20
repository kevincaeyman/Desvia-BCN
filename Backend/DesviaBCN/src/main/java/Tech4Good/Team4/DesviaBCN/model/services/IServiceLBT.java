package Tech4Good.Team4.DesviaBCN.model.services;

import Tech4Good.Team4.DesviaBCN.model.domain.LocalByType;
import Tech4Good.Team4.DesviaBCN.model.domain.PointOfInterest;
import Tech4Good.Team4.DesviaBCN.model.dtos.LocalByTypeDTO;
import Tech4Good.Team4.DesviaBCN.model.dtos.PointOfInterestDTO;

import java.util.List;

public interface IServiceLBT {
    LocalByTypeDTO findById(int pointOIid);
    List<LocalByTypeDTO> findByDistrict(String district);
    List<LocalByTypeDTO> findByNeighbourhood(String neighbourhood);
    List<LocalByTypeDTO> findByUseType(String useType);
    LocalByTypeDTO convertToDTO(LocalByType localByType);

}
