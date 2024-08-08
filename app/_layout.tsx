import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

  export default function  RootLayout() {
    const [fontsLoaded] = useFonts({
      'outfit':require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium':require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold':require('./../assets/fonts/Outfit-Bold.ttf'),
    });

    useEffect(() => {
      if (!fontsLoaded) {
        SplashScreen.preventAutoHideAsync();
      } else {
        SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);
  
    if (!fontsLoaded) {
      return null; // Or some loading spinner
    }
  return (
    <Stack
    >
      <Stack.Screen name="index" options={{ headerShown: false }}/>
    </Stack>
  );
}
