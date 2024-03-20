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
                name="about"
                options={{
                    title: 'About',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="question" color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Your profile',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
                    headerShown: true,
                    headerRight: () => <FontAwesome onPress={() => router.push('/settingsPage')} style={{ paddingRight: 18 }} size={28} name="gears" color={"orange"} />,
                }}
            />
        </Tabs>
    );
}
