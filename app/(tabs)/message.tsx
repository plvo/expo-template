import { Message, User } from "@/type";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Avatar, ScrollView, SizableText, Text, View, XStack, YStack } from "tamagui";

const ContactRow = ({ index, data, message }: { index: number, data: User, message: Message }) => {
    const date = new Date().toDateString()
    return (

        <XStack onPress={() => router.push(`/chat/${data.id}`)} backgroundColor={index % 2 == 0 ? "$blue2" : "white"} paddingVertical={"$3"} paddingHorizontal={"$5"}>
            <XStack gap={"$3"}>
                <Avatar circular size="$6">
                    <Avatar.Image
                        accessibilityLabel="Cam"
                        src={data.image}
                    />
                    <Avatar.Fallback backgroundColor="$blue10" />
                </Avatar>

                <YStack width={"$19"}>
                    <XStack justifyContent="space-between">
                        <SizableText fontWeight={"bold"}>{data.firstName} {data.lastName}</SizableText>
                        <SizableText fontSize={10}>{date}</SizableText>
                    </XStack>

                    <Text color={"$gray10"} fontSize={12} numberOfLines={2}>
                        {message?.text || "Image"}
                    </Text>
                </YStack>
            </XStack>

        </XStack>
    )
}

const Page = () => {
    const [Users, setUsers] = useState<Array<User | null>>([]);
    const [Messages, setMessages] = useState<Array<Message | null>>([]);

    useEffect(() => {
        (async () => {
            const response = await fetch('https://dummyjson.com/users', { method: "GET" })
            const data = await response.json()
            setUsers(data.users)

            const response2 = await fetch('https://raw.githubusercontent.com/rvvivek/Chat-JSON/master/message.json', { method: "GET" })
            const dataMessage = await response2.json()
            setMessages(dataMessage.messages)
        })()
    }, []);

    return (
        <View flex={1} paddingTop={"$10"}>
            {
                Users.length < 1 || Messages.length < 1
                    ? <Text>Loading...</Text>
                    : <ScrollView>
                        {Users.map((user, index) => <ContactRow index={index} data={user as User} message={Messages[index] as Message} />)}
                    </ScrollView>
            }
        </View>
    );
}

export default Page