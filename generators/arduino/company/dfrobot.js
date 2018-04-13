'use strict';

goog.provide('Blockly.Arduino.dfrobot');

goog.require('Blockly.Arduino');


Blockly.Arduino.df_romeo_motor=function(){
   var dropdown_pin = this.getFieldValue('PIN');
   var speed = Blockly.Arduino.valueToCode(this, 'speed',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   var code='setRomeoMotor('+dropdown_pin+', '+speed+');\n';
   Blockly.Arduino.setups_['setup_output_4'] = 'pinMode(4, OUTPUT);';
   Blockly.Arduino.setups_['setup_output_5'] = 'pinMode(5, OUTPUT);';
   Blockly.Arduino.setups_['setup_output_6'] = 'pinMode(6, OUTPUT);';
   Blockly.Arduino.setups_['setup_output_7'] = 'pinMode(7, OUTPUT);';
   Blockly.Arduino.setups_['setup_output_w4'] = 'digitalWrite(4, LOW);';
   Blockly.Arduino.setups_['setup_output_w5'] = 'digitalWrite(5, LOW);';
   Blockly.Arduino.setups_['setup_output_w6'] = 'digitalWrite(6, LOW);';
   Blockly.Arduino.setups_['setup_output_w7'] = 'digitalWrite(7, LOW);';
   var funcName='setRomeoMotor';
   var code2='void '+funcName+'(int motorId, int speed) {\n' 
	+ '  int speedPin, directionPin;\n'
	+ '  if (motorId == 1){\n'
	+ '  	speedPin = 5;\n'
	+ '  	directionPin = 4;\n'
	+ '  } else {\n'
	+ '  	if (motorId == 2){\n'
	+ '  		speedPin = 6;\n'
	+ '  		directionPin = 7;\n'
	+ '  	} else {\n'
	+ '  		return;\n'
	+ '  	}\n'
	+ '  }\n'
	+ '  if (speed == 0){\n'
	+ '  	digitalWrite(speedPin, LOW);\n'
	+ '  }\n'
	+ '  if (speed > 0){\n'
	+ '  	digitalWrite(directionPin, HIGH);\n'
	+ '  	analogWrite(speedPin, speed);\n'
	+ '  } else {\n'
	+ '  	digitalWrite(directionPin, LOW);\n'
	+ '  	analogWrite(speedPin, -speed);\n'
	+ '  }\n'
	+ '}\n';
    Blockly.Arduino.definitions_[funcName] = code2;
   return code;
};

Blockly.Arduino.df_romeo_motor_stop=function(){
   var dropdown_pin = this.getFieldValue('PIN');
   var code='setRomeoMotor('+dropdown_pin+', 0);\n';
   Blockly.Arduino.setups_['setup_output_4'] = 'pinMode(4, OUTPUT);';
   Blockly.Arduino.setups_['setup_output_5'] = 'pinMode(5, OUTPUT);';
   Blockly.Arduino.setups_['setup_output_6'] = 'pinMode(6, OUTPUT);';
   Blockly.Arduino.setups_['setup_output_7'] = 'pinMode(7, OUTPUT);';
   Blockly.Arduino.setups_['setup_output_w4'] = 'digitalWrite(4, LOW);';
   Blockly.Arduino.setups_['setup_output_w5'] = 'digitalWrite(5, LOW);';
   Blockly.Arduino.setups_['setup_output_w6'] = 'digitalWrite(6, LOW);';
   Blockly.Arduino.setups_['setup_output_w7'] = 'digitalWrite(7, LOW);';
   var funcName='setRomeoMotor';
   var code2='void '+funcName+'(int motorId, int speed) {\n' 
	+ '  int speedPin, directionPin;\n'
	+ '  if (motorId == 1){\n'
	+ '  	speedPin = 5;\n'
	+ '  	directionPin = 4;\n'
	+ '  } else {\n'
	+ '  	if (motorId == 2){\n'
	+ '  		speedPin = 6;\n'
	+ '  		directionPin = 7;\n'
	+ '  	} else {\n'
	+ '  		return;\n'
	+ '  	}\n'
	+ '  }\n'
	+ '  if (speed == 0){\n'
	+ '  	digitalWrite(speedPin, LOW);\n'
	+ '  }\n'
	+ '  if (speed > 0){\n'
	+ '  	digitalWrite(directionPin, HIGH);\n'
	+ '  	analogWrite(speedPin, speed);\n'
	+ '  } else {\n'
	+ '  	digitalWrite(directionPin, LOW);\n'
	+ '  	analogWrite(speedPin, -speed);\n'
	+ '  }\n'
	+ '}\n';
    Blockly.Arduino.definitions_[funcName] = code2;
   return code;
};
//机械臂初始化
Blockly.Arduino.df_servosetting = function() {
  //var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['define_DFRobotOA1Calculation'] = '#include "DFRobotOA1Calculation.h"';
  Blockly.Arduino.definitions_['define_DFRobotOA1Setting'] = '#include "DFRobotOA1Setting.h"';
  Blockly.Arduino.definitions_['define_DFRobotOA1Control'] = '#include "DFRobotOA1Control.h"';
  
  Blockly.Arduino.definitions_['var_control'] = 'DFRobotOA1Control control;';
  Blockly.Arduino.definitions_['var_mySetting'] = 'DFRobotOA1Setting mySetting;';
  
  Blockly.Arduino.setups_['setup_df_setting1'] = 'mySetting.ServoSetting();';
  Blockly.Arduino.setups_['setup_df_setting2'] = 'mySetting.setMyarm(140,152,50);';
  Blockly.Arduino.setups_['setup_df_setting3'] = 'mySetting.initialization(155,0,40,1);';
  
  var code = '';
  return code;
};
//机械臂左转
Blockly.Arduino.df_turnleft = function() {
  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['define_DFRobotOA1Calculation'] = '#include "DFRobotOA1Calculation.h"';
  Blockly.Arduino.definitions_['define_DFRobotOA1Setting'] = '#include "DFRobotOA1Setting.h"';
  Blockly.Arduino.definitions_['define_DFRobotOA1Control'] = '#include "DFRobotOA1Control.h"';
  
  Blockly.Arduino.definitions_['var_control'] = 'DFRobotOA1Control control;';
  Blockly.Arduino.definitions_['var_mySetting'] = 'DFRobotOA1Setting mySetting;';
  
  Blockly.Arduino.setups_['setup_df_setting1'] = 'mySetting.ServoSetting();';
  Blockly.Arduino.setups_['setup_df_setting2'] = 'mySetting.setMyarm(140,152,50);';
  Blockly.Arduino.setups_['setup_df_setting3'] = 'mySetting.initialization(155,0,40,1);';
  var code = 'control.LeftTurn(); \n';
  return code;
};
//机械臂右转
Blockly.Arduino.df_turnright = function() {
  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['define_DFRobotOA1Calculation'] = '#include "DFRobotOA1Calculation.h"';
  Blockly.Arduino.definitions_['define_DFRobotOA1Setting'] = '#include "DFRobotOA1Setting.h"';
  Blockly.Arduino.definitions_['define_DFRobotOA1Control'] = '#include "DFRobotOA1Control.h"';
  
  Blockly.Arduino.definitions_['var_control'] = 'DFRobotOA1Control control;';
  Blockly.Arduino.definitions_['var_mySetting'] = 'DFRobotOA1Setting mySetting;';
  
  Blockly.Arduino.setups_['setup_df_setting1'] = 'mySetting.ServoSetting();';
  Blockly.Arduino.setups_['setup_df_setting2'] = 'mySetting.setMyarm(140,152,50);';
  Blockly.Arduino.setups_['setup_df_setting3'] = 'mySetting.initialization(155,0,40,1);';
  var code = 'control.RightTurn(); \n';
  return code;
};
//机械臂伸展
Blockly.Arduino.df_spread = function() {
  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['define_DFRobotOA1Calculation'] = '#include "DFRobotOA1Calculation.h"';
  Blockly.Arduino.definitions_['define_DFRobotOA1Setting'] = '#include "DFRobotOA1Setting.h"';
  Blockly.Arduino.definitions_['define_DFRobotOA1Control'] = '#include "DFRobotOA1Control.h"';
  
  Blockly.Arduino.definitions_['var_control'] = 'DFRobotOA1Control control;';
  Blockly.Arduino.definitions_['var_mySetting'] = 'DFRobotOA1Setting mySetting;';
  
  Blockly.Arduino.setups_['setup_df_setting1'] = 'mySetting.ServoSetting();';
  Blockly.Arduino.setups_['setup_df_setting2'] = 'mySetting.setMyarm(140,152,50);';
  Blockly.Arduino.setups_['setup_df_setting3'] = 'mySetting.initialization(155,0,40,1);';
  var code = 'control.Spread(); \n';
  return code;
};
//机械臂收缩
Blockly.Arduino.df_shrink = function() {
  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['define_DFRobotOA1Calculation'] = '#include "DFRobotOA1Calculation.h"';
  Blockly.Arduino.definitions_['define_DFRobotOA1Setting'] = '#include "DFRobotOA1Setting.h"';
  Blockly.Arduino.definitions_['define_DFRobotOA1Control'] = '#include "DFRobotOA1Control.h"';
  
  Blockly.Arduino.definitions_['var_control'] = 'DFRobotOA1Control control;';
  Blockly.Arduino.definitions_['var_mySetting'] = 'DFRobotOA1Setting mySetting;';
  
  Blockly.Arduino.setups_['setup_df_setting1'] = 'mySetting.ServoSetting();';
  Blockly.Arduino.setups_['setup_df_setting2'] = 'mySetting.setMyarm(140,152,50);';
  Blockly.Arduino.setups_['setup_df_setting3'] = 'mySetting.initialization(155,0,40,1);';
  var code = 'control.Shrink(); \n';
  return code;
};
//机械臂上升
Blockly.Arduino.df_up = function() {
  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['define_DFRobotOA1Calculation'] = '#include "DFRobotOA1Calculation.h"';
  Blockly.Arduino.definitions_['define_DFRobotOA1Setting'] = '#include "DFRobotOA1Setting.h"';
  Blockly.Arduino.definitions_['define_DFRobotOA1Control'] = '#include "DFRobotOA1Control.h"';
  
  Blockly.Arduino.definitions_['var_control'] = 'DFRobotOA1Control control;';
  Blockly.Arduino.definitions_['var_mySetting'] = 'DFRobotOA1Setting mySetting;';
  
  Blockly.Arduino.setups_['setup_df_setting1'] = 'mySetting.ServoSetting();';
  Blockly.Arduino.setups_['setup_df_setting2'] = 'mySetting.setMyarm(140,152,50);';
  Blockly.Arduino.setups_['setup_df_setting3'] = 'mySetting.initialization(155,0,40,1);';
  var code = 'control.up(); \n';
  return code;
};
//机械臂下降
Blockly.Arduino.df_down = function() {
  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['define_DFRobotOA1Calculation'] = '#include "DFRobotOA1Calculation.h"';
  Blockly.Arduino.definitions_['define_DFRobotOA1Setting'] = '#include "DFRobotOA1Setting.h"';
  Blockly.Arduino.definitions_['define_DFRobotOA1Control'] = '#include "DFRobotOA1Control.h"';
  
  Blockly.Arduino.definitions_['var_control'] = 'DFRobotOA1Control control;';
  Blockly.Arduino.definitions_['var_mySetting'] = 'DFRobotOA1Setting mySetting;';
  
  Blockly.Arduino.setups_['setup_df_setting1'] = 'mySetting.ServoSetting();';
  Blockly.Arduino.setups_['setup_df_setting2'] = 'mySetting.setMyarm(140,152,50);';
  Blockly.Arduino.setups_['setup_df_setting3'] = 'mySetting.initialization(155,0,40,1);';
  var code = 'control.down(); \n';
  return code;
};
//机械臂手腕右转
Blockly.Arduino.df_wristright = function() {
  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['define_DFRobotOA1Calculation'] = '#include "DFRobotOA1Calculation.h"';
  Blockly.Arduino.definitions_['define_DFRobotOA1Setting'] = '#include "DFRobotOA1Setting.h"';
  Blockly.Arduino.definitions_['define_DFRobotOA1Control'] = '#include "DFRobotOA1Control.h"';
  
  Blockly.Arduino.definitions_['var_control'] = 'DFRobotOA1Control control;';
  Blockly.Arduino.definitions_['var_mySetting'] = 'DFRobotOA1Setting mySetting;';
  
  Blockly.Arduino.setups_['setup_df_setting1'] = 'mySetting.ServoSetting();';
  Blockly.Arduino.setups_['setup_df_setting2'] = 'mySetting.setMyarm(140,152,50);';
  Blockly.Arduino.setups_['setup_df_setting3'] = 'mySetting.initialization(155,0,40,1);';
  var code = 'control.rroll(); \n';
  return code;
};
//机械臂手腕左转
Blockly.Arduino.df_wristleft = function() {
  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['define_DFRobotOA1Calculation'] = '#include "DFRobotOA1Calculation.h"';
  Blockly.Arduino.definitions_['define_DFRobotOA1Setting'] = '#include "DFRobotOA1Setting.h"';
  Blockly.Arduino.definitions_['define_DFRobotOA1Control'] = '#include "DFRobotOA1Control.h"';
  
  Blockly.Arduino.definitions_['var_control'] = 'DFRobotOA1Control control;';
  Blockly.Arduino.definitions_['var_mySetting'] = 'DFRobotOA1Setting mySetting;';
  
  Blockly.Arduino.setups_['setup_df_setting1'] = 'mySetting.ServoSetting();';
  Blockly.Arduino.setups_['setup_df_setting2'] = 'mySetting.setMyarm(140,152,50);';
  Blockly.Arduino.setups_['setup_df_setting3'] = 'mySetting.initialization(155,0,40,1);';
  var code = 'control.lroll(); \n';
  return code;
};
//机械爪打开
Blockly.Arduino.df_pawopen = function() {
  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['define_DFRobotOA1Calculation'] = '#include "DFRobotOA1Calculation.h"';
  Blockly.Arduino.definitions_['define_DFRobotOA1Setting'] = '#include "DFRobotOA1Setting.h"';
  Blockly.Arduino.definitions_['define_DFRobotOA1Control'] = '#include "DFRobotOA1Control.h"';
  
  Blockly.Arduino.definitions_['var_control'] = 'DFRobotOA1Control control;';
  Blockly.Arduino.definitions_['var_mySetting'] = 'DFRobotOA1Setting mySetting;';
  
  Blockly.Arduino.setups_['setup_df_setting1'] = 'mySetting.ServoSetting();';
  Blockly.Arduino.setups_['setup_df_setting2'] = 'mySetting.setMyarm(140,152,50);';
  Blockly.Arduino.setups_['setup_df_setting3'] = 'mySetting.initialization(155,0,40,1);';
  var code = 'control.ope(); \n';
  return code;
};
//机械爪闭合
Blockly.Arduino.df_pawclose = function() {
  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['define_DFRobotOA1Calculation'] = '#include "DFRobotOA1Calculation.h"';
  Blockly.Arduino.definitions_['define_DFRobotOA1Setting'] = '#include "DFRobotOA1Setting.h"';
  Blockly.Arduino.definitions_['define_DFRobotOA1Control'] = '#include "DFRobotOA1Control.h"';
  
  Blockly.Arduino.definitions_['var_control'] = 'DFRobotOA1Control control;';
  Blockly.Arduino.definitions_['var_mySetting'] = 'DFRobotOA1Setting mySetting;';
  
  Blockly.Arduino.setups_['setup_df_setting1'] = 'mySetting.ServoSetting();';
  Blockly.Arduino.setups_['setup_df_setting2'] = 'mySetting.setMyarm(140,152,50);';
  Blockly.Arduino.setups_['setup_df_setting3'] = 'mySetting.initialization(155,0,40,1);';
  var code = 'control.cls(); \n';
  return code;
};
//气泵打开
Blockly.Arduino.df_pumpon = function() {
  var code = 'control.pumpOn(); \ncontrol.valveOff(); \n';
  return code;
};
//气泵关闭
Blockly.Arduino.df_pumpoff = function() {
  var code = 'control.pumpOff(); \ncontrol.valveOn(); \n';
  return code;
};
//语音识别初始化
Blockly.Arduino.df_VoiceRecognitionInit = function() {
  Blockly.Arduino.definitions_['define_VoiceRecognition'] = '#include "VoiceRecognition.h"';
  
  Blockly.Arduino.definitions_['var_control'] = 'VoiceRecognition Voice;';
  
  Blockly.Arduino.setups_['setup_df_VoiceInit'] = 'Voice.init();';
  
  var code = '';
  return code;
};

//设置语音识别指令
Blockly.Arduino.df_VoiceAddCommand = function() {
  var str1 = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")'
  var index = Blockly.Arduino.valueToCode(this, 'index',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   
  var code = 'Voice.addCommand('+str1+','+index+');\n'
  return code;
};

//开始语音识别
Blockly.Arduino.df_VoiceStart = function() {	 
  var code = 'Voice.start();\n'
  return code;
};

//返回语音识别结果
Blockly.Arduino.df_VoiceRead = function() {
  var code = 'Voice.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/***************************语音识别控制板**********************************/
//语音识别控制板初始化
Blockly.Arduino.df_ASRInit = function() {	     	  
  Blockly.Arduino.definitions_['define_ASRB1'] = '#include "ASRB.h"';
  Blockly.Arduino.definitions_['define_ASRB2'] = '#include "EEPROM.h"';
  Blockly.Arduino.definitions_['define_ASRB3'] = '#include "SPI.h"';
  Blockly.Arduino.definitions_['define_ASRB4'] = '#include "SoftwareSerial.h"';
  
  Blockly.Arduino.definitions_['var_ASR_sRecog'] = 'char sRecog['+35+']['+38+'] = {'+'"'+"kai deng"+'"'+','+'"'+"guan deng"+'"'+','+'"'+"zhun bei"+'"'+'};\n';
  Blockly.Arduino.definitions_['var_ASR_fDigit'] = 'unsigned int fDigit['+35+'] = {'+252+','+253+','+254+'};\n';
  
  
  Blockly.Arduino.setups_['setup_ASRB_INIT'] = 'ASRB.Initialise(35,sRecog,fDigit);';
  
  var funcName='ExtInt0Handler';

  var code='void '+funcName+'()'+'{\n'
  +'	ASRB.ProcessInt0();\n'
  +'}\n';
  Blockly.Arduino.definitions_[funcName] = code;
  Blockly.Arduino.setups_['setup_attachInterrupt'] = 'attachInterrupt(0,'+funcName+',LOW);';
  
  return '';
};

//返回ASR识别结果
Blockly.Arduino.df_ASRResult = function(){
	var code = 'ASRB.Asr'+'(35,38,sRecog,fDigit,0)'
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//判断ASR是否忙碌
Blockly.Arduino.df_ASRBusy = function(){	
	var code = 'ASRB.Busy_SD();\n'
    return code;
};

Blockly.Arduino.df_urm10 = function() {
  var dropdown_pin = this.getFieldValue('PIN');
   var code='readUrm10(8, 12)';
   Blockly.Arduino.setups_['setup_output_8'] = 'pinMode(8, OUTPUT);';
   Blockly.Arduino.setups_['setup_input_12'] = 'pinMode(12, INPUT);';
   Blockly.Arduino.setups_['setup_output_w8'] = 'digitalWrite(8, HIGH);';
   var funcName='readUrm10';
   var code2='int '+funcName+'(int trigPin, int echoPin) \n' 
  + '{  long duration;\n'
  + '  pinMode(trigPin, OUTPUT);\n'
  + '  pinMode(echoPin, INPUT);\n'
  + '  digitalWrite(trigPin, LOW);\n'
  + '  digitalWrite(trigPin, HIGH);\n'
  + '  duration = pulseIn(echoPin, LOW);\n'
  + '  duration = duration / 59;\n'
  + '  if ((duration <=0) || (duration > 45000)) return false;\n'
  + '  delay(30);\n'
  + '  return duration;\n'
  + '  }\n'  ;
  

    Blockly.Arduino.definitions_[funcName] = code2;
   return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.df_temperature = function(){
	var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
	var code = 'readLM35('+dropdown_pin+')';
	var funcName='readLM35';	
	//val code2='int'+funcName+'(int pinval)\n'
	//+'{ int return (analogRead(pinval)*(5.0/10.24)); }\n';
	// Blockly.Arduino.definitions_[funcName] = code2;
	   var code2='int '+funcName+'(int pinval) \n' 
  + '{  uint16_t val;\n'
  + '   double dat;\n'
  + '   val=analogRead('+dropdown_pin+');\n'
  + '   dat = (double) val * (5.0/10.24); \n'
  + '   return dat;\n'
  + '}\n'  ;
  

    Blockly.Arduino.definitions_[funcName] = code2;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.df_led = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'
  return code;
};

Blockly.Arduino.df_buzzer = Blockly.Arduino.df_led;

Blockly.Arduino.df_buzzer2=function(){
   var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
   var fre = Blockly.Arduino.valueToCode(this, 'FREQUENCY',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   var code="tone("+dropdown_pin+","+fre+");\n";
   Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
   return code;
};

Blockly.Arduino.df_buzzer3=function(){
   var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
   var fre = Blockly.Arduino.valueToCode(this, 'FREQUENCY',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   var dur = Blockly.Arduino.valueToCode(this, 'DURATION',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   var code="tone("+dropdown_pin+","+fre+","+dur+");\n";
   Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
   return code;
};

Blockly.Arduino.df_btn = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.df_pengzhuang = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.df_vibration = Blockly.Arduino.df_btn;
Blockly.Arduino.df_tilt = Blockly.Arduino.df_btn;
Blockly.Arduino.df_touch = Blockly.Arduino.df_btn;
Blockly.Arduino.df_magnetic = Blockly.Arduino.df_btn;
Blockly.Arduino.df_pyroelectric_infrared = Blockly.Arduino.df_btn;
Blockly.Arduino.df_joystick_d = Blockly.Arduino.df_btn;

Blockly.Arduino.df_potentiometer = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.df_joystick_a = Blockly.Arduino.df_potentiometer;
Blockly.Arduino.df_rotation = Blockly.Arduino.df_potentiometer;
Blockly.Arduino.df_voltage = Blockly.Arduino.df_potentiometer;
Blockly.Arduino.df_piezo_disk_virbration = Blockly.Arduino.df_potentiometer;
Blockly.Arduino.df_sound = Blockly.Arduino.df_potentiometer;

Blockly.Arduino.df_light = Blockly.Arduino.df_potentiometer;

Blockly.Arduino.df_grayscale = Blockly.Arduino.df_potentiometer;

Blockly.Arduino.df_flame = Blockly.Arduino.df_potentiometer;



Blockly.Arduino.df_accelerometer = Blockly.Arduino.df_potentiometer;

Blockly.Arduino.df_moisture = Blockly.Arduino.df_potentiometer;
Blockly.Arduino.df_water = Blockly.Arduino.df_potentiometer;

Blockly.Arduino.df_co = Blockly.Arduino.df_potentiometer;
Blockly.Arduino.df_Sharp_GP2Y0A21 = Blockly.Arduino.df_potentiometer;

Blockly.Arduino.df_relay = Blockly.Arduino.df_led;

Blockly.Arduino.df_lcd_print = function() {
  var str1 = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")'
  var str2 = Blockly.Arduino.valueToCode(this, 'TEXT2', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")'
  Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['define_df_lcd'] = '#include <LiquidCrystal_I2C.h>';
  Blockly.Arduino.definitions_['var_df_lcd'] = 'LiquidCrystal_I2C df_lcd(0x20,16,2);';
  Blockly.Arduino.setups_['setup_df_lcd1'] = 'df_lcd.init();';
  Blockly.Arduino.setups_['setup_df_lcd2'] = 'df_lcd.backlight();';
  var code = 'df_lcd.setCursor(0, 0);\n'
  code+='df_lcd.print('+str1+');\n';
  code+='df_lcd.setCursor(0, 1);\n';
  code+='df_lcd.print('+str2+');\n';
  return code;
};

Blockly.Arduino.df_lcd_power = function() {
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['define_df_lcd'] = '#include <LiquidCrystal_I2C.h>';
  Blockly.Arduino.definitions_['var_df_lcd'] = 'LiquidCrystal_I2C df_lcd(0x20,16,2);';
  Blockly.Arduino.setups_['setup_df_lcd1'] = 'df_lcd.init();';
  Blockly.Arduino.setups_['setup_df_lcd2'] = 'df_lcd.backlight();';
  var code = 'df_lcd.'+dropdown_stat+'();\n'
  return code;
};