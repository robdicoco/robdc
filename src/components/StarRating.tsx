import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

export default function StarRating({ rating, maxRating = 5 }: StarRatingProps) {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      const starColor = i <= rating ? '#FFD700' : '#E0E0E0';
      stars.push(
        <Text key={i} style={[globalStyles.star, { color: starColor }]}>
          ★
        </Text>
      );
    }
    return stars;
  };

  return (
    <View style={globalStyles.starsContainer}>
      {renderStars()}
    </View>
  );
} 