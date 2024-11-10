import { View,  StyleSheet } from "react-native";
//import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "../../constants/Colors";
import TabBarButton from "./TabBarButton";



export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  //const { colors } = useTheme();
  //const { buildHref } = useLinkBuilder();
  const colorScheme = useColorScheme();
  const tabBarBackground = Colors[colorScheme ?? 'dark'].backgroundTabs;
  

  return (
    <View style={createStyles(tabBarBackground).tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const colorInUse = isFocused ? Colors.activeColor : Colors[colorScheme ?? "light"].text;

        return (
          <TabBarButton
          key={route.key}
          onPress={onPress}
          onLongPress={onLongPress}
          isFocused={isFocused}
          routeName={route.name}
          colorInUse={colorInUse}
          label={label}
          />
          // <PlatformPressable
          //   key={route.key}
          //   //href={buildHref(route.name, route.params)}
          //   accessibilityState={isFocused ? { selected: true } : {}}
          //   accessibilityLabel={options.tabBarAccessibilityLabel}
          //   testID={options.tabBarButtonTestID}
          //   onPress={onPress}
          //   onLongPress={onLongPress}
          //   style={styles.tabbarItem}
          // >
          //   {icon[route.name]({ color: colorInUse})}
          //   <Text
          //     style={{
          //       color: colorInUse,
          //     }}
          //   >
          //     {label}
          //   </Text>
          // </PlatformPressable>
        );
      })}
    </View>
  );
}

function createStyles(backgroundColor : string)
{
  return StyleSheet.create({
    tabbar: {
      position: "absolute",
      bottom: 50,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginHorizontal: 30,
      paddingVertical: 15,
      borderRadius: 35,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 10 },
      shadowRadius: 10,
      shadowOpacity: 0.1,
      backgroundColor: backgroundColor,
    },
  })
}
