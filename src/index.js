// Your code here

//Global Variables used in different functions
let availableTickets= 0;
 
//Retrieve the first movie only
function retrieveFirstMovie(){             

    fetch(" http://localhost:3000/films/1")
    .then(resp => resp.json())
    .then(data => displayMovie(data))
}

//retrieving All movies in a list
function retrieveMovieList(){

    fetch(" http://localhost:3000/films")
    .then(resp => resp.json())
    .then(data => displayList(data))
}

//Passes text and image link to elements

function displayMovie(movie){     
    availableTickets= movie.capacity-movie.tickets_sold;
    document.querySelector("#poster").src=movie.poster;
    document.querySelector("#title").innerText=movie.title;
    document.querySelector("#runtime").innerText=movie.runtime;
    document.querySelector("#showtime").innerText=movie.showtime;
    document.querySelector("#film-info").innerText=movie.description;
    document.querySelector('#ticket-num').innerText=availableTickets;
}

//Dispays list of movies with event listeners
function displayList(movieList){        
    document.querySelector("#films li").remove();

    movieList.forEach((movie)=>{
        let newList=document.createElement("li");
        newList.innerText=movie.title;
        newList.className="film item";


//This event listener allows us to display and call different movies.
         newList.addEventListener('click',()=>{         
            console.log("click");
            selected=newList.innerText;
            displayMovie(movie);
        })
        document.querySelector("#films").appendChild(newList);

    })
    
}


//The button for buy ticket
function buyTicket(){  
  button=document.querySelector("#buy-ticket");
  button.addEventListener('click',()=>{
    if(availableTickets>0){
    availableTickets=3
    document.querySelector('#ticket-num').innerText=availableTickets;}
    else(alert("No more tickets!"))
});
  
}



retrieveFirstMovie();
retrieveMovieList();
buyTicket();