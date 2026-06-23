package com.lucas.chamados.service;

import com.lucas.chamados.model.Categoria;
import com.lucas.chamados.model.Chamado;
import com.lucas.chamados.model.Prioridade;
import com.lucas.chamados.model.Status;
import com.lucas.chamados.repository.ChamadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ChamadoService {

    @Autowired
    private ChamadoRepository repository;

    // LISTAR TODOS OS CHAMADOS
    
    public List<Chamado> listarTodos() {
        return repository.findAll();
    }

    // BUSCAR CHAMADO POR ID

    public Optional<Chamado> buscarPorId(Long id) {
        return repository.findById(id);
    }

    // CRIAR NOVO CHAMADO
    
    public Chamado criar(Chamado chamado) {
        chamado.setDataCriacao(LocalDateTime.now());
        chamado.setStatus(Status.ABERTO);
        return repository.save(chamado);
    }

    // ATUALIZAR CHAMADO EXISTENTE
    
    public Chamado atualizar(Long id, Chamado chamadoAtualizado) {
        // Busca o chamado no banco
        Chamado chamado = repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Chamado não encontrado com ID: " + id));
        
        // Atualiza os campos
        chamado.setTitulo(chamadoAtualizado.getTitulo());
        chamado.setDescricao(chamadoAtualizado.getDescricao());
        chamado.setPrioridade(chamadoAtualizado.getPrioridade());
        chamado.setResponsavel(chamadoAtualizado.getResponsavel());
        
        // Se mudou para RESOLVIDO, registra a data de fechamento
        if (chamadoAtualizado.getStatus() == Status.RESOLVIDO 
            && chamado.getStatus() != Status.RESOLVIDO) {
            chamado.setDataFechamento(LocalDateTime.now());
        }
        
        chamado.setStatus(chamadoAtualizado.getStatus());
        
        return repository.save(chamado);
    }

    
    // DELETAR CHAMADO
    
    public void deletar(Long id) {
        repository.deleteById(id);
    }

    // FILTROS

    public List<Chamado> filtrarPorStatus(Status status) {
        return repository.findByStatus(status);
    }

    public List<Chamado> filtrarPorPrioridade(Prioridade prioridade) {
        return repository.findByPrioridade(prioridade);
    }

    public List<Chamado> filtrarPorStatusEPrioridade(Status status, Prioridade prioridade) {
        return repository.findByStatusAndPrioridade(status, prioridade);
    }

        public List<Chamado> filtrarPorCategoria(Categoria categoria) {
        return repository.findByCategoria(categoria);
    }
}