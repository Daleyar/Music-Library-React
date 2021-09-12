import React, {Component} from "react";
import axios from 'axios'
import LibraryTable from "./LibraryTable/libraryTable";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            allsongs: []
        };
    }

    componentDidMount(){
        this.getAllSongs();
    }

    async getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/');
        let songlist = response.data
        this.setState({
            allsongs: songlist
        })
    }

    render() {
        return (
            <div>
                <LibraryTable songs={this.state.allsongs}/>
            </div>
        );
    }
}

export default App;