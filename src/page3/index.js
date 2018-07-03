import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
const wm = new WM('v3');

function Title(props) {
  return <div className="title"> {props.title} </div>
}

class ListContent extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    // }
  }
  render() {
    return (
      <React.Fragment>
        <div className="text">{this.props.content.name}</div>
        <button className="btn">点击</button>
      </React.Fragment>
    )
  }
}



class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        headImg:"logo",
        footerText:"默认值",
        content:[]
      }
    }
  }

  handCliock() {
    alert(111);
  }

  render() {
    const { data } = this.state;
    console.log(data);
    
    return (
    <div className="page2">
      <div className="header">宝贝计划</div>
      <div className="main">
        < img src = {data.headImg}
        alt = "" />
        <div className="content">
        {data.content.length && 
        data.content
        .map((item,index) => {
              return(
                <div className="pageBox" key={item.id} data={index}>
                  <div className="pageTitle">
                      <Title title={item.hospital}/>
                  </div>
                  <div className="pageListContain">
                      {item.items.length &&
                        item.items
                          .map((items, index) => {
                            return (<div className="pageList" key={items.itemId} data={index}>
                              <ListContent content={items}/>
                            </div>)
                          })
                      }
                  </div>
              </div>)
          }
        )}          
        </div>
      </div>
      <div className="footer" onClick={this.handCliock.bind(this)}> {data.footerText} </div>
      
    </div>
    )
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const data = await wm.get('http://dev.m.myweimai.com/temps_data/package_detail.json');
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
