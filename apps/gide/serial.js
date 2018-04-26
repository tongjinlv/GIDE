/**
 * Blockly Demos: Code
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview JavaScript for Blockly's Code demo.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

/**
 * Create a namespace for the application.
 */
var Serial = {};

Serial.downLoad1 = function() {
  var arduinoTextarea = document.getElementById('content_arduino');
  arduinoTextarea.value = Blockly.Arduino.workspaceToCode(Blockly.mainWorkspace); 
  var onReceiveCallback = function(info) {//串口数据接收函数  
	alert("Revice");  
  };  
  var onConnect = function(connectionInfo) { 
  chrome.serial.onReceive.addListener(onReceiveCallback);
  var buffer = new ArrayBuffer(1); 
  var connectionId = connectionInfo.connectionId;
  chrome.serial.send(connectionId, buffer, console.log.bind(console));
  alert(connectionInfo.connectionId);
  };
  chrome.serial.connect("COM6", {bitrate: 9600}, onConnect); 
  var fs = require("fs");  
  fs.writeFile("main.c", arduinoTextarea.value, function(err) {});
  var com=document.getElementById("SerailMenu").value;
  var cp = require('child_process'); //子进程  
  cp.exec("IAP.exe -w "+com+"  main.bin", function(error, stdout, stderr) {  
  //alert(error);
  alert(stdout);
  console.log(stdout);
  //alert(stderr);
}); 
};
Serial.downLoad2 = function() {
  var onReceiveCallback = function(info) {//串口数据接收函数  
	alert("Revice");  
  };  
  var onConnect = function(connectionInfo) { 
  //chrome.serial.onReceive.addListener(onReceiveCallback);
  var buffer = new ArrayBuffer(100); 
  var connectionId = connectionInfo.connectionId;
  chrome.serial.send(connectionId, buffer, console.log.bind(console));
//  alert(connectionInfo.connectionId);
  };
  var com = document.getElementById("SerailMenu").value; 
  chrome.serial.connect(com, {bitrate: 9600}, onConnect); 
  var onDisconnect = function(result) {
    if (result) {
      alert("已经断开串行端口连接");
    } else {
      alert("断开连接失败");
    }
  }
  alert("dd");
  chrome.serial.disconnect(connectionId,onDisconnect);
};
Serial.downLoad = function() {
  var fs = require("fs");  
  var arduinoTextarea = document.getElementById('content_arduino');
  arduinoTextarea.value = Blockly.Arduino.workspaceToCode(Blockly.mainWorkspace); 
  fs.writeFile("main.c", arduinoTextarea.value, function(err) {});
  Debug("ddddddd");
};
