
<template>
  <body>
    <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>

    <MyHeader back=true  />
     <video id="video">salut</video>
  

     <canvas id ='canvas'></canvas>
     <img id="photo" alt="Screen" >
     <div class="button-container">
      <button id="startbutton">
        <i class="fa fa-camera"></i>
      </button>

      </div>
      
           <div class="button-container">
      <button style="display: none" id="resetbutton">
        <i class="fa fa-refresh"></i>
      </button>
      <button style="display: none" id="sendbutton">
        <i class="fa fa-arrow-right"></i>
      </button>
      </div>
     <!-- <button id="resetbutton" style="display: none">Reset</button> -->
     <!-- <button id="sendbutton" style="display: none">Send</button> -->

  </body>
</template>

<script>

import EventService from '@/services/EventService';
import MyHeader from '@/components/MyHeader.vue';

export default {

  components:{
    MyHeader
  },
    data() {
        return {

            

        }
    }
    ,mounted() {
       
        const width = window.innerWidth; // We will scale the photo width to this
  let height = 0; // This will be computed based on the input stream

  // |streaming| indicates whether or not we're currently streaming
  // video from the camera. Obviously, we start at false.

  let streaming = false;

  // The various HTML elements we need to configure or control. These
  // will be set by the startup() function.

  let video = null;
  let canvas = null;
  let photo = null;
  let startbutton = null;
  let resetbutton = null;
  let sendbutton = null;
  startup()

  function showViewLiveResultButton() {
    if (window.self !== window.top) {
      // Ensure that if our document is in a frame, we get the user
      // to first open it in its own tab or window. Otherwise, it
      // won't be able to request permission for camera access.
      document.querySelector(".contentarea").remove();
      const button = document.createElement("button");
      button.textContent = "View live result of the example code above";
      document.body.append(button);
      button.addEventListener("click", () => window.open(location.href));
      return true;
    }
    return false;
  }

  function startup() {
    if (showViewLiveResultButton()) {
      return;
    }
    video = document.getElementById("video");
    canvas = document.getElementById("canvas");
    photo = document.getElementById("photo");
    resetbutton = document.getElementById("resetbutton");
    startbutton = document.getElementById("startbutton");
    sendbutton = document.getElementById("sendbutton");

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(`An error occurred: ${err}`);
      });

    video.addEventListener(
      "canplay",
      () => {
        if (!streaming) {
          height = video.videoHeight / (video.videoWidth / width);

          // Firefox currently has a bug where the height can't be read from
          // the video, so we will make assumptions if this happens.

          if (isNaN(height)) {
            height = width / (4 / 3);
          }

          video.setAttribute("width", width);
          video.setAttribute("height", height);
          canvas.setAttribute("width", width);
          canvas.setAttribute("height", height);
          streaming = true;
        }
      },
      false
    );

    resetbutton.addEventListener(
    "click",
    (ev) => {
      reset();
      ev.preventDefault();
    },
    false
  );

    startbutton.addEventListener(
      "click",
      (ev) => {
        takepicture();
        ev.preventDefault();
      },
      false
    );
    sendbutton.addEventListener(
    "click",
    (ev) => {
      console.log('ENVOYEZ lIMAGE AU SERVER')
      ev.preventDefault();
      const data = canvas.toDataURL('image/png');
      EventService.postImage(data)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
      // handle the error here
    });
    },
    false
  );

    clearphoto();
  }

  // Fill the photo with an indication that none has been
  // captured.

  function clearphoto() {
  const context = canvas.getContext("2d");
  context.fillStyle = "#AAA";
  context.fillRect(0, 0, canvas.width, canvas.height);

  const data = canvas.toDataURL("image/png");
  photo.setAttribute("src", data);
  photo.style.display = 'none'; // hide the img element
}

function sendImage() {
  const data = canvas.toDataURL("image/png");
  EventService.postImage(data)
    .then((response) => {
      // handle the response here
    })
    .catch((error) => {
      // handle the error here
    });
}



  // Capture a photo by fetching the current contents of the video
  // and drawing it into a canvas, then converting that to a PNG
  // format data URL. By drawing it on an offscreen canvas and then
  // drawing that to the screen, we can change its size and/or apply
  // other changes before drawing it.

  function takepicture() {
  const context = canvas.getContext("2d");
  if (width && height) {
    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);

    const data = canvas.toDataURL("image/png");
    photo.setAttribute("src", data);
    photo.style.display = 'inline'; // show the img element
    video.style.display = 'none'; // hide the video element
    startbutton.style.display = 'none'; // hide the startbutton element
    resetbutton.style.display = 'inline'; // show the resetbutton element
    sendbutton.style.display = 'inline'; // show the sendbutton element
  } else {
    clearphoto();
  }
}



function reset() {
  video.style.display = 'inline'; // show the video element
  photo.style.display = 'none'; // hide the img element
  startbutton.style.display = 'inline'; // show the startbutton element
  resetbutton.style.display = 'none'; // hide the resetbutton element
  sendbutton.style.display = 'none'; // hide the sendbutton element
}


}  

}
</script>

<style>
 canvas{
    display: none;
 }

 .button-container {
  text-align: center;
}

#startbutton {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 24px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 50%; /* make the button a circle */
  transition: transform 0.3s; /* add animation */
}

#startbutton:hover {
  background-color: #3e8e41;
  transform: scale(1.1); /* scale the button on hover */
}

#resetbutton,
#sendbutton {
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 24px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 50%; /* make the buttons circles */
}

#resetbutton {
  background-color: #f44336; /* Red */
}

#resetbutton:hover {
  background-color: #d32f2f;
}

#sendbutton {
  background-color: #2196F3; /* Blue */
}

#sendbutton:hover {
  background-color: #1976D2;
}



</style>