"use strict";(self["webpackChunksoftball_dashboard"]=self["webpackChunksoftball_dashboard"]||[]).push([[869],{3869:function(t,s,e){e.r(s),e.d(s,{default:function(){return Z}});var a=e(6190),l=e(9582),i=e(4886),r=e(266),o=e(2118),n=e(6828),h=e(4324),d=e(1713),u=e(9449),g=function(){var t=this,s=t._self._c;return s(o.Z,[s(d.Z,[s(r.Z,{attrs:{cols:"12"}},[s("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Men")])])],1),s(d.Z,[s(r.Z,{attrs:{cols:"12",md:"3",lg:"2"}},[s(l.Z,[s(i.ZB,{staticStyle:{"text-align":"center"}},[s("div",[t._v("Record")]),s("div",{staticClass:"text-h4 text--primary pt-6"},[t._v(t._s(t.wins)+" - "+t._s(t.losses))])])],1)],1),s(r.Z,{attrs:{cols:"6",md:"3",lg:"2"}},[s(l.Z,[s(i.ZB,[s("div",[t._v("Home Runs")]),s(u.Z,{attrs:{dense:""}},[s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(t.insidehrs))]),s("td",[t._v("Inside the Park")])]),s("tr",[s("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(t.outsidehrs))]),s("td",[t._v("Over the Fence")])]),s("tr",[s("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(t.totalhrs))]),s("td",[t._v("Total Home Runs")])])])])],1)],1)],1),s(r.Z,{attrs:{cols:"6",md:"3",lg:"2"}},[s(l.Z,[s(i.ZB,[s("div",[t._v("Run Differential")]),s(u.Z,{attrs:{dense:""}},[s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(t.runsfor))]),s("td",[t._v("Runs For")])]),s("tr",[s("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(t.runsagainst))]),s("td",[t._v("Runs Against")])])])])],1)],1)],1)],1),s(d.Z,[s(r.Z,{attrs:{cols:"12",lg:"8"}},[s(n.Z,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.softballgames,"sort-by":["date","time"],"sort-desc":[!1,!1],"multi-sort":"","disable-pagination":"","hide-default-footer":"",loading:t.loadingTable,"loading-text":"Leading...Please wait"}})],1)],1),s(d.Z,[s(r.Z,[s(a.Z,{staticClass:"white--text",attrs:{color:"button_color",to:"/"}},[s(h.Z,{attrs:{dark:"",left:""}},[t._v("mdi-home")]),t._v("Home ")],1)],1)],1)],1)},c=[],_=e(6154),f={title(){return"Softball Dashboard - Fall 2023 Men's Schedule"},data(){return{headers:[{text:"Game Date",value:"date"},{text:"Opponent",value:"opponent"},{text:"Game Time",value:"time",align:"center"},{text:"Field",value:"field",align:"center"},{text:"Result",value:"results",align:"center"},{text:"Our Score",value:"our_score",align:"right"},{text:"Their Score",value:"their_score",align:"right"}],softballgames:[],wins:0,losses:0,runsfor:0,runsagainst:0,insidehrs:0,outsidehrs:0,totalhrs:0,loadingTable:!0}},mounted(){this.loadData()},methods:{async loadData(){await _.Z.get("https://gsx2json.com/api?api_key=AIzaSyBK4YHSSWCZ6obrmfvYDfUczrWmCMSubZ4&columns=false&id=1A5ktn5wikgC6yRF0uXWh0DdOIPDoScU_mStGsX2pPpM&sheet=Current&type=Men").then((t=>{this.softballgames=t.data.rows;for(let s=0;s<this.softballgames.length;s++)"W"==this.softballgames[s].results&&this.wins++,"L"==this.softballgames[s].results&&this.losses++,void 0!=this.softballgames[s].our_score&&(this.runsfor+=this.softballgames[s].our_score),void 0!=this.softballgames[s].their_score&&(this.runsagainst+=this.softballgames[s].their_score),void 0!=this.softballgames[s].inside_hrs&&(this.insidehrs+=this.softballgames[s].inside_hrs,this.totalhrs+=this.softballgames[s].inside_hrs),void 0!=this.softballgames[s].outside_hrs&&(this.outsidehrs+=this.softballgames[s].outside_hrs,this.totalhrs+=this.softballgames[s].outside_hrs),this.loadingTable=!1})).catch((t=>{console.error(t)}))}}},m=f,v=e(1001),b=(0,v.Z)(m,g,c,!1,null,null,null),Z=b.exports}}]);
//# sourceMappingURL=869.379f1b7a.js.map