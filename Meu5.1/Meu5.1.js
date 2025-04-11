document.getElementById('back').addEventListener('click', function() {
    window.location.href = "https://itssebasctrl.github.io/Meu/Meu5/Meu5.html";
});

document.getElementById('forward').addEventListener('click', function() {
    window.location.href = "https://itssebasctrl.github.io/Meu/Meu6/Meu6.html";
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
        '/Music/Reik - Creo en ti.mp3'
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
