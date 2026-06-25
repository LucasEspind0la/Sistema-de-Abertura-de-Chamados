import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chamado } from '../models/chamado.model';
import { Prestador } from '../models/prestador.model';
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

  // === FILTROS (já existem) ===
  filtrarPorStatus(status: string): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(`${this.apiUrl}/status/${status}`);
  }

  filtrarPorPrioridade(prioridade: string): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(`${this.apiUrl}/prioridade/${prioridade}`);
  }

  filtrarPorCategoria(categoria: string): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(`${this.apiUrl}/categoria/${categoria}`);
  }

  // === NOVO: buscar prestadores disponíveis por categoria ===
  listarPrestadoresDisponiveis(categoria: Categoria): Observable<Prestador[]> {
    return this.http.get<Prestador[]>(`${this.apiUrl}/disponiveis/${categoria}`);
  }

  
}