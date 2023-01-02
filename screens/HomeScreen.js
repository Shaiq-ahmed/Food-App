import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {ChevronDownIcon, UserIcon} from 'react-native-heroicons/outline'
 

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {

        navigation.setOptions({
            headerShown:false,
        })    
    }, [])
  return (  
    <SafeAreaView className='bg-white pt-5'>
      <Text className="text-red-600">
    {/*header */}
    <View className="flex-row pb-3 items-center mx-4 space-x-2">
       <Image
        source={{url:'https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png'}}
        className="h-7 w-7 bg-gray-300 p-4 rounded-full ml-2"
        />
        <View className="flex-1">
        <Text className="font-bold text-gray-400 text-xs"> Deliver Now</Text>
        <Text className = 'font-bold text-xl'>Current Location <ChevronDownIcon size={20} color="crimson"/> </Text>
        </View>
        <UserIcon size={25} color="crimson" className="mr-1"/>
    </View>
    </Text>
    </SafeAreaView>
  )
}

export default HomeScreen