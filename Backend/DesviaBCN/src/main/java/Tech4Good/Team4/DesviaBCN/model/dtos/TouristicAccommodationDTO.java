package Tech4Good.Team4.DesviaBCN.model.dtos;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class TouristicAccommodationDTO {
    private int accommodationId;
    private String street;
    private String streetNum;
    private String neighbourhood;
    private String district;
    private String floor;
    private String door;
    private int numSpots;
    private int longLongitude;
    private int longLatitude;
}
