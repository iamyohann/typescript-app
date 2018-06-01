import * as React from 'react';
import './App.css';

import TodoBar from './containers/TodoBar';

class App extends React.Component<any, any> {
  public render() {
    return (
      <div className="App">
        <TodoBar />
      </div>
    );
  }
}

export default App;
