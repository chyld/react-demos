/* eslint-disable */

// import Calc from './Calc';
// import Add from './Add';
// import Counter from './Counter';
// import Color from './Color';
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import counter from './reducers/counter';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
const logger = createLogger();

const store = createStore(counter, applyMiddleware(logger));

function render(){
  ReactDOM.render(
    <div>
      <Counter x={() => store.dispatch({type: 'INC_X'})} y={() => store.dispatch({type: 'INC_Y'})} />
    </div>,
    document.getElementById('root')
  );
}

render();
store.subscribe(render);
