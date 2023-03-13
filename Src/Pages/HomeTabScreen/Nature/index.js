import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CommonTabscreen } from '../../../CommonComponent/CommonTabscreen'


export const Nature = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <CommonTabscreen
                HeaderTitel={'Nature'}
                titel={" Submit to Nature"}
                Image={'Nature'}
            />
        </View>
    );
};


const Styles = StyleSheet.create({

})
