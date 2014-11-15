define("amber-easnoth/Easnoth-MapMenu", ["amber/boot", "amber_core/Web"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Easnoth-MapMenu');
$core.packages["Easnoth-MapMenu"].transport = {"type":"amd","amdNamespace":"amber-easnoth"};

$core.addClass('CWWidget', $globals.Widget, ['parent'], 'Easnoth-MapMenu');
$core.addMethod(
$core.method({
selector: "announce:",
protocol: 'events',
fn: function (anEvent){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._announcer())._announce_(anEvent);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"announce:",{anEvent:anEvent},$globals.CWWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEvent"],
source: "announce: anEvent\x0a\x09self announcer announce: anEvent",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["announce:", "announcer"]
}),
$globals.CWWidget);

$core.addMethod(
$core.method({
selector: "announcer",
protocol: 'accessing',
fn: function (){
var self=this;
function $CWEasnothAnnouncer(){return $globals.CWEasnothAnnouncer||(typeof CWEasnothAnnouncer=="undefined"?nil:CWEasnothAnnouncer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($CWEasnothAnnouncer())._current();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"announcer",{},$globals.CWWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "announcer\x0a\x09^ CWEasnothAnnouncer current",
referencedClasses: ["CWEasnothAnnouncer"],
//>>excludeEnd("ide");
messageSends: ["current"]
}),
$globals.CWWidget);

$core.addMethod(
$core.method({
selector: "children",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"children",{},$globals.CWWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "children\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWWidget);

$core.addMethod(
$core.method({
selector: "isRoot",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isRoot\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWWidget);

$core.addMethod(
$core.method({
selector: "parent",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@parent"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parent\x0a\x09^ parent",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWWidget);

$core.addMethod(
$core.method({
selector: "parent:",
protocol: 'accessing',
fn: function (object){
var self=this;
self["@parent"]=object;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["object"],
source: "parent: object\x0a\x09parent := object",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWWidget);

$core.addMethod(
$core.method({
selector: "root",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._parent())._root();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"root",{},$globals.CWWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "root\x0a\x09^ self parent root",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["root", "parent"]
}),
$globals.CWWidget);



$core.addClass('CWActionMenu', $globals.CWWidget, ['components'], 'Easnoth-MapMenu');
$core.addMethod(
$core.method({
selector: "addComponent:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._components())._add_(self._newChild_(aClass));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addComponent:",{aClass:aClass},$globals.CWActionMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "addComponent: aClass\x0a\x09self components add: (self newChild: aClass)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "components", "newChild:"]
}),
$globals.CWActionMenu);

$core.addMethod(
$core.method({
selector: "children",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._components();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"children",{},$globals.CWActionMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "children\x0a\x09^ self components",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["components"]
}),
$globals.CWActionMenu);

$core.addMethod(
$core.method({
selector: "components",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@components"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "components\x0a\x09^ components",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWActionMenu);

$core.addMethod(
$core.method({
selector: "isRoot",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isRoot\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWActionMenu);

$core.addMethod(
$core.method({
selector: "newChild:",
protocol: 'factory',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(aClass)._new())._parent_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newChild:",{aClass:aClass},$globals.CWActionMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "newChild: aClass\x0a\x09^ aClass new parent: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["parent:", "new"]
}),
$globals.CWActionMenu);

$core.addMethod(
$core.method({
selector: "remove",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._components())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._remove();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove",{},$globals.CWActionMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "remove\x0a\x09self components do: [:each |\x0a\x09\x09each remove].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "components", "remove"]
}),
$globals.CWActionMenu);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._components())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._renderOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.CWActionMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09self components do: [:each |\x0a\x09\x09each renderOn: html ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "components", "renderOn:"]
}),
$globals.CWActionMenu);

$core.addMethod(
$core.method({
selector: "root",
protocol: 'accessing',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "root\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWActionMenu);



$core.addClass('CWFightMenu', $globals.CWActionMenu, [], 'Easnoth-MapMenu');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWFightMenu.comment="This action menu is dedicated fo fights.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialize-release',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
function $CWMonsterWatcher(){return $globals.CWMonsterWatcher||(typeof CWMonsterWatcher=="undefined"?nil:CWMonsterWatcher)}
function $CWDices(){return $globals.CWDices||(typeof CWDices=="undefined"?nil:CWDices)}
function $CWMapControls(){return $globals.CWMapControls||(typeof CWMapControls=="undefined"?nil:CWMapControls)}
function $CWTurnWatcher(){return $globals.CWTurnWatcher||(typeof CWTurnWatcher=="undefined"?nil:CWTurnWatcher)}
function $CWEndGameEvent(){return $globals.CWEndGameEvent||(typeof CWEndGameEvent=="undefined"?nil:CWEndGameEvent)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CWFightMenu.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@components"]=$recv($Array())._new();
self._addComponent_($CWMonsterWatcher());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addComponent:"]=1;
//>>excludeEnd("ctx");
self._addComponent_($CWDices());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addComponent:"]=2;
//>>excludeEnd("ctx");
self._addComponent_($CWMapControls());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addComponent:"]=3;
//>>excludeEnd("ctx");
self._addComponent_($CWTurnWatcher());
self._appendToJQuery_("#global"._asJQuery());
$recv(self._announcer())._on_do_($CWEndGameEvent(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._remove();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.CWFightMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09components := Array new.\x0a\x09self addComponent: CWMonsterWatcher.\x0a\x09self addComponent: CWDices.\x0a\x09self addComponent: CWMapControls.\x0a\x09self addComponent: CWTurnWatcher.\x0a\x09self appendToJQuery: '#global' asJQuery.\x0a\x09self announcer\x0a\x09\x09on: CWEndGameEvent\x0a\x09\x09do: [ self remove ]",
referencedClasses: ["Array", "CWMonsterWatcher", "CWDices", "CWMapControls", "CWTurnWatcher", "CWEndGameEvent"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new", "addComponent:", "appendToJQuery:", "asJQuery", "on:do:", "announcer", "remove"]
}),
$globals.CWFightMenu);

$core.addMethod(
$core.method({
selector: "menuClass",
protocol: 'accessing',
fn: function (){
var self=this;
return ".menuEditor";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "menuClass\x0a\x09^ '.menuEditor'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWFightMenu);



$core.addClass('CWActionMenuComponent', $globals.CWWidget, ['box'], 'Easnoth-MapMenu');
$core.addMethod(
$core.method({
selector: "children",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=[];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "children\x0a\x09^ #()",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWActionMenuComponent);

$core.addMethod(
$core.method({
selector: "remove",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self["@box"])._asJQuery())._remove();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove",{},$globals.CWActionMenuComponent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "remove\x0a\x09box asJQuery remove",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove", "asJQuery"]
}),
$globals.CWActionMenuComponent);



$core.addClass('CWDices', $globals.CWActionMenuComponent, ['subBox'], 'Easnoth-MapMenu');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWDices.comment="SHOULD HAVE DICES AS IV AND THEN USE NORMAL TREE STUFF TO DRAW.\x0a\x0aThis is top right menu. It displays the results of any fight.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "firstLoad",
protocol: 'initialize-release',
fn: function (){
var self=this;
function $CWDiceDeath(){return $globals.CWDiceDeath||(typeof CWDiceDeath=="undefined"?nil:CWDiceDeath)}
function $CWDiceMiss(){return $globals.CWDiceMiss||(typeof CWDiceMiss=="undefined"?nil:CWDiceMiss)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv(self["@subBox"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($CWDiceDeath())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($1)._renderOn_callback_(html,(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["renderOn:callback:"]=1;
//>>excludeEnd("ctx");
return $recv($recv($CWDiceMiss())._new())._renderOn_callback_(html,(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"firstLoad",{},$globals.CWDices)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "firstLoad\x0a    subBox contents: [ :html | \x0a\x09\x09   CWDiceDeath new renderOn: html callback: [ ].\x0a           CWDiceMiss new renderOn: html callback: [ ] ].",
referencedClasses: ["CWDiceDeath", "CWDiceMiss"],
//>>excludeEnd("ide");
messageSends: ["contents:", "renderOn:callback:", "new"]
}),
$globals.CWDices);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialize-release',
fn: function (){
var self=this;
function $CWDicesRolledEvent(){return $globals.CWDicesRolledEvent||(typeof CWDicesRolledEvent=="undefined"?nil:CWDicesRolledEvent)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CWDices.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(self._announcer())._on_do_($CWDicesRolledEvent(),(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._showDices_(event);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.CWDices)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self announcer \x0a\x09\x09on: CWDicesRolledEvent\x0a\x09\x09do: [ :event | self showDices: event ].",
referencedClasses: ["CWDicesRolledEvent"],
//>>excludeEnd("ide");
messageSends: ["initialize", "on:do:", "announcer", "showDices:"]
}),
$globals.CWDices);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'initialize-release',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$5,$3,$6;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("mapMenuPanel dices");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=2;
//>>excludeEnd("ctx");
$recv($2)._class_("mapMenuPanelContainer");
$3=$recv($2)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(html)._img_("ressources/images/fight/fightResult.png");
$4=$recv(html)._div();
$recv($4)._style_("padding-top: 7px");
$5=$recv($4)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
self["@subBox"]=$5;
return self["@subBox"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$6=$recv($1)._yourself();
self["@box"]=$6;
self._firstLoad();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.CWDices)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09box := (html div \x0a\x09\x09class: 'mapMenuPanel dices';\x0a\x09\x09with: [\x0a\x09\x09\x09html div \x0a\x09\x09\x09\x09class: 'mapMenuPanelContainer';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html img: 'ressources/images/fight/fightResult.png'.\x0a\x09\x09\x09\x09\x09subBox := html div style: 'padding-top: 7px'; yourself ] ];\x0a\x09\x09yourself).\x0a\x09self firstLoad",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "img:", "style:", "yourself", "firstLoad"]
}),
$globals.CWDices);

$core.addMethod(
$core.method({
selector: "showDices:",
protocol: 'public',
fn: function (aResDices){
var self=this;
var cb;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
cb=(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(aResDices)._callback())._value_(aResDices);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
});
self._updateDices_kills_callBack_($recv(aResDices)._dices(),$recv(aResDices)._kills(),cb);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showDices:",{aResDices:aResDices,cb:cb},$globals.CWDices)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aResDices"],
source: "showDices: aResDices\x0a\x09| cb |\x0a\x09cb := [ aResDices callback value: aResDices ].\x0a\x09self updateDices: aResDices dices kills: aResDices kills callBack: cb.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "callback", "updateDices:kills:callBack:", "dices", "kills"]
}),
$globals.CWDices);

$core.addMethod(
$core.method({
selector: "updateDices:kills:callBack:",
protocol: 'private',
fn: function (dicesNb,kills,cb){
var self=this;
var tmp,dices,i,callback;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
function $CWDiceDeath(){return $globals.CWDiceDeath||(typeof CWDiceDeath=="undefined"?nil:CWDiceDeath)}
function $CWDiceMiss(){return $globals.CWDiceMiss||(typeof CWDiceMiss=="undefined"?nil:CWDiceMiss)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3;
dices=$recv($Array())._new_(dicesNb);
i=(0);
callback=(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
i=$recv(i).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
i;
$1=$recv(i).__eq(dicesNb);
return $recv($1)._ifTrue_(cb);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
});
(1)._to_do_(kills,(function(k){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=dices;
$4=$recv($CWDiceDeath())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._parent_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["parent:"]=1;
//>>excludeEnd("ctx");
return $recv($2)._at_put_(k,$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({k:k},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to:do:"]=1;
//>>excludeEnd("ctx");
$recv($recv(kills).__plus((1)))._to_do_(dicesNb,(function(j){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(dices)._at_put_(j,$recv($recv($CWDiceMiss())._new())._parent_(self));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({j:j},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to:do:"]=2;
//>>excludeEnd("ctx");
$recv(self["@subBox"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (1)._to_do_(dicesNb,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
tmp=$recv(dices)._atRandom();
tmp;
$recv(tmp)._renderOn_callback_(html,callback);
return $recv(dices)._remove_(tmp);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateDices:kills:callBack:",{dicesNb:dicesNb,kills:kills,cb:cb,tmp:tmp,dices:dices,i:i,callback:callback},$globals.CWDices)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["dicesNb", "kills", "cb"],
source: "updateDices: dicesNb kills: kills callBack: cb\x0a\x09\x22animate the dices and display them in random order\x22\x0a\x0a\x09| tmp dices i callback |\x0a\x09dices := Array new: dicesNb.\x0a\x09i := 0.\x0a\x09callback := [\x0a\x09\x09i := i + 1. \x0a\x09\x09(i = dicesNb) \x0a\x09\x09\x09ifTrue: cb].\x0a\x0a\x091 to: kills do: [ :k | dices at: k put: (CWDiceDeath new parent: self) ].\x0a\x09kills + 1 to: dicesNb do: [ :j | dices at: j put: (CWDiceMiss new parent: self) ].\x0a\x0a    subBox contents: [:html | \x0a\x09\x091 to: dicesNb do: [\x0a\x09\x09\x09tmp := dices atRandom.\x0a\x09\x09\x09tmp renderOn: html callback: callback.\x0a\x09\x09\x09dices remove: tmp ] ]",
referencedClasses: ["Array", "CWDiceDeath", "CWDiceMiss"],
//>>excludeEnd("ide");
messageSends: ["new:", "+", "ifTrue:", "=", "to:do:", "at:put:", "parent:", "new", "contents:", "atRandom", "renderOn:callback:", "remove:"]
}),
$globals.CWDices);



$core.addClass('CWMapControls', $globals.CWActionMenuComponent, [], 'Easnoth-MapMenu');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWMapControls.comment="This represents the bottom left map controls menu. It permits to move the map.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "go:",
protocol: 'actions',
fn: function (direction){
var self=this;
function $CWMapMoveEvent(){return $globals.CWMapMoveEvent||(typeof CWMapMoveEvent=="undefined"?nil:CWMapMoveEvent)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._announce_($recv($recv($CWMapMoveEvent())._new())._directionMethod_(direction));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"go:",{direction:direction},$globals.CWMapControls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["direction"],
source: "go: direction\x0a\x09self announce: (CWMapMoveEvent new directionMethod: direction)",
referencedClasses: ["CWMapMoveEvent"],
//>>excludeEnd("ide");
messageSends: ["announce:", "directionMethod:", "new"]
}),
$globals.CWMapControls);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$5,$6,$8,$9,$10,$11,$12,$13,$14,$15,$7,$3,$16;
self._setUpShortCuts();
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("mapMenuPanel mapWatcher");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$recv($1)._width_((500));
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=2;
//>>excludeEnd("ctx");
$recv($2)._class_("mapMenuPanelContainer");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$recv($2)._style_("position: relative; height: 100%");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["style:"]=1;
//>>excludeEnd("ctx");
$3=$recv($2)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$4=$recv(html)._h4();
$recv($4)._with_("MAP CONTROLS");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$5=$recv($4)._style_("position: absolute; bottom: 15%; left: 5%; width: 50%; text-align: left");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["style:"]=2;
//>>excludeEnd("ctx");
$5;
$6=$recv(html)._div();
$recv($6)._style_("position: absolute; width: 70%; height: 70%; top: 5%; right: 5%; background-image: url(ressources/images/fight/mapControls.png); background-repeat: no-repeat; background-position: center");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["style:"]=3;
//>>excludeEnd("ctx");
$7=$recv($6)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$8=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["button"]=1;
//>>excludeEnd("ctx");
$recv($8)._class_("mapButton mapLeft");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["class:"]=3;
//>>excludeEnd("ctx");
$9=$recv($8)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
return self._go_("left");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["go:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$9;
$10=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["button"]=2;
//>>excludeEnd("ctx");
$recv($10)._class_("mapButton mapRight");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["class:"]=4;
//>>excludeEnd("ctx");
$11=$recv($10)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
return self._go_("right");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["go:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["onClick:"]=2;
//>>excludeEnd("ctx");
$11;
$12=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["button"]=3;
//>>excludeEnd("ctx");
$recv($12)._class_("mapButton mapDown");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["class:"]=5;
//>>excludeEnd("ctx");
$13=$recv($12)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
return self._go_("down");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["go:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["onClick:"]=3;
//>>excludeEnd("ctx");
$13;
$14=$recv(html)._button();
$recv($14)._class_("mapButton mapUp");
$recv($14)._style_("position: absolute; left: 41%; top: 2%;");
$15=$recv($14)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
return self._go_("up");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,7)});
//>>excludeEnd("ctx");
}));
return $15;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
return $7;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$16=$recv($1)._yourself();
self["@box"]=$16;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.CWMapControls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09self setUpShortCuts.\x0a\x09box := html div \x0a\x09\x09class: 'mapMenuPanel mapWatcher';\x0a\x09\x09width: 500;\x0a\x09\x09with: [\x0a\x09\x09\x09html div \x0a\x09\x09\x09\x09class: 'mapMenuPanelContainer';\x0a\x09\x09\x09\x09style: 'position: relative; height: 100%';\x0a\x09\x09\x09\x09with: [\x0a            \x09    html h4\x0a                \x09        with: 'MAP CONTROLS';\x0a\x09\x09\x09\x09\x09\x09\x09style: 'position: absolute; bottom: 15%; left: 5%; width: 50%; text-align: left'.\x0a\x09\x09\x09\x09\x09html div\x0a\x09\x09\x09\x09\x09\x09style: 'position: absolute; width: 70%; height: 70%; top: 5%; right: 5%; background-image: url(ressources/images/fight/mapControls.png); background-repeat: no-repeat; background-position: center';\x0a\x09\x09\x09\x09\x09\x09with: [\x0a                \x09\x09html button\x0a\x09\x09\x09\x09\x09\x09\x09class: 'mapButton mapLeft';\x0a                       \x09\x09onClick: [self go: 'left'].\x0a               \x09 \x09\x09html button\x0a\x09\x09\x09\x09\x09\x09\x09class: 'mapButton mapRight';\x0a                        \x09onClick: [self go: 'right'].\x0a                \x09\x09html button\x0a\x09\x09\x09\x09\x09\x09\x09class: 'mapButton mapDown';\x0a                        \x09onClick: [self go: 'down'].\x0a                \x09\x09html button\x0a\x09\x09\x09\x09\x09\x09\x09class: 'mapButton mapUp';\x0a\x09\x09\x09\x09\x09\x09\x09style: 'position: absolute; left: 41%; top: 2%;';\x0a                        \x09onClick: [self go: 'up'] ] ]\x0a\x09];\x0a\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setUpShortCuts", "class:", "div", "width:", "with:", "style:", "h4", "button", "onClick:", "go:", "yourself"]
}),
$globals.CWMapControls);

$core.addMethod(
$core.method({
selector: "setUpShortCuts",
protocol: 'rendering',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUpShortCuts\x0a\x09\x22'body' asJQuery keyup:[:event |  | k |\x0a\x09\x09k := event keyCode.\x0a\x09\x09(k = 37 | k = 65) ifTrue: [self go: 'left'].\x0a\x09\x09(k = 39 | k = 68) ifTrue: [self go: 'right'].\x0a\x09\x09(k = 38 | k = 87) ifTrue: [self go: 'up'].\x0a\x09\x09(k = 40 | k = 83) ifTrue: [self go: 'down'].\x0a\x09].\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMapControls);



$core.addClass('CWMonsterWatcher', $globals.CWActionMenuComponent, ['monster', 'subBox'], 'Easnoth-MapMenu');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWMonsterWatcher.comment="This represetns a view on the monster for the user. It is the top left menu.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "emptyMonster",
protocol: 'accessing',
fn: function (){
var self=this;
function $CWMonster(){return $globals.CWMonster||(typeof CWMonster=="undefined"?nil:CWMonster)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($CWMonster())._emptyMonster();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"emptyMonster",{},$globals.CWMonsterWatcher)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "emptyMonster\x0a\x09^ CWMonster emptyMonster",
referencedClasses: ["CWMonster"],
//>>excludeEnd("ide");
messageSends: ["emptyMonster"]
}),
$globals.CWMonsterWatcher);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialize-release',
fn: function (){
var self=this;
function $CWMonsterUpdateEvent(){return $globals.CWMonsterUpdateEvent||(typeof CWMonsterUpdateEvent=="undefined"?nil:CWMonsterUpdateEvent)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CWMonsterWatcher.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(self._announcer())._on_do_($CWMonsterUpdateEvent(),(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._watchMonster_($recv(event)._monster());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.CWMonsterWatcher)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self announcer \x0a\x09\x09on: CWMonsterUpdateEvent\x0a\x09\x09do: [ :event | self watchMonster: event monster ]",
referencedClasses: ["CWMonsterUpdateEvent"],
//>>excludeEnd("ide");
messageSends: ["initialize", "on:do:", "announcer", "watchMonster:", "monster"]
}),
$globals.CWMonsterWatcher);

$core.addMethod(
$core.method({
selector: "monster",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@monster"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._emptyMonster();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"monster",{},$globals.CWMonsterWatcher)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "monster\x0a\x09^ monster ifNil: [self emptyMonster]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "emptyMonster"]
}),
$globals.CWMonsterWatcher);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("mapMenuPanel monsterWatcher");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=2;
//>>excludeEnd("ctx");
$recv($2)._class_("mapMenuPanelContainer");
$3=$recv($2)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(html)._img_("ressources/images/fight/selectedMonster.png");
self["@subBox"]=$recv(html)._div();
return self["@subBox"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$4=$recv($1)._yourself();
self["@box"]=$4;
self._update();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.CWMonsterWatcher)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09box := (html div \x0a\x09\x09class: 'mapMenuPanel monsterWatcher';\x0a\x09\x09with: [\x0a\x09\x09\x09html div \x0a\x09\x09\x09\x09class: 'mapMenuPanelContainer';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html img: 'ressources/images/fight/selectedMonster.png'.\x0a\x09\x09\x09\x09\x09subBox := html div ] ];\x0a\x09\x09yourself).\x0a\x09self update",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "img:", "yourself", "update"]
}),
$globals.CWMonsterWatcher);

$core.addMethod(
$core.method({
selector: "update",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$6,$7,$8,$5,$9,$11,$13,$12,$14,$19,$18,$17,$16,$21,$20,$15,$22,$24,$23,$10,$25,$27,$28,$29,$26,$30,$32,$34,$33,$35,$39,$38,$37,$36,$31,$2;
$recv(self["@subBox"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._table();
$recv($1)._class_("tableStats");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$3=$recv(html)._tr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["tr"]=1;
//>>excludeEnd("ctx");
return $recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$4=$recv(html)._td();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["td"]=1;
//>>excludeEnd("ctx");
$recv($4)._class_("rightSide");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$5=$recv($4)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
$6=$recv(html)._tr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["tr"]=2;
//>>excludeEnd("ctx");
$recv($6)._with_("hp : ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$7=$recv(html)._tr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["tr"]=3;
//>>excludeEnd("ctx");
$recv($7)._with_("move : ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
$8=$recv(html)._tr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["tr"]=4;
//>>excludeEnd("ctx");
return $recv($8)._with_("range : ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["with:"]=6;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$5;
$9=$recv(html)._td();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["td"]=2;
//>>excludeEnd("ctx");
$recv($9)._class_("leftSide");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["class:"]=3;
//>>excludeEnd("ctx");
$recv($9)._style_("width: 30px");
$10=$recv($9)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
$11=$recv(html)._tr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["tr"]=5;
//>>excludeEnd("ctx");
$13=self._monster();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["monster"]=1;
//>>excludeEnd("ctx");
$12=$recv($13)._hp();
$recv($11)._with_($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["with:"]=8;
//>>excludeEnd("ctx");
$14=$recv(html)._tr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["tr"]=6;
//>>excludeEnd("ctx");
$19=self._monster();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["monster"]=2;
//>>excludeEnd("ctx");
$18=$recv($19)._currentMove();
$17=$recv($18)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$16=$recv($17).__comma("/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx[","]=2;
//>>excludeEnd("ctx");
$21=self._monster();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["monster"]=3;
//>>excludeEnd("ctx");
$20=$recv($21)._move();
$15=$recv($16).__comma($20);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($14)._with_($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["with:"]=9;
//>>excludeEnd("ctx");
$22=$recv(html)._tr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["tr"]=7;
//>>excludeEnd("ctx");
$24=self._monster();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["monster"]=4;
//>>excludeEnd("ctx");
$23=$recv($24)._range();
return $recv($22)._with_($23);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["with:"]=10;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=7;
//>>excludeEnd("ctx");
$10;
$25=$recv(html)._td();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["td"]=3;
//>>excludeEnd("ctx");
$recv($25)._class_("rightSide");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["class:"]=4;
//>>excludeEnd("ctx");
$26=$recv($25)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
$27=$recv(html)._tr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["tr"]=8;
//>>excludeEnd("ctx");
$recv($27)._with_("dices : ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["with:"]=12;
//>>excludeEnd("ctx");
$28=$recv(html)._tr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["tr"]=9;
//>>excludeEnd("ctx");
$recv($28)._with_("attack : ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["with:"]=13;
//>>excludeEnd("ctx");
$29=$recv(html)._tr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["tr"]=10;
//>>excludeEnd("ctx");
return $recv($29)._with_("special : ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["with:"]=14;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=11;
//>>excludeEnd("ctx");
$26;
$30=$recv(html)._td();
$recv($30)._class_("leftSide");
$31=$recv($30)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
$32=$recv(html)._tr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["tr"]=11;
//>>excludeEnd("ctx");
$34=self._monster();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["monster"]=5;
//>>excludeEnd("ctx");
$33=$recv($34)._dices();
$recv($32)._with_($33);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["with:"]=16;
//>>excludeEnd("ctx");
$35=$recv(html)._tr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["tr"]=12;
//>>excludeEnd("ctx");
$39=self._monster();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["monster"]=6;
//>>excludeEnd("ctx");
$38=$recv($39)._attack();
$37=$recv($38)._asString();
$36=$recv($37).__comma(" %");
$recv($35)._with_($36);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["with:"]=17;
//>>excludeEnd("ctx");
return $recv($recv(html)._tr())._with_($recv(self._monster())._special());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,7)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=15;
//>>excludeEnd("ctx");
return $31;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update",{},$globals.CWMonsterWatcher)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x09\x22I hide some stuff for release\x22\x0a\x0a        subBox contents: [:html | \x0a                html table\x0a\x09\x09\x09class: 'tableStats';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09html tr with: [\x0a\x09\x09\x09\x09html td \x0a\x09\x09\x09\x09\x09class: 'rightSide';\x0a\x09\x09\x09\x09\x09with: [\x0a                        \x09\x09html tr with: 'hp : '.\x0a                        \x09\x09html tr with: 'move : '.\x0a                        \x09\x09html tr with: 'range : '.\x0a\x09\x09\x09\x09].\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09html td \x0a\x09\x09\x09\x09\x09class: 'leftSide';\x0a\x09\x09\x09\x09\x09style: 'width: 30px';\x0a\x09\x09\x09\x09\x09with: [\x0a                        \x09\x09html tr with: self monster hp.\x0a                        \x09\x09html tr with: self monster currentMove asString, '/', self monster move.\x0a                        \x09\x09html tr with: self monster range.\x0a\x09\x09\x09\x09].\x0a\x09\x09\x09\x09html td \x0a\x09\x09\x09\x09\x09class: 'rightSide';\x0a\x09\x09\x09\x09\x09with: [\x0a                       \x09\x09\x09html tr with: 'dices : '.\x0a                        \x09\x09html tr with: 'attack : '.\x0a                       \x09\x09\x09html tr with: 'special : '.\x0a\x09\x09\x09\x09].\x0a\x09\x09\x09\x09html td \x0a\x09\x09\x09\x09\x09class: 'leftSide';\x0a\x09\x09\x09\x09\x09with: [\x0a                       \x09\x09\x09html tr with: self monster dices.\x0a                        \x09\x09html tr with: self monster attack asString,' %'.\x0a                       \x09\x09\x09html tr with: self monster special.\x0a\x09\x09\x09\x09]\x0a\x09\x09\x09].\x0a\x09\x09].\x0a\x09\x09\x22html h5 with: 'debug'.\x0a                html span with: 'state : ', self monster state class.\x0a\x09\x09\x09\x09html br.\x0a                html span with: 'attackPot : ', self monster attackPotential.\x0a\x09\x09\x09\x09html br.\x0a                html span with: 'cell : ', self monster parent printString.\x22\x0a        ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "class:", "table", "with:", "tr", "td", "style:", "hp", "monster", ",", "asString", "currentMove", "move", "range", "dices", "attack", "special"]
}),
$globals.CWMonsterWatcher);

$core.addMethod(
$core.method({
selector: "watchMonster:",
protocol: 'initialize-release',
fn: function (aMonster){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@monster"]).__eq(aMonster);
if(!$core.assert($1)){
self["@monster"]=aMonster;
self["@monster"];
self._update();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"watchMonster:",{aMonster:aMonster},$globals.CWMonsterWatcher)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "watchMonster: aMonster\x0a\x09monster = aMonster\x0a\x09\x09ifFalse: [ \x0a\x09\x09\x09monster := aMonster.\x0a\x09\x09\x09self update ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "=", "update"]
}),
$globals.CWMonsterWatcher);



$core.addClass('CWTurnWatcher', $globals.CWActionMenuComponent, [], 'Easnoth-MapMenu');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWTurnWatcher.comment="This represents additional informations for the game. This is the bottom right menu.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $CWNextTurnEvent(){return $globals.CWNextTurnEvent||(typeof CWNextTurnEvent=="undefined"?nil:CWNextTurnEvent)}
function $Browser(){return $globals.Browser||(typeof Browser=="undefined"?nil:Browser)}
function $CWEndGameEvent(){return $globals.CWEndGameEvent||(typeof CWEndGameEvent=="undefined"?nil:CWEndGameEvent)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$6,$5,$7,$8,$9,$10,$11,$12,$3,$13;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("mapMenuPanel stuff");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(html)._div();
$recv($2)._class_("mapMenuPanelContainer");
$3=$recv($2)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$4=$recv(html)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["a"]=1;
//>>excludeEnd("ctx");
$recv($4)._href_("#");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["href:"]=1;
//>>excludeEnd("ctx");
$recv($4)._with_("End turn");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$5=$recv($4)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$6=$recv($CWNextTurnEvent())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["new"]=1;
//>>excludeEnd("ctx");
return self._announce_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["announce:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$5;
$recv(html)._br();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["br"]=1;
//>>excludeEnd("ctx");
$7=$recv(html)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["a"]=2;
//>>excludeEnd("ctx");
$recv($7)._href_("#");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["href:"]=2;
//>>excludeEnd("ctx");
$recv($7)._with_("Class browser");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$8=$recv($7)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv($Browser())._open();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["onClick:"]=2;
//>>excludeEnd("ctx");
$8;
$recv(html)._br();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["br"]=2;
//>>excludeEnd("ctx");
$9=$recv(html)._a();
$recv($9)._href_("#");
$recv($9)._with_("Menu");
$10=$recv($9)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._announce_($recv($CWEndGameEvent())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)});
//>>excludeEnd("ctx");
}));
$10;
$recv(html)._br();
$11=$recv(html)._iframe();
$recv($11)._src_("//www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FEasnoth&amp;send=false&amp;layout=box_count&amp;width=450&amp;show_faces=true&amp;font&amp;colorscheme=light&amp;action=like&amp;height=90&amp;appId=97614502002");
$recv($11)._at_put_("frameborder",(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($11)._at_put_("scrolling","no");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($11)._style_("border:none; overflow:hidden; width:80px; height:21px; margin-top: 5px;");
$12=$recv($11)._at_put_("allowTransparency","true");
return $12;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$13=$recv($1)._yourself();
self["@box"]=$13;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.CWTurnWatcher)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09box := html div \x0a\x09\x09class: 'mapMenuPanel stuff'; \x0a\x09\x09with: [\x0a\x09\x09\x09html div \x0a\x09\x09\x09\x09class: 'mapMenuPanelContainer';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09html a \x0a\x09\x09\x09\x09\x09href: '#';\x0a\x09\x09\x09\x09\x09with: 'End turn'; \x0a\x09\x09\x09\x09\x09onClick: [self announce: CWNextTurnEvent new].\x0a\x09\x09\x09\x09html br.\x0a\x09\x09\x09\x09html a \x0a\x09\x09\x09\x09\x09href: '#';\x0a\x09\x09\x09\x09\x09with: 'Class browser'; \x0a\x09\x09\x09\x09\x09onClick: [Browser open].\x0a\x09\x09\x09\x09html br.\x0a\x09\x09\x09\x09html a \x0a\x09\x09\x09\x09\x09href: '#';\x0a\x09\x09\x09\x09\x09with: 'Menu'; \x0a\x09\x09\x09\x09\x09onClick: [self announce: CWEndGameEvent new].\x0a\x09\x09\x09\x09html br.\x0a\x09\x09\x09\x09html iframe\x0a\x09\x09\x09\x09\x09src: '//www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FEasnoth&amp;send=false&amp;layout=box_count&amp;width=450&amp;show_faces=true&amp;font&amp;colorscheme=light&amp;action=like&amp;height=90&amp;appId=97614502002';\x0a\x09\x09\x09\x09\x09at: 'frameborder' put: 0;\x0a\x09\x09\x09\x09\x09at: 'scrolling' put: 'no';\x0a\x09\x09\x09\x09\x09style:'border:none; overflow:hidden; width:80px; height:21px; margin-top: 5px;';\x0a\x09\x09\x09\x09\x09at: 'allowTransparency' put: 'true'.\x0a\x09] ];\x0a\x09yourself.",
referencedClasses: ["CWNextTurnEvent", "Browser", "CWEndGameEvent"],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "href:", "a", "onClick:", "announce:", "new", "br", "open", "src:", "iframe", "at:put:", "style:", "yourself"]
}),
$globals.CWTurnWatcher);



$core.addClass('CWDice', $globals.CWWidget, ['counter'], 'Easnoth-MapMenu');
$core.addMethod(
$core.method({
selector: "animate:callBack:",
protocol: 'rendering',
fn: function (dice,animationFinished){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@counter"]=(0);
self._animation_callBack_(dice,animationFinished);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"animate:callBack:",{dice:dice,animationFinished:animationFinished},$globals.CWDice)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["dice", "animationFinished"],
source: "animate: dice callBack: animationFinished\x0a\x09counter := 0.\x0a\x09self animation: dice callBack: animationFinished.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["animation:callBack:"]
}),
$globals.CWDice);

$core.addMethod(
$core.method({
selector: "animation:callBack:",
protocol: 'rendering',
fn: function (dice,animationFinished){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._jqueryAnimate_callBack_(dice,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._nextAnimation_callBack_(dice,animationFinished);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"animation:callBack:",{dice:dice,animationFinished:animationFinished},$globals.CWDice)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["dice", "animationFinished"],
source: "animation: dice callBack: animationFinished\x0a\x09\x22Triggers once the rolling dice animation and checks what to do next\x22\x0a\x09self jqueryAnimate: dice callBack: [ self nextAnimation: dice callBack: animationFinished ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["jqueryAnimate:callBack:", "nextAnimation:callBack:"]
}),
$globals.CWDice);

$core.addMethod(
$core.method({
selector: "backgroundPictureUrl",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._diceRepo()).__comma("diceBackground.png");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"backgroundPictureUrl",{},$globals.CWDice)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "backgroundPictureUrl\x0a\x09^\x09self diceRepo, 'diceBackground.png'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "diceRepo"]
}),
$globals.CWDice);

$core.addMethod(
$core.method({
selector: "diceRepo",
protocol: 'accessing',
fn: function (){
var self=this;
return "ressources/images/fight/";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "diceRepo\x0a\x09^ 'ressources/images/fight/'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWDice);

$core.addMethod(
$core.method({
selector: "endAnimation:callBack:",
protocol: 'rendering',
fn: function (dice,animationFinished){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv("url(".__comma(self._url())).__comma(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(dice)._css_put_("background-image",$1);
self._jqueryAnimate_callBack_(dice,animationFinished);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"endAnimation:callBack:",{dice:dice,animationFinished:animationFinished},$globals.CWDice)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["dice", "animationFinished"],
source: "endAnimation: dice callBack: animationFinished\x0a\x09\x22Terminates the rolling dice animation. Displays the result and executes the callback\x22\x0a\x09dice css: 'background-image' put: 'url(' , self url , ')'.\x0a\x09self jqueryAnimate: dice callBack: animationFinished",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["css:put:", ",", "url", "jqueryAnimate:callBack:"]
}),
$globals.CWDice);

$core.addMethod(
$core.method({
selector: "jqueryAnimate:callBack:",
protocol: 'rendering',
fn: function (dice,nextAnim){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv(dice)._animate_options_($globals.HashedCollection._newFromPairs_(["border-spacing",(-50)]),$globals.HashedCollection._newFromPairs_(["step",(function(now,fx){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($recv(fx)._elem())._asJQuery();
$2=$recv("1px ".__comma($recv(now)._asString())).__comma("px");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($1)._css_put_("background-position",$2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({now:now,fx:fx},$ctx1,1)});
//>>excludeEnd("ctx");
}),"duration",(200),"easing","linear","complete",nextAnim]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"jqueryAnimate:callBack:",{dice:dice,nextAnim:nextAnim},$globals.CWDice)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["dice", "nextAnim"],
source: "jqueryAnimate: dice callBack: nextAnim\x0a\x09\x22Rolling dice animation with jquery\x22\x0a\x09dice \x0a\x09\x09animate: #{'border-spacing' -> -50 }\x0a   \x09 \x09options:  #{\x0a\x09\x09\x09'step' -> [ :now :fx | fx elem asJQuery css: 'background-position' put: '1px ', now asString,'px' ] .\x0a        \x09'duration' -> 200 .\x0a        \x09'easing' -> 'linear' .\x0a\x09\x09\x09'complete' -> nextAnim }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["animate:options:", "css:put:", "asJQuery", "elem", ",", "asString"]
}),
$globals.CWDice);

$core.addMethod(
$core.method({
selector: "nextAnimation:callBack:",
protocol: 'rendering',
fn: function (dice,animationFinished){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self["@counter"]=$recv(self["@counter"]).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$1=$recv(self["@counter"]).__lt((2).__plus((7)._atRandom()));
if($core.assert($1)){
self._animation_callBack_(dice,animationFinished);
} else {
self._endAnimation_callBack_(dice,animationFinished);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextAnimation:callBack:",{dice:dice,animationFinished:animationFinished},$globals.CWDice)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["dice", "animationFinished"],
source: "nextAnimation: dice callBack: animationFinished \x0a\x09\x22After a random delay, the rolling dice animation stops, displaying the result and executing the callback\x22\x0a\x09counter := counter + 1.\x0a\x09counter < (2 + 7 atRandom) \x0a\x09\x09ifTrue: [ self animation: dice callBack: animationFinished ] \x0a\x09\x09ifFalse: [self endAnimation: dice callBack: animationFinished ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+", "ifTrue:ifFalse:", "<", "atRandom", "animation:callBack:", "endAnimation:callBack:"]
}),
$globals.CWDice);

$core.addMethod(
$core.method({
selector: "renderOn:callback:",
protocol: 'rendering',
fn: function (html,cb){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($recv(html)._img_(self._backgroundPictureUrl()))._asJQuery();
$3=$recv("url(".__comma(self._urlRoll())).__comma(") 1px 0");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._css_put_("background",$3);
self._animate_callBack_($1,cb);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:callback:",{html:html,cb:cb},$globals.CWDice)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html", "cb"],
source: "renderOn: html callback: cb\x0a\x09 self animate: ((html img: self backgroundPictureUrl) asJQuery css: 'background' put: 'url(', self urlRoll, ') 1px 0') callBack: cb",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["animate:callBack:", "css:put:", "asJQuery", "img:", "backgroundPictureUrl", ",", "urlRoll"]
}),
$globals.CWDice);

$core.addMethod(
$core.method({
selector: "url",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsiblity();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"url",{},$globals.CWDice)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "url\x0a\x09self subclassResponsiblity",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsiblity"]
}),
$globals.CWDice);

$core.addMethod(
$core.method({
selector: "urlRoll",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._diceRepo()).__comma("diceRoll.png");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"urlRoll",{},$globals.CWDice)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "urlRoll\x0a\x09^ self diceRepo, 'diceRoll.png'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "diceRepo"]
}),
$globals.CWDice);



$core.addClass('CWDiceDeath', $globals.CWDice, [], 'Easnoth-MapMenu');
$core.addMethod(
$core.method({
selector: "url",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._diceRepo()).__comma("diceDeath.png");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"url",{},$globals.CWDiceDeath)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "url\x0a\x09^ self diceRepo, 'diceDeath.png'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "diceRepo"]
}),
$globals.CWDiceDeath);



$core.addClass('CWDiceMiss', $globals.CWDice, [], 'Easnoth-MapMenu');
$core.addMethod(
$core.method({
selector: "url",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._diceRepo()).__comma("diceMiss.png");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"url",{},$globals.CWDiceMiss)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "url\x0a\x09^ self diceRepo, 'diceMiss.png'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "diceRepo"]
}),
$globals.CWDiceMiss);


});
