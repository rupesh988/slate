import React from 'react';
import { Text, StyleSheet, View, Vibration } from 'react-native';
import { GestureDetector, Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Button({ name, ws, k, color = "#A8CD89" }) {
  // Create the gesture handler for touch eventswwd         wadsadwaawdasdawdasdawdasdawdasdawwddwdddwddd
  const gesture = Gesture.Pan()
    .onTouchesDown(() => {
        ws.emit("lrin", k);
        
      
      Vibration.vibrate([10, 30, 50]);
    })
    .onTouchesUp(() => {  
      ws.emit("lrout", k);
    });  

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={gesture}>
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
    borderTopWidth: 0.3,
    borderColor: "#fff",
    alignSelf: 'stretch',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
