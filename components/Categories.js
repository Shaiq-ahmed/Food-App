import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      comtentContainerStyles={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
    {/*Categories Card */}
    <CategoryCard imgUrl ="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" title="BBQ"/>
    <CategoryCard imgUrl ="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXBwJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" title="Cakes"/>
    <CategoryCard imgUrl ="https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" title="Burgers"/>
    <CategoryCard imgUrl ="https://images.unsplash.com/photo-1481391032119-d89fee407e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFwcCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" title="Ice-Creams"/>
    <CategoryCard imgUrl ="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXBwJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" title="Pan-Cakes"/>

 
    </ScrollView>
   
  )
}

export default Categories