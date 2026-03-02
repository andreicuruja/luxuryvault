💎 Luxury Vault - Fullstack Portfolio
Disclaimer: Este é um projeto estritamente acadêmico e de portfólio, desenvolvido para fins de aprendizado de tecnologias Fullstack. O nome e os itens são ilustrativos para demonstrar competências técnicas.

🏎️ Sobre o Projeto
O Luxury Vault é uma plataforma de curadoria de itens de luxo, como veículos de alta performance e alta relojoaria. O sistema foi construído com uma arquitetura Fullstack robusta, simulando um ambiente real de estoque onde os dados são consumidos diretamente de um banco de dados.

🛠️ Tecnologias Utilizadas
O projeto utiliza o que há de mais moderno no ecossistema JavaScript:

Frontend: React (Vite) para uma interface rápida e reativa.

Backend: Node.js com Express para a construção da API.

Banco de Dados: MySQL (via XAMPP) para persistência de dados real.

Design: CSS customizado com foco na estética Stealth Wealth (minimalismo luxuoso).

🚀 Funcionalidades e Aprendizados Técnicos
Durante o desenvolvimento, foram aplicados conceitos avançados de engenharia de software:

Integração de Dados: Consumo de API RESTful utilizando fetch e useEffect no React.

Gerenciamento de Ambiente: Uso de variáveis de ambiente (.env) para segurança de credenciais do banco.

Tratamento de Erros: Implementação de fallbacks para imagens (404) e validação de conexão com o banco.

Componentização: Estrutura organizada de componentes reutilizáveis e estilização isolada.

🔧 Como Rodar o Motor (Setup)
Banco de Dados: Importe o script SQL no seu phpMyAdmin para criar a tabela luxury_items.

Variáveis de Ambiente: Configure o arquivo .env na pasta /server com suas credenciais do MySQL.

Instalação:

Bash
# Na pasta server e na pasta client
npm install
Execução:

Bash
# No terminal do server
node server.js
# No terminal do client
npm run dev
📝 Diário de Bordo e Evolução
Este projeto documenta minha transição para o desenvolvimento Fullstack, aplicando a mesma precisão e atenção aos detalhes que utilizo na mecânica automotiva.

Desafio: Depuração de conectividade entre Node e MySQL devido a permissões de acesso.

Solução: Refatoração do carregamento do dotenv para caminhos absolutos e ajuste de pools de conexão.
