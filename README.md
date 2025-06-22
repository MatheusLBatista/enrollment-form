# 📋 Formulário de Inscrição

Este projeto é um formulário de inscrição para cursos, desenvolvido com **TypeScript**, **Zod** para validação, **HTML/CSS** e integração com **JSON Server** para o armazenamento de dados.

## Funcionalidades

- Validação de formulário com **Zod**
- Suporte a **modo claro/escuro**
- Armazenamento de dados via **JSON Server**
- Listagem, cadastro e exclusão de inscrição

---

## Tecnologias Utilizadas

- TypeScript
- HTML5 e CSS3
- Zod (validação)
- JSON Server (API fake)

---

## Como Executar o Projeto

### 1. Clone o repositório

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/formulario-fic.git
2. Instale as dependenciass:
   ```bash
   npm install
3. Instale o JSON Server localmente:
   ```bash
   npm install json-server --save-dev
4. Inicie o JSON Server:
   ```bash
   npx json-server --watch data.json --port 3000 
5. Rode o código:
   ```bash
   npm run dev

---

## Regras de Validação (Zod)

- **Nome**: mínimo de 2 caracteres
- **Email**: formato válido e não vazio
- **Sexo**: obrigatório (`masculino` ou `feminino`)
- **Curso**: obrigatório
- **Descrição**: opcional
- **Termos de uso**: obrigatoriamente aceitos
