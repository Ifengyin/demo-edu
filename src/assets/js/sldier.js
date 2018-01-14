(function($){
	$.fn.slider_banner=function(arr) {
		var elementId = this.attr('id');
		var adv={
			LIWIDTH:0,
			$ulImgs:null,
			INTERVAL:1000,
			WAIT:5000,
			timer:null,
			init(){
				this.LIWIDTH=parseFloat(
					$('#'+elementId+' .slider-content' ).css("width")
				);
				$(".slider-container").css('backgroundColor',arr[0].color);
				this.$ulImgs=$('#'+elementId+' .slider-content ul');
				this.updateView();
				$('#'+elementId+' .pagination').on('click',"li",(e)=>{
					var target=$('#'+elementId+' .pagination li').index(e.target);
					var old=arr[0].i;
					this.move(target-old);
				});
				$('#'+elementId).mouseenter(function(){
					clearTimeout(this.timer);
				}.bind(this)).mouseleave((e)=>{this.autoMove();})
				$('#'+elementId+' .narrow-left').on('click',()=>{
					this.move(-1);
				});
				$('#'+elementId+' .narrow-right').on('click',()=>{
					this.move(1);
				});
				this.autoMove();
			},
			autoMove(){
				this.timer=setTimeout(
					()=>this.move(1),
					this.WAIT
				);
			},
			movePrev(n){
				n*=-1;
				arr=arr.splice(-n,n).concat(arr);
				this.updateView();
				this.$ulImgs.css("left",parseFloat(this.$ulImgs.css("left"))-n*this.LIWIDTH
				);
			},
			move(n){
				clearTimeout(this.timer);
				if(n<0){
					this.movePrev(n);
					$("#"+elementId).css("background",arr[0].color);
					this.$ulImgs.stop(true).css({left:0}).animate(
						this.INTERVAL,
						()=>this.autoMove()
					);
				}else{
					$("#"+elementId).css("background",arr[n].color);
					this.$ulImgs.stop(true).css({left:-n*this.LIWIDTH}).animate(
						this.INTERVAL,
						function(){
							return this.moveCallback(n)
						}.bind(this)
						// ()=>this.moveCallback(n)
					);
				}
			},
			moveCallback(n){
				arr=arr.concat(arr.splice(0,n));
				this.updateView();
				this.$ulImgs.css("left",0);
				this.autoMove();
			},
			updateView(){
				for(var i=0,list="",idex="";i<arr.length;i++){
					list+=`<li><img src="${arr[i].img}" alt=""></li>`;
					idex+='<li></li>';
				}
				this.$ulImgs.html(list).css(
					"width",arr.length*this.LIWIDTH);
				this.$ulImgs.find("li").eq(0).addClass("animated fadeInDown")
				$('#'+elementId+' .pagination').html(idex).children(`li:eq(${arr[0].i})`).addClass("actived");
			}
		}
		adv.init();
	}
})(jQuery);
