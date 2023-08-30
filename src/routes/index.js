import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Login from '../pages/login';
import Signup from '../pages/register';
import Dashboard from '../pages/dashboard';
import Product from '../pages/product';
import ProductDetail from '../pages/product/detail';

const Stack = createNativeStackNavigator();

const Router = () => {

    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <StatusBar translucent backgroundColor="transparent" />
                <Stack.Navigator>
                    <Stack.Group
                        screenOptions={{
                            headerShown: false,
                        }}>
                        <Stack.Screen name="Welcome" component={Login} />
                        <Stack.Screen name="Register" component={Signup} />
                        <Stack.Screen name="Dashboard" component={Dashboard} />
                        <Stack.Screen name="Product" component={Product} />
                        <Stack.Screen name="Product Detail" component={ProductDetail} />
                    </Stack.Group>
                </Stack.Navigator>
            </SafeAreaProvider>
        </NavigationContainer>
    );
};

export default Router;
