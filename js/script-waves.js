
let a = document.getElementById("svg");
let len = a.getTotalLength();

var canvas = document.getElementById('g');
var ctx = canvas.getContext('2d');
var parent = canvas.parentElement;


class Mouse {
    constructor(canvas) {
        this.x = 0;
        this.y = 0;
        var rect = canvas.getBoundingClientRect();

        window.onmousemove = (e) => {
            this.x = e.clientX - rect.left,
            this.y = e.clientY - rect.top
        }
    }
}

canvas.width = parent.clientWidth;
canvas.height = parent.clientHeight;


/* function drawBall (x, y, radius) {  
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.closePath();
    ctx.restore();
} */

class ball {
    constructor(x, y, radius, color) {
        this.x = x || 0;
        this.y = y || 0;
        this.originalX = x || 0;
        this.originalY = y || 0;
        this.vx = 0;
        this.vy = 0;
        this.radius = radius || 2;
        this.color = color || 'ff6600';
        this.springFactor = '0.6';
        this.friction = '0.9';
    }

    setPos(x,y) {
        this.x = x;
        this.y = y;
    }

    think(mouse) {
        let dx = this.x - mouse.x;
        let dy = this.y - mouse.y;

        let dist = Math.sqrt(dx*dx + dy*dy);
        if(dist<150) {
            let angle = Math.atan2(dy,dx);
            let tx = mouse.x + Math.cos(angle) * 150;
            let ty = mouse.y + Math.sin(angle) * 150;

            this.vx += tx - this.x;
            this.vy += ty - this.y;
        }
       /*  console.log(dist); */

        //spring back

        let dx1 = -(this.x - this.originalX);
        let dy1 = -(this.y - this.originalY);

        this.vx += dx1 * this.springFactor;
        this.vy += dy1 * this.springFactor;

        this.vx *= this.friction;
        this.vy *= this.friction;

        this.x += this.vx;
        this.y += this.vy;
    }

    spring() {

    }

    draw(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
        ctx.fill();
        ctx.closePath();
        ctx.restore();

    }
}

let pos = new Mouse(document.body);
let mouse = new ball(0, 0, 150, `green`);

let balls = [];
for (i = 0; i < len; i++) {
    if (i % 40 == 0) {
        balls.push(
            new ball(
                a.getPointAtLength(i).x,
                a.getPointAtLength(i).y,
            )
        )
    }
}

function conectDots (dots) {
    ctx.beginPath();
    var grd = ctx.createLinearGradient(0, 760, 920, 700);
grd.addColorStop(0.5, "#86a3c9");
grd.addColorStop(1, "#D1E5FE");

    ctx.fillStyle = grd;
    for (var i = 0, jlen = dots.length; i <= jlen; i++) {
        var p0 = dots[i + 0 >= jlen ? i + 0 - jlen : i + 0];
        var p1 = dots[i + 1 >= jlen ? i + 1 - jlen : i + 1];
        ctx.quadraticCurveTo(p0.x, p0.y, (p0.x + p1.x) * 0.5, (p0.y + p1.y) * 0.5);
    }
    ctx.closePath();
    ctx.fill();
}

function Render() {
    window.requestAnimationFrame(Render);
    /* console.log(pos.x, pos.y); */
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    mouse.setPos(pos.x, pos.y);
    /* mouse.draw(ctx); */

    balls.forEach(ball => {
        ball.think(pos);
        /* ball.draw(ctx); */
    });
    conectDots(balls);
}

Render();







