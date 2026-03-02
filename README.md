# 💎 Luxury Vault - Fullstack Portfolio

> **⚠️ Disclaimer**: Este é um projeto estritamente acadêmico e de portfólio, desenvolvido para fins de aprendizado de tecnologias Fullstack. O nome e os itens são ilustrativos para demonstrar competências técnicas.

---

### 🏎️ Sobre o Projeto
O **Luxury Vault** é uma plataforma de curadoria de itens de luxo, como veículos de alta performance e alta relojoaria. O sistema foi construído com uma arquitetura **Fullstack** robusta, simulando um ambiente real de estoque onde os dados são consumidos dinamicamente de um banco de dados.

---

### 🛠️ Tech Stack
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-00000F?style=flat-square&logo=mysql&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

* **Frontend**: `React (Vite)` para uma interface reativa e moderna.
* **Backend**: `Node.js` com `Express` para a construção da API RESTful.
* **Database**: `MySQL` (XAMPP) para persistência e gerenciamento de dados reais.
* **Estilização**: `CSS3` seguindo o conceito *Stealth Wealth* (minimalismo de luxo).

---

### 🚀 Funcionalidades Técnicas
* **Integração Real**: Consumo de API utilizando os hooks `fetch` e `useEffect` do React.
* **Segurança**: Gerenciamento de credenciais sensíveis via variáveis de ambiente (`.env`).
* **Robustez**: Tratamento de erros de renderização (*Image Fallback*) e logs detalhados de conexão.
* **Clean Code**: Organização modular de componentes e separação rigorosa de responsabilidades.

---

### 🔧 Setup do Motor (Como Rodar)

1.  **Configurar Banco de Dados**:
    Importe o script SQL no seu **phpMyAdmin** para criar a tabela `luxury_items`.

2.  **Variáveis de Ambiente**:
    Crie um arquivo `.env` na pasta `/server`:
    ```env
    DB_HOST=localhost
    DB_USER=root
    DB_PASS=suasenha
    DB_NAME=luxuryvault
    ```

3.  **Instalação e Execução**:
    ```bash
    # Terminal 1 (Server)
    cd server && npm install && node server.js

    # Terminal 2 (Client)
    cd client && npm install && npm run dev
    ```
