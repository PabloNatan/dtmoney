import React from "react";
import logo from "../../assets/images/logo.svg";
import * as S from "./styles";

export function Header() {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Logo src={logo} />
        <S.Button>Nova transação</S.Button>
      </S.Header>
    </S.Wrapper>
  );
}
