import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import * as Location from "expo-location";
import MapView, { Marker, Region } from 'react-native-maps';

const Page = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [initialRegion, setInitialRegion] = useState<Region | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      console.log(status);

      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setInitialRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    })();
  }, []);

  let text = 'Waiting..';

  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


  return (
    <View className='bg-red-500 h-screen items-center gap-4'>
      <MapView
        style={{ width: "100%", height: "50%" }}
        initialRegion={initialRegion as Region}
      >
        {initialRegion && <Marker
          coordinate={{
            latitude: initialRegion.latitude,
            longitude: initialRegion.longitude
          }}
          title='Your location'
        />}

      </MapView>
      <Text className='font-bold text-white text-7xl'>
        Welcome
      </Text>
      <Text>{text}</Text>
    </View>
  );
};

export default Page;
