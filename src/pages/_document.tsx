import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';
import { Footer } from '../templates/Footer';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
        <body>
          <Main />
          <Footer></Footer>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
