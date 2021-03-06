import FilmItem from "./FilmItem";

const FilmList = ({ films, handleDeleteFilm }) => {
  return (
    <div className="film-list">
      <ul>
        {films.map((film) => (
          <li key={film.imdbID}>
            <FilmItem film={film} handleDeleteFilm={handleDeleteFilm} />
            <button onClick={() => handleDeleteFilm(film.imdbID)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilmList;
