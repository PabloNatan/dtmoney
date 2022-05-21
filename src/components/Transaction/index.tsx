import { formatToBRL } from "../../utils/formatToBRL";
import * as S from "./styles";

export type ITransaction = {
  id: number;
  title: string;
  price: number;
  category: string;
  created_at: Date;
};

export default function Transaction({
  category,
  created_at,
  price,
  title,
}: ITransaction) {
  return (
    <S.Wrapper>
      <td>{title}</td>
      <td className={`${price > 0 ? "positive" : "negative"}`}>
        {formatToBRL(price)}
      </td>
      <td>{category}</td>
      <td>{created_at.toDateString()}</td>
    </S.Wrapper>
  );
}
