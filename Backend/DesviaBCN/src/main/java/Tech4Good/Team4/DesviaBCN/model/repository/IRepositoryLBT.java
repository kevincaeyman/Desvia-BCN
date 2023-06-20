package Tech4Good.Team4.DesviaBCN.model.repository;

import Tech4Good.Team4.DesviaBCN.model.domain.LocalByType;
import Tech4Good.Team4.DesviaBCN.model.domain.PointOfInterest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IRepositoryLBT extends JpaRepository<LocalByType, Integer> {
    LocalByType findById(int id);
    List<LocalByType> findByDistrict(String district);
    List<LocalByType> findByNeighbourhood(String neighbourhood);
    List<LocalByType> findByUseType(String useType);
}
