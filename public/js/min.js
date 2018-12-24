new Vue({
	el: '#app',
	data: {
		animation: false,
		bgBanner: true,
		loveLabel: "",
		timeLabel: '',
		lovetTimeLabel: "",
		setInterval: null,
		setIntervalTime: null,
		loveSetIntervalTime: null,
		num: 0
	},
	mounted: function () {
		var that = this;
		this.courselBgBanner();
		this.loveText();
		this.timeDate();
		this.setInterval = setInterval(this.loveText, 1000);
		that.setIntervalTime = setInterval(this.timeDate, 1000);
		that.loveSetIntervalTime = setInterval(this.loveTime, 1000);
		var audio = document.getElementById('em2');
		audio.pause();
	},
	methods: {
		// 轮播图
		courselBgBanner: function () {
			// banner图轮播
			var bannerSwiper = new Swiper('#swiperBgBanner', {
				loop: true, // 循环模式选项
				autoplay: true,//可选选项，自动滑动
				slidesPerGroup: 1,
				freeMode: false,
				autoplayDisableOnInteraction: false,
				loopAdditionalSlides: 0,
				slidesPerView: 1,
				centeredSlides: true,
			});
		},
		loveText: function () {
			var label = "“所有温暖如春的句子里都藏着你的脸”\r" +
				"就好像舔了一口的糖掉到了地上,\r" +
				"\r" +
				"出门玩却发现下雨了,\r" +
				"\r" +
				"花很长时间下载好的电影被说数据损坏需要重新下载,\r" +
				"\r" +
				"手机提示新消息却发现是应用软件更新,\r" +
				"\r" +
				"我怀着满满的期待却掉进漫无天日的绝望,\r" +
				"\r" +
				"这就是你给我的感觉。";
			var len = label.length;
			this.loveLabel += label[this.num];
			this.num += 1;
			if (this.num >= len) {
				clearInterval(this.setInterval);
			}
		},
		// 时间计算1
		timeDate: function () {
			var that = this;
			var newTime = '2019/1/1 0:00:00';
			var newTimeStr = parseInt(new Date(newTime).getTime() / 1000);
			var nowTime = new Date().getTime();
			var nowTimeStr = parseInt(nowTime / 1000);
			var distanceTime = newTimeStr - nowTimeStr;
			
			// 相差天数
			var days = Math.floor(distanceTime / (24 * 3600));
			
			// 相差小时数
			var hours = Math.floor((distanceTime % (3600 * 24)) / 3600);
			
			// 相差分钟
			var minutes = Math.floor((distanceTime % 3600) / 60);
			
			// 相差秒数
			var seconds = Math.round(distanceTime % 60);
			
			that.timeLabel = days + '天,' + hours + '小时,' + minutes + "分钟," + seconds + '秒'
		},
		// 时间计算2
		loveTime: function () {
			var that = this;
			var nowTime = new Date().getTime();
			var nowTimeStr = parseInt(nowTime / 1000);
			var newTime = '2018/11/24 00:00:00';
			var newTimeStr = parseInt(new Date(newTime).getTime() / 1000);
			var distanceTime = nowTimeStr - newTimeStr;
			// 相差天数
			var days = Math.floor(distanceTime / (24 * 3600));
			// 相差小时数
			var hours = Math.floor((distanceTime % (3600 * 24)) / 3600);
			// 相差分钟
			var minutes = Math.floor((distanceTime % 3600) / 60);
			// 相差秒数
			var seconds = Math.round(distanceTime % 60);
			that.lovetTimeLabel = days + '天,' + hours + '小时,' + minutes + "分钟," + seconds + '秒'
		},
		// 时间计算3
		// 场景值1
		ClickSceneOne: function () {
			this.bgBanner = true;
			this.animation = false;
			var audio1 = document.getElementById('em1');
			var audio2 = document.getElementById('em2');
			audio1.play();
			audio2.pause();
		},
		// 场景值2
		ClickSceneTwo: function () {
			$("body").attr('style', 'background: #111;');
			$(".tiemDisatance").attr('style', "color:white");
			this.bgBanner = false;
			this.animation = true;
			var audio1 = document.getElementById('em1');
			var audio2 = document.getElementById('em2');
			audio1.pause();
			audio2.play();
		}
	}
});