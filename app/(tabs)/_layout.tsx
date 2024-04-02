import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router, Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                // tabBarShowLabel:false,
                tabBarActiveTintColor: "red",
                tabBarStyle: {
                    backgroundColor: "black",
                    // borderTopRightRadius: 15,
                    // borderTopLeftRadius: 15,
                    // padding: 5,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="camera"
                options={{
                    title: 'Camera',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="camera" color={color} />,
                }}
            />
            <Tabs.Screen
                name="message"
                options={{
                    title: 'Message',
                    headerShown: true,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="inbox" color={color} />,
                    headerRight: () => <FontAwesome style={{ paddingRight: 18 }} size={22} name="search" />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Your profile',
                    headerShown: true,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
                    headerRight: () => <FontAwesome onPress={() => router.push('/settings')} style={{ paddingRight: 18 }} size={22} name="gears" />,
                }}
            />
        </Tabs>
    );
}
