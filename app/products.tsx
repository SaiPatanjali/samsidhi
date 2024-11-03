import React, { useState, useEffect } from 'react';
import { Image, Text, View, StyleSheet, FlatList, TouchableOpacity, Linking, useWindowDimensions } from 'react-native';
import products from '@/assets/collection/products';

export function Products() {
  const minCols = 1;

  const calcNumColumns = (width) => {
    const cols = width / styles.content.width;
    const colsFloor = Math.floor(cols) > minCols ? Math.floor(cols) : minCols;
    const colsMinusMargin = cols - (2 * colsFloor * styles.content.margin);
    if (colsMinusMargin < colsFloor && colsFloor > minCols) {
      return colsFloor - 1;
    } else return colsFloor;
  };

  const formatData = (data, numColumns) => {
    const amountFullRows = Math.floor(data.length / numColumns);
    let amountItemsLastRow = data.length - amountFullRows * numColumns;

    while (amountItemsLastRow !== numColumns && amountItemsLastRow !== 0) {
      data.push({key: `empty-${amountItemsLastRow}`, empty: true});
      amountItemsLastRow++;
    }

    return data;
  };

  const Item = ({item}) => {
    if (item.empty) {
      return <View style={[styles.item, styles.itemTransparent]} />;
    }
    return (
      <View style={styles.content}>
        <Image source={{uri: item.imageUrl}} style={styles.image}/>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(item.link)} style={styles.button}>
          <Text style={styles.buttonText}>Buy Now on Zepto</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const {width} = useWindowDimensions();
  const [numColumns, setNumColumns] = useState(calcNumColumns(width));
  useEffect(() => {
    setNumColumns(calcNumColumns(width));
   }, [width]);

  return (
    <View style={styles.root}>
      <Text style={styles.heading}>SAMSIDHI PRODUCTS</Text>
      <FlatList
        key={numColumns}
        data={formatData(products, numColumns)}
        renderItem={({item}) => <Item item={item}/>}
        style={styles.container}
        keyExtractor={item => item.title}
        numColumns={numColumns}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    padding: '20px',
    alignItems: 'center',
  },
  heading: {
    fontSize: 25,
    fontFamily: 'Copperplate',
    textAlign: 'center',
    padding: '20px'
  },
  container: {
    padding: '10px',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: '5px',
    border: '0.1px solid #000',
    padding: '30px',
    elevation: 1,
    alignItems: 'center',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
    width: 300,
    margin: 10
  },
  image: {
    height: '250px',
    width: '250px',
    borderRadius: '5px'
  },
  title: {
    padding: '10px',
    alignItems: 'center',
    fontFamily: 'Helvetica',
    fontSize: 20
  },
  price: {
    alignSelf: 'start',
    padding: '10px',
    fontWeight: 'bold',
    fontSize: 18
  },
  button: {
    backgroundColor: '#AE00FF',
    borderRadius: '5px',
    margin: '10px',
    alignItems: 'center'
  },
  buttonText: {
    padding: '15px',
    color: '#fff'
  },
  itemTransparent: {
    backgroundColor: 'transparent',
  },
});