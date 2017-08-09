import PIXI from 'pixi.js'
import p2 from 'p2'
import Phaser from 'phaser'

const game = new Phaser.Game(640, 360, Phaser.AUTO)
const GameState = {
  preload () {},
  create () {},
  update () {}
}

game.state.add('GameState', GameState)
game.state.start('GameState')