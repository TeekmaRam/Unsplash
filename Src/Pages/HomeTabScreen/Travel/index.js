import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CommonTabscreen } from '../../../CommonComponent/CommonTabscreen'


export const Travel = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <CommonTabscreen
                HeaderTitel={'Travel'}
                titel={" Submit to Travel"}
                Image={'Travel'}
            />
        </View>
    );
};


const Styles = StyleSheet.create({

})
