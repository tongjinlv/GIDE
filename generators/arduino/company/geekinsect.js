'use strict';
goog.provide('Blockly.Arduino.esp8266wifi');
goog.require('Blockly.Arduino');

Blockly.Arduino.geekinsect_moto = function() {
  var value1 = Blockly.Arduino.valueToCode(this, 'VALUE1',Blockly.Arduino.ORDER_ATOMIC);
  var  value2 = Blockly.Arduino.valueToCode(this, 'VALUE2', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_MOTO'] = '#include <Moto.h>';
  var code = "moto.set(" + value1 + "," + value2 +");\n";
  return code;
};

Blockly.Arduino.geekinsect_ws2812 = function() {
  var value1 = Blockly.Arduino.valueToCode(this, 'VALUE1',Blockly.Arduino.ORDER_ATOMIC);
  var value2 = Blockly.Arduino.valueToCode(this, 'VALUE2', Blockly.Arduino.ORDER_ATOMIC);
  var value3 = Blockly.Arduino.valueToCode(this, 'VALUE3', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_WS2812'] = '#include <ws2812.h>';
  var code = "ws2812.set(" + value1 + "," + value2 +","+value3+");\n";
  return code;
};
Blockly.Arduino.geekinsect_xeopixel = function() {
  var Indexs_RGB = this.getTitleValue('RGBIndex');
  var Color_RGB = this.getFieldValue('RGBColor');
  var Color = goog.color.hexToRgb(Color_RGB);
  Blockly.Arduino.definitions_['define_WS2812'] = '#include <ws2812.h>';
  var code = 'ws2812.set(' + Indexs_RGB + ',' + Color + ');\n';
  return code;
};

Blockly.Arduino.geekinsect_beep = function() {
  var Value1 = this.getTitleValue('VALUE1');
  var Value2 = this.getFieldValue('VALUE2');
  Blockly.Arduino.definitions_['define_BEEP'] = '#include <beep.h>';
  var code = 'beep.set(' + Value1 + ',' + Value2 + ');\n';
  return code;
};

Blockly.Arduino.geekinsect_readir = function() {
  Blockly.Arduino.definitions_['define_IR'] = '#include <ir.h>';
  var code = 'ir.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.geekinsect_algo = function() {
  var Value1 = this.getTitleValue('VALUE1');
  Blockly.Arduino.definitions_['define_ALGO'] = '#include <algo.h>';
  var code = 'algo.get(' + Value1  + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.geekinsect_sendir = function() {
  var value1 = Blockly.Arduino.valueToCode(this, 'VALUE1',Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_IR'] = '#include <ir.h>';
  var code = "ir.write(" + value1 + ");\n";
  return code;
};

Blockly.Arduino.geekinsect_longsensor = function() {
  var Value1 = this.getTitleValue('VALUE1');
  Blockly.Arduino.definitions_['define_SENSOR'] = '#include <sensor.h>';
  var code = 'sensor.long.get(' + Value1 +  ');\n';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.esp8266wifi_client_print = function() {
  var TEXT = Blockly.Arduino.valueToCode(this, 'TEXT',Blockly.Arduino.ORDER_ATOMIC)|| '\"\"';
  var code = 'wificlient.print('+TEXT+');\n';
  return code;
};

Blockly.Arduino.esp8266wifi_client_println = function() {
  var TEXT = Blockly.Arduino.valueToCode(this, 'TEXT',Blockly.Arduino.ORDER_ATOMIC)|| '\"\"';
  var code = 'wificlient.println('+TEXT+');\n';
  return code;
};
