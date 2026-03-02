# 💎 Luxury Vault - Fullstack Portfolio

![LuxuryVault Banner](<a href="https://ibb.co/chKV9LxY"><img src="https://i.ibb.co/B2HFJNwn/luxuryvault.png" alt="luxuryvault" border="0"></a>)

> **⚠️ Disclaimer**: Este é um projeto estritamente acadêmico e de portfólio, desenvolvido para fins de aprendizado de tecnologias Fullstack. O nome e os itens são ilustrativos para demonstrar competências técnicas.

---

### 🏎️ Sobre o Projeto
O **Luxury Vault** é uma plataforma de curadoria de itens de luxo, como veículos de alta performance e alta relojoaria. O sistema foi construído com uma arquitetura **Fullstack** robusta, simulando um ambiente real de estoque onde os dados são consumidos dinamicamente de um banco de dados.

---

### 🛠️ Tech Stack
* **Frontend**: `React (Vite)` para uma interface reativa.
* **Backend**: `Node.js` com `Express` para a API.
* **Database**: `MySQL` (XAMPP) para persistência de dados.
* **Estilização**: `![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)` com conceito *Stealth Wealth*.
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-00000F?style=flat-square&logo=mysql&logoColor=white) |


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
