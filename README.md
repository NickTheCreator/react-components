# ⚛️ React Components

Uma coleção de componentes React criada para praticar formulários, props, componentes compostos e estilos com CSS.

---

## 📋 Sobre o Repositório

Este repositório reúne componentes React desenvolvidos durante os estudos. A aplicação exibe uma barra superior, cards de postagem, um blog com criação de posts e um formulário de cadastro na mesma página.

O foco principal é praticar a estrutura de componentes, o gerenciamento de estado com `useState`, a passagem de props, a validação de dados e a renderização dinâmica de conteúdo salvo localmente.

**Tipos de componentes:**

- Barra superior com logo, busca e links de navegação
- Card de postagem reutilizável
- Card de comentário que reutiliza o card de postagem
- Blog com lista dinâmica de postagens e botão para adicionar novos itens
- Modal de criação de post com formulário de autor, título e descrição
- Formulário de cadastro com validação de email e senha

---

## 📁 Estrutura do Projeto

```
react-components/
├── src/
│   ├── components/
│   │   ├── blogContent/
│   │   │   ├── data.js
│   │   │   └── index.jsx
│   │   ├── headerTopBar/
│   │   │   ├── headerTopBar.css
│   │   │   └── index.jsx
│   │   ├── loginCard/
│   │   │   ├── loginCard.css
│   │   │   └── index.jsx
│   │   ├── newPostModal/
│   │   │   ├── newPostModal.css
│   │   │   └── index.jsx
│   │   └── PostCard/
│   │       ├── postCard.css
│   │       └── index.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── hooks/
│   │   ├── isValidEmail.jsx
│   │   └── isValidPassword.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── TODOS.todo
├── vite.config.js
└── README.md
```

---

## 🧩 Componentes

### HeaderTopBar

**Descrição**

Exibe o logo, um campo de busca e quatro links de navegação. O campo de busca usa o componente `TextField` do Material UI.

**O que foi praticado**

- Como organizar uma barra superior em JSX
- Como usar um componente de entrada do Material UI
- Como estruturar links de navegação em uma lista

**Propriedades do componente**

- **Props:** não recebe props.
- **Estado:** não possui estado próprio.

**Design**

- **Cores:** `bisque` · `black`
- **Fonte:** fonte padrão do navegador; nenhuma fonte customizada foi definida.
- **Personalidade:** simples, horizontal, experimental

### PostCard

**Descrição**

Mostra o autor, o título, o conteúdo e ações de uma postagem. Possui valores padrão para os dados e pode ser reutilizado com diferentes textos.

**O que foi praticado**

- Como receber props com valores padrão
- Como separar cabeçalho, conteúdo e rodapé de um card
- Como reutilizar um componente em outros componentes

**Propriedades do componente**

- **Props:** `author: string`, `title: string`, `description: string` — exibem os dados da postagem; todas possuem valores padrão.
- **Estado:** não possui estado próprio.

**Design**

- **Cores:** `beige` · `#000000`
- **Fonte:** fonte padrão do navegador; nenhuma fonte customizada foi definida.
- **Personalidade:** espaçado, neutro, arredondado

### CommentaryCard

**Descrição**

Cria uma postagem de exemplo com autor, título e texto longo. Em seguida, passa esses dados para o `PostCard`, mostrando como um componente pode compor outro.

**O que foi praticado**

- Como definir dados dentro de um componente
- Como passar props para um componente filho
- Como reaproveitar a apresentação de um card

**Propriedades do componente**

- **Props:** não recebe props.
- **Estado:** não possui estado próprio.

**Design**

- **Cores:** usa o design do `PostCard`: `beige` · `#000000`
- **Fonte:** fonte padrão do navegador; nenhuma fonte customizada foi definida.
- **Personalidade:** demonstrativo, textual, reutilizável

### BlogContent

**Descrição**

Controla a lista de postagens do blog, abre o modal para criar um novo post e renderiza os itens vindos do estado local. Os posts também são salvos no `localStorage`, então a lista permanece disponível ao recarregar a página.

**O que foi praticado**

- Como usar `useState` para controlar o estado de abertura do modal e da lista de posts
- Como salvar e recuperar dados no `localStorage`
- Como atualizar a interface quando novos dados são adicionados

**Propriedades do componente**

- **Props:** não recebe props.
- **Estado:** `isOpen` controla se o modal está visível; `postBlog` guarda a lista de publicações.

**Design**

- **Cores:** `beige` · `#000000` · `gray`
- **Fonte:** fonte padrão do navegador; nenhuma fonte customizada foi definida.
- **Personalidade:** funcional, dinâmico, organizacional

### NewPostModal

**Descrição**

Exibe um formulário em modal para adicionar um novo post com autor, título e texto. Ao enviar, os dados são enviados para o componente pai, que cria a publicação e atualiza o blog.

**O que foi praticado**

- Como controlar inputs de texto com `useState`
- Como trabalhar com um formulário em modal
- Como enviar dados para o componente pai por meio de callbacks

**Propriedades do componente**

- **Props:** `isOpen: boolean`, `onClose: function`, `onSave: function`
- **Estado:** `author`, `title` e `description` controlam os valores digitados no formulário.

**Design**

- **Cores:** `beige` · `#000000` · `gray`
- **Fonte:** fonte padrão do navegador; nenhuma fonte customizada foi definida.
- **Personalidade:** direto, funcional, discreto

### LoginCard

**Descrição**

Exibe um formulário de cadastro com campos para nome de usuário, email, senha e confirmação de senha. Valida o email e a igualdade das senhas, salva os usuários no `localStorage` e limpa o formulário após o cadastro válido.

**O que foi praticado**

- Como controlar campos de formulário com `useState`
- Como validar email com expressão regular
- Como comparar senhas e exibir mensagens de erro
- Como salvar dados serializados no `localStorage`

**Propriedades do componente**

- **Props:** não recebe props.
- **Estado:** `usuario`, `username`, `email`, `emailError`, `password`, `confirmPassword` e `passwordError` controlam os usuários, os campos e as mensagens de validação.

**Design**

- **Cores:** `beige` · `#000000` · `gray`
- **Fonte:** fonte padrão do navegador; nenhuma fonte customizada foi definida.
- **Personalidade:** funcional, espaçado, direto

---

## 🚀 Como rodar

1. Clone ou baixe este repositório.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Abra `http://localhost:5173` no navegador.
5. Para ver um componente específico, importe-o diretamente no `App.jsx`.

Também estão disponíveis os comandos `npm run lint`, `npm run build` e `npm run preview`.

---

## 💡 Princípios seguidos

- **Componentes focados:** cada componente demonstra uma parte específica da interface.
- **Reutilização:** o `CommentaryCard` usa o `PostCard` para exibir uma postagem.
- **CSS simples:** a maior parte da estilização é feita com CSS próprio por componente.
- **Validação separada:** as funções de validação ficam na pasta `src/hooks/`.
