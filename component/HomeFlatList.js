import {FlatList} from 'react-native'
import React from 'react'
import HomeFlatListItem from './HomeFlatListItem';
import styles from './styles';


const HomeFlatList = (data) => { 
    return(
        <FlatList
        contentContainerStyle={styles.homeFlatListStyle}
        data={data.dataSource}
        numColumns={2}
        horizontal={false}
        renderItem={HomeFlatListItem}
        keyExtractor= {(item, index) => index.toString()}
        />
    )
} 

export default HomeFlatList;