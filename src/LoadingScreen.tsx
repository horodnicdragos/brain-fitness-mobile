import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, AsyncStorage, Text, View } from 'react-native';


const LOADING_TIMEOUT = 300;

export default function LoadingScreen({ navigation }) {
  const [showLoading, setShowLoading] = useState(false);

  // Async fn to check the user token from AsyncStorage
  const checkAuth = useCallback(async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // dev: fake wait for a slower app to load
    // const slowLoading = await new Promise(res => setTimeout(res, 1000));

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    navigation.navigate('Auth');
  }, []);

  useEffect(() => {
    // start checking authToken
    checkAuth();

    const t = setTimeout(() => {
      setShowLoading(true)
    }, LOADING_TIMEOUT);

    return () => clearTimeout(t);
  }, []);

  return (
    <View>
      {showLoading && <ActivityIndicator />}
      <Text>Loading...</Text>
    </View>
  );
}
