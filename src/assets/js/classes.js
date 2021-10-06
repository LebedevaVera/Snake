/*class Entity {
    constructor(x, y) {
        this.position = new Position(x, y);
    }
}*/

class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

export default class Game {
    constructor(width, height, fps = 60, squareSize = 16) {
        this.width = width;
        this.height = height;
        this.fps = fps;
        this.running = false;
        this.squareSize = squareSize;
        this.snakePositions = [new Position(0, 0), new Position(1, 0), new Position(2, 0)];
        this.playerDirection = "w"
        //this.snakePositions = "fuck off you dumb hoe";
    }

    loop = () => {
        let pos;
        switch (this.playerDirection) {
            case "w":
                pos = new Position(this.snakePositions[0].x, (this.snakePositions[0].y + 14) % 15);
                break;
            case "d":
                pos = new Position((this.snakePositions[0].x + 1) % 15, this.snakePositions[0].y);
                break;
            case "s":
                pos = new Position(this.snakePositions[0].x, (this.snakePositions[0].y + 1) % 15);
                break;
            case "a":
                pos = new Position((this.snakePositions[0].x + 14) % 15, this.snakePositions[0].y);
                break;
        }
        this.snakePositions.unshift(pos);
        this.snakePositions.splice(this.snakePositions.length-1);
    }

    drawSnake = (ctx) => {
        ctx.beginPath();
        ctx.fillStyle = "dark green";
        for(let i = 0; i < this.snakePositions.length; ++i) {
            ctx.fillRect(this.snakePositions[i].x*this.squareSize, this.snakePositions[i].y*this.squareSize, this.squareSize, this.squareSize)
        }
        ctx.stroke();
        requestAnimationFrame(this.drawSnake);
    }

    draw = (ctx, width, height) => {
        //drawGameboard();
        ctx.clearRect(0, 0, width, height);
        this.drawSnake();
        if(this.running) {
            requestAnimationFrame(this.draw)
        }
    }

    start = (ctx, w, h) => {
        setInterval(this.loop, 1000/20);
        this.startStop();
        this.draw(ctx, w, h);
    }

    startStop = () => {
        this.running = !this.running;
    }

    setPlayerDirection = (dir) => {
        this.playerDirection = dir;
    }

    setRunning = (running) => {
        this.running = running;
    }
}