const { render } = require('mustache')

exports.generate = ({ channels, CHANNEL_BUTTON_START, templates }) => {
  console.log('- Generating channel controls')
  const channelItems = []
  for (let i=0; i < channels; i++) {
    const properties = {
      channel: i + 1,
      channel_button_ref: CHANNEL_BUTTON_START + i
    }
    channelItems.push(render(templates.channelsItem, properties))
  }

  return [
    templates.channelsHeader,
    channelItems.join('\n'),
    templates.channelsFooter,
  ].join('\n')
}