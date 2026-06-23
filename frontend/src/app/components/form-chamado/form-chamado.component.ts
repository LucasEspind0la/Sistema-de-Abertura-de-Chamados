import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ChamadoService } from '../../services/chamado.service';
import { Chamado } from '../../models/chamado.model';
import { Status } from '../../models/status.enum';
import { Prioridade } from '../../models/prioridade.enum';
import { Categoria } from '../../models/categoria.enum';

@Component({
  selector: 'app-form-chamado',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './form-chamado.component.html',
  styleUrls: ['./form-chamado.component.css']
})
export class FormChamadoComponent implements OnInit {

  chamadoForm!: FormGroup;
  chamadoId: number = 0;
  editando: boolean = false;
  
  statusList: string[] = Object.values(Status);
  prioridadeList: string[] = Object.values(Prioridade);
  categoriaList: string[] = Object.values(Categoria);

  constructor(
    private fb: FormBuilder,
    private chamadoService: ChamadoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
    
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.chamadoId = Number(idParam);
      this.editando = true;
      this.carregarChamado();
    }

      this.chamadoForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', Validators.required],
      prioridade: [Prioridade.MEDIA, Validators.required],
      status: [Status.ABERTO, Validators.required],
      categoria: [Categoria.OUTROS, Validators.required],  
      solicitante: ['', Validators.required],
      responsavel: ['']
    });
  }

  criarFormulario(): void {
    this.chamadoForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', Validators.required],
      prioridade: [Prioridade.MEDIA, Validators.required],
      status: [Status.ABERTO, Validators.required],
      solicitante: ['', Validators.required],
      responsavel: ['']
    });
  }

  carregarChamado(): void {
    this.chamadoService.buscarPorId(this.chamadoId).subscribe({
      next: (chamado: Chamado) => {
        this.chamadoForm.patchValue(chamado);
      },
      error: (erro: any) => {
        console.error('Erro ao carregar:', erro);
        alert('Erro ao carregar chamado');
      }
    });
  }

  salvar(): void {
    if (this.chamadoForm.invalid) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }

    const chamado: Chamado = this.chamadoForm.value;

    if (this.editando) {
      this.chamadoService.atualizar(this.chamadoId, chamado).subscribe({
        next: () => {
          alert('Chamado atualizado com sucesso!');
          this.router.navigate(['/chamados']);
        },
        error: (erro: any) => {
          console.error('Erro ao atualizar:', erro);
          alert('Erro ao atualizar. Verifique o console.');
        }
      });
    } else {
      this.chamadoService.criar(chamado).subscribe({
        next: () => {
          alert('Chamado criado com sucesso!');
          this.router.navigate(['/chamados']);
        },
        error: (erro: any) => {
          console.error('Erro ao criar:', erro);
          alert('Erro ao criar. Verifique o console.');
        }
      });
    }
  }

  voltar(): void {
    this.router.navigate(['/chamados']);
  }
  
  
}