import React, { Component } from 'react';
import axios from 'axios';
import { Progress } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Form} from "react-bootstrap";

class InputFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            loaded: 0
        }
    }

    onChangeHandler = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
        console.log(event.target.files[0])
    }

    onClickHandler = event => {
        const data = new FormData();
        data.append('file', this.state.selectedFile);
        console.log('hello');

        axios.post(process.env.REACT_APP_API_URL + '/uploadsong', data, {

        })
            .then(res => {
                console.log(res.statusText);
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="offset-md-3 col-md-6">
                        <div className="form-group files">
                            <label>Upload Your File</label>
                            <input type="file" name="file" onChange={this.onChangeHandler }/>
                        </div>
                        <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
                    </div>
                </div>
                <br/><br/>
                <audio controls>
                    <source src="https://filestoragehandoferis.blob.core.windows.net/test/02%20Bled%20To%20Resurrect.mp3" type="audio/mpeg"/>
                    <source src="https://filestoragehandoferis.blob.core.windows.net/test/02%20Bled%20To%20Resurrect.mp3" type="audio/ogg"/>
                </audio>
            </div>
        );
    }
}

export default InputFile;