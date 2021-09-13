import React, {Component} from "react";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import MusicTable from "./MusicTable/musicTable";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            songs: []
        };
        this.songs= {
            title: '',
            artist: '',
            album: '',
            release_date: '',
            genre: '',
        }
    }

    componentDidMount(){
        this.makeGetRequest();
    }

    async makeGetRequest(){
        try{
            let response = await axios.get('http://127.0.0.1:8000/music/');
            let allsongs = response.data
            this.setState({
                songs:allsongs
            });
        }
        catch (ex) {
            console.log('Error in API call!');
        }
    }

    async deleteSong(id){
        debugger
        try{
            let response = await axios.delete(`http://127.0.0.1:8000/music/${id}/`)
            console.log(response)
        }
        catch (ex) {
            console.log('Error in Delete API call!');
        }
    }

    async addSong(){
        try{
            axios.create(`http://127.0.0.1:8000/music/`)
            console.log(response)
        }
        catch (ex) {
            console.log('Error in Create API call!');
        }
    }

    render() {
        return (
            <div>
                <MusicTable song={this.state.songs}
                deleteSong={this.deleteSong}/>
            </div>
        );
    }
}

export default App;