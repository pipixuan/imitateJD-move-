/**
 * Created by dell on 2016/9/16.
 */
window.onload = function () {
    damu();
}
function damu() {
    //1.�Զ��ֲ�   ��ʱ��  ����  ���ɽ�����ʱ�򣨶���ִ����Ļص�������  ��Ҫ���޷��ν�
//* 2.�������ͼƬ���ֲ� ���ı䵱ǰ��ʽ��Ӧ�⵱ǰͼƬ   ������ǰ�ǵڼ���ͼƬ
//* 3.��ͼƬ��������    touch�¼�  ������ʼ������ͽ���������ĸı�  translateX
//* 4.��������ʱ�򲻳���һ���ľ�����Ҫ������ȥ  �ص�������λ��    ����
//* 5.��������ʱ�򳬹���һ���ľ���  ��һ��  ��һ��   ����ô�ж���һ�Ż�����һ��  ������һ���ľ��뵽���Ƕ�������֮��
//*


//1.�Զ��ֲ�   ��ʱ��  ����  ���ɽ�����ʱ�򣨶���ִ����Ļص�������  ��Ҫ���޷��ν�
    var banner = document.querySelector(".jd_banner");
    var width = banner.offsetWidth;
    var imgBox = banner.querySelector("ul:first-child");
    var dianBox = banner.querySelector("ul:last-child");
    var lis = dianBox.querySelectorAll("li");

//ͼƬ����
//����
    function addTransition() {
        imgBox.style.transition = "all 0.2s";
        imgBox.style.webitTransition = "all 0.2s";
    }

//�Ƴ�����
    function removeTransition() {
        imgBox.style.transition = "none";
        imgBox.style.webitTransition = "none";
    }

//����λ��
    function setTransform(duang) {
        imgBox.style.transform = "translateX(" + duang + "px)";
        imgBox.style.webkitTransform = "translateX(" + duang + "px)";
    }


    var index = 1;
    var zom = setInterval(function () {
        index++;
        setTransform(-index * width);
        addTransition();
    }, 1000);

    window.ojb = {};
    ojb.transitionEnd = function (hua, has) {
        if (hua && typeof hua == "object") {
            hua.addEventListener("webkitTransitionEnd", function () {
                has && has()
            })
        } else {
            hua.addEventListener("transitionEnd", function () {
                has && has();
            })
        }

    }

    ojb.transitionEnd(imgBox, function () {
        if (index >= 9) {
            //alert(1230)
            index = 1;
            removeTransition();
            setTransform(-index * width);
        } else if (index <= 0) {
            index = 8;
            removeTransition();
            setTransform(-index * width);
        }
        serr();
    })

    var serr = function () {
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = " ";
        }
        lis[index - 1].className = "current";

    }

    //3.��ͼƬ��������    touch�¼�  ������ʼ������ͽ���������ĸı�  translateX

    //��¼


//*
    var startX = 0;

    var moveX = 0;

    var gest = 0;
    //��ʼ����
    var dop = false;
    imgBox.addEventListener("touchstart", function (e) {
        startX = e.touches[0].clientX;
        clearInterval(zom);
    })
    //��������
    imgBox.addEventListener("touchmove", function (e) {
        moveX = e.touches[0].clientX;
        gest = moveX - startX;
        setTransform(-index * width + gest);
        removeTransition();
        dop = true;
    })
    //�뿪����
    window.addEventListener("touchend", function () {
//4.��������ʱ�򲻳���һ���ľ�����Ҫ������ȥ  �ص�������λ��    ����
//* 5.��������ʱ�򳬹���һ���ľ���  ��һ��  ��һ��   ����ô�ж���һ�Ż�����һ��  ������һ���ľ��뵽���Ƕ�������֮��
        if(dop && Math.abs(gest)>width/3){
            if(gest>0){
                index--;
            }else{
                index++;
            }
            addTransition();
            setTransform(-index*width);
        }
        else{
            //������ȥ
            addTransition();
            setTransform(-index*width);
        }
        //���ü�¼����
        startX = 0;

        moveX = 0;

        gest = 0;
        //��ʼ����
        dop = false;
        clearInterval(zom);
        zom = setInterval(function () {
            index++;
            setTransform(-index * width);
            addTransition();
        }, 1000);
    });



}