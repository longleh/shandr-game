import 'phaser'
import OpenWorld from '@scenes/OpenWorld'

console.log({
    width: screen.availWidth,
    height: screen.availHeight,
})

const game = new Phaser.Game(OpenWorld.config)