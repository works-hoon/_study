import React, { Component } from 'react';
import Toc from './components/Toc';
import ReadContent from './components/ReadContent';
import Subject from './components/Subject';
import Control from './components/Control';
import CreatContent from './components/CreatContent';
import UpdateContent from './components/UpdateContent';
import './App.css';
// import { Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'welcome',
      // mode:'create',
      selected_id: 0,
      subject: { title: 'WEB', sub:'Hello World!'},
      welcome: { title: 'Welcome', desc:'Hello React!'},
      contents:[
        { id: 1, title: 'HTML', desc:'HTML is HyperText Markup Language.'},
        { id: 2, title: 'CSS', desc:'CSS is for design'},
        { id: 3, title: 'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  getReadContent() {
    let i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_id) {
        return data;
      }
      i += 1;
    }
  }
  getContent() {
    let _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />
    } else if (this.state.mode === 'read') {
      const _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc} />
    } else if (this.state.mode === 'create') {
      _article = <CreatContent onSubmit={(_title, _desc) => {
        const _id = this.state.contents.length + 1;
        const _contents = this.state.contents.concat({
            id: _id,
            title:_title,
            desc:_desc
        })
        this.setState({
          contents: _contents,
          mode: 'read',
          selected_id: _id
        })
      }} />
    } else if (this.state.mode === 'update') {
      const _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={(_id, _title, _desc) => {
        const _contents = Array.from(this.state.contents);
        let i = 0;
        while (i < _contents.length){
          if (_contents[i].id === _id){
            _contents[i] = {
              id:_id,
              title:_title,
              desc:_desc
            }
            break;
          }
          i++;
        }
        this.setState({
          contents: _contents,
          mode:'read'
        })
      }} />
    } else if (this.state.mode === 'delete') {
      
    }
    return _article;
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage = {()=>{
            this.setState({
              mode: 'welcome',
              selected_id: 0
            })
          }}
        />
        <Toc
          data={this.state.contents}
          selected_id={this.state.selected_id}
          onChangePage = {id=>{
            this.setState({
              mode: 'read',
              selected_id:Number(id)
            })
          }}
        />
        <Control onChangeMode={mode=>{
          if (mode ==='delete'){
            if(window.confirm('삭제하시겠습니까?')){
              const _contents = Array.from(this.state.contents);
              let i = 0;
              while (i < _contents.length) {
                if (_contents[i].id === this.state.selected_id) {
                  _contents.splice(i, 1);
                  break;
                }
                i++;
              }
              this.setState({
                contents: _contents,
                mode: 'welcome'
              })
            }
          }else{
            this.setState({
              mode: mode
            })
          }
        }} />
        {this.getContent()}
      </div>
    );
  }
}

export default App;
