import{Ba as U,Ca as f,Da as p,Fa as ie,J as te,Ka as re,L as A,M as w,O as R,Q as g,S as E,Sa as H,X as j,Y as ne,Z as T,_a as I,a as o,b as l,ca as F,cb as se,e as Y,ea as G,eb as oe,fa as h,fb as c,gb as m,h as K,ib as L,k as J,na as S,p as Q,v as ee,va as B,wa as a}from"./chunk-3HNIGLXE.js";function Ee(n){n||(j(Ee),n=E(F));let e=new Y(t=>n.onDestroy(t.next.bind(t)));return t=>t.pipe(te(e))}function Fe(n,e){let t=!e?.manualCleanup;t&&!e?.injector&&j(Fe);let i=t?e?.injector?.get(F)??E(F):null,r=Se(e?.equal),s;e?.requireSync?s=h({kind:0},{equal:r}):s=h({kind:1,value:e?.initialValue},{equal:r});let u=n.subscribe({next:d=>s.set({kind:1,value:d}),error:d=>{s.set({kind:2,error:d})}});if(e?.requireSync&&s().kind===0)throw new A(601,!1);return i?.onDestroy(u.unsubscribe.bind(u)),m(()=>{let d=s();switch(d.kind){case 1:return d.value;case 2:throw d.error;case 0:throw new A(601,!1)}},{equal:e?.equal})}function Se(n=Object.is){return(e,t)=>e.kind===1&&t.kind===1&&n(e.value,t.value)}var ge=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||n)(a(B),a(G))};static \u0275dir=f({type:n})}return n})(),pe=(()=>{class n extends ge{static \u0275fac=(()=>{let t;return function(r){return(t||(t=T(n)))(r||n)}})();static \u0275dir=f({type:n,features:[p]})}return n})(),Z=new g("");var Ie={provide:Z,useExisting:w(()=>me),multi:!0};function Oe(){let n=L()?L().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var Ne=new g(""),me=(()=>{class n extends ge{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Oe())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||n)(a(B),a(G),a(Ne,8))};static \u0275dir=f({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&H("input",function(u){return r._handleInput(u.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(u){return r._compositionEnd(u.target.value)})},standalone:!1,features:[I([Ie]),p]})}return n})();var xe=new g(""),Pe=new g("");function _e(n){return n!=null}function ve(n){return ie(n)?J(n):n}function ye(n){let e={};return n.forEach(t=>{e=t!=null?o(o({},e),t):e}),Object.keys(e).length===0?null:e}function Ce(n,e){return e.map(t=>t(n))}function ke(n){return!n.validate}function Ve(n){return n.map(e=>ke(e)?e:t=>e.validate(t))}function Re(n){if(!n)return null;let e=n.filter(_e);return e.length==0?null:function(t){return ye(Ce(t,e))}}function De(n){return n!=null?Re(Ve(n)):null}function je(n){if(!n)return null;let e=n.filter(_e);return e.length==0?null:function(t){let i=Ce(t,e).map(ve);return ee(i).pipe(Q(ye))}}function be(n){return n!=null?je(Ve(n)):null}function ae(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function Te(n){return n._rawValidators}function Ge(n){return n._rawAsyncValidators}function $(n){return n?Array.isArray(n)?n:[n]:[]}function N(n,e){return Array.isArray(n)?n.includes(e):n===e}function le(n,e){let t=$(e);return $(n).forEach(r=>{N(t,r)||t.push(r)}),t}function ue(n,e){return $(e).filter(t=>!N(n,t))}var x=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=De(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=be(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},W=class extends x{name;get formDirective(){return null}get path(){return null}},M=class extends x{_parent=null;name=null;valueAccessor=null},q=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Be={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},jt=l(o({},Be),{"[class.ng-submitted]":"isSubmitted"}),Tt=(()=>{class n extends q{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(a(M,2))};static \u0275dir=f({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&re("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[p]})}return n})();var C="VALID",O="INVALID",_="PENDING",V="DISABLED",y=class{},P=class extends y{value;source;constructor(e,t){super(),this.value=e,this.source=t}},D=class extends y{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},b=class extends y{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},v=class extends y{status;source;constructor(e,t){super(),this.status=e,this.source=t}};function Ue(n){return(k(n)?n.validators:n)||null}function He(n){return Array.isArray(n)?De(n):n||null}function Le(n,e){return(k(e)?e.asyncValidators:n)||null}function $e(n){return Array.isArray(n)?be(n):n||null}function k(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}var z=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return c(this.statusReactive)}set status(e){c(()=>this.statusReactive.set(e))}_status=m(()=>this.statusReactive());statusReactive=h(void 0);get valid(){return this.status===C}get invalid(){return this.status===O}get pending(){return this.status==_}get disabled(){return this.status===V}get enabled(){return this.status!==V}errors;get pristine(){return c(this.pristineReactive)}set pristine(e){c(()=>this.pristineReactive.set(e))}_pristine=m(()=>this.pristineReactive());pristineReactive=h(!0);get dirty(){return!this.pristine}get touched(){return c(this.touchedReactive)}set touched(e){c(()=>this.touchedReactive.set(e))}_touched=m(()=>this.touchedReactive());touchedReactive=h(!1);get untouched(){return!this.touched}_events=new K;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(le(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(le(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ue(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ue(e,this._rawAsyncValidators))}hasValidator(e){return N(this._rawValidators,e)}hasAsyncValidator(e){return N(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(l(o({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new b(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new b(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(l(o({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new D(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new D(!0,i))}markAsPending(e={}){this.status=_;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new v(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(l(o({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=V,this.errors=null,this._forEachChild(r=>{r.disable(l(o({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new P(this.value,i)),this._events.next(new v(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(l(o({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=C,this._forEachChild(i=>{i.enable(l(o({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(l(o({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===C||this.status===_)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new P(this.value,t)),this._events.next(new v(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(l(o({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?V:C}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=_,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:e!==!1};let i=ve(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new v(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new S,this.statusChanges=new S}_calculateStatus(){return this._allControlsDisabled()?V:this.errors?O:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(_)?_:this._anyControlsHaveStatus(O)?O:C}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new D(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new b(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){k(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=He(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=$e(this._rawAsyncValidators)}};var Me=new g("",{providedIn:"root",factory:()=>X}),X="always";function We(n,e){return[...e.path,n]}function qe(n,e,t=X){Ze(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),Xe(n,e),Ke(n,e),Ye(n,e),ze(n,e)}function de(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function ze(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function Ze(n,e){let t=Te(n);e.validator!==null?n.setValidators(ae(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=Ge(n);e.asyncValidator!==null?n.setAsyncValidators(ae(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();de(e._rawValidators,r),de(e._rawAsyncValidators,r)}function Xe(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Ae(n,e)})}function Ye(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Ae(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function Ae(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Ke(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function Je(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function Qe(n){return Object.getPrototypeOf(n.constructor)===pe}function et(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(s=>{s.constructor===me?t=s:Qe(s)?i=s:r=s}),r||i||t||null}function ce(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function he(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var tt=class extends z{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,i){super(Ue(t),Le(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),k(t)&&(t.nonNullable||t.initialValueIsDefault)&&(he(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){ce(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){ce(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){he(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var nt={provide:M,useExisting:w(()=>it)},fe=Promise.resolve(),it=(()=>{class n extends M{_changeDetectorRef;callSetDisabledState;control=new tt;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new S;constructor(t,i,r,s,u,d){super(),this._changeDetectorRef=u,this.callSetDisabledState=d,this._parent=t,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=et(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Je(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){qe(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){fe.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,r=i!==0&&oe(i);fe.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?We(t,this._parent):[t]}static \u0275fac=function(i){return new(i||n)(a(W,9),a(xe,10),a(Pe,10),a(Z,10),a(se,8),a(Me,8))};static \u0275dir=f({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[I([nt]),p,ne]})}return n})();var rt={provide:Z,useExisting:w(()=>st),multi:!0},st=(()=>{class n extends pe{writeValue(t){let i=t??"";this.setProperty("value",i)}registerOnChange(t){this.onChange=i=>{t(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=T(n)))(r||n)}})();static \u0275dir=f({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,r){i&1&&H("input",function(u){return r.onChange(u.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[I([rt]),p]})}return n})();var ot=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=U({type:n});static \u0275inj=R({})}return n})();var Bt=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:Me,useValue:t.callSetDisabledState??X}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=U({type:n});static \u0275inj=R({imports:[ot]})}return n})();export{Ee as a,Fe as b,me as c,Tt as d,it as e,st as f,Bt as g};
