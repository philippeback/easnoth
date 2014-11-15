define("amber-easnoth/Easnoth-MapModel", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Kernel-Infrastructure"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Easnoth-MapModel');
$core.packages["Easnoth-MapModel"].transport = {"type":"amd","amdNamespace":"amber-easnoth"};

$core.addClass('CWComponent', $globals.Object, ['parent'], 'Easnoth-MapModel');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWComponent.comment="I represent a business object of the game. The business objects are managed in a tree : you have a root object that has children (and children can also have children).\x0a\x0aGame logic is implemented in my subclasses. For Displaying, look at CWDrawer.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.CWComponent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWComponent);

$core.addMethod(
$core.method({
selector: "announce:",
protocol: 'event',
fn: function (anEvent){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._announcer())._announce_(anEvent);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"announce:",{anEvent:anEvent},$globals.CWComponent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEvent"],
source: "announce: anEvent\x0a\x09self announcer announce: anEvent",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["announce:", "announcer"]
}),
$globals.CWComponent);

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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},$globals.CWComponent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "announcer\x0a\x09^ CWEasnothAnnouncer current",
referencedClasses: ["CWEasnothAnnouncer"],
//>>excludeEnd("ide");
messageSends: ["current"]
}),
$globals.CWComponent);

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
}, function($ctx1) {$ctx1.fill(self,"children",{},$globals.CWComponent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "children\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWComponent);

$core.addMethod(
$core.method({
selector: "desactivateMonsters",
protocol: 'selection',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._children())._do_((function(child){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(child)._desactivateMonsters();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"desactivateMonsters",{},$globals.CWComponent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "desactivateMonsters\x0a\x09self children do: [ :child |\x0a\x09\x09child desactivateMonsters ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "children", "desactivateMonsters"]
}),
$globals.CWComponent);

$core.addMethod(
$core.method({
selector: "lighten",
protocol: 'selection',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._children())._do_((function(child){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(child)._lighten();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lighten",{},$globals.CWComponent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lighten\x0a\x09self children do: [ :child |\x0a\x09\x09child lighten ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "children", "lighten"]
}),
$globals.CWComponent);

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
$globals.CWComponent);

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
$globals.CWComponent);

$core.addMethod(
$core.method({
selector: "prefillCaches",
protocol: 'selection',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._children())._do_((function(child){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(child)._prefillCaches();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"prefillCaches",{},$globals.CWComponent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "prefillCaches\x0a\x09self children do: [ :child |\x0a\x09\x09child prefillCaches ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "children", "prefillCaches"]
}),
$globals.CWComponent);

$core.addMethod(
$core.method({
selector: "removeSelection",
protocol: 'selection',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._children())._do_((function(child){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(child)._removeSelection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeSelection",{},$globals.CWComponent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeSelection\x0a\x09self children do: [ :child |\x0a\x09\x09child removeSelection ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "children", "removeSelection"]
}),
$globals.CWComponent);

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
}, function($ctx1) {$ctx1.fill(self,"root",{},$globals.CWComponent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "root\x0a\x09^ self parent root",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["root", "parent"]
}),
$globals.CWComponent);

$core.addMethod(
$core.method({
selector: "showActiveMonsters",
protocol: 'selection',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._children())._do_((function(child){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(child)._showActiveMonsters();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showActiveMonsters",{},$globals.CWComponent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showActiveMonsters\x0a\x09self children do: [ :child |\x0a\x09\x09child showActiveMonsters ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "children", "showActiveMonsters"]
}),
$globals.CWComponent);

$core.addMethod(
$core.method({
selector: "unmark",
protocol: 'selection',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._children())._do_((function(child){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(child)._unmark();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unmark",{},$globals.CWComponent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unmark\x0a\x09self children do: [ :child |\x0a\x09\x09child unmark ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "children", "unmark"]
}),
$globals.CWComponent);

$core.addMethod(
$core.method({
selector: "updateMap",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._root())._updateMap();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateMap",{},$globals.CWComponent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateMap\x0a\x09self root updateMap",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["updateMap", "root"]
}),
$globals.CWComponent);

$core.addMethod(
$core.method({
selector: "updateUI",
protocol: 'selection',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._children())._do_((function(child){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(child)._updateUI();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateUI",{},$globals.CWComponent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateUI\x0a\x09self children do: [ :child |\x0a\x09\x09child updateUI ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "children", "updateUI"]
}),
$globals.CWComponent);



$core.addClass('CWComposite', $globals.CWComponent, [], 'Easnoth-MapModel');
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.CWComposite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWComposite);

$core.addMethod(
$core.method({
selector: "childAt:",
protocol: 'children management',
fn: function (index){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._children())._at_(index);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"childAt:",{index:index},$globals.CWComposite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "childAt: index \x0a\x09^ self children at: index",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "children"]
}),
$globals.CWComposite);

$core.addMethod(
$core.method({
selector: "childAt:ifPresent:",
protocol: 'children management',
fn: function (index,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._children())._at_ifPresent_(index,aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"childAt:ifPresent:",{index:index,aBlock:aBlock},$globals.CWComposite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index", "aBlock"],
source: "childAt: index ifPresent: aBlock\x0a\x09^ self children at: index ifPresent: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifPresent:", "children"]
}),
$globals.CWComposite);

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
}, function($ctx1) {$ctx1.fill(self,"children",{},$globals.CWComposite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "children\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWComposite);

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
}, function($ctx1) {$ctx1.fill(self,"newChild:",{aClass:aClass},$globals.CWComposite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "newChild: aClass\x0a\x09^ aClass new parent: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["parent:", "new"]
}),
$globals.CWComposite);



$core.addClass('CWCell', $globals.CWComposite, ['neighboursCache', 'background', 'gameOverTile', 'monster', 'state', 'prevCell', 'mark', 'firstCoods', 'zIndex'], 'Easnoth-MapModel');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWCell.comment="I represent an hexagon cell in the map.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._visitCell_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitCell: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitCell:"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "addGreenSelector",
protocol: 'selection',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._gameOverTile())._green();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addGreenSelector",{},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addGreenSelector\x0a\x09self gameOverTile green",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["green", "gameOverTile"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "addMonster:",
protocol: 'state delegation',
fn: function (aMonster){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._state())._cell_addMonster_(self,aMonster);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addMonster:",{aMonster:aMonster},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "addMonster: aMonster\x0a\x09self state cell: self addMonster: aMonster",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["cell:addMonster:", "state"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "addRedSelector",
protocol: 'selection',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._gameOverTile())._red();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addRedSelector",{},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addRedSelector\x0a\x09self gameOverTile red",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["red", "gameOverTile"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "addSelector",
protocol: 'state delegation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._state())._addSelector_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addSelector",{},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addSelector\x0a\x09self state addSelector: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addSelector:", "state"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "addWhiteSelector",
protocol: 'selection',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._gameOverTile())._white();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addWhiteSelector",{},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addWhiteSelector\x0a\x09self gameOverTile white",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["white", "gameOverTile"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "background",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@background"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._error_("should be initialized");
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"background",{},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "background\x0a\x09^ background ifNil: [ self error: 'should be initialized' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "error:"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "backgroundAdd:",
protocol: 'accessing',
fn: function (aBackground){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._background())._add_(aBackground);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"backgroundAdd:",{aBackground:aBackground},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBackground"],
source: "backgroundAdd: aBackground\x0a\x09^ self background add: aBackground",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "background"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "backgroundAddAll:",
protocol: 'accessing',
fn: function (aCol){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._background())._addAll_(aCol);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"backgroundAddAll:",{aCol:aCol},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCol"],
source: "backgroundAddAll: aCol\x0a\x09^ self background addAll: aCol",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addAll:", "background"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "canBeAttackedBy:",
protocol: 'state delegation',
fn: function (side){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._state())._cell_canBeAttackedBy_(self,side);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"canBeAttackedBy:",{side:side},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["side"],
source: "canBeAttackedBy: side\x0a\x09^ self state cell: self canBeAttackedBy: side",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["cell:canBeAttackedBy:", "state"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "changeState:",
protocol: 'accessing',
fn: function (stateClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@state"]=$recv(stateClass)._default();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changeState:",{stateClass:stateClass},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stateClass"],
source: "changeState: stateClass\x0a\x09state := stateClass default",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["default"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "children",
protocol: 'accessing',
fn: function (){
var self=this;
var children;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$2,$receiver;
children=$recv($Array())._new();
$1=self._monster();
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
var var_;
var_=$receiver;
$recv(children)._add_(var_);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
};
$recv(children)._add_(self._gameOverTile());
$3=children;
$recv($3)._addAll_(self._background());
$4=$recv($3)._yourself();
$2=$4;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"children",{children:children},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "children\x0a\x09| children | \x0a\x09children := Array new.\x0a\x09self monster ifNotNil: [ :var |\x0a\x09\x09children add: var ].\x0a\x09children add: self gameOverTile.\x0a\x09^ children\x0a\x09\x09addAll: self background;\x0a\x09\x09yourself",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["new", "ifNotNil:", "monster", "add:", "gameOverTile", "addAll:", "background", "yourself"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "darken",
protocol: 'selection',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._state())._darken_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"darken",{},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "darken\x0a\x09self state darken: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["darken:", "state"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "desactivateMonsters",
protocol: 'forwarding optimization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self._monster();
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
var m;
m=$receiver;
$recv(m)._desactivateMonsters();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"desactivateMonsters",{},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "desactivateMonsters\x0a\x09\x22you can remove this method, but it makes the game faster.\x22\x0a\x09self monster ifNotNil: [ :m | m desactivateMonsters ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "monster", "desactivateMonsters"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "firstCoods",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@firstCoods"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "firstCoods\x0a\x09^ firstCoods",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "firstCoods:",
protocol: 'accessing',
fn: function (aPoint){
var self=this;
self["@firstCoods"]=aPoint;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "firstCoods: aPoint\x0a\x09firstCoods := aPoint",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "gameOverTile",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@gameOverTile"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "gameOverTile\x0a\x09^ gameOverTile",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "gameOverTile:",
protocol: 'accessing',
fn: function (aGOT){
var self=this;
self["@gameOverTile"]=aGOT;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aGOT"],
source: "gameOverTile: aGOT\x0a\x09gameOverTile := aGOT",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "gameOverTileClass",
protocol: 'factory',
fn: function (){
var self=this;
function $CWGameOverTile(){return $globals.CWGameOverTile||(typeof CWGameOverTile=="undefined"?nil:CWGameOverTile)}
return $CWGameOverTile();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "gameOverTileClass\x0a\x09^ CWGameOverTile",
referencedClasses: ["CWGameOverTile"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "hasMonster",
protocol: 'state delegation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._isFree())._not();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasMonster",{},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hasMonster\x0a\x09^ self isFree not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not", "isFree"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialize-release',
fn: function (){
var self=this;
function $CWFree(){return $globals.CWFree||(typeof CWFree=="undefined"?nil:CWFree)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CWCell.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@mark"]=false;
self["@gameOverTile"]=self._newGOT();
self._changeState_($CWFree());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09mark := false.\x0a\x09gameOverTile := self newGOT.\x0a\x09self changeState: CWFree.",
referencedClasses: ["CWFree"],
//>>excludeEnd("ide");
messageSends: ["initialize", "newGOT", "changeState:"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "initializeFromJson:",
protocol: 'initialize-release',
fn: function (aJsonCell){
var self=this;
var elements,ots;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
elements=$recv(aJsonCell)._keys();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["keys"]=1;
//>>excludeEnd("ctx");
self["@background"]=$recv($Array())._new();
$1=$recv(elements)._includes_("tile");
if($core.assert($1)){
$2=$recv(self._newTile())._initializeFromKey_($recv(aJsonCell)._tile());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["initializeFromKey:"]=1;
//>>excludeEnd("ctx");
self._backgroundAdd_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["backgroundAdd:"]=1;
//>>excludeEnd("ctx");
};
ots=$recv($recv(aJsonCell)._keys())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._match_("overtile");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(ots)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._backgroundAdd_($recv(self._newOverTile())._initializeFromKey_($recv(aJsonCell)._at_(each)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeFromJson:",{aJsonCell:aJsonCell,elements:elements,ots:ots},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJsonCell"],
source: "initializeFromJson: aJsonCell\x0a    | elements ots |\x0a    \x0a    elements := aJsonCell keys.\x0a    background := Array new.\x0a\x09\x0a\x09(elements includes: 'tile') \x0a    \x09ifTrue: [ self backgroundAdd: (self newTile initializeFromKey: aJsonCell tile) ].\x0a\x09\x22replace match: with beginsWith: later ...\x22\x0a\x09ots := aJsonCell keys select: [ :each | each match: 'overtile' ].\x0a\x09ots do: [ :each |\x0a\x09\x09self backgroundAdd: (self newOverTile initializeFromKey: (aJsonCell at: each) ) ].",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["keys", "new", "ifTrue:", "includes:", "backgroundAdd:", "initializeFromKey:", "newTile", "tile", "select:", "match:", "do:", "newOverTile", "at:"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "isFree",
protocol: 'state delegation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._state())._isFree();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isFree",{},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isFree\x0a\x09\x22Answers true if cell free or freeselected\x22\x0a\x09^ self state isFree",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isFree", "state"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "isFreeSelected",
protocol: 'state delegation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._state())._isFreeSelected();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isFreeSelected",{},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isFreeSelected\x0a\x09\x22Answers true if cell free or freeselected\x22\x0a\x09^ self state isFreeSelected",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isFreeSelected", "state"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "isMarked",
protocol: 'accessing - pathfinding',
fn: function (){
var self=this;
var $1;
$1=self["@mark"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isMarked\x0a\x09^ mark",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "lighten",
protocol: 'selection',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._state())._lighten_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lighten",{},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lighten\x0a\x09self state lighten: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["lighten:", "state"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "mark",
protocol: 'accessing - pathfinding',
fn: function (){
var self=this;
self["@mark"]=true;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mark\x0a\x09mark := true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWCell);

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
$globals.CWCell);

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
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "mouseClick:",
protocol: 'state delegation',
fn: function (gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._state())._mouseClick_context_(self,gameContext);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mouseClick:",{gameContext:gameContext},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["gameContext"],
source: "mouseClick: gameContext\x0a\x09self state mouseClick: self context: gameContext.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["mouseClick:context:", "state"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "mouseMove:",
protocol: 'state delegation',
fn: function (gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._state())._mouseMove_context_(self,gameContext);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mouseMove:",{gameContext:gameContext},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["gameContext"],
source: "mouseMove: gameContext\x0a\x09self state mouseMove: self context: gameContext.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["mouseMove:context:", "state"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "neighbours",
protocol: 'accessing - pathfinding',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@neighboursCache"];
if(($receiver = $2) == null || $receiver.isNil){
self["@neighboursCache"]=$recv(self._parent())._neighboursOf_(self);
$1=self["@neighboursCache"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"neighbours",{},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "neighbours\x0a\x09^ neighboursCache ifNil: [ neighboursCache := self parent neighboursOf: self ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "neighboursOf:", "parent"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "newGOT",
protocol: 'factory',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._gameOverTileClass())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newGOT",{},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newGOT\x0a\x09 ^ self gameOverTileClass new",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "gameOverTileClass"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "newOverTile",
protocol: 'factory',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._newChild_(self._overTileClass());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newOverTile",{},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newOverTile\x0a\x09 ^ self newChild: self overTileClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newChild:", "overTileClass"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "newTile",
protocol: 'factory',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._newChild_(self._tileClass());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newTile",{},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newTile\x0a\x09 ^ self newChild: self tileClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newChild:", "tileClass"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "overTileClass",
protocol: 'factory',
fn: function (){
var self=this;
function $CWOverTile(){return $globals.CWOverTile||(typeof CWOverTile=="undefined"?nil:CWOverTile)}
return $CWOverTile();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "overTileClass\x0a\x09^ CWOverTile",
referencedClasses: ["CWOverTile"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "prefillCaches",
protocol: 'initialize-release',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._neighbours();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"prefillCaches",{},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "prefillCaches\x0a\x09self neighbours.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["neighbours"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "prevCell",
protocol: 'accessing - pathfinding',
fn: function (){
var self=this;
var $1;
$1=self["@prevCell"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "prevCell\x0a\x09^ prevCell",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "prevCell:",
protocol: 'accessing - pathfinding',
fn: function (aCell){
var self=this;
self["@prevCell"]=aCell;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "prevCell: aCell \x0a\x09prevCell := aCell",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
var rowNumber,row,cellIndex;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $4,$5,$3,$2,$1;
row=self._parent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["parent"]=1;
//>>excludeEnd("ctx");
cellIndex=$recv($recv(row)._cells())._indexOf_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["indexOf:"]=1;
//>>excludeEnd("ctx");
rowNumber=$recv($recv($recv(row)._parent())._rows())._indexOf_(row);
$4=$recv(aStream).__lt_lt("a Cell(");
$5=$recv(rowNumber)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__lt_lt($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=4;
//>>excludeEnd("ctx");
$2=$recv($3).__lt_lt("-");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=3;
//>>excludeEnd("ctx");
$1=$recv($2).__lt_lt($recv(cellIndex)._printString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=2;
//>>excludeEnd("ctx");
$recv($1).__lt_lt(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream,rowNumber:rowNumber,row:row,cellIndex:cellIndex},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09\x22to debug only\x22\x0a\x0a\x09| rowNumber row cellIndex |\x0a\x09row := self parent.\x0a\x09cellIndex := row cells indexOf: self.\x0a\x09rowNumber := row parent rows indexOf: row.\x0a\x09aStream << 'a Cell(' << rowNumber printString << '-' << cellIndex printString << ')'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["parent", "indexOf:", "cells", "rows", "<<", "printString"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "removeGameOverTile",
protocol: 'selection',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._gameOverTile())._invis();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeGameOverTile",{},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeGameOverTile\x0a\x09self gameOverTile invis",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["invis", "gameOverTile"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "removeMonster",
protocol: 'state delegation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._state())._removeMonster_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeMonster",{},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeMonster\x0a\x09self state removeMonster: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeMonster:", "state"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "removeSelection",
protocol: 'state delegation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._state())._removeSelector_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeSelection",{},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeSelection\x0a\x09self state removeSelector: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeSelector:", "state"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "showActiveMonsters",
protocol: 'state delegation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._state())._showActiveMonster_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showActiveMonsters",{},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showActiveMonsters\x0a\x09self state showActiveMonster: self.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["showActiveMonster:", "state"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "side",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._monster())._side();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"side",{},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "side\x0a\x09^ self monster side",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["side", "monster"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "state",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@state"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "state\x0a\x09^ state",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "tileClass",
protocol: 'factory',
fn: function (){
var self=this;
function $CWTile(){return $globals.CWTile||(typeof CWTile=="undefined"?nil:CWTile)}
return $CWTile();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tileClass\x0a\x09^ CWTile",
referencedClasses: ["CWTile"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "unmark",
protocol: 'accessing - pathfinding',
fn: function (){
var self=this;
self["@mark"]=false;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unmark\x0a\x09mark := false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "updateUI",
protocol: 'forwarding optimization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self._monster();
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
var m;
m=$receiver;
$recv(m)._updateUI();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateUI",{},$globals.CWCell)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateUI\x0a\x09\x22you can remove this method, but it makes the game faster.\x22\x0a\x09self monster ifNotNil: [ :m | m updateUI ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "monster", "updateUI"]
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "zIndex",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@zIndex"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "zIndex\x0a\x09^ zIndex",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWCell);

$core.addMethod(
$core.method({
selector: "zIndex:",
protocol: 'accessing',
fn: function (anInt){
var self=this;
self["@zIndex"]=anInt;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInt"],
source: "zIndex: anInt\x0a\x09zIndex := anInt",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWCell);



$core.addClass('CWOneChildClass', $globals.CWComposite, [], 'Easnoth-MapModel');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWOneChildClass.comment="I am a standard composite except that all my children have the same class.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.CWOneChildClass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWOneChildClass);

$core.addMethod(
$core.method({
selector: "addChild:",
protocol: 'children management',
fn: function (object){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._children())._add_(object);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addChild:",{object:object},$globals.CWOneChildClass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["object"],
source: "addChild: object\x0a\x09^ self children add: object",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "children"]
}),
$globals.CWOneChildClass);

$core.addMethod(
$core.method({
selector: "childAt:put:",
protocol: 'children management',
fn: function (index,object){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._children())._at_put_(index,object);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"childAt:put:",{index:index,object:object},$globals.CWOneChildClass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index", "object"],
source: "childAt: index put: object\x0a\x09^ self children at: index put: object",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "children"]
}),
$globals.CWOneChildClass);

$core.addMethod(
$core.method({
selector: "childBasicClass",
protocol: 'factory',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"childBasicClass",{},$globals.CWOneChildClass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "childBasicClass\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWOneChildClass);

$core.addMethod(
$core.method({
selector: "newChild",
protocol: 'factory',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._newChild_(self._childBasicClass());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newChild",{},$globals.CWOneChildClass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newChild\x0a\x09^ self newChild: self childBasicClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newChild:", "childBasicClass"]
}),
$globals.CWOneChildClass);

$core.addMethod(
$core.method({
selector: "removeChild:",
protocol: 'children management',
fn: function (object){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._children())._remove_(object);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeChild:",{object:object},$globals.CWOneChildClass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["object"],
source: "removeChild: object\x0a\x09^ self children remove: object",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:", "children"]
}),
$globals.CWOneChildClass);



$core.addClass('CWMap', $globals.CWOneChildClass, ['rows', 'drawer', 'cellsCache'], 'Easnoth-MapModel');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWMap.comment="I represent the whole map in the game.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._visitMap_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.CWMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitMap: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitMap:"]
}),
$globals.CWMap);

$core.addMethod(
$core.method({
selector: "childBasicClass",
protocol: 'factory',
fn: function (){
var self=this;
function $CWRow(){return $globals.CWRow||(typeof CWRow=="undefined"?nil:CWRow)}
return $CWRow();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "childBasicClass\x0a\x09^ CWRow",
referencedClasses: ["CWRow"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMap);

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
$1=self._rows();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"children",{},$globals.CWMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "children\x0a\x09^ self rows",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["rows"]
}),
$globals.CWMap);

$core.addMethod(
$core.method({
selector: "clean",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@drawer"])._clean();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clean",{},$globals.CWMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clean\x0a\x09drawer clean",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["clean"]
}),
$globals.CWMap);

$core.addMethod(
$core.method({
selector: "desactivateMonsters",
protocol: 'selection',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@cellsCache"])._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._desactivateMonsters();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"desactivateMonsters",{},$globals.CWMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "desactivateMonsters\x0a\x09\x22just for speed ... If you play only on chrome remove that crap\x22\x0a\x09cellsCache do: [ :each |\x0a\x09\x09each desactivateMonsters ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "desactivateMonsters"]
}),
$globals.CWMap);

$core.addMethod(
$core.method({
selector: "drawer",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@drawer"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "drawer\x0a\x09^ drawer",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMap);

$core.addMethod(
$core.method({
selector: "initializeDrawer",
protocol: 'initialize-release',
fn: function (){
var self=this;
function $CWMapDrawer(){return $globals.CWMapDrawer||(typeof CWMapDrawer=="undefined"?nil:CWMapDrawer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._prefillCaches();
self["@drawer"]=$recv($recv($CWMapDrawer())._new())._initializeForMap_(self);
self._updateUI();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeDrawer",{},$globals.CWMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeDrawer\x0a\x09self prefillCaches.\x0a\x09drawer := CWMapDrawer new initializeForMap: self.\x0a\x09self updateUI.",
referencedClasses: ["CWMapDrawer"],
//>>excludeEnd("ide");
messageSends: ["prefillCaches", "initializeForMap:", "new", "updateUI"]
}),
$globals.CWMap);

$core.addMethod(
$core.method({
selector: "initializeFromJson:",
protocol: 'initialize-release',
fn: function (jsonMap){
var self=this;
var child,rows1;
function $CWWaitForObject(){return $globals.CWWaitForObject||(typeof CWWaitForObject=="undefined"?nil:CWWaitForObject)}
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
function $CWObjectLoaded(){return $globals.CWObjectLoaded||(typeof CWObjectLoaded=="undefined"?nil:CWObjectLoaded)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($CWWaitForObject())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self._announce_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["announce:"]=1;
//>>excludeEnd("ctx");
rows1=$recv(jsonMap)._row();
self["@rows"]=$recv($Array())._new_($recv(rows1)._size());
$recv(rows1)._withIndexDo_((function(row,i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
child=self._newChild();
child;
self._childAt_put_(i,child);
return $recv(child)._initializeFromJson_(row);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({row:row,i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._announce_($recv($CWObjectLoaded())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeFromJson:",{jsonMap:jsonMap,child:child,rows1:rows1},$globals.CWMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["jsonMap"],
source: "initializeFromJson: jsonMap\x0a\x09\x22initialize the rows of the map, \x0a\x09the announcement is in case everything was already cached (page refresh for example)\x22\x0a\x09\x0a\x09| child rows1 |\x0a\x09\x0a\x09self announce: CWWaitForObject new.\x0a\x09\x0a\x09rows1 := jsonMap row.\x0a\x09rows := Array new: rows1 size.\x0a\x0a\x09rows1 withIndexDo: [:row :i |\x0a\x09\x09child := self newChild.\x0a\x09\x09self childAt: i put: child.\x0a\x09\x09child initializeFromJson: row ].\x0a\x09\x09\x0a\x09self announce: CWObjectLoaded new.",
referencedClasses: ["CWWaitForObject", "Array", "CWObjectLoaded"],
//>>excludeEnd("ide");
messageSends: ["announce:", "new", "row", "new:", "size", "withIndexDo:", "newChild", "childAt:put:", "initializeFromJson:"]
}),
$globals.CWMap);

$core.addMethod(
$core.method({
selector: "lighten",
protocol: 'selection',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@cellsCache"])._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._lighten();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lighten",{},$globals.CWMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lighten\x0a\x09\x22just for speed ... If you play only on chrome remove that crap\x22\x0a\x09cellsCache do: [ :each |\x0a\x09\x09each lighten ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "lighten"]
}),
$globals.CWMap);

$core.addMethod(
$core.method({
selector: "neighboursOf:cellIndex:",
protocol: 'neighbours',
fn: function (row,cellIndex){
var self=this;
var rowIndex,neighbours;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4,$6,$7;
$1=self._rows();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rows"]=1;
//>>excludeEnd("ctx");
rowIndex=$recv($1)._indexOf_(row);
neighbours=$recv($Array())._new();
$2=$recv(rowIndex).__eq((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if(!$core.assert($2)){
$3=neighbours;
$5=self._childAt_($recv(rowIndex).__minus((1)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["childAt:"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._cellsNextToI_j_(rowIndex,cellIndex);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cellsNextToI:j:"]=1;
//>>excludeEnd("ctx");
$recv($3)._addAll_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addAll:"]=1;
//>>excludeEnd("ctx");
};
$6=$recv(rowIndex).__eq($recv(self._rows())._size());
if(!$core.assert($6)){
$recv(neighbours)._addAll_($recv(self._childAt_($recv(rowIndex).__plus((1))))._cellsNextToI_j_(rowIndex,cellIndex));
};
$7=neighbours;
return $7;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"neighboursOf:cellIndex:",{row:row,cellIndex:cellIndex,rowIndex:rowIndex,neighbours:neighbours},$globals.CWMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["row", "cellIndex"],
source: "neighboursOf: row cellIndex: cellIndex\x0a\x09| rowIndex neighbours |\x0a\x09rowIndex :=  self rows indexOf: row.\x0a\x09neighbours := Array new.\x0a\x09rowIndex = 1 \x0a\x09\x09ifFalse: [ neighbours addAll: ((self childAt: rowIndex - 1) cellsNextToI: rowIndex j: cellIndex) ].\x0a\x09rowIndex = self rows size \x0a\x09\x09ifFalse: [ neighbours addAll: ((self childAt: rowIndex + 1) cellsNextToI: rowIndex j: cellIndex) ].\x0a\x09^ neighbours",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["indexOf:", "rows", "new", "ifFalse:", "=", "addAll:", "cellsNextToI:j:", "childAt:", "-", "size", "+"]
}),
$globals.CWMap);

$core.addMethod(
$core.method({
selector: "prefillCaches",
protocol: 'initialize-release',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self["@cellsCache"]=$recv($Array())._new();
$1=self._children();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["children"]=1;
//>>excludeEnd("ctx");
$recv($1)._do_((function(row){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(row)._children())._do_((function(cell){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(self["@cellsCache"])._add_(cell);
return $recv(cell)._prefillCaches();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({cell:cell},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({row:row},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"prefillCaches",{},$globals.CWMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "prefillCaches\x0a\x09\x22just for speed ... If you play only on chrome remove that crap\x22\x0a\x09cellsCache := Array new.\x0a\x09self children do: [ :row |\x0a\x09\x09row children do: [ :cell |\x0a\x09\x09\x09cellsCache add: cell.\x0a\x09\x09\x09cell prefillCaches ] ].",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "children", "add:", "prefillCaches"]
}),
$globals.CWMap);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv(aStream)._nextPutAll_("a Map (");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($recv($recv(self["@rows"])._size())._printString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$1=$recv(aStream)._nextPutAll_(" rows)");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.CWMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: 'a Map (';\x0a\x09\x09nextPutAll: rows size printString;\x0a\x09\x09nextPutAll: ' rows)'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "printString", "size"]
}),
$globals.CWMap);

$core.addMethod(
$core.method({
selector: "removeSelection",
protocol: 'selection',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@cellsCache"])._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._removeSelection();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeSelection",{},$globals.CWMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeSelection\x0a\x09\x22just for speed ... If you play only on chrome remove that crap\x22\x0a\x09cellsCache do: [ :each |\x0a\x09\x09each removeSelection ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "removeSelection"]
}),
$globals.CWMap);

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
$globals.CWMap);

$core.addMethod(
$core.method({
selector: "rows",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@rows"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "rows\x0a\x09^ rows",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMap);

$core.addMethod(
$core.method({
selector: "showActiveMonsters",
protocol: 'selection',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._removeSelection();
$recv(self["@cellsCache"])._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._showActiveMonsters();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showActiveMonsters",{},$globals.CWMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showActiveMonsters\x0a\x09self removeSelection.\x0a\x09\x22just for speed ... If you play only on chrome put super showActiveMonsters\x22\x0a\x09cellsCache do: [ :each |\x0a\x09\x09each showActiveMonsters ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeSelection", "do:", "showActiveMonsters"]
}),
$globals.CWMap);

$core.addMethod(
$core.method({
selector: "unmark",
protocol: 'selection',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@cellsCache"])._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._unmark();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unmark",{},$globals.CWMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unmark\x0a\x09\x22just for speed ... If you play only on chrome remove that crap\x22\x0a\x09cellsCache do: [ :each |\x0a\x09\x09each unmark ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "unmark"]
}),
$globals.CWMap);

$core.addMethod(
$core.method({
selector: "updateMap",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@drawer"])._updateMap();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateMap",{},$globals.CWMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateMap\x0a\x09drawer updateMap",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["updateMap"]
}),
$globals.CWMap);

$core.addMethod(
$core.method({
selector: "updateUI",
protocol: 'selection',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@cellsCache"])._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._updateUI();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateUI",{},$globals.CWMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateUI\x0a\x09\x22just for speed ... If you play only on chrome remove that crap\x22\x0a\x09cellsCache do: [ :each |\x0a\x09\x09each updateUI ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "updateUI"]
}),
$globals.CWMap);


$core.addMethod(
$core.method({
selector: "newWithMapIndex:",
protocol: 'instance creation',
fn: function (aMapIndex){
var self=this;
var map;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
map=self._new();
$1=jQuery;
$2=$recv("ressources/json/maps/map".__comma(aMapIndex)).__comma(".json");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($1)._getJSON_onSuccess_($2,(function(data){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(map)._initializeFromJson_(data);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$3=map;
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newWithMapIndex:",{aMapIndex:aMapIndex,map:map},$globals.CWMap.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMapIndex"],
source: "newWithMapIndex: aMapIndex\x0a\x09| map |\x0a\x09\x0a\x09map := self new.\x0a    jQuery \x0a\x09\x09getJSON: 'ressources/json/maps/map', aMapIndex, '.json' \x0a\x09\x09onSuccess: [:data | \x0a\x09\x09\x09map initializeFromJson: data].\x0a\x0a\x09^ map",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "getJSON:onSuccess:", ",", "initializeFromJson:"]
}),
$globals.CWMap.klass);


$core.addClass('CWRow', $globals.CWOneChildClass, ['cells'], 'Easnoth-MapModel');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWRow.comment="I represent a row of cells in the map.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._visitRow_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.CWRow)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitRow: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitRow:"]
}),
$globals.CWRow);

$core.addMethod(
$core.method({
selector: "cells",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@cells"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cells\x0a\x09^ cells",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWRow);

$core.addMethod(
$core.method({
selector: "cellsNextToI:j:",
protocol: 'neighbours',
fn: function (i,j){
var self=this;
var neighbours;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
neighbours=$recv($Array())._new();
self._childAt_ifPresent_(j,(function(child){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(neighbours)._add_(child);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["childAt:ifPresent:"]=1;
//>>excludeEnd("ctx");
$1=$recv($recv(i).__backslash_backslash((2))).__eq((0));
if($core.assert($1)){
$3=$recv(j).__gt((1));
if($core.assert($3)){
self._childAt_ifPresent_($recv(j).__minus((1)),(function(child){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(neighbours)._add_(child);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1,7)});
//>>excludeEnd("ctx");
}));
};
} else {
$2=$recv(j).__lt($recv(self._cells())._size());
if($core.assert($2)){
self._childAt_ifPresent_($recv(j).__plus((1)),(function(child){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(neighbours)._add_(child);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["childAt:ifPresent:"]=2;
//>>excludeEnd("ctx");
};
};
$4=neighbours;
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cellsNextToI:j:",{i:i,j:j,neighbours:neighbours},$globals.CWRow)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["i", "j"],
source: "cellsNextToI: i j: j \x0a\x09| neighbours |\x0a\x09neighbours := Array new.\x0a\x09self childAt: j  ifPresent: [ :child | neighbours add: child ] .\x0a\x09i \x5c\x5c 2 = 0 ifFalse: [\x0a\x09\x09j < self cells size ifTrue: [ self childAt: j + 1 ifPresent: [ :child | neighbours add: child ] ].\x0a\x09] ifTrue: [\x0a\x09\x09j > 1 ifTrue: [ self childAt: j - 1 ifPresent: [ :child | neighbours add: child ] ].\x0a\x09].\x0a\x09^ neighbours",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["new", "childAt:ifPresent:", "add:", "ifFalse:ifTrue:", "=", "\x5c\x5c", "ifTrue:", "<", "size", "cells", "+", ">", "-"]
}),
$globals.CWRow);

$core.addMethod(
$core.method({
selector: "childBasicClass",
protocol: 'factory',
fn: function (){
var self=this;
function $CWCell(){return $globals.CWCell||(typeof CWCell=="undefined"?nil:CWCell)}
return $CWCell();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "childBasicClass\x0a\x09^ CWCell",
referencedClasses: ["CWCell"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWRow);

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
$1=self._cells();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"children",{},$globals.CWRow)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "children\x0a\x09^ self cells",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["cells"]
}),
$globals.CWRow);

$core.addMethod(
$core.method({
selector: "initializeFromJson:",
protocol: 'initialize',
fn: function (jsonRow){
var self=this;
var cells1,child;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
cells1=$recv(jsonRow)._cells();
self["@cells"]=$recv($Array())._new_($recv(cells1)._size());
$recv(cells1)._withIndexDo_((function(cell,i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
child=self._newChild();
child;
$recv(child)._initializeFromJson_(cell);
return self._childAt_put_(i,child);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({cell:cell,i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeFromJson:",{jsonRow:jsonRow,cells1:cells1,child:child},$globals.CWRow)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["jsonRow"],
source: "initializeFromJson: jsonRow\x0a\x09| cells1 child |\x0a\x0a\x09cells1 := jsonRow cells.\x0a\x09cells := Array new: cells1 size.\x0a\x09\x0a\x09cells1 withIndexDo: [:cell :i |\x0a\x09\x09child :=  self newChild.\x0a\x09\x09child initializeFromJson: cell. \x0a\x09\x09self childAt: i put: child ].",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["cells", "new:", "size", "withIndexDo:", "newChild", "initializeFromJson:", "childAt:put:"]
}),
$globals.CWRow);

$core.addMethod(
$core.method({
selector: "neighboursOf:",
protocol: 'neighbours',
fn: function (aCell){
var self=this;
var cellIndex,neighbours;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
neighbours=$recv($Array())._new();
$1=self._cells();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cells"]=1;
//>>excludeEnd("ctx");
cellIndex=$recv($1)._indexOf_(aCell);
$2=$recv(cellIndex).__eq((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if(!$core.assert($2)){
self._childAt_ifPresent_($recv(cellIndex).__minus((1)),(function(child){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(neighbours)._add_(child);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["childAt:ifPresent:"]=1;
//>>excludeEnd("ctx");
};
$3=$recv(cellIndex).__eq($recv(self._cells())._size());
if(!$core.assert($3)){
self._childAt_ifPresent_($recv(cellIndex).__plus((1)),(function(child){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(neighbours)._add_(child);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1,4)});
//>>excludeEnd("ctx");
}));
};
$recv(neighbours)._addAll_($recv(self._parent())._neighboursOf_cellIndex_(self,cellIndex));
$4=neighbours;
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"neighboursOf:",{aCell:aCell,cellIndex:cellIndex,neighbours:neighbours},$globals.CWRow)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "neighboursOf: aCell\x0a\x09\x22Here we give a Set to simplify game logic later (no twice the cell in the set)\x22\x0a\x0a\x09| cellIndex neighbours |\x0a\x09neighbours := Array new.\x0a\x09cellIndex := self cells indexOf: aCell.\x0a\x09cellIndex = 1 \x0a\x09\x09ifFalse: [ self childAt: cellIndex - 1 ifPresent: [ :child | neighbours add: child ] ].\x0a\x09cellIndex = self cells size \x0a\x09\x09ifFalse: [ self childAt: cellIndex + 1  ifPresent: [ :child | neighbours add: child ] ].\x0a\x09neighbours addAll: (self parent neighboursOf: self cellIndex: cellIndex).\x0a\x09^ neighbours",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["new", "indexOf:", "cells", "ifFalse:", "=", "childAt:ifPresent:", "-", "add:", "size", "+", "addAll:", "neighboursOf:cellIndex:", "parent"]
}),
$globals.CWRow);

$core.addMethod(
$core.method({
selector: "printString",
protocol: 'printing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv("a Row (".__comma($recv(self["@cells"])._size())).__comma(" cells)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printString",{},$globals.CWRow)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printString\x0a\x09^ 'a Row (', cells size, ' cells)'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "size"]
}),
$globals.CWRow);



$core.addClass('CWLeaf', $globals.CWComponent, [], 'Easnoth-MapModel');
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.CWLeaf)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWLeaf);

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
$globals.CWLeaf);



$core.addClass('CWImageLeaf', $globals.CWLeaf, ['image'], 'Easnoth-MapModel');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWImageLeaf.comment="I represent a leaf of the business objects tree that has an image. Usually only my instances are rendered when the CWDrawer visits the business object graph.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._shouldNotImplement();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.CWImageLeaf)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self shouldNotImplement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldNotImplement"]
}),
$globals.CWImageLeaf);

$core.addMethod(
$core.method({
selector: "image",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@image"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "image\x0a\x09^ image",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWImageLeaf);

$core.addMethod(
$core.method({
selector: "image:",
protocol: 'accessing',
fn: function (anImage){
var self=this;
self["@image"]=anImage;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anImage"],
source: "image: anImage\x0a\x09image := anImage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWImageLeaf);

$core.addMethod(
$core.method({
selector: "initializeFromKey:",
protocol: 'initialize-release',
fn: function (aKey){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@image"]=$recv(self._class())._imageCacheAt_(aKey);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeFromKey:",{aKey:aKey},$globals.CWImageLeaf)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "initializeFromKey: aKey\x0a\x09image := self class imageCacheAt: aKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["imageCacheAt:", "class"]
}),
$globals.CWImageLeaf);

$core.addMethod(
$core.method({
selector: "isLeaf",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isLeaf\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWImageLeaf);


$globals.CWImageLeaf.klass.iVarNames = ['imageCache'];
$core.addMethod(
$core.method({
selector: "folderName",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"folderName",{},$globals.CWImageLeaf.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "folderName\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWImageLeaf.klass);

$core.addMethod(
$core.method({
selector: "imageCache",
protocol: 'caching',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@imageCache"];
if(($receiver = $2) == null || $receiver.isNil){
self["@imageCache"]=$recv($Dictionary())._new();
$1=self["@imageCache"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"imageCache",{},$globals.CWImageLeaf.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "imageCache\x0a\x09^ imageCache ifNil: [ imageCache := Dictionary new ]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.CWImageLeaf.klass);

$core.addMethod(
$core.method({
selector: "imageCacheAt:",
protocol: 'caching',
fn: function (aKey){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._imageCache())._at_ifAbsentPut_(aKey,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._newImageFrom_(aKey);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"imageCacheAt:",{aKey:aKey},$globals.CWImageLeaf.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "imageCacheAt: aKey\x0a\x09^ self imageCache at: aKey ifAbsentPut: [ self newImageFrom: aKey ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsentPut:", "imageCache", "newImageFrom:"]
}),
$globals.CWImageLeaf.klass);

$core.addMethod(
$core.method({
selector: "newImageFrom:",
protocol: 'caching',
fn: function (aKey){
var self=this;
var announcer,image;
function $CWEasnothAnnouncer(){return $globals.CWEasnothAnnouncer||(typeof CWEasnothAnnouncer=="undefined"?nil:CWEasnothAnnouncer)}
function $NativeFunction(){return $globals.NativeFunction||(typeof NativeFunction=="undefined"?nil:NativeFunction)}
function $CWWaitForObject(){return $globals.CWWaitForObject||(typeof CWWaitForObject=="undefined"?nil:CWWaitForObject)}
function $CWObjectLoaded(){return $globals.CWObjectLoaded||(typeof CWObjectLoaded=="undefined"?nil:CWObjectLoaded)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$6,$5,$4,$7;
announcer=$recv($CWEasnothAnnouncer())._current();
image=$recv($NativeFunction())._constructor_("Image");
$recv(self._imageCache())._at_put_(aKey,image);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$1=announcer;
$2=$recv($CWWaitForObject())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($1)._announce_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["announce:"]=1;
//>>excludeEnd("ctx");
$recv(image)._at_put_("onload",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(announcer)._announce_($recv($CWObjectLoaded())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$3=image;
$6=$recv("ressources/images/".__comma(self._folderName())).__comma("/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$5=$recv($6).__comma(aKey);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$4=$recv($5).__comma(".png");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($3)._at_put_("src",$4);
$7=image;
return $7;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newImageFrom:",{aKey:aKey,announcer:announcer,image:image},$globals.CWImageLeaf.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "newImageFrom: aKey\x0a\x09\x22Create a new image and cache it. Announce start and end of asynchronous task\x22\x0a\x09\x0a\x09| announcer image |\x0a\x09\x0a\x09announcer := CWEasnothAnnouncer current.\x0a\x09image := NativeFunction constructor: 'Image'.\x0a\x09self imageCache at: aKey put: image.\x0a\x09announcer announce: CWWaitForObject new.\x0a\x09image at: 'onload' put: [ announcer announce: CWObjectLoaded new ].\x0a    image at: 'src' put:  'ressources/images/', self folderName, '/', aKey, '.png'.\x0a\x09\x0a\x09^ image",
referencedClasses: ["CWEasnothAnnouncer", "NativeFunction", "CWWaitForObject", "CWObjectLoaded"],
//>>excludeEnd("ide");
messageSends: ["current", "constructor:", "at:put:", "imageCache", "announce:", "new", ",", "folderName"]
}),
$globals.CWImageLeaf.klass);


$core.addClass('CWBackground', $globals.CWImageLeaf, [], 'Easnoth-MapModel');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWBackground.comment="I represent an element of the background (tiles, overtiles, ...).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._shouldNotImplement();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.CWBackground)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self shouldNotImplement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldNotImplement"]
}),
$globals.CWBackground);


$core.addMethod(
$core.method({
selector: "folderName",
protocol: 'accessing',
fn: function (){
var self=this;
return "back";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "folderName\x0a\x09^ 'back'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWBackground.klass);


$core.addClass('CWOverTile', $globals.CWBackground, [], 'Easnoth-MapModel');
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._visitOverTile_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.CWOverTile)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitOverTile: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitOverTile:"]
}),
$globals.CWOverTile);


$core.addMethod(
$core.method({
selector: "folderName",
protocol: 'accessing',
fn: function (){
var self=this;
return "overtiles";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "folderName\x0a\x09^ 'overtiles'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWOverTile.klass);


$core.addClass('CWTile', $globals.CWBackground, [], 'Easnoth-MapModel');
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._visitTile_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.CWTile)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitTile: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitTile:"]
}),
$globals.CWTile);

$core.addMethod(
$core.method({
selector: "isWall",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isWall\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWTile);


$core.addMethod(
$core.method({
selector: "folderName",
protocol: 'accessing',
fn: function (){
var self=this;
return "tiles";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "folderName\x0a\x09^ 'tiles'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWTile.klass);


$core.addClass('CWWall', $globals.CWTile, [], 'Easnoth-MapModel');
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._visitWall_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.CWWall)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitWall: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitWall:"]
}),
$globals.CWWall);

$core.addMethod(
$core.method({
selector: "isWall",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isWall\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWWall);



$core.addClass('CWGameOverTile', $globals.CWImageLeaf, ['htmlImage'], 'Easnoth-MapModel');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWGameOverTile.comment="class side I have an image array to crete got faster as they are the most created / gc objects";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._visitGameOverTile_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.CWGameOverTile)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitGameOverTile: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitGameOverTile:"]
}),
$globals.CWGameOverTile);

$core.addMethod(
$core.method({
selector: "darken",
protocol: 'coloring',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._imageArray();
$1=$recv($2)._at_($recv(self._class())._darkGreenIndex());
self._image_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"darken",{},$globals.CWGameOverTile)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "darken\x0a\x09self image: (self class imageArray at: self class darkGreenIndex)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["image:", "at:", "imageArray", "class", "darkGreenIndex"]
}),
$globals.CWGameOverTile);

$core.addMethod(
$core.method({
selector: "green",
protocol: 'coloring',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._imageArray();
$1=$recv($2)._at_($recv(self._class())._greenIndex());
self._image_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"green",{},$globals.CWGameOverTile)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "green\x0a\x09self image: (self class imageArray at: self class greenIndex)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["image:", "at:", "imageArray", "class", "greenIndex"]
}),
$globals.CWGameOverTile);

$core.addMethod(
$core.method({
selector: "htmlImage:",
protocol: 'accessing',
fn: function (aHTMLElem){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@htmlImage"]=$recv(aHTMLElem)._asJQuery();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"htmlImage:",{aHTMLElem:aHTMLElem},$globals.CWGameOverTile)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aHTMLElem"],
source: "htmlImage: aHTMLElem\x0a\x09htmlImage := aHTMLElem asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asJQuery"]
}),
$globals.CWGameOverTile);

$core.addMethod(
$core.method({
selector: "image:",
protocol: 'accessing',
fn: function (anImage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@htmlImage"])._attr_put_("src",$recv(anImage)._src());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"image:",{anImage:anImage},$globals.CWGameOverTile)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anImage"],
source: "image: anImage\x0a\x09htmlImage attr: 'src' put: anImage src",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["attr:put:", "src"]
}),
$globals.CWGameOverTile);

$core.addMethod(
$core.method({
selector: "invis",
protocol: 'coloring',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._imageArray();
$1=$recv($2)._at_($recv(self._class())._invisIndex());
self._image_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"invis",{},$globals.CWGameOverTile)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "invis\x0a\x09self image: (self class imageArray at: self class invisIndex)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["image:", "at:", "imageArray", "class", "invisIndex"]
}),
$globals.CWGameOverTile);

$core.addMethod(
$core.method({
selector: "lighten",
protocol: 'coloring',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._green();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lighten",{},$globals.CWGameOverTile)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lighten\x0a\x09self green",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["green"]
}),
$globals.CWGameOverTile);

$core.addMethod(
$core.method({
selector: "red",
protocol: 'coloring',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._imageArray();
$1=$recv($2)._at_($recv(self._class())._redIndex());
self._image_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"red",{},$globals.CWGameOverTile)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "red\x0a\x09self image: (self class imageArray at: self class redIndex)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["image:", "at:", "imageArray", "class", "redIndex"]
}),
$globals.CWGameOverTile);

$core.addMethod(
$core.method({
selector: "white",
protocol: 'coloring',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._imageArray();
$1=$recv($2)._at_($recv(self._class())._whiteIndex());
self._image_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"white",{},$globals.CWGameOverTile)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "white\x0a\x09self image: (self class imageArray at: self class whiteIndex)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["image:", "at:", "imageArray", "class", "whiteIndex"]
}),
$globals.CWGameOverTile);


$globals.CWGameOverTile.klass.iVarNames = ['imageArray'];
$core.addMethod(
$core.method({
selector: "createImageArray",
protocol: 'array',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15;
self["@imageArray"]=$recv($Array())._new_((5));
$1=self["@imageArray"];
$2=$1;
$3=self._greenIndex();
$4=self._imageCacheAt_("green");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["imageCacheAt:"]=1;
//>>excludeEnd("ctx");
$recv($2)._at_put_($3,$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$5=$1;
$6=self._darkGreenIndex();
$7=self._imageCacheAt_("darkGreen");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["imageCacheAt:"]=2;
//>>excludeEnd("ctx");
$recv($5)._at_put_($6,$7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$8=$1;
$9=self._redIndex();
$10=self._imageCacheAt_("red");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["imageCacheAt:"]=3;
//>>excludeEnd("ctx");
$recv($8)._at_put_($9,$10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$11=$1;
$12=self._whiteIndex();
$13=self._imageCacheAt_("white");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["imageCacheAt:"]=4;
//>>excludeEnd("ctx");
$recv($11)._at_put_($12,$13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
$14=$recv($1)._at_put_(self._invisIndex(),self._imageCacheAt_("invis"));
$15=self["@imageArray"];
return $15;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createImageArray",{},$globals.CWGameOverTile.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "createImageArray\x0a\x09imageArray := Array new: 5.\x0a\x09imageArray \x0a\x09\x09at: self greenIndex put: (self imageCacheAt: 'green');\x0a\x09\x09at: self darkGreenIndex put: (self imageCacheAt: 'darkGreen');\x0a\x09\x09at: self redIndex put: (self imageCacheAt: 'red');\x0a\x09\x09at: self whiteIndex put: (self imageCacheAt: 'white');\x0a\x09\x09at: self invisIndex put: (self imageCacheAt: 'invis').\x0a\x09^ imageArray",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["new:", "at:put:", "greenIndex", "imageCacheAt:", "darkGreenIndex", "redIndex", "whiteIndex", "invisIndex"]
}),
$globals.CWGameOverTile.klass);

$core.addMethod(
$core.method({
selector: "darkGreenIndex",
protocol: 'index',
fn: function (){
var self=this;
return (5);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "darkGreenIndex\x0a\x09^ 5",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWGameOverTile.klass);

$core.addMethod(
$core.method({
selector: "folderName",
protocol: 'accessing',
fn: function (){
var self=this;
return "gots";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "folderName\x0a\x09^ 'gots'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWGameOverTile.klass);

$core.addMethod(
$core.method({
selector: "greenIndex",
protocol: 'index',
fn: function (){
var self=this;
return (1);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "greenIndex\x0a\x09^ 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWGameOverTile.klass);

$core.addMethod(
$core.method({
selector: "imageArray",
protocol: 'array',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@imageArray"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._createImageArray();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"imageArray",{},$globals.CWGameOverTile.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "imageArray\x0a\x09^ imageArray ifNil: [ self createImageArray ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "createImageArray"]
}),
$globals.CWGameOverTile.klass);

$core.addMethod(
$core.method({
selector: "invisIndex",
protocol: 'index',
fn: function (){
var self=this;
return (4);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "invisIndex\x0a\x09^ 4",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWGameOverTile.klass);

$core.addMethod(
$core.method({
selector: "redIndex",
protocol: 'index',
fn: function (){
var self=this;
return (2);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "redIndex\x0a\x09^ 2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWGameOverTile.klass);

$core.addMethod(
$core.method({
selector: "whiteIndex",
protocol: 'index',
fn: function (){
var self=this;
return (3);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "whiteIndex\x0a\x09^ 3",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWGameOverTile.klass);


$core.addClass('CWMonster', $globals.CWImageLeaf, ['currentMove', 'move', 'attack', 'dices', 'hp', 'range', 'state', 'player', 'special', 'strategy', 'typeStrategy', 'canvas'], 'Easnoth-MapModel');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWMonster.comment="I represent people on the map. My instances variables are the stats of the guy I represent.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "accept:",
protocol: 'strategy delegation',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@strategy"])._accept_for_(aVisitor,self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ strategy accept: aVisitor for: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["accept:for:"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "activate",
protocol: 'state delegation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._state())._activate_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activate",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "activate\x0a\x09self state activate: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["activate:", "state"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "addSelectorsTo:",
protocol: 'selection',
fn: function (cells){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._root())._removeSelection();
$recv(cells)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._addSelector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return cells;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addSelectorsTo:",{cells:cells},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cells"],
source: "addSelectorsTo: cells\x0a\x0a\x09self root removeSelection.\x0a\x09cells do: [:each | each addSelector ].\x0a\x09\x0a\x09^ cells",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeSelection", "root", "do:", "addSelector"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "animPath:iterator:callback:",
protocol: 'move',
fn: function (path,j,callback){
var self=this;
var cell1FirstCoods,cell2,pathSize;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$10,$9,$8,$7,$6,$14,$13,$12,$11,$5;
pathSize=$recv(path)._size();
$1=$recv(j).__eq(pathSize);
if($core.assert($1)){
$2=$recv(callback)._value();
return $2;
};
cell1FirstCoods=$recv(self._parent())._firstCoods();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["firstCoods"]=1;
//>>excludeEnd("ctx");
$3=$recv(pathSize).__minus(j);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
cell2=$recv(path)._at_($3);
self._changeCell_(cell2);
self._decreaseCurrentMove();
$4=$recv(self._canvas())._asJQuery();
$10=$recv(cell2)._firstCoods();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["firstCoods"]=2;
//>>excludeEnd("ctx");
$9=$recv($10)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$8=$recv($9).__minus($recv(cell1FirstCoods)._x());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=2;
//>>excludeEnd("ctx");
$7="+=".__comma($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$6=$recv($7).__comma("px");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$14=$recv($recv(cell2)._firstCoods())._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$13=$recv($14).__minus($recv(cell1FirstCoods)._y());
$12="+=".__comma($13);
$11=$recv($12).__comma("px");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$5=$globals.HashedCollection._newFromPairs_(["left",$6,"top",$11]);
$recv($4)._animate_duration_easing_complete_($5,(300),"linear",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._animPath_iterator_callback_(path,$recv(j).__plus((1)),callback);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"animPath:iterator:callback:",{path:path,j:j,callback:callback,cell1FirstCoods:cell1FirstCoods,cell2:cell2,pathSize:pathSize},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["path", "j", "callback"],
source: "animPath: path iterator: j callback: callback\x0a\x09| cell1FirstCoods cell2 pathSize |\x0a\x09\x0a\x09pathSize := path size.\x0a\x09\x0a\x09j = pathSize\x0a\x09\x09ifTrue: [ ^ callback value ].\x0a\x09\x09\x09\x0a\x09cell1FirstCoods := self parent firstCoods.\x0a\x09cell2 := path at: pathSize - j.\x0a\x09self changeCell: cell2.\x0a\x09self decreaseCurrentMove.\x0a\x09\x09\x0a\x09self canvas asJQuery\x0a\x09\x09animate: #{ \x0a\x09\x09\x09'left' -> ('+=' , (cell2 firstCoods x - cell1FirstCoods x) , 'px') .\x0a\x09\x09\x09'top' -> ('+=' , (cell2 firstCoods y - cell1FirstCoods y) , 'px') }\x0a       \x09duration: 300\x0a     \x09easing: 'linear'\x0a\x09\x09complete: [ self animPath: path iterator: j + 1 callback: callback ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size", "ifTrue:", "=", "value", "firstCoods", "parent", "at:", "-", "changeCell:", "decreaseCurrentMove", "animate:duration:easing:complete:", "asJQuery", "canvas", ",", "x", "y", "animPath:iterator:callback:", "+"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "animationMoveTo:callback:",
protocol: 'move',
fn: function (cellLast,callback){
var self=this;
var path;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
path=self._pathTo_(cellLast);
$recv($recv(cellLast)._root())._removeSelection();
self._animPath_iterator_callback_(path,(1),callback);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"animationMoveTo:callback:",{cellLast:cellLast,callback:callback,path:path},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cellLast", "callback"],
source: "animationMoveTo: cellLast callback: callback\x0a\x09\x0a\x09| path |\x0a\x09\x0a\x09path := self pathTo: cellLast.\x0a\x09cellLast root removeSelection.\x0a\x09\x0a\x09self animPath: path iterator: 1 callback: callback",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["pathTo:", "removeSelection", "root", "animPath:iterator:callback:"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "announceUpdate",
protocol: 'rendering',
fn: function (){
var self=this;
function $CWMonsterUpdateEvent(){return $globals.CWMonsterUpdateEvent||(typeof CWMonsterUpdateEvent=="undefined"?nil:CWMonsterUpdateEvent)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._announce_($recv($recv($CWMonsterUpdateEvent())._new())._monster_(self));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"announceUpdate",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "announceUpdate\x0a\x09self announce: (CWMonsterUpdateEvent new monster: self)",
referencedClasses: ["CWMonsterUpdateEvent"],
//>>excludeEnd("ide");
messageSends: ["announce:", "monster:", "new"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "attack",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@attack"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "attack\x0a\x09^ attack",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "attack:",
protocol: 'accessing',
fn: function (int){
var self=this;
self["@attack"]=int;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["int"],
source: "attack: int\x0a\x09attack := int",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "attack:inContext:",
protocol: 'fighting',
fn: function (anotherMonster,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@typeStrategy"])._monster_attackNeighbour_inContext_(self,anotherMonster,gameContext);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"attack:inContext:",{anotherMonster:anotherMonster,gameContext:gameContext},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anotherMonster", "gameContext"],
source: "attack: anotherMonster inContext: gameContext\x0a\x09\x22Dispatch to type strategy for advantages of attacks and goes to attack:InContext:bonus:\x22\x0a\x09\x0a\x09^ typeStrategy monster: self attackNeighbour: anotherMonster inContext: gameContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["monster:attackNeighbour:inContext:"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "attack:inContext:bonus:",
protocol: 'fighting',
fn: function (anotherMonster,gameContext,int){
var self=this;
var ennemySupport,ennemyHerosSupport,ennemyUnitSupport,support,herosSupport,unitSupport,bonusDices,bonusAttack;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$4,$2,$1;
bonusDices=int;
bonusAttack=$recv(int).__star((10));
$3=bonusDices;
$4=self._dices();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dices"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__plus($4);
$1=$recv($2).__lt((1));
if($core.assert($1)){
bonusDices=$recv($recv(self._dices()).__minus((1)))._negated();
bonusDices;
};
self._resolveAttack_inContext_bonusDices_bonusAttack_(anotherMonster,gameContext,bonusDices,bonusAttack);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"attack:inContext:bonus:",{anotherMonster:anotherMonster,gameContext:gameContext,int:int,ennemySupport:ennemySupport,ennemyHerosSupport:ennemyHerosSupport,ennemyUnitSupport:ennemyUnitSupport,support:support,herosSupport:herosSupport,unitSupport:unitSupport,bonusDices:bonusDices,bonusAttack:bonusAttack},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anotherMonster", "gameContext", "int"],
source: "attack: anotherMonster inContext: gameContext bonus: int\x0a\x09\x22int is for now -1 0 or 1 and represents the advantages / disadvantages of attacks\x22\x0a\x09\x22Support is now commented, uncomment the big thing to put it back. But it needs some refactorings ..\x22\x0a\x09\x0a\x09| ennemySupport ennemyHerosSupport ennemyUnitSupport support herosSupport unitSupport bonusDices bonusAttack |\x0a\x09\x0a\x09\x22ennemySupport := self support.\x0a\x09ennemySupport := ennemySupport remove: anotherMonster parent ifAbsent: [\x22\x22range attack\x22\x22].\x0a\x09ennemyHerosSupport := ( ennemySupport select: [ :each | each monster isHeros ] ) size.\x0a\x09ennemyUnitSupport := ennemySupport size - ennemyHerosSupport.\x0a\x09\x0a\x09support := anotherMonster support.\x0a\x09support := support remove: self parent ifAbsent: [\x22\x22range attack\x22\x22].\x0a\x09herosSupport := ( support select: [ :each | each monster isHeros ] ) size.\x0a\x09unitSupport := support size - herosSupport.\x0a\x09\x0a\x09bonusDices := int + herosSupport - ennemyHerosSupport.\x0a\x09bonusAttack := ( int + unitSupport - ennemyUnitSupport ) * 10.\x22\x0a\x09\x0a\x09bonusDices := int.\x0a\x09bonusAttack := int * 10.\x0a\x09\x0a\x09bonusDices + self dices < 1 ifTrue: [ bonusDices := (self dices - 1) negated \x221 dice min\x22 ]. \x0a\x09\x0a\x09self resolveAttack: anotherMonster inContext: gameContext bonusDices: bonusDices bonusAttack: bonusAttack",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["*", "ifTrue:", "<", "+", "dices", "negated", "-", "resolveAttack:inContext:bonusDices:bonusAttack:"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "attackPotential",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@attack"]).__star(self["@dices"]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"attackPotential",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "attackPotential\x0a\x09\x22Answers the power of attack of the monster\x22\x0a\x09^ attack * dices",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["*"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "attackPotentialFor:",
protocol: 'accessing',
fn: function (target){
var self=this;
var adv;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1;
adv=$recv(self["@typeStrategy"])._bonusVS_(target);
$3=$recv(self["@attack"]).__plus((10));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__star(adv);
$1=$recv($2).__star($recv(self["@dices"]).__plus(adv));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"attackPotentialFor:",{target:target,adv:adv},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["target"],
source: "attackPotentialFor: target\x0a\x09\x22Answers the power of attack of the monster considering target weakness and strength\x22\x0a\x09| adv |\x0a\x09adv := typeStrategy bonusVS: target.\x0a\x09^ (attack + 10 * adv) * (dices + adv)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bonusVS:", "*", "+"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "attackTo:inContext:",
protocol: 'state delegation',
fn: function (aCell,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._state())._monster_attackTo_inContext_(self,aCell,gameContext);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"attackTo:inContext:",{aCell:aCell,gameContext:gameContext},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell", "gameContext"],
source: "attackTo: aCell inContext: gameContext\x0a\x09self state monster: self attackTo: aCell inContext: gameContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["monster:attackTo:inContext:", "state"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "attackableNeighbours",
protocol: 'selection',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._monsterSelection())._second();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"attackableNeighbours",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "attackableNeighbours\x0a\x09^ self monsterSelection second",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["second", "monsterSelection"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "bonusVSCavalry",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@typeStrategy"])._bonusVSCavalry();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bonusVSCavalry",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bonusVSCavalry\x0a\x09^ typeStrategy bonusVSCavalry",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bonusVSCavalry"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "bonusVSRange",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@typeStrategy"])._bonusVSRange();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bonusVSRange",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bonusVSRange\x0a\x09^ typeStrategy bonusVSRange",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bonusVSRange"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "bonusVSTroop",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@typeStrategy"])._bonusVSTroop();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bonusVSTroop",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bonusVSTroop\x0a\x09^ typeStrategy bonusVSTroop",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bonusVSTroop"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "canvas",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@canvas"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "canvas\x0a\x09^ canvas",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "canvas:",
protocol: 'accessing',
fn: function (aCanvas){
var self=this;
self["@canvas"]=aCanvas;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCanvas"],
source: "canvas: aCanvas\x0a\x09canvas := aCanvas",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "cellToMoveBeforeAttack:context:",
protocol: 'move',
fn: function (cellLast,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5,$7,$8,$6,$9,$10,$receiver;
$1=self._isRanged();
if($core.assert($1)){
$2=self._cellToMoveBeforeRangeAttack_(cellLast);
return $2;
};
$4=$recv(gameContext)._relatedCell();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["relatedCell"]=1;
//>>excludeEnd("ctx");
if(($receiver = $4) == null || $receiver.isNil){
$3=false;
} else {
var it;
it=$receiver;
$3=$recv(it)._isFreeSelected();
};
if($core.assert($3)){
$5=$recv(gameContext)._relatedCell();
return $5;
};
$7=$recv(cellLast)._neighbours();
$8=self._parent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["parent"]=1;
//>>excludeEnd("ctx");
$6=$recv($7)._includes_($8);
if($core.assert($6)){
$9=self._parent();
return $9;
};
$10=$recv(self._pathTo_(cellLast))._at_((2));
return $10;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cellToMoveBeforeAttack:context:",{cellLast:cellLast,gameContext:gameContext},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cellLast", "gameContext"],
source: "cellToMoveBeforeAttack: cellLast context: gameContext\x0a\x09\x22Assumes that a monster is at self and want to attack cellLast's monster, which is not a neighbour.\x0a\x09Answers the closest cell from cell1 that the current monster can reach to attack cellLast's monster\x22\x0a\x09\x0a\x09self isRanged ifTrue: [ ^ self cellToMoveBeforeRangeAttack: cellLast ].\x0a\x09(gameContext relatedCell ifNotNil: [ :it | it isFreeSelected ] ifNil: [ false ] ) ifTrue: [ ^ gameContext relatedCell ]. \x0a\x09(cellLast neighbours includes: self parent) ifTrue: [ ^ self parent ].\x0a\x0a\x09^ (self pathTo: cellLast) at: 2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isRanged", "cellToMoveBeforeRangeAttack:", "ifNotNil:ifNil:", "relatedCell", "isFreeSelected", "includes:", "neighbours", "parent", "at:", "pathTo:"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "cellToMoveBeforeRangeAttack:",
protocol: 'move',
fn: function (cellLast){
var self=this;
var shortestPath;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$4,$3,$1,$5,$6;
shortestPath=self._pathTo_(cellLast);
$2=$recv(shortestPath)._size();
$4=self._range();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["range"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__lt($3);
if($core.assert($1)){
$5=self._parent();
return $5;
};
$6=$recv(shortestPath)._at_($recv(self._range()).__plus((1)));
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cellToMoveBeforeRangeAttack:",{cellLast:cellLast,shortestPath:shortestPath},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cellLast"],
source: "cellToMoveBeforeRangeAttack: cellLast\x0a\x09| shortestPath |\x0a\x09\x0a\x09shortestPath := self pathTo: cellLast. \x22shortest fake track to ennemy\x22\x0a\x09shortestPath size < (self range + 1) ifTrue: [ ^ self parent ]. \x22for AI move calculs only\x22\x0a\x09^ shortestPath at: self range + 1. \x22in fake track, get furthest from ennemy cell where you can attack him\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["pathTo:", "ifTrue:", "<", "size", "+", "range", "parent", "at:"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "changeCell:",
protocol: 'move',
fn: function (aCell){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._parent())._removeMonster();
$recv(aCell)._addMonster_(self);
$recv($recv(self._canvas())._asJQuery())._css_put_("z-index",$recv(aCell)._zIndex());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changeCell:",{aCell:aCell},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "changeCell: aCell\x0a    self parent removeMonster.\x0a\x09aCell addMonster: self.\x0a\x09self canvas asJQuery css: 'z-index' put: aCell zIndex",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeMonster", "parent", "addMonster:", "css:put:", "asJQuery", "canvas", "zIndex"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "changeState:",
protocol: 'accessing',
fn: function (stateClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@state"]=$recv(stateClass)._default();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changeState:",{stateClass:stateClass},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stateClass"],
source: "changeState: stateClass\x0a\x09state := stateClass default",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["default"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "checkForNextTurn",
protocol: 'state delegation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._currentMove()).__gt((0));
if($core.assert($1)){
return self;
};
$recv(self._state())._checkForNextTurn_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "checkForNextTurn\x0a\x09self currentMove > 0 ifTrue: [ ^ self ].\x0a\x09self state checkForNextTurn: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", ">", "currentMove", "checkForNextTurn:", "state"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "cleanUI",
protocol: 'rendering',
fn: function (){
var self=this;
var elem;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
elem=$recv(self._canvas())._element();
$recv(self._context())._clearRect_y_width_height_((0),(0),$recv(elem)._width(),$recv(elem)._height());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cleanUI",{elem:elem},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cleanUI\x0a\x09| elem |\x0a\x09elem := self canvas element.\x0a\x09self context clearRect: 0 y: 0 width: elem width height: elem height.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["element", "canvas", "clearRect:y:width:height:", "context", "width", "height"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "context",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@canvas"])._element())._getContext_("2d");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"context",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "context\x0a\x09^ canvas element getContext: '2d'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["getContext:", "element"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "currentMove",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@currentMove"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentMove\x0a\x09^ currentMove",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "currentMove:",
protocol: 'accessing',
fn: function (int){
var self=this;
function $CWMonsterUpdateEvent(){return $globals.CWMonsterUpdateEvent||(typeof CWMonsterUpdateEvent=="undefined"?nil:CWMonsterUpdateEvent)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@currentMove"]=int;
self._announce_($recv($CWMonsterUpdateEvent())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currentMove:",{int:int},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["int"],
source: "currentMove: int\x0a\x09currentMove := int.\x0a\x09self announce: CWMonsterUpdateEvent new",
referencedClasses: ["CWMonsterUpdateEvent"],
//>>excludeEnd("ide");
messageSends: ["announce:", "new"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "decreaseCurrentMove",
protocol: 'move',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._currentMove_($recv(self._currentMove()).__minus((1)));
self._announceUpdate();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"decreaseCurrentMove",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "decreaseCurrentMove\x0a\x09self currentMove: self currentMove - 1.\x0a\x09self announceUpdate. \x22shows it on the monster selected panel\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["currentMove:", "-", "currentMove", "announceUpdate"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "defaultHp",
protocol: 'strategy delegation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@strategy"])._defaultHP();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultHp",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultHp\x0a\x09^ strategy defaultHP",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["defaultHP"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "defaultState",
protocol: 'accessing',
fn: function (){
var self=this;
function $CWInactive(){return $globals.CWInactive||(typeof CWInactive=="undefined"?nil:CWInactive)}
return $CWInactive();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultState\x0a\x09\x22When map is initialized the monster will get this state by default\x22\x0a\x09^ CWInactive",
referencedClasses: ["CWInactive"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "defensePotential",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@hp"]).__star((100));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defensePotential",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defensePotential\x0a\x09\x22Answers the power of defense of the monster\x22\x0a\x09^ hp * 100",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["*"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "desactivateMonsters",
protocol: 'state delegation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._state())._desactivate_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"desactivateMonsters",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "desactivateMonsters\x0a\x09self state desactivate: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["desactivate:", "state"]
}),
$globals.CWMonster);

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
$globals.CWMonster);

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
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "die",
protocol: 'fighting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._parent())._removeMonster();
$recv(self._player())._removeMonster_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"die",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "die\x0a\x09self parent removeMonster.\x0a\x09self player removeMonster: self.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeMonster", "parent", "removeMonster:", "player"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "display:cood:",
protocol: 'rendering',
fn: function (monster,aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._context())._drawImage_x_y_($recv(monster)._image(),$recv(aPoint)._x(),$recv(aPoint)._y());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"display:cood:",{monster:monster,aPoint:aPoint},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["monster", "aPoint"],
source: "display: monster cood: aPoint\x0a\x09self context\x0a\x09\x09drawImage: monster image\x0a\x09\x09x: aPoint x\x0a\x09\x09y: aPoint y.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["drawImage:x:y:", "context", "image", "x", "y"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "hasPlayed",
protocol: 'state delegation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._state())._hasPlayed_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasPlayed",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hasPlayed\x0a\x09^ self state hasPlayed: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hasPlayed:", "state"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "hp",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@hp"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hp\x0a\x09^ hp",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "hp:",
protocol: 'accessing',
fn: function (int){
var self=this;
self["@hp"]=int;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["int"],
source: "hp: int\x0a\x09hp := int",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialize-release',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CWMonster.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._currentMove_((0));
self._initializeState();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self currentMove: 0.\x0a\x09self initializeState",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "currentMove:", "initializeState"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "initializeState",
protocol: 'initialize-release',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._changeState_(self._defaultState());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeState",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeState\x0a\x09self changeState: self defaultState",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["changeState:", "defaultState"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "initializeWithStat:army:player:heros:type:",
protocol: 'initialize-release',
fn: function (jsonStat,army,aPlayer,strat,aType){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._player_(aPlayer);
self["@strategy"]=$recv(strat)._default();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["default"]=1;
//>>excludeEnd("ctx");
self["@typeStrategy"]=$recv(aType)._default();
self._stats_(jsonStat);
$1=$recv($recv(army).__comma("/")).__comma(self._key());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CWMonster.superclass.fn.prototype._initializeFromKey_.apply($recv(self), [$1]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeWithStat:army:player:heros:type:",{jsonStat:jsonStat,army:army,aPlayer:aPlayer,strat:strat,aType:aType},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["jsonStat", "army", "aPlayer", "strat", "aType"],
source: "initializeWithStat: jsonStat army: army player: aPlayer heros: strat type: aType\x0a\x09self player: aPlayer.\x0a\x09strategy := strat default.\x0a\x09typeStrategy := aType default.\x0a\x09self stats: jsonStat.\x0a\x09super initializeFromKey: army, '/', self key.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["player:", "default", "stats:", "initializeFromKey:", ",", "key"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "isAttackedByCavalry:inContext:",
protocol: 'fighting',
fn: function (aMonster,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@typeStrategy"])._monster_isAttackedByCavalry_inContext_(self,aMonster,gameContext);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAttackedByCavalry:inContext:",{aMonster:aMonster,gameContext:gameContext},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster", "gameContext"],
source: "isAttackedByCavalry: aMonster inContext: gameContext\x0a\x09^ typeStrategy monster: self isAttackedByCavalry: aMonster inContext: gameContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["monster:isAttackedByCavalry:inContext:"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "isAttackedByRange:inContext:",
protocol: 'fighting',
fn: function (aMonster,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@typeStrategy"])._monster_isAttackedByRange_inContext_(self,aMonster,gameContext);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAttackedByRange:inContext:",{aMonster:aMonster,gameContext:gameContext},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster", "gameContext"],
source: "isAttackedByRange: aMonster inContext: gameContext\x0a\x09^ typeStrategy monster: self isAttackedByRange: aMonster inContext: gameContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["monster:isAttackedByRange:inContext:"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "isAttackedByTroop:inContext:",
protocol: 'fighting',
fn: function (aMonster,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@typeStrategy"])._monster_isAttackedByTroop_inContext_(self,aMonster,gameContext);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAttackedByTroop:inContext:",{aMonster:aMonster,gameContext:gameContext},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster", "gameContext"],
source: "isAttackedByTroop: aMonster inContext: gameContext\x0a\x09^ typeStrategy monster: self isAttackedByTroop: aMonster inContext: gameContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["monster:isAttackedByTroop:inContext:"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "isHeros",
protocol: 'strategy delegation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@strategy"])._isHeros();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isHeros",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isHeros\x0a\x09^ strategy isHeros",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isHeros"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "isInactive",
protocol: 'state delegation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._state())._isInactive();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isInactive",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInactive\x0a\x09^ self state isInactive",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isInactive", "state"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "isRanged",
protocol: 'strategy delegation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@typeStrategy"])._isRanged();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isRanged",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isRanged\x0a\x09^ typeStrategy isRanged",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isRanged"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "isUnit",
protocol: 'strategy delegation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._isHeros())._not();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isUnit",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isUnit\x0a\x09^ self isHeros not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not", "isHeros"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "key",
protocol: 'strategy delegation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(self["@typeStrategy"])._key();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["key"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($recv(self["@strategy"])._key());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"key",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ typeStrategy key, strategy key",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "key"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "monsterSelection",
protocol: 'selection',
fn: function (){
var self=this;
var movableCells,newMovableCells,attackableCells,tempSet,cycleNumber;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8;
$recv(self._root())._unmark();
$1=self._parent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["parent"]=1;
//>>excludeEnd("ctx");
$recv($1)._mark();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["mark"]=1;
//>>excludeEnd("ctx");
tempSet=$recv($Array())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
attackableCells=$recv($Array())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
movableCells=$recv($Array())._new();
$2=self._range();
$3=self._currentMove();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["currentMove"]=1;
//>>excludeEnd("ctx");
cycleNumber=$recv($2).__plus($3);
newMovableCells=[self._parent()];
(1)._to_do_(cycleNumber,(function(i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(tempSet)._reset();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["reset"]=1;
//>>excludeEnd("ctx");
$recv(newMovableCells)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(each)._neighbours())._do_((function(neigh){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$4=$recv(neigh)._isMarked();
if(!$core.assert($4)){
$recv(neigh)._mark();
$recv(neigh)._prevCell_(each);
$5=$recv(neigh)._isFree();
if($core.assert($5)){
$recv(tempSet)._add_(neigh);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
};
$6=$recv(neigh)._canBeAttackedBy_(self._side());
if($core.assert($6)){
return $recv(attackableCells)._add_(neigh);
};
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({neigh:neigh},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$7=$recv($recv(i).__eq((1))).__or($recv($recv(i).__minus((1))).__gt(self._currentMove()));
if(!$core.assert($7)){
$recv(movableCells)._addAll_(newMovableCells);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["addAll:"]=1;
//>>excludeEnd("ctx");
};
$recv(newMovableCells)._reset();
return $recv(newMovableCells)._addAll_(tempSet);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$8=[movableCells,attackableCells];
return $8;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"monsterSelection",{movableCells:movableCells,newMovableCells:newMovableCells,attackableCells:attackableCells,tempSet:tempSet,cycleNumber:cycleNumber},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "monsterSelection\x0a\x09\x22this used to be divided into several methods, but it is now in 1 to be faster...\x0a\x09Answers the cells the monster can attack or move\x22\x0a\x09| movableCells newMovableCells attackableCells tempSet cycleNumber |\x0a\x09\x0a\x09self root unmark.\x0a\x09self parent mark.\x0a\x09\x0a\x09tempSet := Array new.\x0a\x09attackableCells := Array new.\x0a\x09movableCells := Array new.\x0a\x09cycleNumber := self range + self currentMove.\x0a\x09\x0a\x09newMovableCells := { self parent }.\x0a\x091 to: cycleNumber do: [ :i |\x0a\x09\x09tempSet reset.\x0a\x09\x09newMovableCells do: [ :each | \x0a\x09\x09\x09each neighbours do: [ :neigh | \x0a\x09\x09\x09\x09neigh isMarked \x0a\x09\x09\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09\x09\x09neigh mark.\x0a\x09\x09\x09\x09\x09\x09neigh prevCell: each.\x0a\x09\x09\x09\x09\x09\x09neigh isFree ifTrue: [ tempSet add: neigh ].\x0a\x09\x09\x09\x09\x09\x09(neigh canBeAttackedBy: self side) ifTrue: [ attackableCells add: neigh ]] ] ].\x0a\x09\x09i = 1 | (i - 1 > self currentMove) ifFalse: [\x0a\x09\x09\x09movableCells addAll: newMovableCells].\x0a\x09\x09newMovableCells reset.\x0a\x09\x09newMovableCells addAll: tempSet].\x0a\x09\x0a\x09 ^ { movableCells . attackableCells }",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["unmark", "root", "mark", "parent", "new", "+", "range", "currentMove", "to:do:", "reset", "do:", "neighbours", "ifFalse:", "isMarked", "prevCell:", "ifTrue:", "isFree", "add:", "canBeAttackedBy:", "side", "|", "=", ">", "-", "addAll:"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "movableNeighbours",
protocol: 'selection',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._monsterSelection())._first();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"movableNeighbours",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "movableNeighbours\x0a\x09^ self monsterSelection first",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["first", "monsterSelection"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "move",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@move"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "move\x0a\x09^ move",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "move:",
protocol: 'accessing',
fn: function (int){
var self=this;
self["@move"]=int;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["int"],
source: "move: int\x0a\x09move := int",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "moveTo:inContext:",
protocol: 'state delegation',
fn: function (aCell,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._state())._monster_moveTo_inContext_(self,aCell,gameContext);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveTo:inContext:",{aCell:aCell,gameContext:gameContext},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell", "gameContext"],
source: "moveTo: aCell inContext: gameContext\x0a\x09self state monster: self moveTo: aCell inContext: gameContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["monster:moveTo:inContext:", "state"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "moveTo:inContext:callback:",
protocol: 'move',
fn: function (aCell,gameContext,callback){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._animationMoveTo_callback_(aCell,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(self._state())._changeStateAfterMoving_(self);
self._selectInContext_(gameContext);
self._checkForNextTurn();
return $recv(callback)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveTo:inContext:callback:",{aCell:aCell,gameContext:gameContext,callback:callback},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell", "gameContext", "callback"],
source: "moveTo: aCell inContext: gameContext callback: callback\x0a\x09\x22triggers the animation for the monster move\x22\x0a\x09\x0a\x09self animationMoveTo: aCell callback: [\x09\x0a\x09\x09self state changeStateAfterMoving: self.\x0a\x09\x09self selectInContext: gameContext.\x0a\x09\x09self checkForNextTurn.\x0a\x09\x09callback value.\x0a\x09].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["animationMoveTo:callback:", "changeStateAfterMoving:", "state", "selectInContext:", "checkForNextTurn", "value"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "pathTo:",
protocol: 'move',
fn: function (cellLast){
var self=this;
var path;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
path=$recv($Array())._with_(cellLast);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self._parent();
$2=$recv(path)._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["last"]=1;
//>>excludeEnd("ctx");
return $recv($1).__eq($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(path)._add_($recv($recv(path)._last())._prevCell());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$3=path;
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pathTo:",{cellLast:cellLast,path:path},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cellLast"],
source: "pathTo: cellLast\x0a\x09\x22Assumes that some cells are selected and that the player clicked on a selected cell.\x0a\x09Answers the shortest path from the current cell to the cell clicked\x22\x0a\x0a\x09| path |\x0a\x09path := Array with: cellLast.\x0a\x09[ self parent = path last ] whileFalse: [ path add: path last prevCell ].\x0a\x09^ path",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["with:", "whileFalse:", "=", "parent", "last", "add:", "prevCell"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "player",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@player"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "player\x0a\x09^ player",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "player:",
protocol: 'accessing',
fn: function (aPlayer){
var self=this;
self["@player"]=aPlayer;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPlayer"],
source: "player: aPlayer\x0a\x09player := aPlayer",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("a Monster(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($recv(self._parent())._printString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: 'a Monster('.\x0a\x09aStream nextPutAll: self parent printString.\x0a\x09aStream nextPutAll: ')'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "printString", "parent"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "range",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@range"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "range\x0a\x09^ range",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "range:",
protocol: 'accessing',
fn: function (int){
var self=this;
self["@range"]=int;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["int"],
source: "range: int\x0a\x09range := int",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "readyToBePicked",
protocol: 'state delegation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._state())._readyToPick_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"readyToBePicked",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "readyToBePicked\x0a\x09self state readyToPick: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["readyToPick:", "state"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "removeHP:",
protocol: 'fighting',
fn: function (anInt){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3;
$2=self._hp();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hp"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__minus(anInt);
self._hp_($1);
$3=$recv(self._hp()).__lt((1));
if($core.assert($3)){
self._die();
self._cleanUI();
} else {
self._updateUI();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeHP:",{anInt:anInt},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInt"],
source: "removeHP: anInt\x0a     self hp: self hp - anInt.\x0a     self hp < 1 \x0a\x09\x09ifTrue: [ self die. self cleanUI ]\x0a\x09\x09ifFalse: [ self updateUI ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hp:", "-", "hp", "ifTrue:ifFalse:", "<", "die", "cleanUI", "updateUI"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "resolveAttack:inContext:bonusDices:bonusAttack:",
protocol: 'fighting',
fn: function (anotherMonster,gameContext,bonusDices,bonusAttack){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._state())._changeStateAfterAttacking_(self);
$recv(self._root())._removeSelection();
self._rollDicesCallBack_bonusDices_bonusAttack_((function(diceRes){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(anotherMonster)._removeHP_($recv(diceRes)._kills());
self._selectInContext_(gameContext);
return self._checkForNextTurn();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({diceRes:diceRes},$ctx1,1)});
//>>excludeEnd("ctx");
}),bonusDices,bonusAttack);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resolveAttack:inContext:bonusDices:bonusAttack:",{anotherMonster:anotherMonster,gameContext:gameContext,bonusDices:bonusDices,bonusAttack:bonusAttack},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anotherMonster", "gameContext", "bonusDices", "bonusAttack"],
source: "resolveAttack: anotherMonster inContext: gameContext bonusDices: bonusDices bonusAttack: bonusAttack\x0a\x0a\x09self state changeStateAfterAttacking: self.\x0a    self root removeSelection.\x0a\x0a\x09self rollDicesCallBack: [ :diceRes |\x0a\x09\x09anotherMonster removeHP: diceRes kills.\x0a        self selectInContext: gameContext.\x0a\x09\x09self checkForNextTurn ] bonusDices: bonusDices bonusAttack: bonusAttack",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["changeStateAfterAttacking:", "state", "removeSelection", "root", "rollDicesCallBack:bonusDices:bonusAttack:", "removeHP:", "kills", "selectInContext:", "checkForNextTurn"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "reverseDisplay:cood:",
protocol: 'rendering',
fn: function (monster,cood){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self._context();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["context"]=1;
//>>excludeEnd("ctx");
$2=$1;
$3=$recv(cood)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$recv($2)._translate_y_($3,(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["translate:y:"]=1;
//>>excludeEnd("ctx");
$4=$recv($1)._scale_y_((-1),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["scale:y:"]=1;
//>>excludeEnd("ctx");
$4;
return self._display_cood_(monster,(0).__at($recv(cood)._y()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._ensure_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=self._context();
$recv($5)._scale_y_((-1),(1));
$6=$recv($5)._translate_y_($recv($recv(cood)._x())._negated(),(0));
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reverseDisplay:cood:",{monster:monster,cood:cood},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["monster", "cood"],
source: "reverseDisplay: monster cood: cood\x0a\x09[self context\x0a\x09\x09\x09translate: cood x y: 0;\x0a\x09\x09\x09scale: -1 y: 1.\x0a\x09self display: monster cood: 0@(cood y) ]\x0a\x09ensure: [\x22faster than save and restore\x22\x0a\x09self context\x0a\x09\x09scale: -1 y: 1;\x0a\x09\x09translate: cood x negated y: 0]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ensure:", "translate:y:", "context", "x", "scale:y:", "display:cood:", "@", "y", "negated"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "rollDicesCallBack:bonusDices:bonusAttack:",
protocol: 'fighting',
fn: function (aBlock,bonusDices,bonusAttack){
var self=this;
var kill,dicesRolledEvent;
function $CWDicesRolledEvent(){return $globals.CWDicesRolledEvent||(typeof CWDicesRolledEvent=="undefined"?nil:CWDicesRolledEvent)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1,$5,$6,$4,$7,$8;
$3=self._dices();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dices"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__plus(bonusDices);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$1=(1)._to_($2);
kill=$recv($1)._inject_into_((0),(function(acc,index){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=(100)._atRandom();
$6=$recv(self._attack()).__plus(bonusAttack);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=2;
//>>excludeEnd("ctx");
$4=$recv($5).__lt($6);
if($core.assert($4)){
return $recv(acc).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=3;
//>>excludeEnd("ctx");
} else {
return acc;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({acc:acc,index:index},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$7=$recv($CWDicesRolledEvent())._new();
$recv($7)._kills_(kill);
$recv($7)._dices_($recv(self._dices()).__plus(bonusDices));
$recv($7)._callback_(aBlock);
$8=$recv($7)._yourself();
dicesRolledEvent=$8;
self._announce_(dicesRolledEvent);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rollDicesCallBack:bonusDices:bonusAttack:",{aBlock:aBlock,bonusDices:bonusDices,bonusAttack:bonusAttack,kill:kill,dicesRolledEvent:dicesRolledEvent},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "bonusDices", "bonusAttack"],
source: "rollDicesCallBack: aBlock bonusDices: bonusDices bonusAttack: bonusAttack\x0a\x09\x22roll the dices to attack an ennemy\x22\x0a\x09\x0a\x09| kill dicesRolledEvent |\x0a\x09\x0a\x09kill := (1 to: self dices + bonusDices) inject: 0 into: [ :acc :index | \x0a\x09\x09100 atRandom < (self attack + bonusAttack)\x0a\x09\x09\x09ifTrue: [ acc + 1 ] \x0a\x09\x09\x09ifFalse: [ acc ] ]. \x0a\x09dicesRolledEvent := CWDicesRolledEvent new\x0a\x09\x09kills: kill;\x0a\x09\x09dices: self dices + bonusDices;\x0a\x09\x09callback: aBlock;\x0a\x09\x09yourself.\x0a\x09self announce: dicesRolledEvent",
referencedClasses: ["CWDicesRolledEvent"],
//>>excludeEnd("ide");
messageSends: ["inject:into:", "to:", "+", "dices", "ifTrue:ifFalse:", "<", "atRandom", "attack", "kills:", "new", "dices:", "callback:", "yourself", "announce:"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "selectActionCells",
protocol: 'selection',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._addSelectorsTo_(self._selectableNeighbours());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectActionCells",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectActionCells\x0a\x09^ self addSelectorsTo: self selectableNeighbours",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addSelectorsTo:", "selectableNeighbours"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "selectAttackableCells",
protocol: 'selection',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._addSelectorsTo_(self._attackableNeighbours());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectAttackableCells",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectAttackableCells\x0a\x09^ self addSelectorsTo: self attackableNeighbours",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addSelectorsTo:", "attackableNeighbours"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "selectInContext:",
protocol: 'state delegation',
fn: function (gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._announceUpdate();
$1=$recv(self._state())._select_inContext_(self,gameContext);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectInContext:",{gameContext:gameContext},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["gameContext"],
source: "selectInContext: gameContext\x0a\x09self announceUpdate.\x0a\x09^ self state select: self inContext: gameContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["announceUpdate", "select:inContext:", "state"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "selectMovableCells",
protocol: 'selection',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._addSelectorsTo_(self._movableNeighbours());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectMovableCells",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectMovableCells\x0a\x09^ self addSelectorsTo: self movableNeighbours",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addSelectorsTo:", "movableNeighbours"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "selectableNeighbours",
protocol: 'selection',
fn: function (){
var self=this;
var moveAttack;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
moveAttack=self._monsterSelection();
$1=$recv(moveAttack)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=1;
//>>excludeEnd("ctx");
$recv($1)._addAll_($recv(moveAttack)._second());
$2=$recv(moveAttack)._first();
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectableNeighbours",{moveAttack:moveAttack},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectableNeighbours\x0a\x09| moveAttack |\x0a\x09moveAttack := self monsterSelection.\x0a\x09moveAttack first addAll: moveAttack second.\x0a\x09^ moveAttack first",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["monsterSelection", "addAll:", "first", "second"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "showActiveMonster",
protocol: 'state delegation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._state())._showActiveMonster_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showActiveMonster",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showActiveMonster\x0a\x09self state showActiveMonster: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["showActiveMonster:", "state"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "side",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@player"])._side();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"side",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "side\x0a\x09^ player side",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["side"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "special",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@special"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "special\x0a\x09^ special",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "special:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@special"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "special: aString\x0a\x09special := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "state",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@state"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "state\x0a\x09^ state",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "stats:",
protocol: 'initialize-release',
fn: function (jsonStats){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._move_($recv(jsonStats)._move());
self._range_($recv(jsonStats)._range());
self._attack_($recv(jsonStats)._attack());
self._dices_($recv(jsonStats)._dices());
self._special_($recv(jsonStats)._special());
self._hp_(self._defaultHp());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stats:",{jsonStats:jsonStats},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["jsonStats"],
source: "stats: jsonStats\x0a\x09self move: jsonStats move.\x0a\x09self range: jsonStats range.\x0a\x09self attack: jsonStats attack.\x0a\x09self dices: jsonStats dices.\x0a\x09self special: jsonStats special.\x0a\x09self hp: self defaultHp.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["move:", "move", "range:", "range", "attack:", "attack", "dices:", "dices", "special:", "special", "hp:", "defaultHp"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "support",
protocol: 'fighting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._parent())._neighbours())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._canBeAttackedBy_(self._side());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"support",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "support\x09\x0a\x09^ self parent neighbours select: [ :each | each canBeAttackedBy: self side ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select:", "neighbours", "parent", "canBeAttackedBy:", "side"]
}),
$globals.CWMonster);

$core.addMethod(
$core.method({
selector: "updateUI",
protocol: 'strategy delegation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._cleanUI();
$recv(self["@strategy"])._updateUI_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateUI",{},$globals.CWMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateUI\x0a\x09self cleanUI.\x0a\x09strategy updateUI: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["cleanUI", "updateUI:"]
}),
$globals.CWMonster);


$globals.CWMonster.klass.iVarNames = ['jsonStatCache'];
$core.addMethod(
$core.method({
selector: "emptyMonster",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._hp_((0));
$recv($2)._move_((0));
$recv($2)._range_((0));
$recv($2)._dices_((0));
$recv($2)._attack_((0));
$3=$recv($2)._special_("none");
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"emptyMonster",{},$globals.CWMonster.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "emptyMonster\x0a\x09\x22Answers a fake instance of a monster with empty stats.\x0a\x09Displayed by the menu when no monster is selected\x22\x0a\x09\x0a\x09^ self new\x0a\x09\x09hp: 0;\x0a\x09\x09move: 0;\x0a\x09\x09range: 0;\x0a\x09\x09dices: 0;\x0a\x09\x09attack: 0;\x0a\x09\x09special:'none'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hp:", "new", "move:", "range:", "dices:", "attack:", "special:"]
}),
$globals.CWMonster.klass);

$core.addMethod(
$core.method({
selector: "folderName",
protocol: 'accessing',
fn: function (){
var self=this;
return "monsters";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "folderName\x0a\x09^ 'monsters'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMonster.klass);

$core.addMethod(
$core.method({
selector: "keys",
protocol: '*Easnoth-MapModel',
fn: function (){
var self=this;
var col;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
col=$recv($Array())._new();
self._keysDo_((function(key){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(col)._add_(key);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=col;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keys",{col:col},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "keys\x0a\x09| col |\x0a    col := Array new.\x0a\x09self keysDo: [:key |\x0a    \x09col add: key ].\x0a       ^ col",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["new", "keysDo:", "add:"]
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "keysDo:",
protocol: '*Easnoth-MapModel',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

    	var o = self['@jsObject'];
    	for(var i in o) {
			aBlock(i);
		}
    ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keysDo:",{aBlock:aBlock},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "keysDo: aBlock\x0a\x09<\x0a    \x09var o = self['@jsObject'];\x0a    \x09for(var i in o) {\x0a\x09\x09\x09aBlock(i);\x0a\x09\x09}\x0a    >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

});
