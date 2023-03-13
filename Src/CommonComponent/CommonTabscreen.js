import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, ImageBackground, ScrollView, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ImageCatagory } from '../Services/Redux/TabImageList/Action'
import Icon from 'react-native-vector-icons/AntDesign';

export const CommonTabscreen = (props) => {
    const Imagedata = useSelector((state) => state?.Imagelistreducer)
    const dispatch = useDispatch()
    const [likedProfiles, setLikedProfiles] = useState([])
    const imagesData = Imagedata?.ImageData?.data ?? []

    useEffect(() => {
        if (props.Image == "Wallpaper") {
            const fetchData = async () => {
                await dispatch(ImageCatagory());
            };
            fetchData();
        }
    }, [])


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



    let Imagesource
    switch (props.Image) {
        case "Wallpaper":
            Imagesource = require("../Iamges/Wallpaper.jpg");
            break;
        case "3DRender":
            Imagesource = require("../Iamges/3DRender.jpg");
            break;
        case "Travel":
            Imagesource = require("../Iamges/Travel.jpg");
            break;
        case "Nature":
            Imagesource = require("../Iamges/Nature.jpg");
            break;
        case "Experimental":
            Imagesource = require("../Iamges/Experimental.jpg");
            break;
        case "Textures&Patterns":
            Imagesource = require("../Iamges/Textures.jpg");
            break;
    }
    return (
        <ScrollView>
            <ImageBackground
                style={Styles.BackgroundImage}
                source={Imagesource}>
                <View style={Styles.OnImageView}>
                    <Text style={Styles.WallpapersText}>{props?.HeaderTitel ?? ""}</Text>
                    <View style={Styles.ButtonView}>
                        <TouchableOpacity style={[Styles.Button]}>
                            <Text style={Styles.ButtonText}> {props?.titel ?? ""} </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            <View>
                {imagesData.length > 0 &&
                    <FlatList
                        data={imagesData}
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
                }
                {
                    imagesData.length <= 0 &&
                    <View style={{ flex: 1, marginTop: 30 }}>
                        <ActivityIndicator size="small" color="#0000ff" />
                    </View>
                }
            </View>
        </ScrollView>
    );
};


const Styles = StyleSheet.create({
    BackgroundImage: {
        flex: 1,
        height: 170,
        marginTop: 1,
        resizeMode: 'cover',
        marginLeft: 0,
        marginEnd: 0,
    },
    OnImageView: {
        marginHorizontal: 40,
        marginVertical: 50
    },
    WallpapersText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white'
    },
    ButtonView: {
        //flex: 1
    },
    Button: {
        backgroundColor: 'white',
        borderRadius: 5,
        height: 30,
        alignSelf: 'flex-start',
        justifyContent: 'center'
    },

    ButtonText: {
        color: 'black',
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
