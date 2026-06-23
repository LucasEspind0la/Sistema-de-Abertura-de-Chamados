export interface LoginRequest {
  email: string;
  senha: string;
}

export interface LoginResponse {
  sucesso: boolean;
  mensagem: string;
  token: string;
}