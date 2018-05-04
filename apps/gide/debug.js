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
var Debugclient={}; 
var Debug=function(tags){
    Debugclient.write(tags+"\r\n");

    var arduinoTextarea = document.getElementById('side_code');
	  arduinoTextarea.value=arduinoTextarea.value+tags+"\r\n";
}
Debug.Init = function() {
    var net = require('net');
    var HOST = '127.0.0.1';
    var PORT = 8080;
    Debugclient = new net.Socket();
    Debugclient.connect(PORT, HOST, function() {
        Debugclient.write('Hello');
    });
    Debugclient.on('data', function(data) {
        Debugclient.write('DATA: ' + data);
    });

    Debugclient.on('close', function() {
    //alert('Connection closed');
    });
  
};
