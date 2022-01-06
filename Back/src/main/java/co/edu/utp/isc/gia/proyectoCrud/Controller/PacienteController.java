package co.edu.utp.isc.gia.proyectoCrud.Controller;

import co.edu.utp.isc.gia.proyectoCrud.DTO.PacienteDTO;
import co.edu.utp.isc.gia.proyectoCrud.Exceptions.NoExisteException;
import co.edu.utp.isc.gia.proyectoCrud.Service.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("paciente")
public class PacienteController {

    @Autowired
    public PacienteService pacienteService;

    @CrossOrigin(origins = "http://localhost:4200/")
    @PostMapping("crearPaciente")
    public PacienteDTO crearPaciente(@RequestBody PacienteDTO pacienteDTO) {

        return pacienteService.crearPaciente(pacienteDTO);
    }

    @CrossOrigin(origins = "http://localhost:4200/")
    @GetMapping("obtenerPacientes")
    public List<PacienteDTO> obtenerPacientes() {
        return pacienteService.obtenerPacientes();
    }

    @CrossOrigin(origins = "http://localhost:4200/")
    @GetMapping("consultarPaciente")
    public PacienteDTO consultarPaciente(@RequestParam Long cedulaPaciente) throws NoExisteException {

        return pacienteService.consultarPaciente(cedulaPaciente);
    }

    @CrossOrigin(origins = "http://localhost:4200/")
    @GetMapping("consultarEstado")
    public List<PacienteDTO> consultarEstado(@RequestParam String estado) throws NoExisteException{

        return pacienteService.consultarEstado(estado);
    }

    @CrossOrigin(origins = "http://localhost:4200/")
    @PutMapping("actualizarPaciente")
    public PacienteDTO actualizarPaciente(@RequestBody PacienteDTO pacienteDTO) throws NoExisteException {
        return pacienteService.actualizarPaciente(pacienteDTO);
    }

    @CrossOrigin(origins = "http://localhost:4200/")
    @DeleteMapping("borrarPaciente")
    public PacienteDTO borrarPaciente(@RequestParam Long cedulaPaciente) throws NoExisteException {
        return pacienteService.borrarPaciente(cedulaPaciente);
    }
}
