import React, { FunctionComponent } from "react";
import { Navbar } from "../../components";
import Products, { Product } from "./products";
//@ts-ignore
import * as faker from 'faker';

interface HomeProps {
  handleAddToBasket: (product: Product) => void;
}

const Home: FunctionComponent<HomeProps> = ({ handleAddToBasket }) => {
  const productList: Product[] = React.useMemo(() => (
    Array.from({ length: 21 }).map((_, index) => ({
      id: index + 1,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.imageUrl(),
    }))
  ), []);

  return (
    <>
      <Navbar />
      <Products data={productList} handleAddToBasket={handleAddToBasket} />
    </>
  );
};

export default Home;