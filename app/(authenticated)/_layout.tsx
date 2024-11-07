import { Redirect, Stack } from 'expo-router';

const isSignedIn = false;

export default function AuthenticatedLayout() {
  // If the user is not signed in, redirect to the welcome screen.
  if (!isSignedIn) return <Redirect href="/welcome" />;

  return <Stack />;
}
