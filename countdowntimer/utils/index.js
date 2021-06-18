

const strLink = `{{ 'timerDown.css' | asset_url | stylesheet_tag }}
{{ 'timerDown.js' | asset_url | script_tag }}`

const strDom = `<div id="flipdown" class="flipdown"></div>`
const strDom2 = `<div id="flipdown2" class="flipdown"></div>`

const setScript = (opt,adr,show1,show2)=>{
    return `<script id="countdown">
    document.addEventListener('DOMContentLoaded', () => {
      
      var timeStart = (new Date("${opt.baseTime[0]}").getTime() / 1000) ;
      var timeEnd = (new Date("${opt.baseTime[1]}"
      ).getTime() / 1000) ;
      var opt = {headings:"${opt.headings}",beforetime: "${opt.beforTimer}",aftertime: "${opt.afterTimer}",buttonValue: "${opt.buttonValue}",buttonActive:"${opt.butionActive}",iconActive: "${opt.iconActive}"}
      var flipdown = new FlipDown(timeEnd, '${adr}', opt)
      var t = setInterval(function () {
        var start = new Date().getTime() / 1000
        if ((timeStart - start) < 1) { 
            flipdown.start()
        }
      }, 1000)
      flipdown.change("${show1}","${show2}","${opt.timerBarBackground}","${opt.timerBarFont}","${opt.buttonBackground}","${opt.buttonFont}","${opt.timeBackground}","${opt.timeFont}","${opt.iconActive}") 
      var flipdom = document.getElementById('${adr}')
      
      flipdom.addEventListener('click', function(){
        if("${opt.butionActive}" == "b2"){
          window.location.href="${opt.actionUrl}"
        }})
        
      flipdown.ifEnded(() => {flipdom.style.display="none";clearTimeout(t)});});
      setTimeout(function(){
        var flipdom = document.getElementById('${adr}')
        var buttonDom = document.getElementsByClassName('testButton')[0]
        buttonDom.addEventListener('click', function(){if("b1" == "b1"){ window.location.href="http://www.baidu.com"}})
        if("${opt.iconActive}"){var IconDom = document.getElementsByClassName('m-act-del')[0];IconDom.addEventListener('click', function(e){e.stopPropagation();flipdom.style.display="none"})}
      }, 4000 )
    </script>`
}


String.prototype.splice = function(start, newStr) {
    return this.slice(0, start) + newStr + this.slice(start);
  };

 const stringSplice=(type,str,config)=>{
    if(type == 'link'){
        
        var fistCheck = ''
        var secondCheck = ''
        var threeCheck = ''
        var tip1 = str.indexOf(`timerDown.css`);
        if(tip1 !== -1){
          var rest = str.slice(tip1-5,tip1+93);
          fistCheck = str.split(rest).join('')
          
        }
        var tip2 = fistCheck.indexOf(`id="flipdown"`);
        if(tip2 !== -1){
          console.log('111111')
          var rest1 = fistCheck.slice(tip2-20,tip2+36);
          secondCheck = fistCheck.split(rest1).join('')
          console.log('secondCheck',secondCheck)
        }
        var tip3 = secondCheck.indexOf(`id="flipdown2"`);
        if(tip3 !== -1){
          var rest2 = secondCheck.slice(tip3-20,tip3+36);
          threeCheck = secondCheck.split(rest2).join('')
        }
        var strBase = threeCheck.length>0 ? threeCheck:str
        console.log('引用',strBase)
        console.log('引用2',threeCheck)
        var index = strBase.search('</title>'); 
        var addStr = strBase.splice(index+8, `\n${strLink}\n`);
        // if(opt.timerAdr == "t"){
          var index2 = addStr.indexOf('body');
          var end = addStr.indexOf('>', index2);
          addStr = addStr.splice(end+1, `\n${strDom}\n`);
        //   return addStr
        // }else{
          var index3 = addStr.indexOf('</body>');
          addStr = addStr.splice(index3-1, `\n${strDom2}\n`);
          console.log('引用3',addStr)
          return addStr
          
        // }
        // console.log(rest1)
        // console.log(secondCheck)

    }
    if(type == 'script'){
      if(config.timerAdr == 't'){
        var index = str.search('</head>');
        if(config.pageAdr == 'ONLY') {index=index+1}
        return str.splice(index, setScript(config,"flipdown","flex","none",));
      }else{
        var index = str.search('</head>'); 
        if(config.pageAdr == 'ONLY') {index=index+1}
        return str.splice(index, setScript(config,"flipdown2","none","flex",));
      }
        
    }
}

export default stringSplice