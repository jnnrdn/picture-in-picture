const videoElement = document.getElementById('video')
const button = document.getElementById('button')

// Prompt the user to select media stream, then pass it to video element, then play
async function selectMediaStream () {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia()
    videoElement.srcObject = mediaStream
    videoElement.onloadedmetadata = () => {
      videoElement.play()
    }
  } catch (error) {
    // Catch error here
    console.log('Whoops, error here: ', error)
  }
}

button.addEventListener('click', async () => {
  // Disable Button
  button.disabled = true
  // Start Picture in Picture
  await videoElement.requestPictureInPicture()
  // Reset button
  button.disabled = false
})

// On Load
selectMediaStream()
