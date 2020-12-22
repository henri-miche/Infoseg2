import 'react-native-gesture-handler';
import React,{useEffect} from 'react';
/*import { StyleSheet, Text, View } from 'react-native';*/
import {NavigationContainer} from '@react-navigation/native';
import Mainstack from './src/stacks/Mainstack';
import * as Font from 'expo-font';
import { Platform, InteractionManager } from 'react-native';
import * as Updates from "expo-updates";

export default function App() {
/*
  useEffect(() => {
    async function updateApp() {
      const { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync(); // depende da sua estratégia
      }
    }
    updateApp();
  }, []);
  */
  

  /*todo este codigo para desabilitar aviso de timer real database,import acima tbm,caso excluir */
  const _setTimeout = global.setTimeout;
  const _clearTimeout = global.clearTimeout;
  const MAX_TIMER_DURATION_MS = 60 * 1000;
  if (Platform.OS === 'android') {
    // Work around issue `Setting a timer for long time`
    // see: https://github.com/firebase/firebase-js-sdk/issues/97
    const timerFix = {};
    const runTask = (id, fn, ttl, args) => {
      const waitingTime = ttl - Date.now();
      if (waitingTime <= 1) {
        InteractionManager.runAfterInteractions(() => {
          if (!timerFix[id]) {
            return;
          }
          delete timerFix[id];
          fn(...args);
        });
        return;
      }

      const afterTime = Math.min(waitingTime, MAX_TIMER_DURATION_MS);
      timerFix[id] = _setTimeout(() => runTask(id, fn, ttl, args), afterTime);
    };

    global.setTimeout = (fn, time, ...args) => {
      if (MAX_TIMER_DURATION_MS < time) {
        const ttl = Date.now() + time;
        const id = '_lt_' + Object.keys(timerFix).length;
        runTask(id, fn, ttl, args);
        return id;
      }
      return _setTimeout(fn, time, ...args);
    };

    global.clearTimeout = id => {
      if (typeof id === 'string' && id.startsWith('_lt_')) {
        _clearTimeout(timerFix[id]);
        delete timerFix[id];
        return;
      }
      _clearTimeout(id);
    };
  }

  /*começo do app*/

  const font = async () => {
         await Font.loadAsync({
          RobotoSlab:require('./assets/fonts/RobotoSlab-VariableFont_wght.ttf')
      })
    };

   

 useEffect(() => {
      font();
  }, [])

  return (
    
      <NavigationContainer>
        <Mainstack />
      </NavigationContainer>
    
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
