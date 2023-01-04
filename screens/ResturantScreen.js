import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArrowLeftCircleIcon, ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon} from 'react-native-heroicons/outline'
import { StarIcon } from 'react-native-heroicons/solid'
import DishRow from '../components/DishRow'

const ResturantScreen = () => {
  const navigation = useNavigation()
  const {params:{id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long, 
    lat}} = useRoute()

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown:false
      })
      }, [])
  return (
    <ScrollView>
    <View className="relative">
    <Image source={{url:imgUrl}}
       className="w-full h-56 bg-gray-300 "/>
       <TouchableOpacity className="absolute top-14 left-4 p-2 bg-white rounded-full" onPress={()=>navigation.goBack()}>
       <ArrowLeftIcon color="crimson" /> 

       </TouchableOpacity>
    </View>
      
    <View className="px-3 pb-4 pt-2 bg-white">
      <Text className="font-bold text-2xl ">{title}</Text>
      <View className="flex-row items-center space-x-1">
      <StarIcon color="green" opacity={9.5}/>
      <Text className="text-gray-400 text-xs">
        <Text className="text-green-700"> {rating}</Text> . {genre}
      </Text>
    
    
      <MapPinIcon  opacity="0.7" color="gray"/>
        <Text className="text-gray-400 text-xs">Near by . {address}</Text> 
    </View>
    <Text className="text-gray-500 pt-2">{short_description}</Text>
      </View>
    
        <TouchableOpacity className="flex-row  items-center space-x-2 p-4 bg-white border-y border-gray-400" >
          <QuestionMarkCircleIcon color="gray"/>
          <Text className="text-gray-600 flex-1 text-md font-bold pl-2">Have a food allergy?</Text>
          <ChevronRightIcon color="crimson"/>
        </TouchableOpacity>

        <View className="mt-2">
         <Text className="text-lg font-bold pl-5">Menu</Text>
         {/*Dishes */}
         {dishes.map((dish)=>{
          return
           <DishRow 
            key={dish._id}
            id={dish._id}
            name={dish.name}
            imgUrl={dish.imgUrl}
            description={dish.short_description}
            price={dish.price}
            image={dish.image}
           />
         })}
        </View>
  
     
    </ScrollView>
    
  )
}

export default ResturantScreen