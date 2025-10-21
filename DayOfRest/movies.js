const movies = [
{
    id: 1,
    title: "The Prince of Egypt",
    releaseYear: "1998",
    description: 
    "Egyptian Prince Moses learns of his identity as a Hebrew and his destiny to become the chosen deliverer of his people.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Prince_of_egypt_ver2.jpg/250px-Prince_of_egypt_ver2.jpg",
    imgAlt: "Movie poster for The Prince of Egypt",
    rating: "PG",
    genre: "Animation, Musical, Family",
    runtime: "1h 39m",
    review: "7.2/10"
},
{
    id: 2,
    title: "The Forge",
    releaseYear: "2024",
    description: "After graduating from high school without any plans for the future, Isaiah receives a push to start making better life decisions.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/The_Forge.jpg/250px-The_Forge.jpg",
    imgAlt: "Movie Poster for The Forge",
    rating: "PG",
    genre: "Coming-of-Age, Drama, Family",
    runtime: "2h 4m",
    review: "6.7/10"
},
{
    id: 3,
    title: "I Can Only Imagine",
    releaseYear: "2018",
    description: "The inspiring and unknown true story behind MercyMe's beloved, chart topping song that brings ultimate hope to so many is a gripping reminder of the power of true forgiveness.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/I-Can-Only-Imagine-Poster.jpg/250px-I-Can-Only-Imagine-Poster.jpg",
    imgAlt: "Movie Poster for I Can Only Imagine",
    rating: "PG",
    genre: "Coming-of-Age, Docudrama, Family",
    runtime: "1h 50m",
    review: "7.3/10",
},
{
    id: 4,
    title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    releaseYear: "2005",
    description: "While playing, Lucy and her siblings find a wardrobe that lands them in a mystical place called Narnia. Here they realize that it was fated and they must now unite with Aslan to defeat an evil queen.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/The_Chronicles_of_Narnia_-_The_Lion%2C_the_Witch_and_the_Wardrobe.jpg/250px-The_Chronicles_of_Narnia_-_The_Lion%2C_the_Witch_and_the_Wardrobe.jpg",
    imgAlt: "Movie poster for The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    rating: "PG",
    genre: "Fantasy, Adventure, Family",
    runtime: "2h 23m",
    review: "6.9/10",
},
{
    id: 5,
    title: "The Passion of the Christ",
    releaseYear: "2004",
    description: "Depicts the final twelve hours in the life of Jesus of Nazareth, on the day of his crucifixion in Jerusalem.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/The_Passion_of_the_Christ_poster.png/250px-The_Passion_of_the_Christ_poster.png",
    imgAlt: "Movie poster for The Passion of the Christ",
    rating: "R",
    genre: "Epic, Drama",
    runtime: "2h 7m",
    review: "7.3/10",
},
{
    id: 6,
    title: "God's Not Dead",
    releaseYear: "2014",
    description: "College philosophy professor Mr. Radisson's curriculum is challenged by his new student, Josh, who believes God exists.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/c/cf/God%27s_Not_Dead.jpg",
    imgAlt: "Movie poster for God's Not Dead",
    rating: "PG",
    genre: "Drama, Romance",
    runtime: "1h 53m",
    review: "4.6/10",
},
{
    id: 7,
    title: "A Week Away",
    releaseYear: "2021",
    description: "With nowhere left to go, Will Hawkins finds himself at camp for the first time. His instinct is to run, but he finds a friend, a father figure, and even a girl who awakens his heart. Most of all, he finally finds a home.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/A_Week_Away_2021_Film_poster.png/250px-A_Week_Away_2021_Film_poster.png",
    imgAlt: "Movie poster for A Week Away",
    rating: "PG",
    genre: "Musical, Teen Drama, Family",
    runtime: "1h 34m",
    review: "5.8/10",
},
{
    id: 8,
    title: "Heaven Is for Real",
    releaseYear: "2014",
    description: "A small-town father must find the courage and conviction to share his son's extraordinary, life-changing experience with the world.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/b/b3/Heaven_Is_for_Real_%28Burpo_book%29_cover.jpg",
    imgAlt: "Movie poster for Heaven Is for Real",
    rating: "PG",
    genre: "Biography, Drama, Family",
    runtime: "1h 39m",
    review: "5.9/10",
},
{
    id: 9,
    title: "God's Not Dead 2",
    releaseYear: "2016",
    description: "When a high school teacher is asked a question in class about Jesus, her response lands her in deep trouble.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/4/42/God%27s_Not_Dead_2_poster.jpg",
    imgAlt: "Movie poster for God's Not Dead 2",
    rating: "PG",
    genre: "Legal Drama",
    runtime: "2h",
    review: "4.4/10",
},
{
    id: 10,
    title: "War Room",
    releaseYear: "2015",
    description: "A seemingly perfect family looks to fix their problems with the help of Miss Clara, an older, wiser woman.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/WarRoomMoviePoster.jpg/250px-WarRoomMoviePoster.jpg",
    imgAlt: "Poster for War Room",
    rating: "PG",
    genre: "Drama",
    runtime: "2h",
    review: "6.5/10",
},
{
    id: 11,
    title: "Remember the Titans",
    releaseYear: "2000",
    description: "In 1971, Virginia high-school football was everything to the people of Alexandria, but when the school board was forced to integrate an all-Black school with an all-white one, the foundation of football's tradition was put to the test.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/d/d1/Remember_the_titansposter.jpg",
    imgAlt: "Poster for Remember the Titans",
    rating: "PG",
    genre: "Drama, Comedy, Sport",
    runtime: "1h 53m",
    review: "7.8/10",
},
]

const movieContainer = document.querySelector('.movies')

function movieTemplate(movie) {
	const template = `      
        <div class="movies-content">
            <h2>${movie.title}</h2>
            
            <img src="${movie.imgSrc}" alt="${movie.imgAlt}">
            
            <p>${movie.description}</p>
        </div>
        <div class="movie-details">
            <p class="release-year"><strong>Released:</strong> ${movie.releaseYear}</p>
            
            <p class="rating"><strong>Rating:</strong> ${movie.rating}</p>
            
            <p class="genre"><strong>Genre:</strong> ${movie.genre}</p>

            <p class="runtime"><strong>Runtime:</strong> ${movie.runtime}</p>
            
            <p class="review"><strong>Review:</strong> ${movie.review}</p>
        </div>
    `;
	return template;
}

function displayMovies(movies) {
	movies.forEach(movie => {
		const newMovie = document.createElement('article');
		const movieHtml = movieTemplate(movie);
        newMovie.innerHTML = movieHtml;
		movieContainer.appendChild(newMovie);
	});
}

displayMovies(movies);