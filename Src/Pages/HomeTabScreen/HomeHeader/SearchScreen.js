import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export const SearchScreen = (props) => {
    return (
        <View style={Styles.Header}>
            <Image
                style={Styles.ImageLogo}
                source={require('../../../Iamges/logo-black.png')}
            />
            <TextInput
                style={Styles.TextInput}
                placeholder='Search'
                value={props.search}
                onChangeText={(text) => (
                    props.setSearch(text),
                    props._SerchList()
                )}
            />
            <View style={{}}>
                <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                    <Icon name="bars" size={30} color="black" />
                </TouchableOpacity>
            </View>
            {props.search.length > 0 &&
                <View style={Styles.FlatListContainer}>
                    <FlatList
                        data={props.imageserchlist}
                        renderItem={(({ item }) => (
                            <View style={Styles.DropdownListView}>
                                <TouchableOpacity onPress={() => props.navigation.navigate('SearchImagescreen', {
                                    item: props.imageserchlist
                                })}>
                                    <Text style={Styles.DropdownListText}>{item?.user?.username ?? ""}</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    />
                </View>
            }
        </View>
    );
};


const Styles = StyleSheet.create({
    Header: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 30
    },
    ImageLogo: {
        height: 30,
        width: 30
    },
    TextInput: {
        flex: 1,
        backgroundColor: 'gray',
        height: 35,
        marginHorizontal: 20,
        borderRadius: 20

    },
    FlatListContainer: {
        flex: 1,
        marginTop: 30,
        position: 'absolute',
        backgroundColor: 'white',
        zIndex: 1,
        marginLeft: 50,
        height: 150,
        width: '70%',
        borderColor: 'gray',
        borderWidth: 1
    },
    DropdownListView: {
        marginHorizontal: 20,
        margin: 4
    },
    DropdownListText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    }

})
