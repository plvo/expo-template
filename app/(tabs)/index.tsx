import { MapComponent } from '@/component/Map';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useRef } from 'react';
import { Text } from 'react-native';
import { Button, Input, View, XStack } from 'tamagui';
import { Search } from '@tamagui/lucide-icons';

const Page = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const headerRef = useRef(null);
  const snapPoints = useMemo(() => ['3%', '50%', '100%'], []);

  const handleSheetChanges = useCallback((indexSnap: number) => {
    console.log('handleSheetChanges', indexSnap);
    if (indexSnap === 2) {

    }
  }, []);

  return (
    <View flex={1} >

      <View marginHorizontal={'$4'} marginVertical={'$8'}>
        <XStack alignItems='center' gap={'$2'}>
          <Input
            placeholder="Search on plvo template"
            onTextInput={() => bottomSheetRef.current?.snapToIndex(1)}
            flex={1} size={'$4'}
          />
          <Button icon={Search} size={'$4'}/>
        </XStack>

      </View>

      <MapComponent />

      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={snapPoints}
      >

        <BottomSheetView style={{}}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>

    </View >
  );
};

export default Page;
