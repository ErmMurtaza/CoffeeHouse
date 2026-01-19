import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screen/HomeScreen";
import SplashScreen from "../screen/SplashScreen";
import LoginScreen from "../screen/LoginScreen";
import Sign_up from "../screen/Sign_up";
import DescriptionScreen from "../screen/DescriptionScreen";
import CustomerOrderScreen from "../screen/CustomerOrderScreen";
import CartScreen from "../screen/CartScreen";
import CheckoutScreen from "../screen/CheckoutScreen";

const Stack = createStackNavigator();

export default StackNavigatoion = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sign_up"
        component={Sign_up}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DescriptionScreen"
        component={DescriptionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="CheckoutScreen"
        component={CheckoutScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CustomerOrderScreen"
        component={CustomerOrderScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
