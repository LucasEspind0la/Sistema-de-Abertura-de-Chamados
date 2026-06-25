package com.lucas.chamados.repository;

import com.lucas.chamados.model.Prestador;
import com.lucas.chamados.model.Categoria;
import com.lucas.chamados.model.StatusPrestador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PrestadorRepository extends JpaRepository<Prestador, Long> {

    List<Prestador> findByEspecialidade(Categoria especialidade);

    List<Prestador> findByStatus(StatusPrestador status);

    List<Prestador> findByEspecialidadeAndStatus(Categoria especialidade, StatusPrestador status);
}