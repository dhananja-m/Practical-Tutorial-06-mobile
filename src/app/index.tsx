import * as Notifications from 'expo-notifications';
import {useEffect, useState} from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function ReminderTab(){
  const [isReminding, setIsReminding] = useState(false);
  const [message, setMessage] = useState('Time to drink a glass of water!');
  const [intervalMinutes, setIntervalMinutes] = useState(1);

  useEffect(() => {
    
  }, []);
}