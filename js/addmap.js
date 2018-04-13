// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDHBJwFoWZyc1ILPyR-ec9pqXK-Md82JWQ",
    authDomain: "slepamapa-7a8b3.firebaseapp.com",
    databaseURL: "https://slepamapa-7a8b3.firebaseio.com",
    projectId: "slepamapa-7a8b3",
    storageBucket: "slepamapa-7a8b3.appspot.com",
    messagingSenderId: "205137213145"
  };
  firebase.initializeApp(config);
// End Initialize Firebase
console.log(firebase);


var pridanelokace = [];
var lokaceUl = document.getElementById('lokace-ul');
var addMoreBtn = document.getElementById('add-more-button');

//GET THE FORM DATA
var form = document.getElementById('addmap-form');
form.onsubmit = function(event) {
  event.preventDefault();
  var nazevmapy = form.nazevmapy.value;
  var lokace = form.lokace.value;
  var nazevlokace = form.nazevlokace.value;
  var lat = form.lat.value;
  var lng = form.lng.value;

    var data = {
      [nazevmapy]: {
        [lokace]: {
          nazevlokace: nazevlokace,
          lat: lat,
          lng: lng
        }
    }};

    firebase.database().ref('mapy').update(data);
    pridanelokace.push(nazevlokace);

    for (var i = 0; i < pridanelokace.length; i++){
      var li = document.createElement('li');
      li.innerText = pridanelokace[i];
      lokaceUl.appendChild(li);
    }
  form.reset();
  form.classList.add("hide");
  document.getElementById('nazevmapy').innerHTML = "Tvoje mapa: " + nazevmapy;
  addMoreBtn.classList.remove("hide");

  addMoreBtn.addEventListener('click', function() {
  
}
//END THE FORM DATA
