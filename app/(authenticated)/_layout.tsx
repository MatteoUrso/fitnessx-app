import { Redirect, Stack } from 'expo-router';

const isSignedIn = true;

export default function AuthenticatedLayout() {
  // If the user is not signed in, redirect to the welcome screen.
  if (!isSignedIn) return <Redirect href="/welcome" />;

  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          fontSize: 16,
          fontWeight: 'bold',
          fontFamily: 'Poppins_700Bold',
        },
        headerShadowVisible: false,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
