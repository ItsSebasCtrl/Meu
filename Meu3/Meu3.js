document.getElementById('back').addEventListener('click', function() {
    window.location.href = "/Meu2/Meu2.html";
});

document.getElementById('forward').addEventListener('click', function() {
    window.location.href = "/Meu4/Meu4.html";
});

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');

    const songs = [
        '/Music/Me gustas Natural.mp3',
        '/Music/Post Malone - Chemical.mp3',
        '/Music/Kendrick Lamar - luther.mp3'
    ];
    let currentSongIndex = 0;

    playButton.addEventListener('click', function() {
        audio.play();
        localStorage.setItem('isPlaying', 'true');
    });

    pauseButton.addEventListener('click', function() {
        audio.pause();
        localStorage.setItem('isPlaying', 'false');
    });

    prevButton.addEventListener('click', function() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        audio.src = songs[currentSongIndex];
        audio.play();
        localStorage.setItem('isPlaying', 'true');
    });

    nextButton.addEventListener('click', function() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        audio.src = songs[currentSongIndex];
        audio.play();
        localStorage.setItem('isPlaying', 'true');
    });

    audio.addEventListener('timeupdate', function() {
        const currentTime = formatTime(audio.currentTime);
        const duration = formatTime(audio.duration);
        currentTimeDisplay.textContent = currentTime;
        durationDisplay.textContent = duration;
        localStorage.setItem('audioTime', audio.currentTime);
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Load saved state
    const savedTime = localStorage.getItem('audioTime');
    const isPlaying = localStorage.getItem('isPlaying') === 'true';

    if (savedTime) {
        audio.currentTime = savedTime;
    }

    if (isPlaying) {
        audio.play();
    }
});
