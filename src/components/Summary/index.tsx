import React from "react";
import { HeadCard } from "./HeadCard";
import * as S from "./styles";

export default function Summary() {
  return (
    <S.Wrapper>
      <S.Content>
        <HeadCard
          date="Última entrada dia 13 de abril"
          icon="income"
          title="Entradas"
          value={17400}
        />
        <HeadCard
          date="Última saída dia 03 de abril"
          icon="outcome"
          title="Saídas"
          value={1259}
        />
        <HeadCard
          total
          date="01 a 16 de abril"
          icon="total"
          title="Total"
          value={16141}
        />
      </S.Content>
    </S.Wrapper>
  );
}
