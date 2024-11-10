// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from "@expo/vector-icons/Ionicons";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";
import Foundation from "@expo/vector-icons/Foundation";

export function TabBarIcon({
  style,
  ...rest
}: IconProps<ComponentProps<typeof Ionicons>["name"]>) {
  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}

export function TabBarFoundationIcon({
  style,
  ...rest
}: IconProps<ComponentProps<typeof Foundation>["name"]>) {
  return (
    <Foundation size={28} style={[{ marginBottom: -3 }, style]} {...rest} />
  );
}
