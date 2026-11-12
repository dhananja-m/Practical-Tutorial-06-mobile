import * as Notifications from 'expo-notifications';
import {Tabs} from 'expo-router';
import {Text} from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#e91e63' }}>
      <Tabs.Screen
        name="index"
        options={{title: 'Reminder',tabBarIcon: () => <Text>💧</Text>}}
        />
        </Tabs>
  );
}
