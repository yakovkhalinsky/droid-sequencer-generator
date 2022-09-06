const { render } = require('mustache')
const { SEQUENCER_TYPE } = require('../types')

const getSectionComments = (contents) => {
  return `# -------------------------------------------------
# ${contents}
# -------------------------------------------------`
}

exports.generate = ({
  CHANNELS,
  UNMUTE_BUTTON_START,
  MUTE_BUTTON_START,
  CHANNEL_BUTTON_START,
  templates
}) => {
  console.log('- Generating sequencers')

  const output = []
  let lastUnusedCv = 0
  CHANNELS.forEach((type, index) => {
    console.log('  -', type)
    const properties = {
      channel: index + 1,
      unmute_button_ref: UNMUTE_BUTTON_START + index,
      mute_button_ref: MUTE_BUTTON_START + index,
      channel_button_ref: CHANNEL_BUTTON_START + index,
    }
    output.push(getSectionComments(`sequencer ${properties.channel}: ${type}`))
    if (type === SEQUENCER_TYPE.rhythm) {
      output.push(render(templates.algoquencerMain, properties))
    }
    if (type === SEQUENCER_TYPE.voice) {
      properties.channel_cv = lastUnusedCv + 1,
      output.push(render(templates.algoquencerMain, properties))
      output.push(render(templates.algoquencerExtra, properties))
      output.push(render(templates.motoquencer, properties))
      lastUnusedCv++
    }
  })
  return output.join('\n')
}