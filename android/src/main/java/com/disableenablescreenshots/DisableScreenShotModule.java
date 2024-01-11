package com.disableenablescreenshots;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import android.app.Activity;
import android.view.WindowManager;

@ReactModule(name = DisableScreenShotModule.NAME)
public class DisableScreenShotModule extends ReactContextBaseJavaModule {
  public static final String NAME = "DisableScreenShot";

  public DisableScreenShotModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }


  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  public void multiply(double a, double b, Promise promise) {
    promise.resolve(a * b);
  }

  @ReactMethod
  public void screenshotsStatusUpdate(boolean disableScreenshot, Promise promise) {

    try {
      Activity activity = getCurrentActivity();
      if (activity != null) {
        if (disableScreenshot) {
          activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
              try {
                activity.getWindow().addFlags(WindowManager.LayoutParams.FLAG_SECURE);
                promise.resolve("Done. Screenshot Disabled.");
              } catch (Exception e) {
                promise.reject(NAME, "Disable screenshot failed.");
              }


            }
          });
        } else {
          activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
              try {
                activity.getWindow().clearFlags(WindowManager.LayoutParams.FLAG_SECURE);
                promise.resolve("Done. Screenshot Enabled.");
              } catch (Exception e) {
                promise.reject(NAME, "Enable screenshot failed.");
              }

            }
          });
        }

      }

    } catch (Exception e) {
      e.printStackTrace();
    }


  }
}
