// הגדרות סקייל גלובליות
const SCALE_SETTINGS = {
    baseWidth: 1960, // בסיס לגודל מסך ממוצע
    minScale: 0.7, // סקייל מינימלי
    maxScale: 1.5, // סקייל מקסימלי
    iconScaleFactor: 1.6, // מקדם הגדלה לאייקונים
    ilScaleFactor: 1.5 // מקדם הגדלה ל-il
};

function adjustScale() {
    const screenWidth = window.innerWidth; // רוחב המסך הנוכחי

    // חישוב סקייל אלמנט כללי
    const scaleValue = Math.max(screenWidth / SCALE_SETTINGS.baseWidth);

    // חישוב סקייל לאייקונים עם מקדם הגדלה
    const scaleValueIcons = Math.max(
        SCALE_SETTINGS.minScale,
        Math.min(SCALE_SETTINGS.maxScale, scaleValue * SCALE_SETTINGS.iconScaleFactor)
    );

    const scaleValueIl = Math.max(
        SCALE_SETTINGS.minScale,
        Math.min(SCALE_SETTINGS.maxScale, scaleValue * SCALE_SETTINGS.ilScaleFactor)
    );

    // התאמת אלמנטים כלליים
    const elements = document.querySelectorAll('.shrink-containerS');
    elements.forEach(element => {
        element.style.transform = `scale(${scaleValue})`;
        element.style.transformOrigin = 'center center';
    });

    // התאמת אייקונים
    const elements2 = document.querySelectorAll('.iconimg');
    elements2.forEach(element => {
        element.style.transform = `scale(${scaleValueIcons})`;
        element.style.transformOrigin = 'center center';
    });

    // התאמת אלמנטים il
    const elements3 = document.querySelectorAll('.il');
    elements3.forEach(element => {
        element.style.transform = `scale(${scaleValueIl})`;
        element.style.transformOrigin = 'center center';
    });
}

// הפעלה ראשונית של הפונקציה
adjustScale();

// האזנה לשינוי גודל המסך
window.addEventListener('resize', adjustScale);




















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

// הרחבת תיבת החיפוש על Hover
searchBox.addEventListener("mouseenter", () => {
    searchBox.classList.add("hover-active");
    searchBox.classList.remove("no-hover");

    resultsContainer.style.display = "block";
    searchBar.style.width = "400px"; // הרחבת ה-Search Bar
});

// מניעת צמצום כאשר מרחפים על התוצאות
resultsContainer.addEventListener("mouseenter", () => {
    resultsContainer.style.display = "block";
    searchBox.classList.add("hover-active");
    searchBox.classList.remove("no-hover");

});

// צמצום התיבה כאשר יוצאים משניהם
document.addEventListener("mousemove", (event) => {
    if (!searchBox.contains(event.target) && !resultsContainer.contains(event.target)) {
        searchBox.classList.remove("hover-active");
        resultsContainer.style.display = "none";
        searchBar.style.width = "80px";
        searchBox.classList.add("no-hover");
    }
});























function addHoverClass() {
    searchBox.classList.add("hover-active");
    resultsContainer.style.display = "block";
    searchIcon.style.opacity = "0";
    searchBar.classList.remove("text-hidden");
    searchBox.classList.remove("no-hover");
}

function removeHoverClass(event) {
    if (!searchBox.contains(event.target) && !resultsContainer.contains(event.target)) {
        searchBox.classList.remove("hover-active");
        resultsContainer.style.display = "none";
        searchIcon.style.opacity = "1";
        searchBar.classList.add("text-hidden");
        searchBox.classList.add("no-hover");
    }
}

searchBox.addEventListener("mouseenter", addHoverClass);
resultsContainer.addEventListener("mouseenter", addHoverClass);
document.addEventListener("mouseover", removeHoverClass);

// התאמת רוחב דינמית לתיבת החיפוש
document.querySelector('.box').addEventListener('mouseover', () => {
    const screenWidth = window.innerWidth;
    const newWidth = Math.min(screenWidth * 0.2, 400);
    searchBar.style.width = `${newWidth}px`;
});

document.querySelector('.box').addEventListener('mouseout', () => {
    searchBar.style.width = '80px';
});

// טיפול בדף דינמי לפי סוג עמוד
document.addEventListener("DOMContentLoaded", () => {
    const dynamicContent = document.getElementById("dynamic-content");
    const page = new URLSearchParams(window.location.search).get("page") || "home";

    if (page === "artist") {
        fetch("artist.html")
            .then((response) => response.ok ? response.text() : Promise.reject("Artist page not found"))
            .then((content) => {
                dynamicContent.innerHTML = content;
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
            .then((response) => response.ok ? response.text() : Promise.reject("Playlist page not found"))
            .then((content) => {
                dynamicContent.innerHTML = content;
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
            .then((response) => response.ok ? response.text() : Promise.reject(`Page ${page} not found`))
            .then((content) => {
                dynamicContent.innerHTML = content;
            })
            .catch((err) => {
                dynamicContent.innerHTML = "<h1>Page not found</h1>";
                console.error(err);
            });
    }
});

// טיפול במצב נגן
document.addEventListener("DOMContentLoaded", () => {
    const musicPlayer = document.getElementById("music-player");
    const toggleButton = document.getElementById("toggle-player");

    const savedState = localStorage.getItem("playerState");
    if (savedState === "collapsed") {
        musicPlayer.classList.add("collapsed");
        musicPlayer.style.maxHeight = "25px";
        musicPlayer.style.padding = "5px";
    }

    toggleButton.addEventListener("click", () => {
        if (musicPlayer.classList.contains("collapsed")) {
            musicPlayer.classList.remove("collapsed");
            musicPlayer.style.maxHeight = "200px";
            musicPlayer.style.padding = "15px";
            localStorage.setItem("playerState", "expanded");
        } else {
            musicPlayer.classList.add("collapsed");
            musicPlayer.style.maxHeight = "25px";
            musicPlayer.style.padding = "5px";
            localStorage.setItem("playerState", "collapsed");
        }
    });
});
