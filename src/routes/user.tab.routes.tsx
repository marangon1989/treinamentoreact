// import React from 'react';
// import { Platform } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useTheme } from 'styled-components/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { Home } from '@screens/Home';
// import { Speaker } from '@screens/Speaker';


// const { Navigator, Screen } = createBottomTabNavigator();

// export function UserTabRoutes() {

//   const { COLORS } = useTheme();

//   return(
//     <Navigator
//       screenOptions={{
//         tabBarActiveTintColor: COLORS.SECONDARY_900,
//         tabBarInactiveTintColor: COLORS.SECONDARY_400,
//         headerShown: false,
//         tabBarLabelPosition: 'below-icon',
//         tabBarStyle: {
//           height: 60,
//           paddingVertical: Platform.OS === 'ios' ? 20 : 0
//         }
//       }}
//     >
//     <Screen
//       name="home"
//       component={Home}
//       options={{
//         tabBarIcon: (({ size, color }) => 
//           <MaterialIcons
//             name="home"
//             size={size}
//             color={color}
//           />
//         )
//       }}
//     />
//     <Screen
//       name="speaker"
//       component={Speaker}
//       options={{
//         tabBarIcon: (({ size, color }) => 
//           <MaterialIcons
//             name="people"
//             size={size}
//             color={color}
//           />
//         )
//       }}
//     />
//     </Navigator>
//   );
// }


import React from 'react';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '@screens/Home';
import { Speaker } from '@screens/Speaker';
import { BottomMenu } from '@components/BottomMenu';

const { Navigator, Screen } = createBottomTabNavigator();

export function UserTabRoutes() {

  const { COLORS } = useTheme();

  return(
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.SECONDARY_900,
        tabBarInactiveTintColor: COLORS.SECONDARY_400,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0
        }
      }}
    >
      <Screen 
        name="home" 
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomMenu 
              title='Cardápio' 
              color={color} 
            />
          )
        }}
      />
      {/* <Screen 
        name="speaker" 
        component={Speaker} 
        options={{
          tabBarIcon: ({ color }) => (
            <BottomMenu 
              title='Speaker'
              color={color}
            />
          )
        }}
      /> */}
    </Navigator>
  );
}