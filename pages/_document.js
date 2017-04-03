import Document, {Head, Main, NextScript} from 'next/document';
import styleSheet from 'styled-components/lib/models/StyleSheet';


const style = {
  html: {
    height: '100%',
  },
  body: {
    margin: 0,
    fontFamily: '\'Varela Round\', sans-serif',
    fontSize: '18px',
    height: '100%',
  },
};


export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = (
      <style
        dangerouslySetInnerHTML={{ // eslint-disable-line
          __html: styleSheet.rules().map(rule => rule.cssText).join('\n'),
        }}
      />
    );
    return {...page, styles};
  }

  render() {
    return (
      <html style={style.html}>
        <Head>
          <title>Kode</title>
          <link href='https://fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' />
          <style>{`
            #__next, [data-reactroot] {
              height: 100%;
            }
          `}</style>
        </Head>
        <body style={style.body}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
