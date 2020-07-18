//=============================================================================
// KITA_MessageExt.js
//=============================================================================
//=============================================================================
// Build Date: 2020-07-18 13:22:38
//=============================================================================
//=============================================================================
// Made with Kiniita -- Haxe
//=============================================================================

//=============================================================================
//  Contact Information
//=============================================================================
/*
*
* Contact me via twitter: EISKino, or on the rpg maker forums.
* Username on forums: Kino.
*
* Forum Link: http://forums.rpgmakerweb.com/index.php?/profile/75879-kino/
* Old Website Link: http://endlessillusoft.com/
* New Website Link: https://kinocreates.io/ 
* Twitter Link: https://twitter.com/EISKino
* Patreon Link: https://www.patreon.com/EISKino
*
* Hope this plugin helps, and enjoy!
* --Kino
*/

// Generated by Haxe 4.2.0-rc.1+1c018c009
(function ($global) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
class EReg {
	constructor(r,opt) {
		this.r = new RegExp(r,opt.split("u").join(""));
	}
	split(s) {
		return s.replace(this.r,"#__delim__#").split("#__delim__#");
	}
}
EReg.__name__ = true;
class HxOverrides {
	static cca(s,index) {
		let x = s.charCodeAt(index);
		if(x != x) {
			return undefined;
		}
		return x;
	}
	static substr(s,pos,len) {
		if(len == null) {
			len = s.length;
		} else if(len < 0) {
			if(pos == 0) {
				len = s.length + len;
			} else {
				return "";
			}
		}
		return s.substr(pos,len);
	}
	static now() {
		return Date.now();
	}
}
HxOverrides.__name__ = true;
class Lambda {
	static has(it,elt) {
		let x = $getIterator(it);
		while(x.hasNext()) if(x.next() == elt) {
			return true;
		}
		return false;
	}
}
Lambda.__name__ = true;
Math.__name__ = true;
class StringTools {
	static isSpace(s,pos) {
		let c = HxOverrides.cca(s,pos);
		if(!(c > 8 && c < 14)) {
			return c == 32;
		} else {
			return true;
		}
	}
	static ltrim(s) {
		let l = s.length;
		let r = 0;
		while(r < l && StringTools.isSpace(s,r)) ++r;
		if(r > 0) {
			return HxOverrides.substr(s,r,l - r);
		} else {
			return s;
		}
	}
	static rtrim(s) {
		let l = s.length;
		let r = 0;
		while(r < l && StringTools.isSpace(s,l - r - 1)) ++r;
		if(r > 0) {
			return HxOverrides.substr(s,0,l - r);
		} else {
			return s;
		}
	}
	static trim(s) {
		return StringTools.ltrim(StringTools.rtrim(s));
	}
}
StringTools.__name__ = true;
function core_Amaryllis_createEventEmitter() {
	return new PIXI.utils.EventEmitter();
}
function core_Amaryllis_createDie(sides) {
	return new core_Die(sides);
}
function core_Amaryllis_getParams(regEx) {
}
function core_Amaryllis_lerp(start,end,amount) {
	return start + (end - start) * amount;
}
function core_Amaryllis_currentScene() {
	return SceneManager._scene;
}
function core_Amaryllis_isImagePath(path) {
	if(path.split("/").length > 2) {
		return true;
	} else {
		return false;
	}
}
function core_Amaryllis_loadImage(path,hue) {
	if(hue == null) {
		hue = 0;
	}
	if(path.split("/").length > 2) {
		return ImageManager.loadNormalBitmap(path + ".png",hue);
	} else {
		return null;
	}
}
function core_Amaryllis_isNwjs() {
	return mz.core.Utils.isNwjs();
}
function core_Amaryllis_isMobile() {
	return mz.core.Utils.isMobileDevice();
}
function core_Amaryllis_isTest() {
	return mz.core.Utils.isOptionValid("test");
}
function core_Amaryllis_once(f) {
	let count = 0;
	return function() {
		if(count > 0) {
			return null;
		} else {
			count += 1;
			return f();
		}
	};
}
function core_Amaryllis_times(iterations,f) {
	let _g = 0;
	while(_g < iterations) {
		++_g;
		f();
	}
}
function core_Amaryllis_safeParse(string) {
	try {
		return JSON.parse(string);
	} catch( _g ) {
		return haxe_Exception.caught(_g);
	}
}
function core_Amaryllis_lines(num) {
	return Window_Base.prototype.lineHeight() * num;
}
function core_Amaryllis_rgbToHex(red,green,blue) {
	return PIXI.utils.hex2string(PIXI.utils.rgb2hex([red,green,blue]));
}
function core_Amaryllis_rgbToCss(red,green,blue) {
	return mz.core.Utils.rgbToCssColor(red,green,blue);
}
function core_Amaryllis_clear(array) {
	array.length = 0;
	return array;
}
function core_Amaryllis_take(amount,list) {
	return list.slice(0,amount);
}
function core_Amaryllis_drop(amount,list) {
	return list.slice(amount * -1);
}
function core_Amaryllis_arrayEquals(arr1,arr2) {
	if(arr1.length == arr2.length) {
		return !Lambda.has(arr1,function(el,index) {
			return el != arr2[index];
		});
	} else {
		return false;
	}
}
class core_TBox {
	static setField(this1,fieldName,value) {
		this1[fieldName] = value;
	}
	static get_dyn(this1) {
		return this1;
	}
	static set_dyn(this1,obj) {
		return this1;
	}
	static set(this1,f) {
		f(this1);
	}
}
class core_Die {
	constructor(sides) {
		let _g = [];
		let _g1 = 0;
		while(_g1 < sides) _g.push(_g1++ + 1);
		this.sides = _g;
	}
	roll() {
		return this.sides[core_Math.randomInt() * this.sides.length];
	}
}
core_Die.__name__ = true;
class core_Math {
	static randomInt() {
		return Math.round(Math.random());
	}
	static randomRangeInt(start,end) {
		let _g = [];
		let _g1 = start;
		while(_g1 < end) _g.push(_g1++);
		return _g[core_Math.randomInt() * _g.length];
	}
	static clampf(num,min,max) {
		return Math.min(Math.max(num,min),max);
	}
	static clamp(num,min,max) {
		return Math.round(Math.min(Math.max(num,min),max));
	}
}
function core_StringExtensions_capitalize(string) {
	return string.charAt(0).toUpperCase() + HxOverrides.substr(string,1,null);
}
function core_StringExtensions_title(string) {
	let _this = new EReg("\\s","g").split(string);
	let result = new Array(_this.length);
	let _g = 0;
	let _g1 = _this.length;
	while(_g < _g1) {
		let i = _g++;
		let word = _this[i];
		result[i] = word.charAt(0).toUpperCase() + HxOverrides.substr(word,1,null);
	}
	return result.join(" ");
}
function core_StringExtensions_wordCount(string) {
	let trimmedString = StringTools.trim(string);
	return new EReg("\\s+","ig").split(trimmedString).length;
}
function core_StringExtensions_x1breplace(string) {
	let _this_r = new RegExp("\\\\\\\\","ig".split("u").join(""));
	return string.replace(_this_r,"\x1B");
}
function core_StringExtensions_x1breplace2(string) {
	let _this_r = new RegExp("\\\\","ig".split("u").join(""));
	return string.replace(_this_r,"\x1B");
}
function core_StringExtensions_monoSpace(string) {
	let _this_r = new RegExp("\\s{2,}","gi".split("u").join(""));
	return string.replace(_this_r," ");
}
class haxe_Exception extends Error {
	constructor(message,previous,native) {
		super(message);
		this.message = message;
		this.__previousException = previous;
		this.__nativeException = native != null ? native : this;
	}
	unwrap() {
		return this.__nativeException;
	}
	get_native() {
		return this.__nativeException;
	}
	static caught(value) {
		if(((value) instanceof haxe_Exception)) {
			return value;
		} else if(((value) instanceof Error)) {
			return new haxe_Exception(value.message,null,value);
		} else {
			return new haxe_ValueException(value,null,value);
		}
	}
	static thrown(value) {
		if(((value) instanceof haxe_Exception)) {
			return value.get_native();
		} else if(((value) instanceof Error)) {
			return value;
		} else {
			let e = new haxe_ValueException(value);
			return e;
		}
	}
}
haxe_Exception.__name__ = true;
class haxe_ValueException extends haxe_Exception {
	constructor(value,previous,native) {
		super(String(value),previous,native);
		this.value = value;
	}
	unwrap() {
		return this.value;
	}
}
haxe_ValueException.__name__ = true;
class haxe_io_Bytes {
	constructor(data) {
		this.length = data.byteLength;
		this.b = new Uint8Array(data);
		this.b.bufferValue = data;
		data.hxBytes = this;
		data.bytes = this.b;
	}
}
haxe_io_Bytes.__name__ = true;
class haxe_io_Eof {
	constructor() {
	}
	toString() {
		return "Eof";
	}
}
haxe_io_Eof.__name__ = true;
var haxe_io_Error = $hxEnums["haxe.io.Error"] = { __ename__:true,__constructs__:null
	,Blocked: {_hx_name:"Blocked",_hx_index:0,__enum__:"haxe.io.Error",toString:$estr}
	,Overflow: {_hx_name:"Overflow",_hx_index:1,__enum__:"haxe.io.Error",toString:$estr}
	,OutsideBounds: {_hx_name:"OutsideBounds",_hx_index:2,__enum__:"haxe.io.Error",toString:$estr}
	,Custom: ($_=function(e) { return {_hx_index:3,e:e,__enum__:"haxe.io.Error",toString:$estr}; },$_._hx_name="Custom",$_.__params__ = ["e"],$_)
};
haxe_io_Error.__constructs__ = [haxe_io_Error.Blocked,haxe_io_Error.Overflow,haxe_io_Error.OutsideBounds,haxe_io_Error.Custom];
class haxe_io_Input {
}
haxe_io_Input.__name__ = true;
class haxe_io_Output {
}
haxe_io_Output.__name__ = true;
class haxe_iterators_ArrayIterator {
	constructor(array) {
		this.current = 0;
		this.array = array;
	}
	hasNext() {
		return this.current < this.array.length;
	}
	next() {
		return this.array[this.current++];
	}
}
haxe_iterators_ArrayIterator.__name__ = true;
class js_Boot {
	static __string_rec(o,s) {
		if(o == null) {
			return "null";
		}
		if(s.length >= 5) {
			return "<...>";
		}
		let t = typeof(o);
		if(t == "function" && (o.__name__ || o.__ename__)) {
			t = "object";
		}
		switch(t) {
		case "function":
			return "<function>";
		case "object":
			if(o.__enum__) {
				let e = $hxEnums[o.__enum__];
				let con = e.__constructs__[o._hx_index];
				let n = con._hx_name;
				if(con.__params__) {
					s = s + "\t";
					return n + "(" + ((function($this) {
						var $r;
						let _g = [];
						{
							let _g1 = 0;
							let _g2 = con.__params__;
							while(true) {
								if(!(_g1 < _g2.length)) {
									break;
								}
								let p = _g2[_g1];
								_g1 = _g1 + 1;
								_g.push(js_Boot.__string_rec(o[p],s));
							}
						}
						$r = _g;
						return $r;
					}(this))).join(",") + ")";
				} else {
					return n;
				}
			}
			if(((o) instanceof Array)) {
				let str = "[";
				s += "\t";
				let _g = 0;
				let _g1 = o.length;
				while(_g < _g1) {
					let i = _g++;
					str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
				}
				str += "]";
				return str;
			}
			let tostr;
			try {
				tostr = o.toString;
			} catch( _g ) {
				return "???";
			}
			if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
				let s2 = o.toString();
				if(s2 != "[object Object]") {
					return s2;
				}
			}
			let str = "{\n";
			s += "\t";
			let hasp = o.hasOwnProperty != null;
			let k = null;
			for( k in o ) {
			if(hasp && !o.hasOwnProperty(k)) {
				continue;
			}
			if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
				continue;
			}
			if(str.length != 2) {
				str += ", \n";
			}
			str += s + k + " : " + js_Boot.__string_rec(o[k],s);
			}
			s = s.substring(1);
			str += "\n" + s + "}";
			return str;
		case "string":
			return o;
		default:
			return String(o);
		}
	}
}
js_Boot.__name__ = true;
var js_node_Fs = require("fs");
class js_node_KeyValue {
	static get_key(this1) {
		return this1[0];
	}
	static get_value(this1) {
		return this1[1];
	}
}
var js_node_buffer_Buffer = require("buffer").Buffer;
class js_node_stream_WritableNewOptionsAdapter {
	static from(options) {
		if(!Object.prototype.hasOwnProperty.call(options,"final")) {
			Object.defineProperty(options,"final",{ get : function() {
				return options.final_;
			}});
		}
		return options;
	}
}
class macros_MacroTools {
}
macros_MacroTools.__name__ = true;
var nodes_MoveType = $hxEnums["nodes.MoveType"] = { __ename__:true,__constructs__:null
	,Linear: {_hx_name:"Linear",_hx_index:0,__enum__:"nodes.MoveType",toString:$estr}
};
nodes_MoveType.__constructs__ = [nodes_MoveType.Linear];
class nodes_SpriteBust extends Sprite_Base {
	constructor(x,y,bitmap) {
		super();
		this.bitmap = bitmap;
		console.log("src/nodes/SpriteBust.hx:25:",bitmap);
		this.x = x;
		this.y = y;
		this._moveWait = 30;
	}
	initialize() {
		super.initialize();
		this._fadeDuration = 0;
		this._shadowOpacity = this.alpha;
		this._shadowX = this.x;
		this._shadowY = this.y;
		this._defaultMoveType = nodes_MoveType.Linear;
	}
	moveTo(x,y) {
		this._shadowX = x;
		if(y != null) {
			this._shadowY = y;
		}
		this._moveWait = 30;
	}
	moveBy(x,y) {
		this._shadowX += x;
		if(y != null) {
			this._shadowY += y;
		}
		this._moveWait = 30;
	}
	fadeTo(opacity,duration) {
		if(duration == null) {
			duration = 30;
		}
		this._shadowOpacity = opacity;
		this._fadeDuration = duration;
	}
	fadeBy(opacity,duration) {
		if(duration == null) {
			duration = 30;
		}
		this._shadowOpacity += opacity;
		this._fadeDuration = duration;
	}
	scaleTo(x,y,duration) {
		if(duration == null) {
			duration = 30;
		}
		this.scale.set(x,y);
		this._scaleDuration = duration;
	}
	update() {
		super.update();
		this.updateFade();
		this.updateScaling();
		if(this._moveWait == 0) {
			this.updateMovement();
		}
		if(this._moveWait > 0) {
			this._moveWait--;
		}
	}
	updateFade() {
	}
	updateScaling() {
	}
	updateMovement() {
		let xResult = this.x;
		let yResult = this.y;
		if(this._shadowX != this.x) {
			xResult = core_Amaryllis_lerp(this.x,this._shadowX,0.025);
		}
		if(this._shadowY != this.y) {
			yResult = core_Amaryllis_lerp(this.y,this._shadowY,0.025);
		}
		if(this._shadowX == this.x && this._shadowY == this.y) {
			this._moveWait = -1;
		}
		if(Math.abs(this._shadowX - this.x) < 0.5) {
			xResult = Math.round(xResult);
		}
		if(Math.abs(this._shadowY - this.y) < 0.5) {
			yResult = Math.round(yResult);
		}
		this.move(xResult,yResult);
		this._refresh();
	}
}
nodes_SpriteBust.__name__ = true;
class KITASpriteIconOsc extends Sprite_Base {
	constructor(x,y,bitmap) {
		super();
		this.x = x;
		this.y = y;
		this.anchor.x = 0.5;
		this.anchor.y = 0.5;
		if(bitmap != null) {
			this.bitmap = bitmap;
		}
	}
	update() {
		super.update();
		this.oscillateSize();
	}
	oscillateSize() {
		let xYResult = Math.abs(Math.sin(new Date().getTime() / 1000) / 2.0);
		this.scale.x = 1 - xYResult;
		this.scale.y = 1 - xYResult;
	}
}
KITASpriteIconOsc.__name__ = true;
class plugins_KitaWindowMessage extends Window_Message {
	constructor(x,y,width,height) {
		super(x,y,width,height);
		this.originalTextSpeed = plugins_KITA_$MessageExt_textSpeed;
		this.activeTextSpeed = plugins_KITA_$MessageExt_textSpeed;
		this.msgBust = plugins_KITA_$MessageExt_MSGBUST;
		this.testSprite = plugins_KITA_$MessageExt_OSCSprite;
		plugins_KITA_$MessageExt_img.fillRect(0,0,128,128,"black");
		this.msgBust.move(0,-128);
		this.testSprite.move(0,400);
		this.addChild(this.testSprite);
		this.addChild(this.msgBust);
		this.testSprite.show();
		this.msgBust.show();
	}
	updateTextSpeed(value) {
		this.activeTextSpeed = value;
	}
	processEscapeCharacter(code,textState) {
		switch(code) {
		case "!":
			this.startPause();
			break;
		case "$":
			this._goldWindow.open();
			break;
		case ".":
			this.startWait(15);
			break;
		case "<":
			this._lineShowFast = false;
			break;
		case ">":
			this._lineShowFast = true;
			break;
		case "TS":
			this.updateTextSpeed(this.obtainEscapeParam(textState) | 0);
			break;
		case "^":
			this._pauseSkip = true;
			break;
		default:
			super.processEscapeCharacter(code,textState);
		}
	}
	processNormalCharacter(textState) {
		super.processNormalCharacter(textState);
		this.startWait(this.activeTextSpeed);
	}
	terminateMessage() {
		this.activeTextSpeed = this.originalTextSpeed;
		super.terminateMessage();
	}
}
plugins_KitaWindowMessage.__name__ = true;
function plugins_KITA_$MessageExt_main() {
	console.log("src/plugins/KITA_MessageExt.hx:24:",Sprite_Base);
	/*:
     
   @author Kino
   @plugindesc An extension to the core Message Window functionality
   to support Visual Novels <KITA_MessageExt>.

   @param Text Speed 
   @desc The speed at which characters will be rendered
   @default 2
   
   @help
   Version: 1.00
   Version Log:
   Now you can change the text speed at will using escape characters
   inside the window.
   Example: \\TS[30] updates the text speed to super slow 30.
   Note: The [30] will appear in the editor, but not in game.

   Instructions:
   You set your text speed in the plugin menu.
   This is the speed that the characters will be drawn at.

   Contact me via forums; username: Kino.
   Hope this plugin helps and enjoy!
   
   */
	plugins_KITA_$MessageExt_textSpeed = PluginManager.parameters("KITA_MessageExt")["Text Speed"];
	console.log("src/plugins/KITA_MessageExt.hx:52:",plugins_KITA_$MessageExt_textSpeed);
	Window_Message = plugins_KitaWindowMessage;
}
function plugins_KITA_$MessageExt_setTextSpeed(value) {
	plugins_KITA_$MessageExt_textSpeed = value;
}
class sys_io_FileInput extends haxe_io_Input {
	constructor(fd) {
		super();
		this.fd = fd;
		this.pos = 0;
	}
	readByte() {
		let buf = js_node_buffer_Buffer.alloc(1);
		let bytesRead;
		try {
			bytesRead = js_node_Fs.readSync(this.fd,buf,0,1,this.pos);
		} catch( _g ) {
			let _g1 = haxe_Exception.caught(_g).unwrap();
			if(_g1.code == "EOF") {
				throw haxe_Exception.thrown(new haxe_io_Eof());
			} else {
				throw haxe_Exception.thrown(haxe_io_Error.Custom(_g1));
			}
		}
		if(bytesRead == 0) {
			throw haxe_Exception.thrown(new haxe_io_Eof());
		}
		this.pos++;
		return buf[0];
	}
	readBytes(s,pos,len) {
		let data = s.b;
		let buf = js_node_buffer_Buffer.from(data.buffer,data.byteOffset,s.length);
		let bytesRead;
		try {
			bytesRead = js_node_Fs.readSync(this.fd,buf,pos,len,this.pos);
		} catch( _g ) {
			let _g1 = haxe_Exception.caught(_g).unwrap();
			if(_g1.code == "EOF") {
				throw haxe_Exception.thrown(new haxe_io_Eof());
			} else {
				throw haxe_Exception.thrown(haxe_io_Error.Custom(_g1));
			}
		}
		if(bytesRead == 0) {
			throw haxe_Exception.thrown(new haxe_io_Eof());
		}
		this.pos += bytesRead;
		return bytesRead;
	}
	close() {
		js_node_Fs.closeSync(this.fd);
	}
	seek(p,pos) {
		switch(pos._hx_index) {
		case 0:
			this.pos = p;
			break;
		case 1:
			this.pos += p;
			break;
		case 2:
			this.pos = js_node_Fs.fstatSync(this.fd).size + p;
			break;
		}
	}
	tell() {
		return this.pos;
	}
	eof() {
		return this.pos >= js_node_Fs.fstatSync(this.fd).size;
	}
}
sys_io_FileInput.__name__ = true;
class sys_io_FileOutput extends haxe_io_Output {
	constructor(fd) {
		super();
		this.fd = fd;
		this.pos = 0;
	}
	writeByte(b) {
		let buf = js_node_buffer_Buffer.alloc(1);
		buf[0] = b;
		js_node_Fs.writeSync(this.fd,buf,0,1,this.pos);
		this.pos++;
	}
	writeBytes(s,pos,len) {
		let data = s.b;
		let buf = js_node_buffer_Buffer.from(data.buffer,data.byteOffset,s.length);
		let wrote = js_node_Fs.writeSync(this.fd,buf,pos,len,this.pos);
		this.pos += wrote;
		return wrote;
	}
	close() {
		js_node_Fs.closeSync(this.fd);
	}
	seek(p,pos) {
		switch(pos._hx_index) {
		case 0:
			this.pos = p;
			break;
		case 1:
			this.pos += p;
			break;
		case 2:
			this.pos = js_node_Fs.fstatSync(this.fd).size + p;
			break;
		}
	}
	tell() {
		return this.pos;
	}
}
sys_io_FileOutput.__name__ = true;
var sys_io_FileSeek = $hxEnums["sys.io.FileSeek"] = { __ename__:true,__constructs__:null
	,SeekBegin: {_hx_name:"SeekBegin",_hx_index:0,__enum__:"sys.io.FileSeek",toString:$estr}
	,SeekCur: {_hx_name:"SeekCur",_hx_index:1,__enum__:"sys.io.FileSeek",toString:$estr}
	,SeekEnd: {_hx_name:"SeekEnd",_hx_index:2,__enum__:"sys.io.FileSeek",toString:$estr}
};
sys_io_FileSeek.__constructs__ = [sys_io_FileSeek.SeekBegin,sys_io_FileSeek.SeekCur,sys_io_FileSeek.SeekEnd];
class utils_Comment {
	static title(title) {
		return 
//=============================================================================
// title
//=============================================================================
      
	}
	static singleLine(message) {
		return // message 
	}
	static multiLine(message) {
		return /*
    message
    */
	}
	static pluginParams(params) {
		return /*:
     params
   */
	}
}
utils_Comment.__name__ = true;
class utils_Fn {
	static get_self() {
		return this;
	}
	static eval(evaluation) {
		return eval(evaluation);
	}
	static embedEval(evaluation) {
		return eval(evaluation);
	}
	static proto(obj) {
		return obj.prototype;
	}
	static setPrProp(obj,fieldName,value) {
		obj.prototype.fieldName = value;
	}
	static setPrPropVoidFn(obj,fieldName,value) {
		obj.prototype.fieldName = value;
	}
	static getPrProp(obj,fieldName) {
		return obj.prototype.fieldName;
	}
	static setField(obj,fieldName,value) {
		return obj[fieldName] = value;
	}
	static getByArrSyntax(obj,fieldName) {
		return obj[fieldName];
	}
	static renameClass(obj,obj2) {
		return obj = obj2;
	}
	static setProp(obj,propName,value) {
		return Object.defineProperty(obj,propName,{ value : value});
	}
	static setProtoProp(obj,propName,value) {
		return obj.prototype.propName = value;
	}
}
utils_Fn.__name__ = true;
function $getIterator(o) { if( o instanceof Array ) return new haxe_iterators_ArrayIterator(o); else return o.iterator(); }
if(typeof(performance) != "undefined" ? typeof(performance.now) == "function" : false) {
	HxOverrides.now = performance.now.bind(performance);
}
{
	String.__name__ = true;
	Array.__name__ = true;
	Date.__name__ = "Date";
}
js_Boot.__toStr = ({ }).toString;
var core_Amaryllis_VERSION = "1.0.0";
var core_Amaryllis_MZ_NAME = mz.core.Utils.RPGMAKER_NAME;
var core_Amaryllis_MZ_VERSION = mz.core.Utils.RPGMAKER_VERSION;
var plugins_KITA_$MessageExt_textSpeed = 2;
var plugins_KITA_$MessageExt_img = new Bitmap(128,128);
var plugins_KITA_$MessageExt_MSGBUST = new nodes_SpriteBust(0,0,plugins_KITA_$MessageExt_img);
var plugins_KITA_$MessageExt_OSCSprite = new KITASpriteIconOsc(0,0,plugins_KITA_$MessageExt_img);
plugins_KITA_$MessageExt_main();
})({});

//# sourceMappingURL=KITA_MessageExt.js.map