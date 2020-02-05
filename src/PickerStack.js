import React from 'react'
import {View, Text, Picker} from 'react-native'
import styles from './styles'

function PickerStack({display, label, selectedValue, onValueChange, options, customStyles}) {
  if (!display) {
    return null
  }

  return (
    <View style={{...styles.pickerStack, ...customStyles}}>
      <Text style={styles.label}>{label}</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
      >
        {options.map((val) => (
          <Picker.Item key={val} label={String(val)} value={val} />
        ))}
      </Picker>
    </View>
  )
}

export default PickerStack