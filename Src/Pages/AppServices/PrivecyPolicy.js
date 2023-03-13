import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const PrivecyPolicy = (props) => {
    return (
        <View style={Styles.Header}>
            <Text style={[Styles.TextStyle, { textAlign: 'center', fontSize: 30 }]}>
                Privacy Policy
            </Text>
            <Text style={Styles.TextStyle}> Unsplash Inc. and its affiliates and subsidiaries (“Unsplash”, “we” or “us”) are committed to protecting your privacy and safeguarding your personal information. The purpose of this privacy policy (the “Privacy Policy”) is to inform you about our privacy practices, including how we collect, use and disclose your personal information.

                This Privacy Policy applies to our website, mobile applications and related services (collectively, the “Unsplash Services”). By visiting, accessing, or using the Unsplash Services, you consent to the policies and practices of this Privacy Policy so please read them carefully. If any policies or practices of this Privacy Policy are unacceptable to you, please do not visit, access, or use the Unsplash Services.</Text>
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
