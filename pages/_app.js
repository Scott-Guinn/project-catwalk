import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
// import 'bootswatch/dist/slate/bootstrap.min.css';
import '../styles/styles.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
