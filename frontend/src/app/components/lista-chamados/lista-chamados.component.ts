import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChamadoService } from '../../services/chamado.service';
import { Chamado } from '../../models/chamado.model';
import { Status } from '../../models/status.enum';
import { Prioridade } from '../../models/prioridade.enum';
import { Categoria } from '../../models/categoria.enum';

@Component({
  selector: 'app-lista-chamados',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './lista-chamados.component.html',
  styleUrls: ['./lista-chamados.component.css']
})
export class ListaChamadosComponent implements OnInit {

  chamados: Chamado[] = [];
  chamadosFiltrados: Chamado[] = [];
  
  statusList: string[] = Object.values(Status);
  prioridadeList: string[] = Object.values(Prioridade);
  
  filtroStatus: string = '';
  filtroPrioridade: string = '';
  filtroSolicitante: string = '';

  constructor(private chamadoService: ChamadoService) { }

  ngOnInit(): void {
    this.carregarChamados();
  }

  carregarChamados(): void {
    this.chamadoService.listarTodos().subscribe({
      next: (dados: Chamado[]) => {
        this.chamados = dados;
        this.chamadosFiltrados = dados;
      },
      error: (erro: any) => {
        console.error('Erro:', erro);
        alert('Erro ao carregar chamados. Verifique se o backend está rodando em http://localhost:8080');
      }
    });
  }

    aplicarFiltros(): void {
    this.chamadosFiltrados = this.chamados.filter((c: Chamado) => {
      const matchStatus: boolean = !this.filtroStatus || c.status === this.filtroStatus;
      const matchPrioridade: boolean = !this.filtroPrioridade || c.prioridade === this.filtroPrioridade;
      const matchCategoria: boolean = !this.filtroCategoria || c.categoria === this.filtroCategoria;  // ← NOVO
      const matchSolicitante: boolean = !this.filtroSolicitante || 
        c.solicitante.toLowerCase().includes(this.filtroSolicitante.toLowerCase());
      
      return matchStatus && matchPrioridade && matchCategoria && matchSolicitante;  // ← ATUALIZADO
    });
  }

  limparFiltros(): void {
    this.filtroStatus = '';
    this.filtroPrioridade = '';
    this.filtroCategoria = ''; 
    this.filtroSolicitante = '';
    this.chamadosFiltrados = this.chamados;
  }

  deletar(id: number | undefined): void {
    if (!id) return;
    
    if (confirm('Tem certeza que deseja excluir este chamado?')) {
      this.chamadoService.deletar(id).subscribe({
        next: () => {
          alert('Chamado excluído com sucesso!');
          this.carregarChamados();
        },
        error: (erro: any) => {
          console.error('Erro ao excluir:', erro);
        }
      });
    }
  }
  
  categoriaList: string[] = Object.values(Categoria);
  filtroCategoria: string = '';
}