import { useState } from 'react';
import './login.css';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    try {
      // Validação básica
      if (!email.trim()) {
        setErrorMessage('Digite seu email');
        setLoading(false);
        return;
      }

      if (!password.trim()) {
        setErrorMessage('Digite sua senha');
        setLoading(false);
        return;
      }

      if (!email.includes('@')) {
        setErrorMessage('Email inválido');
        setLoading(false);
        return;
      }

      // Simular delay de requisição
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Credenciais de teste
      const testEmail = 'admin@atrpap.com.br';
      const testPassword = 'admin123';

      if (email === testEmail && password === testPassword) {
        // Salvar token no localStorage (simples, substituir com JWT real)
        localStorage.setItem('cms_token', 'token_' + Date.now());
        localStorage.setItem('cms_user', email);
        onLogin();
      } else {
        setErrorMessage('Email ou senha incorretos');
      }
    } catch (error) {
      setErrorMessage('Erro ao fazer login. Tente novamente.');
      console.error('Erro:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-box">
          <div className="login-header">
            <h1>ATRPAP CMS</h1>
            <p>Gerenciamento de Conteúdo</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            {errorMessage && (
              <div className="login-alert">
                <span>✕</span> {errorMessage}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="form-input"
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="form-input"
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <div className="login-footer">
            <p className="test-credentials">
              <strong>Dados de Teste:</strong><br />
              Email: admin@atrpap.com.br<br />
              Senha: admin123
            </p>
          </div>
        </div>

        <div className="login-side">
          <div className="side-content">
            <h2>Bem-vindo ao CMS</h2>
            <p>Plataforma de gerenciamento de conteúdo da ATRPAP</p>
            <ul className="features-list">
              <li>✓ Gerenciar notícias</li>
              <li>✓ Organizar documentos</li>
              <li>✓ Administrar galeria</li>
              <li>✓ Controlar conteúdo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
