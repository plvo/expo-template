import { Text, View } from "tamagui"
import { StyleSheet, useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // Automatically switches bar style based on theme.

const Page = () => {
    const colorScheme = useColorScheme();

    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    return (
        <View style={[styles.container, themeContainerStyle]} onPress={() => console.log(colorScheme)}>
            <Text style={[styles.text, themeTextStyle]}>Color scheme: {colorScheme}</Text>
            <StatusBar />
        </View>
    );
}

export default Page


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
    },
    lightContainer: {
        backgroundColor: '#d0d0c0',
    },
    darkContainer: {
        backgroundColor: '#242c40',
    },
    lightThemeText: {
        color: '#242c40',
    },
    darkThemeText: {
        color: '#d0d0c0',
    },
});

