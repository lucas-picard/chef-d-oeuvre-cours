const fileInput = document.getElementById("fileInput");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const preview = document.getElementById("preview");

fileInput.addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = function () {
        const width = 256;
        const height = 256;

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

        preview.src = canvas.toDataURL("image/png");
    };
});