import React, { Component } from 'react'

class MoviesList extends Component {
  render() {
    return(
      <div>
        {this.props.profiles.map((profile) => (
           <li key = {profile.id}> 
             {`${this.props.users[profile.id].name}\'s favorite movie is ${this.props.movies[profile.favoriteMovieID].name}`}
           </li>
         ))}
     </div>
   )
  }
}
export default  MoviesList