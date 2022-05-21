import * as S from "./styles";

import incomeIcon from "../../../assets/icons/income.svg";
import outcomeIcon from "../../../assets/icons/outcome.svg";
import totalIcon from "../../../assets/icons/total.svg";
import { formatToBRL } from "../../../utils/formatToBRL";

type HeadCardProps = {
  icon: "income" | "outcome" | "total";
  title: string;
  value: number;
  date: string;
  total?: boolean;
};

const icons = {
  income: incomeIcon,
  outcome: outcomeIcon,
  total: totalIcon,
};

function HeadCard({ date, icon, title, value, total }: HeadCardProps) {
  return (
    <S.Wrapper total={total}>
      <S.TitleWrapper>
        <S.Title>{title}</S.Title>
        <S.Icon src={icons[icon]} />
      </S.TitleWrapper>

      <S.Value>{formatToBRL(value)}</S.Value>

      <S.Date>{date}</S.Date>
    </S.Wrapper>
  );
}

export { HeadCard };
