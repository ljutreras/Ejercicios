package com.empresa.services;

import com.empresa.models.Cliente;
import com.empresa.reprositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {
    @Autowired
    ClienteRepository clienteRepository;

    public void registroCliente(Cliente cliente) {
        clienteRepository.save(cliente);
    }

    public List<Cliente> findId() {
        return clienteRepository.findAll();
    }

    public Cliente buscarId(Integer id) {
        return clienteRepository.findById(id).get();
    }

    public void eliminarById(Integer id) {
        clienteRepository.deleteById(id);
    }
}
