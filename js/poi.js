var currentDirection,currentDeg,finished,currentContent;
var contentList=['index','about','works','links'];
var bgpicList=['Konachan.com - 232985 2girls anthropomorphism awa_yume bed black_hair blush brown_eyes brown_hair headband japanese_clothes long_hair purple_eyes ribbons thighhighs.jpg',
'kongou.jpg']
var linkPageMax=2,currentLinkPage;
function zhuan(direction,forward){
    //forward true/false = 往右转/往左转
    if(typeof forward=="undefined"){
        forward=(Math.random() < 0.5);
    }
    if(!finished){
        return
    }
    currentContent=contentList.indexOf(direction);
    //计算转动方位
    var targetdeg,targetdirection;
    switch(currentDirection){
        case 'front':
            targetdirection="right"
            targetdeg=currentDeg-90;
            if(forward){
                targetdirection="right"
                targetdeg=currentDeg-90;
            }else{
                targetdirection="left"
                targetdeg=currentDeg+90;
            }
            break;
        case 'right':
            if(forward){
                targetdirection="back"
                targetdeg=currentDeg-90;
            }else{
                targetdirection="front"
                targetdeg=currentDeg+90;
            }
            break;
        case 'back':
            if(forward){
                targetdirection="left"
                targetdeg=currentDeg-90;
            }else{
                targetdirection="right"
                targetdeg=currentDeg+90;
            }
            break;
        case 'left':
            if(forward){
                targetdirection="front"
                targetdeg=currentDeg-90;
            }else{
                targetdirection="back"
                targetdeg=currentDeg+90;
            }
            break;
    }
    var next=document.querySelector('#' + targetdirection);
    var from=document.querySelector('#real-content').content.querySelectorAll('#' + direction + '>*');
    next.innerHTML="";
    from.forEach(f=>{
    next.append(document.importNode(f, true));
    });
    document.querySelector('.zhuan').style.transform="translate(0,-191px) translateZ(-250px) rotateY(" + targetdeg + "deg)";
    finished=false;
    document.querySelector('#' + currentDirection).style.opacity=0;
    document.querySelector('#' + targetdirection).style.opacity=1;
    currentDirection=targetdirection;
    currentDeg=targetdeg;
    setTimeout(function() {
        finished=true;
    }, 750);
    if(linkpage=document.querySelector('#switch-link-page')){
    linkpage.addEventListener('click',function(evt){
        linkpage.style.animation="rotate 1.2s";
        if(currentLinkPage>=linkPageMax){
            
        }
        document.querySelector('#link-page-' + currentLinkPage)
    })
    }
}

document.addEventListener('DOMContentLoaded',function(){
    var next=document.querySelector('#front');
    var from=document.querySelector('#real-content').content.querySelectorAll('#index>*');
    next.innerHTML="";
    from.forEach(f=>{
        next.append(document.importNode(f, true));
    });
    currentDirection="front";
    currentDeg=0;
    currentContent=0;
    finished=true;
    
    
});


document.addEventListener('mousewheel',function(evt){
    if(!finished){
        return;
    }
    if(evt.deltaY>0){
        if(currentContent>=3){
            currentContent=0;
            zhuan(contentList[currentContent],true);
        }else{
            currentContent++;
            zhuan(contentList[currentContent],true);
        }
    }else{
        if(currentContent<=0){
            currentContent=3;
            zhuan(contentList[currentContent],false);
        }else{
            currentContent--;
            zhuan(contentList[currentContent],false);
        }
    }
})


function showNotify(title,content,style){
    var ne=new DOMParser().parseFromString('<div class="notify" style="' + style + '"><div class="title">' + title + '</div><div class="content">' + content + '</div></div>',"text/html").querySelector('.notify')
    document.querySelector('.notify-container').appendChild(ne);
    setTimeout(function(){ne.remove()},4950);
}


function pushDanmaku(content,style){
    var newdanmaku=new DOMParser().parseFromString('<div class="normal" style="' + style + '">' + content + '</div>',"text/html").querySelector('.normal')
    document.querySelector('.danmaku-container').appendChild(newdanmaku);
    setTimeout(function(){newdanmaku.remove()},4000);
}
