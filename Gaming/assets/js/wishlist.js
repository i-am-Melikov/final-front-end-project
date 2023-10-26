;(function (Wishlist, $) {
    var $wishlistBtn = $('.wishremove');
    var $wishlistCart = $('.cart');
    var $wishcount = $('.wishcount');
    var numProductTiles = $wishlistCart.length;
    var wishlist = localStorage.getItem('wishtems') || [];
    var wishcountall = localStorage.getItem('wishtemscount');

    $wishcount.html(wishcountall == null ? 0 : wishcountall);

    if (wishlist.length > 0) {
        wishlist = JSON.parse(localStorage.getItem('wishtems'));
    }
    var animateWishlist = function (e) {
        $(e).toggleClass('wishactive');
    };
    var updateWishlist = function (self) {
        var productHandle = $(self).attr('data-product-handle');
        var isRemove = $(self).hasClass('wishactive');
        //var wishcountvalue = localStorage.getItem('wishtemscount');
        if (isRemove) {
            var removeIndex = wishlist.indexOf(productHandle);
                wishlist.splice(removeIndex, 1);
            var wishcountp = localStorage.getItem('wishtemscount');
            if(wishcountp != null){
                var minus_val = -1;
                var wish_ct = Math.max(parseInt(wishcountp) + minus_val, 0);
                localStorage.setItem('wishtemscount', wish_ct);
            }
            localStorage.setItem('wishtems', JSON.stringify(wishlist));
            //var icon_length = $(self).find("span").length;
            if($(self).find("span").length != 0){
                $wishlistBtn.html('<span class="addtowish"><svg><use xlink:href="#wish"></use></svg></span>');
            }
            //var wishcountp_value = localStorage.getItem('wishtemscount');
            $wishcount.html(localStorage.getItem('wishtemscount'));
        }
        else {
            wishlist.push(productHandle);
            var wishcountp = localStorage.getItem('wishtemscount');
            if(wishcountp == null){
                var plus_val = 1;
                var wish_ct = plus_val;
            }else{
            var plus_val = 1;
            var wish_ct = Math.max(parseInt(wishcountp) + plus_val, 0);
        }
            localStorage.setItem('wishtemscount',wish_ct);
            localStorage.setItem('wishtems', JSON.stringify(wishlist));
            var icon_length = $(self).find("span").length;
            if(icon_length != 0){
                $wishlistBtn.html('<span class="addtowish"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.1335 2.95108C16.73 4.16664 16.9557 6.44579 15.6274 7.93897L8.99983 15.3894L2.37233 7.93977C1.04381 6.44646 1.26946 4.167 2.86616 2.95128C4.50032 1.70704 6.87275 2.10393 7.99225 3.80885L8.36782 4.38082C8.59267 4.72325 9.05847 4.82238 9.40821 4.60224C9.51777 4.53328 9.60294 4.44117 9.66134 4.33666L10.0076 3.80914C11.1268 2.10394 13.4993 1.70679 15.1335 2.95108ZM8.99998 2.653C7.31724 0.526225 4.15516 0.102335 1.94184 1.78754C-0.33726 3.52284 -0.659353 6.77651 1.23696 8.90805L8.4334 16.9972C8.7065 17.3041 9.18204 17.3362 9.49557 17.0688C9.53631 17.0341 9.57231 16.996 9.60351 16.9553L16.7628 8.90721C18.6589 6.77579 18.3367 3.52246 16.0579 1.78734C13.8446 0.102142 10.6825 0.526185 8.99998 2.653Z" fill="white"></path></svg></span>');
            }
            var wishcountp_value = localStorage.getItem('wishtemscount');
            $wishcount.html(wishcountp_value);
        }
    };
    var activateWishItems = function () {
        $wishlistBtn.each(function () {
        var productHandle = $(this).attr('data-product-handle');
            if (wishlist.indexOf(productHandle) > -1) {
                $(this).addClass('wishactive');
                var icon_length = $(this).find("span").length;
                if($(this).hasClass('wishactive')){
                    if(icon_length != 0){
                        $(this).html('<span class="addtowish"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.1335 2.95108C16.73 4.16664 16.9557 6.44579 15.6274 7.93897L8.99983 15.3894L2.37233 7.93977C1.04381 6.44646 1.26946 4.167 2.86616 2.95128C4.50032 1.70704 6.87275 2.10393 7.99225 3.80885L8.36782 4.38082C8.59267 4.72325 9.05847 4.82238 9.40821 4.60224C9.51777 4.53328 9.60294 4.44117 9.66134 4.33666L10.0076 3.80914C11.1268 2.10394 13.4993 1.70679 15.1335 2.95108ZM8.99998 2.653C7.31724 0.526225 4.15516 0.102335 1.94184 1.78754C-0.33726 3.52284 -0.659353 6.77651 1.23696 8.90805L8.4334 16.9972C8.7065 17.3041 9.18204 17.3362 9.49557 17.0688C9.53631 17.0341 9.57231 16.996 9.60351 16.9553L16.7628 8.90721C18.6589 6.77579 18.3367 3.52246 16.0579 1.78734C13.8446 0.102142 10.6825 0.526185 8.99998 2.653Z" fill="white"></path></svg></span>');
                    }
                }else{
                    if(icon_length != 0){
                        $(this).html('<span class="addtowish"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.1335 2.95108C16.73 4.16664 16.9557 6.44579 15.6274 7.93897L8.99983 15.3894L2.37233 7.93977C1.04381 6.44646 1.26946 4.167 2.86616 2.95128C4.50032 1.70704 6.87275 2.10393 7.99225 3.80885L8.36782 4.38082C8.59267 4.72325 9.05847 4.82238 9.40821 4.60224C9.51777 4.53328 9.60294 4.44117 9.66134 4.33666L10.0076 3.80914C11.1268 2.10394 13.4993 1.70679 15.1335 2.95108ZM8.99998 2.653C7.31724 0.526225 4.15516 0.102335 1.94184 1.78754C-0.33726 3.52284 -0.659353 6.77651 1.23696 8.90805L8.4334 16.9972C8.7065 17.3041 9.18204 17.3362 9.49557 17.0688C9.53631 17.0341 9.57231 16.996 9.60351 16.9553L16.7628 8.90721C18.6589 6.77579 18.3367 3.52246 16.0579 1.78734C13.8446 0.102142 10.6825 0.526185 8.99998 2.653Z" fill="white"></path></svg></span>');
                    }
                }
            }
        });
    };
    var displayWishItems = function () {
        $wishlistCart.each(function () {
        var productHandle = $(this).attr('data-product-handle');
            if (wishlist.indexOf(productHandle) === -1) {
                $(this).remove();
                numProductTiles--;
            }
        });
    };
    var loadWishlist = function () {
        if (window.location.href.indexOf('pages/wishlist') > -1) {
        displayWishItems();
            $('.wishloader').fadeOut(2000, function () {
                $('.mainwish .wishlist-hero').addClass('wishvisible');
                //$('.wishlist-hero').addClass('wishvisible');
                if (numProductTiles == 0) {
                    $('.wishempty').addClass('wishvisible');
                    $('.mainwish').hide();
                } else {
                    $('.wishempty').hide();
                }
            });
        }
    };
    var bindUIActions = function () {
        $wishlistBtn.click(function (e) {
            e.preventDefault();
            updateWishlist(this);
            animateWishlist(this);
        });
    };
    Wishlist.init = function () {
        bindUIActions();
        activateWishItems();
        loadWishlist();
    };
    $("#wishcall").click(function(){
        //var raw = localStorage.getItem('wishtems');
        //var length = raw.length;
        var length = localStorage.getItem('wishtems').length;
        //var i;
        var productHandle = $(self).attr('data-product-handle');
        var isRemove = $(self).hasClass('wishactive');
        for ( var i=length-1; i>= 0; i--){
        var removeIndex = wishlist.indexOf(productHandle);
        wishlist.splice(removeIndex, 1);
        var wishcountp = localStorage.getItem('wishtemscount');
            if(wishcountp != null){
                var wish_ct = Math.max(parseInt(0), 0);
                localStorage.setItem('wishtemscount', wish_ct);
            }
            localStorage.setItem('wishtems', JSON.stringify(wishlist));
        }
        location.reload(true);
    });
}(window.Wishlist = window.Wishlist || {}, jQuery, undefined));
function reloadPage(){
    location.reload(true);
}