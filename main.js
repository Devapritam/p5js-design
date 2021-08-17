function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.hide();

    fill(204, 101, 192, 127);
    stroke(127, 63, 120);

    rect(40, 40, 540, 20);
    rect(40, 40, 20, 400);
    rect(40, 420, 540, 20);
    rect(560, 40, 20, 400);

    fill(255, 179, 0, 150);
    stroke(128, 50, 5);

    translate(50, 70);
    noStroke();
    for (let i = 0; i < 10; i ++) {
        ellipse(0, 30, 20, 80);
        rotate(PI/5);
    }

    fill(181, 5, 240, 150);
    stroke(71, 0, 94);

    translate(510, 0);
    noStroke();
    for (let i = 0; i < 10; i ++) {
        ellipse(0, 30, 20, 80);
        rotate(PI/5);
    }

    fill(255, 179, 0, 150);
    stroke(128, 50, 5);

    translate(10, 340);
    noStroke();
    for (let i = 0; i < 10; i ++) {
        ellipse(0, 30, 20, 80);
        rotate(PI/5);
    }

    fill(181, 5, 240, 150);
    stroke(71, 0, 94);

    translate(-520, 0);
    noStroke();
    for (let i = 0; i < 10; i ++) {
        ellipse(0, 30, 20, 80);
        rotate(PI/5);
    }
}

function take_snapshot() {
    save('p5img.png');
}

function draw() {
    image(video, 120, 90, 390, 290);
}