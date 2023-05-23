import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';

const categories = [
  'Entertainment',
  'Health',
  'Technology',
  'Sports',
  'Bussiness',
  'Politics',
];

class Categories extends Component {
  state = {};
  render() {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
            <TouchableOpacity key={index} onPress={() => 
            this.props.navigation.navigate('GetNews',{
                category,
            })
            }>
          <View >
            <Text
              style={{
                padding: 10,
                borderWidth: 1,
                borderColor: 'black',
                fontSize: 19,
                margin: 10,
                borderRadius: 10,
              }}>
              {category}
            </Text>
          </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

export default Categories;
