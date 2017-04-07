/**
 * Created by dell on 2016/9/16.
 */
window.onload = function () {
    left();
    right();
}

function right() {
    var parentBox = document.querySelector(".jd_category_right");
    var childBox = document.querySelector(".jd_category_right_con");

    function addTransition() {
        childBox.style.transition = "all 0.2s";
        childBox.style.webittTransition = "all 0.2s";

    }

    function removeTransition() {
        childBox.style.transition = "none";
        childBox.style.webittTransition = "none";
    }

    function setTransform(translateY) {
        childBox.style.transform = "translateY(" + translateY + "px)";
        childBox.style.webitTransform = "translateY(" + translateY + "px)";
    }

    var parentHeight = parentBox.offsetHeight;
    var childHeight = childBox.offsetHeight;

    //�������
    var maxHeight = 0;
    //��С����
    var minHeight = parentHeight - childHeight;
    //��¼���������
    var dou = 100;
    //��󻬶�����
    var maxH = maxHeight + dou;
    //��С��������
    var minH = minHeight - dou;


    var startY = 0;
    //��¼�ƶ�����
    var moveY = 0;
    //��¼�ƶ��������
    var piace = 0;
    //��¼��һ���ƶ���λ��
    var currentY = 0;

    childBox.addEventListener("touchstart", function (e) {
        startY = e.touches[0].clientY;
    })
    childBox.addEventListener("touchmove", function (e) {
        moveY = e.touches[0].clientY;
        piace = moveY - startY;
        //��ô�ƶ�
        removeTransition();
        if ((piace + currentY) < maxH && (piace + currentY) > minH) {
            setTransform(piace + currentY);
        }
    })
    window.addEventListener("touchend", function () {
        if ((piace + currentY) > maxHeight) {
            currentY = maxHeight;
            addTransition();
            setTransform(currentY);
        } else if ((piace + currentY) < minHeight) {
            currentY = minHeight;
            addTransition();
            setTransform(currentY);
        } else {
            currentY = currentY + piace;
        }
        startY = 0;
        //��¼�ƶ�����
        moveY = 0;
        //��¼�ƶ��������
        piace = 0;
    })


}

function left() {
    var parentBox = document.querySelector(".jd_category_left");
    var childBox = parentBox.querySelector("ul");
    var lis = childBox.querySelectorAll("li");
    //���ö�������
    function addTransition() {
        childBox.style.transition = "all 0.2s";
        childBox.style.webkitTransition = "all 0.2s";
    }

    //�������
    function clearTransition() {
        childBox.style.transition = "none";
        childBox.style.webkitTransition = "none";
    }

    //��λ
    function setTranslateY(dom) {
        childBox.style.transform = "translateY(" + dom + "px)";
        childBox.style.webkitTranslateY = "translateY(" + dom + "px)";
    }

    var parentHeight = parentBox.offsetHeight;


    var childHeight = childBox.offsetHeight;
    //����߶�
    var maxHeihgt = 0;
    var minHeight = parentHeight - childHeight;
    //�������߶�
    var nes = 100;

    var maxH = maxHeihgt + nes;
    var minH = minHeight - nes;


    var startY = 0;
    var moveY = 0;
    var dislace = 0;
    var currentY = 0;
    childBox.addEventListener("touchstart", function (e) {
        startY = e.touches[0].clientY;
    })
    childBox.addEventListener("touchmove", function (e) {
        moveY = e.touches[0].clientY;
        dislace = moveY - startY;
        clearTransition();
        if ((dislace + currentY) < maxH && (dislace + currentY) > minH) {
            setTranslateY(dislace + currentY);
        }

    })
    window.addEventListener("touchend", function (e) {
        if (dislace + currentY > maxHeihgt) {
            currentY = maxHeihgt;
            addTransition();
            setTranslateY(currentY)
        } else if (dislace + currentY < minHeight) {
            currentY = minHeight;
            addTransition();
            setTranslateY(currentY);
        }
        else {
            currentY += dislace;
        }
        startY = 0;
        moveY = 0;
        dislace = 0;

    });
    itcast.tap(childBox, function (e) {
        var tige = e.target.parentNode;
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = " ";
            lis[i].index = i;
        }
        tige.className = "now";
        var displaceY = -tige.index * 50;
        if (displaceY > minHeight) {
            currentY = displaceY
            addTransition();
            setTranslateY(currentY);
        } else {
            currentY = minHeight;
            addTransition();
            setTranslateY(currentY);
        }
    })


    //childBox.addEventListener("touchstart", function (e) {
    //    startY = e.touches[0].clientY;
    //})
    //childBox.addEventListener("touchmove", function (e) {
    //    moveY = e.touches[0].clientY;
    //    distanceY = moveY - startY;
    //    console.log(distanceY);
    //    //setTranslateY(distanceY);
    //    clearTransition();
    //    if ((currentY + distanceY) < maxH && (currentY + distanceY) > minH) {
    //        //clearTransition();
    //        setTranslateY(currentY + distanceY);
    //    }
    //});
    //window.addEventListener("touchend", function (e) {
    //    if (currentY + distanceY > maxHeihgt) {
    //        currentY = maxHeihgt;
    //        addTransition();
    //        setTranslateY(currentY);
    //    }
    //    else if (currentY + distanceY < minHeight) {
    //        currentY = minHeight;
    //        addTransition();
    //        setTranslateY(currentY);
    //    }
    //    else {
    //        currentY = currentY + distanceY;
    //    }
    //    startY = 0;
    //    moveY = 0;
    //    //��¼�ƶ��ľ���
    //    distanceY = 0;
    //});
    // window.itcast = {};

    //itcast.tap(childBox, function (e) {
    //    var ris = e.target.parentNode;
    //    for (var i = 0; i < lis.length; i++) {
    //        lis[i].className = " ";
    //        lis[i].index = i;
    //    }
    //    ris.className = "now";
    //    var distanceY = -ris.index * 50;
    //    if (distanceY > maxHeihgt) {
    //        currentY = distanceY;
    //        addTransition();
    //        setTranslateY(currentY);
    //    }
    //    else {
    //        currentY = distanceY;
    //        addTransition();
    //        setTranslateY(currentY);
    //    }
    //})
}