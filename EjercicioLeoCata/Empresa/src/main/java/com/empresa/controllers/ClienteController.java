package com.empresa.controllers;

import com.empresa.models.Cliente;
import com.empresa.services.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;
import java.util.List;

@Controller
@RequestMapping("/cliente")
public class ClienteController {
    @Autowired
    ClienteService clienteService;

    @RequestMapping("")
    public String cliente(@ModelAttribute("cliente")Cliente cliente){
        return "cliente.jsp";
    }

    @PostMapping("/guardar")
    public String guardarCliente(@Valid @ModelAttribute("cliente")Cliente cliente,
                                 BindingResult result,
                                 Model model){
        if (result.hasErrors()){
            model.addAttribute("msgError","Ingrese los datos correctos");
            return "cliente.jsp";
        }else{
            clienteService.registroCliente(cliente);
            List<Cliente> listaClientes = clienteService.findId();
            model.addAttribute("listaCliente",listaClientes);
            return "mostrarCliente.jsp";
        }
    }

    @RequestMapping("/mostrar")
    public String mostrarCliente(Model model){
        List<Cliente> listaClientes = clienteService.findId();
        model.addAttribute("listaCliente",listaClientes);
        return "mostrarCliente.jsp";
    }

    @RequestMapping("/editar/{id}")
    public String editarCliente(@PathVariable("id")Integer id, Model model){
        Cliente cliente = clienteService.buscarId(id);
        model.addAttribute("cliente",cliente);
        return "editarCliente.jsp";

    }

    @PostMapping("/actualizar/{id}")
    public String actualizarCliente(@PathVariable("id") Integer id,
                                    @ModelAttribute("cliente")Cliente cliente,
                                    BindingResult result,
                                    Model model){
        if (result.hasErrors()) {
            model.addAttribute("msgError", "Ingrese los datos correctos");
            return "editarCliente.jsp";
        }else {
            clienteService.registroCliente(cliente);
            List<Cliente> listaClientes = clienteService.findId();
            model.addAttribute("listaCliente",listaClientes);
            return "mostrarCliente.jsp";
        }
    }

    @RequestMapping("/eliminar/{id}")
    public String eliminarCliente(@PathVariable("id")Integer id){

        clienteService.eliminarById(id);

        return "redirect:/cliente/mostrar";
    }

}
