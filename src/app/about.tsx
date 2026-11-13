import { StyleSheet, Text, View } from 'react-native';

export default function AboutTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>About This App</Text>
      
      <Text style={styles.description}>
        Built for Mobile Application Development Lab 6. Demonstrates local notifications and Expo Router tab navigation.
      </Text>

      <Text style={styles.footerText}>
        Developed with React Native and Expo.{'\n'}
        Created by Dhananja Milindu
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 30,
  },
  footerText: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    lineHeight: 20,
  },
});