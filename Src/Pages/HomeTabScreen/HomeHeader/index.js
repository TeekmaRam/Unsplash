import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { SearchScreen } from './SearchScreen'

export const HomeHeader = (props) => {
    const navigation = useNavigation();
    const Imagedata = useSelector((state) => state?.Imagelistreducer)
    const imagesData = Imagedata?.ImageData?.data ?? []
    const [search, setSearch] = useState('')
    const [imageserchlist, setImageserchlist] = useState([])

    useEffect(() => {
    }, [])

    const _SerchList = () => {
        let filterdata = imagesData.filter((item) => {
            const username = item?.user?.username
            if (username) {
                return username.toUpperCase().includes(search.toUpperCase())
            }
            return false
        })
        setImageserchlist(filterdata)
    }

    return (
        <View style={Styles.Header}>
            <SearchScreen
                navigation={navigation}
                search={search}
                setSearch={setSearch}
                _SerchList={_SerchList}
                imageserchlist={imageserchlist}
            />
        </View>
    );
};


const Styles = StyleSheet.create({
    Header: {
        // marginHorizontal: 10,
        // marginVertical: 20
    },
})
