package com.lucas.chamados.service;

import com.lucas.chamados.model.Categoria;
import com.lucas.chamados.model.Chamado;
import com.lucas.chamados.model.Prestador;
import com.lucas.chamados.model.Prioridade;
import com.lucas.chamados.model.Status;
import com.lucas.chamados.model.StatusPrestador;
import com.lucas.chamados.repository.ChamadoRepository;
import com.lucas.chamados.repository.PrestadorRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ChamadoService {

    @Autowired
    private ChamadoRepository repository;

    @Autowired
    private PrestadorRepository prestadorRepository;

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
        chamado.setStatus(Status.ABERTO);  
        chamado.setDataCriacao(LocalDateTime.now());
        
        // Se veio prestador selecionado
        if (chamado.getPrestador() != null && chamado.getPrestador().getId() != null) {
            Prestador p = prestadorRepository.findById(chamado.getPrestador().getId())
                .orElseThrow(() -> new RuntimeException("Prestador não encontrado"));
            
            if (p.getStatus() != StatusPrestador.DISPONIVEL) {
                throw new RuntimeException("Prestador não está disponível");
            }
            
            p.setStatus(StatusPrestador.OCUPADO);
            prestadorRepository.save(p);
            chamado.setPrestador(p);
        }
        
        return repository.save(chamado);  
    }

    // ATUALIZAR CHAMADO EXISTENTE
    public Chamado atualizar(Long id, Chamado chamadoAtualizado) {
        Chamado chamado = repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Chamado não encontrado com ID: " + id));
        
        chamado.setTitulo(chamadoAtualizado.getTitulo());
        chamado.setDescricao(chamadoAtualizado.getDescricao());
        chamado.setPrioridade(chamadoAtualizado.getPrioridade());
        chamado.setResponsavel(chamadoAtualizado.getResponsavel());
        
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