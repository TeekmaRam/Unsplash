import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CommonTabscreen } from '../../../CommonComponent/CommonTabscreen'


export const Experimental = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <CommonTabscreen
                HeaderTitel={'Experimental'}
                titel={" Submit to Experimental"}
                Image={'Experimental'}
            />
        </View>
    );
};


const Styles = StyleSheet.create({

})
