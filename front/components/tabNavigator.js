import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Main from "./main";
import DietaForm from "./form"
import DietaGerada from "./dieta"
import Logout from "./logout"

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Menu") iconName = "home";
          else if (route.name === "Formulário") iconName = "document-text";
          else if (route.name === "Dieta") iconName = "nutrition";
          else if (route.name === "Login") iconName = "log-out";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#4CAF50",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "#fff", paddingBottom: 5 },
      })}
    >
      <Tab.Screen name="Menu" component={Main} />
      <Tab.Screen name="Formulário" component={DietaForm} />
      <Tab.Screen name="Dieta" component={DietaGerada} />
      <Tab.Screen name="Logout" component={Logout} />
    </Tab.Navigator>
  );
}
