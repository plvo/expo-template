import "../global.css"
import React from "react";
import { Stack } from 'expo-router/stack';


import '@tamagui/core/reset.css'
import { TamaguiProvider } from 'tamagui'
import tamaguiConfig from '@/tamagui.config'


export default function AppLayout() {
    return <TamaguiProvider config={tamaguiConfig}>
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    </TamaguiProvider>
}