'use strict';
goog.provide('Blockly.Blocks.esp8266wifi');
goog.provide('Blockly.Blocks.geekinsect');
goog.require('Blockly.Blocks');

Blockly.Blocks.esp8266wifi.HUE = 100;
Blockly.Blocks.geekinsect.HUE = 77;

Blockly.Blocks.geekinsect_moto = {
  init: function() {
    this.setColour(Blockly.Blocks.geekinsect.HUE);
    this.appendValueInput('VALUE1')
        .appendField(Blockly.MIXLY_GEEKINSECT_MOTO_BEGIN)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_GEEKINSECT_MOTO_LEFT);
    this.appendValueInput('VALUE2')
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_GEEKINSECT_MOTO_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
  }
};
Blockly.Blocks.geekinsect_ws2812 = {
  init: function() {
    this.setColour(Blockly.Blocks.geekinsect.HUE);
    this.appendDummyInput()
        .appendField("全彩灯珠")
        .appendField(new Blockly.FieldDropdown([["两眼睛", 'Ethernet'],["前腹灯",'Ethernet2'],["后腹灯",'Ethernet3']]), "Ethernet");
    this.appendValueInput("VALUE1", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("红色");
    this.appendValueInput("VALUE2", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("绿色");
    this.appendValueInput("VALUE3", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("蓝色");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks.geekinsect_beep = {
  init: function() {
    this.setColour(Blockly.Blocks.geekinsect.HUE);
    this.appendDummyInput()
        .appendField("蜂鸣器")
        .appendField(new Blockly.FieldDropdown([["哆", '0'],["约",'1'],["眯",'2'],["发",'3'],["索",'4'],["拉",'5'],["夕",'6']]), "VALUE1");
    this.appendDummyInput()
        .appendField("节拍")
        .appendField(new Blockly.FieldDropdown([["1/4", '1'],["2/4",'2'],["3/4",'3'],["4/4",'4']]), "VALUE2");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
  }
};
Blockly.Blocks.geekinsect_readir = {
  init: function() {
    this.setColour(Blockly.Blocks.geekinsect.HUE);
    this.appendDummyInput()
        .appendField("红外接收");
    this.setOutput(true, Number);
  }
};
Blockly.Blocks.geekinsect_algo = {
  init: function() {
    this.setColour(Blockly.Blocks.geekinsect.HUE);
    //this.appendDummyInput()
    //    .appendField("陀螺仪");
    this.appendDummyInput()
        .appendField("陀螺仪 参数")
        .appendField(new Blockly.FieldDropdown([["X加速度", '0'],["Y加速度",'1'],["Z加速度",'2'],["陀螺仪X",'3'],["陀螺仪Y",'4'],["陀螺仪Z",'5']]), "VALUE1");
    this.setOutput(true, Number);
  }
};
Blockly.Blocks.geekinsect_sendir = {
  init: function() {
    this.setColour(Blockly.Blocks.geekinsect.HUE);
    this.appendValueInput("VALUE1", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("红外发送");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
  }
};
Blockly.Blocks.geekinsect_longsensor = {
  init: function() {
    this.setColour(Blockly.Blocks.geekinsect.HUE);
        this.appendDummyInput("input")
        .appendField("距离传感器 位置#")
        .appendField(new Blockly.FieldDropdown([["左接近", '0'],["右接近",'1']]), "VALUE1");
    this.setOutput(true, Number);
  }
};
Blockly.Blocks.geekinsect_lightsensor = {
  init: function() {
    this.setColour(Blockly.Blocks.geekinsect.HUE);
        this.appendDummyInput("input")
        .appendField("光线传感 位置#")
        .appendField(new Blockly.FieldDropdown([["左边", "INPUT"], ["右边", "OUTPUT"], [Blockly.MIXLY_PINMODEPULLUP, "INPUT_PULLUP"]]),"MODE")
    this.setInputsInline(true);
    this.setOutput(true, Number);
  }
};
Blockly.Blocks.geekinsect_xeopixel = {
    init: function() {
        this.setColour(Blockly.Blocks.geekinsect.HUE); //设置模块颜色
        this.appendDummyInput()
        .appendField("全彩灯珠")
        .appendField(new Blockly.FieldDropdown([["眼睛", '0'],["前腹灯",'1'],["后腹灯",'2']]), "RGBIndex");
        this.appendDummyInput("") 
            //            .appendField(new Blockly.FieldImage("../../media/kadapapa/jupiter.png", 40, 40))
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendTitle("颜色")
            .appendField(new Blockly.FieldColour("#FF0000"), "RGBColor");
        this.setPreviousStatement(true, null); //是否有上面三角
        this.setNextStatement(true, null); //是否有下三角
        this.setInputsInline(true); //模块集成一行，输入在模块内部
        this.setTooltip('hello world'); //鼠标停留在模块上显示的内容
    }
};
Blockly.Blocks.esp8266wifi_begin = {
  init: function() {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendValueInput("ssid")
        .appendField(Blockly.MIXLY_ESP8266WIFI_BEGIN)
		.appendField(Blockly.MIXLY_ESP8266WIFI_SSID)
        .setCheck(String);
    this.appendValueInput("password")
        .appendField(Blockly.MIXLY_ESP8266WIFI_PASSWORD)
		.setAlign(Blockly.ALIGN_RIGHT)
        .setCheck(String);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['esp8266wifi_local_ip'] = {
  init: function() {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_ESP8266WIFI_LOCALIP);
    this.setOutput(true, 'IPAddress');
  }
};

Blockly.Blocks['esp8266wifi_client_connect_host']={
  init: function() {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_ESP8266WIFI_CLINET_CONNECT_HOST)
		.appendField(this.newQuote_(true))
        .appendField(new Blockly.FieldTextInput('mixly.org'), 'HOST')
        .appendField(this.newQuote_(false));
	this.appendValueInput('PORT')
		.setCheck(Number)
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_ESP8266WIFI_CLINET_PORT);
    this.setOutput(true, Number);
	this.setInputsInline(true);
  },
  newQuote_: function(open) {
    if (open == this.RTL) {
      var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==';
    } else {
      var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC';
    }
    return new Blockly.FieldImage(file, 12, 12, '"');
  }
}

Blockly.Blocks['esp8266wifi_client_connected'] = {
  init: function() {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_ESP8266WIFI_CLINET_CONNECTED);
    this.setOutput(true, Number);
  }
};

Blockly.Blocks['esp8266wifi_client_available'] = {
  init: function() {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_ESP8266WIFI_CLINET_AVAILABLE);
    this.setOutput(true, Number);
  }
};

Blockly.Blocks['esp8266wifi_client_read'] = {
  init: function() {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_ESP8266WIFI_CLINET_READ);
    this.setOutput(true, Number);
  }
};

Blockly.Blocks['esp8266wifi_client_print'] = {
  init: function() {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
	this.appendValueInput('TEXT')
		.setCheck(String)
        .appendField(Blockly.MIXLY_ESP8266WIFI_CLINET_PRINT);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['esp8266wifi_client_println'] = {
  init: function() {
    this.setColour(Blockly.Blocks.esp8266wifi.HUE);
	this.appendValueInput('TEXT')
		.setCheck(String)
        .appendField(Blockly.MIXLY_ESP8266WIFI_CLINET_PRINTLN);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};