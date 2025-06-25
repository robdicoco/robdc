import React from 'react';
import { View, Image, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

interface MyPicProps {
  name?: string;
  title?: string;
}

export default function MyPic({ name = "Rob DC", title = "Software Developer" }: MyPicProps) {
  return (
    <View style={globalStyles.header}>
      <Image
        source={require('../../assets/me.png')}
        style={globalStyles.profileImage}
        resizeMode="cover"
        onError={(error) => console.log('Image error:', error)}
      />
      <Text style={globalStyles.name}>{name}</Text>
      <Text style={globalStyles.title}>{title}</Text>
    </View>
  );
} 