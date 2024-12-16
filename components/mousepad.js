import React from 'react';
import { Text, StyleSheet, View, Vibration } from 'react-native';
import { GestureDetector, Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Mouse({ name, ws, k, color = "#432E54" }) {
  
  const gesture = Gesture.Pan()
    .onChange((e)=>{
        const d = {x:e.changeX.toFixed(2),y:e.changeY.toFixed(2)}
        console.log(d)
        ws.emit("view",d)
    })


  const gesturetap = Gesture.Tap()
  .onEnd(()=>{ws.emit("mouse","c")})
    
  const ges = Gesture.Exclusive(gesture, gesturetap)

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={ges}>
        <View style={[styles.button, { backgroundColor: color }]}>
          <Text style={styles.buttonText}>{name}</Text>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth : 2,
    borderColor: "#F72C5B",
    alignSelf: 'stretch',
    
    

  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
