import React from 'react'
import PropTypes from 'prop-types'
import {View, Text, Picker} from 'react-native'
import styles from './styles'

function PickerStack({display, label, value, onValueChange, options, customStyles}) {
  if (!display) {
    return null
  }

  return (
    <View style={{...styles.pickerStack, ...customStyles}}>
      <Text style={styles.label}>{label}</Text>
      <Picker
        selectedValue={value}
        onValueChange={onValueChange}
      >
        {options.map((val) => (
          <Picker.Item key={val} label={String(val)} value={val} />
        ))}
      </Picker>
    </View>
  )
}

PickerStack.propTypes = {
  display: PropTypes.bool,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  customStyles: PropTypes.object,
}

export default PickerStack