import { useEffect, useState } from 'react';
import * as Location from "expo-location";
import MapView, { Marker, Region } from 'react-native-maps';

export const MapComponent = () => {
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

    return (
        <MapView
            style={{ width: "100%", height: "100%", position:"absolute", zIndex:-50 }}
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
    )
}