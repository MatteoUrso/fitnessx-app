import { Button } from './Button';
import ArrowRight from './svg/arrow-right';
import React from 'react';
import { useCallback, useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';
import { COLORS } from '~/constants/Colors';

const SIZE = 60;
const STROKE_WIDTH = 2;
const CENTER = SIZE / 2;
const RADIUS = SIZE / 2 - STROKE_WIDTH / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

type Props = {
  percentage: number;
  scrollTo: () => void;
};

export default function OnboardingAnimatedSliderNextButton({ percentage, scrollTo }: Props) {
  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = useCallback(
    (toValue: number) => {
      return Animated.timing(progressAnimation, {
        toValue,
        duration: 250,
        useNativeDriver: true,
      }).start();
    },
    [progressAnimation]
  );

  useEffect(() => {
    animation(percentage);
  }, [animation, percentage]);

  useEffect(() => {
    progressAnimation.addListener((value) => {
      const strokeDashoffset = CIRCUMFERENCE - (CIRCUMFERENCE * value.value) / 100;

      if (progressRef?.current) {
        (progressRef.current as any).setNativeProps({
          strokeDashoffset,
        });
      }
    });

    return () => {
      progressAnimation.removeAllListeners();
    };
  }, [percentage, progressAnimation]);

  return (
    <>
      <Svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} fill="none">
        <G rotation={-90} origin={CENTER}>
          <Circle
            stroke={COLORS.border}
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            strokeWidth={STROKE_WIDTH}
          />
          <Circle
            ref={progressRef}
            stroke={COLORS.babyBlueEyes}
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            strokeWidth={STROKE_WIDTH}
            strokeDasharray={[CIRCUMFERENCE]}
          />
        </G>
      </Svg>
      <Button onPress={scrollTo} style={styles.button} variant="primary" activeOpacity={0.6}>
        <ArrowRight color={COLORS.white} />
      </Button>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    borderRadius: 100,
    right: 0,
    bottom: 0,
    top: 5,
    left: 5,
    width: SIZE - 10,
    height: SIZE - 10,
    overflow: 'hidden',
  },
});
