import { Text, View, StyleSheet } from 'react-native';

export function Banner() {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Crafting elegance for your space</Text>
      <Text style={styles.description}>Shop our range of handcrafted decor items, fabrics, and eco-friendly products, and experience the magic of Indian celebrations like never before. At Samsidhi, every detail brings life, warmth, and splendor to your festivities!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#000',
    padding: '60px',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 40,
    fontFamily: 'Papyrus',
    textAlign: 'center',
    padding: '10px'
  },
  description: {
    color: '#fff',
    fontFamily: 'Verdana',
    textAlign: 'center',
    padding: '10px',
    width: '75%'
  }
});