import { Image, View, StyleSheet } from 'react-native';

export function Header() {
    return (
        <View style={ styles.root }>
            <Image source={require('@/assets/images/logo.png')} style={styles.logo}/>
        </View>
    );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    paddingTop: '15px',
    paddingBottom: '15px',
    paddingLeft: '30px',
    paddingRight: '30px'
  },
  logo: {
    height: '60px',
    width: '60px'
  }
});