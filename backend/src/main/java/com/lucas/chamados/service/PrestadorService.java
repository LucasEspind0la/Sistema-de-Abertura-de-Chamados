package com.lucas.chamados.service;

import com.lucas.chamados.model.Prestador;
import com.lucas.chamados.model.Categoria;
import com.lucas.chamados.model.StatusPrestador;
import com.lucas.chamados.repository.PrestadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PrestadorService {

    @Autowired
    private PrestadorRepository repository;

    public List<Prestador> listarTodos() {
        return repository.findAll();
    }

    public Optional<Prestador> buscarPorId(Long id) {
        return repository.findById(id);
    }

    public Prestador criar(Prestador prestador) {
        return repository.save(prestador);
    }

    public Prestador atualizar(Long id, Prestador prestadorAtualizado) {
        Prestador prestador = repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Prestador não encontrado"));

        prestador.setNome(prestadorAtualizado.getNome());
        prestador.setEmpresa(prestadorAtualizado.getEmpresa());
        prestador.setCnpj(prestadorAtualizado.getCnpj());
        prestador.setTelefone(prestadorAtualizado.getTelefone());
        prestador.setEmail(prestadorAtualizado.getEmail());
        prestador.setEspecialidade(prestadorAtualizado.getEspecialidade());
        prestador.setStatus(prestadorAtualizado.getStatus());
        prestador.setObservacoes(prestadorAtualizado.getObservacoes());

        return repository.save(prestador);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }

    public List<Prestador> filtrarPorEspecialidade(Categoria especialidade) {
        return repository.findByEspecialidade(especialidade);
    }

    public List<Prestador> filtrarPorStatus(StatusPrestador status) {
        return repository.findByStatus(status);
    }

    public List<Prestador> listarDisponiveisPorEspecialidade(Categoria especialidade) {
        return repository.findByEspecialidadeAndStatus(especialidade, StatusPrestador.DISPONIVEL);
    }
}