import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PrestadorService } from '../../services/prestador.service';
import { Prestador, StatusPrestador } from '../../models/prestador.model';
import { Categoria } from '../../models/categoria.enum';

@Component({
  selector: 'app-prestador-form',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './prestador-form.component.html',
  styleUrls: ['./prestador-form.component.css']
})
export class PrestadorFormComponent implements OnInit {

  prestador: Prestador = {
    nome: '',
    empresa: '',
    telefone: '',
    especialidade: Categoria.ELETRICA, // ajuste conforme seu enum
    status: StatusPrestador.DISPONIVEL
  };

  categorias: string[] = Object.values(Categoria);
  statusList: string[] = Object.values(StatusPrestador);
  editando = false;
  id?: number;

  constructor(
    private prestadorService: PrestadorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.editando = true;
      this.prestadorService.buscarPorId(this.id).subscribe({
        next: (dados) => this.prestador = dados,
        error: (erro) => console.error('Erro ao carregar:', erro)
      });
    }
  }

  salvar(): void {
    if (this.editando && this.id) {
      this.prestadorService.atualizar(this.id, this.prestador).subscribe({
        next: () => this.router.navigate(['/prestadores']),
        error: (erro) => console.error('Erro ao atualizar:', erro)
      });
    } else {
      this.prestadorService.criar(this.prestador).subscribe({
        next: () => this.router.navigate(['/prestadores']),
        error: (erro) => console.error('Erro ao criar:', erro)
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/prestadores']);
  }
}