import { Feather } from "@expo/vector-icons";
import Foundation from '@expo/vector-icons/Foundation'
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const icon = {
    index: (props: any) => (
      <Foundation name="home" size={24} {...props}/>
    ),
    explore: (props: any) => (
      <Feather name="compass" size={24} {...props}/>
    ),
    profile: (props: any) => (
      <Octicons name="person" size={24} {...props}/>
    ),
    discounts: (props: any) => (
      <MaterialIcons name="discount" size={24} {...props}/>
    ),
  };
  