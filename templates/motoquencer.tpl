# cv sequencer
[motoquencer]
  select = _CHANNEL
  selectat = {{channel}}
  clock = _SEQUENCER_CLOCK_{{channel}}
  reset = _RESET
  cv = O{{channel_cv}}
  page = _PAGE
  numsteps = 16
  composemode = L1.1
  quantize = 2
  degree = _DEGREE
  preset = _PRESET_NUMBER
  savepreset = _SAVE_PRESET
  loadpreset = B1.2
