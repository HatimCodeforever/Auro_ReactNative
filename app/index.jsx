import React from 'react';
import {Text, View} from 'react-native';
import {Link} from 'expo-router'
import { StatusBar } from 'expo-status-bar';
const index = () => (
  <View >
    
    <StatusBar style='auto'></StatusBar>
    <Text className="text-lg mt-11 font-pblack">Home Page</Text>
    <Link href="/home" style={{color: 'red', marginTop: 50}}>Go to profile</Link>
  </View>
);

export default index;