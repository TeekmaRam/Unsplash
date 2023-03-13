import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';


const DrawerContent = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate('AboutScreen');
                }}>
                <Text style={styles.text}>About</Text>
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate('HistoryScreen');
                }}>
                <Text style={styles.text}>History</Text>
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate('PrivecyPolicy');
                }}>
                <Text style={styles.text}>Privecy Policy</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
        paddingBottom: 40,
    },
    line: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(0,0,0,0.2)',
        marginVertical: 20,
    },
    text: {
        fontSize: 15,
        color: 'black',
        width: '80%',
        paddingLeft: 8,
    },

});

export default DrawerContent
