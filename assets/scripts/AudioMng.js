cc.Class({
    extends: cc.Component,

    properties: {

        buttonAudio: {
            default: null,
            url: cc.AudioClip
        },
        bgm: {
            default: null,
            url: cc.AudioClip
        },
        scoreAudio: {
            default: null,
            type: cc.AudioClip
        },
        jumpAudio: {
            default: null,
            type: cc.AudioClip
        },
    },

    playMusic: function () {
        cc.audioEngine.playMusic(this.bgm, true);
    },

    pauseMusic: function () {
        cc.audioEngine.pauseMusic();
    },

    resumeMusic: function () {
        cc.audioEngine.resumeMusic();
    },

    _playSFX: function (clip) {
        cc.audioEngine.playEffect(clip, false);
    },

    playButton: function () {
        this._playSFX(this.buttonAudio);
    },
    playScore: function () {
        this._playSFX(this.scoreAudio);
    },
    playJump: function () {
        this._playSFX(this.jumpAudio);
    }
});
