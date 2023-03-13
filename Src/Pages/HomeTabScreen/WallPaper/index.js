import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { CommonTabscreen } from '../../../CommonComponent/CommonTabscreen'


export const WallPaper = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <CommonTabscreen
                HeaderTitel={'Wallpapers'}
                titel={" Submit to Wallpapers"}
                Image={'Wallpaper'}
            />
        </View>
    );
};


const Styles = StyleSheet.create({
})
