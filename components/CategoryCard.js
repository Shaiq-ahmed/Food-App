import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity className="relative ml-2 ">
    <Image source={{url:imgUrl}} className="h-20 w-20 rounded" />
    <Text className="absolute bottom-2 left-3 text-white font-bold text-xs pr-6">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard 