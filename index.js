import React from 'react'
import PropTypes from 'prop-types'
import {View} from 'react-native'

import PickerStack from './src/PickerStack'
import styles from './src/styles'

class DurationPicker extends React.Component {
  static propTypes = {
    showSeconds: PropTypes.bool,
    showMinutes: PropTypes.bool,
    showHours: PropTypes.bool,
    showDays: PropTyps.bool,
    containerStyles: PropTypes.object,
    pickerStyles: PropTypes.object,
    onValueChange: PropTypes.func
  }

  state = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
  }

  handleValueChange = (field, val) => {
    this.setState({[field]: val})

    this.props.onValueChange && this.props.onValueChange(this.state)
  }

  makeNumberRange(max) {
    return Array.from(Array(max).keys())
  }

  get secondsRange() {
    return this.makeNumberRange(60)
  }

  get minutesRange() {
    return this.makeNumberRange(60)
  }

  get hoursRange() {
    return this.makeNumberRange(24)
  }

  get daysRange() {
    return this.makeNumberRange(365)
  }

  render() {
    const {showDays = false, showSeconds = true, showMinutes = true, showHours = true, pickerStyles, containerStyles} = this.props
    const {seconds, minutes, hours, days} = this.state

    return (
      <View style={{...styles.pickerContainer, ...containerStyles}}>
        <PickerStack
          customStyles={pickerStyles}
          display={showDays}
          label="Days"
          value={days}
          onValueChange={(val) => this.handleValueChange('days', val)}
          options={this.daysRange}
        />
        <PickerStack
          customStyles={pickerStyles}
          display={showHours}
          label="Hours"
          value={hours}
          onValueChange={(val) => this.handleValueChange('hours', val)}
          options={this.hoursRange}
        />
        <PickerStack
          customStyles={pickerStyles}
          display={showMinutes}
          label="Mins"
          value={minutes}
          onValueChange={(val) => this.handleValueChange('minutes', val)}
          options={this.minutesRange}
        />
        <PickerStack
          customStyles={pickerStyles}
          display={showSeconds}
          label="Secs"
          value={seconds}
          onValueChange={(val) => this.handleValueChange('seconds', val)}
          options={this.secondsRange}
        />
      </View>
    )
  }
}

module.exports = DurationPicker