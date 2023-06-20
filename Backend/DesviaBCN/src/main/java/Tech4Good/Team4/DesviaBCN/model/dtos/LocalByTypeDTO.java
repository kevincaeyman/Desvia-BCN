package Tech4Good.Team4.DesviaBCN.model.dtos;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LocalByTypeDTO {
    private int localID;
    private String neighbourhood;
    private String district;
    private String useType;
    private int cadastreName;
}