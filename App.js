import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import OneSignal from 'react-native-onesignal';

function App() {
  function onReceived(data) {
    console.log('onReceived', data);
  }

  function onOpened(notification) {
    console.log('onOpened', notification);
  }

  function onIds(id) {
    console.log('id', id);
  }

  useEffect(() => {
    OneSignal.init('247029c8-c7b8-4368-bcdc-cf688e9be372');

    OneSignal.addEventListener('received', onReceived);
    OneSignal.addEventListener('opened', onOpened);
    OneSignal.addEventListener('ids', onIds);

    return () => {
      OneSignal.removeEventListener('received', onReceived);
      OneSignal.removeEventListener('opened', onOpened);
      OneSignal.removeEventListener('ids', onIds);
    };
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
    </>
  );
}

export default App;
