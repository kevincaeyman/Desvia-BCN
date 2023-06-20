package Tech4Good.Team4.DesviaBCN.model.domain;

import jakarta.persistence.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "LocalByType")
public class LocalByType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int localID;
    @Column(name = "neighbourhood")
    private String neighbourhood;
    @Column(name = "district")
    private String district;
    @Column(name = "useType")
    private String useType;
    @Column(name = "cadastreName")
    private int cadastreName;

}