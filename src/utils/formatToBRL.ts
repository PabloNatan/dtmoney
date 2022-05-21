export function formatToBRL(value: number) {
  if (!value) {
    return "R$ 0,00";
  }

  return value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}
