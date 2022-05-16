class Sprite {
  constructor({ position, imageSrc, offset = {x: 0, y: 0}, scale = 1, framesMax = 1 }) {
    this.position = position;
    this.width = 50
    this.height = 150
    this.image = new Image()
    this.image.src = imageSrc
    this.scale = scale
    this.offset = offset

  }

  draw() {
    c.drawImage(this.image, this.position.x - this.offset.x, this.position.y - this.offset.y, this.image.width * this.scale, this.image.height * this.scale)
  }

  update() {
    this.draw()
  }

}

class Fighter extends Sprite {
  constructor({ position, velocity, color = 'red', offset = { x: 0, y: 0 }, imageSrc, scale }) {
    super({
      position,
      imageSrc,
      offset,
      scale
    })

    this.velocity = velocity;
    this.width = 50
    this.height = 150
    this.lastKey
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y
      },
      offset: offset,
      width: 100,
      height: 50,
    }
    this.color = color
    this.isAttacking
    this.health = 100
  }

  update() {
    this.draw()
    this.attackBox.position.x = this.position.x + this.attackBox.offset.x
    this.attackBox.position.y = this.position.y

    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    if (this.position.y + this.height + this.velocity.y >= canvas.height - 95) {
      this.velocity.y = 0
    } else {
      this.velocity.y += gravity
    }
  }

  attack() {
    this.isAttacking = true
    setTimeout(() => { this.isAttacking = false }, 100)
  }
}