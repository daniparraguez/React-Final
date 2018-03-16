import React from 'react';
import './NewMovies.css';
import { Image } from 'react-bootstrap';


class NewMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    const key = 'f3e9f7d1677c7aa63c9ab526381eeceb';

    // Get a date range between today and one month ago to dynamically update the link for the request
    let todayDate = new Date();
    let today = todayDate.getFullYear() + '-' + (todayDate.getMonth() + 1) + '-' + todayDate.getDate();
    let oneMonthAgo = (todayDate.getMonth() === 0 ? todayDate.getFullYear() - 1 : todayDate.getFullYear()) + '-' + (todayDate.getMonth() === 0 ? todayDate.getMonth() + 12 : todayDate.getMonth()) + '-' + todayDate.getDate();

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${oneMonthAgo}&primary_release_date.lte=${today}`)
      .then(response => {
        if (response.status !== 200) {
          console.log('Error: ' + response.status);
          return;
        }

        response.json().then(data => {
          const movies = data.results;
          this.setState({ movies });
        });

      })
      .catch(err => {
        console.log('Error', err);
      })
  }

  render() {
    return(
      <section>
        <h2 className="new">New releases</h2>
        <div >
          {this.state.movies.map((movie, index) => {
            return (
  <div className="newMovies">
<div className="new">{movie.title}</div>
<Image src={this.state.movies[index].poster_path === null ? 'http://via.placeholder.com/200x300' : `https://image.tmdb.org/t/p/w300/${this.state.movies[index].poster_path}`} alt={`${this.state.movies.title} poster`} className="imgResponsive" />
</div>

            )
          })}
        </div>
      </section>
    );
  }
}

export default NewMovies;