import React, { Component } from "react";
import axios from 'axios';

class FormMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '',
        poster: '',
        comment: '',
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="FormMovie">
        
      </div>
    );
  }
}

export default FormMovie;
