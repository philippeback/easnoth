define("amber-easnoth/Easnoth-Export", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Easnoth-Export');
$core.packages["Easnoth-Export"].transport = {"type":"amd","amdNamespace":"amber-easnoth"};

$core.addClass('CWVisitor', $globals.Object, [], 'Easnoth-Export');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWVisitor.comment="I am an abstract visitor that can visit the whole tree of map model objects.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "visitCell:",
protocol: 'visiting',
fn: function (aCell){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitCell:",{aCell:aCell},$globals.CWVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "visitCell: aCell\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWVisitor);

$core.addMethod(
$core.method({
selector: "visitChildTrees:",
protocol: 'visiting - public',
fn: function (aBusinessObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(aBusinessObject)._children())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._visitTree_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitChildTrees:",{aBusinessObject:aBusinessObject},$globals.CWVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBusinessObject"],
source: "visitChildTrees: aBusinessObject\x0a\x09aBusinessObject children do: [ :each |\x0a\x09\x09self visitTree: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "children", "visitTree:"]
}),
$globals.CWVisitor);

$core.addMethod(
$core.method({
selector: "visitChildren:",
protocol: 'visiting - public',
fn: function (aBusinessObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(aBusinessObject)._children())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._accept_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitChildren:",{aBusinessObject:aBusinessObject},$globals.CWVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBusinessObject"],
source: "visitChildren: aBusinessObject\x0a\x09aBusinessObject children do: [ :each |\x0a\x09\x09each accept: self ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "children", "accept:"]
}),
$globals.CWVisitor);

$core.addMethod(
$core.method({
selector: "visitGameOverTile:",
protocol: 'visiting',
fn: function (aGameOverTile){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitGameOverTile:",{aGameOverTile:aGameOverTile},$globals.CWVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aGameOverTile"],
source: "visitGameOverTile: aGameOverTile\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWVisitor);

$core.addMethod(
$core.method({
selector: "visitHeros:",
protocol: 'visiting',
fn: function (aHeros){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitHeros:",{aHeros:aHeros},$globals.CWVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aHeros"],
source: "visitHeros: aHeros\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWVisitor);

$core.addMethod(
$core.method({
selector: "visitMap:",
protocol: 'visiting',
fn: function (aMap){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitMap:",{aMap:aMap},$globals.CWVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMap"],
source: "visitMap: aMap\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWVisitor);

$core.addMethod(
$core.method({
selector: "visitOverTile:",
protocol: 'visiting',
fn: function (anOverTile){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{anOverTile:anOverTile},$globals.CWVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anOverTile"],
source: "visitOverTile: anOverTile\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWVisitor);

$core.addMethod(
$core.method({
selector: "visitRow:",
protocol: 'visiting',
fn: function (aRow){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitRow:",{aRow:aRow},$globals.CWVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRow"],
source: "visitRow: aRow\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWVisitor);

$core.addMethod(
$core.method({
selector: "visitTile:",
protocol: 'visiting',
fn: function (aTile){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},$globals.CWVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTile"],
source: "visitTile: aTile\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWVisitor);

$core.addMethod(
$core.method({
selector: "visitTree:",
protocol: 'visiting - public',
fn: function (aComponent){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aComponent)._accept_(self);
self._visitChildTrees_(aComponent);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitTree:",{aComponent:aComponent},$globals.CWVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aComponent"],
source: "visitTree: aComponent\x0a\x09aComponent accept: self.\x0a\x09self visitChildTrees: aComponent.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["accept:", "visitChildTrees:"]
}),
$globals.CWVisitor);

$core.addMethod(
$core.method({
selector: "visitUnit:",
protocol: 'visiting',
fn: function (aUnit){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitUnit:",{aUnit:aUnit},$globals.CWVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aUnit"],
source: "visitUnit: aUnit\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWVisitor);


$globals.CWVisitor.klass.iVarNames = ['singleton'];

$core.addClass('CWJsonWriter', $globals.CWVisitor, ['stream', 'indentLevel', 'otNumber'], 'Easnoth-Export');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWJsonWriter.comment="I can export the current map to json data fromat.\x0a\x0aCWJsonWriter new exportMap: CWMap default";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "commaCr",
protocol: 'stream HL API',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._nextPutAll_(",");
$1=self._cr();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commaCr",{},$globals.CWJsonWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commaCr\x0a\x09self \x0a\x09\x09nextPutAll: ',';\x0a\x09\x09cr",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "cr"]
}),
$globals.CWJsonWriter);

$core.addMethod(
$core.method({
selector: "cr",
protocol: 'stream API',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@stream"])._cr();
(1)._to_do_(self["@indentLevel"],(function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@stream"])._tab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cr",{},$globals.CWJsonWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cr\x0a\x09stream cr.\x0a\x091 to: indentLevel do: [ :each | stream tab ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["cr", "to:do:", "tab"]
}),
$globals.CWJsonWriter);

$core.addMethod(
$core.method({
selector: "crIndentDecr",
protocol: 'stream API',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._decreaseIndent();
self._cr();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"crIndentDecr",{},$globals.CWJsonWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "crIndentDecr\x0a\x09self decreaseIndent.\x0a\x09self cr.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["decreaseIndent", "cr"]
}),
$globals.CWJsonWriter);

$core.addMethod(
$core.method({
selector: "crIndentIncr",
protocol: 'stream API',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._increaseIndent();
self._cr();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"crIndentIncr",{},$globals.CWJsonWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "crIndentIncr\x0a\x09self increaseIndent.\x0a\x09self cr.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["increaseIndent", "cr"]
}),
$globals.CWJsonWriter);

$core.addMethod(
$core.method({
selector: "decreaseIndent",
protocol: 'stream API',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self["@indentLevel"]=$recv(self["@indentLevel"]).__minus((1));
$1=$recv(self["@indentLevel"]).__lt((0));
if($core.assert($1)){
self._error_("indentation problem");
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"decreaseIndent",{},$globals.CWJsonWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "decreaseIndent\x0a\x09indentLevel := indentLevel - 1.\x0a\x09indentLevel < 0 ifTrue: [ self error: 'indentation problem' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["-", "ifTrue:", "<", "error:"]
}),
$globals.CWJsonWriter);

$core.addMethod(
$core.method({
selector: "endArray",
protocol: 'stream HL API',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._crIndentDecr();
$1=self._nextPutAll_("]");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"endArray",{},$globals.CWJsonWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "endArray\x0a\x09self \x0a\x09\x09crIndentDecr;\x0a\x09\x09nextPutAll: ']'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["crIndentDecr", "nextPutAll:"]
}),
$globals.CWJsonWriter);

$core.addMethod(
$core.method({
selector: "endObject",
protocol: 'stream HL API',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._crIndentDecr();
$1=self._nextPutAll_("}");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"endObject",{},$globals.CWJsonWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "endObject\x0a\x09self \x0a\x09\x09crIndentDecr;\x0a\x09\x09nextPutAll: '}'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["crIndentDecr", "nextPutAll:"]
}),
$globals.CWJsonWriter);

$core.addMethod(
$core.method({
selector: "exportMap:",
protocol: 'public',
fn: function (aMap){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._visitMap_(aMap);
$1=$recv($recv(self["@stream"])._collection())._asString();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportMap:",{aMap:aMap},$globals.CWJsonWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMap"],
source: "exportMap: aMap\x0a\x09\x22returns the string to write down in the json file\x22\x0a\x0a\x09self visitMap: aMap.\x0a\x09^ stream collection asString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitMap:", "asString", "collection"]
}),
$globals.CWJsonWriter);

$core.addMethod(
$core.method({
selector: "extractKeyFrom:",
protocol: 'helper',
fn: function (url){
var self=this;
var imageName;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(url)._tokenize_("/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tokenize:"]=1;
//>>excludeEnd("ctx");
imageName=$recv($1)._last();
$2=$recv($recv(imageName)._tokenize_("."))._first();
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extractKeyFrom:",{url:url,imageName:imageName},$globals.CWJsonWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["url"],
source: "extractKeyFrom: url\x0a\x09| imageName |\x0a\x09imageName := (url tokenize: '/') last.\x0a\x09^ (imageName tokenize: '.') first",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["last", "tokenize:", "first"]
}),
$globals.CWJsonWriter);

$core.addMethod(
$core.method({
selector: "increaseIndent",
protocol: 'stream API',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@indentLevel"]=$recv(self["@indentLevel"]).__plus((1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"increaseIndent",{},$globals.CWJsonWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "increaseIndent\x0a\x09indentLevel := indentLevel + 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+"]
}),
$globals.CWJsonWriter);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialize-release',
fn: function (){
var self=this;
function $StringStream(){return $globals.StringStream||(typeof StringStream=="undefined"?nil:StringStream)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CWJsonWriter.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@stream"]=$recv($StringStream())._on_("");
self["@indentLevel"]=(0);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.CWJsonWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09stream := StringStream on: ''.\x0a\x09indentLevel := 0.",
referencedClasses: ["StringStream"],
//>>excludeEnd("ide");
messageSends: ["initialize", "on:"]
}),
$globals.CWJsonWriter);

$core.addMethod(
$core.method({
selector: "nextPutAll:",
protocol: 'stream API',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@stream"])._nextPutAll_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutAll:",{aString:aString},$globals.CWJsonWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "nextPutAll: aString\x0a\x09stream nextPutAll: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:"]
}),
$globals.CWJsonWriter);

$core.addMethod(
$core.method({
selector: "objectFieldName:intValue:",
protocol: 'stream HL API',
fn: function (aName,anInt){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._nextPutAll_("\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
self._nextPutAll_(aName);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
self._nextPutAll_("\x22: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$1=self._nextPutAll_($recv(anInt)._printString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"objectFieldName:intValue:",{aName:aName,anInt:anInt},$globals.CWJsonWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aName", "anInt"],
source: "objectFieldName: aName intValue: anInt\x0a\x09\x22 \x22\x22aName\x22\x22: anInt \x22\x0a\x0a\x09self \x0a\x09\x09nextPutAll: '\x22';\x0a\x09\x09nextPutAll: aName;\x0a\x09\x09nextPutAll: '\x22: ';\x0a\x09\x09nextPutAll: anInt printString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "printString"]
}),
$globals.CWJsonWriter);

$core.addMethod(
$core.method({
selector: "objectFieldName:stringValue:",
protocol: 'stream HL API',
fn: function (aName,aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._nextPutAll_("\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
self._nextPutAll_(aName);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
self._nextPutAll_("\x22: \x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
self._nextPutAll_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$1=self._nextPutAll_("\x22");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"objectFieldName:stringValue:",{aName:aName,aString:aString},$globals.CWJsonWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aName", "aString"],
source: "objectFieldName: aName stringValue: aString\x0a\x09\x22 \x22\x22aName\x22\x22: \x22\x22aString\x22\x22 \x22\x0a\x0a\x09self \x0a\x09\x09nextPutAll: '\x22';\x0a\x09\x09nextPutAll: aName;\x0a\x09\x09nextPutAll: '\x22: \x22';\x0a\x09\x09nextPutAll: aString;\x0a\x09\x09nextPutAll: '\x22'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:"]
}),
$globals.CWJsonWriter);

$core.addMethod(
$core.method({
selector: "space",
protocol: 'stream API',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@stream"])._space();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"space",{},$globals.CWJsonWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "space\x0a\x09stream space",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["space"]
}),
$globals.CWJsonWriter);

$core.addMethod(
$core.method({
selector: "startArrayNamed:",
protocol: 'stream HL API',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._nextPutAll_("\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
self._nextPutAll_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
self._nextPutAll_("\x22: [");
$1=self._crIndentIncr();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startArrayNamed:",{aString:aString},$globals.CWJsonWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "startArrayNamed: aString\x0a\x09self \x0a\x09\x09nextPutAll: '\x22';\x0a\x09\x09nextPutAll: aString;\x0a\x09\x09nextPutAll: '\x22: [';\x0a\x09\x09crIndentIncr",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "crIndentIncr"]
}),
$globals.CWJsonWriter);

$core.addMethod(
$core.method({
selector: "startObject",
protocol: 'stream HL API',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._nextPutAll_("{");
$1=self._crIndentIncr();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startObject",{},$globals.CWJsonWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startObject\x0a\x09self \x0a\x09\x09nextPutAll: '{';\x0a\x09\x09crIndentIncr",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "crIndentIncr"]
}),
$globals.CWJsonWriter);

$core.addMethod(
$core.method({
selector: "startObjectNamed:",
protocol: 'stream HL API',
fn: function (aName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._nextPutAll_("\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
self._nextPutAll_(aName);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
self._nextPutAll_("\x22: ");
$1=self._startObject();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startObjectNamed:",{aName:aName},$globals.CWJsonWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aName"],
source: "startObjectNamed: aName\x0a\x09self \x0a\x09\x09nextPutAll: '\x22';\x0a\x09\x09nextPutAll: aName;\x0a\x09\x09nextPutAll: '\x22: ';\x0a\x09\x09startObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "startObject"]
}),
$globals.CWJsonWriter);

$core.addMethod(
$core.method({
selector: "visitCell:",
protocol: 'visiting',
fn: function (aCell){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self["@otNumber"]=(0);
self._startObject();
self._visitChildren_(aCell);
$1=self._endObject();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitCell:",{aCell:aCell},$globals.CWJsonWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "visitCell: aCell\x0a\x09otNumber := 0.\x0a\x09self \x0a\x09\x09startObject;\x0a\x09\x09visitChildren: aCell;\x0a\x09\x09endObject.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["startObject", "visitChildren:", "endObject"]
}),
$globals.CWJsonWriter);

$core.addMethod(
$core.method({
selector: "visitChildren:",
protocol: 'visiting',
fn: function (aBusinessObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(aBusinessObject)._children();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["children"]=1;
//>>excludeEnd("ctx");
$recv($1)._withIndexDo_((function(child,i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(child)._accept_(self);
$2=$recv(i).__eq($recv($recv(aBusinessObject)._children())._size());
if(!$core.assert($2)){
return self._commaCr();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({child:child,i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitChildren:",{aBusinessObject:aBusinessObject},$globals.CWJsonWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBusinessObject"],
source: "visitChildren: aBusinessObject\x0a\x09aBusinessObject children withIndexDo: [ :child :i |\x0a\x09\x09\x09child accept: self.\x0a\x09\x09\x09i = aBusinessObject children size \x0a\x09\x09\x09\x09ifFalse: [ self commaCr ] ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withIndexDo:", "children", "accept:", "ifFalse:", "=", "size", "commaCr"]
}),
$globals.CWJsonWriter);

$core.addMethod(
$core.method({
selector: "visitGameOverTile:",
protocol: 'visiting',
fn: function (aGameOverTile){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aGameOverTile"],
source: "visitGameOverTile: aGameOverTile\x0a\x09\x22do nothing\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWJsonWriter);

$core.addMethod(
$core.method({
selector: "visitHeros:",
protocol: 'visiting',
fn: function (aHeros){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._startObjectNamed_("heros");
$1=self._visitMonster_(aHeros);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitHeros:",{aHeros:aHeros},$globals.CWJsonWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aHeros"],
source: "visitHeros: aHeros\x0a\x09self\x0a\x09\x09startObjectNamed: 'heros';\x0a\x09\x09visitMonster: aHeros",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["startObjectNamed:", "visitMonster:"]
}),
$globals.CWJsonWriter);

$core.addMethod(
$core.method({
selector: "visitMap:",
protocol: 'visiting',
fn: function (aMap){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._startObject();
self._objectFieldName_stringValue_("name","foo");
self._commaCr();
self._startArrayNamed_("row");
self._visitChildren_(aMap);
self._endArray();
$1=self._endObject();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitMap:",{aMap:aMap},$globals.CWJsonWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMap"],
source: "visitMap: aMap\x0a\x09self \x0a\x09\x09startObject;\x0a\x09\x09objectFieldName: 'name' stringValue: 'foo';\x0a\x09\x09commaCr;\x0a\x09\x09startArrayNamed: 'row';\x0a\x09\x09visitChildren: aMap;\x0a\x09\x09endArray;\x0a\x09\x09endObject.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["startObject", "objectFieldName:stringValue:", "commaCr", "startArrayNamed:", "visitChildren:", "endArray", "endObject"]
}),
$globals.CWJsonWriter);

$core.addMethod(
$core.method({
selector: "visitMonster:",
protocol: 'visiting',
fn: function (aMonster){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._objectFieldName_stringValue_("name",self._extractKeyFrom_($recv($recv(aMonster)._image())._src()));
self._commaCr();
self._objectFieldName_intValue_("side",$recv(aMonster)._side());
$1=self._endObject();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitMonster:",{aMonster:aMonster},$globals.CWJsonWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "visitMonster: aMonster\x0a\x09self\x0a\x09\x09objectFieldName: 'name' stringValue: (self extractKeyFrom: aMonster image src);\x0a\x09\x09commaCr;\x0a\x09\x09objectFieldName: 'side' intValue: aMonster side;\x0a\x09\x09endObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["objectFieldName:stringValue:", "extractKeyFrom:", "src", "image", "commaCr", "objectFieldName:intValue:", "side", "endObject"]
}),
$globals.CWJsonWriter);

$core.addMethod(
$core.method({
selector: "visitOverTile:",
protocol: 'visiting',
fn: function (anOverTile){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@otNumber"]=$recv(self["@otNumber"]).__plus((1));
self._objectFieldName_stringValue_("overtile".__comma(self["@otNumber"]),self._extractKeyFrom_($recv($recv(anOverTile)._image())._src()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{anOverTile:anOverTile},$globals.CWJsonWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anOverTile"],
source: "visitOverTile: anOverTile\x0a\x09otNumber := otNumber + 1.\x0a\x09self objectFieldName: 'overtile', otNumber stringValue: (self extractKeyFrom: anOverTile image src).",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+", "objectFieldName:stringValue:", ",", "extractKeyFrom:", "src", "image"]
}),
$globals.CWJsonWriter);

$core.addMethod(
$core.method({
selector: "visitRow:",
protocol: 'visiting',
fn: function (aRow){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._startObject();
self._startArrayNamed_("cells");
self._visitChildren_(aRow);
self._endArray();
$1=self._endObject();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitRow:",{aRow:aRow},$globals.CWJsonWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRow"],
source: "visitRow: aRow\x0a\x09self \x0a\x09\x09startObject;\x0a\x09\x09startArrayNamed: 'cells';\x0a\x09\x09visitChildren: aRow;\x0a\x09\x09endArray;\x0a\x09\x09endObject.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["startObject", "startArrayNamed:", "visitChildren:", "endArray", "endObject"]
}),
$globals.CWJsonWriter);

$core.addMethod(
$core.method({
selector: "visitTile:",
protocol: 'visiting',
fn: function (aTile){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._objectFieldName_stringValue_("tile",self._extractKeyFrom_($recv($recv(aTile)._image())._src()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},$globals.CWJsonWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTile"],
source: "visitTile: aTile\x0a\x09self objectFieldName: 'tile' stringValue: (self extractKeyFrom: aTile image src)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["objectFieldName:stringValue:", "extractKeyFrom:", "src", "image"]
}),
$globals.CWJsonWriter);

$core.addMethod(
$core.method({
selector: "visitUnit:",
protocol: 'visiting',
fn: function (aUnit){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._startObjectNamed_("unit");
$1=self._visitMonster_(aUnit);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitUnit:",{aUnit:aUnit},$globals.CWJsonWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aUnit"],
source: "visitUnit: aUnit\x0a\x09self\x0a\x09\x09startObjectNamed: 'unit';\x0a\x09\x09visitMonster: aUnit",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["startObjectNamed:", "visitMonster:"]
}),
$globals.CWJsonWriter);



$core.addClass('CWNoMonsterWriter', $globals.CWJsonWriter, [], 'Easnoth-Export');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWNoMonsterWriter.comment="This one may not work... Use superclass if problem.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "visitChildren:",
protocol: 'not yet classified',
fn: function (aBusinessObject){
var self=this;
var newSize;
function $CWCell(){return $globals.CWCell||(typeof CWCell=="undefined"?nil:CWCell)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=$recv(aBusinessObject)._children();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["children"]=1;
//>>excludeEnd("ctx");
newSize=$recv($1)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$2=$recv(aBusinessObject)._isKindOf_($CWCell());
if($core.assert($2)){
newSize=$recv($recv(aBusinessObject)._background())._size();
newSize;
};
$recv($recv(aBusinessObject)._children())._withIndexDo_((function(child,i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(child)._accept_(self);
$3=$recv(i).__eq(newSize);
if(!$core.assert($3)){
return self._commaCr();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({child:child,i:i},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitChildren:",{aBusinessObject:aBusinessObject,newSize:newSize},$globals.CWNoMonsterWriter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBusinessObject"],
source: "visitChildren: aBusinessObject\x0a\x09| newSize |\x0a\x09newSize := aBusinessObject children size.\x0a\x09(aBusinessObject isKindOf: CWCell) ifTrue: [ \x0a\x09\x09newSize := aBusinessObject background size ].\x0a\x09aBusinessObject children withIndexDo: [ :child :i |\x0a\x09\x09\x09child accept: self.\x0a\x09\x09\x09i = newSize\x0a\x09\x09\x09\x09ifFalse: [ self commaCr ] ].",
referencedClasses: ["CWCell"],
//>>excludeEnd("ide");
messageSends: ["size", "children", "ifTrue:", "isKindOf:", "background", "withIndexDo:", "accept:", "ifFalse:", "=", "commaCr"]
}),
$globals.CWNoMonsterWriter);

$core.addMethod(
$core.method({
selector: "visitHeros:",
protocol: 'not yet classified',
fn: function (heros){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["heros"],
source: "visitHeros: heros\x0a\x09\x22do nothing\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWNoMonsterWriter);

$core.addMethod(
$core.method({
selector: "visitUnit:",
protocol: 'not yet classified',
fn: function (unit){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["unit"],
source: "visitUnit: unit\x0a\x09\x22do nothing\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWNoMonsterWriter);


});
