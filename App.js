import { StatusBar } from 'expo-status-bar';
import { View, Vibration, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import styles from './components/style';
import But from './components/button';
import GesLR from './components/gesrl';
import Mouse from './components/mousepad';
import io from 'socket.io-client';
import React, { useEffect, useState } from 'react';
import * as Navigationbar from 'expo-navigation-bar';
import { Gyroscope } from 'expo-sensors';

export default function App() {
  Navigationbar.setBackgroundColorAsync("#000000");

  const [ws, setWs] = useState(null);
  const [url, setUrl] = useState("http://192.168.0.3:5004");
  const [edit, setEdit] = useState(false);
  const [te, setTe] = useState('');
  const [kb,setKbut]= useState("xyzd")
  const [vie, setView] = useState(true);
               
  useEffect(() => {
    let socket;
    (async () => {
      try {
        socket = io(url,{transports:['websocket']});
        setWs(socket);
      } catch (e) {
        console.error(e);
      }
    })();


    

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [url]);
  

  

  return (
    <View style={styles.container}>
      {edit && (
        <View style={{ backgroundColor: "#000000", minWidth: '100%', minHeight: "10%", alignItems: 'center', paddingTop: 18 }}>
          <TextInput
            placeholder="Enter IP"
            style={{color : "#FF6500", borderColor : "#FF6500",borderWidth : 1,minWidth : '200'}}
            onChangeText={(e) => setTe(e)}
            value={te}
          />
          <TextInput
            placeholder="Enter IP"
            style={{color : "#FF6500"}}
            onChangeText={(e) => setKbut(e)}
            value={kb}
          />
          <Button
            title="Set Address"
            color="#000"
            onPress={() => {
              setUrl(`http://${te}`);
              setEdit(false);
            }}
          />
        </View>
      )}

      <View style={styles.lges}>
        <View style={styles.upanel}>
          <But name={""} ws={ws} k={'w'} />
        </View>
        <View style={styles.rpanel}>
          <But name={"<"} ws={ws} k={'a'} />
          <But name={">"} ws={ws} k={'d'} />
        </View>
        <View style={styles.upanel}>
          <But name={""} ws={ws} k={'s'} />
        </View>
      </View>

      <View style={styles.rges}>
        <View style={styles.spaceup}>
            <But name={kb[0]} ws={ws} k={kb[0]} color="#000000"/>
            <But name={kb[1]} ws={ws} k={kb[1]} color="#000000"/>
            <But name={kb[2]} ws={ws} k={kb[2]} color="#000000"/>
            <But name={kb[3]} ws={ws} k={kb[3]} color="#000000"/>
            
        </View>
        <View style={styles.space}>
          { vie ? <But name={""} ws={ws} k="space" color="#000000" /> : <Mouse color = "#000000" ws={ws} />}
            
        </View>
        <View style={styles.spacedown}>
            <TouchableOpacity style={styles.butts} onPress={()=>setView(!vie)} onLongPress={() => setEdit(!edit)} />
            <GesLR name={""} ws={ws} k={'left'} color="#000000" />
            <GesLR name={""} ws={ws} k={'right'} color="#000000" />
        </View>
      </View>

      <StatusBar style="auto" hidden /> 
    </View>
  );
}
         