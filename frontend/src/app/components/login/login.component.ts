import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/login.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  senha: string = '';
  erro: string = '';
  carregando: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  fazerLogin(): void {
    this.erro = '';
    this.carregando = true;

    const credentials: LoginRequest = {
      email: this.email,
      senha: this.senha
    };

    this.authService.login(credentials).subscribe({
      next: (resposta) => {
        this.carregando = false;
        if (resposta.sucesso) {
          this.authService.setLoginStatus(true, resposta.token);
          this.router.navigate(['/dashboard']);
        } else {
          this.erro = resposta.mensagem;
        }
      },
      error: (erro) => {
        this.carregando = false;
        this.erro = 'Erro ao conectar com o servidor. Tente novamente.';
        console.error(erro);
      }
    });
  }
}