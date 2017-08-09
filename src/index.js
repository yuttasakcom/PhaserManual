import PIXI from 'pixi.js'
import p2 from 'p2'
import Phaser from 'phaser'

import background from '@/assets/img/background.jpg'

const game = new Phaser.Game(900, 540, Phaser.AUTO)
const GameState = {
  preload () {
    this.load.image('background', background)
  },
  create () {
    this.background = this.game.add.sprite(0,0, 'background')
  },
  update () {}
}

game.state.add('GameState', GameState)
game.state.start('GameState')