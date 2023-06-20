package Tech4Good.Team4.DesviaBCN.model.dtos;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PointOfInterestDTO {
    private int id;
    private String name;
    private String street;
    private String streetNum;
    private String neighbourhood;
    private String district;
    private String zipcode;
    private float longLongitude;
    private float longLatitude;
    private int density;
}
