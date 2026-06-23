Sistema de Controle de Chamados
Aplicação full-stack para gerenciamento de chamados técnicos, desenvolvida com Java Spring Boot e Angular.
Tecnologias
Backend: Java 17 | Spring Boot 3.2 | Spring Data JPA | PostgreSQL | Maven
Frontend: Angular 19 | TypeScript | Bootstrap 5 | Bootstrap Icons
Funcionalidades

    CRUD completo de chamados
    Filtros por status, prioridade e categoria
    Dashboard com estatísticas
    Login com autenticação básica
    Gráficos (em desenvolvimento)
    Exportação de relatórios (em desenvolvimento)

Como Rodar
Pré-requisitos

    Java 17
    Node.js 18+
    PostgreSQL

Backend
bash

cd backend
./mvnw spring-boot:run

API: http://localhost:8080
Frontend
bash

cd frontend
npm install
ng serve

Aplicação: http://localhost:4200
Banco de Dados
sql

CREATE DATABASE chamados_db;

Configure em backend/src/main/resources/application.properties
Login de Teste

    Email: admin@chamados.com
    Senha: 123456

API Endpoints
Table
Método	Endpoint	Descrição
GET	/api/chamados	Listar todos
POST	/api/chamados	Criar
PUT	/api/chamados/{id}	Atualizar
DELETE	/api/chamados/{id}	Deletar
POST	/api/auth/login	Login
Autor
Lucas Espindola

    LinkedIn: https://www.linkedin.com/in/lucas-espindola/
    GitHub: https://github.com/LucasEspind0la

Licença: MIT
