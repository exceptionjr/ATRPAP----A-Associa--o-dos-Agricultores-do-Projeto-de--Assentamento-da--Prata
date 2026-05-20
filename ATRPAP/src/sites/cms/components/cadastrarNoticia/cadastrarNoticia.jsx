import { useState, useRef } from 'react';
import './cadastrarNoticia.css';

export default function CadastrarNoticia() {
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    categoria: '',
    data: new Date().toISOString().split('T')[0],
    titulo: '',
    resumo: '',
    imagem: null,
    imagemPreview: null,
  });

  const categorias = [
    'Assinaturas',
    'Construção',
    'Educação',
    'Saúde',
    'Infraestrutura',
    'Sustentabilidade',
    'Eventos',
    'Geral',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validar tipo de arquivo
      if (!file.type.startsWith('image/')) {
        setErrorMessage('Por favor, selecione um arquivo de imagem válido');
        return;
      }

      // Validar tamanho (máx 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage('A imagem não pode ter mais de 5MB');
        return;
      }

      // Criar preview
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData((prev) => ({
          ...prev,
          imagem: file,
          imagemPreview: event.target.result,
        }));
        setErrorMessage('');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const removeImage = () => {
    setFormData((prev) => ({
      ...prev,
      imagem: null,
      imagemPreview: null,
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const validateForm = () => {
    if (!formData.categoria.trim()) {
      setErrorMessage('Selecione uma categoria');
      return false;
    }
    if (!formData.data) {
      setErrorMessage('Selecione uma data');
      return false;
    }
    if (!formData.titulo.trim()) {
      setErrorMessage('O título é obrigatório');
      return false;
    }
    if (formData.titulo.trim().length < 5) {
      setErrorMessage('O título deve ter pelo menos 5 caracteres');
      return false;
    }
    if (!formData.resumo.trim()) {
      setErrorMessage('O resumo é obrigatório');
      return false;
    }
    if (formData.resumo.trim().length < 10) {
      setErrorMessage('O resumo deve ter pelo menos 10 caracteres');
      return false;
    }
    if (!formData.imagem) {
      setErrorMessage('Selecione uma imagem para a notícia');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Simular envio de dados (substituir com API real depois)
      const noticiaData = {
        categoria: formData.categoria,
        data: new Date(formData.data).toLocaleDateString('pt-BR'),
        titulo: formData.titulo,
        resumo: formData.resumo,
        imagem: formData.imagemPreview,
        criadaEm: new Date().toISOString(),
      };

      // Aqui você pode enviar para um backend ou salvar em localStorage
      console.log('Notícia a ser salva:', noticiaData);

      // Exemplo com localStorage (remover quando tiver backend)
      const noticiasArmazenadas = JSON.parse(localStorage.getItem('noticias') || '[]');
      noticiasArmazenadas.push(noticiaData);
      localStorage.setItem('noticias', JSON.stringify(noticiasArmazenadas));

      setSuccessMessage('Notícia cadastrada com sucesso!');
      
      // Resetar formulário
      setFormData({
        categoria: '',
        data: new Date().toISOString().split('T')[0],
        titulo: '',
        resumo: '',
        imagem: null,
        imagemPreview: null,
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

      // Limpar mensagem de sucesso após 3 segundos
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      setErrorMessage('Erro ao cadastrar notícia. Tente novamente.');
      console.error('Erro:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      categoria: '',
      data: new Date().toISOString().split('T')[0],
      titulo: '',
      resumo: '',
      imagem: null,
      imagemPreview: null,
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setErrorMessage('');
    setSuccessMessage('');
  };

  return (
    <div className="cadastrar-noticia-container">
      <div className="cadastrar-noticia-wrapper">
        <div className="cadastrar-noticia-header">
          <h1>Cadastrar Notícia</h1>
          <p>Preencha os campos abaixo para criar uma nova notícia</p>
        </div>

        {successMessage && (
          <div className="alert alert-success">
            <span>✓</span> {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="alert alert-error">
            <span>✕</span> {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="cadastrar-noticia-form">
          {/* Categoria e Data - lado a lado */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="categoria">Categoria *</label>
              <select
                id="categoria"
                name="categoria"
                value={formData.categoria}
                onChange={handleInputChange}
                className="form-input"
              >
                <option value="">Selecione uma categoria</option>
                {categorias.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="data">Data da Notícia *</label>
              <input
                id="data"
                type="date"
                name="data"
                value={formData.data}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
          </div>

          {/* Título */}
          <div className="form-group">
            <label htmlFor="titulo">Título da Notícia *</label>
            <input
              id="titulo"
              type="text"
              name="titulo"
              value={formData.titulo}
              onChange={handleInputChange}
              placeholder="Ex: Assinaturas de contratos de linhas de crédito cedidas pelo Incra"
              className="form-input"
              maxLength={200}
            />
            <span className="char-count">
              {formData.titulo.length}/200
            </span>
          </div>

          {/* Resumo */}
          <div className="form-group">
            <label htmlFor="resumo">Resumo/Descrição *</label>
            <textarea
              id="resumo"
              name="resumo"
              value={formData.resumo}
              onChange={handleInputChange}
              placeholder="Ex: ATRPAP formaliza novas linhas de crédito para projetos de infraestrutura e produção no Assentamento Prata."
              className="form-textarea"
              rows={5}
              maxLength={500}
            />
            <span className="char-count">
              {formData.resumo.length}/500
            </span>
          </div>

          {/* Imagem */}
          <div className="form-group">
            <label>Imagem da Notícia *</label>
            <div className="image-upload-area">
              {formData.imagemPreview ? (
                <div className="image-preview-container">
                  <img
                    src={formData.imagemPreview}
                    alt="Preview"
                    className="image-preview"
                  />
                  <button
                    type="button"
                    className="remove-image-btn"
                    onClick={removeImage}
                    title="Remover imagem"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="upload-button"
                  onClick={handleImageClick}
                >
                  <span className="upload-icon">📷</span>
                  <span className="upload-text">
                    Clique para selecionar uma imagem
                  </span>
                  <span className="upload-hint">ou arraste uma imagem aqui</span>
                </button>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="file-input"
                style={{ display: 'none' }}
              />
              <p className="image-hint">
                Formatos aceitos: JPG, PNG, GIF, WebP | Tamanho máximo: 5MB
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="form-actions">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Salvando...' : 'Cadastrar Notícia'}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleReset}
              disabled={loading}
            >
              Limpar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
