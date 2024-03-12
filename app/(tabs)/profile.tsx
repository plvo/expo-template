import React, { useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { useForm, Controller } from "react-hook-form"
import { Avatar, Button, Input, Label, Separator, XGroup, XStack, YGroup, YStack } from 'tamagui';
import Toast from 'react-native-toast-message';
import * as ImagePicker from 'expo-image-picker';

const Page = () => {
    const [image, setImage] = useState<string>("https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80");

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) setImage(result.assets[0].uri);
    };

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            city: "",
            birthday: ""
        },
    })
    const onSubmit = (data: any) => {
        console.log(data)
        Toast.show({
            type: 'success',
            text1: 'Success',
            text2: JSON.stringify(data)
        });
    }

    return (
        <YStack paddingHorizontal="$6" paddingVertical="$3" gap={'$8'} className='bg-slate-200'>
            <YStack alignContent='center' alignItems='center' gap={'$3'} onPress={pickImage}>
                <Avatar circular size="$10">
                    <Avatar.Image
                        accessibilityLabel="Cam"
                        src={image}
                    />
                    <Avatar.Fallback backgroundColor="$blue10" />
                </Avatar>
                <Text>Edit your profile picture</Text>
            </YStack>

            <Separator borderColor={"black"} />

            <YStack>
                <XGroup gap={20} borderWidth={'$1'}>
                    <Controller control={control}
                        name="firstName"
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <YGroup flex={1}>
                                <Label htmlFor='firstname'>Firstname</Label>
                                <Input
                                    placeholder="First name"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    id='firstname'
                                />
                                {errors.firstName && <Text className="text-red-500">This is required.</Text>}
                            </YGroup>
                        )}
                    />
                    <Controller control={control}
                        name="lastName"
                        rules={{ maxLength: 100 }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <YGroup flex={1}>
                                <Label htmlFor='lastname'>Lastname</Label>
                                <Input
                                    placeholder="Last name"
                                    width={"100%"}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    id='lastname'
                                />
                            </YGroup>
                        )}
                    />
                </XGroup>

                <YStack>
                    <Controller control={control}
                        name="city"
                        rules={{ maxLength: 100, }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <YGroup>
                                <Label htmlFor='city'>City</Label>
                                <Input
                                    placeholder="City"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    id='city'
                                />
                            </YGroup>
                        )}
                    />

                    <Controller control={control}
                        name="city"
                        rules={{ maxLength: 100, }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <YGroup>
                                <Label htmlFor='birthday'>Birthday</Label>
                                <Input

                                    placeholder="Birthday"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    id='birthday'
                                />
                            </YGroup>
                        )}
                    />
                </YStack>

            </YStack>


            <Button onPress={handleSubmit(onSubmit)} variant="outlined" bottom={'$0'}>
                Enregistrer
            </Button>
        </YStack>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 4,
        display: "flex",
        alignItems: "center",
        color: "white",
        borderRadius: 50,
        backgroundColor: "red",
    },

})

export default Page