const movies = [
{
    id: 1,
    title: "The Prince of Egypt",
    releaseYear: "1998",
    description: 
    "Egyptian Prince Moses learns of his identity as a Hebrew and his destiny to become the chosen deliverer of his people.",
    imgSrc: "Images/id-1.jpg",
    // https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Prince_of_egypt_ver2.jpg/250px-Prince_of_egypt_ver2.jpg
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
    imgSrc: "Images/id-2.jpg",
    // https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/The_Forge.jpg/250px-The_Forge.jpg
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
    imgSrc: "Images/id-3.jpg",
    // https://upload.wikimedia.org/wikipedia/en/thumb/3/36/I-Can-Only-Imagine-Poster.jpg/250px-I-Can-Only-Imagine-Poster.jpg
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
    imgSrc: "Images/id-4.jpg",
    // https://upload.wikimedia.org/wikipedia/en/thumb/1/10/The_Chronicles_of_Narnia_-_The_Lion%2C_the_Witch_and_the_Wardrobe.jpg/250px-The_Chronicles_of_Narnia_-_The_Lion%2C_the_Witch_and_the_Wardrobe.jpg
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
    imgSrc: "Images/id-5.png",
    // https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/The_Passion_of_the_Christ_poster.png/250px-The_Passion_of_the_Christ_poster.png
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
    imgSrc: "Images/id-6.jpg",
    // https://upload.wikimedia.org/wikipedia/en/c/cf/God%27s_Not_Dead.jpg
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
    imgSrc: "Images/id-7.png",
    // https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/A_Week_Away_2021_Film_poster.png/250px-A_Week_Away_2021_Film_poster.png
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
    imgSrc: "Images/id-8.jpg",
    // https://upload.wikimedia.org/wikipedia/en/b/b3/Heaven_Is_for_Real_%28Burpo_book%29_cover.jpg
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
    imgSrc: "Images/id-9.jpg",
    // https://upload.wikimedia.org/wikipedia/en/4/42/God%27s_Not_Dead_2_poster.jpg
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
    imgSrc: "Images/id-10.jpg",
    // https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/WarRoomMoviePoster.jpg/250px-WarRoomMoviePoster.jpg
    imgAlt: "Movie poster for War Room",
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
    imgSrc: "Images/id-11.jpg",
    // https://upload.wikimedia.org/wikipedia/en/d/d1/Remember_the_titansposter.jpg
    imgAlt: "",
    rating: "PG",
    genre: "Drama, Comedy, Sport",
    runtime: "1h 53m",
    review: "7.8/10",
},
{
    id: 12,
    title: "Unsung Hero",
    releaseYear: "2024",
    description: "A mother's faith stands against all odds and inspires her husband and children to hold onto theirs. Based on a remarkable true story.",
    imgSrc: "Images/id-12.jpg",
    //https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Unsung_Hero_poster.jpg/250px-Unsung_Hero_poster.jpg
    imgAlt: "Movie poster for Unsung Hero",
    rating: "PG",
    genre: "Drama, Family",
    runtime: "1h 53m",
    review: "7/10",
},
{
    id: 13,
    title: "God's Not Dead: A Light in Darkness",
    releaseYear: "2018",
    description: "Now the late 2010s, an aging Reverend Dave faces cultural and social backlash, including having his church burned down during a protest, and he is antagonized by atheists, leftists, liberal college students, the school board, and rioters.",
    imgSrc: "Images/id-13.jpeg",
    // https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/GodsNotDead3.jpeg/250px-GodsNotDead3.jpeg
    imgAlt: "Movie poster for God's Not Dead: A Light in Darkness",
    rating: "PG",
    genre: "Drama",
    runtime: "1h 45m",
    review: "4.5/10",
},
{
    id: 14,
    title: "God's Not Dead: We the People",
    releaseYear: "2021",
    description: "Reverend Dave defending himself and a group of Christian homeschooling families after the inspection by the local government official.",
    imgSrc: "Images/id-14.png",
    // https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/God%27s_Not_Dead_4_poster.png/250px-God%27s_Not_Dead_4_poster.png
    imgAlt: "Movie poster for God's Not Dead: We the People",
    rating: "PG",
    genre: "Drama",
    runtime: "1h 32m",
    review: "4.3/10",
},
{
    id: 15,
    title: "God's Not Dead: In God We Trust",
    releaseYear: "2024",
    description: "Amid political and spiritual turmoil, Reverend David Hill steps up to run for Congress. Opponent Peter Kane, aims to erase religion from policy, and the fight becomes a beacon of hope for people seeking moral leadership in a divided world.",
    imgSrc: "Images/id-15.webp",
    // https://godsnotdead.com/wp-content/uploads/2024/08/GND-IGWT_poster-art_with-header-2.png
    imgAlt: "Movie poster for God's Not Dead: In God We Trust",
    rating: "Not Rated",
    genre: "Drama",
    runtime: "1h 36m",
    review: "3.4/10",
},
{
    id: 16,
    title: "Miracles from Heaven",
    releaseYear: "2016",
    description: "Based on the incredible true story of the Beam family.",
    imgSrc: "Images/id-16.jpg",
    // https://upload.wikimedia.org/wikipedia/en/6/62/Miracles_from_Heaven_poster.jpg
    imgAlt: "Movie poster for Miracles from Heaven",
    rating: "PG",
    genre: "Biography, Drama, Family",
    runtime: "1h 49m",
    review: "7.1/10",
},
{
    id: 17,
    title: "Soul Surfer",
    releaseYear: "2011",
    description: "Bethany Hamilton, a professional surfer, loses her left arm in a shark attack. Unwilling to pay attention to the gravity of her situation, Bethany decides to get back into the ocean and surf again.",
    imgSrc: "Images/id-16.jpg",
    // https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Soul_Surfer_Poster.jpg/250px-Soul_Surfer_Poster.jpg
    imgAlt: "Movie poster for Soul Surfer",
    rating: "PG",
    genre: "Drama, Sport, Family",
    runtime: "1h 52m",
    review: "7/10",
},
{
    id: 18,
    title: "Unbroken: Path to Redemption",
    releaseYear: "2018",
    description: "The next amazing chapter of Olympian and World War II hero Louis Zamperini's powerful true story of forgiveness, redemption, and amazing grace.",
    imgSrc: "Images/id-18.jpg",
    // https://upload.wikimedia.org/wikipedia/en/7/76/Unbroken_poster.jpg
    imgAlt: "Movie poster for Unbroken: Path to Redemption",
    rating: "PG-13",
    genre: "Biography, Drama, History",
    runtime: "1h 38m",
    review: "5.8/10",
},
{
    id: 19,
    title: "Escape from Germany",
    releaseYear: "2024",
    description: "1939, Hitler's army was closing borders, and eighty-five American missionaries were in Germany serving their church. The escape of these missionaries from Nazi Germany is one of the most dramatic events to occur in modern church history.",
    imgSrc: "Images/id-19.jpg",
    // https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Escape_from_Germany_%282024_film%29.jpg/250px-Escape_from_Germany_%282024_film%29.jpg
    imgAlt: "Movie poster for Escape from Germany",
    rating: "PG",
    genre: "Docudrama, Drama, History, War",
    runtime: "1h 37m",
    review: "5.5/10",
},
{
    id: 20,
    title: "Ephraim's Rescue",
    releaseYear: "2013",
    description: "By listening to and following his heart, Ephraim Hanks finds his way in life and eventually provides relief and rescue to the suffering Martin Handcart Company. Based on a true story",
    imgSrc: "Images/id-20.jpg",
    // https://upload.wikimedia.org/wikipedia/en/4/46/EphraimsRescue.jpg
    imgAlt: "Movie poster for Ephraim's Rescue",
    rating: "PG",
    genre: "Adventure, Drama, History",
    runtime: "1h 39m",
    review: "5.8/10",
},
]

const movieContainer = document.querySelector('.movies');
const sortBySelect = document.getElementById('sort-by');
const genreSelect = document.getElementById('filter-genre');
const ratingSelect = document.getElementById('filter-rating');

function populateFilters() {
    // This will add the Genres
    const allGenres = new Set();
    movies.forEach(movie => {
        movie.genre.split(', ').forEach(genre => {
            allGenres.add(genre.trim());
        });
    });
    
    // This will sort the genres alphabetically and add it to the dropdown
    [...allGenres].sort().forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genreSelect.appendChild(option);
    });

    // This will add the ratings
    const allRatings = new Set(movies.map(movie => movie.rating));
    
    // This will sort the ratings and will add them to the dropdown menu
    [...allRatings].sort().forEach(rating => {
        const option = document.createElement('option');
        option.value = rating;
        option.textContent = rating;
        ratingSelect.appendChild(option);
    });
}

function movieTemplate(movie) {
	const template = `      
    <article>
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
    </article>
    `;
	return template;
}

function displayMovies(movies) {
    const allMoviesHtml = movies.map(movieTemplate).join('');
    movieContainer.innerHTML = allMoviesHtml;
}

function applyFiltersAndSort() {
    let filteredMovies = [...movies];
    
    // This will get the current filter and their values
    const selectedGenre = genreSelect.value;
    const selectedRating = ratingSelect.value;
    const sortBy = sortBySelect.value;

    if (selectedGenre !== 'all') {
        filteredMovies = filteredMovies.filter(movie => 
            movie.genre.includes(selectedGenre)
        );
    }

    if (selectedRating !== 'all') {
        filteredMovies = filteredMovies.filter(movie => 
            movie.rating === selectedRating
        );
    }
    // I had AI help me figure out how to split the string here because I had a hard time getting it to work
    const getReviewScore = (reviewString) => parseFloat(reviewString.split('/')[0]);
    // I also learned how to do this part from AI how to use use switch statements for the sorting option
    switch (sortBy) {
        case 'title-az':
            filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'title-za':
            filteredMovies.sort((a, b) => b.title.localeCompare(a.title));
            break;
        case 'year-newest':
            filteredMovies.sort((a, b) => b.releaseYear - a.releaseYear);
            break;
        case 'year-oldest':
            filteredMovies.sort((a, b) => a.releaseYear - b.releaseYear);
            break;
        case 'rating-highest':
            filteredMovies.sort((a, b) => getReviewScore(b.review) - getReviewScore(a.review));
            break;
        case 'rating-lowest':
            filteredMovies.sort((a, b) => getReviewScore(a.review) - getReviewScore(b.review));
            break;
    }

    displayMovies(filteredMovies);
}


sortBySelect.addEventListener('change', applyFiltersAndSort);
genreSelect.addEventListener('change', applyFiltersAndSort);
ratingSelect.addEventListener('change', applyFiltersAndSort);

populateFilters();
displayMovies(movies);