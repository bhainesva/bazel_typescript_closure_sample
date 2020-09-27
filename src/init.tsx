import  App  from './App';

declare var React: any;
declare var ReactDOM: any;

export function init() {
  console.log("react init");
  const root = document.querySelector('.js-react-root');
  console.log("root: ", root);
  ReactDOM.render(<App></App>, root)
}