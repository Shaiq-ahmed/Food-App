import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { MapPinIcon } from 'react-native-heroicons/outline'
import {  StarIcon } from 'react-native-heroicons/solid'

const ResturantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long, 
  lat
}) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity className="bg-white mt-2 mr-3 shadow" onPress={()=>navigation.navigate('Resturant',{
      id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long, 
  lat
    })}>  
      
      <Image source={{
        url:imgUrl
      }}
      className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg">{title}</Text>
        <View className='flex-row items-center'>
        <StarIcon size={20} opacity="0.7" color="green"/>
          <Text className="text-gray-400 text-xs">
            <Text className="text-green-700"> {rating}</Text> . {genre}
          </Text>
        </View>
        <View className='flex-row items-center space-x-1'>
          <MapPinIcon size={20} opacity="0.7" color="gray"/>
            <Text className="text-gray-400 text-xs">Near by . {address}</Text> 
        </View>

      </View>
    </TouchableOpacity>
  )
}

export default ResturantCard