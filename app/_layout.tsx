import "../global.css"
import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from "expo-font";
import { Stack } from 'expo-router/stack';

import '@tamagui/core/reset.css'
import { TamaguiProvider } from 'tamagui'
import tamaguiConfig from '@/tamagui.config'
import Toast, { BaseToast, BaseToastProps, ErrorToast } from 'react-native-toast-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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

// SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
    // const [fontsLoaded, fontError] = Font.useFonts({
    //     'Grotesk': require('@/assets/fonts/ArchivGrotesk.otf'),
    // });

    // console.log(fontsLoaded, fontError);

    // const onLayoutRootView = useCallback(async () => {
    //     if (fontsLoaded || fontError) {
    //         await SplashScreen.hideAsync();
    //     }
    // }, [fontsLoaded, fontError]);

    // if (!fontsLoaded && !fontError) {
    //     return null;
    // }

    return (
        <TamaguiProvider config={tamaguiConfig}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Stack>
                    <Stack.Screen
                        name="(tabs)"
                        options={{ headerShown: false }}
                    />
                </Stack>
            </GestureHandlerRootView>
            <Toast config={toastConfig} />
        </TamaguiProvider>
    )
}