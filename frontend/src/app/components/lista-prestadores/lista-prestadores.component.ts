import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PrestadorService } from '../../services/prestador.service';
import { Prestador, StatusPrestador } from '../../models/prestador.model';
import { Categoria } from '../../models/categoria.enum';

@Component({
  selector: 'app-lista-prestadores',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './lista-prestadores.component.html',
  styleUrls: ['./lista-prestadores.component.css']
})
export class ListaPrestadoresComponent implements OnInit {

  prestadores: Prestador[] = [];
  prestadoresFiltrados: Prestador[] = [];
  
  categoriaList: string[] = Object.values(Categoria);
  statusList: string[] = Object.values(StatusPrestador);
  
  filtroEspecialidade: string = '';
  filtroStatus: string = '';

  constructor(private prestadorService: PrestadorService) { }

  ngOnInit(): void {
    this.carregarPrestadores();
  }

  carregarPrestadores(): void {
    this.prestadorService.listarTodos().subscribe({
      next: (dados: Prestador[]) => {
        this.prestadores = dados;
        this.prestadoresFiltrados = dados;
      },
      error: (erro: any) => {
        console.error('Erro:', erro);
      }
    });
  }

  aplicarFiltros(): void {
    this.prestadoresFiltrados = this.prestadores.filter((p: Prestador) => {
      const matchEspecialidade: boolean = !this.filtroEspecialidade || p.especialidade === this.filtroEspecialidade;
      const matchStatus: boolean = !this.filtroStatus || p.status === this.filtroStatus;
      return matchEspecialidade && matchStatus;
    });
  }

  limparFiltros(): void {
    this.filtroEspecialidade = '';
    this.filtroStatus = '';
    this.prestadoresFiltrados = this.prestadores;
  }

  deletar(id: number | undefined): void {
    if (!id) return;
    if (confirm('Tem certeza que deseja excluir este prestador?')) {
      this.prestadorService.deletar(id).subscribe({
        next: () => {
          this.carregarPrestadores();
        },
        error: (erro: any) => {
          console.error('Erro ao excluir:', erro);
        }
      });
    }
  }

  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'DISPONIVEL': return 'bg-success';
      case 'OCUPADO': return 'bg-warning text-dark';
      case 'INATIVO': return 'bg-secondary';
      default: return 'bg-light text-dark';
    }
  }
}