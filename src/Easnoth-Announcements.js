define("amber-easnoth/Easnoth-Announcements", ["amber/boot", "amber_core/Kernel-Announcements"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Easnoth-Announcements');
$core.packages["Easnoth-Announcements"].transport = {"type":"amd","amdNamespace":"amber-easnoth"};

$core.addClass('CWEasnothAnnouncement', $globals.SystemAnnouncement, [], 'Easnoth-Announcements');


$core.addClass('CWBootstrapEvent', $globals.CWEasnothAnnouncement, [], 'Easnoth-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWBootstrapEvent.comment="All announcements that are related to the bootstrap of the game";
//>>excludeEnd("ide");


$core.addClass('CWGameStart', $globals.CWBootstrapEvent, [], 'Easnoth-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWGameStart.comment="Triggered when all the objects (JSON, images) needed for the game are loaded to start the game.";
//>>excludeEnd("ide");


$core.addClass('CWObjectLoaded', $globals.CWBootstrapEvent, [], 'Easnoth-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWObjectLoaded.comment="Trggered when an object requested (JSON, image) is loaded.";
//>>excludeEnd("ide");


$core.addClass('CWWaitForObject', $globals.CWBootstrapEvent, [], 'Easnoth-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWWaitForObject.comment="Triggered when an asynchronous request is sent to get a JSON or an image";
//>>excludeEnd("ide");


$core.addClass('CWEndGameEvent', $globals.CWEasnothAnnouncement, [], 'Easnoth-Announcements');


$core.addClass('CWMapMoveEvent', $globals.CWEasnothAnnouncement, ['directionMethod'], 'Easnoth-Announcements');
$core.addMethod(
$core.method({
selector: "directionMethod",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@directionMethod"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "directionMethod\x0a\x09^ directionMethod",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMapMoveEvent);

$core.addMethod(
$core.method({
selector: "directionMethod:",
protocol: 'accessing',
fn: function (aMethod){
var self=this;
self["@directionMethod"]=aMethod;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "directionMethod: aMethod\x0a\x09directionMethod := aMethod",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMapMoveEvent);



$core.addClass('CWMenuUpdateEvent', $globals.CWEasnothAnnouncement, [], 'Easnoth-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWMenuUpdateEvent.comment="All announcements that are related to the menu that need to be updated.";
//>>excludeEnd("ide");


$core.addClass('CWDicesRolledEvent', $globals.CWMenuUpdateEvent, ['dices', 'kills', 'callback'], 'Easnoth-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWDicesRolledEvent.comment="Triggered when the dices are rolled during an attack to display them on the right menu";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "callback",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@callback"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "callback\x0a\x09^ callback",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWDicesRolledEvent);

$core.addMethod(
$core.method({
selector: "callback:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@callback"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "callback: aBlock\x0a\x09callback := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWDicesRolledEvent);

$core.addMethod(
$core.method({
selector: "dices",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@dices"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dices\x0a\x09^ dices",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWDicesRolledEvent);

$core.addMethod(
$core.method({
selector: "dices:",
protocol: 'accessing',
fn: function (int){
var self=this;
self["@dices"]=int;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["int"],
source: "dices: int\x0a\x09dices := int",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWDicesRolledEvent);

$core.addMethod(
$core.method({
selector: "kills",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@kills"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "kills\x0a\x09^ kills",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWDicesRolledEvent);

$core.addMethod(
$core.method({
selector: "kills:",
protocol: 'accessing',
fn: function (int){
var self=this;
self["@kills"]=int;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["int"],
source: "kills: int\x0a\x09kills := int",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWDicesRolledEvent);



$core.addClass('CWMonsterUpdateEvent', $globals.CWMenuUpdateEvent, ['monster'], 'Easnoth-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWMonsterUpdateEvent.comment="Triggered when a monster is selected to update the right menu";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "monster",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@monster"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "monster\x0a\x09^ monster",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMonsterUpdateEvent);

$core.addMethod(
$core.method({
selector: "monster:",
protocol: 'accessing',
fn: function (aMonster){
var self=this;
self["@monster"]=aMonster;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "monster: aMonster\x0a\x09monster := aMonster",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMonsterUpdateEvent);



$core.addClass('CWNextTurnEvent', $globals.CWEasnothAnnouncement, [], 'Easnoth-Announcements');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWNextTurnEvent.comment="Triggered to request the game to let the other player play.";
//>>excludeEnd("ide");


$core.addClass('CWEasnothAnnouncer', $globals.SystemAnnouncer, [], 'Easnoth-Announcements');
$core.addMethod(
$core.method({
selector: "reset",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@subscriptions"])._reset();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["reset"]=1;
//>>excludeEnd("ctx");
$recv(self._class())._reset();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reset",{},$globals.CWEasnothAnnouncer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reset\x0a\x09subscriptions reset.\x0a\x09self class reset",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reset", "class"]
}),
$globals.CWEasnothAnnouncer);


$core.addMethod(
$core.method({
selector: "reset",
protocol: 'not yet classified',
fn: function (){
var self=this;
self["@current"]=nil;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reset\x0a\x09current := nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWEasnothAnnouncer.klass);

});
