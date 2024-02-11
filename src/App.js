import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

// Fonts
// import "@fontsource/inknut-antiqua";
// import "@fontsource/exo";
// import "@fontsource/covered-by-your-grace";

// CSS
import "./App.css";

// Components
import Main from "./components/Main";

// Apollo client setup
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Main />
      </div>
    </ApolloProvider>
  );
}

export default App;
