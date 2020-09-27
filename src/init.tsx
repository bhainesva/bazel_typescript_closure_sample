import  App  from 'bazel_typescript_closure_sample/src/App';

declare var React: any;
declare var ReactDOM: any;

export function init() {
  console.log("react boiii");
  const root = document.querySelector('.js-react-root');
  console.log("root: ", root);
  ReactDOM.render(<App></App>, root)
}