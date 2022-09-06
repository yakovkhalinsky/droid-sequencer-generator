# -------------------------------------------------
# utility controls
# -------------------------------------------------

# main clock
[clocktool]
  clock = I1
  multiply = 4
  output = _MAIN_CLOCK

# reset
[copy]
  input = I2
  output = _RESET

# output main clock
[copy]
  input = _MAIN_CLOCK
  output = G12

# compose mode
[button]
  button = B1.1
  output = L1.1

# pages
[buttongroup]
  button1 = B1.7
  button2 = B1.8
  button3 = B2.7
  button4 = B2.8
  led1 = L1.7
  led2 = L1.8
  led3 = L2.7
  led4 = L2.8
  output = _PAGE

# preset number
[buttongroup]
  button1 = B2.1
  button2 = B2.2
  button3 = B2.3
  button4 = B2.4
  button5 = B2.5
  button6 = B2.6
  value1 = 1
  value2 = 2
  value3 = 3
  value4 = 4
  value5 = 5
  value6 = 6
  led1 = L2.1
  led2 = L2.2
  led3 = L2.3
  led4 = L2.4
  led5 = L2.5
  led6 = L2.6
  output = _PRESET_NUMBER
  longpress = _SAVE_PRESET

# sequencer degree
[pot]
  pot = P2.1
  outputscale = 10
  notch = 10%
  ledgauge = 0.2
  output = _DEGREE
