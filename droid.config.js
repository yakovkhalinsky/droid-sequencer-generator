const { SEQUENCER_TYPE } = require('./src/types')

module.exports = {
  DROID_INI: './droid.ini',  // place to output final Droid patch
  CHANNELS: [  // channel configuration by sequencer type
    SEQUENCER_TYPE.rhythm,
    SEQUENCER_TYPE.rhythm,
    SEQUENCER_TYPE.rhythm,
    SEQUENCER_TYPE.voice,
  ],
  UNMUTE_BUTTON_START: 21,  // where unmute buttons start
  MUTE_BUTTON_START: 25,  // where mute buttons start
  CHANNEL_BUTTON_START: 29, // where channel buttons start
}