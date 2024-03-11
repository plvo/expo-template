import { Button, Text, View } from 'react-native';

const Page = () => {
    return (
        <View className='flex justify-center h-screen bg-slate-200'>
            <Text>
                Profile
            </Text>

            <Button title='Save' color={"red"} />
        </View>
    );
}

export default Page