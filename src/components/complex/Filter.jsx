import React, { useEffect } from 'react';
import $ from 'jquery';
import '../../../public/js/rangeslider.min.js';
import jQueryBridget from 'jquery-bridget';
import Isotope from 'isotope-layout';

const Filter = () => {

    useEffect(() => {
        const recursiveSelector = (elementStack, index, csAndClasses, selectorArray) => {
            if (index === csAndClasses.length) {
                selectorArray.push(elementStack);
            } else {
                csAndClasses[index].forEach(element => {
                    recursiveSelector(elementStack + element, index + 1, csAndClasses, selectorArray);
                });
            }
        };
        
        const closeExpandedItem = () => {
            const currentTop = parseInt($('.cs-expand-detail').css("top"), 10);
            const currentDetailHeight = parseInt($('.cs-expand-detail').find(".cs-item-detail").css("height"), 10);
            const containerHeight = parseInt($('.cs-hfinder-container').css("height"), 10);
            
            $('.cs-expand-detail').find(".cs-item-detail, .icon-line-cross").css({
                opacity: 0
            });
        
            setTimeout(() => {
                $('.cs-hfinder-container > [class*="col-"]').addClass('cs-transition-top');
                $('.cs-expand-detail').removeClass("cs-expand-detail");
                
                $('.cs-hfinder-container > [class*="col-"]').each(function() {
                    const itemTop = parseInt($(this).css("top"), 10);
                    if (itemTop > currentTop) {
                        $(this).css({
                            top: itemTop - currentDetailHeight
                        });
                    }
                });
                
                $('.cs-hfinder-container').css({
                    height: containerHeight - currentDetailHeight
                });
                
                setTimeout(() => {
                    $('.cs-hfinder-container > [class*="col-"]').removeClass('cs-transition-top');
                }, 400);
            }, 400);
        };
        
        $(function() {
            $('.cs-hfinder-container > [class*="col-"]').on("click", function() {
                if ($('.cs-expand-detail').length > 0) {
                    if (!$(this).hasClass("cs-expand-detail")) {
                        closeExpandedItem();
                        var clickedItem = this;
                        setTimeout(function() {
                            $(clickedItem).addClass("cs-expand-detail");
                            $('.cs-hfinder-container > [class*="col-"]').addClass('cs-transition-top');
                            var currentLeft = parseInt($(clickedItem).position().left, 10);
                            var currentWidth = parseInt($(clickedItem).css("width"), 10);
                            $(clickedItem).find(".cs-item-detail").css({
                                "left": (currentLeft * -1)
                            });
                            $(clickedItem).find(".icon-line-cross").css({
                                "left": (currentWidth * 4) - 30 - currentLeft
                            });
                            var currentTop = parseInt($(clickedItem).css("top"), 10);
                            var currentDetailHeight = parseInt($(clickedItem).find(".cs-item-detail").css(
                                "height"), 10);
                            var containerHeight = parseInt($('.cs-hfinder-container').css("height"),
                                10);
                            $('.cs-hfinder-container > [class*="col-"]').each(function() {
                                var itemTop = parseInt($(this).css("top"), 10);
                                if (itemTop > currentTop) {
                                    $(this).css({
                                        "top": itemTop + currentDetailHeight
                                    });
                                }
                            });
                            $('.cs-hfinder-container').css({
                                "height": containerHeight + currentDetailHeight
                            });
                            setTimeout(function() {
                                $(clickedItem).find(".cs-item-detail, .icon-line-cross").css({
                                    "opacity": 1
                                });
                                $('.cs-hfinder-container > [class*="col-"]').removeClass(
                                    'cs-transition-top');
                            }, 400);
                        }, 1000);
                    }
                } else {
                    if (!$(this).hasClass("cs-expand-detail")) {
                        $(this).addClass("cs-expand-detail");
                        $('.cs-hfinder-container > [class*="col-"]').addClass('cs-transition-top');
                        var currentLeft = parseInt($(this).position().left, 10);
                        var currentWidth = parseInt($(this).css("width"), 10);
                        $(this).find(".cs-item-detail").css({
                            "left": (currentLeft * -1)
                        });
                        $(this).find(".icon-line-cross").css({
                            "left": (currentWidth * 4) - 30 - currentLeft
                        });
                        var currentTop = parseInt($(this).css("top"), 10);
                        var currentDetailHeight = parseInt($(this).find(".cs-item-detail").css("height"), 10);
                        var containerHeight = parseInt($('.cs-hfinder-container').css("height"), 10);
                        $('.cs-hfinder-container > [class*="col-"]').each(function() {
                            var itemTop = parseInt($(this).css("top"), 10);
                            if (itemTop > currentTop) {
                                $(this).css({
                                    "top": itemTop + currentDetailHeight
                                });
                            }
                        });
                        $('.cs-hfinder-container').css({
                            "height": containerHeight + currentDetailHeight
                        });
                        var clickedItem = this;
                        setTimeout(function() {
                            $(clickedItem).find(".cs-item-detail, .icon-line-cross").css({
                                "opacity": 1
                            });
                            $('.cs-hfinder-container > [class*="col-"]').removeClass(
                                'cs-transition-top');
                        }, 400);
                    }
                }
            });
        
            $("#cs-reset-button").on("click", function() {
                var elementContainer = $(this).parent().parent().parent().parent().parent().parent().parent()
                    .find('.cs-hfinder-container');
                $(this).parent().parent().parent().parent().parent().parent().parent().find(
                    'input[type=checkbox]').each(function() {
                    $(this).parent().eq(0).removeClass('disabled');
                    $(this).prop('checked', false);
                });
                $('#cs-a-alle').prop('checked', true);
                $(".range_01").data("ionRangeSlider").reset();
                $(".range_02").data("ionRangeSlider").reset();
                var rangeValue1 = $(this).parent().parent().parent().parent().parent().find('input.range_01').val();
                var rangeValue1Array = rangeValue1.split(';');
                var rangeValue2 = $(this).parent().parent().parent().parent().parent().find('input.range_02').val();
                var rangeValue2Array = rangeValue2.split(';');
                if ($('.cs-expand-detail').length > 0) {
                    $('.cs-expand-detail').find(".cs-item-detail, .icon-line-cross").css({
                        "opacity": 0
                    });
                    setTimeout(function() {
                        $('.cs-expand-detail').removeClass("cs-expand-detail");
                    }, 400);
                }
                elementContainer.isotope({
                    filter: function() {
                        var price = $(this).attr('cs-data-price');
                        var weight = $(this).attr('cs-data-weight');
        
                        return (
                            true &&
                            parseInt(price, 10) >= parseInt(rangeValue1Array[0], 10) &&
                            parseInt(price, 10) <= parseInt(rangeValue1Array[1], 10) &&
                            parseInt(weight, 10) >= parseInt(rangeValue2Array[0], 10) &&
                            parseInt(weight, 10) <= parseInt(rangeValue2Array[1], 10)
                        );
                    }
                });
            });
        
            $("#cs-expand-button").on("click", function() {
                if ($('.cs-hfinder-filter-row-toogle-fade').hasClass("cs-hfinder-filter-row-toogle-inactive")) {
                    $('.cs-hfinder-filter-row-toogle-fade').animate({
                        "opacity": 1
                    }, 200, () => {
                        $('.cs-hfinder-filter-row-toogle-fade').removeClass("cs-hfinder-filter-row-toogle-inactive");
                        $('#cs-hfinder-expandable').css({
                            "max-height": 1000
                        });
                        setTimeout(function() {
                            $("#cs-expand-button").html('Filter ausblenden');
                            $('.cs-hfinder-filter-row-toogle-fade').animate({
                                "opacity": 1
                            }, 10);
                        }, 30);
                    });
                } else {
                    $('.cs-hfinder-filter-row-toogle-fade').animate({
                        "opacity": 0
                    }, 200, () => {
                        $('.cs-hfinder-filter-row-toogle-fade').addClass("cs-hfinder-filter-row-toogle-inactive");
                        $('#cs-hfinder-expandable').css({
                            "max-height": 1000
                        });
                        setTimeout(function() {
                            $("#cs-expand-button").html('Mehr Filter anzeigen');
                            $('.cs-hfinder-filter-row-toogle-fade').animate({
                                "opacity": 0
                            }, 10);
                        }, 30);
                    });
                }
            });
            
            $(".cs-hfinder input").on("change", function() {
                if ($(this).attr('cs-data-filter') === '.cs-a-alle' && $(this).prop('checked')) {
                    $('#cs-a-favoriten').prop('checked', false);
                    $('#cs-a-mietgeräte').prop('checked', false);
                } else if ($(this).attr('cs-data-filter') === '.cs-a-alle' && !$(this).prop('checked')) {
                    $('#cs-a-alle').prop('checked', true);
                } else if (($(this).attr('cs-data-filter') === '.cs-a-favoriten' || $(this).attr(
                        'cs-data-filter') === '.cs-a-mietgeräte') && $(this).prop('checked')) {
                    $('#cs-a-alle').prop('checked', false);
                } else if ($(this).attr('cs-data-filter') === '.cs-a-favoriten' && !$(this).prop('checked') && !
                    $('#cs-a-mietgeräte').prop('checked')) {
                    $('#cs-a-alle').prop('checked', true);
                } else if ($(this).attr('cs-data-filter') === '.cs-a-mietgeräte' && !$(this).prop('checked') &&
                    !$('#cs-a-favoriten').prop('checked')) {
                    $('#cs-a-alle').prop('checked', true);
                }
                var elementContainer = $(this).parent().parent().parent().parent().parent().parent().parent()
                    .find('.cs-hfinder-container');
                var csAndClasses = [];
                $(this).parent().parent().parent().parent().parent().find('.cs-hfinder-filter-row').each(
                    function() {
                        var csOrSelector = [];
                        $(this).find('input:checked').each(function() {
                            csOrSelector.push($(this).attr('cs-data-filter'));
                        });
                        csAndClasses.push(csOrSelector);
                    });
                var trimmedAndClasses = [];
                csAndClasses.forEach(function(element) {
                    if (element.length > 0) {
                        trimmedAndClasses.push(element);
                    }
                });
                csAndClasses = trimmedAndClasses;
                var selectorArray = [];
                var selectorString = '';
                recursiveSelector('', 0, csAndClasses, selectorArray);
                selectorArray.forEach(function(selectorElement) {
                    if (selectorString !== '') {
                        selectorString += ', ';
                    }
                    selectorString += selectorElement;
                });
                var rangeValue1 = $(this).parent().parent().parent().parent().parent().find('input.range_01')
                    .val();
                var rangeValue1Array = rangeValue1.split(';');
                var rangeValue2 = $(this).parent().parent().parent().parent().parent().find('input.range_02')
                    .val();
                var rangeValue2Array = rangeValue2.split(';');
                if ($('.cs-expand-detail').length > 0) {
                    $('.cs-expand-detail').find(".cs-item-detail, .icon-line-cross").css({
                        "opacity": 0
                    });
                    setTimeout(function() {
                        $('.cs-expand-detail').removeClass("cs-expand-detail");
                    }, 400);
                }
                elementContainer.isotope({
                    filter: function() {
                        var price = $(this).attr('cs-data-price');
                        var weight = $(this).attr('cs-data-weight');
                        if (selectorString !== '') {
                            return (
                                $(this).is(selectorString) &&
                                parseInt(price, 10) >= parseInt(rangeValue1Array[0], 10) &&
                                parseInt(price, 10) <= parseInt(rangeValue1Array[1], 10) &&
                                parseInt(weight, 10) >= parseInt(rangeValue2Array[0], 10) &&
                                parseInt(weight, 10) <= parseInt(rangeValue2Array[1], 10)
                            );
                        } else {
                            return (
                                true &&
                                parseInt(price, 10) >= parseInt(rangeValue1Array[0], 10) &&
                                parseInt(price, 10) <= parseInt(rangeValue1Array[1], 10) &&
                                parseInt(weight, 10) >= parseInt(rangeValue2Array[0], 10) &&
                                parseInt(weight, 10) <= parseInt(rangeValue2Array[1], 10)
                            );
                        }
                    }
                });
                var clickedInput = this;
                setTimeout(function() {
                    $(".cs-hfinder .cs-hfinder-filter-row .cs-chip-container input:not(:checked)").each(
                        function(index, item) {
                            var csAndClasses = [];
                            $(clickedInput).parent().parent().parent().parent().parent().find(
                                '.cs-hfinder-filter-row').each(function() {
                                var csOrSelector = [];
                                $(this).find('input:checked').each(function() {
                                    csOrSelector.push($(this).attr(
                                        'cs-data-filter'));
                                });
                                if ($(item).parent().parent().parent().get(0).isSameNode(
                                        this)) {
                                    csOrSelector.push($(item).attr('cs-data-filter'));
                                }
                                csAndClasses.push(csOrSelector);
                            });
                            var trimmedAndClasses = [];
                            csAndClasses.forEach(function(element) {
                                if (element.length > 0) {
                                    trimmedAndClasses.push(element);
                                }
                            });
                            csAndClasses = trimmedAndClasses;
                            var selectorArray = [];
                            var selectorString = '';
                            recursiveSelector('', 0, csAndClasses, selectorArray);
                            selectorArray.forEach(function(selectorElement) {
                                if (selectorString !== '') {
                                    selectorString += ', ';
                                }
                                selectorString += selectorElement;
                            });
                            if ($(selectorString).length === 0) {
                                $(item).parent().eq(0).addClass('disabled');
                            } else {
                                $(item).parent().eq(0).removeClass('disabled');
                            }
                        });
                }, 600);
            });

            jQueryBridget('isotope', Isotope, $);   
            $('.cs-hfinder-container').isotope({
                filter: function() {
                    return true;
                }
            });
            var minPrice = parseInt($('.cs-hfinder-container > [class*="col-"]').eq(0).attr('cs-data-price'), 10);
            var maxPrice = parseInt($('.cs-hfinder-container > [class*="col-"]').eq(0).attr('cs-data-price'), 10);
            var minWeight = parseInt($('.cs-hfinder-container > [class*="col-"]').eq(0).attr('cs-data-weight'), 10);
            var maxWeight = parseInt($('.cs-hfinder-container > [class*="col-"]').eq(0).attr('cs-data-weight'), 10);

            $('.cs-hfinder-container > [class*="col-"]').each(function() {
                var itemPrice = parseInt($(this).attr('cs-data-price'), 10);
                if (itemPrice < minPrice) {
                    minPrice = itemPrice;
                }
                if (itemPrice > maxPrice) {
                    maxPrice = itemPrice;
                }
                var itemWeight = parseInt($(this).attr('cs-data-weight'), 10);
                if (itemWeight < minWeight) {
                    minWeight = itemWeight;
                }
                if (itemWeight > maxWeight) {
                    maxWeight = itemWeight;
                }
            });
        
            $(".range_01").ionRangeSlider({
                skin: "big",
                type: "double",
                prefix: "€ ",
                min: minPrice,
                max: maxPrice,
                from: minPrice,
                to: maxPrice,
                step: 10,
                hide_min_max: true,
                hide_from_to: false,
                prettify_enabled: true,
                prettify_separator: "."
            });
        
            $(".range_02").ionRangeSlider({
                skin: "big",
                type: "double",
                postfix: " g",
                min: minWeight,
                max: maxWeight,
                from: minWeight,
                to: maxWeight,
                step: 5,
                hide_min_max: true,
                hide_from_to: false,
                prettify_enabled: true,
                prettify_separator: "."
            });
        
            $("#cs-reset-button").on("click");
            $("#cs-gl-checked").on("click");
        });        
    }, []);   

    return null;
};

export default Filter;