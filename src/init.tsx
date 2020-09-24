import  App  from 'bazel_typescript_closure_sample/src/App';

// React and ReactDOM will be included on the page through a separate vendor script tag.
// These declarations prevent the compiler from complaining about them being undefined.
declare var React: any;
declare var ReactDOM: any;

export function init() {
  const root = document.querySelector('.js-react-root');
  ReactDOM.render(<App></App>, root)
}