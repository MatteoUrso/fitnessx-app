import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons } from '~/components/icons';
import { COLORS } from '~/theme/colors';

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Icons.logo />
        <Text style={styles.slangText}>Everybody Can Train</Text>
      </View>
      <Link href="/onboarding" asChild replace>
        <TouchableOpacity style={styles.button}>
          <LinearGradient
            start={[0, 0]}
            end={[1, 0]}
            colors={['#9DCEFF', '#92A3FD']}
            style={styles.buttonGradient}>
            <Text style={styles.getStartedText}>Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slangText: {
    color: COLORS.gray1,
    fontSize: 18,
    fontFamily: 'Poppins_400Regular',
  },
  button: {
    width: '100%',
    height: 60,
    borderRadius: 99,
    overflow: 'hidden',
  },
  buttonGradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStartedText: {
    color: COLORS.white,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
    fontFamily: 'Poppins_700Bold',
  },
});
