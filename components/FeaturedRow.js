import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ResturantCard from './ResturantCard'

const FeaturedRow = ({title, description , featuredCategory}) => {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4 ">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={20} color="crimson"/>
        </View>
        
        <Text className="text-xs text-gray-500 px-4">{description}</Text>
        <ScrollView
         horizontal
         contentContainerStyle={
            {
                paddingHorizontal: 10,
    
         }}  
         showsHorizontalScrollIndicator={false} >
         {/* Resturant Card */}
         <ResturantCard
         id={123}
         imgUrl="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
         title="Nandos"
         rating={4.5}
         genre="American"
         address="123 Main St"
         short_description="This is a test description"
         dishes={[]}
         long= {20}
         lat={30}
         />

        </ScrollView>
    </View>
  )
}

export default FeaturedRow