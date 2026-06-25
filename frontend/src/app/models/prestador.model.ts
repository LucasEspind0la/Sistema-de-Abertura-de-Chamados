import { Categoria } from './categoria.enum';

export interface Prestador {
  id?: number;
  nome: string;
  empresa: string;
  cnpj?: string;
  telefone: string;
  email?: string;
  especialidade: Categoria;
  status: StatusPrestador;
  observacoes?: string;
  dataCadastro?: string;
}

export enum StatusPrestador {
  DISPONIVEL = 'DISPONIVEL',
  OCUPADO = 'OCUPADO',
  INATIVO = 'INATIVO'
}