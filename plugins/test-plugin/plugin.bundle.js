"use strict";var plugin=(()=>{var t=class{constructor(){this.fab=null;this.colors=["#FF5733","#33FF57","#3357FF","#F333FF"];this.currentColorIndex=0}init(){this.fab=document.createElement("button"),this.fab.style.cssText=`
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: ${this.colors[0]};
            border: none;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            cursor: pointer;
            z-index: 9999;
            transition: background-color 0.3s;
        `,this.fab.addEventListener("click",()=>{this.currentColorIndex=(this.currentColorIndex+1)%this.colors.length,this.fab&&(this.fab.style.backgroundColor=this.colors[this.currentColorIndex])}),document.body.appendChild(this.fab)}destroy(){this.fab&&(this.fab.remove(),this.fab=null)}};window.DesQTA.registerPlugin({id:"test-plugin",init:()=>{let i=new t;return i.init(),i}});})();
