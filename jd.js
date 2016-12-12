/**
 * Created by Administrator on 2016/6/24.
 */
window.onload= function () {
    var oTnset=document.getElementsByClassName('tn-sent')[0];
    var oTni=document.getElementsByClassName('tn-i');                   //旋转小箭头
    var oTnshide=document.getElementsByClassName('tn-s-hide')[0];
    var Ast=document.getElementsByClassName('s-two');
    var oTns=document.getElementsByClassName('tn-s')[0];
    var oMyjd=document.getElementsByClassName('my-jd')[0];              //我的京东
    var oMyj=document.getElementsByClassName('my-j')[0];                //我的京东下拉div
    var oPhonejd=document.getElementsByClassName('phone-jd')[0];        //手机京东
    var oPhonej=document.getElementsByClassName('phone-j')[0];          //手机京东下拉div
    var oAttjd=document.getElementsByClassName('att-jd')[0];            //关注京东
    var oAttj=document.getElementsByClassName('att-j')[0];              //关注京东下拉div
    var oSerjd=document.getElementsByClassName('ser-jd')[0];            //客户服务
    var oSerj=document.getElementsByClassName('ser-j')[0];              //客户服务下拉div
    var oNavjd=document.getElementsByClassName('nav-jd')[0];            //网站导航
    var oNavj=document.getElementsByClassName('nav-j')[0];              //网站导航下拉div
    var oShoppingcart=document.getElementsByClassName('shopping-cart')[0];        //我的购物车
    var oShoppingcar=document.getElementsByClassName('shopping-car')[0];          //我的购物车下拉div
    var oScart=document.getElementsByClassName('s-cart')[0];

/*顶部 送至地区下拉div 开始*/
    for ( var i=0; i<36; i++){
        Ast[i].onclick=function(){
            oTns.innerHTML=(this.innerHTML);
            this.style.backgroundColor='#C71622';
            this.style.className='s-three';
            oTnshide.style.display='none';
        }
        Ast[i].onmouseover=function(){
            this.style.backgroundColor='#F3F3F3';
        }
        Ast[i].onmouseout=function(){
            this.style.backgroundColor='#FFFFFF';
        }
    }

    oTnset.onmouseover=function (){
        this.style.backgroundColor='#FFFFFF';
        this.style.borderColor='#DCDCDC';
        oTni[0].style.transform='rotate(180deg)';
        oTnshide.style.display='block';
    }
    oTnset.onmouseout=function (){
        this.style.backgroundColor='#F0F0F0';
        this.style.borderColor='#F0F0F0';
        oTni[0].style.transform='rotate(0)';
        oTnshide.style.display='none';
    }
/*顶部 送至地区下拉div 结束*/

/*我的京东 下拉div 开始*/
    oMyjd.onmouseover=function(){
        oMyj.style.display='block';
        this.style.backgroundColor='#FFFFFF';
        this.style.borderColor='#DCDCDC';
        oTni[1].style.transform='rotate(180deg)';
    }
    oMyjd.onmouseout=function(){
        oMyj.style.display='none';
        this.style.backgroundColor='#F0F0F0';
        this.style.borderColor='#F0F0F0';
        oTni[1].style.transform='rotate(0)';
    }
    oMyj.onmouseover=function(){
        this.style.display='block';
        oMyjd.style.backgroundColor='#FFFFFF';
        oMyjd.style.borderColor='#DCDCDC';
        oTni[1].style.transform='rotate(180deg)';
    }
    oMyj.onmouseout=function(){
        this.style.display='none';
        oMyjd.style.backgroundColor='#F0F0F0';
        oMyjd.style.borderColor='#F0F0F0';
        oTni[1].style.transform='rotate(0)';
    }
/*我的京东 下拉div 结束*/

/*手机京东 下拉div 开始*/
    oPhonejd.onmouseover=function(){
        oPhonej.style.display='block';
        this.style.backgroundColor='#FFFFFF';
        this.style.borderColor='#DCDCDC';
        oTni[2].style.transform='rotate(180deg)';
    }
    oPhonejd.onmouseout=function(){
        oPhonej.style.display='none';
        this.style.backgroundColor='#F0F0F0';
        this.style.borderColor='#F0F0F0';
        oTni[2].style.transform='rotate(0)';
    }
    oPhonej.onmouseover=function(){
        this.style.display='block';
        oPhonejd.style.backgroundColor='#FFFFFF';
        oPhonejd.style.borderColor='#DCDCDC';
        oTni[2].style.transform='rotate(180deg)';
    }

    oPhonej.onmouseout=function(){
        this.style.display='none';
        oPhonejd.style.backgroundColor='#F0F0F0';
        oPhonejd.style.borderColor='#F0F0F0';
        oTni[2].style.transform='rotate(0)';
    }
/*手机京东 下拉div 结束*/

/*手机京东 下拉div 开始*/
    oAttjd.onmouseover=function(){
        oAttj.style.display='block';
        this.style.backgroundColor='#FFFFFF';
        this.style.borderColor='#DCDCDC';
        oTni[3].style.transform='rotate(180deg)';
    }
    oAttjd.onmouseout=function(){
        oAttj.style.display='none';
        this.style.backgroundColor='#F0F0F0';
        this.style.borderColor='#F0F0F0';
        oTni[3].style.transform='rotate(0)';
    }
    oAttj.onmouseover=function(){
        this.style.display='block';
        oAttjd.style.backgroundColor='#FFFFFF';
        oAttjd.style.borderColor='#DCDCDC';
        oTni[3].style.transform='rotate(180deg)';
    }
    oAttj.onmouseout=function(){
        this.style.display='none';
        oAttjd.style.backgroundColor='#F0F0F0';
        oAttjd.style.borderColor='#F0F0F0';
        oTni[3].style.transform='rotate(0)';
    }
/*手机京东 下拉div 结束*/

/*客户服务 下拉div 开始*/
    oSerjd.onmouseover=function(){
        oSerj.style.display='block';
        this.style.backgroundColor='#FFFFFF';
        this.style.borderColor='#DCDCDC';
        oTni[4].style.transform='rotate(180deg)';
    }
    oSerjd.onmouseout=function(){
        oSerj.style.display='none';
        this.style.backgroundColor='#F0F0F0';
        this.style.borderColor='#F0F0F0';
        oTni[4].style.transform='rotate(0)';
    }
    oSerj.onmouseover=function(){
        this.style.display='block';
        oSerjd.style.backgroundColor='#FFFFFF';
        oSerjd.style.borderColor='#DCDCDC';
        oTni[4].style.transform='rotate(180deg)';
    }
    oSerj.onmouseout=function(){
        this.style.display='none';
        oSerjd.style.backgroundColor='#F0F0F0';
        oSerjd.style.borderColor='#F0F0F0';
        oTni[4].style.transform='rotate(0)';
    }
/*客户服务 下拉div 结束*/

/*网站导航 下拉div 开始*/
    oNavjd.onmouseover=function(){
        oNavj.style.display='block';
        this.style.backgroundColor='#FFFFFF';
        this.style.borderColor='#DCDCDC';
        oTni[5].style.transform='rotate(180deg)';
    }
    oNavjd.onmouseout=function(){
        oNavj.style.display='none';
        this.style.backgroundColor='#F0F0F0';
        this.style.borderColor='#F0F0F0';
        oTni[5].style.transform='rotate(0)';
    }
    oNavj.onmouseover=function(){
        this.style.display='block';
        oNavjd.style.backgroundColor='#FFFFFF';
        oNavjd.style.borderColor='#DCDCDC';
        oTni[5].style.transform='rotate(180deg)';
    }
    oNavj.onmouseout=function(){
        this.style.display='none';
        oNavjd.style.backgroundColor='#F0F0F0';
        oNavjd.style.borderColor='#F0F0F0';
        oTni[5].style.transform='rotate(0)';
    }
/*网站导航 下拉div 结束*/

/*我的购物车 下拉div 开始*/
    oShoppingcart.onmouseover=function (){
        oShoppingcar.style.display='block';
        oScart.style.background='url("imags/jd-logo/cart2.png") no-repeat center';
        this.style.backgroundColor='#FFFFFF';
        this.style.borderBottomColor='#FFFFFF';
    }
    oShoppingcart.onmouseout=function (){
        oShoppingcar.style.display='none';
        oScart.style.background='url("imags/jd-logo/cart1.png") no-repeat center';
        this.style.backgroundColor='#F9F9F9';
        this.style.borderBottomColor='#DFDFDF';
    }
/*我的购物车 下拉div 结束*/

/*轮播图 开始*/
    var index=0;
    var timer=null;
    var oLunbo=document.getElementById('lunbo');
    var oLpic=document.getElementById('l-pic');

    var aLpic=oLpic.getElementsByTagName('li');             /*轮播图图片*/
    var oLnum=document.getElementById('l-num');

    var aLnum=oLnum.getElementsByTagName('li');             /*轮播图数字*/
    var oLprev=document.getElementById('l-prev');
    var oLnext=document.getElementById('l-next');

    //点击左箭头
    oLprev.onclick=function(){
        index--;
        if (index<0){index=aLnum.length-1};
        changeOption(index);
    }
    //点击右箭头
    oLnext.onclick=function(){
        index++;
        if (index>=aLnum.length){index=0};
        changeOption(index);
    }
    //鼠标移入(移出)窗口，停止（开启）定时器
    oLunbo.onmouseover=function(){
        clearInterval(timer);
    }
    oLunbo.onmouseout=function(){
        timer=setInterval(run,3000)
    }
    //鼠标移入页码上面，停止定时器，手动切换轮播图
    for ( var k=0; k<aLnum.length; k++ ){
        aLnum[k].id=k;
        aLnum[k].onmouseover=function(){
            clearInterval(timer);
            changeOption(this.id);
        }
    }
    //设置定时器
    timer=setInterval(run,3000)
    //封装定时器函数run
    function run (){
        index++;
        if (index>=aLnum.length){index=0};
        changeOption(index);
    }
    //封装函数changeOption
    function changeOption (curindex){
        console.log(index)
        for (var j=0; j<aLnum.length; j++ ){
            aLpic[j].style.display='none';
            aLnum[j].className='';
        }
        aLpic[curindex].style.display='block';
        aLnum[curindex].className='active';
        index=curindex;
    }
/*轮播图 结束*/

    /*全部商品分类 隐藏div  开始*/
    var aSubs=document.getElementsByClassName('sub-s')[0].getElementsByTagName('li');

    for( var i=0; i<15; i++){
        aSubs[i].onmouseover=function(){
            this.style.backgroundColor='#F6F6F6';
            this.style.color='#B01919';
            this.className='sub-over';
        }
        aSubs[i].onmouseout=function(){
            this.style.backgroundColor='#B01919';
            this.style.color='#FFFFFF';
            this.className='sub-out';
        }
    }

    /*全部商品分类 隐藏div  结束*/

    //无缝切换
    jQuery(".td-cut").slide({mainCell:".td-cut-bd ul",effect:"leftLoop",autoPlay:true});

}