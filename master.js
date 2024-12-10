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









function filterResults() {
    const searchInput = document.getElementById("search-bar").value.toLowerCase();
    const resultsContainer = document.getElementById("search-results");

    resultsContainer.innerHTML = ""; // ניקוי תוצאות קודמות

    if (searchInput.trim() === "") {
        resultsContainer.style.display = "none"; // הסתרת התוצאות אם הקלט ריק
        return;
    }

    // נתונים מדויקים לפי המבנה שלך
    const data = [
        { type: "Playlist", name: "Appetite for Destruction", url: "master.html?page=playlist&id=1" },
        { type: "Artist", name: "Slash", url: "master.html?page=artist&id=1" },
        { type: "Song", name: "Sweet Child O' Mine", url: "master.html?page=song&id=1" },
        { type: "Song", name: "Paradise City", url: "master.html?page=song&id=2" }
    ];

    // סינון תוצאות לפי קלט
    const filteredResults = data.filter(item =>
        item.name.toLowerCase().includes(searchInput)
    );

    // הצגת תוצאות
    if (filteredResults.length > 0) {
        filteredResults.forEach(item => {
            const div = document.createElement("div");
            div.className = "result-item"; // הוספת מחלקה לעיצוב האב
        
            div.innerHTML = `
                <a style="text-decoration: none; color: black" href="${item.url}" class="result-link">
                    ${item.type}: ${item.name}
                </a>
            `;
        
            resultsContainer.appendChild(div);
        });
        
        resultsContainer.style.display = "block"; // הצגת תיבת התוצאות
    } else {
        resultsContainer.style.display = "block";
        resultsContainer.innerHTML = "<div class='result-item'>לא נמצאו תוצאות</div>";
    }
}


const searchBox = document.querySelector(".box");
const resultsContainer = document.getElementById("search-results");
const searchBar = document.getElementById("search-bar");
const searchIcon = document.querySelector(".box i"); // זכוכית המגדלת

// Keep results visible when hovering on search box or results
function keepResultsVisible() {
    resultsContainer.style.display = "block";
}

// Hide results if leaving both search box and results
function hideResults(event) {
    if (!searchBox.contains(event.target) && !resultsContainer.contains(event.target)) {
        resultsContainer.style.display = "none";
        searchBox.classList.remove("hover-active"); // Remove hover effect
        searchBox.classList.add("no-hover"); // הוספת מחלקת "no-hover"

    }
}

// פונקציה להוספת מחלקה "פעילה" על תיבת החיפוש
function addHoverClass() {
    searchBox.classList.add("hover-active");
    resultsContainer.style.display = "block"; // הצגת תיבת התוצאות
    searchIcon.style.opacity = "0"; // הסתרת זכוכית המגדלת
    searchBar.classList.remove("text-hidden"); // החזרת הטקסט לתצוגה
    searchBox.classList.remove("no-hover"); // הוספת מחלקת "no-hover"

}

// פונקציה להסרת המחלקה "פעילה" ולהוספת המחלקה "no-hover"
function removeHoverClass(event) {
    if (
        !searchBox.contains(event.target) &&
        !resultsContainer.contains(event.target)
    ) {
        searchBox.classList.remove("hover-active"); // הסרת מחלקת "פעילה"
        resultsContainer.style.display = "none"; // הסתרת תיבת התוצאות
        searchIcon.style.opacity = "1"; // הצגת זכוכית המגדלת
        searchBar.classList.add("text-hidden"); // הסתרת הטקסט
        searchBox.classList.add("no-hover"); // הוספת מחלקת "no-hover"
    }
}

// הסרת hover כשעוזבים את גבולות המסמך
function collapseOnExit(event) {
    if (event.clientY < 0 || event.clientX < 0 || event.clientX > window.innerWidth || event.clientY > window.innerHeight) {
        searchBox.classList.remove("hover-active");
        resultsContainer.style.display = "none";
        searchIcon.style.opacity = "1"; // הצגת זכוכית המגדלת
        searchBar.classList.add("text-hidden"); // הסתרת הטקסט
    }
}



// האזנה לאירועי עכבר
searchBox.addEventListener("mouseenter", addHoverClass);
resultsContainer.addEventListener("mouseenter", addHoverClass);
document.addEventListener("mouseover", removeHoverClass);
document.addEventListener("mouseleave", collapseOnExit);

// פונקציה להתאמת סקייל על בסיס גודל המסך
function adjustScale() {
    const screenWidth = window.innerWidth; // רוחב המסך הנוכחי
    const scaleValue = screenWidth / 1920; // יחס למסך רוחב ברירת מחדל (1920px)
    const elements = document.querySelectorAll('.shrink-containerS'); // בחר את כל האלמנטים
    const elements2 = document.querySelectorAll('.iconimg'); // בחר את כל האלמנטים

    elements.forEach(element => {
        element.style.transform = `scale(${scaleValue})`; // הגדר את הערך
        element.style.transformOrigin = 'center center'; // שמירה על מרכז האלמנט
    });
    elements2.forEach(element => {
        element.style.transform = `scale(${scaleValue})`; // הגדר את הערך
        element.style.transformOrigin = 'center center'; // שמירה על מרכז האלמנט
    });
}


// הפעלה ראשונית של הפונקציה
adjustScale();

// האזנה לשינוי גודל המסך
window.addEventListener('resize', adjustScale);
