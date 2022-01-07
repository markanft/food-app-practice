// _app.tsx
import '@styles/global.css';

import React, { FC } from 'react';
import { AppProps } from 'next/app';
import Header from '@src/components/Layout/Header';
import Cart from '@src/components/Cart/Cart';
import { Provider } from 'react-redux';
import { store } from '@src/store/store';
import CartProvider from '@src/store/CartProvider';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <Provider store={store}>
      <CartProvider>
        <Cart />
        <Header />
        <Component {...pageProps} />
      </CartProvider>
    </Provider>
  );
};
export default MyApp;
