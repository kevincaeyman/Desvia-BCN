package Tech4Good.Team4.DesviaBCN;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@OpenAPIDefinition(
		info = @Info(title = "Project DESVIA_BCN ", version = "1.0.0"),
		servers = {@Server(url = "http://localhost:8080")},
		tags = {@Tag(name = "pointsOfInterest-controller", description = "Project to promote untensioned areas of Bcn for a more sustainable turism (ddbb mySQL")}
)
public class DesviaBcnApplication {

	public static void main(String[] args) {
		SpringApplication.run(DesviaBcnApplication.class, args);
	}

	@Bean
	public ModelMapper getModelMapper() {
		return new ModelMapper();
	}

}
