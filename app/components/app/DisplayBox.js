import React from 'react';

export default class DisplayBox extends React.Component{
  constructor(props){
    super(props);
    this.removeBox = this.removeBox.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  removeBox(){
    this.props.boundRemoveBox();
  }
  renderList(){
    const items = this.props.fetchInfo.items;
    return items.map((item, index) =>{
      return (<div
        style={{backgroundColor:"#f1f1f1", padding:"2%"}}
        key={item.data.title+index}>
      <a style={{cursor:'pointer'}}href={item.data.url} target="_blank">
      <h1>{item.data.title}</h1>
      </a>
        <h3>{item.data.author_flair_text}</h3>
        <p>{item.data.selftext}</p>
     </div>)
    })

  }

  render(){

    return <div
    style={{width:"45%", border:"1px solid black", float:"left", display:"block"}} >
      <div style={{backgroundColor:'#825cbf'}}>
        <button onClick={this.props.boundRemoveBox}>Remove</button>
        <h2 style={{textAlign:'center'}}>{this.props.title}</h2>
      </div>
      {this.renderList()}
    </div>
  }
}
