package com.lucas.chamados.controller;

import com.lucas.chamados.model.Categoria;
import com.lucas.chamados.model.Chamado;
import com.lucas.chamados.model.Prestador;
import com.lucas.chamados.model.Prioridade;
import com.lucas.chamados.model.Status;
import com.lucas.chamados.model.StatusPrestador;
import com.lucas.chamados.repository.PrestadorRepository;  
import com.lucas.chamados.service.ChamadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chamados")
@CrossOrigin(origins = "*")
public class ChamadoController {

    @Autowired
    private ChamadoService service;

    @Autowired
    private PrestadorRepository prestadorRepository;

    // GET /api/chamados
    @GetMapping
    public List<Chamado> listarTodos() {
        return service.listarTodos();
    }

    // GET /api/chamados/1
    @GetMapping("/{id}")
    public ResponseEntity<Chamado> buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    // POST /api/chamados
    @PostMapping
    public Chamado criar(@RequestBody Chamado chamado) {
        return service.criar(chamado);
    }

    // PUT /api/chamados/1
    @PutMapping("/{id}")
    public Chamado atualizar(@PathVariable Long id, @RequestBody Chamado chamado) {
        return service.atualizar(id, chamado);
    }

    // DELETE /api/chamados/1
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        service.deletar(id);
        return ResponseEntity.noContent().build();
    }

    // GET /api/chamados/status/ABERTO
    @GetMapping("/status/{status}")
    public List<Chamado> filtrarPorStatus(@PathVariable Status status) {
        return service.filtrarPorStatus(status);
    }

    // GET /api/chamados/prioridade/ALTA
    @GetMapping("/prioridade/{prioridade}")
    public List<Chamado> filtrarPorPrioridade(@PathVariable Prioridade prioridade) {
        return service.filtrarPorPrioridade(prioridade);
    }

    // GET /api/chamados/categoria/OUTROS
    @GetMapping("/categoria/{categoria}")
    public List<Chamado> filtrarPorCategoria(@PathVariable Categoria categoria) {
        return service.filtrarPorCategoria(categoria);
    }

    // ✅ ENDPOINT CORRETO — aqui no Controller, não no Repository
    @GetMapping("/disponiveis/{categoria}")
    public List<Prestador> listarPrestadoresDisponiveis(@PathVariable Categoria categoria) {
        return prestadorRepository.findByEspecialidadeAndStatus(categoria, StatusPrestador.DISPONIVEL);
    }
}