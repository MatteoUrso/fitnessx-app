import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Animated, FlatList, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import NextButton from '~/components/OnboardingList/NextButton';
import { OnboardingItem } from '~/components/OnboardingList/OnboardingItem';
import onboardingSlides from '~/constants/onboarding-slides';

export default function OnboardingScreen() {
  const { bottom, right } = useSafeAreaInsets();

  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: any[] }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < onboardingSlides.length - 1) {
      (slidesRef.current as any)?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      // Navigate to the next screen
      router.navigate('/register');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={onboardingSlides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      <View
        style={[
          styles.nextButtonContainer,
          {
            right: right + 30,
            bottom: bottom,
          },
        ]}>
        <NextButton
          percentage={(currentIndex + 1) * (100 / onboardingSlides.length)}
          scrollTo={scrollTo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nextButtonContainer: {
    position: 'absolute',
  },
});
