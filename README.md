🛠️ Sistema de Controle de Chamados
<div align="center">
https://adoptium.net
https://spring.io/projects/spring-boot
https://angular.io
https://postgresql.org
LICENSE
Sistema completo de gerenciamento de chamados técnicos
Desenvolvido com Java Spring Boot + Angular
🚀 Como Rodar • 📸 Screenshots • 📡 API • 👤 Autor
</div>
📋 Sobre o Projeto
Este sistema foi desenvolvido para demonstrar habilidades full-stack em um cenário real de gestão de chamados técnicos. Ideal para portfólio de desenvolvedor Java/Angular.
✨ Funcionalidades Principais
Table
Módulo	Descrição	Status
🎫 CRUD de Chamados	Criar, listar, editar e excluir chamados	✅ Concluído
🔍 Filtros Avançados	Por status, prioridade e categoria	✅ Concluído
📊 Dashboard	Estatísticas em tempo real	✅ Concluído
🔐 Autenticação	Login com controle de acesso	✅ Concluído
📈 Gráficos	Visualização de dados (Chart.js)	🔄 Em desenvolvimento
📄 Relatórios	Exportação PDF/Excel	🔄 Em desenvolvimento
🌐 Deploy	Publicação online	🔄 Em desenvolvimento
🚀 Tecnologias
Backend — Java Spring Boot
Table
Tecnologia	Versão	Descrição
Java	17	Linguagem principal
Spring Boot	3.2	Framework web
Spring Data JPA	-	Acesso ao banco de dados
PostgreSQL	12+	Banco de dados relacional
Maven	-	Gerenciamento de dependências
Lombok	-	Redução de boilerplate
Frontend — Angular
Table
Tecnologia	Versão	Descrição
Angular	19	Framework SPA
TypeScript	5+	Tipagem estática
Bootstrap	5	Estilização responsiva
Bootstrap Icons	-	Ícones vetoriais
Chart.js	-	Gráficos interativos
RxJS	-	Programação reativa


Table
🏠 Login	📊 Dashboard	📝 Lista de Chamados
(adicione print)	(adicione print)	(adicione print)
</div>


📁 Arquitetura do Projeto
plain

sistema-chamados/
├── 📂 backend/                 # API REST (Spring Boot)
│   ├── 📂 src/main/java/com/lucas/chamados/
│   │   ├── 📂 config/          # CORS, segurança
│   │   ├── 📂 controller/      # Endpoints REST
│   │   ├── 📂 dto/             # Objetos de transferência
│   │   ├── 📂 model/           # Entidades JPA
│   │   ├── 📂 repository/      # Spring Data JPA
│   │   └── 📂 service/         # Regras de negócio
│   └── 📄 pom.xml
│
├── 📂 frontend/                # Aplicação Web (Angular)
│   ├── 📂 src/app/
│   │   ├── 📂 components/      # Telas (Dashboard, Lista, Form)
│   │   ├── 📂 models/          # Interfaces TypeScript
│   │   └── 📂 services/        # Chamadas HTTP
│   └── 📄 angular.json
│
└── 📄 README.md

🖥️ Como Rodar
Pré-requisitos

    ☕ Java 17+
    🟢 Node.js 18+
    🐘 PostgreSQL
    📦 Maven (ou use ./mvnw)

1️⃣ Clone o repositório
bash

git clone https://github.com/LucasEspind0la/Sistema-de-Abertura-de-Chamados.git
cd Sistema-de-Abertura-de-Chamados

2️⃣ Configure o Banco de Dados
sql

-- Crie o banco no PostgreSQL
CREATE DATABASE chamados_db;

Edite backend/src/main/resources/application.properties:
properties

spring.datasource.url=jdbc:postgresql://localhost:5432/chamados_db
spring.datasource.username=postgres
spring.datasource.password=SUA_SENHA
spring.jpa.hibernate.ddl-auto=update

3️⃣ Inicie o Backend
bash

cd backend
./mvnw spring-boot:run

🟢 API disponível em: http://localhost:8080
4️⃣ Inicie o Frontend
bash

cd frontend
npm install
ng serve

🟢 Aplicação disponível em: http://localhost:4200
🔑 Credenciais de Teste
Table
Campo	Valor
📧 Email	admin@chamados.com
🔒 Senha	123456
📡 Endpoints da API
Chamados
Table
Método	Endpoint	Descrição
GET	/api/chamados	Listar todos
POST	/api/chamados	Criar novo
PUT	/api/chamados/{id}	Atualizar
DELETE	/api/chamados/{id}	Deletar
GET	/api/chamados/status/{status}	Filtrar por status
GET	/api/chamados/prioridade/{prioridade}	Filtrar por prioridade
GET	/api/chamados/categoria/{categoria}	Filtrar por categoria
Autenticação
Table
Método	Endpoint	Descrição
POST	/api/auth/login	Login de usuário
🐛 Troubleshooting
<details>
<summary><b>Erro: "Conexão recusada" no frontend</b></summary>

    Verifique se o backend está rodando: curl http://localhost:8080/api/chamados
    Confirme que o CORS está configurado no ChamadoController

</details>
<details>
<summary><b>Erro: "column categoria does not exist"</b></summary>

    O Hibernate atualiza o banco automaticamente com ddl-auto=update
    Ou execute: DROP TABLE chamados; e reinicie o backend

</details>
<details>
<summary><b>Erro: "Failed to resolve import zone.js"</b></summary>
bash

cd frontend
npm install zone.js

</details>
🗺️ Roadmap

    [x] CRUD de chamados
    [x] Filtros por status, prioridade e categoria
    [x] Dashboard com estatísticas
    [x] Login simples
    [ ] Gráficos interativos (Chart.js)
    [ ] Exportação de relatórios (PDF/Excel)
    [ ] Deploy em produção (Render + Vercel)
    [ ] Notificações por e-mail

👤 Autor
<div align="center">
Lucas Espindola
💼 LinkedIn • 💻 GitHub
Desenvolvedor Java | Angular | Apaixonado por tecnologia e soluções que fazem a diferença
</div>
📝 Licença
Este projeto está sob a licença MIT.
