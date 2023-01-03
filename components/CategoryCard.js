import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity className="relative ml-2">
    <Image source={{url:imgUrl}} className="h-20 w-20 rounded" />
    <Text className="absolute bottom-2 left-4 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard 