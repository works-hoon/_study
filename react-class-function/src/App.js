import React, { Component, useState, useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [funcShow, setFuncShow] = useState(true);
  const [classShow, setClassShow] = useState(true);
  return (
    <div className="container">
      <h1>Hello world!</h1>
      <button onClick={()=>{
        setFuncShow(false);
      }}>remove function</button>
      <button onClick={() => {
        setClassShow(false);
      }}>remove class</button>
      {funcShow ? <FuncComp initNumber={2} /> : null}
      {classShow ? <ClassComp initNumber={2} /> : null}
    </div>
  );
}

const funcStyle = 'color:yellow';
let funcId = 0;
function FuncComp(props) {
  const numberState = useState(props.initNumber);
  const number = numberState[0]; //상태값
  const setNumber = numberState[1]; //상태를 바꾸는 함수
  const [_date, setDate] = useState((new Date()).toString());
  
  useEffect(()=>{
    console.log('%cfunc => useEffect(componentDidMount) ' + (++funcId), funcStyle);
    return ()=>{
      console.log('%cfunc => useEffect return (componentWillUnMount) ' + (++funcId), funcStyle);
    }
  }, []);

  useEffect(() => {
    console.log('%cfunc => useEffect(componentDidMount & componentDidUpdate) ' + (++funcId), funcStyle);
    // document.title = number + ':' + _date;
    document.title = number;
    return () => {
      console.log('%cfunc => useEffect return ' + (++funcId), funcStyle);
    }
  }, [number]);

  console.log('%cfunc => render ' + (++funcId), funcStyle);
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number: {number}</p>
      <p>Date: {_date}</p>
      <button type="button" onClick={() => {
        setNumber(Math.random())
      }}>random</button>
      <button type="button" onClick={() => {
        setDate((new Date()).toString())
      }}>date</button>
    </div>
  )
}

const classStyle = 'color:red';
let classId = 0;
class ClassComp extends Component {
  state = {
    number: this.props.initNumber,
    date: (new Date()).toString()
  }
  UNSAFE_componentWillMount(){
    console.log('%cclass => componentWillMount ' + (++classId), classStyle);
  }
  componentDidMount(){
    console.log('%cclass => componentDidMount ' + (++classId), classStyle);
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('%cclass => shouldComponentUpdate ' + (++classId), classStyle);
    return true;
  }
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log('%cclass => componentWillUpdate ' + (++classId), classStyle);
  }
  componentDidUpdate(nextProps, nextState) {
    console.log('%cclass => componentDidUpdate ' + (++classId), classStyle);
  }
  componentWillUnmount() {
    console.log('%cclass => componentWillUnmount ' + (++classId), classStyle);
  }
  render() {
    console.log('%cclass => render ' + (++classId), classStyle);
    return (
      <div>
        <div className="container">
          <h2>class style component</h2>
          <p>Number: {this.state.number}</p>
          <p>Date: {this.state.date}</p>
          <button type="button" onClick={() => {
            this.setState({
              number: Math.random()
            })
          }}>random</button>
          <button type="button" onClick={() => {
            this.setState({
              date: (new Date()).toString()
            })
          }}>date</button>
        </div>
      </div>
    )
  }
}

export default App;
