import { View, Text } from 'react-native'
import React, { Component } from 'react'
import config from '../../config/config';
import Categories from '../Components/Categories';
import TrendingNews from '../Components/TrendingNews';

class HomeScreen extends Component {
    componentDidMount(){
        console.log(config.API_KEY)
    }
    render() {
        return (
            <View>
                <Categories navigation={this.props.
                navigation}/>
                <TrendingNews navigation={this.props.navigation}/>
               <Text>HomeScreens</Text>
            </View>
        );
    }
}

export default HomeScreen;