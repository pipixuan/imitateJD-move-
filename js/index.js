/**
 * Created by dell on 2016/9/13.
 */
window.onload = function () {
    //��������
    search();
    //�ֲ�ͼ
    banner();
    //ʱ��
    domTime();
}

function banner() {
    var bannerBox = document.querySelector(".jd_banner");

    var width = bannerBox.offsetWidth;
    //ͼƬ����
    var imgBox = bannerBox.querySelector("ul:first-child");
    //�����
    var dianBox = bannerBox.querySelector("ul:last-child");
    //ÿһ����
    var lis = dianBox.querySelectorAll("li");

    //���ö�������
    function addTransition() {
        imgBox.style.transition = "all 0.2s";
        imgBox.style.webkitTransition = "all 0.2s";
    }

    //�������
    function clearTransition() {
        imgBox.style.transition = "none";
        imgBox.style.webkitTransition = "none";
    }

    //��λ
    function setTranslateX(dom) {
        imgBox.style.transform = "translateX(" + dom + "px)";
        imgBox.style.webkitTransform = "translateX(" + dom + "px)";
    }

    //�޷��ֲ�

    var index = 1;
    var time = setInterval(function () {
        index++;
        //imgBox.style.transition = "all 0.2s";
        //imgBox.style.webkitTransition = "all 0.2s";

        //imgBox.style.transform = "translateX("+str+"px)";
        //imgBox.style.webkitTransform = "translateX("+str+"px)";
        setTranslateX(-index * width);
        addTransition();
    }, 1000);


    itcast.transitionEnd(imgBox, function () {
        if (index >= 9) {
            index = 1;

            clearTransition();
            setTranslateX(-index * width);
        } else if (index <= 0) {
            index = 8;
            clearTransition();
            setTranslateX(-index * width);
        }
        setPoint();
    });

    function setPoint() {
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = " ";
        }
        lis[index - 1].className = "current";
    }

    var startX = 0;
    var moveX = 0;
    var distanceX = 0;
    var sty = false;

    imgBox.addEventListener("touchstart", function (e) {
        startX = e.touches[0].clientX;
        clearInterval(time);

    })
    imgBox.addEventListener("touchmove", function (e) {
        moveX = e.touches[0].clientX;
        distanceX = moveX - startX;

        var tran = -index * width + distanceX;
        setTranslateX(tran);
        clearTransition();
        sty = true;
    })
    window.addEventListener("touchend", function (e) {

        if (sty && Math.abs(distanceX) > width / 3) {
            if (distanceX > 0) {
                index--;

            } else {
                index++;
            }
            addTransition();

            setTranslateX(-index * width);

        }
        else {
            addTransition();
            setTranslateX(-index * width);
        }
        startX = 0;
        moveX = 0;
        distanceX = 0;
        sty = false;
        clearInterval(time);
        time = setInterval(function () {
            index++;
            addTransition();
            setTranslateX(-index * width);
        }, 1000);

    });
}


function domTime() {
    var skTime = document.querySelector(".jd_time");
    var spans = skTime.querySelectorAll("span");
    //����ʱ��Ϊ3Сʱ
    var time = 3 * 60 * 60;
    var timer = setInterval(function () {
        time--;
        if (time < 0) {
            clearInterval(timer)
            return false;
        }
        var h = Math.floor(time / 3600);//Сʱ
        var m = Math.floor(time % 3600 / 60)//����
        var s = time % 60; //��
        spans[0].innerHTML = Math.floor(h / 10);
        spans[1].innerHTML = h % 10;
        spans[3].innerHTML = Math.floor(m / 10);
        spans[4].innerHTML = m % 10;
        spans[6].innerHTML = Math.floor(s / 10);
        spans[7].innerHTML = s % 10;
    }, 1000)

}

function search() {
    var box = document.querySelector(".jd_heaer_box");
    var banner = document.querySelector(".jd_banner");
    var height = banner.offsetHeight;
    window.onscroll = function () {
        var top = document.body.scrollTop;
        var opacity = 0;
        if (top < height) {
            opacity = top / height * 0.85;
        } else {
            opacity = 0.85;
        }
        box.style.backgroundColor = "rgba(201,21,35," + opacity + ")";
    }

}




