import React, { useState } from 'react'

import { SEQUENCER_TYPE } from '../../types'

const DEFAULT_CHANNELS = [
  SEQUENCER_TYPE.rhythm,
  SEQUENCER_TYPE.rhythm,
  SEQUENCER_TYPE.rhythm,
  SEQUENCER_TYPE.voice,
  '',
  '',
  '',
  '',
]

const CHANNEL_BUTTON_START = 17
const MUTE_BUTTON_START = 25

export const HomePage = () => {
  const [channels, setChannels] = useState(DEFAULT_CHANNELS)
  const [generating, setGenerating] = useState(false)
  const [showPatch, setShowPatch] = useState(false)
  const [patch, setPatch] = useState('')

  const handleChange = (sequencerType, index) => {
    let updateChannels = [...channels]
    updateChannels[index] = sequencerType
    setChannels(updateChannels)
  }

  const handleGenerate = () => {
    setGenerating(true)
    setShowPatch(false)

    fetch('/api/generate', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        CHANNELS: channels.filter(channel => channel.length > 0),
        CHANNEL_BUTTON_START,
        MUTE_BUTTON_START
      })
    })
      .then(response => response.text())
      .then(patch => {
        setGenerating(false)
        setPatch(patch)
        setShowPatch(true)
      })
  }

  return (
    <div className="container">
      <h1>The Odessa Patch</h1>
      <h2>A droid sequencer patch generator</h2>
      <div>
        {channels.map((sequencerType, index) => {
          return (
            <div key={index}>
              <select
                className="sequencer-input"
                value={sequencerType}
                onChange={({ target }) => handleChange(target.value, index)}
              >
                <option value={SEQUENCER_TYPE.rhythm}>Channel {index + 1}: {SEQUENCER_TYPE.rhythm}</option>
                <option value={SEQUENCER_TYPE.voice}>Channel {index + 1}: {SEQUENCER_TYPE.voice}</option>
                <option value="">Channel {index + 1}: disabled</option>
              </select>
            </div>
          )
        })}
      </div>
      <div>
        <button className="generate-patch" disabled={generating} onClick={handleGenerate}>Generate Patch</button>
      </div>
      <hr />
      {showPatch && (
        <div>
          <textarea className="patch" value={patch} readOnly />
        </div>
      )}
    </div>
  )
}