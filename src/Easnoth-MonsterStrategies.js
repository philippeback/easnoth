define("amber-easnoth/Easnoth-MonsterStrategies", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Easnoth-MonsterStrategies');
$core.packages["Easnoth-MonsterStrategies"].transport = {"type":"amd","amdNamespace":"amber-easnoth"};

$core.addClass('CWStrategy', $globals.Object, [], 'Easnoth-MonsterStrategies');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWStrategy.comment="Just here for the sngleton pattern :)";
//>>excludeEnd("ide");

$globals.CWStrategy.klass.iVarNames = ['default'];
$core.addMethod(
$core.method({
selector: "default",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@default"];
if(($receiver = $2) == null || $receiver.isNil){
self["@default"]=self._new();
$1=self["@default"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"default",{},$globals.CWStrategy.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "default\x0a\x09^ default ifNil: [ default := self new ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.CWStrategy.klass);


$core.addClass('CWMonsterStrategy', $globals.CWStrategy, [], 'Easnoth-MonsterStrategies');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWMonsterStrategy.comment="Implements different strategies if the monster is a heros or a unit";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "accept:for:",
protocol: 'monster strategy API',
fn: function (aVisitor,aMonster){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:for:",{aVisitor:aVisitor,aMonster:aMonster},$globals.CWMonsterStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor", "aMonster"],
source: "accept: aVisitor for: aMonster\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWMonsterStrategy);

$core.addMethod(
$core.method({
selector: "defaultHP",
protocol: 'monster strategy API',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultHP",{},$globals.CWMonsterStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultHP\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWMonsterStrategy);

$core.addMethod(
$core.method({
selector: "isHeros",
protocol: 'monster strategy API',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isHeros",{},$globals.CWMonsterStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isHeros\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWMonsterStrategy);

$core.addMethod(
$core.method({
selector: "key",
protocol: 'monster strategy API',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"key",{},$globals.CWMonsterStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWMonsterStrategy);

$core.addMethod(
$core.method({
selector: "updateUI:",
protocol: 'monster strategy API',
fn: function (aMonster){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateUI:",{aMonster:aMonster},$globals.CWMonsterStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "updateUI: aMonster\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWMonsterStrategy);



$core.addClass('CWHerosStrategy', $globals.CWMonsterStrategy, [], 'Easnoth-MonsterStrategies');
$core.addMethod(
$core.method({
selector: "accept:for:",
protocol: 'monster strategy API',
fn: function (aVisitor,aMonster){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._visitHeros_(aMonster);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:for:",{aVisitor:aVisitor,aMonster:aMonster},$globals.CWHerosStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor", "aMonster"],
source: "accept: aVisitor for: aMonster\x0a\x09^ aVisitor visitHeros: aMonster",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitHeros:"]
}),
$globals.CWHerosStrategy);

$core.addMethod(
$core.method({
selector: "defaultHP",
protocol: 'monster strategy API',
fn: function (){
var self=this;
return (2);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultHP\x0a\x09^ 2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWHerosStrategy);

$core.addMethod(
$core.method({
selector: "isHeros",
protocol: 'monster strategy API',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isHeros\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWHerosStrategy);

$core.addMethod(
$core.method({
selector: "key",
protocol: 'monster strategy API',
fn: function (){
var self=this;
return "-heros";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ '-heros'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWHerosStrategy);

$core.addMethod(
$core.method({
selector: "updateUI:",
protocol: 'monster strategy API',
fn: function (heros){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($recv(heros)._side())._negative();
if($core.assert($1)){
$2=(87).__at((28));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$recv(heros)._reverseDisplay_cood_(heros,$2);
} else {
$recv(heros)._display_cood_(heros,(15).__at((28)));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateUI:",{heros:heros},$globals.CWHerosStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["heros"],
source: "updateUI: heros\x0a\x09(heros side negative) \x0a\x09\x09ifTrue: [ heros reverseDisplay: heros cood: 87@28 ] \x0a\x09\x09ifFalse: [ heros display: heros cood: 15@28 ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "negative", "side", "reverseDisplay:cood:", "@", "display:cood:"]
}),
$globals.CWHerosStrategy);



$core.addClass('CWUnitStrategy', $globals.CWMonsterStrategy, [], 'Easnoth-MonsterStrategies');
$core.addMethod(
$core.method({
selector: "accept:for:",
protocol: 'monster strategy API',
fn: function (aVisitor,aMonster){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aVisitor)._visitUnit_(aMonster);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept:for:",{aVisitor:aVisitor,aMonster:aMonster},$globals.CWUnitStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor", "aMonster"],
source: "accept: aVisitor for: aMonster\x0a\x09^ aVisitor visitUnit: aMonster",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitUnit:"]
}),
$globals.CWUnitStrategy);

$core.addMethod(
$core.method({
selector: "defaultHP",
protocol: 'monster strategy API',
fn: function (){
var self=this;
return (4);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultHP\x0a\x09^ 4",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWUnitStrategy);

$core.addMethod(
$core.method({
selector: "isHeros",
protocol: 'monster strategy API',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isHeros\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWUnitStrategy);

$core.addMethod(
$core.method({
selector: "key",
protocol: 'monster strategy API',
fn: function (){
var self=this;
return "";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ ''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWUnitStrategy);

$core.addMethod(
$core.method({
selector: "updateUI:",
protocol: 'monster strategy API',
fn: function (aUnit){
var self=this;
var xArray,yArray;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$4,$3,$5,$2,$7,$6;
xArray=[(9), (37), (-11), (17)];
yArray=[(15), (23), (26), (33)];
$recv((1)._to_($recv(aUnit)._hp()))._do_((function(i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($recv(aUnit)._side())._negative();
if($core.assert($1)){
$4=$recv(xArray)._at_(i);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$3=(72).__plus($4);
$5=$recv(yArray)._at_(i);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__at($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["@"]=1;
//>>excludeEnd("ctx");
return $recv(aUnit)._reverseDisplay_cood_(aUnit,$2);
} else {
$7=$recv(xArray)._at_(i);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
$6=$recv($7).__at($recv(yArray)._at_(i));
return $recv(aUnit)._display_cood_(aUnit,$6);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateUI:",{aUnit:aUnit,xArray:xArray,yArray:yArray},$globals.CWUnitStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aUnit"],
source: "updateUI: aUnit\x0a\x09| xArray yArray |\x0a\x09\x0a\x09xArray := #(9 37 -11 17).\x0a\x09yArray := #(15 23 26 33).\x0a\x0a\x09(1 to: aUnit hp) do: [ :i |\x0a\x09\x09(aUnit side negative) \x0a\x09\x09\x09ifTrue: [ aUnit reverseDisplay: aUnit cood: 72 + (xArray at: i)@(yArray at: i) ] \x0a\x09\x09\x09ifFalse: [ aUnit display: aUnit cood: (xArray at: i)@(yArray at: i) ]\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "to:", "hp", "ifTrue:ifFalse:", "negative", "side", "reverseDisplay:cood:", "@", "+", "at:", "display:cood:"]
}),
$globals.CWUnitStrategy);



$core.addClass('CWMonsterTypeStrategy', $globals.CWStrategy, [], 'Easnoth-MonsterStrategies');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWMonsterTypeStrategy.comment="Implements different strategies if the heros is archer, troop or cavalry";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "isRanged",
protocol: 'type strategy API',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isRanged\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMonsterTypeStrategy);

$core.addMethod(
$core.method({
selector: "key",
protocol: 'type strategy API',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"key",{},$globals.CWMonsterTypeStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWMonsterTypeStrategy);

$core.addMethod(
$core.method({
selector: "monster:attackNeighbour:inContext:",
protocol: 'type strategy API',
fn: function (aMonster,anotherMonster,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"monster:attackNeighbour:inContext:",{aMonster:aMonster,anotherMonster:anotherMonster,gameContext:gameContext},$globals.CWMonsterTypeStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster", "anotherMonster", "gameContext"],
source: "monster: aMonster attackNeighbour: anotherMonster inContext: gameContext\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWMonsterTypeStrategy);

$core.addMethod(
$core.method({
selector: "monster:isAttackedByCavalry:inContext:",
protocol: 'type strategy API',
fn: function (targetMonster,aMonster,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aMonster)._attack_inContext_bonus_(targetMonster,gameContext,$recv(self._bonusVSCavalry())._negated());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByCavalry:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},$globals.CWMonsterTypeStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["targetMonster", "aMonster", "gameContext"],
source: "monster: targetMonster isAttackedByCavalry: aMonster inContext: gameContext\x0a\x09^ aMonster attack: targetMonster inContext: gameContext bonus: self bonusVSCavalry negated",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["attack:inContext:bonus:", "negated", "bonusVSCavalry"]
}),
$globals.CWMonsterTypeStrategy);

$core.addMethod(
$core.method({
selector: "monster:isAttackedByRange:inContext:",
protocol: 'type strategy API',
fn: function (targetMonster,aMonster,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aMonster)._attack_inContext_bonus_(targetMonster,gameContext,$recv(self._bonusVSRange())._negated());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByRange:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},$globals.CWMonsterTypeStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["targetMonster", "aMonster", "gameContext"],
source: "monster: targetMonster isAttackedByRange: aMonster inContext: gameContext\x0a\x09^ aMonster attack: targetMonster inContext: gameContext bonus: self bonusVSRange negated",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["attack:inContext:bonus:", "negated", "bonusVSRange"]
}),
$globals.CWMonsterTypeStrategy);

$core.addMethod(
$core.method({
selector: "monster:isAttackedByTroop:inContext:",
protocol: 'type strategy API',
fn: function (targetMonster,aMonster,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aMonster)._attack_inContext_bonus_(targetMonster,gameContext,$recv(self._bonusVSTroop())._negated());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByTroop:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},$globals.CWMonsterTypeStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["targetMonster", "aMonster", "gameContext"],
source: "monster: targetMonster isAttackedByTroop: aMonster inContext: gameContext\x0a\x09^ aMonster attack: targetMonster inContext: gameContext bonus: self bonusVSTroop negated",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["attack:inContext:bonus:", "negated", "bonusVSTroop"]
}),
$globals.CWMonsterTypeStrategy);



$core.addClass('CWCavalryStrategy', $globals.CWMonsterTypeStrategy, [], 'Easnoth-MonsterStrategies');
$core.addMethod(
$core.method({
selector: "bonusVS:",
protocol: 'type strategy API',
fn: function (target){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(target)._bonusVSCavalry())._negated();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bonusVS:",{target:target},$globals.CWCavalryStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["target"],
source: "bonusVS: target\x0a\x09^ target bonusVSCavalry negated",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["negated", "bonusVSCavalry"]
}),
$globals.CWCavalryStrategy);

$core.addMethod(
$core.method({
selector: "bonusVSCavalry",
protocol: 'type strategy API',
fn: function (){
var self=this;
return (0);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bonusVSCavalry\x0a\x09^ 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWCavalryStrategy);

$core.addMethod(
$core.method({
selector: "bonusVSRange",
protocol: 'type strategy API',
fn: function (){
var self=this;
return (1);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bonusVSRange\x0a\x09^ 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWCavalryStrategy);

$core.addMethod(
$core.method({
selector: "bonusVSTroop",
protocol: 'type strategy API',
fn: function (){
var self=this;
return (-1);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bonusVSTroop\x0a\x09^ -1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWCavalryStrategy);

$core.addMethod(
$core.method({
selector: "key",
protocol: 'type strategy API',
fn: function (){
var self=this;
return "cavalry";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'cavalry'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWCavalryStrategy);

$core.addMethod(
$core.method({
selector: "monster:attackNeighbour:inContext:",
protocol: 'type strategy API',
fn: function (aCavalry,anotherMonster,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(anotherMonster)._isAttackedByCavalry_inContext_(aCavalry,gameContext);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"monster:attackNeighbour:inContext:",{aCavalry:aCavalry,anotherMonster:anotherMonster,gameContext:gameContext},$globals.CWCavalryStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCavalry", "anotherMonster", "gameContext"],
source: "monster: aCavalry attackNeighbour: anotherMonster inContext: gameContext\x0a\x09^ anotherMonster isAttackedByCavalry: aCavalry inContext: gameContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isAttackedByCavalry:inContext:"]
}),
$globals.CWCavalryStrategy);



$core.addClass('CWRangeStrategy', $globals.CWMonsterTypeStrategy, [], 'Easnoth-MonsterStrategies');
$core.addMethod(
$core.method({
selector: "bonusVS:",
protocol: 'type strategy API',
fn: function (target){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(target)._bonusVSRange())._negated();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bonusVS:",{target:target},$globals.CWRangeStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["target"],
source: "bonusVS: target\x0a\x09^ target bonusVSRange negated",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["negated", "bonusVSRange"]
}),
$globals.CWRangeStrategy);

$core.addMethod(
$core.method({
selector: "bonusVSCavalry",
protocol: 'type strategy API',
fn: function (){
var self=this;
return (-1);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bonusVSCavalry\x0a\x09^ -1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWRangeStrategy);

$core.addMethod(
$core.method({
selector: "bonusVSRange",
protocol: 'type strategy API',
fn: function (){
var self=this;
return (0);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bonusVSRange\x0a\x09^ 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWRangeStrategy);

$core.addMethod(
$core.method({
selector: "bonusVSTroop",
protocol: 'type strategy API',
fn: function (){
var self=this;
return (1);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bonusVSTroop\x0a\x09^ 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWRangeStrategy);

$core.addMethod(
$core.method({
selector: "isRanged",
protocol: 'type strategy API',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isRanged\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWRangeStrategy);

$core.addMethod(
$core.method({
selector: "key",
protocol: 'type strategy API',
fn: function (){
var self=this;
return "range";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'range'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWRangeStrategy);

$core.addMethod(
$core.method({
selector: "monster:attackNeighbour:inContext:",
protocol: 'type strategy API',
fn: function (aRange,anotherMonster,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(anotherMonster)._isAttackedByRange_inContext_(aRange,gameContext);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"monster:attackNeighbour:inContext:",{aRange:aRange,anotherMonster:anotherMonster,gameContext:gameContext},$globals.CWRangeStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRange", "anotherMonster", "gameContext"],
source: "monster: aRange attackNeighbour: anotherMonster inContext: gameContext\x0a\x09^ anotherMonster isAttackedByRange: aRange inContext: gameContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isAttackedByRange:inContext:"]
}),
$globals.CWRangeStrategy);



$core.addClass('CWTroopStrategy', $globals.CWMonsterTypeStrategy, [], 'Easnoth-MonsterStrategies');
$core.addMethod(
$core.method({
selector: "bonusVS:",
protocol: 'type strategy API',
fn: function (target){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(target)._bonusVSTroop())._negated();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bonusVS:",{target:target},$globals.CWTroopStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["target"],
source: "bonusVS: target\x0a\x09^ target bonusVSTroop negated",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["negated", "bonusVSTroop"]
}),
$globals.CWTroopStrategy);

$core.addMethod(
$core.method({
selector: "bonusVSCavalry",
protocol: 'type strategy API',
fn: function (){
var self=this;
return (1);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bonusVSCavalry\x0a\x09^ 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWTroopStrategy);

$core.addMethod(
$core.method({
selector: "bonusVSRange",
protocol: 'type strategy API',
fn: function (){
var self=this;
return (-1);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bonusVSRange\x0a\x09^ -1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWTroopStrategy);

$core.addMethod(
$core.method({
selector: "bonusVSTroop",
protocol: 'type strategy API',
fn: function (){
var self=this;
return (0);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bonusVSTroop\x0a\x09^ 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWTroopStrategy);

$core.addMethod(
$core.method({
selector: "key",
protocol: 'type strategy API',
fn: function (){
var self=this;
return "troop";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ 'troop'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWTroopStrategy);

$core.addMethod(
$core.method({
selector: "monster:attackNeighbour:inContext:",
protocol: 'type strategy API',
fn: function (aTroop,anotherMonster,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(anotherMonster)._isAttackedByTroop_inContext_(aTroop,gameContext);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"monster:attackNeighbour:inContext:",{aTroop:aTroop,anotherMonster:anotherMonster,gameContext:gameContext},$globals.CWTroopStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTroop", "anotherMonster", "gameContext"],
source: "monster: aTroop attackNeighbour: anotherMonster inContext: gameContext\x0a\x09^ anotherMonster isAttackedByTroop: aTroop inContext: gameContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isAttackedByTroop:inContext:"]
}),
$globals.CWTroopStrategy);


});
