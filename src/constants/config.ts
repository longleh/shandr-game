import 'phaser'

export const baseConfig: Partial<Phaser.Types.Core.GameConfig> = {
    width: 1280,
    height: 720,
    backgroundColor: '#000',
    parent: 'game',
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
    },
}

export default baseConfig