import {View, StatusBar } from 'react-native';
import Favourits from './screens/Favourits/favourits';
import Search from './screens/Search/Search';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Cart from './screens/Cart/cart';
import HomeStack from './homeStack';
import User from './screens/User/user';
import { useSelector } from 'react-redux';
import { Badge } from 'react-native-paper';
import { styles } from './styles';

const Tab = createMaterialBottomTabNavigator();
export default function Tabs() {
  const cartItems = useSelector((state) => state.cartProducts.cartProducts);
  const favItems = useSelector((state) => state.favourits.favourits);

  return (
    <>
      <StatusBar style='auto' />

      <Tab.Navigator
        activeColor='black'
        inactiveColor='#DDD'
        labeled={false}
        barStyle={{ backgroundColor: '#fff' }}
      >
        <Tab.Screen
          name='HomeStack'
          component={HomeStack}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='home' color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name='Search'
          component={Search}
          options={{
            tabBarIcon: ({ color }) => (

                <MaterialIcons name='search' color={color} size={26} />

            ),
          }}
        />

        <Tab.Screen
          name='Cart'
          component={Cart}
          options={{
            tabBarIcon: ({ color }) => (
              <View>
                <MaterialIcons name='shopping-basket' color={color} size={26} />
                <Badge visible={cartItems.length>0} style={styles.badge} >
                  {cartItems.length}
                </Badge>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name='Favourits'
          component={Favourits}
          options={{
            tabBarIcon: ({ color }) => (
              <View>
              <MaterialCommunityIcons name='heart' color={color} size={26} />
                <Badge visible={favItems.length>0} style={styles.badge} >
                  {favItems.length}
                </Badge>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name='User'
          component={User}
          options={{
            // tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Feather name='user' color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

