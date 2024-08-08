import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; // Fixed import statement

import TelaJavaScript from "./componentes/TelaJavaScript";
import TelaReact from "./componentes/TelaReact";
import TelaNode from "./componentes/TelaNode";

const Stack = createStackNavigator(); // Use `Stack` instead of `MenuNav` for clarity

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="JavaScript" component={TelaJavaScript} />
        <Stack.Screen name="Node" component={TelaNode} />
        <Stack.Screen name="React" component={TelaReact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
