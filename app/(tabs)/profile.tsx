import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form"
import { Avatar, Button, Input, Label, Separator, Text, XGroup, YGroup, YStack } from 'tamagui';
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

        if (!result.canceled) setImage(result.assets[0].uri);
    };

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstname: "",
            lastname: "",
            city: "",
            birthday: ""
        },
    })
    const onSubmit = (data: any) => {
        Toast.show({
            type: 'success',
            text1: 'Success',
            text2: JSON.stringify(data)
        });
    }

    return (
        <YStack height={"100%"} paddingHorizontal="$6" paddingVertical="$3" gap={'$4'} backgroundColor={'$gray10'}>
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
                <XGroup gap={20}>
                    <Controller control={control}
                        name="firstname"
                        rules={{ required: true, }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <YGroup flex={1}>
                                <Label htmlFor='firstname' color={errors.firstname ? '$red10' : 'black'}>
                                    {errors.firstname ? "Firstname is required" : "Firstname"}
                                </Label>
                                <Input
                                    placeholder="First name"
                                    onBlur={onBlur} onChangeText={onChange} value={value}
                                    borderColor={errors.firstname && '$red10'}
                                    borderWidth={errors.firstname && '$1'}
                                />
                            </YGroup>
                        )}
                    />
                    <Controller control={control}
                        name="lastname"
                        rules={{ maxLength: 100, }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <YGroup flex={1}>
                                <Label htmlFor='lastname'>Lastname</Label>
                                <Input
                                    placeholder="Last name"
                                    onBlur={onBlur} onChangeText={onChange} value={value}
                                    width={"100%"}
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
                                    onBlur={onBlur} onChangeText={onChange} value={value}
                                />
                            </YGroup>
                        )}
                    />

                    <Controller control={control}
                        name="birthday"
                        rules={{ maxLength: 100, }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <YGroup>
                                <Label htmlFor='birthday'>Birthday</Label>
                                <Input
                                    placeholder="Birthday"
                                    onBlur={onBlur} onChangeText={onChange} value={value}
                                />
                            </YGroup>
                        )}
                    />
                </YStack>
            </YStack>

            <Button onPress={handleSubmit(onSubmit)} backgroundColor={'$green8'}>
                Save
            </Button>
        </YStack>
    );
}

export default Page