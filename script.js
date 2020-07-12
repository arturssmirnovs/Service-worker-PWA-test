window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').then((registration) => {

    }, (err) => {

    });

    navigator.serviceWorker.ready.then((swRegistration) => {
        return swRegistration.sync.register('event')
    });
})

if (navigator.onLine) {
    showOnline();
} else {
    showOffline();
}

window.addEventListener('offline', function(e) {
    showOffline();
});

window.addEventListener('online', function(e) {
    showOnline();
});

function showOnline() {
    document.getElementById("online").style.display = "block";
    document.getElementById("offline").style.display = "none";
}

function showOffline() {
    document.getElementById("online").style.display = "none";
    document.getElementById("offline").style.display = "block";
}

function playYes() {
    var audio = new Audio('yes.mp3');
    audio.play();
}

function playNo() {
    var audio = new Audio('no.mp3');
    audio.play();
}