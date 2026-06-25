import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prestador } from '../models/prestador.model';
import { Categoria } from '../models/categoria.enum';
import { StatusPrestador } from '../models/prestador.model';

@Injectable({
  providedIn: 'root'
})
export class PrestadorService {

  private apiUrl = 'http://localhost:8080/api/prestadores';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Prestador[]> {
    return this.http.get<Prestador[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<Prestador> {
    return this.http.get<Prestador>(`${this.apiUrl}/${id}`);
  }

  criar(prestador: Prestador): Observable<Prestador> {
    return this.http.post<Prestador>(this.apiUrl, prestador);
  }

  atualizar(id: number, prestador: Prestador): Observable<Prestador> {
    return this.http.put<Prestador>(`${this.apiUrl}/${id}`, prestador);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  filtrarPorEspecialidade(especialidade: Categoria): Observable<Prestador[]> {
    return this.http.get<Prestador[]>(`${this.apiUrl}/especialidade/${especialidade}`);
  }

  filtrarPorStatus(status: StatusPrestador): Observable<Prestador[]> {
    return this.http.get<Prestador[]>(`${this.apiUrl}/status/${status}`);
  }

  listarDisponiveis(especialidade: Categoria): Observable<Prestador[]> {
    return this.http.get<Prestador[]>(`${this.apiUrl}/disponiveis/${especialidade}`);
  }
}