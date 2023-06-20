package Tech4Good.Team4.DesviaBCN.model.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "TouristicAccommodation")
public class TouristicAccommodation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int accommodationId;
    @Column(name = "street")
    private String street;
    @Column(name = "streetNum")
    private String streetNum;
    @Column(name = "neighbourhood")
    private String neighbourhood;
    @Column(name = "district")
    private String district;
    @Column(name = "floor")
    private String floor;
    @Column(name = "door")
    private String door;
    @Column(name = "numSpots")
    private int numSpots;
    @Column(name = "longLongitude")
    private int longLongitude;
    @Column(name = "longLatitude")
    private int longLatitude;
}
