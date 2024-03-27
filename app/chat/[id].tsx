import React, { useState, useCallback, useEffect } from 'react'

import { Stack, useLocalSearchParams } from "expo-router"
import { Avatar, Text, View, XStack } from "tamagui"
import { GiftedChat } from 'react-native-gifted-chat'
import { Message, User } from "@/type";

const Page = () => {
    const { id } = useLocalSearchParams()
    const [User, setUser] = useState<User | null>();
    const [messages, setMessages] = useState<any>([])

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://dummyjson.com/users/${id}`, { method: 'GET' })
            const data = await response.json()
            setUser(data)
        })()
    }, []);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages: any) =>
            GiftedChat.append(previousMessages, messages),
        )
    }, [])

    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: props => User
                        ? <XStack {...props} alignItems="center" gap={"$3"}>
                            <Avatar circular size="$3">
                                <Avatar.Image
                                    accessibilityLabel="Cam"
                                    src={User.image}
                                />
                                <Avatar.Fallback backgroundColor="$blue10" />
                            </Avatar>
                            <Text color={"white"}>{User.firstName} {User.lastName}</Text>
                        </XStack>
                        : <Text>-</Text>
                }}
            />

            <View flex={1}>
                <GiftedChat
                    messages={messages}
                    onSend={messages => onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                />

            </View>
        </>
    )
}

export default Page