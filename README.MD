# 🌌 Agenda Galáctica — Projeto React Native

Aplicativo de lista de contatos com tema espacial, desenvolvido com **React Native + Expo**.

---

## 📁 Estrutura do Projeto

```
AgendaGalactica/
├── App.js                              ← Ponto de entrada + Navegação
├── package.json                        ← Dependências do projeto
│
├── dados/
│   └── contatos.js                     ← Dados mockados iniciais
│
├── components/                         ← Componentes reutilizáveis
│   ├── CardContato.js                  ← Card de cada contato na lista
│   ├── CampoBusca.js                   ← Campo de pesquisa
│   ├── BotaoFlutuante.js               ← Botão "+" flutuante (FAB)
│   ├── BotaoAcao.js                    ← Botões de ação da ligação
│   └── FotoAnimada.js                  ← Foto com anel pulsante animado
│
└── screens/                            ← Telas do aplicativo
    ├── ListaContatosScreen.js          ← Tela 1: Lista de contatos
    ├── LigacaoScreen.js                ← Tela 2: Ligação em andamento
    └── AdicionarContatoScreen.js       ← Tela 3: Adicionar novo contato
```

---

## 🚀 Como Rodar o Projeto

### 1. Pré-requisitos
- Node.js instalado (versão 18 ou superior)
- App **Expo Go** no celular (Android ou iOS)

### 2. Instalar dependências
```bash
npm install
```

### 3. Rodar o projeto
```bash
npx expo start
```

### 4. Abrir no celular
Escaneie o QR Code com o app **Expo Go**

---

## 🧠 Conceitos Ensinados

| Conceito | Onde encontrar |
|---|---|
| Navegação entre telas | `App.js` |
| useState | Todos os screens |
| useEffect | `LigacaoScreen.js`, `ListaContatosScreen.js`, `FotoAnimada.js` |
| FlatList | `ListaContatosScreen.js` |
| Props entre componentes | `CardContato.js`, `CampoBusca.js`, `BotaoFlutuante.js` |
| Passagem de parâmetros entre telas | `ListaContatosScreen.js` → `LigacaoScreen.js` |
| Formulários e validação | `AdicionarContatoScreen.js` |
| Animações básicas | `FotoAnimada.js` |
| StyleSheet | Todos os arquivos |
| Componentes reutilizáveis | Pasta `/components` inteira |

---

## 📚 Conceitos Básicos — Referência Rápida

### Props
```js
// Passando props para um componente
<CardContato contato={item} onPress={() => alert('clicou!')} />

// Recebendo props no componente
export default function CardContato({ contato, onPress }) { ... }
```

### useState
```js
const [valor, setValor] = useState(valorInicial);
```

### useEffect
```js
useEffect(() => {
  // código ao montar o componente
  return () => { /* cleanup ao desmontar */ };
}, []); // [] = roda só uma vez
```

### Navegação
```js
navigation.navigate('NomeDaTela', { dado: valor }); // Ir para tela
navigation.goBack();                                  // Voltar
const { dado } = route.params;                        // Receber dado
```