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
         rating={5}
         genre="American"
         address="123 Main St"
         short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
         dishes={[]}
         long= {20}
         lat={30}
         />
         <ResturantCard
         id={123}
         imgUrl="https://images.unsplash.com/photo-1632845567654-254e968e6afe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8a2ZjfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
         title="KFC"
         rating={3.5}
         genre="American"
         address="123 Main St"
         short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
         dishes={[]}
         long= {20}
         lat={30}
         />
         <ResturantCard
         id={123}
         imgUrl="https://images.unsplash.com/photo-1619881589316-56c7f9e6b587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWNkb25hbGRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
         title="Mcdonalds"
         rating={4.5}
         genre="British"
         address="123 Main St"
         short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
         dishes={[]}
         long= {20}
         lat={30}
         />
         <ResturantCard
         id={123}
         imgUrl="https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
         title="Gin-soy"
         rating={4.2}
         genre="Chinese"
         address="123 Main St"
         short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
         dishes={['Soup',"Crap","Lobster","Pasta", "Spaghetti","Chowmein", "Pizza"]}
         long= {20}
         lat={30}
         />

        </ScrollView>
    </View>
  )
}

export default FeaturedRow