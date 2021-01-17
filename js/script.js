'use strict';

const setFillHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  
  // 画面のサイズ変動があった時に高さを再計算する
  window.addEventListener('resize', setFillHeight);
  
  // 初期化
  setFillHeight();

// 各ページ共通:ナビゲーション領域 固定設定 ここから
var _window = $(window),
    _gnavi = $('.gnavi'),
    _spnavi1 = $('.spnavi1'),
    topBottom;

_window.on('scroll', function () {
    topBottom = $('.top').height();
    if (_window.scrollTop() > topBottom) {
        _gnavi.addClass('fixed');
        _spnavi1.addClass('fixed');
    } else {
        _gnavi.removeClass('fixed');
        _spnavi1.removeClass('fixed');
    }
});
_window.trigger('scroll');
// 各ページ共通:ナビゲーション領域 固定設定 ここまで

// 各ページ共通:SPナビゲーション開閉設定 ここから
$(function () {
    $('.spnavi1__menu, .spnavi2').on('click', function () {
        $('.spnavi1__menu').toggleClass('active');
        $('.spnavi2').toggleClass('open');
        _spnavi1.toggleClass('fixedTop');
        $('#qandaBox1, #qandaBox2, #qandaBox3, #qandaBox4').removeClass('open');
        $('#careerBox1, #careerBox2, #careerBox3, #careerBox4').removeClass('open');
    });
})
// 各ページ共通:SPナビゲーション開閉設定 ここまで

// トップページ:ファーストビュー 100vh設定 ここから
$('#top').css('height', $(window).height());
// トップページ:ファーストビュー 100vh設定 ここまで

// トップページ:ダンサー写真左右からフェードイン ここから
$(function () {
    $(window).scroll(function () {
        $('.about__left-to-right, .about__right-to-left, .about__otgPc').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 300) {
                $(this).addClass('scrollin');
            }
        });
    });
});
// トップページ:ダンサー写真左右からフェードイン ここまで

// SPインストラクターページ:「Q＆A」開閉設定 ここから
$(function () {
    $('#leftFrame1, #qandaBox1').on('click', function () {
        $('#qandaBox1').toggleClass('open');
    });
    $('#leftFrame2, #qandaBox2').on('click', function () {
        $('#qandaBox2').toggleClass('open');
    });
    $('#leftFrame3, #qandaBox3').on('click', function () {
        $('#qandaBox3').toggleClass('open');
    });
    $('#leftFrame4, #qandaBox4').on('click', function () {
        $('#qandaBox4').toggleClass('open');
    });
})
// SPインストラクターページ:「Q＆A」開閉設定 ここまで

// SPインストラクターページ:「経歴」開閉設定 ここから
$(function () {
    $('#rightFrame1, #careerBox1').on('click', function () {
        $('#careerBox1').toggleClass('open');
    });
    $('#rightFrame2, #careerBox2').on('click', function () {
        $('#careerBox2').toggleClass('open');
    });
    $('#rightFrame3, #careerBox3').on('click', function () {
        $('#careerBox3').toggleClass('open');
    });
    $('#rightFrame4, #careerBox4').on('click', function () {
        $('#careerBox4').toggleClass('open');
    });
})
// SPインストラクターページ:「経歴」開閉設定 ここまで

// PCインストラクターページ:「Q＆A」開閉設定 ここから
$(function () {
    $('#pcLeftFrame1, #pcQandaBox1').hover(function () {
        $('#pcQandaBox1').toggleClass('open');
    });
    $('#pcLeftFrame2, #pcQandaBox2').hover(function () {
        $('#pcQandaBox2').toggleClass('open');
    });
    $('#pcLeftFrame3, #pcQandaBox3').hover(function () {
        $('#pcQandaBox3').toggleClass('open');
    });
    $('#pcLeftFrame4, #pcQandaBox4').hover(function () {
        $('#pcQandaBox4').toggleClass('open');
    });
})
// PCインストラクターページ:「Q＆A」開閉設定 ここまで

// PCインストラクターページ:「経歴」開閉設定 ここから
$(function () {
    $('#pcRightFrame1, #pcCareerBox1').hover(function () {
        $('#pcCareerBox1').toggleClass('open');
    });
    $('#pcRightFrame2, #pcCareerBox2').hover(function () {
        $('#pcCareerBox2').toggleClass('open');
    });
    $('#pcRightFrame3, #pcCareerBox3').hover(function () {
        $('#pcCareerBox3').toggleClass('open');
    });
    $('#pcRightFrame4, #pcCareerBox4').hover(function () {
        $('#pcCareerBox4').toggleClass('open');
    });
})
// PCインストラクターページ:「経歴」開閉設定 ここまで

// アトモスフィアページ:「生徒、保護者の声」開閉設定 ここから
$(function () {
    $('#student1').on('click', function () {
        $('#student1').addClass('bg1');
        $('#student2').removeClass('bg1');
        $('#student3').removeClass('bg1');
        $('#student4').removeClass('bg1');
        $('#voice__display1').addClass('open');
        $('#voice__display2').removeClass('open');
        $('#voice__display3').removeClass('open');
        $('#voice__display4').removeClass('open');
    });
    $('#student2').on('click', function () {
        $('#student1').removeClass('bg1');
        $('#student2').addClass('bg1');
        $('#student3').removeClass('bg1');
        $('#student4').removeClass('bg1');
        $('#voice__display1').removeClass('open');
        $('#voice__display2').addClass('open');
        $('#voice__display3').removeClass('open');
        $('#voice__display4').removeClass('open');
    });
    $('#student3').on('click', function () {
        $('#student1').removeClass('bg1');
        $('#student2').removeClass('bg1');
        $('#student3').addClass('bg1');
        $('#student4').removeClass('bg1');
        $('#voice__display1').removeClass('open');
        $('#voice__display2').removeClass('open');
        $('#voice__display3').addClass('open');
        $('#voice__display4').removeClass('open');
    });
    $('#student4').on('click', function () {
        $('#student1').removeClass('bg1');
        $('#student2').removeClass('bg1');
        $('#student3').removeClass('bg1');
        $('#student4').addClass('bg1');
        $('#voice__display1').removeClass('open');
        $('#voice__display2').removeClass('open');
        $('#voice__display3').removeClass('open');
        $('#voice__display4').addClass('open');
    });
})

$(window).on('load resize', function () {
    if (window.matchMedia('(min-width: 768px)').matches) {
        $('#parent1, #parent2').on('click', function () {
            $('#parent1').addClass('bg2');
            $('#parent2').addClass('bg2, bg3');
            $('#parent3').removeClass('bg2');
            $('#parent4').removeClass('bg2');
            $('#voice__display5').addClass('open');
            $('#voice__display6').addClass('open, open2');
            $('#voice__display7').removeClass('open');
            $('#voice__display8').removeClass('open');
        });
        $('#parent3, #parent4').on('click', function () {
            $('#parent1').removeClass('bg2');
            $('#parent2').removeClass('bg2, bg3');
            $('#parent3').addClass('bg2');
            $('#parent4').addClass('bg2');
            $('#voice__display5').removeClass('open');
            $('#voice__display6').removeClass('open, open2');
            $('#voice__display7').addClass('open');
            $('#voice__display8').addClass('open');
        });
    } else {
        $('#parent1').on('click', function () {
            $('#parent1').addClass('bg2');
            $('#parent2').removeClass('bg2');
            $('#parent3').removeClass('bg2');
            $('#parent4').removeClass('bg2');
            $('#voice__display5').addClass('open');
            $('#voice__display6').removeClass('open');
            $('#voice__display7').removeClass('open');
            $('#voice__display8').removeClass('open');
        });
        $('#parent2').on('click', function () {
            $('#parent1').removeClass('bg2');
            $('#parent2').addClass('bg2');
            $('#parent3').removeClass('bg2');
            $('#parent4').removeClass('bg2');
            $('#voice__display5').removeClass('open');
            $('#voice__display6').addClass('open');
            $('#voice__display7').removeClass('open');
            $('#voice__display8').removeClass('open');
        });
        $('#parent3').on('click', function () {
            $('#parent1').removeClass('bg2');
            $('#parent2').removeClass('bg2');
            $('#parent3').addClass('bg2');
            $('#parent4').removeClass('bg2');
            $('#voice__display5').removeClass('open');
            $('#voice__display6').removeClass('open');
            $('#voice__display7').addClass('open');
            $('#voice__display8').removeClass('open');
        });
        $('#parent4').on('click', function () {
            $('#parent1').removeClass('bg2');
            $('#parent2').removeClass('bg2');
            $('#parent3').removeClass('bg2');
            $('#parent4').addClass('bg2');
            $('#voice__display5').removeClass('open');
            $('#voice__display6').removeClass('open');
            $('#voice__display7').removeClass('open');
            $('#voice__display8').addClass('open');
        });
    }
});
// アトモスフィアページ:「生徒、保護者の声」開閉設定 ここまで