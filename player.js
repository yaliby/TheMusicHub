window.addEventListener('DOMContentLoaded', () => {
    const savedSong = localStorage.getItem('currentSong');
    const savedTitle = localStorage.getItem('currentTitle');
    const savedTime = localStorage.getItem('currentTime'); // זמן שמור

    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');
    const songTitleDiv = document.getElementById('song-title');

    if (savedSong && savedTitle) {
        songTitleDiv.textContent = savedTitle;
        audioSource.src = savedSong;
        audioPlayer.load();

        // אם יש זמן שמור, קובע את המיקום להתחלה ממנו
        if (savedTime) {
            audioPlayer.currentTime = parseFloat(savedTime);
        }

        // ניגון אוטומטי
        audioPlayer.play().catch(err => {
            console.error("Failed to autoplay audio:", err);
        });
    } else {
        songTitleDiv.textContent = "No song playing";
    }

    // שמירת זמן השיר בעת התקדמות
    audioPlayer.addEventListener('timeupdate', () => {
        localStorage.setItem('currentTime', audioPlayer.currentTime);
    });
});
// שמירת הזמן כשסוגרים את הדף
window.addEventListener('beforeunload', () => {
    const audioPlayer = document.getElementById('audio-player');
    if (audioPlayer) {
        localStorage.setItem('currentTime', audioPlayer.currentTime);
    }
});




function playSong(songUrl, songTitle, index) {
    localStorage.setItem('currentSong', songUrl);
    localStorage.setItem('currentTitle', songTitle);
    localStorage.setItem('currentIndex', index);

    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');
    const songTitleDiv = document.getElementById('song-title');

    songTitleDiv.textContent = songTitle;
    audioSource.src = songUrl;
    audioPlayer.load();
    audioPlayer.play();
}

// טען את השיר האחרון
window.addEventListener('DOMContentLoaded', () => {
    const savedSong = localStorage.getItem('currentSong');
    const savedTitle = localStorage.getItem('currentTitle');
    const savedIndex = localStorage.getItem('currentIndex');

    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');
    const songTitleDiv = document.getElementById('song-title');

    if (savedSong && savedTitle) {
        songTitleDiv.textContent = savedTitle;
        audioSource.src = savedSong;
        audioPlayer.load();
    }

    // סמן את השיר האחרון כנבחר
    if (savedIndex !== null) {
        const playlistItems = document.querySelectorAll('#playlist li');
        if (playlistItems[savedIndex]) {
            playlistItems[savedIndex].classList.add('active');
        }
    }
});



// שמירת הזמן של השיר כשעוזבים את העמוד
window.addEventListener('beforeunload', () => {
    const audioPlayer = document.getElementById('audio-player');
    if (audioPlayer) {
        localStorage.setItem('currentTime', audioPlayer.currentTime);
    }
});

// שחזור הזמן של השיר האחרון
document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audio-player');
    const savedTime = localStorage.getItem('currentTime');
    if (savedTime) {
        audioPlayer.currentTime = parseFloat(savedTime);
    }
});
