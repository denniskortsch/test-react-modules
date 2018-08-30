// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@dennisko/cray';

function App() {
  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <Button bla={'bla'} />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
