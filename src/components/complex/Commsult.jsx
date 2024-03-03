import React, { useEffect } from 'react';
import $ from 'jquery';

const openPopUp = (() => {
   window.commsult.popUp.haveOpened || (window.commsult.popUp.haveOpened = !0, $(document).width() > 575 ? $(".cs-popup").css({
      right: "0px",
      opacity: 1
   }) : $(".cs-popup").css({
      bottom: "0px",
      opacity: 1
   }))
});

const showHeader = (() => {
   $(document).width() >= 992 && (t && (window.commsult.navigation.isMouseOver = !0), window.commsult.navigation.isChanging = !0, $("#header").stop(!0), $("#header-wrap").stop(!0), $("#header").animate({
      height: "48px"
   }, 300, "swing"), $("#header-wrap").animate({
      top: "0px"
   }, 290, "swing", () => {
      window.commsult.navigation.isChanging = !1, window.commsult.navigation.isShowing = !0
   }))
});

const hideHeader = (() => {
});

const Commsult = () => {
   useEffect(() => {
      window.commsult = {
            navigation: {
               isShowing: !0,
               isMouseOver: !1,
               isChanging: !1,
               isExpanded: !1
            },
            super4: {
               line: 0,
               textLine: 0,
               rowHeight: $(window).height() - 101,
               rowCount: $(".cs-super-4 .row").length
            },
            super5: {
               initialExpanded: !1
            },
            popUp: {
               haveOpened: !1
            },
            custom21: {
               animationStarted: !1
            },
            custom22: {
               animationStarted: !1
            },
            custom24: {
               slideNumber: 1
            },
            contactOverlay: {
               isShowing: !1
            },
            impressumOverlay: {
               isShowing: !1
            },
            datenschutzOverlay: {
               isShowing: !1
            },
            mailregex: /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
      };
         
      var prevScroll = $(document).scrollTop();

      $("#cs-header-row-bottom .row").on("scroll", function() {
         0 === $("#cs-header-row-bottom .row").scrollLeft() ? $("#cs-header-row-bottom .row").addClass("cs-scroll-start") : $("#cs-header-row-bottom .row").scrollLeft() > $("#cs-header-row-bottom .cs-dropdown-logo").width() + 15 + $("#cs-header-row-bottom .cs-dropdown-submenu-wrapper").width() + 15 - $("#cs-header-row-bottom .row").width() - 1 ? $("#cs-header-row-bottom .row").addClass("cs-scroll-end") : ($(".cs-scroll-start").removeClass("cs-scroll-start"), $(".cs-scroll-end").removeClass("cs-scroll-end"))
      });

      var $w = $(window).on("scroll", function() {
         var t = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100,
            o = document.getElementById("cs-progress-bar");
         o && (o.style.width = t + "%");
         var e = $(document).scrollTop();
         if (document.documentElement.scrollHeight - window.innerHeight - e < 400 && openPopUp(), 0 == window.commsult.navigation.isChanging && (e < prevScroll ? !1 === window.commsult.navigation.isShowing && showHeader(!1)() : $w.scrollTop() > 8 && !0 === window.commsult.navigation.isShowing ? hideHeader() : $w.scrollTop() <= 8 && !1 === window.commsult.navigation.isShowing && showHeader()), prevScroll = e, $(document).width() >= 992 && window.commsult.super4.rowCount > $(".cs-super-4").length) {
            var n = window.commsult.super4.line > 0 ? -1 * ($(".cs-super-4").offset().top - 101 + window.commsult.super4.rowHeight * (window.commsult.super4.line - 1) - $w.scrollTop()) : null,
               a = window.commsult.super4.line <= window.commsult.super4.rowCount - 1 ? $(".cs-super-4").offset().top - 101 + window.commsult.super4.rowHeight * window.commsult.super4.line - $w.scrollTop() : null,
               s = window.commsult.super4.textLine > 0 ? -1 * ($(".cs-super-4").offset().top - 101 + window.commsult.super4.rowHeight * (window.commsult.super4.textLine - 1 + .5) - $w.scrollTop()) : null,
               c = window.commsult.super4.textLine < window.commsult.super4.rowCount - 1 ? $(".cs-super-4").offset().top - 101 + window.commsult.super4.rowHeight * (window.commsult.super4.textLine + .5) - $w.scrollTop() : null;
            a && a < 0 && (window.commsult.super4.line === window.commsult.super4.rowCount - 1 && ($(".cs-super-4 .cs-circle-wrapper").removeClass("cs-fixed"), $(".cs-super-4 .cs-circle-wrapper").css({
               top: window.commsult.super4.rowHeight * window.commsult.super4.rowCount - window.commsult.super4.rowHeight + "px"
            })), window.commsult.super4.line++, 1 === window.commsult.super4.line && $(".cs-super-4 .cs-circle-wrapper").addClass("cs-fixed")), n && n < 0 && (1 === window.commsult.super4.line && ($(".cs-super-4 .cs-circle-wrapper").removeClass("cs-fixed"), $(".cs-super-4 .cs-circle-wrapper").css({
               top: "0px"
            })), window.commsult.super4.line--, window.commsult.super4.line === window.commsult.super4.rowCount - 1 && $(".cs-super-4 .cs-circle-wrapper").addClass("cs-fixed")), c && c < 0 && ($(".cs-super-4 .cs-col-txt").eq(window.commsult.super4.textLine).removeClass("cs-active"), window.commsult.super4.textLine++, $(".cs-super-4 .cs-col-txt").eq(window.commsult.super4.textLine).addClass("cs-active")), s && s < 0 && ($(".cs-super-4 .cs-col-txt").eq(window.commsult.super4.textLine).removeClass("cs-active"), window.commsult.super4.textLine--, $(".cs-super-4 .cs-col-txt").eq(window.commsult.super4.textLine).addClass("cs-active"))
         }
         if ($(document).width() > 767 && ($("#footer.dark").each(function (t) {
               var o = $(this).offset().top;
               $(window).scrollTop() + $(window).height() > o && ($(".cs-logo-animate-c1").css({
                  animation: "cslogoanimatec1 4s",
                  "animation-fill-mode": "forwards"
               }), $(".cs-logo-animate-c2").css({
                  animation: "cslogoanimatec2 4s",
                  "animation-fill-mode": "forwards"
               }), $(".cs-logo-animate-letters").css({
                  animation: "cslogoanimateletters 4s",
                  "animation-fill-mode": "forwards"
               }))
            }), $(".cs-custom-15 .cs-img-circle").each(function (t) {
               var o = $(this).offset().top + ($(this).outerHeight() / 2 - 180);
               $(window).scrollTop() + $(window).height() > o && ($(".cs-custom-15").animate({
                  opacity: "1"
               }, 1500, "swing"), $(".cs-custom-15 .cs-img-circle").animate({
                  left: "0px"
               }, 1e3, "swing"), $(".cs-custom-15 .cs-heading-circle").animate({
                  left: "220px"
               }, 1e3, "swing"), $(".cs-custom-15 h1").delay(300).animate({
                  opacity: "1"
               }, 500, "swing"))
            }), $(".cs-custom-16 .cs-img-circle").each(function (t) {
               var o = $(this).offset().top + ($(this).outerHeight() / 2 - 180);
               $(window).scrollTop() + $(window).height() > o && ($(".cs-custom-16").animate({
                  opacity: "1"
               }, 1500, "swing"), $(".cs-custom-16 .cs-img-circle").animate({
                  left: "0px"
               }, 1e3, "swing"), $(".cs-custom-16 .cs-heading-circle").animate({
                  left: "180px"
               }, 1e3, "swing"), $(".cs-custom-16 h1").delay(300).animate({
                  opacity: "1"
               }, 500, "swing"))
            }), $("#cs-super-5 .cs-circle").each(function () {
               var t = $(this).offset().top + 150;
               $(window).scrollTop() + $(window).height() > t && ($("#cs-super-5 .cs-circle").animate({
                  opacity: "1"
               }, 500, "swing"), $("#cs-super-5 .cs-pointer").each(function (t) {
                  var o = this;
                  setTimeout(function () {
                     $(o).addClass("cs-animated")
                  }, 200 * t)
               }))
            }), $(".cs-custom-20").each(function (t) {
               var o = $(this).offset().top + ($(this).outerHeight() / 2 - 150);
               $(window).scrollTop() + $(window).height() > o && ($(".cs-custom-20 .cs-img-l-data").delay(400).animate({
                  opacity: "1"
               }, 500, "swing"), $(".cs-custom-20 .cs-img-l-process").delay(700).animate({
                  opacity: "1"
               }, 500, "swing"), $(".cs-custom-20 .cs-img-l-ux").delay(1e3).animate({
                  opacity: "1"
               }, 500, "swing"))
            }), $(".cs-custom-23").each(function (t) {
               var o = $(this).offset().top + ($(this).outerHeight() / 2 - 800);
               $(window).scrollTop() + $(window).height() > o && ($(".cs-custom-23 .cs-location-point1").delay(100).animate({
                  opacity: "1"
               }, 300, "swing"), $(".cs-custom-23 .cs-location-point2").delay(200).animate({
                  opacity: "1"
               }, 300, "swing"), $(".cs-custom-23 .cs-location-point3").delay(300).animate({
                  opacity: "1"
               }, 300, "swing"), $(".cs-custom-23 .cs-location-point4").delay(400).animate({
                  opacity: "1"
               }, 300, "swing"), $(".cs-custom-23 .cs-location-point5").delay(500).animate({
                  opacity: "1"
               }, 300, "swing"), $(".cs-custom-23 .cs-location-point6").delay(600).animate({
                  opacity: "1"
               }, 300, "swing"), $(".cs-custom-23 .cs-location-point7").delay(700).animate({
                  opacity: "1"
               }, 300, "swing"), $(".cs-custom-23 .cs-location-point8").delay(800).animate({
                  opacity: "1"
               }, 300, "swing"), $(".cs-custom-23 .cs-location-point9").delay(900).animate({
                  opacity: "1"
               }, 300, "swing"), $(".cs-custom-23 .cs-location-point10").delay(1e3).animate({
                  opacity: "1"
               }, 300, "swing"), $(".cs-custom-23 .cs-location-point11").delay(1100).animate({
                  opacity: "1"
               }, 300, "swing"), $(".cs-custom-23 .cs-location-point12").delay(1200).animate({
                  opacity: "1"
               }, 300, "swing"), $(".cs-custom-23 .cs-location-point13").delay(1300).animate({
                  opacity: "1"
               }, 300, "swing"), $(".cs-custom-23 .cs-location-point14").delay(1400).animate({
                  opacity: "1"
               }, 300, "swing"), $(".cs-custom-23 .cs-location-point15").delay(1500).animate({
                  opacity: "1"
               }, 300, "swing"), $(".cs-custom-23 .cs-location-point16").delay(1600).animate({
                  opacity: "1"
               }, 300, "swing"), $(".cs-custom-23 .cs-location-point17").delay(1700).animate({
                  opacity: "1"
               }, 300, "swing"), $(".cs-custom-23 .cs-location-point18").delay(1800).animate({
                  opacity: "1"
               }, 300, "swing"), $(".cs-custom-23 .cs-location-point19").delay(1900).animate({
                  opacity: "1"
               }, 300, "swing"), $(".cs-custom-23 .cs-location-point20").delay(2e3).animate({
                  opacity: "1"
               }, 300, "swing"), $(".cs-custom-23 .cs-location-point21").delay(2100).animate({
                  opacity: "1"
               }, 300, "swing"), $(".cs-custom-23 .cs-location-point22").delay(2200).animate({
                  opacity: "1"
               }, 300, "swing"), $(".cs-custom-23 .cs-location-point23").delay(2300).animate({
                  opacity: "1"
               }, 300, "swing"), $(".cs-custom-23 .cs-location-point24").delay(2400).animate({
                  opacity: "1"
               }, 300, "swing"))
            })), $(document).width() >= 992 && $(document).find(".cs-super-5").length > 0) {
            var i = $(".cs-super-5").offset().top;
            $(window).scrollTop() + $(window).height() > i && !window.commsult.super5.initialExpanded && (window.commsult.super5.initialExpanded = !0, $(".cs-pointer.cs-initial-expanded").delay(1400).addClass("cs-expanded"), $(".cs-pointer-top-padding").delay(1e3).animate({
               height: 50 * (6 - $(".cs-pointer.cs-initial-expanded").prevAll().length)
            }, 400, "swing"), $(".cs-pointer.cs-expanded .cs-header").delay(1400).animate({
               color: "#2D333D",
               fontSize: "30px",
               lineHeight: "36px"
            }, 400, "swing"), $(".cs-pointer.cs-expanded p").delay(1400).animate({
               maxHeight: "140px",
               marginTop: "16px"
            }, 400, "swing"), $(".cs-pointer.cs-expanded p").animate({
               opacity: "1"
            }, 400, "swing"), $(".cs-pointer.cs-expanded .cs-pointer-image").delay(1780).css({
               display: "block"
            }, 1, "swing"), $(".cs-pointer.cs-expanded .cs-pointer-image").animate({
               opacity: "1"
            }, 400, "swing"))
         }
         if ($(document).find(".cs-custom-21").length > 0) {
            i = $(".cs-custom-21").offset().top;
            $(window).scrollTop() + $(window).height() > i && !window.commsult.custom21.animationStarted && (window.commsult.custom21.animationStarted = !0, $(".cs-custom-21 .cs-label-offline").attr("data-content", "Offline"), $(".cs-custom-21 .cs-wrapper").css({
               display: "block"
            }), function t() {
               setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Offlin")
               }, 3900), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Offli")
               }, 4e3), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Offl")
               }, 4100), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Off")
               }, 4200), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Of")
               }, 4300), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "O")
               }, 4400), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "")
               }, 4500), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "C")
               }, 4600), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Co")
               }, 4700), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Com")
               }, 4800), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Comp")
               }, 4900), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Compl")
               }, 5e3), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Comple")
               }, 5100), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Complex")
               }, 5200), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Complex S")
               }, 5300), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Complex Sy")
               }, 5400), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Complex Syn")
               }, 5500), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Complex Sync")
               }, 5600), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Complex Sync +")
               }, 5700), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Complex Sync")
               }, 7700), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Complex Syn")
               }, 7800), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Complex Sy")
               }, 7900), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Complex S")
               }, 8e3), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Complex")
               }, 8100), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Comple")
               }, 8200), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Compl")
               }, 8300), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Comp")
               }, 8400), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Com")
               }, 8500), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Co")
               }, 8600), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "C")
               }, 8700), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "")
               }, 8800), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "O")
               }, 8900), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Of")
               }, 9e3), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Off")
               }, 9100), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Offl")
               }, 9200), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Offli")
               }, 9300), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Offlin")
               }, 9400), setTimeout(function () {
                  $(".cs-custom-21 .cs-label-offline").attr("data-content", "Offline")
               }, 9500), setTimeout(function () {
                  t()
               }, 1e4)
            }(), $(".cs-custom-21 .cs-wrapper").animate({
               opacity: "1"
            }, 200, "swing"))
         }
         if ($(document).find(".cs-custom-22").length > 0) {
            i = $(".cs-custom-22").offset().top + $(".cs-custom-22").outerHeight();
            $(window).scrollTop() + $(window).height() > i && !window.commsult.custom22.animationStarted && (window.commsult.custom22.animationStarted = !0, $(".cs-custom-22 .cs-umlagerung-button").attr("data-content", "Umlagerung"), $(".cs-custom-22 .cs-wrapper").css({
               display: "block"
            }), function t() {
               $(".cs-custom-22 .cs-umlagerung-button").attr("data-content", "Umlagerung"), setTimeout(function () {
                  $(".cs-custom-22 .cs-umlagerung-button").attr("data-content", "Los")
               }, 8e3), setTimeout(function () {
                  $(".cs-custom-22 .cs-umlagerung-button").attr("data-content", "OK")
               }, 16e3), setTimeout(function () {
                  t()
               }, 2e4)
            }(), $(".cs-custom-22 .cs-wrapper").animate({
               opacity: "1"
            }, 1e3, "swing"))
         }
      });

      if ($(document).width() < 768) {
         $("[data-animate]").removeAttr("data-animate");
      }

      $(window).on("load", function () {
         $(".cs-underline").addClass("anim")
      });
      }, []);  

   return null; 
};

export default Commsult;
