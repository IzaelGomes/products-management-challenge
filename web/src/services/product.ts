const baseUrl = process.env.API_URL;

export const getProducts = async () => {
  const products = await fetch(`${baseUrl}/product`);
  const data = await products.json();

  return data;
};
