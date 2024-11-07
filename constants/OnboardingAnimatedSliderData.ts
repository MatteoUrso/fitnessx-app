import { ImageSourcePropType } from 'react-native';

export type OnboardingAnimatedSliderType = {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
};

export const OnboardingAnimatedSliderData: OnboardingAnimatedSliderType[] = [
  {
    id: '1',
    title: 'Track Your Goals',
    description: `Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals`,
    image: require('~/assets/images/onboarding-1.png'),
  },
  {
    id: '2',
    title: 'Get Burn',
    description: `Let’s keep burning, to achive yours goals, it hurts only temporarily, if you give up now you will be in pain forever`,
    image: require('~/assets/images/onboarding-2.png'),
  },
  {
    id: '3',
    title: 'Eat Well',
    description: `Let's start a healthy lifestyle with us, we can determine your diet every day. healthy eating is fun`,
    image: require('~/assets/images/onboarding-3.png'),
  },
  {
    id: '4',
    title: 'Improve Sleep Quality',
    description: `Improve the quality of your sleep with us, good quality sleep can bring a good mood in the morning`,
    image: require('~/assets/images/onboarding-4.png'),
  },
];
