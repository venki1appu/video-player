const video = document.getElementById('videoPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const secPlayBtn = document.getElementById('secPlayBtn');
const framePlayBtn = document.getElementById('framePlayBtn');
const seekBar = document.getElementById('seekBar');
const selectVideo = document.getElementById('selectVideo');
const videoSource = document.getElementById('videoSource');

// Play/Pause video
playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        video.pause();
        playPauseBtn.textContent = 'Play';
    }
});

// Seek forward by one second
secPlayBtn.addEventListener('click', () => {
    video.currentTime += 1;  // Seek 1 second forward
});

// Seek forward by one frame (assuming 30 FPS)
framePlayBtn.addEventListener('click', () => {
    const fps = 30;  // Adjust if your video has a different frame rate
    video.currentTime += 1 / fps;  // Seek one frame forward
});

// Update seek bar as the video plays
video.addEventListener('timeupdate', () => {
    const value = (video.currentTime / video.duration) * 100;
    seekBar.value = value;
});

// Seek to a different part of the video when seek bar is dragged
seekBar.addEventListener('input', () => {
    const seekTo = video.duration * (seekBar.value / 100);
    video.currentTime = seekTo;
});

// Load selected video
selectVideo.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const fileURL = URL.createObjectURL(file);
        videoSource.src = fileURL;
        video.load();
        playPauseBtn.textContent = 'Play';
    }
});
