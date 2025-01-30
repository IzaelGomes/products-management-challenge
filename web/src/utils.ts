import dayjs from "dayjs";

export const formatNumberToCurrency = (price: number) => {
  return price.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
};

export const formatDate = (date: string) => {
  return dayjs(date).format("DD/MM/YYYY");
};
