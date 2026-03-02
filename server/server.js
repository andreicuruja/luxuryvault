// Força o carregamento do .env localizado na raiz do projeto (../.env)
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

// Debug: Verificar se as variáveis foram carregadas
console.log('Tentando conectar com o usuário:', process.env.DB_USER || 'NÃO DEFINIDO');
console.log('Banco de dados alvo:', process.env.DB_NAME || 'NÃO DEFINIDO');

const app = express();
const PORT = process.env.PORT || 3001;

// Configuração de Middlewares
app.use(cors());
app.use(express.json());

// Configuração do Pool de Conexão MySQL
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Rotas
app.get('/api/items', (req, res) => {
  console.log('GET /api/items solicitado ao banco de dados');
  const sqlQuery = 'SELECT * FROM luxury_items';

  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.error("Erro ao buscar no banco de dados:", err);
      return res.status(500).json({ error: "Falha ao buscar itens no banco de dados." });
    }
    res.json(results);
  });
});

// Inicialização do Servidor
app.listen(PORT, () => {
  console.log(`\n✅ Servidor rodando na porta ${PORT}`);
  console.log(`🔗 API disponível em: http://localhost:${PORT}/api/items`);
  db.getConnection(err => err ? console.error('❌ Falha na conexão com o banco de dados:', err.message) : console.log('✅ Conexão com o banco de dados estabelecida.'));
}); 