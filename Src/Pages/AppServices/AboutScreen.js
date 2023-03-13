import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const AboutScreen = (props) => {
    return (
        <View style={Styles.Header}>
            <Text style={[Styles.TextStyle, { textAlign: 'center', fontSize: 30 }]}>
                Photos for everyone
            </Text>
            <Text style={Styles.TextStyle}> Over 3 million free high-resolution images brought to you by the world’s most generous community of photographers.</Text>
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
