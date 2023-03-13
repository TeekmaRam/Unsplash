import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CommonTabscreen } from '../../../CommonComponent/CommonTabscreen'


export const ThreeDRender = (props) => {



    return (
        <View style={{ flex: 1 }}>
            <CommonTabscreen
                HeaderTitel={'3D Renders'}
                titel={" Submit to 3D Render"}
                Image={'3DRender'}
            />
        </View>
    );
};


const Styles = StyleSheet.create({

})
