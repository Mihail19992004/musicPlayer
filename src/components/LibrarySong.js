import React from 'react'
import {playAudio} from "../util";

const LibrarySong = ({song,songs, setCurrentSong, id, audioRef, isPlaying,setSongs}) => {
    const songSelectHandler = async () => {
        const selectedSong = songs.filter((state) => state.id === id);
        await setCurrentSong(selectedSong[0]);
        //Set Active in library
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true,
                };
            } else {
                return {
                    ...song,
                    active: false,
                };
            }
        });
        setSongs(newSongs);

        if (isPlaying) audioRef.current.play()



    };
    return(
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ''} `}>
            <img src={song.cover} alt="cover"/>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>

        </div>

    )
}
export default LibrarySong