import { Button } from './Button';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Text } from 'react-native';
import { PieChart, pieDataItem } from 'react-native-gifted-charts';
import { COLORS } from '~/constants/Colors';
import { calculateLineHeight } from '~/utils/helper';

const pieData: pieDataItem[] = [
  { value: 80, color: COLORS.white },
  {
    value: 20,
    color: COLORS.metallicPink,
    gradientCenterColor: COLORS.brightLavender,
    focused: true,
    text: '20%',
  },
];

const BodyMassIndexBanner = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={[0, 0]}
        end={[1, 0]}
        colors={[COLORS.babyBlueEyes, COLORS.jordyBlue]}
        style={styles.linearGradient}>
        <View style={styles.bannerContainer}>
          <View style={styles.bannerTitleContainer}>
            <Text style={styles.bannerTitle} numberOfLines={1}>
              BMI (Body Mass Index)
            </Text>
            <Text style={styles.bannerDescription} numberOfLines={2}>
              You have a normal weight
            </Text>
          </View>
          <Button variant="secondary" style={styles.viewMoreButton}>
            <Text style={styles.viewMoreText}>View more</Text>
          </Button>
        </View>

        <View
          style={{
            height: '100%',
            width: 106,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <PieChart
            data={pieData}
            showGradient
            sectionAutoFocus
            radius={45}
            // showText
            // textColor={COLORS.white}
            // textSize={12}
          />
        </View>

        <View style={[styles.circle, styles.leftCicle]} />
        <View style={[styles.circle, styles.rightCicle]} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 146,
    borderRadius: 22,
    overflow: 'hidden',
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    padding: 20,
    flexDirection: 'row',
    columnGap: 7,
    position: 'relative',
  },
  bannerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  bannerTitleContainer: {
    width: '100%',
  },
  bannerTitle: {
    color: COLORS.white,
    fontSize: 14,
    lineHeight: calculateLineHeight(14),
    fontFamily: 'Poppins_600SemiBold',
    fontWeight: '600',
  },
  bannerDescription: {
    color: COLORS.white,
    fontSize: 12,
    lineHeight: calculateLineHeight(12),
    fontFamily: 'Poppins_400Regular',
    fontWeight: '400',
  },
  viewMoreButton: {
    width: 95,
    height: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewMoreText: {
    color: COLORS.white,
    fontSize: 10,
    lineHeight: calculateLineHeight(10),
    fontFamily: 'Poppins_600SemiBold',
    fontWeight: '600',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    backgroundColor: COLORS.white,
    opacity: 0.2,
  },
  leftCicle: {
    bottom: -18,
    left: -19,
  },
  rightCicle: {
    bottom: -2,
    right: -10,
  },
});

export default BodyMassIndexBanner;
