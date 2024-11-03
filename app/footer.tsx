import { Image, Text, View, StyleSheet } from 'react-native';

export function Footer(){
  return (
    <View style={styles.root}>
      <Image source={require('@/assets/images/logo.png')} style={styles.logo}/>
      <Text style={styles.heading}>Contact Us</Text>
      <Text style={styles.text}>Samsidhi E-Mart Private Limited<br/>Plot No. 104, Gundlapochampally,<br/>Hyderabad, Telangana – 500043</Text>
      <Text style={styles.text}>Email: info@samsidhi.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    padding: '20px',
    alignItems: 'center'
  },
  logo: {
    height: '100px',
    width: '100px'
  },
  heading: {
    fontSize: 18,
    textAlign: 'center',
    padding: '10px',
    width: '75%',
    fontWeight: 'bold'
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    padding: '5px',
    width: '75%'
  }
});