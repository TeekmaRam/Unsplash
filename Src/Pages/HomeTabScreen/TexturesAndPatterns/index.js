import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CommonTabscreen } from '../../../CommonComponent/CommonTabscreen'


export const TexturesAndPatterns = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <CommonTabscreen
                HeaderTitel={'Textures & Patterns'}
                titel={" Submit to Textures & Patterns"}
                Image={'Textures&Patterns'}
            />
        </View>
    );
};


const Styles = StyleSheet.create({

})
