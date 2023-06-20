package Tech4Good.Team4.DesviaBCN;

import Tech4Good.Team4.DesviaBCN.model.domain.PointOfInterest;
import Tech4Good.Team4.DesviaBCN.model.repository.IRepositoryPOI;
import jakarta.persistence.Column;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;


import java.util.List;
import static  org.assertj.core.api.Assertions.*;

@DataJpaTest
public class POIRespositoryTest {

    PointOfInterest pointOfInterest;
    @Autowired
    private IRepositoryPOI repositoryPOI;

    @BeforeEach
    void setup() {

        pointOfInterest = PointOfInterest.builder()
                .id(1)
                .name("poi1")
                .street("")
                .streetNum("")
                .neighbourhood("Sarria")
                .district("Putxet")
                .zipcode("08022")
                .longLongitude(0)
                .longLatitude(0)
                .build();
    }

    @Test
    public void WhenList_ThenReturnSize(){
        repositoryPOI.save(pointOfInterest);
        List<PointOfInterest> POIList = repositoryPOI.findByZipcode("08022");
        int actual =  1;
        int expected = POIList.size();
        assertThat(actual).isEqualTo(expected);
    }


}
