import {FlatList} from 'react-native'
import React from 'react'
import AartiFlatListItem from './AartiFlatListItem';


const AartiFlatList = (data) => { 
    return(
        <FlatList
        data={data.dataSource}
        renderItem={AartiFlatListItem}
        keyExtractor= {(item, index) => index.toString()}
        />
    )
} 

export default AartiFlatList;