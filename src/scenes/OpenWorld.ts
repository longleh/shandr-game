import 'phaser'
import baseConfig from '@/constants/config'

export class OpenWorld extends Phaser.Scene {
    preload() {
        this.load.setBaseURL('https://labs.phaser.io')
        this.load.image('bg', 'assets/skies/darkstone.png')
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json')
    }

    create() {
        const shape1 = new Phaser.Geom.Circle(0, 0, 160)

        const emitter = this.add.particles(400, 300, 'flares', {
            frame: { frames: ['red', 'green', 'blue', 'white', 'yellow'], cycle: true },
            blendMode: 'ADD',
            lifespan: 500,
            quantity: 4,
            scale: { start: 0.5, end: 0.1 }
        })
    
        emitter.addEmitZone({ type: 'edge', source: shape1, quantity: 64, total: 1 })
    }


    static config: Phaser.Types.Core.GameConfig = {
        ...baseConfig,
        scene: OpenWorld
    }
}

export default OpenWorld