import * as Notifications from 'expo-notifications';
import { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function ReminderTab() {
  const [isReminding, setIsReminding] = useState(false);
  const [message, setMessage] = useState('Time to drink a glass of water!');
  const [intervalMinutes, setIntervalMinutes] = useState(1);

  useEffect(() => {
    async function requestPermission() {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Permission required',
          'We need notifications to remind you to drink water'
        );
      }
    }
    requestPermission();
  }, []);

  async function scheduleReminder() {
    await Notifications.requestPermissionsAsync();
    await Notifications.cancelAllScheduledNotificationsAsync();
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "💧 Hydration Alert",
        body: message,
        sound: true,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: intervalMinutes * 60,
        repeats: true
      },
    });
    setIsReminding(true);
    Alert.alert("Set!", `Reminding you every ${intervalMinutes} minutes.`);
  }

  async function stopReminder() {
    await Notifications.cancelAllScheduledNotificationsAsync();
    setIsReminding(false);
    Alert.alert("Stopped", "Reminders cancelled.");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🥤</Text>
      <Text style={styles.label}>Set Interval (minutes)</Text>
      <TextInput
        style={styles.input}
        value={intervalMinutes.toString()}
        onChangeText={(text) => setIntervalMinutes(parseInt(text) || 1)}
        keyboardType='numeric'
      />
      <Text style={styles.status}>
        Status: {isReminding ? "Active" : "Inactive"}
      </Text>

      {/* Added buttons to start and stop reminders */}
      <View style={styles.buttonContainer}>
        <Button title="Start Reminder" onPress={scheduleReminder} />
        <View style={{ height: 10 }} />
        <Button title="Stop Reminder" color="red" onPress={stopReminder} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  emoji: {
    fontSize: 50,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '80%',
    borderRadius: 8,
    marginBottom: 15,
    textAlign: 'center',
  },
  status: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
  },
});