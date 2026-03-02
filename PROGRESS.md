# 🛠️ Log de Progressão: Luxury Vault

Este diário documenta a evolução técnica do projeto e a resolução de problemas complexos de integração.

### 📅 Dia 02/03/2026: O Desafio da Conectividade
**Status**: Concluído ✅

#### 🔍 O Problema
O sistema apresentou dois "vazamentos" críticos durante a integração:
1.  **Variáveis Fantasmas**: O servidor Node.js acusava `injecting env (0)`, resultando em erro de acesso ao MySQL (`Access denied`).
2.  **Imagens Quebradas**: Os cards renderizavam o texto, mas as fotos retornavam erro 404 ou ficavam invisíveis no layout.

#### 🛠️ O Reparo (Mão na Massa)
* **Refatoração do `.env`**: Diagnostiquei que o `dotenv` falhava ao localizar o arquivo por caminhos relativos no Windows. A solução foi forçar o carregamento via caminho absoluto usando `path.resolve(__dirname, '.env')`.
* **Limpeza de Componentes**: Identifiquei e removi arquivos duplicados (`ItemCards.jsx`) que geravam conflitos de estilização e importação.
* **Ajuste de Lataria (CSS)**: Implementei alturas fixas nos containers e `object-fit: cover`, garantindo a integridade visual das imagens de alta resolução.

---

## 🔬 Desafios Superados (Análise Técnica)

### 1. Falha Crítica na Conexão MySQL
* **Causa**: Configuração inadequada do `dotenv` em ambiente de desenvolvimento local.
* **Solução**: Implementação de logs de depuração para verificar o estado das variáveis `process.env` e ajuste na ordem de carregamento dos módulos do servidor.

### 2. Tratamento de Erros de Renderização
* **Causa**: Links externos de imagens (Unsplash) instáveis ou removidos (Erro 404).
* **Solução**: Desenvolvi um sistema de *fallback* dinâmico no React utilizando o evento `onError`, substituindo automaticamente links quebrados por placeholders elegantes.
