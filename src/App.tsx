import { ThemeProvider } from "styled-components";
import Summary from "./components/Summary";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme";
import { TransactionsTable } from "./components/TransactionsTable";
import { ITransaction } from "./components/Transaction";

const realeases: ITransaction[] = [
  {
    id: 544564654,
    category: "Mercado",
    created_at: new Date(),
    price: -255.42,
    title: "Carne",
  },
  {
    id: 544564655,
    category: "Necisades",
    created_at: new Date(),
    price: 95.42,
    title: "Copel",
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Summary />
      <TransactionsTable transactions={realeases} />
    </ThemeProvider>
  );
}

export { App };
