import React, { Component } from 'react';
import './App.css';
import { PersonEditor } from './components/person-editor';
import { ChildParent } from './components/child-parent';
import { Playground } from './components/playground';

class App extends Component {
  render() {
    return (
      <div className="Container">

        <PersonEditor />
        <div className="mb-3">

        </div>
        {/* <ChildParent /> */}
        {/* <Playground/> */}

      </div>
    );
  }
}

export default App;
