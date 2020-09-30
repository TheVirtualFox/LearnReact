import React from "react";
import {connect} from "react-redux";

const SongDetail = (props) => {
  console.log(props);
  let song = props.song;
  if (!song) {
      return <div>Select a song</div>;
  }
  return (
    <div>
        <h3>Details for:</h3>
        <div>Title: {song.title} Duration: {song.duration}</div>
    </div>
  );
};

const mapStateToProps = state => {
    return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);