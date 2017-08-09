import PIXI from 'pixi.js'
import p2 from 'p2'
import Phaser from 'phaser'
import '@/assets/styles/mystyle.css'

import background from '@/assets/img/background.jpg'
import knight from '@/assets/img/knight.png'

const game = new Phaser.Game(900, 540, Phaser.AUTO)
const GameState = {
  preload () {
    this.load.image('background', background)
    this.load.image('knight', knight)
  },
  create () {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    this.background = this.game.add.sprite(0,0, 'background')
    this.knight = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'knight')
    this.knight.anchor.setTo(0.5)
    this.knight.scale.setTo(-1, 1)
  },
  update () {}
}

game.state.add('GameState', GameState)
game.state.start('GameState')