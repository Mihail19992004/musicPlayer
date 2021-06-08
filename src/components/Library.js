import React from 'react'
import LibrarySong from "./LibrarySong";

const Library = ({songs,isPlaying, setCurrentSong,audioRef, setSongs, libraryStatus}) => {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''} `}>
            <h2>Library</h2>
            <div className="library-songs">
                {
                    songs.map(song => <LibrarySong isPlaying={isPlaying} setSongs={setSongs} songs={songs} id={song.id} key={song.id} song={song} audioRef={audioRef} setCurrentSong={setCurrentSong}/>)
                }
            </div>
        </div>
    )
}

export default Library