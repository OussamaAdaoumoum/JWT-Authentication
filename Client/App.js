import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import Secret from "./Components/Secret/Secret";
import Login from './Components/Login/Login';

const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Secret" component={Secret} />
        <Stack.Screen name="Login" component={Login} />
       </Stack.Navigator>
    </NavigationContainer>

  );
}
