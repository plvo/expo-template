import { Link, Redirect } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Page() {
  return (
    <View
      className='flex w-screen h-screen bg-red-500 justify-center items-center'>
      <Text className='font-bold text-white text-7xl'>
        hello
      </Text>

      <Link href={"/camera"}>
        About
      </Link>
      <Link href={"/camera"}>
        Camera
      </Link>
    </View>
  );
}
