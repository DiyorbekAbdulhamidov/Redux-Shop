import React from 'react';
import { Navbar } from '../../components';
import Products from './products';

//@ts-ignore
import * as faker from 'faker';

interface HomeProps { }

const Home: React.FC<HomeProps> = () => {
  const productList = React.useMemo(
    () =>
      Array.from({ length: 36 }).map((_, index) => ({
        id: index + 1,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: `https://picsum.photos/seed/picsum/200/100`,
      })),
    []
  );

  return (
    <>
      <Navbar />
      <Products data={productList} />
    </>
  );
};

export default Home;