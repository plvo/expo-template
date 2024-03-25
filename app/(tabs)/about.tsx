import { StyleSheet, Text, View } from 'react-native';
import Mapbox from '@rnmapbox/maps';

Mapbox.setAccessToken("pk.eyJ1IjoiZ29ybzYxNCIsImEiOiJjbHU3M2lyMWYwMWplMmpyeGtzMWw5M3M0In0.ExwbsTr1vzdhrzwDPQG9FA");

const Page = () => {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Mapbox.MapView style={styles.map} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        height: 300,
        width: 300,
    },
    map: {
        flex: 1
    }
});

export default Page;
