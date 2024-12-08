document.addEventListener("DOMContentLoaded", () => {
    const dynamicContent = document.getElementById("dynamic-content");
    const page = new URLSearchParams(window.location.search).get("page") || "home";

    // Load dynamic page
    if (page === "artist") {
        fetch("artist.html")
            .then((response) => {
                if (!response.ok) throw new Error("Artist page not found");
                return response.text();
            })
            .then((content) => {
                dynamicContent.innerHTML = content;

                // Dynamically load artist.js
                const script = document.createElement("script");
                script.src = "artist.js";
                document.body.appendChild(script);
            })
            .catch((err) => {
                dynamicContent.innerHTML = "<h1>Artist page not found!</h1>";
                console.error(err);
            });
    } else if (page === "playlist") {
        fetch("playlist.html")
            .then((response) => {
                if (!response.ok) throw new Error("Playlist page not found");
                return response.text();
            })
            .then((content) => {
                dynamicContent.innerHTML = content;

                // Dynamically load playlist.js
                const script = document.createElement("script");
                script.src = "playlist.js";
                document.body.appendChild(script);
            })
            .catch((err) => {
                dynamicContent.innerHTML = "<h1>Playlist page not found!</h1>";
                console.error(err);
            });
    } else {
        fetch(`${page}.html`)
            .then((response) => {
                if (!response.ok) throw new Error(`Page ${page} not found`);
                return response.text();
            })
            .then((content) => {
                dynamicContent.innerHTML = content;
            })
            .catch((err) => {
                dynamicContent.innerHTML = "<h1>Page not found</h1>";
                console.error(err);
            });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const musicPlayer = document.getElementById("music-player");
    const toggleButton = document.getElementById("toggle-player");

    // שחזור מצב הנגן מ-localStorage
    const savedState = localStorage.getItem("playerState");
    if (savedState === "collapsed") {
        musicPlayer.classList.add("collapsed");
        musicPlayer.style.maxHeight = "25px";
        musicPlayer.style.padding = "5px";
    }

    // הוספת אירוע לחיצה לשינוי מצב הנגן
    toggleButton.addEventListener("click", () => {
        if (musicPlayer.classList.contains("collapsed")) {
            // מצב פתוח
            musicPlayer.classList.remove("collapsed");
            musicPlayer.style.maxHeight = "200px"; // הגדר גובה פתוח
            musicPlayer.style.padding = "15px"; // הגדר ריווח רגיל
            localStorage.setItem("playerState", "expanded");
        } else {
            // מצב ממוזער
            musicPlayer.classList.add("collapsed");
            musicPlayer.style.maxHeight = "25px"; // הגדר גובה ממוזער
            musicPlayer.style.padding = "5px"; // הגדר ריווח קטן
            localStorage.setItem("playerState", "collapsed");
        }
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const page = new URLSearchParams(window.location.search).get("page");
    if (page === "artist") {
        document.body.classList.add("artist-page");
    }
});



// Function to handle showing and filtering results
function filterResults() {
    const searchInput = document.getElementById("search-bar").value.toLowerCase();
    const resultsContainer = document.getElementById("search-results");

    resultsContainer.innerHTML = ""; // Clear previous results

    if (searchInput.trim() === "") {
        resultsContainer.style.display = "none"; // Hide results if the input is empty
        return;
    }

    // Example data (replace with real data)
    const data = [
        { type: "Song", name: "Sweet Child O' Mine" },
        { type: "Song", name: "Paradise City" },
        { type: "Playlist", name: "Appetite for Destruction" },
        { type: "Artist", name: "Guns N' Roses" },
    ];

    // Filter results based on input
    const filteredResults = data.filter(item =>
        item.name.toLowerCase().includes(searchInput)
    );

    // Display results
    if (filteredResults.length > 0) {
        filteredResults.forEach(item => {
            const div = document.createElement("div");
            div.textContent = `${item.type}: ${item.name}`;
            div.className = "result-item"; // Add a class for styling
            div.addEventListener("click", () => {
                alert(`You selected: ${item.name}`); // Example action on click
            });
            resultsContainer.appendChild(div);
        });
        resultsContainer.style.display = "block"; // Show results
    } else {
        resultsContainer.style.display = "block";
        resultsContainer.innerHTML = "<div class='result-item'>No results found</div>";
    }
}

document.addEventListener("mouseover", (event) => {
    const searchBar = document.querySelector(".box"); // תיבת החיפוש הכוללת
    const resultsContainer = document.getElementById("search-results"); // תיבת התוצאות

    // בדיקה אם העכבר נמצא מחוץ לשניהם
    if (!searchBar.contains(event.target) && !resultsContainer.contains(event.target)) {
        resultsContainer.style.display = "none"; // הסתרת תיבת התוצאות
        searchBar.classList.remove("hover-active"); // ביטול אנימציית ה-hover
    }
});

// הצגת תיבת התוצאות בעת מעבר על תיבת החיפוש
document.querySelector(".box").addEventListener("mouseover", () => {
    const resultsContainer = document.getElementById("search-results");
    resultsContainer.style.display = "block"; // הצגת התוצאות
});

// מניעת סגירת תוצאות כשנמצאים בתוכן התוצאות
document.getElementById("search-results").addEventListener("mouseover", () => {
    const resultsContainer = document.getElementById("search-results");
    resultsContainer.style.display = "block"; // השארת התוצאות מוצגות
});

