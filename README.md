
🛠️ Sistema de Controle de Chamados
Sistema completo de gerenciamento de chamados técnicos, desenvolvido com Java Spring Boot no backend e Angular no frontend.
 Java 
 Spring 
 Angular 
 PostgreSQL 
 License 
📸 Screenshots
(Adicione prints das telas aqui)
🚀 Tecnologias
Backend
Table
Tecnologia	Versão
Java	17
Spring Boot	3.2
Spring Data JPA	-
PostgreSQL	12+
Maven	-
Frontend
Table
Tecnologia	Versão
Angular	19
TypeScript	5+
Bootstrap	5
Bootstrap Icons	-
Chart.js	-
📋 Funcionalidades

    ✅ CRUD completo de chamados
    ✅ Filtros por Status, Prioridade e Categoria
    ✅ Dashboard com estatísticas
    ✅ Login simples (autenticação básica)
    🔄 Gráficos (em desenvolvimento)
    🔄 Exportar PDF/Excel (em desenvolvimento)
    🔄 Deploy online (em desenvolvimento)

📁 Estrutura do Projeto
plain

sistema-chamados/
├── backend/                  # API REST Spring Boot
│   ├── src/main/java/com/lucas/chamados/
│   │   ├── config/           # Configurações (CORS, etc)
│   │   ├── controller/       # Endpoints REST
│   │   ├── dto/              # Objetos de transferência
│   │   ├── model/            # Entidades JPA
│   │   ├── repository/       # Acesso ao banco
│   │   └── service/          # Regras de negócio
│   ├── src/main/resources/
│   │   └── application.properties
│   └── pom.xml
├── frontend/                 # Aplicação Angular
│   ├── src/app/
│   │   ├── components/       # Telas (Dashboard, Lista, Form, Login)
│   │   ├── models/           # Interfaces e Enums
│   │   └── services/         # Chamadas HTTP
│   ├── angular.json
│   └── package.json
└── README.md

🖥️ Como Rodar o Projeto
Pré-requisitos

    Java 17
    Node.js 18+
    PostgreSQL
    Maven (ou use o wrapper ./mvnw)

1. Clone o repositório
bash

git clone https://github.com/SEU_USUARIO/sistema-chamados.git
cd sistema-chamados

2. Configure o Banco de Dados
Crie o banco chamados_db no PostgreSQL:
sql

CREATE DATABASE chamados_db;

Configure as credenciais em:
plain

backend/src/main/resources/application.properties

Exemplo:
properties

spring.datasource.url=jdbc:postgresql://localhost:5432/chamados_db
spring.datasource.username=postgres
spring.datasource.password=SUA_SENHA
spring.jpa.hibernate.ddl-auto=update

3. Rode o Backend
bash

cd backend
./mvnw spring-boot:run

Acesse: http://localhost:8080
4. Rode o Frontend
bash

cd frontend
npm install
ng serve

Acesse: http://localhost:4200
🔑 Login de Teste
Table
Campo	Valor
Email	admin@chamados.com
Senha	123456
📡 Endpoints da API
Table
Método	Endpoint	Descrição
GET	/api/chamados	Listar todos os chamados
POST	/api/chamados	Criar novo chamado
PUT	/api/chamados/{id}	Atualizar chamado
DELETE	/api/chamados/{id}	Deletar chamado
GET	/api/chamados/status/{status}	Filtrar por status
GET	/api/chamados/prioridade/{prioridade}	Filtrar por prioridade
GET	/api/chamados/categoria/{categoria}	Filtrar por categoria
POST	/api/auth/login	Autenticar usuário
🛠️ Funcionalidades por Etapa
Table
Etapa	Descrição	Status
1	CRUD de Chamados	✅ Concluído
2	Campo Categoria	✅ Concluído
3	Login Simples	✅ Concluído
4	Gráficos no Dashboard	🔄 Em desenvolvimento
5	Exportar PDF/Excel	🔄 Em desenvolvimento
6	Deploy Online	🔄 Em desenvolvimento
🐛 Troubleshooting
Erro: "Conexão recusada" no frontend

    Verifique se o backend está rodando em http://localhost:8080
    Confirme que o CORS está configurado no ChamadoController

Erro: "column categoria does not exist"

    O banco precisa ser atualizado. O Hibernate faz isso automaticamente com ddl-auto=update
    Ou delete a tabela e deixe o Hibernate recriar

Erro: "Failed to resolve import zone.js"

    Instale: npm install zone.js

👤 Autor
Lucas Espindola

    💼 LinkedIn
    💻 GitHub

📝 Licença
Este projeto está sob a licença MIT.
🙏 Agradecimentos
Projeto desenvolvido para portfólio pessoal e aprendizado de tecnologias full-stack.
