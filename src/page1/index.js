import React from 'react';
import ReactDOM from 'react-dom';

// import Hello from './hello'

import './index.scss';
const wm = new WM('v3');

function Hello123() {
  return <h1> hello 123123 </h1>
}

class Hello456 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      server: '预约挂号',
      serveMap: ['预约挂号', '差报告单', '在线缴费']
    }
  }
  render() {
    const name = 'xxxxx'
    return (
      <div>
        <h1>hello {name}</h1>
        <ul>
          {this.state.serveMap.map(v => <li>{v}</li>)}
        </ul>
      </div>
    )
  }
}

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }
  render() {
    const { data } = this.state;
    return (
    <div className="page1">
      <h1>{data.name}</h1>
      <img src={data.logo} alt="" />
      <p>{data.mission}</p>
      <Hello123></Hello123>
      <Hello456 part="平台部门"></Hello456>
    </div>
    )
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const data = await wm.get('http://dev.m.myweimai.com/temps_data/h5_share.json');
    if (data.code === 0) {
      this.setState({
        data: data.data
      })
    }
  }
}

const root = document.createElement('div');
root.className = 'root';
document
  .body
  .appendChild(root);
ReactDOM.render(
  <Index />, root);
