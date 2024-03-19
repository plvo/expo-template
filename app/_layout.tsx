import "../global.css"
import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from "expo-font";
import { Stack } from 'expo-router/stack';

import '@tamagui/core/reset.css'
import { TamaguiProvider } from 'tamagui'
import tamaguiConfig from '@/tamagui.config'
import Toast, { BaseToast, BaseToastProps, ErrorToast } from 'react-native-toast-message';
import { Text , View} from "react-native";

const toastConfig = {
    success: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
        <BaseToast
            {...props}
            style={{ borderLeftColor: 'blue' }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text2Style={{
                fontSize: 15
            }}
        />
    ),
    error: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
        <ErrorToast
            {...props}
            text1Style={{
                fontSize: 17
            }}
            text2Style={{
                fontSize: 15
            }}
        />
    ),
};

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
    const [appIsReady, setAppIsReady] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 200));
                // await Font.loadAsync(Entypo.font);
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
            console.log(appIsReady);
        })
    }, []);

    if(!appIsReady) return <View style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Text>!appIsReady</Text>
    </View>

    return (
        <TamaguiProvider config={tamaguiConfig}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
            <Toast config={toastConfig} />
        </TamaguiProvider>
    )
}