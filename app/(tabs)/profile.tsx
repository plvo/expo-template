import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useForm, Controller } from "react-hook-form"
import { Button } from 'tamagui';

const Page = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
        },
    })
    const onSubmit = (data: any) => console.log(data)

    return (
        <View className='flex justify-center h-screen bg-slate-200 px-8'>
            <View className='flex flex-row justify-between border'>
                <Controller control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="First name"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={styles.textInput}
                        />
                    )}
                    name="firstName"
                />
                {errors.firstName && <Text>This is required.</Text>}

                <Controller control={control}
                    rules={{
                        maxLength: 100,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Last name"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={styles.textInput}
                        />
                    )}
                    name="lastName"
                />
            </View>

            <Button>Hello world</Button>

            <Pressable onPress={handleSubmit(onSubmit)} >
                <Text>
                    Enregistrer
                </Text>
            </Pressable>
        </View>
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
    textInput: {
        padding:4,
        shadowColor: "black",
        borderColor: "black",
        borderWidth: 1
    }
})

export default Page