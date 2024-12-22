import React, { useState } from "react";
import { StatusBar, Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function Index(): JSX.Element {

  const [randomBackground, setRandomBackground] = useState("#fff")

  const generateColor = () =>{
    const hexRange = '0123456789ABCDEF'
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)]
    }
    setRandomBackground(color)
  }

  return (
    <>
      <StatusBar backgroundColor={randomBackground}/>
      <View style={[styles.container, {backgroundColor: randomBackground}]}>
      <TouchableOpacity onPress={generateColor}>
        <View style={styles.actionbBtn}>
          <Text style={styles.actionbBtnTxt}>Press me</Text>
        </View>
      </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionbBtn : {
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionbBtnTxt:{
    fontSize: 24,
    color: "#fff",
    textTransform: 'uppercase',
  }
})
