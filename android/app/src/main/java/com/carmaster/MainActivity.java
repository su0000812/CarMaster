package com.carmaster;

import android.os.Bundle;
import android.os.PersistableBundle;
import android.util.TypedValue;
import android.widget.TextView;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.oblador.vectoricons.VectorIconsPackage;

import java.util.Arrays;
import java.util.List;

public class MainActivity extends ReactActivity {


    @Override
    public void onCreate(Bundle savedInstanceState, PersistableBundle persistentState) {
        super.onCreate(savedInstanceState, persistentState);
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "CarMaster";
    }

    /**
     * Returns whether dev mode should be enabled.
     * This enables e.g. the dev menu.
     */
    @Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    /**
     * A list of packages used by the app. If the app uses additional views
     * or modules besides the default ones, add more packages here.
     */
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new VectorIconsPackage()
//                new RecordPackage()
        );
    }

//    private class RecordPackage implements ReactPackage {
//
//        public RecordPackage() {
//
//        }
//
//        @Override
//        public List<Class<? extends JavaScriptModule>> createJSModules() {
//            return Collections.emptyList();
//        }
//
//        @Override
//        public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
////        return Collections.emptyList();
//            List<NativeModule> modules = new ArrayList<>();
//            modules.add(new RecordModule(reactContext));
//            return modules;
//        }
//
//        @Override
//        public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
//            return Collections.emptyList();
//        }
//    }
//
//    private class RecordModule extends ReactContextBaseJavaModule {
//
//        private double mDurationLimit;
//        private int mVideoBitrate;
//        private int mWaterMark = -1;
//        private int beautySkinProgress;
//
//        private String waterMarkPath;
//
//        public RecordModule(ReactApplicationContext applicationContext) {
//            super(applicationContext);
//        }
//
//        @Override
//        public String getName() {
//            return "RecordAndroid";
//        }
//
//        @ReactMethod
//        public void startRecord() {
//            QupaiService qupaiService = AlibabaSDK
//                    .getService(QupaiService.class);
//
//            if (qupaiService == null) {
//                Toast.makeText(MainActivity.this, "插件没有初始化，无法获取 QupaiService",
//                        Toast.LENGTH_LONG).show();
//                return;
//            }
//
//            //视频时长
////        if (!TextUtils.isEmpty(edit_time.getText())) {
////            mDurationLimit = Double.valueOf(edit_time.getText().toString());
////        } else {
////        }
//            mDurationLimit = 8;
//
//            //视频码率
////        if (!TextUtils.isEmpty(edit_rate.getText())) {
////            mVideoBitrate = Integer.valueOf(edit_rate.getText().toString());
////        } else {
////        }
//            mVideoBitrate = 2000 * 1000;
//
//            //是否需要水印
//            mWaterMark = 1;
//            //水印存储的目录
//            waterMarkPath = "assets://Qupai/watermark/qupai-logo.png";
//
//            //美颜参数:1-100.这里不设指定为80,这个值只在第一次设置，之后在录制界面滑动美颜参数之后系统会记住上一次滑动的状态
//            beautySkinProgress = 80;
//
//            MovieExportOptions movie_options = new MovieExportOptions.Builder()
//                    .configureMuxer("movflags", "+faststart")
//                    .configureMuxer("An invalid option", "generates a warning and is ignored.")
//                    .build();
//            VideoSessionCreateInfo info = new VideoSessionCreateInfo.Builder()
//                    .setOutputDurationLimit((float) mDurationLimit)
//                    .setOutputVideoBitrate(mVideoBitrate)
//                    .setHasImporter(true)
//                    .setWaterMarkPath(waterMarkPath)
//                    .setWaterMarkPosition(mWaterMark)
//                    .setHasEditorPage(true)
//                    .setCameraFacing(
//                            Camera.CameraInfo.CAMERA_FACING_BACK)
//                    .setBeautyProgress(beautySkinProgress)
//                    .setBeautySkinOn(true)
//                    .setMovieExportOptions(movie_options)
//                    .build();
//
//            //初始化，建议在application里面做初始化，这里做是为了方便开发者认识参数的意义
//            qupaiService.initRecord(info);
//
//            //是否需要更多音乐页面--如果不需要更多音乐可以干掉
//            Intent moreMusic = new Intent();
////        if (st_more_music.isChecked()) {
////            moreMusic.setClass(MainActivity.this, MoreMusicActivity.class);
////        } else {
////        }
//            moreMusic = null;
//            qupaiService.hasMroeMusic(moreMusic);
//
//            //引导，只显示一次，这里用SharedPreferences记录
//            final AppGlobalSetting sp = new AppGlobalSetting(MainActivity.this.getApplicationContext());
//            Boolean isGuideShow = sp.getBooleanGlobalItem(
//                    "Qupai_has_video_exist_in_user_list_pref", true);
//
//            /**
//             * 建议上面的initRecord只在application里面调用一次。这里为了能够开发者直观看到改变所以可以调用多次
//             */
//            qupaiService.showRecordPage(MainActivity.this, 10001, isGuideShow,
//                    new FailureCallback() {
//                        @Override
//                        public void onFailure(int i, String s) {
//                            Toast.makeText(MainActivity.this, "onFailure:" + s + "CODE" + i, Toast.LENGTH_LONG).show();
//                        }
//                    });
//
//            sp.saveGlobalConfigItem(
//                    "Qupai_has_video_exist_in_user_list_pref", false);
//        }
//    }
}
