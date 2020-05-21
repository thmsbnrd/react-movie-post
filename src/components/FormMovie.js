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

  submitForm(e) {
    e.preventDefault();
  }

  render() {
    return (
        <div className="FormMovie">
            <h1>Partage ton film préféré</h1>
            
            <form onSubmit={this.submitForm}>
            <fieldset>
                <legend>Informations</legend>
                <div className="form-data">
                <label htmlFor="title">Titre</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={this.onChange}
                    value={this.state.title}
                />
                </div>
            
                <div className="form-data">
                <label htmlFor="poster">URL du poster</label>
                <input
                    type="text"
                    id="poster"
                    name="poster"
                    onChange={this.onChange}
                    value={this.state.poster}
                />
                </div>
            
                <div className="form-data">
                <label htmlFor="comment">Commentaire</label>
                <input
                    type="textarea"
                    id="comment"
                    name="comment"
                    onChange={this.onChange}
                    value={this.state.comment}
                />
                </div>
                <hr />
                <div className="form-data">
                <input type="submit" value="Envoyer" />
                </div>
            </fieldset>
            </form>
        </div>
    );
  }
}

export default FormMovie;
