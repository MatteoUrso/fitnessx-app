//Import Poppins fonts and useFonts hook from @expo-google-fonts/poppins
import {
  Poppins_700Bold,
  Poppins_600SemiBold,
  Poppins_400Regular,
  useFonts,
} from '@expo-google-fonts/poppins';
import { DefaultTheme, Theme, ThemeProvider } from '@react-navigation/native';
import { Slot } from 'expo-router';
//Import SplashScreen so that when the fonts are not loaded, we can continue to show SplashScreen.
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { COLORS } from '~/constants/Colors';

// This prevents SplashScreen from auto hiding while the fonts are in loading state.
SplashScreen.preventAutoHideAsync();

const NAV_THEME: Theme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.white,
  },
};

export default function Layout() {
  // Map the font file using useFonts hook.
  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      // After the custom fonts have loaded, we can hide the splash screen and display the app screen.
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <ThemeProvider value={NAV_THEME}>
      <Slot />
    </ThemeProvider>
  );
}
