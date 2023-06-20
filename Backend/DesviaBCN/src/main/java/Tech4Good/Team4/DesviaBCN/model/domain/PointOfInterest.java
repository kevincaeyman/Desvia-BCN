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
@Table(name = "PointsOfInterest")
public class PointOfInterest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "street")
    private String street;
    @Column(name = "streetNum")
    private String streetNum;
    @Column(name = "neighbourhood")
    private String neighbourhood;
    @Column(name = "district")
    private String district;
    @Column(name = "zipcode")
    private String zipcode;
    @Column(name = "longLongitude")
    private float longLongitude;
    @Column(name = "longLatitude")
    private float longLatitude;
    @Column(name = "density")
    private int density;
}