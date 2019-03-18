AudioUtils = (function() {
    var owner = {};

    owner.createRecorder = function() {
        console.log("createRecorder");
        var recorder = plus.audio.getRecorder();
        return recorder;
    }

    owner.startRecorder = function(recorder, callback) {
        console.log("startRecorder");
        //      recorder = plus.audio.getRecorder();
        //      if(recorder == null) {
        //          mui.toast("获取录音对象失败");
        //          return;
        //      }

        // 记录开始时间
        //      startTimestamp = (new Date()).getTime();
        recorder.record({
            filename: "_doc/audio/", // 保存录音文件的路径
            format: "amr" // 录音文件的格式，android、iPhone统一使用amr格式
        }, function(path) {
            //          if(recordCancel) {
            //              console.log("cancel record");
            //              return;
            //          }
            // 录音文件只有一个，记录录音文件路径
            //          voiceFilePath = path;
            console.log("record path=" + path);
            // 显示播放按钮
            //          showPlayImgVisible(true);

            callback(0, path);
        }, function(error) {
            mui.toast("录音时出现异常 error=" + error.message);
            console.error("record error=" + error + " message=" + error.message);
            callback(-1, null);
        });
    };

    owner.stopRecorder = function(recorder) {
        console.log("stopRecorder");
        //      stopTimestamp = (new Date()).getTime();
        //      if(stopTimestamp - startTimestamp < MIN_SOUND_TIME) {
        //          audio_tips.innerHTML = "录音时间太短";
        //          boxSoundAlert.classList.add('rprogress-sigh');
        //          recordCancel = true;
        //          stopTimer = setTimeout(function() {
        //              setSoundAlertVisible(false);
        //          }, 800);
        //      } else {
        //          setSoundAlertVisible(false);
        //      }
        // TODO 使用状态标记，不重复stop
        recorder.stop();
    };

    owner.playVoice = function(path, callback) {
        var player = plus.audio.createPlayer(path);
        player.play(function() {
            console.log("play success");
            callback(0);
        }, function(error) {
            mui.toast("播放录音时出现异常 error=" + error.message);
            console.error("play error=" + error + " message=" + error.message);
            callback(-1);
        });
    }

    return owner;

})();