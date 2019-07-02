# Random Users App

This repository contains the source code of an app that shows how React Native performs, and it useful to understand main concepts of React Native development as:

1. Creating components.
2. Use of some external plugins like:

    react-native-camera

    react-native-maps

    react-navigation

3. Navigate between pages(Master-Detail) using StackNavigator from react-navigation plugin.

4. Use of Maps APIs

5. Use of StyleSheets for styling components.

6. Use of flexbox to Layout components.

7. Using Flatlist component to render a list of users.

9. Fetch data from external API.

8. Paginating data from the API.

10. Use Image component to show user's Avatars.

## How to run

Install dependencies:
```
npm i
```

Run on Android Device

```
react-native run-android
```

Generate APK for testing

```
react-native bundle --dev false --platform android --entry-file index.j
s --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/m
ain/res && cd android && ./gradlew clean && ./gradlew assembleDebug && cd ..
```
