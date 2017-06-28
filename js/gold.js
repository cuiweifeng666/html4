Zepto(function($){
	$('.count-1').css({
		'-webkit-transform':'scale(1.4)  translateZ(0)',
		'transform':'scale(1.4)  translateZ(0)',
		'transformOrign':'center'
	})
	var t = $(window).height();
	var t1 =  $('body>header').height();
	var f1 =  $('body>footer').height();
	var con_1 = t-t1-f1; 
	var scaleSmall
	$('section').height(con_1);
	var m = $('section').width();
	if(m/con_1<688/949){
		$('.table').css({
			width:'100%',
		})
		var w =$('.dice-bg').width(); 
		var scaleSmall = w/688;
		var h = 949*scaleSmall;
		 $('.table').css({
			top:-(h-con_1)/2,
		})
		 var short = 43*(1-scaleSmall)
		 $('.sa').css({
		 	'-webkit-transform':'scale('+scaleSmall+')  translateZ(0)',
		 	'transform':'scale('+scaleSmall+')  translateZ(0)',
		 })
		 $('.dice-pos').css({
		 	width:"100%",
		 	height:h,
		 	top:-(h-con_1)/2,
		 })
		 $('.trend,.contect').css({
		 	top:-short
		 })
		 $('.help,.set').css({
		 	bottom:-short
		 })
		 $('.head-start').css({
		  	left:-57+w/2,
		 	'margin-bottom':34*scaleSmall,
		 })
		 $('.winner').css({
		  	left:180*scaleSmall,
		  	top:90*scaleSmall,
		  	'font-size':24*scaleSmall,
		  })
		 $('.trending-head').css({
		  	left:110*scaleSmall,
		  	top:142*scaleSmall,
		  })
		    $('.trending-sign').css({
		  	width:120*scaleSmall,
		  	height:20*scaleSmall,
		  	'margin-top':8*scaleSmall
		  })
		    $('.tr-pic').css({
		  	width:36*scaleSmall,
		  	height:36*scaleSmall,
		  	'margin-left':6*scaleSmall
		  })
		     $('.win-01>img').css({
		  	width:40*scaleSmall,
		  	height:40*scaleSmall,
		  	top:35*scaleSmall,
		  	left:39*scaleSmall,
		  })
		     $('.long').css({
		  	width:226*scaleSmall,
		  	height:198*scaleSmall,
		  })
		     $('.win-02').css({
		  	top:184*scaleSmall,
		  	left:228*scaleSmall,
		  })
		     $('.win-02>img').eq(0).css({
		     width:55*scaleSmall,
		  	height:19*scaleSmall,
		  	top:20*scaleSmall,
		  	left:89*scaleSmall,
		  })
		     $('.win-02>img').eq(1).css({
		     width:113*scaleSmall,
		  	height:85*scaleSmall,
		  	top:52*scaleSmall,
		  	left:57*scaleSmall,
		  })
		      $('.win-02>img').eq(2).css({
		     width:28*scaleSmall,
		  	height:18*scaleSmall,
		  	top:119*scaleSmall,
		  	left:172*scaleSmall,
		  })
		      $('.win-02>img').eq(3).css({
		     width:78*scaleSmall,
		  	height:20*scaleSmall,
		  	top:166*scaleSmall,
		  	left:78*scaleSmall,
		  })
		       $('.win-05').css({
		  	top:384*scaleSmall,
		  	left:228*scaleSmall,
		  })
		        $('.win-05>img').eq(0).css({
		     width:13*scaleSmall,
		  	height:18*scaleSmall,
		  	top:23*scaleSmall,
		  	left:102*scaleSmall,
		  })
		         $('.win-05>img').eq(1).css({
		     width:113*scaleSmall,
		  	height:85*scaleSmall,
		  	top:57*scaleSmall,
		  	left:57*scaleSmall,
		  })
		          $('.win-05>img').eq(2).css({
		     width:28*scaleSmall,
		  	height:19*scaleSmall,
		  	top:117*scaleSmall,
		  	left:170*scaleSmall,
		  })
		      $('.win-08').css({
		  	top:584*scaleSmall,
		  	left:228*scaleSmall,
		  })
		    $('.win-08>img').eq(0).css({
		     width:44*scaleSmall,
		  	height:19*scaleSmall,
		  	top:16*scaleSmall,
		  	left:96*scaleSmall,
		  })
		         $('.win-08>img').eq(1).css({
		     width:113*scaleSmall,
		  	height:85*scaleSmall,
		  	top:57*scaleSmall,
		  	left:54*scaleSmall,
		  })
          $('.win-08>img').eq(2).css({
		     width:28*scaleSmall,
		  	height:18*scaleSmall,
		  	top:109*scaleSmall,
		  	left:171*scaleSmall,
		  })  
      	  $('.win-08>img').eq(3).css({
		     width:78*scaleSmall,
		  	height:20*scaleSmall,
		  	top:160*scaleSmall,
		  	left:78*scaleSmall,
		  })  
		      $('.st').css({
		  	width:120*scaleSmall,
		  	height:198*scaleSmall,
		  	top:184*scaleSmall,
		  	left:109*scaleSmall,
		  })
		       $('.win-03').css({
		  	top:184*scaleSmall,
		  	left:457*scaleSmall,
		  })
		        $('.win-04').css({
		  	top:384*scaleSmall,
		  	left:109*scaleSmall,
		  })
		      $('.win-06').css({
		  	top:384*scaleSmall,
		  	left:457*scaleSmall,
		  })
		       $('.win-07').css({
		  	top:584*scaleSmall,
		  	left:109*scaleSmall,
		  })
		        $('.win-09').css({
		  	top:584*scaleSmall,
		  	left:457*scaleSmall,
		  })
		    $('.st>img').css({
		  	width:40*scaleSmall,
		  	height:40*scaleSmall,
		  	top:35*scaleSmall,
		  	left:39*scaleSmall,
		  })
		   
		      $('.win-first-01').css({
		  	top:35*scaleSmall,
		  })
		    $('.win-first-02').css({
		  	top:85*scaleSmall,
		  })
		    $('.win-first-03').css({
		    width:42*scaleSmall,
		  	height:19*scaleSmall,
		  	top:140*scaleSmall,
		  })
	}else {
		var t = (m-$('.dice-bg').width())*.6
		$('.table').css({
			height:con_1-t,
			top:t/2
		})
		scaleSmall = (con_1-t)/949
		var w = 688*scaleSmall;
		var u =$('.dice-bg').width();
		var s = (u-w)/2
		$('.table').css({
			left:s,
		})
		var short = 43*(1-scaleSmall)
		 $('.sa').css({
		 	'-webkit-transform':'scale('+scaleSmall+')  translateZ(0)',
		 })
		 $('.dice-pos').css({
		 	width:w,
		 	height:con_1-t,
		 	top:t/2,
		 	left:s,
		 })
		 $('.trend,.contect').css({
		 	top:-short
		 })
		 $('.help,.set').css({
		 	bottom:-short
		 })
		  $('.head-start').css({
		  	left:-57+w/2,
		 	'margin-bottom':34*scaleSmall,
		 })
		  $('.winner').css({
		  	left:180*scaleSmall,
		  	top:90*scaleSmall,
		  	'font-size':24*scaleSmall,
		  })
		   $('.trending-head').css({
		  	left:110*scaleSmall,
		  	top:142*scaleSmall,
		  })
		    $('.trending-sign').css({
		  	width:120*scaleSmall,
		  	height:20*scaleSmall,
		  	'margin-top':8*scaleSmall
		  })
		    $('.tr-pic').css({
		  	width:36*scaleSmall,
		  	height:36*scaleSmall,
		  	'margin-left':6*scaleSmall
		  })
		    
		   $('.long').css({
		  	width:226*scaleSmall,
		  	height:198*scaleSmall,
		  })
		     $('.win-02').css({
		  	top:184*scaleSmall,
		  	left:228*scaleSmall,
		  })
		     $('.win-02>img').eq(0).css({
		     width:55*scaleSmall,
		  	height:19*scaleSmall,
		  	top:20*scaleSmall,
		  	left:89*scaleSmall,
		  })
		     $('.win-02>img').eq(1).css({
		     width:113*scaleSmall,
		  	height:85*scaleSmall,
		  	top:52*scaleSmall,
		  	left:57*scaleSmall,
		  })
		      $('.win-02>img').eq(2).css({
		     width:28*scaleSmall,
		  	height:18*scaleSmall,
		  	top:119*scaleSmall,
		  	left:172*scaleSmall,
		  })
		      $('.win-02>img').eq(3).css({
		     width:78*scaleSmall,
		  	height:20*scaleSmall,
		  	top:166*scaleSmall,
		  	left:78*scaleSmall,
		  })
		       $('.win-05').css({
		  	top:384*scaleSmall,
		  	left:228*scaleSmall,
		  })
		        $('.win-05>img').eq(0).css({
		     width:13*scaleSmall,
		  	height:18*scaleSmall,
		  	top:23*scaleSmall,
		  	left:102*scaleSmall,
		  })
		         $('.win-05>img').eq(1).css({
		     width:113*scaleSmall,
		  	height:85*scaleSmall,
		  	top:57*scaleSmall,
		  	left:57*scaleSmall,
		  })
		          $('.win-05>img').eq(2).css({
		     width:28*scaleSmall,
		  	height:19*scaleSmall,
		  	top:117*scaleSmall,
		  	left:170*scaleSmall,
		  })
		      $('.win-08').css({
		  	top:584*scaleSmall,
		  	left:228*scaleSmall,
		  })
		    $('.win-08>img').eq(0).css({
		     width:44*scaleSmall,
		  	height:19*scaleSmall,
		  	top:16*scaleSmall,
		  	left:96*scaleSmall,
		  })
		         $('.win-08>img').eq(1).css({
		     width:113*scaleSmall,
		  	height:85*scaleSmall,
		  	top:57*scaleSmall,
		  	left:54*scaleSmall,
		  })
          $('.win-08>img').eq(2).css({
		     width:28*scaleSmall,
		  	height:18*scaleSmall,
		  	top:109*scaleSmall,
		  	left:171*scaleSmall,
		  })  
      	  $('.win-08>img').eq(3).css({
		     width:78*scaleSmall,
		  	height:20*scaleSmall,
		  	top:160*scaleSmall,
		  	left:78*scaleSmall,
		  })  
		      $('.st').css({
		  	width:120*scaleSmall,
		  	height:198*scaleSmall,
		  	top:184*scaleSmall,
		  	left:109*scaleSmall,
		  })
		       $('.win-03').css({
		  	top:184*scaleSmall,
		  	left:457*scaleSmall,
		  })
		        $('.win-04').css({
		  	top:384*scaleSmall,
		  	left:109*scaleSmall,
		  })
		      $('.win-06').css({
		  	top:384*scaleSmall,
		  	left:457*scaleSmall,
		  })
		       $('.win-07').css({
		  	top:584*scaleSmall,
		  	left:109*scaleSmall,
		  })
		        $('.win-09').css({
		  	top:584*scaleSmall,
		  	left:457*scaleSmall,
		  })
		    $('.st>img').css({
		  	width:40*scaleSmall,
		  	height:40*scaleSmall,
		  	top:35*scaleSmall,
		  	left:39*scaleSmall,
		  })
		   
		      $('.win-first-01').css({
		  	top:35*scaleSmall,
		  })
		    $('.win-first-02').css({
		  	top:85*scaleSmall,
		  })
		    $('.win-first-03').css({
		    width:42*scaleSmall,
		  	height:19*scaleSmall,
		  	top:140*scaleSmall,
		  })
		 
	}//生成页面


	var m = $('.choose');
 	m.on('tap',function(e){
      m.each(function(index,item){
      		$(item).css({
            '-webkit-transform':'scale(1) translateZ(0)',
             transform:'scale(1) translateZ(0)',
            transition:".4s",
            }).removeClass('active')
        })
    		$(e.target).css({
            '-webkit-transform':'scale(1.4) translateZ(0)',
             transform:'scale(1.4) translateZ(0)',
            transition:".4s",
        }).addClass('active')
   	 })//底部的按钮切换
   
   function clearBtn(){
   		 m.each(function(index,item){
      		$(item).css({
            '-webkit-transform':'scale(1) translateZ(0)',
             transform:'scale(1) translateZ(0)',
             opacity:'.3',
            transition:".3s",
            })
        })
   }
   // clearBtn()
   function into(){
            var fatherW =$('.start').width();
          var p1 = $('.p1');
          var p2 = $('.p2');
          var cicle = $('.cicle');
          var startText = $('.start_text');
          var p1W=$('.p1').width();
          var p2W=$('.p2').width();
          
          p1.css({
            transform:'translateX('+(fatherW/2-p1W/4*3)+'px)  translateZ(0)',
            "-webkit-transform":'translateX('+(fatherW/2-p1W/4*3)+'px)  translateZ(0)',
            'transition':'.2s',
          })//左边塞子
          p2.css({
            transform:'translateX('+(fatherW/2-p1W/4*3)+'px)  translateZ(0)',
            "-webkit-transform":'translateX('+-(fatherW/2-p2W/4*3)+'px)  translateZ(0)',
            'transition':'.2s',
          })//右边塞子
          setTimeout(function(){
            $('.cicle').css({
              opacity:1,
              transition:'0s'
            })
            
            circle();
          },200)
          setTimeout(function(){
            retur()
          },300)
          }
          function retur(){
          $('.p1').css({
            transform:'translateX('+0+'px) rotate(-270deg) translateZ(0)',
            "-webkit-transform":'translateX('+0+'px) rotate(-270deg) translateZ(0)',
            'webkit-transform-origin':'center',
            opacity:0,
            'transition':'2.5s',
          })//左边塞子返回
          $('.p2').css({
            transform:'translateX('+0+'px) rotate(270deg) translateZ(0)',
            "-webkit-transform":'translateX('+0+'px) rotate(270deg) translateZ(0)',
            opacity:0,
            'webkit-transform-origin':'center',
            'transition':'2.5s',
          })//右边塞子返回
          setTimeout(function(){
             startT();
          },1300)
          }
         function circle(){
            $('.cicle').css({
              transform:'scale(6) translateZ(0)',
              "-webkit-transform":'scale(6) translateZ(0)',
               opacity:0,
               'webkit-transform-origin':'center',
              'transition':'1.5s',
           })

        }//光环效果
        function startT(){
            // startText.show();
            $('.start_text').css({
               opacity:1,
               'webkit-transform-origin':'center',
              'transition':'1s',
           })
            setTimeout(function(){
                 $('.start_text').css({
                  opacity:0,
                  transition:'.6s'
                })
            },1000)
        }//文字出来
          
        $('.cancel').on('tap',function(){
          $('.start').show();
          into();
        })

   $('.cancel').on('tap',function(){
   		$('.choose').css({
   			'-webkit-transform':'scale(1) translateZ(0)',
             transform:'scale(1) translateZ(0)',
            transition:".3s",
   		}).eq(0).css({
   			'-webkit-transform':'scale(1.4) translateZ(0)',
             transform:'scale(1.4) translateZ(0)',
            transition:".3s",
   		})
   })
 		 var ctx;
        var everything = [];
        var updowntime = 0;
        var changeFig = [];
        var my = 2;
        var updown;
        var n = 0;
        var starLun
        var rotateangle = 0;
        var onoff4= true;
        var  _this
        var star
        var rand 
        var old
        var start =0;
        var count
        var add = 0;
        var cholse
        var backTime;
        var userOn = false;
        var add = []
        var addSpeed=0;
        $('#myCanve').get(0).width=$(window).width()  
         $('#myCanve').get(0).height=$(window).height() 

         var bs =
              {
     		 group:[$('.win-01').eq(1),$('.win-02').eq(1),$('.win-03').eq(1),$('.win-04').eq(1),$('.win-05').eq(1),$('.win-06').eq(1),$('.win-07').eq(1),$('.win-08').eq(1),$('.win-09').eq(1)],
              gT:$('.dice-pos').offset().top+20*scaleSmall,
              gL: $('.dice-pos').offset().left+$('.dice-pos').offset().width-60*scaleSmall,
              numStore:[],
              moneyStore:[],
              all: [],
              moneyAll:0
              }
           var num = Math.floor(Math.random(0,1)*9);

        function Umbrellas(sx, sy) {
            this.x = sx;
            this.y = sy;
            this.draw = drawUmbrella;
            this.my = 0;
            this.moveit = moveumbrella;
            this.arrayFill=[];
        }

        function drawUmbrella() {
            var img= document.getElementById("gold");
            	// img = new Image()
            	// img.src="../images/gold.png";
                img.onload=function(){  
                  ctx.drawImage(img,this.x,this.y,20*scaleSmall,20*scaleSmall);      
               };  
                ctx.drawImage(img,this.x,this.y,20*scaleSmall,20*scaleSmall);
        }
        function drawUmbrella() {
            var img= document.getElementById("gold");
            	// img = new Image()
            	// img.src="../images/gold.png";
                img.onload=function(){  
                  ctx2.drawImage(img,this.x,this.y,20*scaleSmall,20*scaleSmall);      
               };  
                ctx.drawImage(img,this.x,this.y,20*scaleSmall,20*scaleSmall);
        }

        function moveumbrella(x,y){
          this.x += x;
          this.y += y;
        }

        function creatDis(){
            return {
              left:this.chooseL+Math.random()*this.chooseW*0.6+this.chooseW*0.2,
              top:this.chooseT+Math.random()*this.chooseH*0.6+this.chooseH*0.2
            }
        }
       
        var arrayFill=[]
        function chooseOne(){
          this.choose = bs.group[num]
         this.chooseW = choose.offset().width;
         this.chooseL = choose.offset().left;
         this.chooseT = choose.offset().top;
         this.chooseH = choose.offset().height;
          }
        function selcetObj(t){
          return {
              left:sharChoose.offset().left+Math.random()*sharChoose.offset().width*0.6+sharChoose.offset().width*0.2,
              top:sharChoose.offset().top+Math.random()*sharChoose.offset().height*0.6+sharChoose.offset().height*0.2
            }
        } 
        function selectBord(min,max){
          return Math.floor(Math.random()*(max-min)+min)
        }
        ctx = document.getElementById("myCanve").getContext('2d');
        var sle=0,sel=0,sum=0;
       function int() {
          var _this = this
          
          add++;
          count = selectBord(3,7);           
            arrayFill = []
            updowntime = 0;
            
            // ctx.translate(200, 300); 
            for(var t = 0;t<count;t++){
              num = Math.floor(Math.random(0,1)*9);
              if(arrayFill.length){//对重复的进入框内的元素进行排查
                if(arrayFill.indexOf(num)!==-1){
                --t;  
                continue;
              }else {
                  arrayFill.push(num);
                chooseOne();
                }
              }else {
                 arrayFill.push(num);
                chooseOne();
              }  
              for (var i = 0; i < selectBord(3,8); i++) {
                  changeFig.push(creatDis());
                  var um = new Umbrellas(bs.gL, bs.gT);
                  everything.push(um);
              }
            }
           
            updown = setInterval(change,20);

         }

         function creatNew(m){
            return {
              left:m.offset().left+Math.random()*m.offset().width*0.6+m.offset().width*0.2,
              top:m.offset().top+Math.random()*m.offset().height*0.6+m.offset().height*0.2
            }
        }
         var find 
          $('.red').on('tap',function(e){
         	// if(userOn){
         		sel = $(e.target).index()
         		sle=$('.active').index();
         		console.log(sle)
         		if(add<=2){
         		// for(var i = 0; i <sle;i++){
         			sum = 0;
         			 changeFig.push(creatNew($(e.target)));
                  var um = new Umbrellas($('.active').offset().left, $('.active').offset().top);
                  	everything.push(um);
                  find = everything.indexOf(um)
                  // find.push(short);
                  // console.log(short)
         		// }
         	}	
         		 // setInterval(bind,20);
          }) 
        
        function bind(ind){
        	sum += 1;
        	 everything[ind].myL=(changeFig[ind].left-$('.active').offset().left)/25
        	 everything[ind].myT=(changeFig[ind].top-$('.active').offset().top)/25
        	 clear(0,0);
        	 everything[ind].moveit(everything[ind].myL, everything[ind].myT);
                everything[ind].draw();
              if(sum>=25){
              	clearInterval(que)
                }
        }

        //creatSpeed
        function creatSpeed(){
            for(var i=start;i<everything.length;i++)  {
                everything[i].myL=(changeFig[i].left-bs.gL)/25
                everything[i].myT=(changeFig[i].top-bs.gT)/25
            }
        }
        //starFun
        function starFun(){
           n++;
           old = sharChoose
           if(cholse !=undefined){
                cholse.css({
                background:'green',
                opacity:1,
                transition:'0s'
                })
           }
            sharChoose.css({
                background:'red',
                opacity:1,
                transition:'0s'
        })
           
        setTimeout(function(){
               sharChoose.css({
                background:'none',
                opacity:1,
                transition:'.4s'
            })
               if(cholse !=undefined){
                 cholse.css({
                background:'none',
                opacity:1,
                transition:'.4s'
                })
              }
            },200)
        if(n==2){
          clearInterval(starLun)
          updowntime = 0;
          onoff4 = false
           backTime = setInterval(back,20);
           n==0;
          }
        }
        //changeEveryThing

        function back(){
           backSpeed();
           clear(0,0);
            updowntime++;
             for (var i = 0; i < everything.length; i++) {
                  everything[i].moveit(everything[i].myL, everything[i].myT);
                everything[i].draw();
            }
            if (updowntime == 25) {
                clearInterval(backTime);
                // setTimeout(changeEveryThing,200)
                changeEveryThing()
              }
        }

        //backSpeed
        function backSpeed(){
            for(var i=0;i<everything.length;i++)  {
                everything[i].myL=-(changeFig[i].left-$('.head-start').offset().left-40*scaleSmall)/25
                everything[i].myT=-(changeFig[i].top-$('.head-start').offset().top-40*scaleSmall)/25
            }
        }
        function head(){
        	start =0;
            creatSpeed();
           var s =0;
           var time =setInterval(function(){
            s++;
            clear(0,0);
             for (var i = 0; i < everything.length; i++) {
                  everything[i].moveit(-everything[i].myL, -everything[i].myT);
                everything[i].draw();
            }
              if(s == 25) {
                clearInterval(time);
                // $('#myCanve').hide();
              }
          },20)
          
        }
         function creatMax(){
            for(var i=0;i<everything.length;i++)  {
                everything[i].myL=(changeFig[i].left-$('.head-start').offset().left-20*scaleSmall)/25
                everything[i].myT=(changeFig[i].top-$('.head-start').offset().top-20*scaleSmall)/25
            }
        }
         function changeEveryThing(){
          num =rand[star];
          sharChoose = old
          changeFig = [];
            for (var i = 0; i < everything.length; i++) {
              changeFig.push(selcetObj());
            }
            creatMax();
            var  t =0;
            var time =setInterval(function(){
              clear(-0,-0);
              t++;
              for (var i = 0; i < everything.length; i++) {
                  everything[i].moveit(everything[i].myL, everything[i].myT);
                  everything[i].draw();
              }
             if(t == 25){
              clearInterval(time)  
              setTimeout(function(){
                head()
              },300)  
            }
          },20)
         }
        //chooseSide 
        function chooseSide(){
          var t=t-7>0?-1:1;
          var m = Math.floor(Math.random()*10)>6?t:undefined;
          var q = star+m
          if(m != undefined){
            return bs.group[rand[star]+m]            
          }

        }//随机出大小
        var que
        function change(){
        	clearInterval(que)
          	userOn = true
            creatSpeed();
            clear(0,0);
            updowntime++;
            	if(sum<25&&find){
            		// for (var i = 0; i < find.length; i++) {
            		// 	console.log(find[i])
            			bind(find);
   					// }
           		}else {
           			// for (var i = 0; i < find.length; i++) {
           			if(find){
            			everything[find].moveit(0, 0);
               		 	everything[find].draw();
            		}
           		}	
            for (var i = 0; i < start; i++) {
            	if(find == i){
            		continue
            	}
                  everything[i].moveit(0, 0);
                everything[i].draw();
            }
            for (var i = start; i < everything.length; i++) {
            	if(find == i){
            		continue
            	}
                  everything[i].moveit(everything[i].myL, everything[i].myT);
                everything[i].draw();
            }

            // $("#ta").html("坐标y:" + everything[0].y + "______updowntime:" + updowntime);
            //放在这才有效 在执行方法里面停止
            if (updowntime == 25) {
                clearInterval(updown);
                ctx.save();
                if(add<=2){
                setTimeout(int,500)
                if(find>0&&sum<25){
                	
                	if(sum<25){
               //  		 que = setInterval(function(){
               //  			// for (var t = 0; t < find.length; t++) {
            			// 	bind(find);
            			// 	// }
            			// },20)
                	}
           		}
                start = everything.length
               
                }else {
                rand = [1,4,7]
                star = selectBord(0,3);
                cholse =chooseSide();
                sharChoose=bs.group[rand[star]];
                userOn = false
                starLun= setInterval(starFun,600);
             }
               }
              //过渡方法

            }

        // }

        //选择
        function clear(x,y) {
            ctx.clearRect(x, y, $(window).width(), $(window).height());
        }

        window.onload = function () {
            int();
        }


})