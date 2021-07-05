// -------------------- react -------------------
import * as React from 'react';

// --------------- react Navigation  ---------------------
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// ---------------- react vector iocn --------------------
import Ionicons from 'react-native-vector-icons/Ionicons';

// ---------------- react navigation ---------------------
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base';

// ---------------------- component ------------------------------
import Home from './src/screens/Home';
import WelcomeZeroCalculator from './src/screens/WelcomeZeroCalculator';
import WelcomeLunoTodoList from './src/screens/WelcomeLunoTodoList';
import ZeroCalculator from './src/screens/ZeroCalculator';
import LunoTodoList from './src/screens/LunoTodoList';

// ---------------- functions react navigation --------------------
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// ---------------- function react tab navigation -------------------
function Homes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Zero Calculator') {
            iconName = focused
              ? 'calculator'
              : 'calculator-outline';
          } else if (route.name === 'Luno To-do List') {
            iconName = focused ? 'list-circle' : 'list-circle-outline';
          } else if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#FFB846',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Zero Calculator" component={WelcomeZeroCalculator} />
      <Tab.Screen name="Luno To-do List" component={WelcomeLunoTodoList} />
    </Tab.Navigator>
  );
}

// ------------- app ---------------
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Homes'
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Homes" component={Homes} />
          <Stack.Screen name="ZeroCalculator" component={ZeroCalculator} />
          <Stack.Screen name="LunoTodoList" component={LunoTodoList} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}