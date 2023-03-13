import React, { useEffect, useState, useRef } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export const SearchImagescreen = (props) => {
    let Images = props.route?.params?.item ?? {}
    const [likedProfiles, setLikedProfiles] = useState([])

    const _LikeButtonValidation = (prfile) => {
        if (likedProfiles.some((p) => p.id === prfile.id)) {
            setLikedProfiles((prevState) => prevState.filter((p) => p.id != prfile.id))
        } else {
            setLikedProfiles([...likedProfiles, prfile])
        }
    }

    const isProfileLiked = (id) => {
        return likedProfiles.some((prfile) => prfile.id === id)
    }

    return (
        <View style={Styles.Header}>
            <View style={Styles.PhotoView}>
                <Text style={Styles.PhotoText}>Photo</Text>
            </View>
            <View>
                <FlatList
                    data={Object.values(Images)}
                    numColumns={1}
                    renderItem={(({ item, index }) => (
                        <View>
                            <View style={Styles.UsernameView}>
                                <Image
                                    style={Styles.profileimage}
                                    source={{ uri: item?.user?.profile_image?.small ?? "" }} />
                                <Text style={Styles.UsernameText}>{item?.user?.username.toUpperCase() ?? ""}</Text>
                            </View>
                            <View style={Styles.Imagelistview}>
                                <Image
                                    style={Styles.ImageStyle}
                                    source={{ uri: item?.urls?.small ?? "" }} />
                            </View>
                            <View style={Styles.ImageBottomView}>
                                <View style={[Styles.LikeButton, { backgroundColor: isProfileLiked(item?.id) ? 'red' : 'white' }]}>
                                    <TouchableOpacity style={Styles.LikeButtonstyle} onPress={() => _LikeButtonValidation(item)}>
                                        {isProfileLiked(item?.id) ?
                                            <Icon name="hearto" size={20} color="black" backgroundColor='white' />
                                            :
                                            <Icon name="heart" size={20} color="black" />
                                        }

                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity style={Styles.PlusCollectionButton}>
                                        <Icon name="plus" size={20} color="black" backgroundColor='white' />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ))}
                />
            </View>
        </View>
    );
};


const Styles = StyleSheet.create({
    Header: {
        flex: 1,
        marginTop: 10
    },
    PhotoView: {
        alignSelf: 'center'
    },
    PhotoText: {
        color: 'black',
        fontWeight: '900',
        fontSize: 30
    },
    UsernameView: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 30,
        marginBottom: 10
    },
    profileimage: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    UsernameText: {
        color: 'black',
        top: 10,
        left: 10,
        fontWeight: 'bold',
        fontSize: 20
    },
    Imagelistview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ImageStyle: {
        width: "100%",
        height: 300,
    },
    ImageBottomView: {
        flexDirection: 'row'
    },
    LikeButton: {
        borderColor: 'gray',
        borderWidth: 1,
        height: 35,
        width: 40,
        marginTop: 10,
        marginLeft: 20,
        borderRadius: 5
    },
    LikeButtonstyle: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    PlusCollectionButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        height: 35,
        width: 40,
        marginTop: 10,
        marginLeft: 20,
        borderRadius: 5
    }
})
