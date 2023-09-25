import 'phaser'
import baseConfig from '@/constants/config'
import { assetsBaseUrl, pirateShip } from '@constants/assets'

export class OpenWorld extends Phaser.Scene {
    ship: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody | null
    cursors: Phaser.Types.Input.Keyboard.CursorKeys | null
    shipRotation: number

    constructor() {
        super({key: 'OpenWorld'})
        this.ship = null
        this.cursors = null
        this.shipRotation = 0
    }

    preload() {
        this.load.setBaseURL(assetsBaseUrl)
        this.load.spritesheet('ship', pirateShip, { frameWidth: 205, frameHeight: 205})
        this.cursors = this.input.keyboard?.createCursorKeys() || null
    }

    create() {
        this.ship = this.physics.add.sprite(0, 0, 'ship')
        this.ship.setCollideWorldBounds(true)
        this.ship.setScale(0.5)
    }

    update(): void {
        if (this.cursors?.left.isDown) {
            this.ship?.setRotation(-1.5)
            this.ship?.setVelocityX(-160)
        }
        else if (this.cursors?.right.isDown) {
            this.ship?.setRotation(1.5)
            this.ship?.setVelocityX(160)
        }
        else {
            this.ship?.setVelocityX(0)
        }

        if (this.cursors?.up.isDown) {
            this.ship?.setRotation(0)
            this.ship?.setVelocityY(-160)
        }
        else if (this.cursors?.down.isDown) {
            this.ship?.setRotation(3.15)
            this.ship?.setVelocityY(160)
        }
        else {
            this.ship?.setVelocityY(0)
        }

    }


    static config: Phaser.Types.Core.GameConfig = {
        ...baseConfig,
        scene: OpenWorld,
        backgroundColor: '#1c2842',
        physics: {
            default: 'arcade',
            matter: {
                gravity: {
                    x: 0,
                    y: 0
                }
            }
        },
    }
}

export default OpenWorld