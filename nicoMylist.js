javascript: (function () {
	var D = document,
		H = D.location.href,
		N = D.documentElement.innerHTML;
	if (N.match(/content="Nsen.*?"/) && H.match(/nicovideo\.jp\/watch/)) {
		PB = D.getElementById("playingBox"),
		ML = PB.getElementsByClassName("movieLink");
		NOA = ML[0].innerHTML;
		window.open(NOA.replace(/.*?([a-zA-Z]{0,2}\d+).*/, 'http://www.nicovideo.jp/mylist_add/video/$1'), '_blank', 'width=500,height=360')
	} else if (H.match(/blomaga\/ar\d+/)) {
		window.open(H.replace(/.*?(ar\d+).*/, 'http://www.nicovideo.jp/mylist_add/blomaga/$1'), '_blank', 'width=500,height=360')
	} else if (H.match(/watch\/bk\d+/)) {
		window.open(H.replace(/.*?(bk\d+).*/, 'http://www.nicovideo.jp/mylist_add/book/$1'), '_blank', 'width=500,height=360')
	} else if (H.match(/(www|i)\.nicovideo\.jp\/watch\/\d+/)) {
		AD = D.getElementById("watchAPIDataContainer");
		window.open(AD.innerHTML.replace(/.+videoId.+?([a-zA-Z]{0,2}\d{1,8}).+/, 'http://www.nicovideo.jp/mylist_add/video/$1'), '_blank', 'width=500,height=360')
	} else if (H.match(/sp\.nicovideo\.jp\/watch\/\d+/)) {
		DC = D.getElementById("jsDataContainer");
		window.open(DC.outerHTML.replace(/.+data-video_id.+?([a-zA-Z]{0,2}\d{1,8}).+/, 'http://www.nicovideo.jp/mylist_add/video/$1'), '_blank')
	} else if (H.match(/(www|i|sp)\.nicovideo\.jp\/watch\/..\d+/)) {
		window.open(H.replace(/.*?([a-zA-Z]{0,2}\d+).*/, 'http://www.nicovideo.jp/mylist_add/video/$1'), '_blank', 'width=500,height=360')
	} else if (H.match(/www\.nicovideo\.jp\/(?:mylist\/\d+|my\/mylist(?:\/#\/\d+)?|(?:user\/\d+|my)\/video)/)) {
		if (H.match(/mylist\/\d+/)) {
			CNm = 'SYS_box_item';
		} else {
			CNm = 'thumbContainer';
		}
		var b = document.getElementsByClassName(CNm),
		//scrT = document.body.scrollTop || document.documentElement.scrollTop,
		//scrH = document.body.scrollHeight || document.documentElement.scrollHeight,
		//wSize = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight,
		c = new Array();
		//scrollTo(0,scrH - wSize);
		//setInterval(window.scrollTo(0,Hit.scrollHeight),1);
		//alert(scrH - scrT <= wSize);
		//alert(scrT);
		//alert(scrH);
		//alert(wSize); muri
		for (i = 0; i < b.length; i++) {
			c[i] = b[i].innerHTML.replace(/href="watch\/(..\d+)(?:\?.+)?"(>(?:\n\s+)?<img.+?alt="").+?("http:\/\/.+?smilevideo\.jp\/smile\?i=\d").+?(>(?:\n\s+)?(?:vinfo_length"><span>|videoTime">))/, 'href="/mylist_add/video/$1" onclick="window.open(\'/mylist_add/video/$1\', \'_blank\', \'width=500,height=360\'); return false;"$2 src=$3$4+');
			b[i].innerHTML = c[i];
		}
	} else {
		var t = prompt('動画、ブロマガ、書籍のID/URLを入力してください', '');
		if (t.match(/ar\d+/)) {
			window.open(t.replace(/.*?(ar\d+).*/, 'http://www.nicovideo.jp/mylist_add/blomaga/$1'), '_blank', 'width=500,height=360')
		} else if (t.match(/bk\d+/)) {
			window.open(t.replace(/.*?(bk\d+).*/, 'http://www.nicovideo.jp/mylist_add/book/$1'), '_blank', 'width=500,height=360')
		} else if (t.match(/.*\d+/)) {
			window.open(t.replace(/.*?([a-zA-Z]{0,2}\d+).*/, 'http://www.nicovideo.jp/mylist_add/video/$1'), '_blank', 'width=500,height=360')
		} else {
			window.alert('ニコニコ動画用です。何かあったら\nhttps://twitter.com/uzuky \nhttp://nico.ms/ar201595 \nまで\n　v20140402');
		}
	}
})();
