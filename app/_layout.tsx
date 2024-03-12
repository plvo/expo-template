import "../global.css"
import React from "react";
import { Stack } from 'expo-router/stack';

import '@tamagui/core/reset.css'
import { TamaguiProvider } from 'tamagui'
import tamaguiConfig from '@/tamagui.config'
import Toast, { BaseToast, BaseToastProps, ErrorToast, ToastConfig } from 'react-native-toast-message';

const toastConfig = {
    success: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
        <BaseToast
            {...props}
            style={{ borderLeftColor: 'blue' }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text2Style={{
                fontSize:15
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

export default function AppLayout() {
    return <TamaguiProvider config={tamaguiConfig}>
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        <Toast config={toastConfig} />
    </TamaguiProvider>
}