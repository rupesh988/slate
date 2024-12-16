import React from 'react';
import { Text, StyleSheet, View, Vibration } from 'react-native';
import { GestureDetector, Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Button({ name, ws, k, color = "#000000" }) {
  const gesture = Gesture.Pan()
    .onTouchesDown(() => {
      if (k === "space") {
        ws.emit("s", " "); 
        console.log('space')
      } else {
        ws.emit("in", k);
      }
      Vibration.vibrate([10, 30, 50]);
    })
    .onTouchesUp(() => {
      if (k === "space") return;
      ws.emit("out", k);
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
  },
});
