const moviesList = [
    { Title: "Inception", Year: "2010", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX190_CR0,0,190,281_.jpg" },
    { Title: "Interstellar", Year: "2014", Type: "movie", Poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg" },
    { Title: "The Matrix", Year: "1999", Type: "movie", Poster: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg" },
    { Title: "The Dark Knight", Year: "2008", Type: "movie", Poster: "https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg" },
    { Title: "Avatar", Year: "2009", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BNmQxNjZlZTctMWJiMC00NGMxLWJjNTctNTFiNjA1Njk3ZDQ5XkEyXkFqcGc@._V1_.jpg" },
    { Title: "Titanic", Year: "1997", Type: "movie", Poster: "https://m.media-amazon.com/images/S/pv-target-images/213aec999241f499ac7d8259f1b5170b488978f1132b671ae278f1f823dc4a65.jpg" },
    { Title: "Gladiator", Year: "2000", Type: "movie", Poster: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg" },
    { Title: "Joker", Year: "2019", Type: "movie", Poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZNIQu1YCoJTV2TgWCqWob9REs_T8ByMYgFw&s" },
    { Title: "Frozen", Year: "2013", Type: "movie", Poster: "https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg?region=0%2C0%2C540%2C810" },
    { Title: "Toy Story", Year: "1995", Type: "movie", Poster: "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL.jpg" },
    { Title: "Avengers: Endgame", Year: "2019", Type: "movie", Poster: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg" },
    { Title: "Iron Man", Year: "2008", Type: "movie", Poster: "https://m.media-amazon.com/images/I/51b5YG6Y1rL.jpg" },
    { Title: "Black Panther", Year: "2018", Type: "movie", Poster: "https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg" },
    { Title: "Doctor Strange", Year: "2016", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_FMjpg_UX1000_.jpg" },
    { Title: "Deadpool", Year: "2016", Type: "movie", Poster: "https://m.media-amazon.com/images/I/51K8ouYrHeL.jpg" },
    { Title: "Spider-Man", Year: "2002", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { Title: "The Lion King", Year: "1994", Type: "movie", Poster: "https://m.media-amazon.com/images/I/51UdiBUkerL._AC_.jpg" },
    { Title: "Shrek", Year: "2001", Type: "movie", Poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0686FYITb4Fm_U70yFaqRzU0eFDNSYy1hVg&s" },
    { Title: "Finding Nemo", Year: "2003", Type: "movie", Poster: "https://lumiere-a.akamaihd.net/v1/images/p_findingnemo_19752_05271d3f.jpeg" },
    { Title: "Up", Year: "2009", Type: "movie", Poster: "https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.jpg" }
  ];

  const moviesContainer = document.getElementById('moviesContainer');
  const errorDiv = document.getElementById('error');
  const searchInput = document.getElementById('searchInput');

  function displayMovies(movieArray) {
    moviesContainer.innerHTML = '';
    movieArray.forEach(movie => {
      const card = document.createElement('a'); // Use <a> instead of <div>
      card.className = 'movie-card';
      card.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.Title + ' trailer')}`;
      card.target = "_blank"; // Open in new tab
      card.rel = "noopener noreferrer";
  
      card.innerHTML = `
        <img src="${movie.Poster}" alt="${movie.Title}" />
        <div class="movie-info">
          <h3>${movie.Title}</h3>
          <p>Year: ${movie.Year}</p>
          <p>Type: ${movie.Type}</p>
        </div>
      `;
  
      moviesContainer.appendChild(card);
    });
  }
  

  function searchMovies() {
    const query = searchInput.value.trim().toLowerCase();
    errorDiv.textContent = '';

    if (!query) {
      // Show all if empty
      displayMovies(moviesList);
      return;
    }

    const filtered = moviesList.filter(movie =>
      movie.Title.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
      moviesContainer.innerHTML = '';
      errorDiv.textContent = 'No movies found.';
      return;
    }

    displayMovies(filtered);
  }

  // Show all movies on first load
  window.onload = () => {
    displayMovies(moviesList);
  };
