import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon, UserIcon} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'

 

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {

        navigation.setOptions({
            headerShown:false,
        })    
    }, [])
  return (  
    <SafeAreaView className='bg-white pt-5 mb-20 '>
    {/*header */}
    <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
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

        {/* SEARCH */}
        <View className="flex-row space-x-2 pb-2 mx-4 items-center ">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
            <MagnifyingGlassIcon size={20} color="crimson" className="items-center"/>
            <TextInput placeholder='Enter Keywords to Search' keyboardType='default'/>
          </View>
          <AdjustmentsVerticalIcon color="crimson" />
        </View>

        {/* body */}
        <ScrollView className="bg-gray-100 ">
            {/* categories */}
              <Categories/>

            {/* Featured rows */}
            <FeaturedRow id="123" title="featured" description="Paid placement for our partners" featuredCategory="featured"/>
            <FeaturedRow id="1234" title="Tasty Discount" description="Juicy dicounts for everyones's " featuredCategory="featured"/>
            <FeaturedRow id="12345" title="Offers near you!" description="Find offer at local Resturants near you" featuredCategory="featured"/>
        </ScrollView>
    
    </SafeAreaView>
  )
}

export default HomeScreen