// Declare toggleMenu in global scope
function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
    const body = document.body;
    
    console.log('Toggle menu clicked'); 
    
    if (sideMenu.classList.contains('active')) {
        sideMenu.classList.remove('active');
        overlay.classList.remove('show-overlay');
        body.classList.remove('menu-open');
    } else {
        sideMenu.classList.add('active');
        overlay.classList.add('show-overlay');
        body.classList.add('menu-open');
    }
}

// Initialize menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    
    // Add click event listener to overlay
    overlay.addEventListener('click', function() {
        const sideMenu = document.getElementById('sideMenu');
        if (sideMenu.classList.contains('active')) {
            toggleMenu();
        }
        closePopup();
    });
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all the necessary elements
    const container = document.getElementById("genresScroll");
    const leftBtn = document.querySelector(".scroll-btn.left");
    const rightBtn = document.querySelector(".scroll-btn.right");

    // Add click event listeners to the buttons
    leftBtn.addEventListener('click', function() {
        console.log('Left button clicked'); // Debug log
        container.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });

    rightBtn.addEventListener('click', function() {
        console.log('Right button clicked'); // Debug log
        container.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });

    // Optional: Show/hide buttons based on scroll position
    if (container) {
        container.addEventListener('scroll', function() {
            leftBtn.style.opacity = container.scrollLeft > 0 ? '1' : '0.5';
            rightBtn.style.opacity = 
                (container.scrollLeft < (container.scrollWidth - container.clientWidth)) 
                ? '1' : '0.5';
        });
    }
});

// === Theme Toggle ===
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById("themeIcon");
  const themeLabel = document.getElementById("themeLabel");

  body.classList.toggle("light-theme");

  if (body.classList.contains("light-theme")) {
    themeIcon.textContent = "☀️";
    themeLabel.textContent = "Light";
    localStorage.setItem("theme", "light");
  } else {
    themeIcon.textContent = "🌙";
    themeLabel.textContent = "Dark";
    localStorage.setItem("theme", "dark");
  }
}

// === Load Saved Theme ===
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  const themeIcon = document.getElementById("themeIcon");
  const themeLabel = document.getElementById("themeLabel");

  if (savedTheme === "light") {
    body.classList.add("light-theme");
    themeIcon.textContent = "☀️";
    themeLabel.textContent = "Light";
  } else {
    themeIcon.textContent = "🌙";
    themeLabel.textContent = "Dark";
  }
});
function openPopup() {
  document.getElementById('overlay').classList.add('show-overlay');
  document.getElementById('popup').classList.add('show-popup');
}

function closePopup() {
  document.getElementById('overlay').classList.remove('show-overlay');
  document.getElementById('popup').classList.remove('show-popup');
}

function closeSearchPopup() {
  document.getElementById('searchPopup').classList.remove('show');
  document.getElementById('overlay').classList.remove('show-overlay');
}

// Movie database - mapping movies to their pages
const movieDatabase = {
    // Comedy movies
    "3 idiots": "comedy.html",
    "hera pheri": "comedy.html",
    "de dana dan": "comedy.html",
    "welcome": "comedy.html",
    "dhamaal": "comedy.html",
    "golmaal": "comedy.html",
    "chup chup ke": "comedy.html",
    "bhool bhulaiyaa": "comedy.html",
    "housefull": "comedy.html",
    "fukrey": "comedy.html",

    // Top IMDb movies
    "the shawshank redemption": "imdb.html",
    "the godfather": "imdb.html",
    "the dark knight": "imdb.html",
    "the godfather part ii": "imdb.html",
    "12 angry men": "imdb.html",
    "schindler's list": "imdb.html",
    "pulp fiction": "imdb.html",
    "the good, the bad and the ugly": "imdb.html",
    "forrest gump": "imdb.html",

    // Top Actors movies
    "morgan freeman": "top-actors.html",
    "leonardo dicaprio": "top-actors.html",
    "robert de niro": "top-actors.html",
    "tom hanks": "top-actors.html",
    "brad pitt": "top-actors.html",
    "denzel washington": "top-actors.html",
    "christian bale": "top-actors.html",
    "al pacino": "top-actors.html",
    "johnny depp": "top-actors.html",
    "gary oldman": "top-actors.html",

    // Top Actresses movies
    "meryl streep": "top-actresses.html",
    "cate blanchett": "top-actresses.html",
    "viola davis": "top-actresses.html",
    "julia roberts": "top-actresses.html",
    "emma thompson": "top-actresses.html",
    "nicole kidman": "top-actresses.html",
    "jodie foster": "top-actresses.html",
    "kate winslet": "top-actresses.html",
    "helen mirren": "top-actresses.html",
    "judi dench": "top-actresses.html",

    // Trending movies
    "oppenheimer": "trending.html",
    "barbie": "trending.html",
    "killers of the flower moon": "trending.html",
    "napoleon": "trending.html",
    "the killer": "trending.html",
    "blue beetle": "trending.html",
    "the marvels": "trending.html",
    "dune: part two": "trending.html",
    "five nights at freddy's": "trending.html",
    "wonka": "trending.html",

     // 💥 Action
    "mad max: fury road": "action.html",
    "john wick": "action.html",
    "die hard": "action.html",
    "mission impossible": "action.html",
    "the dark knight": "action.html",
    "gladiator": "action.html",
    "terminator": "action.html",
    "extraction": "action.html",
    "the matrix": "action.html",
    "avengers": "action.html",


  // ❤️ Romance
  "the notebook": "romance.html",
    "pride and prejudice": "romance.html",
    "titanic": "romance.html",
    "la la land": "romance.html",
    "a walk to remember": "romance.html",
    "me before you": "romance.html",
    "crazy rich asians": "romance.html",
    "notting hill": "romance.html",
    "the fault in our stars": "romance.html",
    "dear john": "romance.html",

  // 😱 Horror
   "the exorcist": "horror.html",
    "a quiet place": "horror.html",
    "the conjuring": "horror.html",
    "get out": "horror.html",
    "the shining": "horror.html",
    "hereditary": "horror.html",
    "the babadook": "horror.html",
    "it follows": "horror.html",
    "sinister": "horror.html",
    "the thing": "horror.html",

  // 🧙 Fantasy
  "harry potter": "fantasy.html",
  "lord of the rings": "fantasy.html",
  "lord of the rings": "fantasy.html",
  "lord of the rings": "fantasy.html",
  "lord of the rings": "fantasy.html",
  "lord of the rings": "fantasy.html",
  "lord of the rings": "fantasy.html",
  "lord of the rings": "fantasy.html",
  "lord of the rings": "fantasy.html",
  "lord of the rings": "fantasy.html",
  

  // 🎬 Anime
   "spirited away": "anime.html",
    "your name": "anime.html",
    "princess mononoke": "anime.html",
    "akira": "anime.html",
    "my neighbor totoro": "anime.html",
    "howl's moving castle": "anime.html",
    "demon slayer: mugen train": "anime.html",
    "perfect blue": "anime.html",
    "ghost in the shell": "anime.html",
    "grave of the fireflies": "anime.html",


  // 🎭 Drama
  "the shawshank redemption": "drama.html",
    "forrest gump": "drama.html",
    "the green mile": "drama.html",
    "schindler's list": "drama.html",
    "the godfather": "drama.html",
    "the pursuit of happyness": "drama.html",
    "a beautiful mind": "drama.html",
    "good will hunting": "drama.html",
    "the theory of everything": "drama.html",
    "dead poets society": "drama.html",


  // 📽️ Documentary
  "planet earth ii": "documentary.html",
    "my octopus teacher": "documentary.html",
    "free solo": "documentary.html",
    "march of the penguins": "documentary.html",
    "the social dilemma": "documentary.html",
    "blackfish": "documentary.html",
    "bowling for columbine": "documentary.html",
    "the last dance": "documentary.html",
    "food inc.": "documentary.html",
    "inside job": "documentary.html",

  //thriller
  "se7en": "suspense.html",
    "shutter island": "suspense.html",
    "gone girl": "suspense.html",
    "the sixth sense": "suspense.html",
    "prisoners": "suspense.html",
    "memento": "suspense.html",
    "fight club": "suspense.html",
    "nightcrawler": "suspense.html",
    "rear window": "suspense.html",
    "the others": "suspense.html",
};

// Initialize search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('search');
    console.log('Search box found:', searchBox); // Debug log

    if (searchBox) {
        searchBox.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchQuery = this.value.trim().toLowerCase();
                console.log('Searching for:', searchQuery); // Debug log
                
                // Check if movie exists in our database
                if (searchQuery in movieDatabase) {
                    console.log('Movie found! Redirecting to:', movieDatabase[searchQuery]); // Debug log
                    window.location.href = movieDatabase[searchQuery];
                } else {
                    console.log('Movie not found, showing popup'); // Debug log
                    document.getElementById('overlay').classList.add('show-overlay');
                    document.getElementById('searchPopup').classList.add('show');
                }
            }
        });

        // Add immediate feedback on input
        searchBox.addEventListener('input', function() {
            console.log('Current search text:', this.value); // Debug log
        });
    } else {
        console.error('Search box not found in the document!'); // Debug log
    }
});

for (let i = 0; i <= 100; i += 20) {
  setTimeout(() => {
    console.clear();
    console.log(`Progress: ${i}%`);
    if (i === 100) console.log("✅ Completed!");
  }, i * 100);
}



