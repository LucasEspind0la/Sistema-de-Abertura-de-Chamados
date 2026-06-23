import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChamadoService } from '../../services/chamado.service';
import { Chamado } from '../../models/chamado.model';
import { Status } from '../../models/status.enum';
import { Prioridade } from '../../models/prioridade.enum';
import { Categoria } from '../../models/categoria.enum';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chamados: Chamado[] = [];
  
  totalChamados: number = 0;
  abertos: number = 0;
  emAndamento: number = 0;
  resolvidos: number = 0;
  altaPrioridade: number = 0;

  //novos contadores!
  eletrica: number = 0;
  hidraulica: number = 0;
  seguranca: number = 0;

  constructor(private chamadoService: ChamadoService) { }

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    this.chamadoService.listarTodos().subscribe({
      next: (dados: Chamado[]) => {
        this.chamados = dados;
        this.calcularEstatisticas();
      },
      error: (erro: any) => {
        console.error('Erro ao carregar chamados:', erro);
      }
    });
  }

    calcularEstatisticas(): void {
    this.totalChamados = this.chamados.length;
    this.abertos = this.chamados.filter((c: Chamado) => c.status === Status.ABERTO).length;
    this.emAndamento = this.chamados.filter((c: Chamado) => c.status === Status.EM_ANDAMENTO).length;
    this.resolvidos = this.chamados.filter((c: Chamado) => c.status === Status.RESOLVIDO).length;
    this.altaPrioridade = this.chamados.filter((c: Chamado) => c.prioridade === Prioridade.ALTA).length;
    this.eletrica = this.chamados.filter((c: Chamado) => c.categoria === Categoria.ELETRICA).length;
    this.hidraulica = this.chamados.filter((c: Chamado) => c.categoria === Categoria.HIDRAULICA).length;
    this.seguranca = this.chamados.filter((c: Chamado) => c.categoria === Categoria.SEGURANCA).length;
  }
}