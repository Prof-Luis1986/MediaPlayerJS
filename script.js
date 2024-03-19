document.addEventListener("DOMContentLoaded", function() {
    var cmbPlaylist = document.getElementById("cmbPlaylist");
    var audioPlayer = document.getElementById("audioPlayer");
    var audioSource = document.getElementById("audioSource");
    var imgPlayer = document.getElementById("imgPlayer");

    // Array de canciones con sus respectivas propiedades
    var canciones = [
        { id: 1, nombre: "Honey, No Estás-Bratty", archivo: "Honey,No Estás.mp3", imagen: "Honey.jpeg" },
        { id: 2, nombre: "Instant Crush ft Julian Casablancas", archivo: "Daft Punk - Instant Crush (Lyrics) ft. Julian Casablancas.mp3", imagen: "Instan.jpeg" },
        {id:3, nombre: "Crimen-Bruses", archivo: "Crimen-Bruses.mp3", imagen: "Bruses.jpg"},
        {id:4, nombre: "Jules-Bratty", archivo:"Jules.mp3",imagen: "Jules.jpeg"},
    ];

    // Agrega las opciones de la lista desplegable
    canciones.forEach(function(cancion) {
        var option = document.createElement("option");
        option.value = cancion.id;
        option.textContent = cancion.nombre;
        cmbPlaylist.appendChild(option);
    });

    // Muestra la imagen por defecto al cargar la página
    imgPlayer.src = "Disco.gif"; // Cambié esto para que apunte directamente al archivo Disco.gif

    // Evento change del select
    cmbPlaylist.addEventListener("change", function() {
        var selectedValue = cmbPlaylist.value;
        var cancionSeleccionada = canciones.find(function(cancion) {
            return cancion.id === parseInt(selectedValue);
        });

        if (cancionSeleccionada) {
            audioSource.src = cancionSeleccionada.archivo;
            imgPlayer.src = cancionSeleccionada.imagen;

            // Pausa y reinicia la reproducción para cargar la nueva canción
            audioPlayer.pause();
            audioPlayer.load();
            audioPlayer.play();
        } else {
            audioSource.src = ""; // Restablece la fuente del audio si no hay coincidencia
            imgPlayer.src = "Disco.gif"; // Muestra la imagen por defecto si no hay coincidencia
        }
    });
});
