package Tech4Good.Team4.DesviaBCN.controllers;

import Tech4Good.Team4.DesviaBCN.model.dtos.PointOfInterestDTO;
import Tech4Good.Team4.DesviaBCN.model.dtos.TouristicAccommodationDTO;
import Tech4Good.Team4.DesviaBCN.model.services.IServicePOI;
import Tech4Good.Team4.DesviaBCN.model.services.IServiceTA;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/desviaBCN/touristicAccommodations")
public class ControllerTA {

    @Autowired
    IServiceTA service;

    @GetMapping("/getTA/{id}")
    @Operation(
            summary = "get touristic accommodation by id",
            description = "It requires a touristic accommodation's id path variable (int id)"
    )
    public ResponseEntity<TouristicAccommodationDTO> getTAById(@PathVariable("id") int id) {
        try {
            return new ResponseEntity<>(service.findById(id), HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getTASbyDistrict")
    @Operation(
            summary = "get all touristic accommodations from a district",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "String district")
    )
    public ResponseEntity<List<TouristicAccommodationDTO>> getTAByDistrict(@RequestParam String district) {
        try {
            List<TouristicAccommodationDTO> touristicAccommodationsDTO = service.findByDistrict(district);
            if (touristicAccommodationsDTO.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(touristicAccommodationsDTO, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/getTASbyNeighbourhood")
    @Operation(
            summary = "get all touristic accommodations from a neighbourhood",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "String neighbourhood")
    )
    public ResponseEntity<List<TouristicAccommodationDTO>> getTAByNeighbourhood(@RequestParam String neighbourhood) {
        try {
            List<TouristicAccommodationDTO> touristicAccommodationsDTO = service.findByNeighbourhood(neighbourhood);
            if (touristicAccommodationsDTO.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(touristicAccommodationsDTO, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}

