# VetCare API - Sistema de Gestão de Atendimentos Veterinários

Projeto desenvolvido como requisito para a **Avaliação Prática 02** da disciplina de Desenvolvimento Web. Trata-se de uma API RESTful completa focada em gerenciamento de clínicas veterinárias, aplicando autenticação segura via JSON Web Tokens (JWT) com Passport.js, segurança de cabeçalhos HTTP com Helmet e controle de autorização baseada em cargos (Role-Based Access Control - RBAC).

---

## 🚀 Tecnologias Utilizadas
* **Ambiente de Execução:** Node.js (v24.14.1)
* **Framework Web:** Express.js
* **Banco de Dados:** MySQL / MariaDB (v11.4) com Sequelize (ORM)
* **Segurança e Proteção:** Helmet (Proteção contra vulnerabilidades web comuns)
* **Autenticação:** Passport.js com Estratégia `passport-jwt` e criptografia com Bcrypt
* **Documentação Interativa:** Swagger (via `swagger-ui-express` e `swagger-autogen`)
* **Hospedagem em Nuvem:** Alwaysdata PaaS

---

## 🛡️ Destaques da Implementação

* **Arquitetura Separada por Camadas:** Divisão lógica limpa e profissional entre `Modelos`, `Controladores`, `Rotas` e `Middlewares`.
* **Segurança Robusta com Helmet:** Injeção automática de cabeçalhos de segurança HTTP configurada na raiz da aplicação.
* **Documentação Avançada Swagger:** Endpoints desacoplados visualmente em categorias (`Index`, `Usuarios`, `Pets`, `Atendimentos`) utilizando a diretiva `#swagger.tags` e schemas completos definidos em `definitions` para requests e responses (`NovoUsuario`, `LoginResposta`, `NovoAtendimento`, etc.).
* **Isolamento de Variáveis de Ambiente:** Gestão sensível de credenciais e chaves criptográficas utilizando arquivos `.env` específicos para ambiente local (WSL 2) e produção (Alwaysdata).

---

## ⚙️ Instruções de Execução Local (WSL 2 / Ubuntu)

### 1. Configuração do Ambiente e Banco de Dados
Certifique-se de ter o MySQL ativo localmente (Porta 3307 ou conforme seu setup).
Crie o arquivo `.env` na raiz do projeto com suas credenciais locais e crie o banco de dados:
```sql
CREATE DATABASE vetcare_api;
```

### 2. Instalação das Dependências
Abra o terminal do seu ambiente local na pasta raiz do projeto e execute:
```bash
npm install
```

### 3. Geração da Documentação Automatizada (Swagger)
Antes de subir o servidor, compile as definições e rotas do Swagger rodando:
```bash
npm run swagger
```

### 4. Inicialização do Servidor Local
```bash
npm start
```

Acesse a rota base local em: http://localhost:3000/


## ☁️ Endereços da Aplicação em Produção (Live Demo)
A aplicação foi implantada com sucesso no ambiente cloud da **Alwaysdata** com sincronização automática do banco de dados e está totalmente operacional nos endereços abaixo:

- ⚡ Rota Raiz da API (JSON de Status): https://wandersontimoteo-vetcare.alwaysdata.net/

- 📖 Documentação Interativa (Swagger UI): https://wandersontimoteo-vetcare.alwaysdata.net/api-docs/


## 🔐 Matriz de Credenciais e Autorização de Perfis (RBAC)

O sistema conta com sincronização automática de tabelas. Ao realizar o primeiro cadastro ou requisições, utilize os perfis abaixo no Swagger ou Postman para testar as travas do middleware de segurança:

| Perfil / Cargo | Funcionalidade Associada | Permissões Específicas no Sistema |
| :--- | :--- | :--- |
| **Administrador** (`admin`) | Gestão de Pets | Permissão exclusiva para **Cadastrar Novos Pets** (`POST /api/pets`). |
| **Recepção** (`recepcao`) | Atendimento Inicial | Permissão para **Listar Pets** (`GET /api/pets`), **Listar Atendimentos** (`GET /api/atendimentos`), **Criar Atendimentos** (`POST /api/atendimentos`) e **Buscar Atendimento por ID**. |
| **Veterinário** (`veterinario`) | Ações Clínicas | Permissão exclusiva para executar as ações do fluxo clínico: **Iniciar Atendimento** (`PUT /api/atendimentos/:id/iniciar`) e **Finalizar Atendimento** (`PUT /api/atendimentos/:id/finalizar`). |

## 👨‍💻 Desenvolvedor

<div align="center">
  <a href="https://github.com/Wanderson-A-Timoteo">
    <img src="https://github.com/Wanderson-A-Timoteo.png" width="120px;" alt="Foto de Perfil do Wanderson Timóteo no GitHub" style="border-radius: 50%;"/>
  </a>
  <br />
  <br />
  <h4>Wanderson Timóteo</h4>
    
  <a href="https://www.wandersontimoteo.com.br/" target="_blank">
    <b>🌐 Visite meu Portfólio</b>
  </a>
  &nbsp;|&nbsp;
  <a href="https://wanderson-a-timoteo.github.io/perfil-de-contato/" target="_blank">
    <b>🔗 Entre em Contato</b>
  </a>
</div>

