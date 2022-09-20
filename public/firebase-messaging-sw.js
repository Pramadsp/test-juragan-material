importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");

const firebaseConfig = {
     apiKey: "AIzaSyC4vumDKNg6JheSY_N98u0s80GE-mpewLE",
     authDomain: "likuid-apps.firebaseapp.com",
     databaseURL: "https://likuid-apps.firebaseio.com",
     projectId: "likuid-apps",
     storageBucket: "likuid-apps.appspot.com",
     messagingSenderId: "966907146231",
     appId: "1:966907146231:web:0e5cb048a390d59bee88f2",
     measurementId: "G-NR2P57KX96"
};

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
     const promiseChain = clients
          .matchAll({
               type: "window",
               includeUncontrolled: true,
          })
          .then((windowClients) => {
               for (let i = 0; i < windowClients.length; i++) {
                    const windowClient = windowClients[i];
                    windowClient.postMessage(payload);
               }
          })
          .then(() => {
               console.log(payload)
               return registration.showNotification(payload.data.title,{
                    body: payload.data.body,
                    image: 'https://eku.id/assets/img/logoFull.png',
                    data: payload.data
               });
          });
     return promiseChain;
});
self.addEventListener("notificationclick", function(event) {
     console.log(event);
});