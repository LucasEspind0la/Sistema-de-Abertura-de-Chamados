import { Categoria } from './categoria.enum';
import { Prioridade } from './prioridade.enum';
import { Status } from './status.enum';
import { Prestador } from './prestador.model';

export interface Chamado {
  id?: number;
  titulo: string;
  descricao: string;
  categoria: Categoria;
  prioridade: Prioridade;
  status?: Status;
  responsavel?: string;
  solicitante: string; 
  
  // NOVO: prestador
  prestador?: Prestador;
  prestadorId?: number;  // para enviar no POST
  
  dataCriacao?: string;
  dataFechamento?: string;
}