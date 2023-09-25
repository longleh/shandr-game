import 'phaser'

export const baseConfig: Partial<Phaser.Types.Core.GameConfig> = {
    width: 1280,
    height: 720,
    backgroundColor: '#000',
    parent: 'game',
    type: Phaser.AUTO,
    scale: {
        // Fit to window
        mode: Phaser.Scale.FIT,
        // Center vertically and horizontally
    },
}

export default baseConfig