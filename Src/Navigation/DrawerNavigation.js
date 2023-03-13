import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from '../Pages/LoginSignup/Login'
import { HomeNav } from './HomeNav'
import DrawerContent from './DrawerContent'


const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{ headerShown: false, drawerPosition: "right" }}
                drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="HomeNav" component={HomeNav} />
                <Drawer.Screen name="Login" component={Login} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default DrawerNavigator