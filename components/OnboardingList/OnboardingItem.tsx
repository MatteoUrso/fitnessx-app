import { Image } from 'expo-image';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '~/theme/colors';

const { width } = Dimensions.get('window');

type Props = {
  item: {
    id: string;
    title: string;
    description: string;
    image: any;
  };
};

const OnboardingItem: React.FC<Props> = ({ item }) => {
  const { left, right } = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} contentFit="contain" />
      </View>
      <View
        style={[
          styles.bottomContainer,
          {
            paddingLeft: left + 30,
            paddingRight: right + 30,
          },
        ]}>
        <View style={styles.bottomSectionContainer}>
          <Text style={styles.sectionTitleText}>{item.title}</Text>
          <Text style={styles.sectionDescriptionText}>{item.description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: width,
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bottomContainer: {
    width: width,
    flex: 1,
  },
  bottomSectionContainer: {
    rowGap: 15,
    width: '100%',
  },
  sectionTitleText: {
    color: COLORS.black,
    fontWeight: 'bold',
    fontFamily: 'Poppins_700Bold',
    fontSize: 24,
    lineHeight: 36,
  },
  sectionDescriptionText: {
    color: COLORS.gray1,
    fontWeight: 'regular',
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 21,
  },
});

export { OnboardingItem };
