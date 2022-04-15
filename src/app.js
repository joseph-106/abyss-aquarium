const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let animation;
let timer = 0;
let flag = 1;
const fish = {
    x: 0,
    y: 500,
    width: 50,
    height: 20,
    draw() {
        ctx.fillStyle = "grey";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    },
};
function displaySea() {
    animation = requestAnimationFrame(displaySea);
    timer++;
    canvas.width = window.innerWidth;
    canvas.height = 10000;
    const lineargradient = ctx.createLinearGradient(0, 300, canvas.width, canvas.height);
    lineargradient.addColorStop(0, "#055cfc");
    lineargradient.addColorStop(0.6, "black");
    ctx.fillStyle = lineargradient;
    ctx.fillRect(0, 300, canvas.width, canvas.height);
    if (flag === 1) {
        fish.x += 1;
        if (fish.x > canvas.width - fish.width) {
            flag = 0;
        }
    }
    else {
        fish.x -= 1;
        if (fish.x === 0) {
            flag = 1;
        }
    }
    fish.draw();
}
displaySea();
