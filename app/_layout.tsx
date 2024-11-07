//Import Poppins fonts and useFonts hook from @expo-google-fonts/poppins
import { Poppins_700Bold, Poppins_400Regular, useFonts } from '@expo-google-fonts/poppins';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Slot } from 'expo-router';
//Import SplashScreen so that when the fonts are not loaded, we can continue to show SplashScreen.
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// This prevents SplashScreen from auto hiding while the fonts are in loading state.
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  // Map the font file using useFonts hook.
  const [loaded, error] = useFonts({
    Poppins_400Regular,
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
    <ThemeProvider value={DefaultTheme}>
      <Slot />
    </ThemeProvider>
  );
}
