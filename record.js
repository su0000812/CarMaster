'use strict';

var RCTRecordAndroid = require('NativeModules').RecordAndroid;

var RecordAndroid = {
  startRecord: function(): void{
    RCTRecordAndroid.startRecord();
  },
};

module.exports = RecordAndroid;
