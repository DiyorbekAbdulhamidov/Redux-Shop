import React, { FunctionComponent } from "react";
import { Navbar } from "../../components";
import Products from "./products";
//@ts-ignore
import * as faker from 'faker';

interface HomeProps { }

const Home: FunctionComponent<HomeProps> = () => {

  const productList = React.useMemo(() => (
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
      <Products data={productList} />
    </>
  );
};

export default Home;