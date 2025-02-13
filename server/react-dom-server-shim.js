import ReactDOMServer from 'react-dom/server';

module.exports = {
  ...ReactDOMServer,
  // Provide a fallback; note: renderToReadableStream isn’t a full substitute for streaming
  renderToReadableStream: ReactDOMServer.renderToString,
};