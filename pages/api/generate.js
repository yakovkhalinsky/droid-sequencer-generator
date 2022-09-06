const { getTemplates } = require('../../src/templates')
const patch = require('../../src/patch')

const templates = getTemplates()

export default (req, res) => {
  if (req.method === 'POST') {
    const { CHANNELS, CHANNEL_BUTTON_START, MUTE_BUTTON_START } = req.body
    const output = patch.generate({
      CHANNELS,
      CHANNEL_BUTTON_START,
      MUTE_BUTTON_START,
      templates,
    })
    console.log(output)
    return res.send(output.join('\n'))
  }
  res.status(404)
  res.send('Nothing to see here...')
}