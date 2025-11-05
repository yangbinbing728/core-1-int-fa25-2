let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  for (let i = 0; i < 150; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(0, 20); 
  
  for (let p of particles) {
    p.update();
    p.display();
  }
}

class Particle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(1, 3); // 小颗粒
    this.speedX = random(-0.6, 0.6);
    this.speedY = random(-0.6, 0.6);
    this.color = color(random(150, 255), random(150, 255), 255, 200);
  }
  
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    
    if (this.x < 0 || this.x > width) this.speedX *= -1;
    if (this.y < 0 || this.y > height) this.speedY *= -1;
  }
  
  display() {
    noStroke();
    for (let r = this.size * 3; r > 0; r--) {
      let alpha = map(r, 0, this.size * 3, 0, 50);
      fill(red(this.color), green(this.color), blue(this.color), alpha);
      ellipse(this.x, this.y, r);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
