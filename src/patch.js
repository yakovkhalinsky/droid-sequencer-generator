const { writeFileSync } = require('fs')
const channels = require('./generate/channels')
const sequencers = require('./generate/sequencers')

exports.generate = ({
  CHANNELS,
  CHANNEL_BUTTON_START,
  UNMUTE_BUTTON_START,
  MUTE_BUTTON_START,
  templates,
}) => {
  console.log('Generating patch "Odessa Style Droid Sequencers..."')

  const channelsOutput = channels.generate({
    channels: CHANNELS.length,
    CHANNEL_BUTTON_START,
    templates,
  })

  const sequencersOutput = sequencers.generate({
    CHANNELS,
    UNMUTE_BUTTON_START,
    MUTE_BUTTON_START,
    CHANNEL_BUTTON_START,
    templates,
  })

  return [
    templates.header,
    templates.config,
    channelsOutput,
    sequencersOutput
  ]
}

exports.save = ({ DROID_INI, output }) => {
  console.log('Saving patch to', DROID_INI)
  writeFileSync(DROID_INI, output.join('\n'))
}