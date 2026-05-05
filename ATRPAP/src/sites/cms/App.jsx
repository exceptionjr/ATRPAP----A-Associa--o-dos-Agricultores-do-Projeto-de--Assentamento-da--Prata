import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login/login';
import CadastrarNoticia from './components/cadastrarNoticia/cadastrarNoticia';
import './App.css';

// Componente Dashboard (página inicial após login)
function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard - Gerenciamento de Conteúdo</h1>
        <p>Bem-vindo ao painel de administração da ATRPAP</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="card-icon">📰</div>
          <h3>Notícias</h3>
          <p>Criar, editar e gerenciar notícias do site</p>
          <a href="/cadastrar-noticia" className="card-link">
            Acessar →
          </a>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">📁</div>
          <h3>Documentos</h3>
          <p>Gerenciar documentos e arquivos</p>
          <a href="#" className="card-link">
            Acessar →
          </a>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">🖼️</div>
          <h3>Galeria</h3>
          <p>Organizar fotos e imagens</p>
          <a href="#" className="card-link">
            Acessar →
          </a>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">⚙️</div>
          <h3>Configurações</h3>
          <p>Configurar informações do site</p>
          <a href="#" className="card-link">
            Acessar →
          </a>
        </div>
      </div>

      <div className="dashboard-stats">
        <h2>Estatísticas Rápidas</h2>
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-number">12</div>
            <div className="stat-label">Notícias</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">28</div>
            <div className="stat-label">Documentos</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">145</div>
            <div className="stat-label">Imagens</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente NavbarCMS
function NavbarCMS({ isLoggedIn, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="cms-navbar">
      <div className="cms-navbar-container">
        <div className="cms-navbar-brand">
          <h2>ATRPAP CMS</h2>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {isLoggedIn && (
          <ul className={`cms-navbar-menu ${menuOpen ? 'active' : ''}`}>
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/cadastrar-noticia">Nova Notícia</a>
            </li>
            <li>
              <a href="#" className="logout-btn" onClick={onLogout}>
                Sair
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

// App Principal
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="cms-page">
      <NavbarCMS isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      
      <main className="cms-main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cadastrar-noticia" element={<CadastrarNoticia />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
