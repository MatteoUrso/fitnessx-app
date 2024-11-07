import { Stack } from 'expo-router';

export default function PublicLayout() {
  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ title: 'Welcome', headerShown: false }} />
      <Stack.Screen name="onboarding" options={{ title: 'Onboarding', headerShown: false }} />
    </Stack>
  );
}
