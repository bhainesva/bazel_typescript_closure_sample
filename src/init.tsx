import App from 'bazel_typescript_closure_sample/src/App';

export function init() {
  const root = document.querySelector('.js-react-root');
  ReactDOM.render(<App></App>, root)
}