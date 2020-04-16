import React, { Component } from 'react';
import axios from 'axios';

export default class Upload extends Component {

    constructor(props) {
        super(props);
        this.state = {
            img: null
        }
    }

    fileChange = (e) => {
        this.setState({ img: e.target.files[0] });
    }

    fileUpload = async () => {
        const formData = new FormData();
        formData.append('img', this.state.img);

        const res = await axios.post("/upload", formData);
        console.log(res);
    }

    render() {
        return (
            <div>
                <input type="file" name="img" onChange={this.fileChange} />
                <button onClick={this.fileUpload}>upload</button>
            </div>
        )
    }
}