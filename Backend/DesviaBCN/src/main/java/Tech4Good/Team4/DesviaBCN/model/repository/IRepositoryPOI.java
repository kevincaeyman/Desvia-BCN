package Tech4Good.Team4.DesviaBCN.model.repository;

import Tech4Good.Team4.DesviaBCN.model.domain.PointOfInterest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IRepositoryPOI extends JpaRepository<PointOfInterest, Integer> {
    PointOfInterest findById(int id);
    List<PointOfInterest> findByZipcode(String zipcode);
    List<PointOfInterest> findByDistrict(String district);
    List<PointOfInterest> findByNeighbourhood(String neighbourhood);
}
