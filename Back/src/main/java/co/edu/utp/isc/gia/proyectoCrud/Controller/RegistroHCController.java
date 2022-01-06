package co.edu.utp.isc.gia.proyectoCrud.Controller;

import co.edu.utp.isc.gia.proyectoCrud.DTO.RegistroHCDTO;
import co.edu.utp.isc.gia.proyectoCrud.Exceptions.NoExisteException;
import co.edu.utp.isc.gia.proyectoCrud.Service.RegistroHCService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.swing.*;
import java.text.DateFormat;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("historialClinico")
public class RegistroHCController {

    @Autowired
    public RegistroHCService registroHCService;

    @CrossOrigin(origins = "http://localhost:4200/")
    @PostMapping("crearRegistro")
    public RegistroHCDTO crearRegistro(@RequestBody RegistroHCDTO registroHCDTO) throws NoExisteException {
        return registroHCService.crearRegistro(registroHCDTO);
    }

    @CrossOrigin(origins = "http://localhost:4200/")
    @GetMapping("consultarFecha")
    public List<RegistroHCDTO> consultarPorFecha(@RequestParam String fecha) throws NoExisteException {
        return registroHCService.consultarPorFecha(new Date(fecha));
    }

    @CrossOrigin(origins = "http://localhost:4200/")
    @GetMapping("consultarPaciente")
    public List<RegistroHCDTO> conssultarPorPaciente(@RequestParam Long cedulaPaciente) throws NoExisteException {
        return registroHCService.consultarPorPaciente(cedulaPaciente);
    }

    @CrossOrigin(origins = "http://localhost:4200/")
    @GetMapping("consultarPersonal")
    public List<RegistroHCDTO> consultarPorPersonal(@RequestParam Long cedulaPersonal) throws NoExisteException {
        return registroHCService.consultarPorPersonal(cedulaPersonal);
    }

    @CrossOrigin(origins = "http://localhost:4200/")
    @PutMapping("actualizarRegistro")
    public RegistroHCDTO actualizarRegistro(@RequestBody RegistroHCDTO registroHCDTO)
            throws NoExisteException {
        return registroHCService.actualizarRegistro(registroHCDTO);
    }

    @CrossOrigin(origins = "http://localhost:4200/")
    @DeleteMapping("borrarRegistro")
    public Long borrarRegistro(@RequestParam Long codRegistro) throws NoExisteException {
        registroHCService.borrarRegistro(codRegistro);
        return codRegistro;
    }

    @CrossOrigin(origins = "http://localhost:4200/")
    @DeleteMapping("borrarHistorial")
    public Long borrarHistorial(@RequestParam Long cedulaPaciente) throws NoExisteException {
        registroHCService.borrarHistorial(cedulaPaciente);
        return cedulaPaciente;
    }

    @CrossOrigin(origins = "http://localhost:4200/")
    @GetMapping("obtenerRegistros")
    public List<RegistroHCDTO> obtenerRegistros() {
        return registroHCService.obtenerRegistros();
    }
}
