import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  TransactionsContainer,
  TransactionsTable,
  PriceHighlight,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
         <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant={"income"}>R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/06/2022</td>
            </tr>
            <tr>
              <td width="50%">Shein</td>
              <td>
                <PriceHighlight variant={"outcome"}>- R$ 300,00</PriceHighlight>
              </td>
              <td>Compra</td>
              <td>10/06/2022</td>
            </tr>
            <tr>
              <td width="50%">Pizza</td>
              <td>
                <PriceHighlight variant={"outcome"}>- R$ 80,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>12/06/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
