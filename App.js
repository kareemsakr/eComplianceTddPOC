import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ListScreen from "./src/screens/ListScreen";
import DetailScreen from "./src/screens/DetailScreen";

const stackNavigator = createStackNavigator({
  Main: {
    screen: ListScreen,
    navigationOptions: {
      title: "API Data"
    }
  },
  Detail: DetailScreen
});

export default createAppContainer(stackNavigator);
