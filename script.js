const searchBtn = document.querySelector(".btn-outline-success");
const selector = document.querySelector('h2');

function sendToPage() {
  var searcher = document.getElementById("searchBar").value;
  getUrl(searcher);
}

function getUrl(searcher) {
  const URL = `https://www.omdbapi.com/?s=${searcher}&apikey=545c6e28`;
  displayData(URL);
}








//searchBar
searchBtn.addEventListener('click', getMovie);

//Movie findr
const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=7b47e0c2&";
const showMovie = (selector, title) => {
  selector.innerHTML += `
      <div>
          <h5>Here's some on info on ${title} :</h5>
          <br>
      </div>
  `
}

function getMovie(){ 
  fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.Title);
    for (i = 0; i < data.length; i++){
      if (searchBar.includes(data.Title)){
        showMovie(selector, data.Title);
      }else {
        console.log("CA MARCHE OU BIEN");
      }
    }
  }); 
  //selector.innerHTML = "";
};





// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


/*
//Movie findr
const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=7b47e0c2&";
const selector = document.querySelector('h2');
const showMovie = (selector, title) => {
  selector.innerHTML += `
      <div>
          <h5>Here's some on info on ${title} :</h5>
          <br>
      </div>
  `
}


//setInterval(
  function(){ fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (i = 0; i < data.data.length; i++){
      if (search === data.data[i].name){

        console.log(data.data[i].weather.icon);
        showMovie(selector, days[i], data.data[i].weather.description, data.data[i].temp);
      }
    }
  }); 
  selector.innerHTML = "";
}; //, 3000);

//Poster findr
const URLPoster = "http://img.omdbapi.com/?i=tt3896198&apikey=7b47e0c2&";


const allMovies = async () => {
  try {
      const res = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=7b47e0c2');
      listOfMovies = await res.json();
  } catch (err) {
      console.error(err);
  }

  search.addEventListener("keyup", (e) => {
    const movieSearch = e.target.value.toLowerCase();
    console.log(movieSearch);

    const movieFilter = (listOfMovies.filter((movie) => {
      if (movie.title.toLowerCase().includes(movieSearch)){
        displayMovie(movie);
      }
    }));
    console.log(movieFilter);
  });
};

allMovies();



const displayMovie = (movie) => {
  const htmlString = movie
      .map((movie) => {
          return `
          <li class="movie">
              <h2>${movie.Title}</h2>
              <p>House: ${movie.Released}</p>
              <img src="${movie.Poster}"></img>
              <p>CTA</p>
          </li>
      `;
      })
      .join('');
  selector.innerHTML = htmlString;
};
*/