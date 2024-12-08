document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audioFondo');
    const video = document.getElementById('videoFondo');

    audio.play().catch(error => {
        console.error('No se pudo reproducir el audio automáticamente:', error);
    });

    video.play().catch(error => {
        console.error('No se pudo reproducir el video automáticamente:', error);
    });
});
