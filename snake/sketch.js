let snake;
let rez = 20;
let w;
let h;

function setup() {
    createCanvas(400, 400);
    snake = new Snake();
    w = floor(width / rez);
    h = floor(height / rez);
    frameRate(5);
    foodLocation();
}

function foodLocation() {
    let x = floor(random(w));
    let y = floor(random(h));

    food = createVector(x, y);
}

function draw() {
    background(220);
    scale(rez);

    if(snake.eat(food)) {
        foodLocation();
    }

    snake.update();
    snake.show();

    if (snake.endGame()) {
        background(255, 0, 0);
        noLoop();
    }

    fill(255, 0, 0);
    noStroke();
    rect(food.x, food.y, 1, 1);

}

function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        snake.setDir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        snake.setDir(-1, 0);
    } else if (keyCode === UP_ARROW) {
        snake.setDir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.setDir(0, 1);
    }
}