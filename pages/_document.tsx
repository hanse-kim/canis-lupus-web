import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

// eslint-disable-next-line require-jsdoc
class MyDocument extends Document {
  // eslint-disable-next-line require-jsdoc
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <Html lang='ko'>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
