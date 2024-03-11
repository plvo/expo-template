import "../global.css"
import React from "react";
import { Stack } from 'expo-router/stack';

export default function AppLayout() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    );
}
