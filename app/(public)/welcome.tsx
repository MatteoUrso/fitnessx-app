import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '~/components/Button';
import { Icons } from '~/components/icons';
import { COLORS } from '~/constants/Colors';

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Icons.logo />
        <Text style={styles.slangText}>Everybody Can Train</Text>
      </View>
      <Link href="/onboarding" asChild replace>
        <Button style={styles.button} variant="primary">
          <Text style={styles.getStartedText}>Get Started</Text>
        </Button>
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
  getStartedText: {
    color: COLORS.white,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
    fontFamily: 'Poppins_700Bold',
  },
});
