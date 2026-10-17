
const surpriseBtn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");

if (surpriseBtn && surprise) {
    surpriseBtn.addEventListener("click", function () {
        surprise.hidden = false;

        surpriseBtn.textContent = "Surprise Opened! 💗";
        surpriseBtn.disabled = true;
        surpriseBtn.style.opacity = "0.8";

        surprise.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
}
