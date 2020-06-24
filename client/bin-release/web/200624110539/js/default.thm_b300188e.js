window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/skins/common/barLoadingSkin.exml'] = window.barLoadingSkin = (function (_super) {
	__extends(barLoadingSkin, _super);
	function barLoadingSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.elementsContent = [this._Image1_i(),this.thumb_i()];
	}
	var _proto = barLoadingSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(16,13,12,11);
		t.source = "bg_login_d_png";
		t.top = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.bottom = 10;
		t.left = 6;
		t.right = 6;
		t.scale9Grid = new egret.Rectangle(9,11,9,7);
		t.source = "bg_login_nr_png";
		t.top = 6;
		return t;
	};
	return barLoadingSkin;
})(eui.Skin);generateEUI.paths['resource/skins/common/btn1Skin.exml'] = window.btn1Skin = (function (_super) {
	__extends(btn1Skin, _super);
	function btn1Skin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
	}
	var _proto = btn1Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "button_ty_blue_png";
		t.touchEnabled = false;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 11;
		t.left = 0;
		t.right = 0;
		t.text = "Label";
		t.textAlign = "center";
		t.top = 2;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	return btn1Skin;
})(eui.Skin);generateEUI.paths['resource/skins/common/btn2Skin.exml'] = window.btn2Skin = (function (_super) {
	__extends(btn2Skin, _super);
	function btn2Skin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
	}
	var _proto = btn2Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "button_ty_yellow_png";
		t.touchEnabled = false;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 11;
		t.left = 0;
		t.right = 0;
		t.text = "Label";
		t.textAlign = "center";
		t.top = 2;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	return btn2Skin;
})(eui.Skin);generateEUI.paths['resource/skins/common/HeadIconSkin.exml'] = window.HeadIconSkin = (function (_super) {
	__extends(HeadIconSkin, _super);
	function HeadIconSkin() {
		_super.call(this);
		this.skinParts = ["headIcon","headFrame"];
		
		this.height = 100;
		this.width = 100;
		this.elementsContent = [this._WGroup1_i()];
	}
	var _proto = HeadIconSkin.prototype;

	_proto._WGroup1_i = function () {
		var t = new WGroup();
		t.height = 100;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = 0;
		t.width = 100;
		t.elementsContent = [this._Image1_i(),this.headIcon_i(),this.headFrame_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(38,33,32,31);
		t.source = "bg_phb_heroicon_png";
		t.verticalCenter = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headIcon_i = function () {
		var t = new eui.Image();
		this.headIcon = t;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(38,33,32,31);
		t.source = "bg_phb_heroicon_up01_png";
		t.verticalCenter = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headFrame_i = function () {
		var t = new eui.Image();
		this.headFrame = t;
		t.horizontalCenter = 0;
		t.source = "playericon_01_png";
		t.verticalCenter = 0;
		t.x = 16;
		t.y = 16;
		return t;
	};
	return HeadIconSkin;
})(eui.Skin);generateEUI.paths['resource/skins/common/TextIconSkin.exml'] = window.TextIconSkin = (function (_super) {
	__extends(TextIconSkin, _super);
	function TextIconSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = TextIconSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.labelDisplay_i(),this.iconDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "labelDisplay";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.scaleX = 1;
		t.scaleY = 1;
		return t;
	};
	return TextIconSkin;
})(eui.Skin);generateEUI.paths['resource/skins/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/skins/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/skins/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/skins/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skins/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/skins/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/skins/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/skins/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/skins/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/skins/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/skins/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/skins/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skins/home/DemoPanelSkin.exml'] = window.DemoPanelSkin = (function (_super) {
	__extends(DemoPanelSkin, _super);
	function DemoPanelSkin() {
		_super.call(this);
		this.skinParts = ["nameLb","ageLb","testImg"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this.nameLb_i(),this.ageLb_i(),this.testImg_i()];
	}
	var _proto = DemoPanelSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.nameLb_i = function () {
		var t = new eui.Label();
		this.nameLb = t;
		t.text = "Label";
		t.x = 393;
		t.y = 267;
		return t;
	};
	_proto.ageLb_i = function () {
		var t = new eui.Label();
		this.ageLb = t;
		t.text = "Label";
		t.x = 653;
		t.y = 389;
		return t;
	};
	_proto.testImg_i = function () {
		var t = new eui.Image();
		this.testImg = t;
		t.source = "";
		t.x = 671;
		t.y = 160;
		return t;
	};
	return DemoPanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/home/home/HomePanelSkin.exml'] = window.HomePanelSkin = (function (_super) {
	__extends(HomePanelSkin, _super);
	var HomePanelSkin$Skin1 = 	(function (_super) {
		__extends(HomePanelSkin$Skin1, _super);
		function HomePanelSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomePanelSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "button_rename_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HomePanelSkin$Skin1;
	})(eui.Skin);

	var HomePanelSkin$Skin2 = 	(function (_super) {
		__extends(HomePanelSkin$Skin2, _super);
		function HomePanelSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomePanelSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "button_down_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HomePanelSkin$Skin2;
	})(eui.Skin);

	function HomePanelSkin() {
		_super.call(this);
		this.skinParts = ["kaGroup","fightBtn","cups","playerName","kaBtn"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this._Label1_i(),this._Group2_i(),this.fightBtn_i(),this._Group3_i(),this._WButton1_i(),this.kaBtn_i()];
	}
	var _proto = HomePanelSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x8c7a54;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "HOME";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 628;
		t.width = 466;
		t.x = 785.57;
		t.y = 70;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label2_i(),this._Group1_i(),this.kaGroup_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(12,15,23,18);
		t.source = "bg_com_fgd_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(38,6,5,39);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_kplb_bt_png";
		t.width = 480;
		t.x = -7.37;
		t.y = 4.66;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "花费:";
		t.x = 38.3;
		t.y = 15.66;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.x = 112.33;
		t.y = 14.34;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._BitmapLabel1_i(),this._Image3_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "sh_font_fnt";
		t.letterSpacing = -6;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "0#0";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "icon_sh_d_png";
		t.x = -119;
		t.y = -19;
		return t;
	};
	_proto.kaGroup_i = function () {
		var t = new eui.Group();
		this.kaGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 60;
		return t;
	};
	_proto.fightBtn_i = function () {
		var t = new WGroup();
		this.fightBtn = t;
		t.horizontalCenter = -501.5;
		t.touchChildren = false;
		t.verticalCenter = 233;
		t.elementsContent = [this._Image4_i(),this._Label3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "button_dz_ppz_png";
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "Fight";
		t.verticalCenter = -30;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image5_i(),this.cups_i(),this.playerName_i(),this._HeadIcon1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 80;
		t.scale9Grid = new egret.Rectangle(11,10,36,67);
		t.source = "bg_phb_heroicon_back_png";
		t.width = 206.5;
		t.x = 30;
		t.y = 10.67;
		return t;
	};
	_proto.cups_i = function () {
		var t = new WButton();
		this.cups = t;
		t.icon = "bg_phb_jb_png";
		t.label = "000";
		t.skinName = "TextIconSkin";
		t.x = 104;
		t.y = 17.52;
		return t;
	};
	_proto.playerName_i = function () {
		var t = new eui.Label();
		this.playerName = t;
		t.text = "wsx";
		t.x = 107;
		t.y = 53.33;
		return t;
	};
	_proto._HeadIcon1_i = function () {
		var t = new home.HeadIcon();
		t.skinName = HeadIconSkin;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._WButton1_i = function () {
		var t = new WButton();
		t.horizontalCenter = 571.5;
		t.label = "";
		t.verticalCenter = -260.5;
		t.skinName = HomePanelSkin$Skin1;
		return t;
	};
	_proto.kaBtn_i = function () {
		var t = new WButton();
		this.kaBtn = t;
		t.horizontalCenter = -255;
		t.label = "";
		t.verticalCenter = 270;
		t.skinName = HomePanelSkin$Skin2;
		return t;
	};
	return HomePanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/home/home/ka/HeroKaSkin.exml'] = window.HeroKaSkin = (function (_super) {
	__extends(HeroKaSkin, _super);
	function HeroKaSkin() {
		_super.call(this);
		this.skinParts = ["typeBg","kaImg","costLb","testId","level","upTips"];
		
		this.height = 137;
		this.width = 212;
		this.elementsContent = [this.typeBg_i(),this.kaImg_i(),this._Image1_i(),this.costLb_i(),this.testId_i(),this.level_i(),this.upTips_i()];
	}
	var _proto = HeroKaSkin.prototype;

	_proto.typeBg_i = function () {
		var t = new eui.Image();
		this.typeBg = t;
		t.source = "bg_card_di_1_png";
		return t;
	};
	_proto.kaImg_i = function () {
		var t = new eui.Image();
		this.kaImg = t;
		t.horizontalCenter = 0;
		t.source = "heroicon_10030_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "icon_sh_d_png";
		t.top = 0;
		return t;
	};
	_proto.costLb_i = function () {
		var t = new eui.BitmapLabel();
		this.costLb = t;
		t.font = "sh_font_fnt";
		t.left = 3;
		t.text = "0";
		t.top = 11;
		return t;
	};
	_proto.testId_i = function () {
		var t = new eui.Label();
		this.testId = t;
		t.horizontalCenter = 0;
		t.stroke = 2;
		t.text = "Label";
		t.verticalCenter = 0;
		return t;
	};
	_proto.level_i = function () {
		var t = new eui.Label();
		this.level = t;
		t.bottom = 10;
		t.left = 10;
		t.stroke = 2;
		t.text = "00级";
		return t;
	};
	_proto.upTips_i = function () {
		var t = new eui.Image();
		this.upTips = t;
		t.source = "icon_kz_sjjt_png";
		t.visible = false;
		t.x = 169;
		t.y = 90;
		return t;
	};
	return HeroKaSkin;
})(eui.Skin);generateEUI.paths['resource/skins/home/home/ka/HeroKa2Skin.exml'] = window.HeroKa2Skin = (function (_super) {
	__extends(HeroKa2Skin, _super);
	function HeroKa2Skin() {
		_super.call(this);
		this.skinParts = ["heroKa","infoBtn","fightBtn"];
		
		this.currentState = "common";
		this.height = 237;
		this.width = 268;
		this.elementsContent = [this.heroKa_i()];
		this._Image1_i();
		
		this.infoBtn_i();
		
		this.fightBtn_i();
		
		this.states = [
			new eui.State ("common",
				[
					new eui.SetProperty("heroKa","scaleX",0.9),
					new eui.SetProperty("heroKa","scaleY",0.9)
				])
			,
			new eui.State ("active",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.AddItems("infoBtn","",1,""),
					new eui.AddItems("fightBtn","",1,"")
				])
		];
	}
	var _proto = HeroKa2Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(26,25,19,17);
		t.source = "bg_lz_tc02_png";
		t.top = 0;
		return t;
	};
	_proto.heroKa_i = function () {
		var t = new home.HeroKa();
		this.heroKa = t;
		t.horizontalCenter = 3;
		t.name = this.heroKa;
		t.skinName = HeroKaSkin;
		t.verticalCenter = -30;
		if(this.heroKa)
		{
			this.heroKa.name = this.heroKa;
		}
		return t;
	};
	_proto.infoBtn_i = function () {
		var t = new WButton();
		this.infoBtn = t;
		t.horizontalCenter = -53.5;
		t.label = "信息";
		t.name = "infoBtn";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.skinName = "btn1Skin";
		t.touchChildren = false;
		t.verticalCenter = 69;
		return t;
	};
	_proto.fightBtn_i = function () {
		var t = new WButton();
		this.fightBtn = t;
		t.horizontalCenter = 57.5;
		t.label = "出战";
		t.name = "fightBtn";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.skinName = "btn2Skin";
		t.touchChildren = false;
		t.verticalCenter = 69;
		return t;
	};
	return HeroKa2Skin;
})(eui.Skin);generateEUI.paths['resource/skins/home/home/ka/KakuPanelSkin.exml'] = window.KakuPanelSkin = (function (_super) {
	__extends(KakuPanelSkin, _super);
	function KakuPanelSkin() {
		_super.call(this);
		this.skinParts = ["heroGroup","readyBg","maskk","readGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Group1_i(),this.readGroup_i()];
	}
	var _proto = KakuPanelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 640.91;
		t.width = 750;
		t.x = 7.8;
		t.y = 68.28;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(23,63,11,18);
		t.source = "bg_phb_btdi_duan_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.right = -17;
		t.scaleX = -1;
		t.source = "bg_lz_tc_jt_png";
		t.verticalCenter = -0.4549999999999841;
		t.width = 35;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.height = 552;
		t.scrollPolicyH = "off";
		t.x = 13.67;
		t.y = 65.67;
		t.viewport = this.heroGroup_i();
		return t;
	};
	_proto.heroGroup_i = function () {
		var t = new eui.Group();
		this.heroGroup = t;
		t.x = -13.33;
		t.y = -13.33;
		return t;
	};
	_proto.readGroup_i = function () {
		var t = new eui.Group();
		this.readGroup = t;
		t.height = 720;
		t.touchEnabled = false;
		t.width = 1280;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.readyBg_i(),this.maskk_i()];
		return t;
	};
	_proto.readyBg_i = function () {
		var t = new eui.Image();
		this.readyBg = t;
		t.alpha = 0.3;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,16,16);
		t.source = "bg_black_png";
		t.top = 0;
		return t;
	};
	_proto.maskk_i = function () {
		var t = new eui.Image();
		this.maskk = t;
		t.height = 628;
		t.scale9Grid = new egret.Rectangle(12,15,23,18);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_com_fgd_png";
		t.width = 466;
		t.x = 255.27;
		t.y = 70;
		return t;
	};
	return KakuPanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/home/loading/LoadingPanelSkin.exml'] = window.LoadingPanelSkin = (function (_super) {
	__extends(LoadingPanelSkin, _super);
	function LoadingPanelSkin() {
		_super.call(this);
		this.skinParts = ["bg","tips","bar"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.bg_i(),this.tips_i(),this.bar_i()];
	}
	var _proto = LoadingPanelSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetX = 640;
		t.anchorOffsetY = 360;
		t.source = "bg_com_jpg";
		t.x = 640;
		t.y = 360;
		return t;
	};
	_proto.tips_i = function () {
		var t = new eui.Label();
		this.tips = t;
		t.horizontalCenter = -119.5;
		t.text = "loading";
		t.y = 458;
		return t;
	};
	_proto.bar_i = function () {
		var t = new eui.ProgressBar();
		this.bar = t;
		t.horizontalCenter = 0;
		t.maximum = 100;
		t.skinName = "barLoadingSkin";
		t.slideDuration = 0;
		t.value = 70;
		t.width = 1200;
		t.y = 648;
		return t;
	};
	return LoadingPanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/home/loading/LoadingTipsSkin.exml'] = window.LoadingTipsSkin = (function (_super) {
	__extends(LoadingTipsSkin, _super);
	function LoadingTipsSkin() {
		_super.call(this);
		this.skinParts = ["tips"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this.tips_i()];
	}
	var _proto = LoadingTipsSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x60841d;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.tips_i = function () {
		var t = new eui.Label();
		this.tips = t;
		t.horizontalCenter = 0;
		t.text = "loading";
		t.y = 558;
		return t;
	};
	return LoadingTipsSkin;
})(eui.Skin);generateEUI.paths['resource/skins/home/LoginPanelSkin.exml'] = window.LoginPanelSkin = (function (_super) {
	__extends(LoginPanelSkin, _super);
	var LoginPanelSkin$Skin3 = 	(function (_super) {
		__extends(LoginPanelSkin$Skin3, _super);
		function LoginPanelSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginPanelSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bg_card_di_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginPanelSkin$Skin3;
	})(eui.Skin);

	function LoginPanelSkin() {
		_super.call(this);
		this.skinParts = ["loginBtn","accountInput","testLb"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this._Group1_i(),this._WButton1_i(),this.testLb_i()];
	}
	var _proto = LoginPanelSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 300;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 400;
		t.elementsContent = [this._Rect2_i(),this.loginBtn_i(),this.accountInput_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x45b509;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.loginBtn_i = function () {
		var t = new WGroup();
		this.loginBtn = t;
		t.height = 55;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.verticalCenter = 102.5;
		t.width = 155;
		t.y = 225;
		t.elementsContent = [this._Rect3_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xf40e0e;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "lg";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.accountInput_i = function () {
		var t = new eui.TextInput();
		this.accountInput = t;
		t.horizontalCenter = 0;
		t.prompt = "输入账号";
		t.skinName = "skins.TextInputSkin";
		t.width = 128;
		t.y = 111;
		return t;
	};
	_proto._WButton1_i = function () {
		var t = new WButton();
		t.horizontalCenter = -322;
		t.label = "Button";
		t.verticalCenter = 14.5;
		t.skinName = LoginPanelSkin$Skin3;
		return t;
	};
	_proto.testLb_i = function () {
		var t = new eui.Label();
		this.testLb = t;
		t.text = "Label";
		t.x = 533;
		t.y = 97;
		return t;
	};
	return LoginPanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/war/CostBarSkin.exml'] = window.CostBarSkin = (function (_super) {
	__extends(CostBarSkin, _super);
	function CostBarSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 43;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Group1_i(),this._Image14_i(),this._BitmapLabel1_i()];
	}
	var _proto = CostBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "icon_sh_dbg_sh_d0_png";
		t.verticalCenter = 4.5;
		t.x = 10;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "icon_sh_dbg_sh_d11_png";
		t.verticalCenter = 4;
		t.x = 38.14;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "icon_sh_dbg_sh_d1_png";
		t.verticalCenter = 4;
		t.x = 38.14;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 4.5;
		t.x = 31.92;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 60;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "icon_sh_dbg_sh_d2_png";
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "icon_sh_dbg_sh_d2_png";
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "icon_sh_dbg_sh_d2_png";
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "icon_sh_dbg_sh_d2_png";
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "icon_sh_dbg_sh_d2_png";
		t.x = 40;
		t.y = 40;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "icon_sh_dbg_sh_d2_png";
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "icon_sh_dbg_sh_d2_png";
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "icon_sh_dbg_sh_d2_png";
		t.x = 70;
		t.y = 70;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "icon_sh_dbg_sh_d2_png";
		t.x = 80;
		t.y = 80;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "icon_sh_dbg_sh_d2_png";
		t.x = 90;
		t.y = 90;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "icon_sh_d_png";
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "sh_font_fnt";
		t.horizontalCenter = -329.5;
		t.text = "0";
		t.y = 11.33;
		return t;
	};
	return CostBarSkin;
})(eui.Skin);generateEUI.paths['resource/skins/war/HeroEntitySkin.exml'] = window.HeroEntitySkin = (function (_super) {
	__extends(HeroEntitySkin, _super);
	function HeroEntitySkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 200;
		this.width = 100;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i()];
	}
	var _proto = HeroEntitySkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xfcce44;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x1a77ed;
		t.height = 10;
		t.horizontalCenter = 0;
		t.strokeAlpha = 2;
		t.width = 10;
		return t;
	};
	return HeroEntitySkin;
})(eui.Skin);generateEUI.paths['resource/skins/war/Ka1Skin.exml'] = window.Ka1Skin = (function (_super) {
	__extends(Ka1Skin, _super);
	function Ka1Skin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 137;
		this.width = 212;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._BitmapLabel1_i()];
	}
	var _proto = Ka1Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_card_di_0_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "heroicon_10030_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "icon_sh_d_png";
		t.top = 0;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "sh_font_fnt";
		t.left = 3;
		t.text = "0";
		t.top = 11;
		return t;
	};
	return Ka1Skin;
})(eui.Skin);generateEUI.paths['resource/skins/war/WarMatchPanelSkin.exml'] = window.WarMatchPanelSkin = (function (_super) {
	__extends(WarMatchPanelSkin, _super);
	var WarMatchPanelSkin$Skin4 = 	(function (_super) {
		__extends(WarMatchPanelSkin$Skin4, _super);
		function WarMatchPanelSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = WarMatchPanelSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bg_card_di_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return WarMatchPanelSkin$Skin4;
	})(eui.Skin);

	function WarMatchPanelSkin() {
		_super.call(this);
		this.skinParts = ["nextBtn"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this._Label1_i(),this.nextBtn_i()];
	}
	var _proto = WarMatchPanelSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xba6da7;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "matching...";
		t.verticalCenter = 0;
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new WButton();
		this.nextBtn = t;
		t.horizontalCenter = 493;
		t.label = "next";
		t.verticalCenter = -275.5;
		t.skinName = WarMatchPanelSkin$Skin4;
		return t;
	};
	return WarMatchPanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/war/WarPanelSkin.exml'] = window.WarPanelSkin = (function (_super) {
	__extends(WarPanelSkin, _super);
	function WarPanelSkin() {
		_super.call(this);
		this.skinParts = ["testGrid","drawGroup","entityGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this.testGrid_i(),this.drawGroup_i(),this.entityGroup_i(),this._Group3_i()];
	}
	var _proto = WarPanelSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.testGrid_i = function () {
		var t = new eui.Group();
		this.testGrid = t;
		t.anchorOffsetX = 0;
		t.height = 480;
		t.width = 1080;
		t.x = 100;
		t.y = 120;
		t.elementsContent = [this._Rect2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xffffff;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.drawGroup_i = function () {
		var t = new eui.Group();
		this.drawGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 720;
		return t;
	};
	_proto.entityGroup_i = function () {
		var t = new eui.Group();
		this.entityGroup = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 360;
		t.left = 0;
		t.right = 0;
		t.visible = false;
		t.elementsContent = [this._Image1_i(),this._Group2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.3;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,18,18,11);
		t.source = "bg_jz_lt_jk_wxts_png";
		t.top = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 370;
		t.left = 0;
		t.right = 0;
		t.elementsContent = [this._Image2_i(),this._Ka11_i(),this._CostBar1_i(),this._Group1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,18,18,11);
		t.source = "bg_jz_lt_jk_wxts_png";
		t.top = 0;
		return t;
	};
	_proto._Ka11_i = function () {
		var t = new war.Ka1();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "Ka1Skin";
		t.x = 29.08;
		t.y = 202.26;
		return t;
	};
	_proto._CostBar1_i = function () {
		var t = new war.CostBar();
		t.horizontalCenter = 0;
		t.skinName = "CostBarSkin";
		t.y = 303.8;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 610.72;
		t.y = 123.75;
		t.elementsContent = [this._Ka12_i(),this._Ka13_i(),this._Ka14_i(),this._Ka15_i()];
		return t;
	};
	_proto._Ka12_i = function () {
		var t = new war.Ka1();
		t.anchorOffsetX = 106;
		t.anchorOffsetY = 68;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Ka1Skin";
		return t;
	};
	_proto._Ka13_i = function () {
		var t = new war.Ka1();
		t.anchorOffsetX = 106;
		t.anchorOffsetY = 68;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Ka1Skin";
		return t;
	};
	_proto._Ka14_i = function () {
		var t = new war.Ka1();
		t.anchorOffsetX = 106;
		t.anchorOffsetY = 68;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Ka1Skin";
		return t;
	};
	_proto._Ka15_i = function () {
		var t = new war.Ka1();
		t.anchorOffsetX = 106;
		t.anchorOffsetY = 68;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Ka1Skin";
		return t;
	};
	return WarPanelSkin;
})(eui.Skin);