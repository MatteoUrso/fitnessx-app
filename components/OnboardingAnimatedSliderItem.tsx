import { Image } from 'expo-image';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '~/constants/Colors';
import { OnboardingAnimatedSliderType } from '~/constants/OnboardingAnimatedSliderData';
import { calculateLineHeight } from '~/utils/helper';

const { width } = Dimensions.get('window');

const OnboardingAnimatedSliderItem = ({ item }: { item: OnboardingAnimatedSliderType }) => {
  const { left, right } = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} contentFit="cover" />
      </View>
      <View style={[styles.bottomContainer, { paddingLeft: left + 30, paddingRight: right + 30 }]}>
        <View style={styles.titleAndDescriptionContainer}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bottomContainer: {
    flex: 1,
  },
  titleAndDescriptionContainer: {
    rowGap: 15,
    width: '100%',
  },
  titleText: {
    color: COLORS.black,
    fontWeight: 'bold',
    fontFamily: 'Poppins_700Bold',
    fontSize: 24,
    lineHeight: calculateLineHeight(24),
  },
  descriptionText: {
    color: COLORS.gray1,
    fontWeight: 'regular',
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: calculateLineHeight(14),
  },
});

export { OnboardingAnimatedSliderItem };
