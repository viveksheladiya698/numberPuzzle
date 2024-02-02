
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  let [arr, setarr] = useState('');
  let [s1, sets1] = useState('');
  let [s2, sets2] = useState('');
  let [s3, sets3] = useState('');
  let [s4, sets4] = useState('');
  let [s5, sets5] = useState('');
  let [s6, sets6] = useState('');
  let [s7, sets7] = useState('');
  let [s8, sets8] = useState('');
  let [s9, sets9] = useState('');


  useEffect(() => {

    // add new state
    data();

  }, []);

  let data = () => {

    let a;
    let ar = [];
    for (let i = 1; i <= 9; i++) {
      a = Math.floor(Math.random() * 9 + 1);
      if (!ar.includes(a)) {
        ar.push(parseInt(a));
      }
      else {
        i--;
      }
    }
    if (ar.includes(9)) {
      let id;
      id = ar.indexOf(9);
      ar[id] = ' ';
      console.log(ar);
    }
    sets1(ar[0]);
    sets2(ar[1]);
    sets3(ar[2]);
    sets4(ar[3]);
    sets5(ar[4]);
    sets6(ar[5]);
    sets7(ar[6]);
    sets8(ar[7]);
    sets9(ar[8]);


  }

  let change1 = () => {
    if (s2 == ' ') {
      sets2(s1);
      sets1(' ');
    }
    else if (s4 == ' ') {
      sets4(s1);
      sets1(' ');
    }
    win();
  }
  let change2 = () => {

    if (s1 == ' ') {
      sets1(s2);
      sets2(' ');
    }
    else if (s3 == ' ') {
      sets3(s2);
      sets2(' ');
    }
    else if (s5 == ' ') {
      sets5(s2);
      sets2(' ');
    }
    win();
  }
  let change3 = () => {

    if (s6 == ' ') {
      sets6(s3);
      sets3(' ');
    }
    else if (s2 == ' ') {
      sets2(s3);
      sets3(' ');
    }
    win();
  }
  let change4 = () => {

    if (s1 == ' ') {
      sets1(s4);
      sets4(' ');
    }
    else if (s5 == ' ') {
      sets5(s4);
      sets4(' ');
    }
    else if (s7 == ' ') {
      sets7(s4);
      sets4(' ');
    }
    win();
  }
  let change5 = () => {
    if (s2 == ' ') {
      sets2(s5);
      sets5(' ');
    }
    else if (s6 == ' ') {
      sets6(s5);
      sets5(' ');
    }
    else if (s4 == ' ') {
      sets4(s5);
      sets5(' ');
    }
    else if (s8 == ' ') {
      sets8(s5);
      sets5(' ');
    }
    win();
  }
  let change6 = () => {
    if (s3 == ' ') {
      sets3(s6);
      sets6(' ');
    }
    else if (s9 == ' ') {
      sets9(s6);
      sets6(' ');
    }
    else if (s5 == ' ') {
      sets5(s6);
      sets6(' ');
    }
    win();
  }
  let change7 = () => {
    if (s4 == ' ') {
      sets4(s7);
      sets7(' ');
    }
    else if (s8 == ' ') {
      sets8(s7);
      sets7(' ');
    }
    win();
  }
  let change8 = () => {
    if (s5 == ' ') {
      sets5(s8);
      sets8(' ');
    }
    else if (s7 == ' ') {
      sets7(s8);
      sets8(' ');
    }
    else if (s9 == ' ') {
      sets9(s8);
      sets8(' ');
    }
    win();
  }
  let change9 = () => {
    if (s6 == ' ') {
      sets6(s9);
      sets9(' ');
    }
    else if (s8 == ' ') {
      sets8(s9);
      sets9(' ');
    }
    win();
  }
  let win = () => {
    if (s1 == 1 && s2 == 2 && s3 == 3 && s4 == 4 && s5 == 5 && s6 == 6 && s7 == 7 && s8 == 8) {
      alert('You Win');
    }
  }
  let reset = () => {

    data();

  }

  return (
    <div className="App">
      <div className="button">
        <div className="layer-1">
          <input type="button" value={s1} onClick={() => { change1(); }}></input>
          <input type="button" value={s2} onClick={() => { change2(); }}></input>
          <input type="button" value={s3} onClick={() => { change3(); }}></input>
        </div>
        <div className="layer-1">
          <input type="button" value={s4} onClick={() => { change4(); }}></input>
          <input type="button" value={s5} onClick={() => { change5(); }}></input>
          <input type="button" value={s6} onClick={() => { change6(); }}></input>
        </div>
        <div className="layer-1">
          <input type="button" value={s7} onClick={() => { change7(); }}></input>
          <input type="button" value={s8} onClick={() => { change8(); }}></input>
          <input type="button" value={s9} onClick={() => { change9(); }}></input>
        </div>
        <div className="reset">
          <input type="button" value={"Reset"} onClick={() => { reset(); }} />
        </div>
      </div>
    </div>
  );
}

export default App;
