package Tech4Good.Team4.DesviaBCN.controllers;

import Tech4Good.Team4.DesviaBCN.model.dtos.LocalByTypeDTO;
import Tech4Good.Team4.DesviaBCN.model.services.IServiceLBT;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/desviaBCN/localsByType")
public class ControllerLBT {

    @Autowired
    IServiceLBT service;

    @GetMapping("/getLBT/{id}")
    @Operation(
            summary = "get local by type by id",
            description = "It requires a local's id path variable (int id)"
    )
    public ResponseEntity<LocalByTypeDTO> getLBTById(@PathVariable("id") int pointOIid) {
        try {
            return new ResponseEntity<>(service.findById(pointOIid), HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getLBTSbyDistrict")
    @Operation(
            summary = "get all locals from a district",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "String district")
    )
    public ResponseEntity<List<LocalByTypeDTO>> getLBTSByDistrict(@RequestParam String district) {
        try {
            List<LocalByTypeDTO> localsByTypeDTO = service.findByDistrict(district);
            if (localsByTypeDTO.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(localsByTypeDTO, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/getLBTbyNeighbourhood")
    @Operation(
            summary = "get all locals from a neighbourhood",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "String neighbourhood")
    )
    public ResponseEntity<List<LocalByTypeDTO>> getLBTByNeighbourhood(@RequestParam String neighbourhood) {
        try {
            List<LocalByTypeDTO> localsByTypeDTO = service.findByNeighbourhood(neighbourhood);
            if (localsByTypeDTO.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(localsByTypeDTO, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/getLBTSbyUseType")
    @Operation(
            summary = "get all locals with same uses",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "String useType")
    )
    public ResponseEntity<List<LocalByTypeDTO>> getLBTSByUseType(@RequestParam String useType) {
        try {
            List<LocalByTypeDTO> localsByTypeDTO = service.findByUseType(useType);
            if (localsByTypeDTO.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(localsByTypeDTO, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}

