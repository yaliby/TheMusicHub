//נתונים על הפלייליסטים
const playlists = {
    1: {
        name: 'Appetite for Destruction',
        image: 'img/playlists/Guns-N-Roses-Appetite-for-Destruction-Anniversary/Guns-N-Roses-Appetite-for-Destruction-Anniversary.jpg',
        description: 'The best of Guns N\' Roses.',
        songs: [
            { title: 'Anything Goes', url: 'music/Appetite For Destruction/Anything Goes - Guns N\' Roses.mp3' },
            { title: 'It\'s So Easy', url: 'music/Appetite For Destruction/It\'s So Easy - Guns N\' Roses.mp3' },
            { title: 'Mr. Brownstone', url: 'music/Appetite For Destruction/Mr. Brownstone - Guns N\' Roses.mp3' },
            { title: 'My Michelle', url: 'music/Appetite For Destruction/My Michelle - Guns N\' Roses.mp3' },
            { title: 'Nightrain', url: 'music/Appetite For Destruction/Nightrain - Guns N\' Roses.mp3' },
            { title: 'Out Ta Get Me', url: 'music/Appetite For Destruction/Out Ta Get Me - Guns N\' Roses.mp3' },
            { title: 'Paradise City', url: 'music/Appetite For Destruction/Paradise City - Guns N\' Roses.mp3' },
            { title: 'Rocket Queen', url: 'music/Appetite For Destruction/Rocket Queen - Guns N\' Roses.mp3' },
            { title: 'Sweet Child O\' Mine', url: 'music/Appetite For Destruction/Sweet Child O\' Mine - Guns N\' Roses.mp3' },
            { title: 'Think About You', url: 'music/Appetite For Destruction/Think About You - Guns N\' Roses.mp3' },
            { title: 'Welcome To The Jungle', url: 'music/Appetite For Destruction/Welcome To The Jungle - Guns N\' Roses.mp3' },
            { title: 'You\'re Crazy', url: 'music/Appetite For Destruction/You\'re Crazy - Guns N\' Roses.mp3' }
        ]
    },
    2: {
        name: 'Pop Hits',
        image: 'img/playlists/killerqueen/killerqueen.jpg',
        description: 'Top pop hits from the killer queen.',
        songs: [
            { title: 'Shape of You', url: 'music/Pop Hits/Shape of You.mp3' },
            { title: 'Blinding Lights', url: 'music/Pop Hits/Blinding Lights.mp3' },
            { title: 'Levitating', url: 'music/Pop Hits/Levitating.mp3' }
        ]
    }
};



// שליפת ID מה-URL
const params = new URLSearchParams(window.location.search);
const playlistId = params.get('id');

// בדיקה אם ה-ID תקין
if (playlistId && playlists[playlistId]) {
    const playlist = playlists[playlistId];
    const container = document.getElementById('playlist-container');
    const defaultThumbnail = 'img/system/deafoltmusocpic.jpg'; // תמונה ברירת מחדל במקרה שתמונה לא קיימת

    container.innerHTML = `
        <div class="playlist-header">
            <h1>${playlist.name}</h1>
            <img src="${playlist.image}" alt="${playlist.name}" class="playlist-image">
            <p>${playlist.description}</p>
        </div>
        <div style="margin-bottom: 10%;" class="playlist-container">
            ${playlist.songs.map((song, index) => {
                const thumbnailPath = `${playlist.image}`; // יצירת השביל לתמונה
                return `
                    <div class="song-item">
                        <div class="song-info">
                            <span class="track-number">${index + 1}</span>
                            <img src="${thumbnailPath}" alt="${song.title}" 
                            onerror="this.onerror=null; this.src='${defaultThumbnail}'">                    
                            <div>
                                <span class="track-title">${song.title}</span>
                            </div>
                        </div>
                        <span class="song-duration">3:45</span> <!-- זמן לדוגמה -->
                        <button class="play-btn" onclick="playSong('${song.url.replace(/'/g, "\\'")}', '${song.title.replace(/'/g, "\\'")}')">Play</button>
                    </div>
                `;
            }).join('')}
        </div>
    `;
    



} else {
    document.getElementById('playlist-container').innerHTML = '<h1>Playlist not found!</h1>';
}

// פונקציה לניגון שיר
function playSong(songUrl, songTitle) {
    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');
    const songTitleDiv = document.getElementById('song-title');

    songTitleDiv.innerText = songTitle;
    audioSource.src = songUrl;
    audioPlayer.load();
    audioPlayer.play();

    // שמירה של הנתיב והכותרת ב-localStorage
    localStorage.setItem('currentSong', songUrl);
    localStorage.setItem('currentTitle', songTitle);
}

// ניסיון להשמיע את השיר האחרון שנשמר עם טעינת הדף
window.addEventListener('DOMContentLoaded', () => {
    const savedSong = localStorage.getItem('currentSong'); // שמירת כתובת השיר
    const savedTitle = localStorage.getItem('currentTitle'); // שמירת שם השיר
    const savedTime = localStorage.getItem('currentTime'); // שמירת זמן השמעה

    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');
    const songTitleDiv = document.getElementById('song-title');

    if (savedSong && savedTitle) {
        // עדכון שם השיר והמקור בנגן
        songTitleDiv.textContent = savedTitle;
        audioSource.src = savedSong;
        audioPlayer.load();

        // אם קיים זמן אחרון, מגדירים את הנגן להתחיל ממנו
        if (savedTime) {
            audioPlayer.currentTime = parseFloat(savedTime);
        }

        // ניסיון להתחיל לנגן את השיר
        audioPlayer.play().catch(err => {
            console.warn("הדפדפן חסם השמעה אוטומטית:", err);
        });
    }
});

// שמירת זמן ההשמעה האחרון בעת מעבר בין עמודים או סגירת הדף
window.addEventListener('beforeunload', () => {
    const audioPlayer = document.getElementById('audio-player');
    if (audioPlayer) {
        localStorage.setItem('currentTime', audioPlayer.currentTime);
    }
});
