package com.carmaster;

import android.app.Application;
import android.content.Intent;
import android.hardware.Camera;
import android.widget.Toast;

import com.alibaba.sdk.android.AlibabaSDK;
import com.alibaba.sdk.android.callback.InitResultCallback;
import com.duanqu.qupai.engine.session.VideoSessionCreateInfo;
import com.duanqu.qupai.sdk.android.QupaiService;

/**
 * Created by JSu on 2016/4/22.
 */
public class MyApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();

//        /**
//         * 集成必须要做的初始化
//         */
//        AlibabaSDK.turnOnDebug();
//        AlibabaSDK.asyncInit(this, new InitResultCallback() {
//            @Override
//            public void onSuccess() {
//                Toast.makeText(MyApplication.this, "初始化成功 ", Toast.LENGTH_SHORT)
//                        .show();
//                QupaiService qupaiService = AlibabaSDK
//                        .getService(QupaiService.class);
//
//                Intent moreMusic = new Intent();
//                //是否需要更多音乐页面--如果不需要填空
//                moreMusic.setClass(MyApplication.this, null);
//
//                VideoSessionCreateInfo info =new VideoSessionCreateInfo.Builder()
//                        .setOutputDurationLimit(8)
//                        .setOutputVideoBitrate(8)
//                        .setHasImporter( true)
//                        .setWaterMarkPath("assets://Qupai/watermark/qupai-logo.png")
//                        .setWaterMarkPosition(1)
//                        .setHasEditorPage(true)
//                        .setCameraFacing(Camera.CameraInfo.CAMERA_FACING_FRONT)
//                        .setBeautyProgress(80)
//                        .setBeautySkinOn(true)
//                        .build();
//
//                qupaiService.initRecord(info);
//                qupaiService.hasMroeMusic(moreMusic);
//
//                if(qupaiService != null){
//                    qupaiService.addMusic(0, "Athena", "assets://Qupai/music/Athena");
//                    qupaiService.addMusic(1, "Box Clever", "assets://Qupai/music/Box Clever");
//                    qupaiService.addMusic(2, "Byebye love", "assets://Qupai/music/Byebye love");
//                    qupaiService.addMusic(3, "chuangfeng", "assets://Qupai/music/chuangfeng");
//                    qupaiService.addMusic(4, "Early days", "assets://Qupai/music/Early days");
//                    qupaiService.addMusic(5, "Faraway", "assets://Qupai/music/Faraway");
//                }
//            }
//
//            @Override
//            public void onFailure(int i, String s) {
//                Toast.makeText(MyApplication.this, "初始化失败 " + s, Toast.LENGTH_SHORT)
//                        .show();
//            }
//        });
    }
}
