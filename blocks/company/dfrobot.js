'use strict';

goog.provide('Blockly.Blocks.dfrobot');

goog.require('Blockly.Blocks');


Blockly.Blocks.dfrobot.HUE = 300;

var DF_MS=[["M1", "1"],["M2", "2"]];

Blockly.Blocks.df_romeo_motor={
init:function(){
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.MIXLY_ROMEO_MOTOR)
		.appendField("#")
	    .appendField(new Blockly.FieldDropdown(DF_MS), "PIN");
    this.appendValueInput('speed')
        .setCheck(Number)
        .appendField(Blockly.MIXLY_ROMEO_MOTOR_SPEED);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
Blockly.Blocks.df_romeo_motor_stop={
init:function(){
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.MIXLY_ROMEO_MOTOR)
		.appendField("#")
	    .appendField(new Blockly.FieldDropdown(DF_MS), "PIN")
		.appendField(Blockly.MIXLY_STOP);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
//机械臂初始化
Blockly.Blocks.df_servosetting={
init:function(){
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.MIXLY_SERVOSETTING)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
//机械臂左转
Blockly.Blocks.df_turnleft={
init:function(){
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.MIXLY_TURNLEFT)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

//机械臂右转
Blockly.Blocks.df_turnright={
init:function(){
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.MIXLY_TURNRIGHT)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
//机械臂伸展
Blockly.Blocks.df_spread={
init:function(){
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.MIXLY_SPREAD)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
//机械臂收缩
Blockly.Blocks.df_shrink={
init:function(){
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.MIXLY_SHRINK)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
//机械臂上升
Blockly.Blocks.df_up={
init:function(){
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.MIXLY_UP)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
//机械臂下降
Blockly.Blocks.df_down={
init:function(){
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.MIXLY_DOWN)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
//机械臂手腕右转
Blockly.Blocks.df_wristright={
init:function(){
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.MIXLY_WRISTRIGHT)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
//机械臂手腕左转
Blockly.Blocks.df_wristleft={
init:function(){
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.MIXLY_WRISTLEFT)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
//机械爪打开
Blockly.Blocks.df_pawopen={
init:function(){
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.MIXLY_PAWOPEN)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
//机械爪闭合
Blockly.Blocks.df_pawclose={
init:function(){
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.MIXLY_PAWCLOSE)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
//气泵打开
Blockly.Blocks.df_pumpon={
init:function(){
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.MIXLY_PUMPON)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
//气泵关闭
Blockly.Blocks.df_pumpoff={
init:function(){
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.MIXLY_PUMPOFF)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
/***************************语音识别扩展板**********************************/
//语音识别初始化
Blockly.Blocks.df_VoiceRecognitionInit = {
init:function(){
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.MIXLY_VOICEINIT)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
//开始语音识别
Blockly.Blocks.df_VoiceStart = {
init:function(){
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.MIXLY_VOICESTART)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
//设置语音识别指令
Blockly.Blocks.df_VoiceAddCommand = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_VOICEADDCOMMAND)
    this.appendValueInput("TEXT", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
	this.appendValueInput('index')
        .setCheck(Number)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
//返回语音识别结果
Blockly.Blocks.df_VoiceRead = {
init:function(){
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.MIXLY_VOICEREAD)
    this.setInputsInline(true);
	this.setOutput(true, Number);
    /*this.setPreviousStatement(true);
    this.setNextStatement(true);*/
  }
};
/***************************语音识别控制板**********************************/
//初始化
Blockly.Blocks.df_ASRInit = {
  init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
	this.appendDummyInput("")
        .appendField(Blockly.MIXLY_ASRINIT)      
	this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

//返回语音识别结果
Blockly.Blocks.df_ASRResult = {
init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
	this.appendDummyInput("")
        .appendField(Blockly.MIXLY_ASRRESULT)
	this.setInputsInline(true);
	this.setOutput(true, Number);
    /*this.setPreviousStatement(true);
    this.setNextStatement(true);*/
  }
};

//判断语音识别是否忙碌
Blockly.Blocks.df_ASRBusy = {
init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
	this.appendDummyInput("")
        .appendField(Blockly.MIXLY_ASRBUSY)
	this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.df_urm10 = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
        .appendField("urm10超声波（适配探索者D1机器人）")
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};
Blockly.Blocks.df_temperature = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
        .appendField("模拟温度（LM35）")
    .appendField(new Blockly.FieldImage("../../media/dfrobot/df_temperature.png", 47, 32));
  this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
  this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

Blockly.Blocks.df_led = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.MIXLY_DF_LED)
		.appendField(new Blockly.FieldImage("../../media/dfrobot/df_led.png", 43, 32));
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
	this.appendDummyInput("")
		.appendField(Blockly.MIXLY_STAT)
      	.appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_ON, "HIGH"], [Blockly.MIXLY_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.df_buzzer = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.MIXLY_DF_BUZZER)
		.appendField(new Blockly.FieldImage("../../media/dfrobot/df_buzzer.png", 39, 32));   	
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
	this.appendDummyInput("")
		.appendField(Blockly.MIXLY_STAT)
      	.appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_ON, "HIGH"], [Blockly.MIXLY_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.df_buzzer2={
init:function(){
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.MIXLY_DF_BUZZER)
		.appendField(new Blockly.FieldImage("../../media/dfrobot/df_buzzer.png", 39, 32));   	
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.appendValueInput('FREQUENCY')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_FREQUENCY);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.df_buzzer3={
init:function(){
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.MIXLY_DF_BUZZER)
		.appendField(new Blockly.FieldImage("../../media/dfrobot/df_buzzer.png", 39, 32));   	
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.appendValueInput('FREQUENCY')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_FREQUENCY);
    this.appendValueInput('DURATION')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_DURATION);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.df_btn = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	      .appendField(Blockly.MIXLY_DF_BTN)
		  .appendField(new Blockly.FieldImage("../../media/dfrobot/df_btn.png", 37, 32));
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.setOutput(true, Boolean);
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks.df_pengzhuang = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	      .appendField(Blockly.MIXLY_DF_PENGZHUANG)
		  .appendField(new Blockly.FieldImage("../../media/dfrobot/df_jixiebi.png", 37, 32));
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.setOutput(true, Boolean);
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks.df_vibration = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	      .appendField(Blockly.MIXLY_DF_VIBRATION)
		  .appendField(new Blockly.FieldImage("../../media/dfrobot/df_vibration.png", 38, 32));
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.setOutput(true, Boolean);
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks.df_tilt = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	      .appendField(Blockly.MIXLY_DF_TILT)
		  .appendField(new Blockly.FieldImage("../../media/dfrobot/df_tilt.png", 41, 32));
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.setOutput(true, Boolean);
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks.df_touch = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	      .appendField(Blockly.MIXLY_DF_TOUCH)
		  .appendField(new Blockly.FieldImage("../../media/dfrobot/df_touch.png", 41, 32));
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.setOutput(true, Boolean);
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks.df_magnetic = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	      .appendField(Blockly.MIXLY_DF_MAGNETIC)
		  .appendField(new Blockly.FieldImage("../../media/dfrobot/df_magnetic.png", 36, 32));
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.setOutput(true, Boolean);
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks.df_pyroelectric_infrared = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	      .appendField(Blockly.MIXLY_DF_PYROELECTRIC_INFRARED)
		  .appendField(new Blockly.FieldImage("../../media/dfrobot/df_pyroelectric_infrared.png", 41, 32));
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.setOutput(true, Boolean);
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks.df_joystick_d = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	      .appendField(Blockly.MIXLY_DF_JOYSTICK_D)
		  .appendField(new Blockly.FieldImage("../../media/dfrobot/df_joystick.png", 35, 32));
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.setOutput(true, Boolean);
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks.df_joystick_a = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_DF_JOYSTICK_A)
		.appendField(new Blockly.FieldDropdown([["x", "x"], ["y", "y"]]), "STAT")
		.appendField(new Blockly.FieldImage("../../media/dfrobot/df_joystick.png", 35, 32));
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
	this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

Blockly.Blocks.df_potentiometer = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_DF_POTENTIOMETER)
		.appendField(new Blockly.FieldImage("../../media/dfrobot/df_potentiometer.png", 42, 32));
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
	this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

Blockly.Blocks.df_rotation = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_DF_ROTATION)
		.appendField(new Blockly.FieldImage("../../media/dfrobot/df_rotation.png", 42, 32));
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
	this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

Blockly.Blocks.df_voltage = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_DF_VOLTAGE)
		.appendField(new Blockly.FieldImage("../../media/dfrobot/df_voltage.png", 39, 32));
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
	this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

Blockly.Blocks.df_piezo_disk_virbration = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_DF_PIEZO_DISK_VIRBRATION)
		.appendField(new Blockly.FieldImage("../../media/dfrobot/df_piezo_disk_virbration.png", 57, 32));
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
	this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};


Blockly.Blocks.df_sound = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_DF_SOUND)
		.appendField(new Blockly.FieldImage("../../media/dfrobot/df_sound.png", 37, 32));
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
	this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

Blockly.Blocks.df_light = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_DF_LIGHT)
		.appendField(new Blockly.FieldImage("../../media/dfrobot/df_light.png", 40, 32));
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
	this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

Blockly.Blocks.df_grayscale = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_DF_GRAYSCALE)
		.appendField(new Blockly.FieldImage("../../media/dfrobot/df_grayscale.png", 46, 32));
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
	this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

Blockly.Blocks.df_flame = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_DF_FLAME)
		.appendField(new Blockly.FieldImage("../../media/dfrobot/df_flame.png", 41, 32));
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
	this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

Blockly.Blocks.df_accelerometer = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_DF_ACCELEROMETER)
		.appendField(new Blockly.FieldDropdown([["x", "x"], ["y", "y"], ["z", "z"]]), "STAT")
		.appendField(new Blockly.FieldImage("../../media/dfrobot/df_accelerometer.png", 39, 32));
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
	this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

Blockly.Blocks.df_moisture = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_DF_MOISTURE)
		.appendField(new Blockly.FieldImage("../../media/dfrobot/df_moisture.png", 79, 32));
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
	this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

Blockly.Blocks.df_water = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_DF_WATER)
		.appendField(new Blockly.FieldImage("../../media/dfrobot/df_water.png", 51, 32));
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
	this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

Blockly.Blocks.df_co = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_DF_CO)
		.appendField(new Blockly.FieldImage("../../media/dfrobot/df_co.png", 37, 32));
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
	this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

Blockly.Blocks.df_Sharp_GP2Y0A21 = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_DF_SHARP_GP2Y0A21)
		.appendField(new Blockly.FieldImage("../../media/dfrobot/df_Sharp_GP2Y0A21.png", 38, 32));
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
	this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

Blockly.Blocks.df_relay = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.MIXLY_DF_RELAY)
		.appendField(new Blockly.FieldImage("../../media/dfrobot/df_relay.png", 37, 32));
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
	this.appendDummyInput("")	
      	.appendField(Blockly.MIXLY_STAT)
      	.appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_HIGH, "HIGH"], [Blockly.MIXLY_LOW, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.df_lcd_print = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_DF_LCD)
        .appendField(new Blockly.FieldImage("../../media/dfrobot/df_lcd.png", 70, 32));
    this.appendValueInput("TEXT", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_LCD_PRINT1);
    this.appendValueInput("TEXT2", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_LCD_PRINT2)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.df_lcd_power = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_DF_LCD)
        .appendField(new Blockly.FieldImage("../../media/dfrobot/df_lcd.png", 70, 32))
		.appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_LCD_STAT_ON, "display"], [Blockly.MIXLY_LCD_STAT_OFF, "noDisplay"], [Blockly.MIXLY_LCD_STAT_CURSOR, "cursor"], [Blockly.MIXLY_LCD_STAT_NOCURSOR, "noCursor"], [Blockly.MIXLY_LCD_STAT_BLINK, "blink"], [Blockly.MIXLY_LCD_STAT_NOBLINK, "noBlink"], [Blockly.MIXLY_LCD_STAT_CLEAR, "clear"]]), "STAT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};