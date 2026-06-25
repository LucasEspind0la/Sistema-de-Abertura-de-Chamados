package com.lucas.chamados.controller;

import com.lucas.chamados.model.Prestador;
import com.lucas.chamados.model.Categoria;
import com.lucas.chamados.model.StatusPrestador;
import com.lucas.chamados.service.PrestadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/prestadores")
@CrossOrigin(origins = "*")
public class PrestadorController {

    @Autowired
    private PrestadorService service;

    @GetMapping
    public List<Prestador> listarTodos() {
        return service.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Prestador> buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Prestador criar(@RequestBody Prestador prestador) {
        return service.criar(prestador);
    }

    @PutMapping("/{id}")
    public Prestador atualizar(@PathVariable Long id, @RequestBody Prestador prestador) {
        return service.atualizar(id, prestador);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        service.deletar(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/especialidade/{especialidade}")
    public List<Prestador> filtrarPorEspecialidade(@PathVariable Categoria especialidade) {
        return service.filtrarPorEspecialidade(especialidade);
    }

    @GetMapping("/status/{status}")
    public List<Prestador> filtrarPorStatus(@PathVariable StatusPrestador status) {
        return service.filtrarPorStatus(status);
    }

    @GetMapping("/disponiveis/{especialidade}")
    public List<Prestador> listarDisponiveis(@PathVariable Categoria especialidade) {
        return service.listarDisponiveisPorEspecialidade(especialidade);
    }
}