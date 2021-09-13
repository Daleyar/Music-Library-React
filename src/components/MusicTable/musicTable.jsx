import React from "react";

const MusicTable = (props) => {
    return (
        <div className="text-center">
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                    <th>Delete Song</th>
                </tr>
            </thead>
            <tbody>
                {props.song.map((songs, index) => {
                    return (
                    <tr key={index}>
                        <td>{songs.title}</td>
                        <td>{songs.artist}</td>
                        <td>{songs.album}</td>
                        <td>{songs.release_date}</td>
                        <td>{songs.genre}</td>
                        <td>
                        <button className="btn btn-danger" onClick={(event) => props.deleteSong(songs.id)}>
                            Delete
                        </button>  
                        </td>
                    </tr>
                );
                })}
            </tbody>
        </table>
        </div>
    )
}

export default MusicTable