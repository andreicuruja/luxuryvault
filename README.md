# 💎 Luxury Vault - Fullstack Portfolio

> **⚠️ Disclaimer**: Este é um projeto estritamente acadêmico e de portfólio, desenvolvido para fins de aprendizado de tecnologias Fullstack. O nome e os itens são ilustrativos para demonstrar competências técnicas.

---

### 🏎️ Sobre o Projeto
O **Luxury Vault** é uma plataforma de curadoria de itens de luxo, como veículos de alta performance e alta relojoaria. O sistema foi construído com uma arquitetura **Fullstack** robusta, simulando um ambiente real de estoque onde os dados são consumidos dinamicamente de um banco de dados.

---

### 🛠️ Tech Stack
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-00000F?style=flat-square&logo=mysql&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
* **Frontend**: `React (Vite)` para uma interface reativa.
* **Backend**: `Node.js` com `Express` para a API.
* **Database**: `MySQL` (XAMPP) para persistência de dados.
* **Estilização**: `CSS3` com conceito *Stealth Wealth*.

---

### 🚀 Funcionalidades Técnicas
* **Integração Real**: Consumo de API RESTful utilizando `fetch` e `useEffect`.
* **Segurança**: Gerenciamento de credenciais via variáveis de ambiente (`.env`).
* **Robustez**: Tratamento de erros de renderização (*Image Fallback*) e logs de conexão.
* **Clean Code**: Organização modular de componentes e separação de responsabilidades.

---

### 🔧 Setup do Motor (Como Rodar)

1. **Configurar Banco de Dados**:
   Importe o script SQL no seu **phpMyAdmin** para criar a tabela `luxury_items`.

2. **Variáveis de Ambiente**:
   Crie um arquivo `.env` na pasta `/server`:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=suasenha
   DB_NAME=luxuryvault
Instalação e Execução:

Bash
# Terminal 1 (Server)
cd server && npm install && node server.js

# Terminal 2 (Client)
cd client && npm install && npm run dev

---

### 📓 2. Diário de Bordo: `PROGRESS.md`
*Este arquivo serve para mostrar ao recrutador como você resolve problemas sob pressão.*

# 🛠️ Log de Progressão: Luxury Vault

### 📅 Dia 02/03/2026: O Desafio da Conectividade
**Status**: Concluído ✅

#### 🔍 O Problema
Hoje o sistema apresentou dois "vazamentos" críticos:
1.  **Variáveis Fantasmas**: O servidor Node.js acusava `injecting env (0)`, resultando em erro de acesso ao MySQL (`Access denied`).
2.  **Imagens Quebradas**: Os cards renderizavam o texto, mas as fotos (Porsche/AP) retornavam erro 404 ou ficavam com altura 0px.

#### 🛠️ O Reparo (Mão na Massa)
* **Refatoração do `.env`**: Descobri que o `dotenv` não estava encontrando o arquivo pelo caminho relativo. Forcei o carregamento usando `path.resolve(__dirname, '.env')` e limpei as redundâncias nos arquivos de configuração.
* **Limpeza de Componentes**: Removi arquivos duplicados (`ItemCards.jsx` vs `ItemCard.jsx`) que estavam causando conflitos de estilo no Vite.
* **Ajuste de Lataria (CSS)**: Defini alturas fixas para os containers de imagem e implementei o `object-fit: cover`, garantindo que as fotos apareçam sem distorção.

#### 💡 Aprendizado do Dia
No desenvolvimento Fullstack, assim como na mecânica, um fio solto (caminho de arquivo errado) pode parar o motor inteiro. A ordem de carregamento dos módulos e a limpeza de arquivos obsoletos são fundamentais para manter o sistema rodando "redondo".
