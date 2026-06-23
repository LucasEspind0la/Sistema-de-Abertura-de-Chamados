import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chamado } from '../models/chamado.model';
import { Status } from '../models/status.enum';
import { Prioridade } from '../models/prioridade.enum';
import { Categoria } from '../models/categoria.enum'; 

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {

  private apiUrl = 'http://localhost:8080/api/chamados';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<Chamado> {
    return this.http.get<Chamado>(`${this.apiUrl}/${id}`);
  }

  criar(chamado: Chamado): Observable<Chamado> {
    return this.http.post<Chamado>(this.apiUrl, chamado);
  }

  atualizar(id: number, chamado: Chamado): Observable<Chamado> {
    return this.http.put<Chamado>(`${this.apiUrl}/${id}`, chamado);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  filtrarPorStatus(status: Status): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(`${this.apiUrl}/status/${status}`);
  }

  filtrarPorPrioridade(prioridade: Prioridade): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(`${this.apiUrl}/prioridade/${prioridade}`);
  }

  
  filtrarPorCategoria(categoria: Categoria): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(`${this.apiUrl}/categoria/${categoria}`);
  }
}