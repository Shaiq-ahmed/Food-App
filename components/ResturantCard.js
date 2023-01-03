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
  return (
    <TouchableOpacity className="bg-white">    
      <Image source={{
        url:imgUrl
      }}
      className="h-36 w-64 rounded-sm"
      />
      <View>
        <Text className="font-bold text-lg">{title}</Text>
        <View className='flex-row items-center'>
        <StarIcon size={20} opacity="0.7" color="green"/>
          <Text>
            <Text>{rating}</Text> . {genre}
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