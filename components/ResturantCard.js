import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

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
    <TouchableOpacity>    
      <Image source={{
        url:imgUrl
      }}
      className="h-36 w-64 rounded-sm"
      />
      <View>
        <Text>{title}</Text>
        <View>
          <Text>
            <Text></Text>
          </Text>
        </View>
        <View>
          
            <Text></Text>
        </View>

      </View>
    </TouchableOpacity>
  )
}

export default ResturantCard