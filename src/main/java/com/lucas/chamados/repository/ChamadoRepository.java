package com.lucas.chamados.repository;

import com.lucas.chamados.model.Categoria;
import com.lucas.chamados.model.Chamado;
import com.lucas.chamados.model.Prioridade;
import com.lucas.chamados.model.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChamadoRepository extends JpaRepository<Chamado, Long> {
    
    // Spring Data JPA cria essas consultas AUTOMATICAMENTE!
    // Você só declara o método com o nome certo
    
    // Busca chamados por status
    List<Chamado> findByStatus(Status status);
    
    // Busca chamados por prioridade
    List<Chamado> findByPrioridade(Prioridade prioridade);
    
    // Busca chamados por status E prioridade
    List<Chamado> findByStatusAndPrioridade(Status status, Prioridade prioridade);
    
    // Busca chamados do solicitante (contém o nome, ignora maiúsculas)
    List<Chamado> findBySolicitanteContainingIgnoreCase(String solicitante);

    //
    List<Chamado> findByCategoria(Categoria categoria);
}