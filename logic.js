document.querySelectorAll('.whatsapp-button').forEach(button => {
    button.addEventListener('click', function() {
        const phoneNumber = "919398730466"; // Change the phone number here
        const messageText = "I want to join your class"; // The message you want to send
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        let whatsappUrl;

        if (isMobile) {
            // For mobile devices, open WhatsApp mobile app directly
            whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(messageText)}`;
        } else {
            // For desktop/laptop, open WhatsApp Web
            whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(messageText)}`;
        }

        window.open(whatsappUrl, "_blank");
    });
});




const video = document.getElementById("video");

    // Play the video on hover
    video.onmouseover = function () {
        video.play();
    };

    // Pause the video when the mouse leaves
    video.onmouseout = function () {
        video.pause();
    };