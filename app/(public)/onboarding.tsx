import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { OnboardingAnimatedSlider } from '~/components/OnboardingAnimatedSlider';
import OnboardingAnimatedSliderNextButton from '~/components/OnboardingAnimatedSliderNextButton';
import { OnboardingAnimatedSliderData } from '~/constants/OnboardingAnimatedSliderData';

export default function OnboardingScreen() {
  const { bottom, right } = useSafeAreaInsets();

  const slidesRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollTo = () => {
    if (currentIndex < OnboardingAnimatedSliderData.length - 1) {
      (slidesRef.current as any)?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      // Navigate to the next screen
      router.navigate('/register');
    }
  };

  return (
    <View style={styles.container}>
      <OnboardingAnimatedSlider ref={slidesRef} setCurrentIndex={setCurrentIndex} />
      <View
        style={[
          styles.nextButtonContainer,
          {
            right: right + 30,
            bottom: bottom,
          },
        ]}>
        <OnboardingAnimatedSliderNextButton
          percentage={(currentIndex + 1) * (100 / OnboardingAnimatedSliderData.length)}
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
