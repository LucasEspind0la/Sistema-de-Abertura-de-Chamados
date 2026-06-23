package com.lucas.chamados.controller;

import com.lucas.chamados.model.Categoria;
import com.lucas.chamados.model.Chamado;
import com.lucas.chamados.model.Prioridade;
import com.lucas.chamados.model.Status;
import com.lucas.chamados.service.ChamadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController                          // diz que isso é uma API REST
@RequestMapping("/api/chamados")         // URL base: /api/chamados
@CrossOrigin(origins = "*")              // permite o Angular acessar (CORS)
public class ChamadoController {

    @Autowired
    private ChamadoService service;

    // GET  /api/chamados          → lista todos

    @GetMapping
    public List<Chamado> listarTodos() {
        return service.listarTodos();
    }

    // GET  /api/chamados/1        → busca por ID
    
    @GetMapping("/{id}")
    public ResponseEntity<Chamado> buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id)
            .map(ResponseEntity::ok)                    // encontrou → 200 OK
            .orElse(ResponseEntity.notFound().build()); // não encontrou → 404
    }


    // POST /api/chamados          → cria novo

    @PostMapping
    public Chamado criar(@RequestBody Chamado chamado) {
        return service.criar(chamado);
    }


    // PUT  /api/chamados/1        → atualiza

    @PutMapping("/{id}")
    public Chamado atualizar(@PathVariable Long id, @RequestBody Chamado chamado) {
        return service.atualizar(id, chamado);
    }

    // DELETE /api/chamados/1      → deleta

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        service.deletar(id);
        return ResponseEntity.noContent().build(); // 204 No Content
    }

    // GET /api/chamados/status/ABERTO   → filtra

    @GetMapping("/status/{status}")
    public List<Chamado> filtrarPorStatus(@PathVariable Status status) {
        return service.filtrarPorStatus(status);
    }

    
    // GET /api/chamados/prioridade/ALTA → filtra

    @GetMapping("/prioridade/{prioridade}")
    public List<Chamado> filtrarPorPrioridade(@PathVariable Prioridade prioridade) {
        return service.filtrarPorPrioridade(prioridade);
    }

    // GET /api/chamados/categoria/OUTROS - Filtra chamados por categoria
        @GetMapping("/categoria/{categoria}")
    public List<Chamado> filtrarPorCategoria(@PathVariable Categoria categoria) {
        return service.filtrarPorCategoria(categoria);
    }
}