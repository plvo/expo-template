import { Camera, CameraType, FlashMode } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Page = () => {
    const [type, setType] = useState(CameraType.back);
    const [flash, setFlash] = useState<FlashMode>(FlashMode.off);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    if (!permission) return <View />

    if (!permission.granted) {
        return (
            <View>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    const toggleCameraType = () => {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
        if (type !== CameraType.back) setFlash(FlashMode.off)
    }

    const handleFlash = () => {
        if (type === CameraType.front) setFlash(FlashMode.off)
        else setFlash(current => (current === FlashMode.off ? FlashMode.torch : FlashMode.off))
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type} flashMode={flash} focusDepth={1} zoom={0}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                        <Text style={styles.text}>Flip Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleFlash}>
                        <Text style={styles.text}>Flash</Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default Page