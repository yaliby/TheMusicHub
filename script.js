

// בדיקה אם הדף הנוכחי הוא index.html
if (window.location.pathname.endsWith("index.html")) {
    // יצירת אובייקט המוזיקה
    const audio = new Audio("music/mixkit-beautiful-dream-493.mp3");
    audio.loop = true; // מוזיקה בלולאה

    // מעקב אחר מצב המוזיקה
    let isMusicPlaying = false;
    let isMusicInitialized = false; // האם המוזיקה הופעלה לראשונה

    // איתור כפתור ההשתקה וכפתור "בוא נתחיל"
    const musicToggle = document.querySelector(".music-toggle");
    const letsStartButton = document.querySelector(".lets-start-btn");

    // פונקציה לעדכון מצב הכפתור
    function updateButtonState() {
        if (isMusicPlaying) {
            musicToggle.classList.remove("music-off"); // מצב פועל
        } else {
            musicToggle.classList.add("music-off"); // מצב כבוי
        }
    }

    // האזנה לאירוע קליק להפעלת המוזיקה (אינטראקציה ראשונית בלבד)
    document.addEventListener("click", (event) => {
        // בדיקה אם הקליק אינו על כפתור ההשתקה או "בוא נתחיל"
        if (
            !event.target.closest(".music-toggle") && // לא כפתור המוזיקה
            !event.target.closest(".lets-start-btn") // לא כפתור "בוא נתחיל"
        ) {
            if (!isMusicInitialized) {
                audio.play()
                    .then(() => {
                        isMusicPlaying = true;
                        isMusicInitialized = true; // המוזיקה הופעלה לראשונה
                        updateButtonState(); // עדכון מצב הכפתור
                        console.log("Music started playing.");
                    })
                    .catch((err) => {
                        console.error("Failed to play audio:", err);
                    });
            }
        }
    }, { once: true }); // מאזין רק לקליק הראשון

    // האזנה ללחיצה על כפתור ההשתקה/הפעלה
    if (musicToggle) {
        musicToggle.addEventListener("click", (event) => {
            event.stopPropagation(); // מונע לחיצה נוספת על הדף
            if (isMusicInitialized) {
                // רק אם המוזיקה הופעלה קודם
                if (isMusicPlaying) {
                    audio.pause();
                    isMusicPlaying = false;
                    console.log("Music paused.");
                    
                } else {
                    audio.play()
                        .then(() => {
                            isMusicPlaying = true;
                            console.log("Music resumed.");
                        })
                        .catch((err) => {
                            console.error("Failed to play audio:", err);
                        });
                }
            } else {
                // אם המוזיקה לא הופעלה קודם, רק מעדכן את הכפתור ללא פעולה
                isMusicPlaying = false;
                console.log("Music remains paused.");
            }
            updateButtonState(); // עדכון מצב הכפתור לאחר פעולה
        });
    }
}



// הפונקציה שנטענת כאשר לוחצים על כפתור Let's Start
const letsStartButton = document.getElementById("letsStartButton");

letsStartButton.addEventListener("click", () => {
    // הפעלת אנימציה לכיבוי כל התוכן הקיים
    document.body.classList.add("fade-out");
    setTimeout(() => {
        // לאחר סיום האנימציה (1.5 שניות) עוברים לדף אחר
        window.location.href = "master.html?page=nextpage"; // ניתן להחליף לכתובת הדף שתרצה
    }, 1500); // זמן זהה לזמן האנימציה (1.5 שניות)
});


musicToggle.addEventListener("click", (event) => {
    event.stopPropagation(); // מונע מהלחיצה להפעיל גם את האירוע הכללי
    if (isMusicPlaying) {
        audio.pause();
        musicToggle.classList.add("music-off");
    } else {
        audio.play().catch((err) => {
            console.error("Failed to autoplay audio:", err);
        });
        musicToggle.classList.remove("music-off");
    }
    isMusicPlaying = !isMusicPlaying;
});




document.addEventListener("DOMContentLoaded", () => {
    const eyeIcon = document.getElementById("eyeicon");
    const passwordField = document.getElementById("password");

    if (eyeIcon && passwordField) {
        eyeIcon.addEventListener("click", () => {
            if (passwordField.type === "password") {
                passwordField.type = "text";
                eyeIcon.src = "img/system/eye-icons/eye-open.png"; // ודא שהתמונה קיימת
            } else {
                passwordField.type = "password";
                eyeIcon.src = "img/system/eye-icons/eye-close.png"; // ודא שהתמונה קיימת
            }
        });
    } else {
        console.error("Element not found: eyeIcon or passwordField");
    }
});










document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("registerForm").addEventListener("submit", function (e) {
        e.preventDefault(); // מונע שליחה רגילה של הטופס

        // קבלת נתונים מהשדות
        const firstName = document.querySelector('input[name="first_name"]').value.trim();
        const lastName = document.querySelector('input[name="last_name"]').value.trim();
        const email = document.querySelector('input[name="email"]').value.trim();
        const password = document.querySelector('input[name="password"]').value.trim();
        const confirmPassword = document.querySelector('input[name="confirm_password"]').value.trim();

        let isValid = true;

        // בדיקת שדות חובה
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            alert("All fields are required!");
            isValid = false;
        }

        // בדיקת תקינות אימייל
        if (!validateEmail(email)) {
            alert("Invalid email address!");
            isValid = false;
        }

        // בדיקת אורך סיסמה
        if (password.length < 6) {
            alert("Password must be at least 6 characters long!");
            isValid = false;
        }

        // בדיקת התאמה בין סיסמאות
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            isValid = false;
        }

        // הפניה לעמוד הבא אם הכל תקין
        if (isValid) {
            window.location.href = "nextpage.html";
        }
    });

    // פונקציית בדיקת תקינות אימייל
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});





// Function to display error
function showError(selector, message) {
    const input = document.querySelector(selector);
    let errorEl = input.nextElementSibling;
    if (!errorEl || !errorEl.classList.contains("error")) {
        errorEl = document.createElement("span");
        errorEl.classList.add("error");
        input.parentNode.appendChild(errorEl);
    }
    errorEl.textContent = message;
}

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}






