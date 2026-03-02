import { useState, useEffect } from 'react';
import ItemCard from './components/ItemCard';
import './components/App.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/items')
      .then(response => response.json())
      .then(data => {
        setItems(data);
        console.log("Itens carregados do cofre:", data);
      })
      .catch(err => console.error("Erro ao buscar itens:", err));
  }, []);

  return (
    <div className="container">
      <h1 className="main-title">Luxury Vault</h1>
      <div className="grid">
        {items.map(item => (
          <ItemCard 
            key={item.id}
            type={item.type}
            brand={item.brand}
            model={item.model}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;