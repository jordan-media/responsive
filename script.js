// document.getElementById('myAudio').play();

document.addEventListener('DOMContentLoaded', function () {
    let riverImage = document.querySelector('.river-layer');
    let pika = document.querySelector('.bird');

    document.querySelectorAll('.btn-toggle').forEach(button => {
        let checkbox = button.querySelector('.btn-toggle__checkbox');
        let audio = document.getElementById('myAudio'); // Get the audio element
    
        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                console.log('Audio should play now');
                audio.play(); // Play audio when checked
            } else {
                console.log('Audio should pause now');
                audio.pause(); // Pause audio when unchecked
            }
        });
    });
    

    document.querySelectorAll('.btn-toggle').forEach(button => {
        let checkbox = button.querySelector('.btn-toggle__checkbox');
        let action = button.getAttribute('data-action');
        // let audio = this.getElementById("myAudio");

        // button.addEventListener ("click", function () {
        //     if (checkbox.checked) {
        //         audio.play();
        //     } else {
        //         audio.onpause();
        //     }
        // });

        checkbox.addEventListener('change', function () {
            if (action === "river-speed") {
                riverImage.style.animationDuration = checkbox.checked ? "5s" : "15s";
            } else if (action === "pika-speed") {
                // Instead of setting animation duration directly, toggle the class for smooth transition
                if (checkbox.checked) {
                    pika.classList.add('fast-pika');
                    pika.classList.remove('slow-pika');
                } else {
                    pika.classList.add('slow-pika');
                    pika.classList.remove('fast-pika');
                }
            }
        });
    });
});
