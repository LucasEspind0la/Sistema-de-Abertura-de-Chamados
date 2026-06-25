package com.lucas.chamados.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "prestadores")
public class Prestador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private String empresa;

    private String cnpj;

    @Column(nullable = false)
    private String telefone;

    private String email;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Categoria especialidade;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatusPrestador status = StatusPrestador.DISPONIVEL;

    @Column(length = 1000)
    private String observacoes;

    private LocalDateTime dataCadastro = LocalDateTime.now();

    // Getters e Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getEmpresa() { return empresa; }
    public void setEmpresa(String empresa) { this.empresa = empresa; }

    public String getCnpj() { return cnpj; }
    public void setCnpj(String cnpj) { this.cnpj = cnpj; }

    public String getTelefone() { return telefone; }
    public void setTelefone(String telefone) { this.telefone = telefone; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public Categoria getEspecialidade() { return especialidade; }
    public void setEspecialidade(Categoria especialidade) { this.especialidade = especialidade; }

    public StatusPrestador getStatus() { return status; }
    public void setStatus(StatusPrestador status) { this.status = status; }

    public String getObservacoes() { return observacoes; }
    public void setObservacoes(String observacoes) { this.observacoes = observacoes; }

    public LocalDateTime getDataCadastro() { return dataCadastro; }
    public void setDataCadastro(LocalDateTime dataCadastro) { this.dataCadastro = dataCadastro; }
}