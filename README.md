<div align="center">
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native"/>
  <img src="https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white" alt="Expo"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white" alt="Fastify"/>
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white" alt="Firebase"/>
  <img src="https://img.shields.io/badge/Gemini_AI-8E75B2?style=for-the-badge&logo=googlebard&logoColor=white" alt="Gemini"/>
</div>
<br/>

<div align="center">
  <h1>AplicaTivo Dieta & Nutrição - Inteligência Artificial</h1>
  <p><strong>Crie dietas personalizadas automaticamente utilizando as capacidades do modelo Google Gemini AI.</strong></p>
</div>

## Sobre o Projeto

O **Aplicativo de Dieta** foi desenvolvido com a proposta de facilitar a vida de pessoas que buscam melhorar sua alimentação e alcançar objetivos físicos (como hipertrofia, emagrecimento ou manutenção). O diferencial da aplicação está na integração com a inteligência artificial **Google Gemini**.

A partir de dados biológicos fornecidos pelo usuário (idade, peso, altura, sexo, nível de atividade) e seus respectivos objetivos, a poderosa API do **Gemini 1.5** processa as informações e gera um plano alimentar inteiramente customizado, retornando dicas de refeições, metas diárias de macronutrientes, hidratação adequada e até sugestões de suplementos. O processo é rápido, interativo e a interface conta com elementos visuais de ponta utilizando React Native.

---

## Principais Features

- **Autenticação e Segurança:** Login e cadastro seguro totalmente integrados ao `Firebase Authentication`.
- **Inteligência Artificial (Gemini):** Análise complexa e rápida com IA generativa para gerar respostas estruturadas de planos alimentares.
- **Dietas Detalhadas:** Controle diário das refeições, distribuição de Macros (Proteína, Carboidrato, Gordura) e metas calóricas rigorosamente desenhadas para o corpo do usuário.
- **Navegação Fluida:** Rotas gerenciadas pelo `React Navigation` apresentando uma ótima experiência de usuário e interface responsiva.
- **Backend Moderno e Performático:** Desenvolvido em \`Node.js\`, \`Fastify\` e \`TypeScript\` para agilizar as integrações com a API do Google.

---

## Tecnologias Utilizadas

### Frontend (Mobile)
- [React Native](https://reactnative.dev) + [Expo](https://expo.dev/)
- JavaScript Modular
- **React Navigation** (Stack e Bottom Tabs)
- **Firebase** (Auth e Integrações)
- **AsyncStorage** para dados offline (como a dieta salva)
- **Expo Linear Gradient** e **Vector Icons** para um design premium e agradável

### Backend
- [Node.js](https://nodejs.org/) com [Fastify](https://fastify.dev/) (Roteamento robusto e veloz)
- **TypeScript** para maior robustez, IntelliSense e segurança
- **Google Generative AI** (Integração Direta com Gemini 1.5 Flash)
- **Cors** e **Dotenv**

---

## Configuração e Instalação

Para rodar o projeto localmente, basta clonar o repositório, instalar as dependências de ambos os serviços de Front e Back End, e configurar as variáveis de ambiente com suas chaves locais e permissões de rede.

### 1. Clonando o repósitorio
```bash
git clone https://github.com/SEU_USUARIO/Aplicativo-Dieta.git
cd Aplicativo-Dieta
```

### 2. Configurando o Backend (API)
```bash
cd back

# Instalando as dependências do servidor
npm install

# Crie um arquivo chamado .env na raiz da pasta /back e insira sua API Key do Google Gemini:
API_KEY=sua_chave_secreta_aqui

# Inicie o servidor local
npm run dev
```
> O backend será iniciado em `http://localhost:3333` servindo a porta para a rede da máquina.

### 3. Configurando o Frontend (App Expo)
```bash
cd front

# Instalando as dependências pesadas do expo e react native
npm install

# Inicie a aplicação
npm start
```
> Você poderá rodar via **Expo Go** no seu celular lendo o QRCode criado, ou se preferir utilizando os Emuladores do Android/iOS.

### Importante: Ajuste de IP da API
No arquivo `front/components/form.js` (aprox. linha 27), você encontrará a URL de requisição local para a sua API Backend (ex: `http://192.168.94.237:3333/create`). 
**Se você estiver emulando no seu smartphone físico**, altere o endereço de IP para o **IPv4 atual do seu computador** onde o backend está rodando. Se estiver utilizando o Emulador nativo do Android Studio, configure a chamada para: `http://10.0.2.2:3333/create`.

---

## Telas do Aplicativo

<p align="center" style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
  <img src="https://via.placeholder.com/200x400.png?text=Login" alt="Login" width="200"/>
  <img src="https://via.placeholder.com/200x400.png?text=Cadastro" alt="Cadastro" width="200"/>
  <img src="https://via.placeholder.com/200x400.png?text=Formul%C3%A1rio" alt="Formulário" width="200"/>
  <img src="https://via.placeholder.com/200x400.png?text=Menu" alt="Menu" width="200"/>
  <img src="https://via.placeholder.com/200x400.png?text=Dieta" alt="Dieta" width="200"/>
</p>

*(Substitua as imagens demonstrativas acima pelas screenshots reais do aplicativo ao adicionar no GitHub. Lembre-se de colocar as mesmas na pasta principal ou documentar o seu caminho corretamente)*

---
