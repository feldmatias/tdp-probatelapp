# ProbatelAPP

### Run
Run instructions for iOS:
- npx react-native run-ios
- Open ProbatelAPP\ios\ProbatelAPP.xcodeproj in Xcode or run "xed -b ios"
- Hit the Run button

Run instructions for Android:
- Have an Android emulator running (quickest way to get started), or a device connected.
- npx react-native run-android


### Release APK Generation
Place your terminal directory to android using:

`cd android`

Then run the following command

For Windows: `gradlew assembleRelease`

For Linux and Mac OSX: `./gradlew assembleRelease`

As a result, the APK creation process is done. You can find the generated APK at android/app/build/outputs/apk/app-release.apk. 
