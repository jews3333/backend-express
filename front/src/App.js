import React from 'react';
import axios from 'axios';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: null,
      img: null
    }
  }

  componentDidMount(){
    fetch("/data")
    .then(res => res.json())
    .then(data => this.setState({ data: data }), () => {
      console.log(this.state.data);
    })
  }

  fileChange = (e) => {
    this.setState({img:e.target.files[0]});
  }

  fileUpload = async () => {
    const formData = new FormData();
    formData.append('img', this.state.img);

    const res = await axios.post("/upload", formData);
    console.log(res);
  }

  render(){

    const { data } = this.state;

    return (
      <div className="App">
        {data ? data.map((user) => {
          return <div key={user.id}>
            <div>{user.title}</div>
            <div>{user.description}</div>
            <div>{user.author}</div>
          </div>
        }) : null}
        <div>
          <input type="file" name="img" onChange={this.fileChange} />
          <button onClick={this.fileUpload}>upload</button>
        </div>
      </div>
    )
  }

}

export default App;
