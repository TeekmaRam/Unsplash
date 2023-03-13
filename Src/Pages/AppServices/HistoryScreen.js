import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const HistoryScreen = (props) => {
    return (
        <View style={Styles.Header}>
            <Text style={[Styles.TextStyle, { textAlign: 'center', fontSize: 30 }]}>
                Our story so far
            </Text>
            <Text style={Styles.TextStyle}> Founded in 2013 as a humble Tumblr blog, Unsplash has grown into an industry-leading visual community. It’s become a source of inspiration for everyone from award-winning writers like Deepak Chopra to industry-titans like Apple, and millions of creators worldwide.</Text>
        </View>
    );
};


const Styles = StyleSheet.create({
    Header: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 20,
        justifyContent: 'center'
    },
    TextStyle: {
        color: 'black',
        fontWeight: 'bold'
    }
})
