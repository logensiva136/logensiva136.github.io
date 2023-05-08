// Get references to the video and canvas elements
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');

// Get access to the camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;
    })
    .catch((error) => {
        console.log('Error accessing camera:', error);
    });

// Add event listener to capture button
document.getElementById('capture').addEventListener('click', () => {
    // Draw the video frame onto the canvas
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    // Get the captured image data
    const imageData = canvas.toDataURL('image/png');

    // Send the image data to the server for processing
    // ...insert code to send image data to server...
});
