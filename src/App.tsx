import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let insuNum = 2;
  let insuStr: string = '2';
  let isFrontEnd: boolean = true;
  let arrStr: string[] = ['svelte', 'rxjs', 'vite', 'adorableCSS'];
  let arrNum: number[] = [1, 2, 3];
  // insuNum = 3;
  // console.log(arrNum);
  // arrNum.push(4);
  const sum = (a: number, b: number): number => {
    return a + b;
  };
  const fn = (ss: number) => {
    console.log(ss);
  };
  fn(11);
  console.log(sum(1, 2));
  // function fn2(dd: any): string {
  //   return dd;
  // }
  // console.log(typeof fn2(22));

  const sum2 = (a: number, b: number = 0): number => a + b;
  console.log(sum2(3, undefined)); // 결과는 3이다
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
