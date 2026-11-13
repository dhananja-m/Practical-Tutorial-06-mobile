import { StyleSheet, Text, View } from 'react-native';

export default function TipsTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Why Hydrate? 🌊</Text>
      
      <Text style={styles.tipItem}>• Boosts skin health and beauty</Text>
      <Text style={styles.tipItem}>• Regulates body temperature</Text>
      <Text style={styles.tipItem}>• Flushes body waste</Text>
      <Text style={styles.tipItem}>• Maintains blood pressure</Text>
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
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0EA5E9',
    marginBottom: 30,
    textAlign: 'center',
  },
  tipItem: {
    fontSize: 16,
    color: '#333',
    marginVertical: 8,
    textAlign: 'center',
  },
});