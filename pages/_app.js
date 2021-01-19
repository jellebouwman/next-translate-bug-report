import PropTypes from "prop-types";

// if your custom app function is defined like this,
// and exported like this ...

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// AND if your custom App has propTypes defined like this
App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

// AND (check next.config.js) the new nextTranslate() wrapper is used,

// the following webpack error is loaded when running the next dev server
