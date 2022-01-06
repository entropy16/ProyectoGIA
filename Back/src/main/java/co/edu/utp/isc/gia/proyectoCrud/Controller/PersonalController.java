package co.edu.utp.isc.gia.proyectoCrud.Controller;

import co.edu.utp.isc.gia.proyectoCrud.DTO.PersonalDTO;
import co.edu.utp.isc.gia.proyectoCrud.Exceptions.NoExisteException;
import co.edu.utp.isc.gia.proyectoCrud.Service.PersonalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("personal")
public class PersonalController {

    @Autowired
    public PersonalService personalService;

    @CrossOrigin(origins = "http://localhost:4200/")
    @PostMapping("crearPersonal")
    public PersonalDTO crearPersonal(@RequestBody PersonalDTO personalDTO) {

            return personalService.crearPersonal(personalDTO);
    }

    @CrossOrigin(origins = "http://localhost:4200/")
    @GetMapping("consultarPersonal")
    public PersonalDTO consultarPersonal(@RequestParam Long cedulaPersonal) throws NoExisteException {

            return personalService.consultarPersonal(cedulaPersonal);
    }

    @CrossOrigin(origins = "http://localhost:4200/")
    @GetMapping("consultarTipo")
    public List<PersonalDTO> consultarPorTipo(@RequestParam String tipo) throws NoExisteException {
        return personalService.consultarPorTipo(tipo);
    }

    @CrossOrigin(origins = "http://localhost:4200/")
    @PutMapping("actualizarPersonal")
    public PersonalDTO actualizarPersonal(@RequestBody PersonalDTO personalDTO)
            throws NoExisteException{
        return personalService.actualizarPersonal(personalDTO);
    }

    @CrossOrigin(origins = "http://localhost:4200/")
    @DeleteMapping("borrarPersonal")
    public PersonalDTO borrarPersonal(@RequestParam Long cedulaPesonal) throws NoExisteException {
        return personalService.borrarPersonal(cedulaPesonal);
    }

    @CrossOrigin(origins = "http://localhost:4200/")
    @GetMapping("obtenerPersonal")
    public List<PersonalDTO> obtenerPersonal() {
        return personalService.obtenerPersonal();
    }
}
