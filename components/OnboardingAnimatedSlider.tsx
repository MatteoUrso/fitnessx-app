import { OnboardingAnimatedSliderItem } from './OnboardingAnimatedSliderItem';
import React, { forwardRef, useCallback, useRef, useState } from 'react';
import { Animated, FlatList, ViewabilityConfig } from 'react-native';
import {
  OnboardingAnimatedSliderData,
  OnboardingAnimatedSliderType,
} from '~/constants/OnboardingAnimatedSliderData';

type Props = {
  setCurrentIndex: (index: number) => void;
};

const OnboardingAnimatedSlider = forwardRef<
  React.ElementRef<typeof FlatList<OnboardingAnimatedSliderType>>,
  Props
>(({ setCurrentIndex }, ref) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const [viewConfig] = useState<ViewabilityConfig>({ viewAreaCoveragePercentThreshold: 50 });

  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
    useNativeDriver: false,
  });

  const viewableItemsChanged = ({ viewableItems }: { viewableItems: any[] }) => {
    setCurrentIndex(viewableItems[0].index);
  };

  const renderItem = useCallback(({ item }: { item: OnboardingAnimatedSliderType }) => {
    return <OnboardingAnimatedSliderItem item={item} />;
  }, []);

  return (
    <FlatList
      data={OnboardingAnimatedSliderData}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      bounces={false}
      keyExtractor={(item) => item.id}
      onScroll={onScroll}
      scrollEventThrottle={32}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={viewConfig}
      ref={ref}
    />
  );
});
OnboardingAnimatedSlider.displayName = 'OnboardingAnimatedSlider';

export { OnboardingAnimatedSlider };
