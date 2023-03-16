const AudioManager = cc.Class({
    extends: cc.Component,

    properties: {
        click: cc.AudioClip,
        background: cc.AudioClip,
        save: cc.AudioClip,
        win: cc.AudioClip,
    },

    playBackgroundMusic: function() {
        cc.audioEngine.playMusic(this.background, true);
    },

    playClickMusic: function() {
        cc.audioEngine.play(this.click, false, 1);
    },

    playSaveMusic: function() {
        cc.audioEngine.playMusic(this.save, false);
    },

    // update (dt) {},
});
