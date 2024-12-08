

// נתונים על האמנים
const artists = {
    1: {
        name: 'Slash',
        image: 'img/slash/slash.jpeg',
        folder: 'slash',
        bio: 'Guitarist for Guns N\' Roses and Velvet Revolver.',
        songs: [
            { title: '14 Years', url: 'music/slash/14 Years.mp3' },
            { title: 'Anything Goes', url: 'music/slash/Anything Goes.mp3' },
            { title: 'Back Off Bitch', url: 'music/slash/Back Off Bitch.mp3' },
            { title: 'Better', url: 'music/slash/Better.mp3' },
            { title: 'Chinese Democracy', url: 'music/slash/Chinese Democracy.mp3' },
            { title: 'Civil War', url: 'music/slash/Civil War.mp3' },
            { title: 'Dead Horse', url: 'music/slash/Dead Horse.mp3' },
            { title: 'Don\'t Cry (Original)', url: 'music/slash/Don\'t Cry (Original).mp3' },
            { title: 'Double Talkin\' Jive', url: 'music/slash/Double Talkin\' Jive.mp3' },
            { title: 'Estranged', url: 'music/slash/Estranged.mp3' },
            { title: 'Hair Of The Dog', url: 'music/slash/Hair Of The Dog.mp3' },
            { title: 'It\'s So Easy', url: 'music/slash/It\'s So Easy.mp3' },
            { title: 'Knockin\' On Heaven\'s Door', url: 'music/slash/Knockin\' On Heaven\'s Door.mp3' },
            { title: 'Live And Let Die', url: 'music/slash/Live And Let Die.mp3' },
            { title: 'Locomotive (Complicity)', url: 'music/slash/Locomotive (Complicity).mp3' },
            { title: 'Mama Kin', url: 'music/slash/Mama Kin.mp3' },
            { title: 'Move To The City', url: 'music/slash/Move To The City.mp3' },
            { title: 'My Michelle', url: 'music/slash/My Michelle.mp3' },
            { title: 'November Rain', url: 'music/slash/November Rain.mp3' },
            { title: 'Nightrain', url: 'music/slash/Nightrain.mp3' },
            { title: 'One In A Million', url: 'music/slash/One In A Million.mp3' },
            { title: 'Out Ta Get Me', url: 'music/slash/Out Ta Get Me.mp3' },
            { title: 'Paradise City', url: 'music/slash/Paradise City.mp3' },
            { title: 'Patience', url: 'music/slash/Patience.mp3' },
            { title: 'Raw Power', url: 'music/slash/Raw Power.mp3' },
            { title: 'Reckless Life', url: 'music/slash/Reckless Life.mp3' },
            { title: 'Right Next Door To Hell', url: 'music/slash/Right Next Door To Hell.mp3' },
            { title: 'Rocket Queen', url: 'music/slash/Rocket Queen.mp3' },
            { title: 'Shadow Life', url: 'music/slash/Shadow Life.mp3' },
            { title: 'Since I Don\'t Have You', url: 'music/slash/Since I Don\'t Have You.mp3' },
            { title: 'Sweet Child O Mine', url: 'music/slash/sweet-child-o-mine.mp3' },
            { title: 'Think About You', url: 'music/slash/Think About You.mp3' },
            { title: 'This I Love', url: 'music/slash/This I Love.mp3' },
            { title: 'Used To Love Her', url: 'music/slash/Used To Love Her.mp3' },
            { title: 'Welcome To The Jungle', url: 'music/slash/Welcome To The Jungle.mp3' },
            { title: 'Yesterdays', url: 'music/slash/Yesterdays.mp3' },
            { title: 'You Could Be Mine', url: 'music/slash/You Could Be Mine.mp3' },
            { title: 'You\'re Crazy', url: 'music/slash/You\'re Crazy.mp3' }
        ]
    },
    2: {
        name: 'Jimi Hendrix',
        image: 'img/jimihendrix/jimihendrix.jpeg',
        folder: 'jimihendrix',
        bio: 'Legendary guitarist and songwriter.',
        songs: [
            { title: 'Angel', url: 'music/Jimi Hendrix/JIMI HENDRIX HITSBEST OF_SpotifyDown_com/Angel.mp3' },
            { title: 'Born Under a Bad Sign', url: 'music/Jimi Hendrix/JIMI HENDRIX HITSBEST OF_SpotifyDown_com/Born Under a Bad Sign.mp3' },
            { title: 'Catfish Blues', url: 'music/Jimi Hendrix/JIMI HENDRIX HITSBEST OF_SpotifyDown_com/Catfish Blues.mp3' },
            { title: 'Come On (Let the Good Times Roll)', url: 'music/Jimi Hendrix/JIMI HENDRIX HITSBEST OF_SpotifyDown_com/Come On (Let the Good Times Roll).mp3' },
            { title: 'Crosstown Traffic', url: 'music/Jimi Hendrix/JIMI HENDRIX HITSBEST OF_SpotifyDown_com/Crosstown Traffic.mp3' },
            { title: 'Drifting', url: 'music/Jimi Hendrix/JIMI HENDRIX HITSBEST OF_SpotifyDown_com/Drifting.mp3' },
            { title: 'Fire', url: 'music/Jimi Hendrix/JIMI HENDRIX HITSBEST OF_SpotifyDown_com/Fire.mp3' },
            { title: 'Foxey Lady', url: 'music/Jimi Hendrix/JIMI HENDRIX HITSBEST OF_SpotifyDown_com/Foxey Lady.mp3' },
            { title: 'Freedom', url: 'music/Jimi Hendrix/JIMI HENDRIX HITSBEST OF_SpotifyDown_com/Freedom.mp3' },
            { title: 'Gypsy Eyes', url: 'music/Jimi Hendrix/JIMI HENDRIX HITSBEST OF_SpotifyDown_com/Gypsy Eyes.mp3' },
            { title: 'Have You Ever Been (To Electric Ladyland)', url: 'music/Jimi Hendrix/JIMI HENDRIX HITSBEST OF_SpotifyDown_com/Have You Ever Been (To Electric Ladyland).mp3' },
            { title: 'Hear My Train a Comin\'', url: 'music/Jimi Hendrix/JIMI HENDRIX HITSBEST OF_SpotifyDown_com/Hear My Train a Comin.mp3' },
            { title: 'Hey Joe', url: 'music/Jimi Hendrix/JIMI HENDRIX HITSBEST OF_SpotifyDown_com/Hey Joe.mp3' },
            { title: 'If 6 Was 9', url: 'music/Jimi Hendrix/JIMI HENDRIX HITSBEST OF_SpotifyDown_com/If 6 Was 9.mp3' },
            { title: 'Jesus Don\'t Want Me For A Sunbeam - Acoustic', url: 'music/Jimi Hendrix/JIMI HENDRIX HITSBEST OF_SpotifyDown_com/Jesus Don\'t Want Me For A Sunbeam - Acoustic.mp3' },
            { title: 'Jungle', url: 'music/Jimi Hendrix/JIMI HENDRIX HITSBEST OF_SpotifyDown_com/Jungle.mp3' },
            { title: 'Little Wing', url: 'music/Jimi Hendrix/JIMI HENDRIX HITSBEST OF_SpotifyDown_com/Little Wing.mp3' },
            { title: 'One Rainy Wish', url: 'music/Jimi Hendrix/JIMI HENDRIX HITSBEST OF_SpotifyDown_com/One Rainy Wish.mp3' },
            { title: 'Pali Gap', url: 'music/Jimi Hendrix/JIMI HENDRIX HITSBEST OF_SpotifyDown_com/Pali Gap.mp3' },
            { title: 'Purple Haze', url: 'music/Jimi Hendrix/JIMI HENDRIX HITSBEST OF_SpotifyDown_com/Purple Haze.mp3' },
            { title: 'Red House', url: 'music/Jimi Hendrix/JIMI HENDRIX HITSBEST OF_SpotifyDown_com/Red House.mp3' },
            { title: 'Regret', url: 'music/Jimi Hendrix/JIMI HENDRIX HITSBEST OF_SpotifyDown_com/Regret.mp3' },
            { title: 'Somewhere', url: 'music/Jimi Hendrix/JIMI HENDRIX HITSBEST OF_SpotifyDown_com/Somewhere.mp3' },
            { title: 'Spanish Castle Magic', url: 'music/Jimi Hendrix/JIMI HENDRIX HITSBEST OF_SpotifyDown_com/Spanish Castle Magic.mp3' },
            { title: 'The Wind Cries Mary', url: 'music/Jimi Hendrix/JIMI HENDRIX HITSBEST OF_SpotifyDown_com/The Wind Cries Mary.mp3' },
            { title: 'Things I Used to Do', url: 'music/Jimi Hendrix/JIMI HENDRIX HITSBEST OF_SpotifyDown_com/Things I Used to Do.mp3' },
            { title: 'Toxic Medicine - Naked Version in room 401', url: 'music/Jimi Hendrix/JIMI HENDRIX HITSBEST OF_SpotifyDown_com/Toxic Medicine - Naked Version in room 401.mp3' },
            { title: 'Voodoo Child (Slight Return)', url: 'music/Jimi Hendrix/JIMI HENDRIX HITSBEST OF_SpotifyDown_com/Voodoo Child (Slight Return).mp3' }
        ]
    },
    3: {
        name: 'Michael Jackson',
        image: 'img/michaeljackson/michaeljackson.jpg',
        folder: 'michaeljackson',
        bio: 'King of Pop, singer and dancer.',
        songs: [
            { title: 'Ain\'t No Sunshine', url: 'music/Michael Jackson/Michael Jackson - all songs_SpotifyDown_com/Ain\'t No Sunshine.mp3' },
            { title: 'All The Things You Are', url: 'music/Michael Jackson/Michael Jackson - all songs_SpotifyDown_com/All The Things You Are.mp3' },
            { title: 'Ben - Single Version', url: 'music/Michael Jackson/Michael Jackson - all songs_SpotifyDown_com/Ben - Single Version.mp3' },
            { title: 'Everybody\'s Somebody\'s Fool', url: 'music/Michael Jackson/Michael Jackson - all songs_SpotifyDown_com/Everybody\'s Somebody\'s Fool.mp3' },
            { title: 'Girl Don\'t Take Your Love From Me', url: 'music/Michael Jackson/Michael Jackson - all songs_SpotifyDown_com/Girl Don\'t Take Your Love From Me.mp3' },
            { title: 'Greatest Show On Earth', url: 'music/Michael Jackson/Michael Jackson - all songs_SpotifyDown_com/Greatest Show On Earth.mp3' },
            { title: 'I Wanna Be Where You Are', url: 'music/Michael Jackson/Michael Jackson - all songs_SpotifyDown_com/I Wanna Be Where You Are.mp3' },
            { title: 'In Our Small Way', url: 'music/Michael Jackson/Michael Jackson - all songs_SpotifyDown_com/In Our Small Way.mp3' },
            { title: 'Love Is Here And Now You\'re Gone', url: 'music/Michael Jackson/Michael Jackson - all songs_SpotifyDown_com/Love Is Here And Now You\'re Gone.mp3' },
            { title: 'Maria (You Were The Only One)', url: 'music/Michael Jackson/Michael Jackson - all songs_SpotifyDown_com/Maria (You Were The Only One).mp3' },
            { title: 'My Girl', url: 'music/Michael Jackson/Michael Jackson - all songs_SpotifyDown_com/My Girl.mp3' },
            { title: 'People Make The World Go Round', url: 'music/Michael Jackson/Michael Jackson - all songs_SpotifyDown_com/People Make The World Go Round.mp3' },
            { title: 'Rockin\' Robin', url: 'music/Michael Jackson/Michael Jackson - all songs_SpotifyDown_com/Rockin\' Robin.mp3' },
            { title: 'Shoo-Be-Doo-Be-Doo-Da-Day', url: 'music/Michael Jackson/Michael Jackson - all songs_SpotifyDown_com/Shoo-Be-Doo-Be-Doo-Da-Day.mp3' },
            { title: 'Up Again', url: 'music/Michael Jackson/Michael Jackson - all songs_SpotifyDown_com/Up Again.mp3' },
            { title: 'We\'ve Got A Good Thing Going', url: 'music/Michael Jackson/Michael Jackson - all songs_SpotifyDown_com/We\'ve Got A Good Thing Going.mp3' },
            { title: 'What Goes Around Comes Around', url: 'music/Michael Jackson/Michael Jackson - all songs_SpotifyDown_com/What Goes Around Comes Around.mp3' },
            { title: 'Wings Of My Love', url: 'music/Michael Jackson/Michael Jackson - all songs_SpotifyDown_com/Wings Of My Love.mp3' },
            { title: 'With A Child\'s Heart', url: 'music/Michael Jackson/Michael Jackson - all songs_SpotifyDown_com/With A Child\'s Heart.mp3' },
            { title: 'You Can Cry On My Shoulder', url: 'music/Michael Jackson/Michael Jackson - all songs_SpotifyDown_com/You Can Cry On My Shoulder.mp3' },
            { title: 'You\'ve Got A Friend', url: 'music/Michael Jackson/Michael Jackson - all songs_SpotifyDown_com/You\'ve Got A Friend.mp3' }
        ]
        
    }
};













// שליפת ID מה-URL
const params = new URLSearchParams(window.location.search);
const artistId = params.get('id');

// בדיקה אם ה-ID תקין
if (artistId && artists[artistId]) {
    const artist = artists[artistId];
    const container = document.getElementById('artist-container');

    // הגדרת נתיב לתמונה דיפולטיבית
    const defaultThumbnail = 'img/system/deafoltmusocpic.jpg';

    // יצירת תוכן דינמי
    container.innerHTML = `
    <h1 style="margin-top: 7%; color: green">${artist.name}</h1>
    <img src="${artist.image}" alt="${artist.name}" class="artist-image">
    <p>${artist.bio}</p>
    <h3 style="color: red; font-weight: bold;">Songs:</h3>
    <ul>
        ${artist.songs.map((song, index) => {
            const thumbnailPath = `img/${artist.folder}/mp3 album/${song.title}.jpg`;
            return `
                <li>
                    <span style="padding-right: 2%;">${index + 1}</span>
                    <img src="${thumbnailPath}" alt="${song.title}" 
                        onerror="this.onerror=null; this.src='${defaultThumbnail}'">
                    <span class="track-title">${song.title}</span>
                    <span class="track-duration">3:45</span> <!-- זמן לדוגמה -->
                    <button onclick="playSong('${song.url.replace(/'/g, "\\'")}', '${song.title.replace(/'/g, "\\'")}')">Play</button>
                </li>
            `;
        }).join('')}
    </ul>
    `;
} else {
    document.getElementById('artist-container').innerHTML = '<h1>Artist not found!</h1>';
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



