import { createMaterialTopTabNavigator, MaterialTopTabBar } from '@react-navigation/material-top-tabs';
import { View, StyleSheet, ScrollView } from 'react-native'
import { Editorial } from '../Pages/HomeTabScreen/Editorial'
import { WallPaper } from '../Pages/HomeTabScreen/WallPaper'
import { ThreeDRender } from '../Pages/HomeTabScreen/3DRender'
import { Travel } from '../Pages/HomeTabScreen/Travel'
import { Nature } from '../Pages/HomeTabScreen/Nature'
import { Experimental } from '../Pages/HomeTabScreen/Experimental'
import { TexturesAndPatterns } from '../Pages/HomeTabScreen/TexturesAndPatterns'
import { HomeHeader } from '../Pages/HomeTabScreen/HomeHeader'


const Tab = createMaterialTopTabNavigator();



export const TopTabnavigation = () => {
    return (
        <View style={Styles.Header}>
            <HomeHeader />
            <Tab.Navigator
                screenOptions={{
                    tabBarScrollEnabled: true,
                }}>
                <Tab.Screen name='WallPaper' component={WallPaper} />
                <Tab.Screen name='ThreeDRender' component={ThreeDRender} />
                <Tab.Screen name='Travel' component={Travel} />
                <Tab.Screen name='Nature' component={Nature} />
                <Tab.Screen name='Experimental' component={Experimental} />
                <Tab.Screen name='TexturesAndPatterns' component={TexturesAndPatterns} />
            </Tab.Navigator>
        </View>
    )
}

const Styles = StyleSheet.create({
    Header: {
        flex: 1,
        backgroundColor: 'white',
    },
})



