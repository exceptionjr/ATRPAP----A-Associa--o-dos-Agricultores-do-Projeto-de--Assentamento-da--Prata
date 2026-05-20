# ATRPAP - Múltiplos Sites

Esta aplicação possui dois sites separados: **Site Público** e **CMS (Gerenciamento de Conteúdo)**.

## 🚀 Como Executar

### **Site Público** (Porta 3000)
```bash
npm run dev:public
```
Acesse: [http://localhost:3000](http://localhost:3000)

### **CMS** (Porta 3001)
```bash
npm run dev:cms
```
Acesse: [http://localhost:3001](http://localhost:3001)

### **Ambos os Sites** (Portas 3000 e 3001)
```bash
# Em um terminal
npm run dev:public

# Em outro terminal
npm run dev:cms
```

## 🔐 Login do CMS

**Email:** `admin@atrpap.com.br`  
**Senha:** `admin123`

## 📦 Build

### **Build Público**
```bash
npm run build:public
```

### **Build CMS**
```bash
npm run build:cms
```

### **Build Ambos**
```bash
npm run build
```

## 📁 Estrutura de Diretórios

```
src/
├── sites/
│   ├── public/          # Site público
│   │   ├── index.html
│   │   ├── main.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── assets/
│   │   └── components/
│   │
│   └── cms/             # Painel de administração
│       ├── index.html
│       ├── main.jsx
│       ├── App.jsx
│       ├── App.css
│       ├── index.css
│       └── components/
│           ├── login/
│           ├── cadastrarNoticia/
│           └── ...
│
└── assets/              # Arquivos compartilhados

dist/
├── public/              # Build do site público
└── cms/                 # Build do CMS
```

## 🛠️ Variáveis de Ambiente

A configuração detecta o modo através da variável `VITE_MODE`:
- `VITE_MODE=public` - Roda o site público
- `VITE_MODE=cms` - Roda o CMS

Estas são definidas automaticamente nos scripts npm.
