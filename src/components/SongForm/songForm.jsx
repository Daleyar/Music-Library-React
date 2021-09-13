import React, { Component } from "react";


class SongForm extends Component {
    state = {
        title: '',
        artist: '',
        album: '',
        release_date: '',
        genre: ''
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        let song = {
            title: this.state.title,
            artist: this.state.artist,
            album: this.state.album,
            release_date: this.state.release_date,
            genre: this.state.genre,
        }
        this.props.addSong(song);
        this.setState({
            title: '',
            artist: '',
            album: '',
            release_date: '',
            genre: '',

        });
    };

    render(){
        return(
        <div>
            <center>
            <div className="col-md-2">
                <form className="form-group row" onSubmit={(event) => this.handleSubmit(event)}>
                    <label>Title</label>    
                    <input name='title' type="text" onChange={this.handleChange} value={this.state.title}></input>
                    <label>Artist</label>
                    <input name='artist' type="text" onChange={this.handleChange} value={this.state.artist}></input>
                    <label>Album</label>
                    <input name='album' type="text" onChange={this.handleChange} value={this.state.album}></input>
                    <label>Release Date</label>
                    <input name='release_date' type="date" onChange={this.handleChange} value={this.state.release_date}></input>
                    <label>Genre</label>
                    <input name='genre' type="text" onChange={this.handleChange} value={this.state.genre}></input>
                    <button className="btn btn-primary" type='submit' onClick={this.addSong}>Add Song</button>
                </form>
            </div>
            </center>
        </div>
        );
    }
}

export default SongForm