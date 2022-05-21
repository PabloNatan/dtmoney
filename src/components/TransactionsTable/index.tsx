import React from "react";
import Transaction, { ITransaction } from "../Transaction";
import * as S from "./styles";

type TransactionsTableProps = {
  transactions: ITransaction[];
};

export function TransactionsTable({ transactions }: TransactionsTableProps) {
  return (
    <S.Wrapper>
      <S.Table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <Transaction key={transaction.id.toString()} {...transaction} />
          ))}
        </tbody>
      </S.Table>
    </S.Wrapper>
  );
}
