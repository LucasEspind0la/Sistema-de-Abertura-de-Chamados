import { Prioridade } from './prioridade.enum';
import { Status } from './status.enum';
import { Categoria } from './categoria.enum'; 

export interface Chamado {
  id?: number;
  titulo: string;
  descricao: string;
  prioridade: Prioridade;
  status: Status;
  categoria: Categoria; 
  solicitante: string;
  responsavel?: string;
  dataCriacao?: string;
  dataFechamento?: string;
}