(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{1308:function(s,t,e){},"64a3":function(s,t,e){"use strict";e("1308")},9256:function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("q-page",{staticClass:"flex flex-center",staticStyle:{position:"fixed",top:"0px",width:"100%","z-index":"100"}},[a("img",{attrs:{alt:s.sysValues.PROJECT.toLowerCase(),src:e("6e23")("./"+s.sysValues.PROJECT.toLowerCase()+"/csysteminfo.png")}})]),a("q-page",{staticClass:"flex flex-center",staticStyle:{position:"absolute",top:"0px",width:"100%","z-index":"1000"}},[a("q-card",{staticClass:"activate-card"},[a("q-card-section",{staticClass:"bg-secondary text-white text-center"},[a("div",{staticClass:"text-h6"},[s._v(s._s(s.extendedProjectName))]),a("div",{staticClass:"text-subtitle2"},[s._v("Account Activation")])]),a("q-card-section",{staticClass:"bg-secondary text-white"},[a("q-form",{staticClass:"text-white bg-secondary",on:{submit:s.onSubmit,reset:s.onReset}},[a("q-input",{attrs:{filled:"",type:"password",label:"Password","lazy-rules":"",rules:[function(s){return null!==s&&""!==s||"Please enter your password"}],"error-message":s.passwordErrorMessage},model:{value:s.password,callback:function(t){s.password=t},expression:"password"}}),a("q-input",{attrs:{filled:"",type:"password",label:"Confirm Password","lazy-rules":"",rules:[function(s){return null!==s&&""!==s||"Please confirm your password"}],"error-message":s.passwordErrorMessage},model:{value:s.cpassword,callback:function(t){s.cpassword=t},expression:"cpassword"}}),a("div",{staticClass:"q-pa-md"},[a("q-btn",{attrs:{label:"Submit",type:"submit",color:"primary"}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Reset",type:"reset",color:"white",flat:""}})],1)],1)],1)],1)],1)],1)},o=[],r=(e("ddb0"),e("cf57"),e("07de"));const i=e("c2a1").default,n=e("1712").to,c=e("20e6");var d={name:"PageIndex",components:{authForms:r["a"]},data(){return{sysValues:c,extendedProjectName:"",password:"",cpassword:"",passwordErrorMessage:""}},async created(){i.setSettings({TBURL:c["TB_URL"]}),this.extendedProjectName=c["PROJECTEXTENDED"],i.setVue(this)},methods:{async onSubmit(){return i.setSettings({TBURL:c["TB_URL"]}),new Promise((async(s,t)=>{let e,a=window.location.hash.split("?")[1].split("&");if(a.map((s=>{s=s.split("="),"activateToken"===s[0]&&(e=s[1])})),console.log(e),this.password!==this.cpassword)return this.cpassword="",this.passwordErrorMessage="Passwords don't match",this.$q.notify({type:"negative",message:"Passwords don't match"}),s(!1);i.showLoading({message:"Activating and Setting Password"});let[o,r]=await n(i.activateAndCreatePassword({activateToken:e,password:this.password},!0));if(i.hideLoading(),o){o=o.msg||o.message||o.error||o;try{o=JSON.parse(o)}catch(c){}if("object"===typeof o){let s=Object.keys(o);o=o[s[0]]}this.$q.notify({type:"negative",message:o}),s(!1)}else this.$q.notify({type:"positive",message:"Account has been activated. You can now log in."}),window.location.assign("/")}))},onReset(){this.cpassword="",this.password=""}}},l=d,p=(e("64a3"),e("2877")),w=e("9989"),u=e("f09f"),m=e("a370"),f=e("0378"),g=e("27f9"),h=e("9c40"),y=e("eebe"),b=e.n(y),x=Object(p["a"])(l,a,o,!1,null,"5bd0fe39",null);t["default"]=x.exports;b()(x,"components",{QPage:w["a"],QCard:u["a"],QCardSection:m["a"],QForm:f["a"],QInput:g["a"],QBtn:h["a"]})}}]);