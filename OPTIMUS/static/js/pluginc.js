/*----------------------------------------------
    Index Of All Plugin Hera
------------------------------------------------

    @version         : 1.0.0
    @Template Name   : initBill - invoice & Receipt HTML Template.
    @Template author : https://themeforest.net/user/inittheme

    :: WOW
    :: Slick-Nav
    :: jspdf
    :: html2canvas

------------------------------------------------
    End-of Plugin
------------------------------------------------*/

/*----------------------------------------------
    WOW
----------------------------------------------*/
!(function() {
    var a, b, c, d, e, f = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, g = [].indexOf || function(a) {
        for (var b = 0, c = this.length; c > b; b++)
            if (b in this && this[b] === a)
                return b;
        return -1
    }
    ;
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) {
            var c, d;
            for (c in b)
                d = b[c],
                null == a[c] && (a[c] = d);
            return a
        }
        ,
        a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }
        ,
        a.prototype.createEvent = function(a, b, c, d) {
            var e;
            return null == b && (b = !1),
            null == c && (c = !1),
            null == d && (d = null),
            null != document.createEvent ? (e = document.createEvent("CustomEvent"),
            e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(),
            e.eventType = a) : e.eventName = a,
            e
        }
        ,
        a.prototype.emitEvent = function(a, b) {
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
        }
        ,
        a.prototype.addEvent = function(a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        }
        ,
        a.prototype.removeEvent = function(a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }
        ,
        a.prototype.innerHeight = function() {
            return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
        }
        ,
        a
    }(),
    c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() {
            this.keys = [],
            this.values = []
        }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys,
            b = d = 0,
            e = f.length; e > d; b = ++d)
                if (c = f[b],
                c === a)
                    return this.values[b]
        }
        ,
        a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys,
            c = e = 0,
            f = g.length; f > e; c = ++e)
                if (d = g[c],
                d === a)
                    return void (this.values[c] = b);
            return this.keys.push(a),
            this.values.push(b)
        }
        ,
        a
    }()),
    a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return a.notSupported = !0,
        a.prototype.observe = function() {}
        ,
        a
    }()),
    d = this.getComputedStyle || function(a, b) {
        return this.getPropertyValue = function(b) {
            var c;
            return "float" === b && (b = "styleFloat"),
            e.test(b) && b.replace(e, function(a, b) {
                return b.toUpperCase()
            }),
            (null != (c = a.currentStyle) ? c[b] : void 0) || null
        }
        ,
        this
    }
    ,
    e = /(\-([a-z]){1})/g,
    this.WOW = function() {
        function e(a) {
            null == a && (a = {}),
            this.scrollCallback = f(this.scrollCallback, this),
            this.scrollHandler = f(this.scrollHandler, this),
            this.resetAnimation = f(this.resetAnimation, this),
            this.start = f(this.start, this),
            this.scrolled = !0,
            this.config = this.util().extend(a, this.defaults),
            null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)),
            this.animationNameCache = new c,
            this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        },
        e.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement,
            "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start),
            this.finished = []
        }
        ,
        e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1,
            this.boxes = function() {
                var a, c, d, e;
                for (d = this.element.querySelectorAll("." + this.config.boxClass),
                e = [],
                a = 0,
                c = d.length; c > a; a++)
                    b = d[a],
                    e.push(b);
                return e
            }
            .call(this),
            this.all = function() {
                var a, c, d, e;
                for (d = this.boxes,
                e = [],
                a = 0,
                c = d.length; c > a; a++)
                    b = d[a],
                    e.push(b);
                return e
            }
            .call(this),
            this.boxes.length)
                if (this.disabled())
                    this.resetStyle();
                else
                    for (e = this.boxes,
                    c = 0,
                    d = e.length; d > c; c++)
                        b = e[c],
                        this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
            this.util().addEvent(window, "resize", this.scrollHandler),
            this.interval = setInterval(this.scrollCallback, 50)),
            this.config.live ? new a(function(a) {
                return function(b) {
                    var c, d, e, f, g;
                    for (g = [],
                    c = 0,
                    d = b.length; d > c; c++)
                        f = b[c],
                        g.push(function() {
                            var a, b, c, d;
                            for (c = f.addedNodes || [],
                            d = [],
                            a = 0,
                            b = c.length; b > a; a++)
                                e = c[a],
                                d.push(this.doSync(e));
                            return d
                        }
                        .call(a));
                    return g
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }
        ,
        e.prototype.stop = function() {
            return this.stopped = !0,
            this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
        }
        ,
        e.prototype.sync = function(b) {
            return a.notSupported ? this.doSync(this.element) : void 0
        }
        ,
        e.prototype.doSync = function(a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element),
            1 === a.nodeType) {
                for (a = a.parentNode || a,
                e = a.querySelectorAll("." + this.config.boxClass),
                f = [],
                c = 0,
                d = e.length; d > c; c++)
                    b = e[c],
                    g.call(this.all, b) < 0 ? (this.boxes.push(b),
                    this.all.push(b),
                    this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0),
                    f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        }
        ,
        e.prototype.show = function(a) {
            return this.applyStyle(a),
            a.className = a.className + " " + this.config.animateClass,
            null != this.config.callback && this.config.callback(a),
            this.util().emitEvent(a, this.wowEvent),
            this.util().addEvent(a, "animationend", this.resetAnimation),
            this.util().addEvent(a, "oanimationend", this.resetAnimation),
            this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation),
            a
        }
        ,
        e.prototype.applyStyle = function(a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"),
            c = a.getAttribute("data-wow-delay"),
            e = a.getAttribute("data-wow-iteration"),
            this.animate(function(f) {
                return function() {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }
        ,
        e.prototype.animate = function() {
            return "requestAnimationFrame"in window ? function(a) {
                return window.requestAnimationFrame(a)
            }
            : function(a) {
                return a()
            }
        }(),
        e.prototype.resetStyle = function() {
            var a, b, c, d, e;
            for (d = this.boxes,
            e = [],
            b = 0,
            c = d.length; c > b; b++)
                a = d[b],
                e.push(a.style.visibility = "visible");
            return e
        }
        ,
        e.prototype.resetAnimation = function(a) {
            var b;
            return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement,
            b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
        }
        ,
        e.prototype.customStyle = function(a, b, c, d, e) {
            return b && this.cacheAnimationName(a),
            a.style.visibility = b ? "hidden" : "visible",
            c && this.vendorSet(a.style, {
                animationDuration: c
            }),
            d && this.vendorSet(a.style, {
                animationDelay: d
            }),
            e && this.vendorSet(a.style, {
                animationIterationCount: e
            }),
            this.vendorSet(a.style, {
                animationName: b ? "none" : this.cachedAnimationName(a)
            }),
            a
        }
        ,
        e.prototype.vendors = ["moz", "webkit"],
        e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            d = [];
            for (c in b)
                e = b[c],
                a["" + c] = e,
                d.push(function() {
                    var b, d, g, h;
                    for (g = this.vendors,
                    h = [],
                    b = 0,
                    d = g.length; d > b; b++)
                        f = g[b],
                        h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                    return h
                }
                .call(this));
            return d
        }
        ,
        e.prototype.vendorCSS = function(a, b) {
            var c, e, f, g, h, i;
            for (h = d(a),
            g = h.getPropertyCSSValue(b),
            f = this.vendors,
            c = 0,
            e = f.length; e > c; c++)
                i = f[c],
                g = g || h.getPropertyCSSValue("-" + i + "-" + b);
            return g
        }
        ,
        e.prototype.animationName = function(a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = d(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }
        ,
        e.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }
        ,
        e.prototype.cachedAnimationName = function(a) {
            return this.animationNameCache.get(a)
        }
        ,
        e.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }
        ,
        e.prototype.scrollCallback = function() {
            var a;
            return !this.scrolled || (this.scrolled = !1,
            this.boxes = function() {
                var b, c, d, e;
                for (d = this.boxes,
                e = [],
                b = 0,
                c = d.length; c > b; b++)
                    a = d[b],
                    a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }
            .call(this),
            this.boxes.length || this.config.live) ? void 0 : this.stop()
        }
        ,
        e.prototype.offsetTop = function(a) {
            for (var b; void 0 === a.offsetTop; )
                a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent; )
                b += a.offsetTop;
            return b
        }
        ,
        e.prototype.isVisible = function(a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset,
            f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
            e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c,
            d = this.offsetTop(a),
            b = d + a.clientHeight,
            e >= d && b >= f
        }
        ,
        e.prototype.util = function() {
            return null != this._util ? this._util : this._util = new b
        }
        ,
        e.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }
        ,
        e
    }()
}
).call(this);

/*----------------------------------------------
    Slick-Nav
----------------------------------------------*/
!function(e, t, n) {
    function a(t, n) {
        this.element = t,
        this.settings = e.extend({}, i, n),
        this.settings.duplicate || n.hasOwnProperty("removeIds") || (this.settings.removeIds = !1),
        this._defaults = i,
        this._name = s,
        this.init()
    }
    var i = {
        label: "MENU",
        duplicate: !0,
        duration: 200,
        easingOpen: "swing",
        easingClose: "swing",
        closedSymbol: "&#9658;",
        openedSymbol: "&#9660;",
        prependTo: "body",
        appendTo: "",
        parentTag: "a",
        closeOnClick: !1,
        allowParentLinks: !1,
        nestedParentLinks: !0,
        showChildren: !1,
        removeIds: !0,
        removeClasses: !1,
        removeStyles: !1,
        brand: "",
        animations: "jquery",
        init: function() {},
        beforeOpen: function() {},
        beforeClose: function() {},
        afterOpen: function() {},
        afterClose: function() {}
    }
      , s = "slicknav"
      , o = "slicknav"
      , l = {
        DOWN: 40,
        ENTER: 13,
        ESCAPE: 27,
        LEFT: 37,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    };
    a.prototype.init = function() {
        var n, a, i = this, s = e(this.element), r = this.settings;
        if (r.duplicate ? i.mobileNav = s.clone() : i.mobileNav = s,
        r.removeIds && (i.mobileNav.removeAttr("id"),
        i.mobileNav.find("*").each(function(t, n) {
            e(n).removeAttr("id")
        })),
        r.removeClasses && (i.mobileNav.removeAttr("class"),
        i.mobileNav.find("*").each(function(t, n) {
            e(n).removeAttr("class")
        })),
        r.removeStyles && (i.mobileNav.removeAttr("style"),
        i.mobileNav.find("*").each(function(t, n) {
            e(n).removeAttr("style")
        })),
        n = o + "_icon",
        "" === r.label && (n += " " + o + "_no-text"),
        "a" == r.parentTag && (r.parentTag = 'a href="#"'),
        i.mobileNav.attr("class", o + "_nav"),
        a = e('<div class="' + o + '_menu"></div>'),
        "" !== r.brand) {
            var c = e('<div class="' + o + '_brand">' + r.brand + "</div>");
            e(a).append(c)
        }
        i.btn = e(["<" + r.parentTag + ' aria-haspopup="true" role="button" tabindex="0" class="' + o + "_btn " + o + '_collapsed">', '<span class="' + o + '_menutxt">' + r.label + "</span>", '<span class="' + n + '">', '<span class="' + o + '_icon-bar"></span>', '<span class="' + o + '_icon-bar"></span>', '<span class="' + o + '_icon-bar"></span>', "</span>", "</" + r.parentTag + ">"].join("")),
        e(a).append(i.btn),
        "" !== r.appendTo ? e(r.appendTo).append(a) : e(r.prependTo).prepend(a),
        a.append(i.mobileNav);
        var p = i.mobileNav.find("li");
        e(p).each(function() {
            var t = e(this)
              , n = {};
            if (n.children = t.children("ul").attr("role", "menu"),
            t.data("menu", n),
            n.children.length > 0) {
                var a = t.contents()
                  , s = !1
                  , l = [];
                e(a).each(function() {
                    return e(this).is("ul") ? !1 : (l.push(this),
                    void (e(this).is("a") && (s = !0)))
                });
                var c = e("<" + r.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + o + '_item"/>');
                if (r.allowParentLinks && !r.nestedParentLinks && s)
                    e(l).wrapAll('<span class="' + o + "_parent-link " + o + '_row"/>').parent();
                else {
                    var p = e(l).wrapAll(c).parent();
                    p.addClass(o + "_row")
                }
                r.showChildren ? t.addClass(o + "_open") : t.addClass(o + "_collapsed"),
                t.addClass(o + "_parent");
                var d = e('<span class="' + o + '_arrow">' + (r.showChildren ? r.openedSymbol : r.closedSymbol) + "</span>");
                r.allowParentLinks && !r.nestedParentLinks && s && (d = d.wrap(c).parent()),
                e(l).last().after(d)
            } else
                0 === t.children().length && t.addClass(o + "_txtnode");
            t.children("a").attr("role", "menuitem").click(function(t) {
                r.closeOnClick && !e(t.target).parent().closest("li").hasClass(o + "_parent") && e(i.btn).click()
            }),
            r.closeOnClick && r.allowParentLinks && (t.children("a").children("a").click(function(t) {
                e(i.btn).click()
            }),
            t.find("." + o + "_parent-link a:not(." + o + "_item)").click(function(t) {
                e(i.btn).click()
            }))
        }),
        e(p).each(function() {
            var t = e(this).data("menu");
            r.showChildren || i._visibilityToggle(t.children, null, !1, null, !0)
        }),
        i._visibilityToggle(i.mobileNav, null, !1, "init", !0),
        i.mobileNav.attr("role", "menu"),
        e(t).mousedown(function() {
            i._outlines(!1)
        }),
        e(t).keyup(function() {
            i._outlines(!0)
        }),
        e(i.btn).click(function(e) {
            e.preventDefault(),
            i._menuToggle()
        }),
        i.mobileNav.on("click", "." + o + "_item", function(t) {
            t.preventDefault(),
            i._itemClick(e(this))
        }),
        e(i.btn).keydown(function(t) {
            var n = t || event;
            switch (n.keyCode) {
            case l.ENTER:
            case l.SPACE:
            case l.DOWN:
                t.preventDefault(),
                n.keyCode === l.DOWN && e(i.btn).hasClass(o + "_open") || i._menuToggle(),
                e(i.btn).next().find('[role="menuitem"]').first().focus()
            }
        }),
        i.mobileNav.on("keydown", "." + o + "_item", function(t) {
            var n = t || event;
            switch (n.keyCode) {
            case l.ENTER:
                t.preventDefault(),
                i._itemClick(e(t.target));
                break;
            case l.RIGHT:
                t.preventDefault(),
                e(t.target).parent().hasClass(o + "_collapsed") && i._itemClick(e(t.target)),
                e(t.target).next().find('[role="menuitem"]').first().focus()
            }
        }),
        i.mobileNav.on("keydown", '[role="menuitem"]', function(t) {
            var n = t || event;
            switch (n.keyCode) {
            case l.DOWN:
                t.preventDefault();
                var a = e(t.target).parent().parent().children().children('[role="menuitem"]:visible')
                  , s = a.index(t.target)
                  , r = s + 1;
                a.length <= r && (r = 0);
                var c = a.eq(r);
                c.focus();
                break;
            case l.UP:
                t.preventDefault();
                var a = e(t.target).parent().parent().children().children('[role="menuitem"]:visible')
                  , s = a.index(t.target)
                  , c = a.eq(s - 1);
                c.focus();
                break;
            case l.LEFT:
                if (t.preventDefault(),
                e(t.target).parent().parent().parent().hasClass(o + "_open")) {
                    var p = e(t.target).parent().parent().prev();
                    p.focus(),
                    i._itemClick(p)
                } else
                    e(t.target).parent().parent().hasClass(o + "_nav") && (i._menuToggle(),
                    e(i.btn).focus());
                break;
            case l.ESCAPE:
                t.preventDefault(),
                i._menuToggle(),
                e(i.btn).focus()
            }
        }),
        r.allowParentLinks && r.nestedParentLinks && e("." + o + "_item a").click(function(e) {
            e.stopImmediatePropagation()
        })
    }
    ,
    a.prototype._menuToggle = function(e) {
        var t = this
          , n = t.btn
          , a = t.mobileNav;
        n.hasClass(o + "_collapsed") ? (n.removeClass(o + "_collapsed"),
        n.addClass(o + "_open")) : (n.removeClass(o + "_open"),
        n.addClass(o + "_collapsed")),
        n.addClass(o + "_animating"),
        t._visibilityToggle(a, n.parent(), !0, n)
    }
    ,
    a.prototype._itemClick = function(e) {
        var t = this
          , n = t.settings
          , a = e.data("menu");
        a || (a = {},
        a.arrow = e.children("." + o + "_arrow"),
        a.ul = e.next("ul"),
        a.parent = e.parent(),
        a.parent.hasClass(o + "_parent-link") && (a.parent = e.parent().parent(),
        a.ul = e.parent().next("ul")),
        e.data("menu", a)),
        a.parent.hasClass(o + "_collapsed") ? (a.arrow.html(n.openedSymbol),
        a.parent.removeClass(o + "_collapsed"),
        a.parent.addClass(o + "_open"),
        a.parent.addClass(o + "_animating"),
        t._visibilityToggle(a.ul, a.parent, !0, e)) : (a.arrow.html(n.closedSymbol),
        a.parent.addClass(o + "_collapsed"),
        a.parent.removeClass(o + "_open"),
        a.parent.addClass(o + "_animating"),
        t._visibilityToggle(a.ul, a.parent, !0, e))
    }
    ,
    a.prototype._visibilityToggle = function(t, n, a, i, s) {
        function l(t, n) {
            e(t).removeClass(o + "_animating"),
            e(n).removeClass(o + "_animating"),
            s || p.afterOpen(t)
        }
        function r(n, a) {
            t.attr("aria-hidden", "true"),
            d.attr("tabindex", "-1"),
            c._setVisAttr(t, !0),
            t.hide(),
            e(n).removeClass(o + "_animating"),
            e(a).removeClass(o + "_animating"),
            s ? "init" == n && p.init() : p.afterClose(n)
        }
        var c = this
          , p = c.settings
          , d = c._getActionItems(t)
          , u = 0;
        a && (u = p.duration),
        t.hasClass(o + "_hidden") ? (t.removeClass(o + "_hidden"),
        s || p.beforeOpen(i),
        "jquery" === p.animations ? t.stop(!0, !0).slideDown(u, p.easingOpen, function() {
            l(i, n)
        }) : "velocity" === p.animations && t.velocity("finish").velocity("slideDown", {
            duration: u,
            easing: p.easingOpen,
            complete: function() {
                l(i, n)
            }
        }),
        t.attr("aria-hidden", "false"),
        d.attr("tabindex", "0"),
        c._setVisAttr(t, !1)) : (t.addClass(o + "_hidden"),
        s || p.beforeClose(i),
        "jquery" === p.animations ? t.stop(!0, !0).slideUp(u, this.settings.easingClose, function() {
            r(i, n)
        }) : "velocity" === p.animations && t.velocity("finish").velocity("slideUp", {
            duration: u,
            easing: p.easingClose,
            complete: function() {
                r(i, n)
            }
        }))
    }
    ,
    a.prototype._setVisAttr = function(t, n) {
        var a = this
          , i = t.children("li").children("ul").not("." + o + "_hidden");
        n ? i.each(function() {
            var t = e(this);
            t.attr("aria-hidden", "true");
            var i = a._getActionItems(t);
            i.attr("tabindex", "-1"),
            a._setVisAttr(t, n)
        }) : i.each(function() {
            var t = e(this);
            t.attr("aria-hidden", "false");
            var i = a._getActionItems(t);
            i.attr("tabindex", "0"),
            a._setVisAttr(t, n)
        })
    }
    ,
    a.prototype._getActionItems = function(e) {
        var t = e.data("menu");
        if (!t) {
            t = {};
            var n = e.children("li")
              , a = n.find("a");
            t.links = a.add(n.find("." + o + "_item")),
            e.data("menu", t)
        }
        return t.links
    }
    ,
    a.prototype._outlines = function(t) {
        t ? e("." + o + "_item, ." + o + "_btn").css("outline", "") : e("." + o + "_item, ." + o + "_btn").css("outline", "none")
    }
    ,
    a.prototype.toggle = function() {
        var e = this;
        e._menuToggle()
    }
    ,
    a.prototype.open = function() {
        var e = this;
        e.btn.hasClass(o + "_collapsed") && e._menuToggle()
    }
    ,
    a.prototype.close = function() {
        var e = this;
        e.btn.hasClass(o + "_open") && e._menuToggle()
    }
    ,
    e.fn[s] = function(t) {
        var n = arguments;
        if (void 0 === t || "object" == typeof t)
            return this.each(function() {
                e.data(this, "plugin_" + s) || e.data(this, "plugin_" + s, new a(this,t))
            });
        if ("string" == typeof t && "_" !== t[0] && "init" !== t) {
            var i;
            return this.each(function() {
                var o = e.data(this, "plugin_" + s);
                o instanceof a && "function" == typeof o[t] && (i = o[t].apply(o, Array.prototype.slice.call(n, 1)))
            }),
            void 0 !== i ? i : this
        }
    }
}(jQuery, document, window);

/*----------------------------------------------
    jspdf
----------------------------------------------*/
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.jspdf = e()
}(this, function() {
    "use strict";
    var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    }
      , e = function(e) {
        var n = "1.3"
          , r = {
            a0: [2383.94, 3370.39],
            a1: [1683.78, 2383.94],
            a2: [1190.55, 1683.78],
            a3: [841.89, 1190.55],
            a4: [595.28, 841.89],
            a5: [419.53, 595.28],
            a6: [297.64, 419.53],
            a7: [209.76, 297.64],
            a8: [147.4, 209.76],
            a9: [104.88, 147.4],
            a10: [73.7, 104.88],
            b0: [2834.65, 4008.19],
            b1: [2004.09, 2834.65],
            b2: [1417.32, 2004.09],
            b3: [1000.63, 1417.32],
            b4: [708.66, 1000.63],
            b5: [498.9, 708.66],
            b6: [354.33, 498.9],
            b7: [249.45, 354.33],
            b8: [175.75, 249.45],
            b9: [124.72, 175.75],
            b10: [87.87, 124.72],
            c0: [2599.37, 3676.54],
            c1: [1836.85, 2599.37],
            c2: [1298.27, 1836.85],
            c3: [918.43, 1298.27],
            c4: [649.13, 918.43],
            c5: [459.21, 649.13],
            c6: [323.15, 459.21],
            c7: [229.61, 323.15],
            c8: [161.57, 229.61],
            c9: [113.39, 161.57],
            c10: [79.37, 113.39],
            dl: [311.81, 623.62],
            letter: [612, 792],
            "government-letter": [576, 756],
            legal: [612, 1008],
            "junior-legal": [576, 360],
            ledger: [1224, 792],
            tabloid: [792, 1224],
            "credit-card": [153, 243]
        };
        function i(t) {
            var n = {};
            this.subscribe = function(t, e, r) {
                if ("function" != typeof e)
                    return !1;
                n.hasOwnProperty(t) || (n[t] = {});
                var i = Math.random().toString(35);
                return n[t][i] = [e, !!r],
                i
            }
            ,
            this.unsubscribe = function(t) {
                for (var e in n)
                    if (n[e][t])
                        return delete n[e][t],
                        !0;
                return !1
            }
            ,
            this.publish = function(r) {
                if (n.hasOwnProperty(r)) {
                    var i = Array.prototype.slice.call(arguments, 1)
                      , o = [];
                    for (var s in n[r]) {
                        var a = n[r][s];
                        try {
                            a[0].apply(t, i)
                        } catch (t) {
                            e.console && console.error("jsPDF PubSub Error", t.message, t)
                        }
                        a[1] && o.push(s)
                    }
                    o.length && o.forEach(this.unsubscribe)
                }
            }
        }
        function o(s, a, c, l) {
            var u = {};
            "object" === (void 0 === s ? "undefined" : t(s)) && (s = (u = s).orientation,
            a = u.unit || a,
            c = u.format || c,
            l = u.compress || u.compressPdf || l),
            a = a || "mm",
            c = c || "a4",
            s = ("" + (s || "P")).toLowerCase();
            ("" + c).toLowerCase();
            var h, f, d, p, g, m, w, y, v, b, x = !!l && "function" == typeof Uint8Array, k = u.textColor || "0 g", _ = u.drawColor || "0 G", C = u.fontSize || 16, S = u.lineHeight || 1.15, T = u.lineWidth || .200025, I = 2, P = !1, E = [], O = {}, F = {}, R = 0, B = [], D = [], j = [], N = [], z = [], L = 0, M = 0, U = 0, H = {
                title: "",
                subject: "",
                author: "",
                keywords: "",
                creator: ""
            }, W = {}, X = new i(W), V = function(t) {
                return t.toFixed(2)
            }, Y = function(t) {
                return t.toFixed(3)
            }, G = function(t) {
                return ("0" + parseInt(t)).slice(-2)
            }, J = function(t) {
                P ? B[p].push(t) : (U += t.length + 1,
                N.push(t))
            }, Q = function() {
                return E[++I] = U,
                J(I + " 0 obj"),
                I
            }, K = function(t) {
                J("stream"),
                J(t),
                J("endstream")
            }, $ = function() {
                for (var t in J("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),
                J("/Font <<"),
                O)
                    O.hasOwnProperty(t) && J("/" + t + " " + O[t].objectNumber + " 0 R");
                J(">>"),
                J("/XObject <<"),
                X.publish("putXobjectDict"),
                J(">>")
            }, Z = function() {
                !function() {
                    for (var t in O)
                        O.hasOwnProperty(t) && ((e = O[t]).objectNumber = Q(),
                        J("<</BaseFont/" + e.PostScriptName + "/Type/Font"),
                        "string" == typeof e.encoding && J("/Encoding/" + e.encoding),
                        J("/Subtype/Type1>>"),
                        J("endobj"));
                    var e
                }(),
                X.publish("putResources"),
                E[2] = U,
                J("2 0 obj"),
                J("<<"),
                $(),
                J(">>"),
                J("endobj"),
                X.publish("postPutResources")
            }, tt = function(t, e, n) {
                F.hasOwnProperty(e) || (F[e] = {}),
                F[e][n] = t
            }, et = function(t, e, n, r) {
                var i = "F" + (Object.keys(O).length + 1).toString(10)
                  , o = O[i] = {
                    id: i,
                    PostScriptName: t,
                    fontName: e,
                    fontStyle: n,
                    encoding: r,
                    metadata: {}
                };
                return tt(i, e, n),
                X.publish("addFont", o),
                i
            }, nt = function(t, e) {
                return function(t, e) {
                    var n, r, i, o, s, a, c, l, u;
                    if (i = (e = e || {}).sourceEncoding || "Unicode",
                    s = e.outputEncoding,
                    (e.autoencode || s) && O[h].metadata && O[h].metadata[i] && O[h].metadata[i].encoding && (o = O[h].metadata[i].encoding,
                    !s && O[h].encoding && (s = O[h].encoding),
                    !s && o.codePages && (s = o.codePages[0]),
                    "string" == typeof s && (s = o[s]),
                    s)) {
                        for (c = !1,
                        a = [],
                        n = 0,
                        r = t.length; n < r; n++)
                            (l = s[t.charCodeAt(n)]) ? a.push(String.fromCharCode(l)) : a.push(t[n]),
                            a[n].charCodeAt(0) >> 8 && (c = !0);
                        t = a.join("")
                    }
                    for (n = t.length; void 0 === c && 0 !== n; )
                        t.charCodeAt(n - 1) >> 8 && (c = !0),
                        n--;
                    if (!c)
                        return t;
                    for (a = e.noBOM ? [] : [254, 255],
                    n = 0,
                    r = t.length; n < r; n++) {
                        if ((u = (l = t.charCodeAt(n)) >> 8) >> 8)
                            throw new Error("Character at position " + n + " of string '" + t + "' exceeds 16bits. Cannot be encoded into Utm_2 BE");
                        a.push(u),
                        a.push(l - (u << 8))
                    }
                    return String.fromCharCode.apply(void 0, a)
                }(t, e).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
            }, rt = function() {
                (function(t, e) {
                    var n = "string" == typeof e && e.toLowerCase();
                    if ("string" == typeof t) {
                        var i = t.toLowerCase();
                        r.hasOwnProperty(i) && (t = r[i][0] / f,
                        e = r[i][1] / f)
                    }
                    if (Array.isArray(t) && (e = t[1],
                    t = t[0]),
                    n) {
                        switch (n.substr(0, 1)) {
                        case "l":
                            e > t && (n = "s");
                            break;
                        case "p":
                            t > e && (n = "s")
                        }
                        "s" === n && (d = t,
                        t = e,
                        e = d)
                    }
                    P = !0,
                    B[++R] = [],
                    j[R] = {
                        width: Number(t) || g,
                        height: Number(e) || m
                    },
                    D[R] = {},
                    it(R)
                }
                ).apply(this, arguments),
                J(V(T * f) + " w"),
                J(_),
                0 !== L && J(L + " J"),
                0 !== M && J(M + " j"),
                X.publish("addPage", {
                    pageNumber: R
                })
            }, it = function(t) {
                t > 0 && t <= R && (p = t,
                g = j[t].width,
                m = j[t].height)
            }, ot = function(t, e) {
                var n;
                switch (t = void 0 !== t ? t : O[h].fontName,
                e = void 0 !== e ? e : O[h].fontStyle,
                void 0 !== t && (t = t.toLowerCase()),
                t) {
                case "sans-serif":
                case "verdana":
                case "arial":
                case "helvetica":
                    t = "helvetica";
                    break;
                case "fixed":
                case "monospace":
                case "terminal":
                case "courier":
                    t = "courier";
                    break;
                case "serif":
                case "cursive":
                case "fantasy":
                default:
                    t = "times"
                }
                try {
                    n = F[t][e]
                } catch (t) {}
                return n || null == (n = F.times[e]) && (n = F.times.normal),
                n
            }, st = function() {
                P = !1,
                I = 2,
                U = 0,
                N = [],
                E = [],
                z = [],
                X.publish("buildDocument"),
                J("%PDF-" + n),
                function() {
                    var t, n, r, i, s, a, c, l, u, h = [];
                    for (c = e.adler32cs || o.adler32cs,
                    x && void 0 === c && (x = !1),
                    t = 1; t <= R; t++) {
                        if (h.push(Q()),
                        l = (g = j[t].width) * f,
                        u = (m = j[t].height) * f,
                        J("<</Type /Page"),
                        J("/Parent 1 0 R"),
                        J("/Resources 2 0 R"),
                        J("/MediaBox [0 0 " + V(l) + " " + V(u) + "]"),
                        X.publish("putPage", {
                            pageNumber: t,
                            page: B[t]
                        }),
                        J("/Contents " + (I + 1) + " 0 R"),
                        J(">>"),
                        J("endobj"),
                        n = B[t].join("\n"),
                        Q(),
                        x) {
                            for (r = [],
                            i = n.length; i--; )
                                r[i] = n.charCodeAt(i);
                            a = c.from(n),
                            (s = new q(6)).append(new Uint8Array(r)),
                            n = s.flush(),
                            (r = new Uint8Array(n.length + 6)).set(new Uint8Array([120, 156])),
                            r.set(n, 2),
                            r.set(new Uint8Array([255 & a, a >> 8 & 255, a >> 16 & 255, a >> 24 & 255]), n.length + 2),
                            n = String.fromCharCode.apply(null, r),
                            J("<</Length " + n.length + " /Filter [/FlateDecode]>>")
                        } else
                            J("<</Length " + n.length + ">>");
                        K(n),
                        J("endobj")
                    }
                    E[1] = U,
                    J("1 0 obj"),
                    J("<</Type /Pages");
                    var d = "/Kids [";
                    for (i = 0; i < R; i++)
                        d += h[i] + " 0 R ";
                    J(d + "]"),
                    J("/Count " + R),
                    J(">>"),
                    J("endobj"),
                    X.publish("postPutPages")
                }(),
                function() {
                    X.publish("putAdditionalObjects");
                    for (var t = 0; t < z.length; t++) {
                        var e = z[t];
                        E[e.objId] = U,
                        J(e.objId + " 0 obj"),
                        J(e.content),
                        J("endobj")
                    }
                    I += z.length,
                    X.publish("postPutAdditionalObjects")
                }(),
                Z(),
                Q(),
                J("<<"),
                function() {
                    for (var t in J("/Producer (jsPDF " + o.version + ")"),
                    H)
                        H.hasOwnProperty(t) && H[t] && J("/" + t.substr(0, 1).toUpperCase() + t.substr(1) + " (" + nt(H[t]) + ")");
                    var e = new Date
                      , n = e.getTimezoneOffset()
                      , r = n < 0 ? "+" : "-"
                      , i = Math.floor(Math.abs(n / 60))
                      , s = Math.abs(n % 60)
                      , a = [r, G(i), "'", G(s), "'"].join("");
                    J(["/CreationDate (D:", e.getFullYear(), G(e.getMonth() + 1), G(e.getDate()), G(e.getHours()), G(e.getMinutes()), G(e.getSeconds()), a, ")"].join(""))
                }(),
                J(">>"),
                J("endobj"),
                Q(),
                J("<<"),
                function() {
                    switch (J("/Type /Catalog"),
                    J("/Pages 1 0 R"),
                    y || (y = "fullwidth"),
                    y) {
                    case "fullwidth":
                        J("/OpenAction [3 0 R /FitH null]");
                        break;
                    case "fullheight":
                        J("/OpenAction [3 0 R /FitV null]");
                        break;
                    case "fullpage":
                        J("/OpenAction [3 0 R /Fit]");
                        break;
                    case "original":
                        J("/OpenAction [3 0 R /XYZ null null 1]");
                        break;
                    default:
                        var t = "" + y;
                        "%" === t.substr(t.length - 1) && (y = parseInt(y) / 100),
                        "number" == typeof y && J("/OpenAction [3 0 R /XYZ null null " + V(y) + "]")
                    }
                    switch (v || (v = "continuous"),
                    v) {
                    case "continuous":
                        J("/PageLayout /OneColumn");
                        break;
                    case "single":
                        J("/PageLayout /SinglePage");
                        break;
                    case "two":
                    case "twoleft":
                        J("/PageLayout /TwoColumnLeft");
                        break;
                    case "tworight":
                        J("/PageLayout /TwoColumnRight")
                    }
                    w && J("/PageMode /" + w),
                    X.publish("putCatalog")
                }(),
                J(">>"),
                J("endobj");
                var t, r = U, i = "0000000000";
                for (J("xref"),
                J("0 " + (I + 1)),
                J(i + " 65535 f "),
                t = 1; t <= I; t++) {
                    var s = E[t];
                    J("function" == typeof s ? (i + E[t]()).slice(-10) + " 00000 n " : (i + E[t]).slice(-10) + " 00000 n ")
                }
                return J("trailer"),
                J("<<"),
                J("/Size " + (I + 1)),
                J("/Root " + I + " 0 R"),
                J("/Info " + (I - 1) + " 0 R"),
                J(">>"),
                J("startxref"),
                J("" + r),
                J("%%EOF"),
                P = !0,
                N.join("\n")
            }, at = function(t) {
                var e = "S";
                return "F" === t ? e = "f" : "FD" === t || "DF" === t ? e = "B" : "f" !== t && "f*" !== t && "B" !== t && "B*" !== t || (e = t),
                e
            }, ct = function() {
                for (var t = st(), e = t.length, n = new ArrayBuffer(e), r = new Uint8Array(n); e--; )
                    r[e] = t.charCodeAt(e);
                return n
            }, lt = function() {
                return new Blob([ct()],{
                    type: "application/pdf"
                })
            }, ut = ((b = function(t, n) {
                var r = "dataur" === ("" + t).substr(0, 6) ? "data:application/pdf;base64," + btoa(st()) : 0;
                switch (t) {
                case void 0:
                    return st();
                case "save":
                    if (navigator.getUserMedia && (void 0 === e.URL || void 0 === e.URL.createObjectURL))
                        return W.output("dataurlnewwindow");
                    A(lt(), n),
                    "function" == typeof A.unload && e.setTimeout && setTimeout(A.unload, 911);
                    break;
                case "arraybuffer":
                    return ct();
                case "blob":
                    return lt();
                case "bloburi":
                case "bloburl":
                    return e.URL && e.URL.createObjectURL(lt()) || void 0;
                case "datauristring":
                case "dataurlstring":
                    return r;
                case "dataurlnewwindow":
                    var i = e.open(r);
                    if (i || "undefined" == typeof safari)
                        return i;
                case "datauri":
                case "dataurl":
                    return e.document.location.href = r;
                default:
                    throw new Error('Output type "' + t + '" is not supported.')
                }
            }
            ).foo = function() {
                try {
                    return b.apply(this, arguments)
                } catch (r) {
                    var t = r.stack || "";
                    ~t.indexOf(" at ") && (t = t.split(" at ")[1]);
                    var n = "Error in function " + t.split("\n")[0].split("<")[0] + ": " + r.message;
                    if (!e.console)
                        throw new Error(n);
                    e.console.error(n, r),
                    e.alert && alert(n)
                }
            }
            ,
            b.foo.bar = b,
            b.foo);
            switch (a) {
            case "pt":
                f = 1;
                break;
            case "mm":
                f = 72 / 25.4000508;
                break;
            case "cm":
                f = 72 / 2.54000508;
                break;
            case "in":
                f = 72;
                break;
            case "px":
                f = 96 / 72;
                break;
            case "pc":
            case "em":
                f = 12;
                break;
            case "ex":
                f = 6;
                break;
            default:
                throw "Invalid unit: " + a
            }
            for (var ht in W.internal = {
                pdfEscape: nt,
                getStyle: at,
                getFont: function() {
                    return O[ot.apply(W, arguments)]
                },
                getFontSize: function() {
                    return C
                },
                getLineHeight: function() {
                    return C * S
                },
                write: function(t) {
                    J(1 === arguments.length ? t : Array.prototype.join.call(arguments, " "))
                },
                getCoordinateString: function(t) {
                    return V(t * f)
                },
                getVerticalCoordinateString: function(t) {
                    return V((m - t) * f)
                },
                collections: {},
                newObject: Q,
                newAdditionalObject: function() {
                    var t = 2 * B.length + 1
                      , e = {
                        objId: t += z.length,
                        content: ""
                    };
                    return z.push(e),
                    e
                },
                newObjectDeferred: function() {
                    return E[++I] = function() {
                        return U
                    }
                    ,
                    I
                },
                newObjectDeferredBegin: function(t) {
                    E[t] = U
                },
                putStream: K,
                events: X,
                scaleFactor: f,
                pageSize: {
                    get width() {
                        return g
                    },
                    get height() {
                        return m
                    }
                },
                output: function(t, e) {
                    return ut(t, e)
                },
                getNumberOfPages: function() {
                    return B.length - 1
                },
                pages: B,
                out: J,
                f2: V,
                getPageInfo: function(t) {
                    return {
                        objId: 2 * (t - 1) + 3,
                        pageNumber: t,
                        pageContext: D[t]
                    }
                },
                getCurrentPageInfo: function() {
                    return {
                        objId: 2 * (p - 1) + 3,
                        pageNumber: p,
                        pageContext: D[p]
                    }
                },
                getPDFVersion: function() {
                    return n
                }
            },
            W.addPage = function() {
                return rt.apply(this, arguments),
                this
            }
            ,
            W.setPage = function() {
                return it.apply(this, arguments),
                this
            }
            ,
            W.insertPage = function(t) {
                return this.addPage(),
                this.movePage(p, t),
                this
            }
            ,
            W.movePage = function(t, e) {
                if (t > e) {
                    for (var n = B[t], r = j[t], i = D[t], o = t; o > e; o--)
                        B[o] = B[o - 1],
                        j[o] = j[o - 1],
                        D[o] = D[o - 1];
                    B[e] = n,
                    j[e] = r,
                    D[e] = i,
                    this.setPage(e)
                } else if (t < e) {
                    for (n = B[t],
                    r = j[t],
                    i = D[t],
                    o = t; o < e; o++)
                        B[o] = B[o + 1],
                        j[o] = j[o + 1],
                        D[o] = D[o + 1];
                    B[e] = n,
                    j[e] = r,
                    D[e] = i,
                    this.setPage(e)
                }
                return this
            }
            ,
            W.deletePage = function() {
                return function(t) {
                    t > 0 && t <= R && (B.splice(t, 1),
                    j.splice(t, 1),
                    p > --R && (p = R),
                    this.setPage(p))
                }
                .apply(this, arguments),
                this
            }
            ,
            W.setDisplayMode = function(t, e, n) {
                return y = t,
                v = e,
                w = n,
                this
            }
            ,
            W.text = function(t, e, n, r, i, o) {
                function s(t) {
                    return t = t.split("\t").join(Array(u.TabLen || 9).join(" ")),
                    nt(t, r)
                }
                "number" == typeof t && (d = n,
                n = e,
                e = t,
                t = d),
                "string" == typeof t && (t = t.match(/[\n\r]/) ? t.split(/\r\n|\r|\n/g) : [t]),
                "string" == typeof i && (o = i,
                i = null),
                "string" == typeof r && (o = r,
                r = null),
                "number" == typeof r && (i = r,
                r = null);
                var a = ""
                  , c = "Td";
                if (i) {
                    i *= Math.PI / 180;
                    var l = Math.cos(i)
                      , p = Math.sin(i);
                    a = [V(l), V(p), V(-1 * p), V(l), ""].join(" "),
                    c = "Tm"
                }
                "noBOM"in (r = r || {}) || (r.noBOM = !0),
                "autoencode"in r || (r.autoencode = !0);
                var g, w = "", y = this.internal.getCurrentPageInfo().pageContext;
                if (!0 === r.stroke ? !0 !== y.lastTextWasStroke && (w = "1 Tr\n",
                y.lastTextWasStroke = !0) : (y.lastTextWasStroke && (w = "0 Tr\n"),
                y.lastTextWasStroke = !1),
                void 0 === this._runningPageHeight && (this._runningPageHeight = 0),
                "string" == typeof t)
                    t = s(t);
                else {
                    if ("[object Array]" !== Object.prototype.toString.call(t))
                        throw new Error('Type of text must be string or Array. "' + t + '" is not recognized.');
                    for (var v = t.concat(), b = [], x = v.length; x--; )
                        b.push(s(v.shift()));
                    var _ = Math.ceil((m - n - this._runningPageHeight) * f / (C * S));
                    if (0 <= _ && b.length,
                    o) {
                        var A, q, T, I = C * S, P = t.map(function(t) {
                            return this.getStringUnitWidth(t) * C / f
                        }, this);
                        if (T = Math.max.apply(Math, P),
                        "center" === o)
                            A = e - T / 2,
                            e -= P[0] / 2;
                        else {
                            if ("right" !== o)
                                throw new Error('Unrecognized alignment option, use "center" or "right".');
                            A = e - T,
                            e -= P[0]
                        }
                        q = e,
                        t = b[0];
                        var E = 1;
                        for (x = b.length; E < x; E++) {
                            var O = T - P[E];
                            "center" === o && (O /= 2),
                            t += ") Tj\n" + (A - q + O) + " -" + I + " Td (" + b[E],
                            q = A + O
                        }
                    } else
                        t = b.join(") Tj\nT* (")
                }
                return g = V((m - n) * f),
                J("BT\n/" + h + " " + C + " Tf\n" + C * S + " TL\n" + w + k + "\n" + a + V(e * f) + " " + g + " " + c + "\n(" + t + ") Tj\nET"),
                this
            }
            ,
            W.lstext = function(t, e, n, r) {
                for (var i = 0, o = t.length; i < o; i++,
                e += r)
                    this.text(t[i], e, n)
            }
            ,
            W.line = function(t, e, n, r) {
                return this.lines([[n - t, r - e]], t, e)
            }
            ,
            W.clip = function() {
                J("W"),
                J("S")
            }
            ,
            W.clip_fixed = function(t) {
                J("evenodd" === t ? "W*" : "W"),
                J("n")
            }
            ,
            W.lines = function(t, e, n, r, i, o) {
                var s, a, c, l, u, h, p, g, w, y, v;
                for ("number" == typeof t && (d = n,
                n = e,
                e = t,
                t = d),
                r = r || [1, 1],
                J(Y(e * f) + " " + Y((m - n) * f) + " m "),
                s = r[0],
                a = r[1],
                l = t.length,
                y = e,
                v = n,
                c = 0; c < l; c++)
                    2 === (u = t[c]).length ? (y = u[0] * s + y,
                    v = u[1] * a + v,
                    J(Y(y * f) + " " + Y((m - v) * f) + " l")) : (h = u[0] * s + y,
                    p = u[1] * a + v,
                    g = u[2] * s + y,
                    w = u[3] * a + v,
                    y = u[4] * s + y,
                    v = u[5] * a + v,
                    J(Y(h * f) + " " + Y((m - p) * f) + " " + Y(g * f) + " " + Y((m - w) * f) + " " + Y(y * f) + " " + Y((m - v) * f) + " c"));
                return o && J(" h"),
                null !== i && J(at(i)),
                this
            }
            ,
            W.rect = function(t, e, n, r, i) {
                at(i);
                return J([V(t * f), V((m - e) * f), V(n * f), V(-r * f), "re"].join(" ")),
                null !== i && J(at(i)),
                this
            }
            ,
            W.triangle = function(t, e, n, r, i, o, s) {
                return this.lines([[n - t, r - e], [i - n, o - r], [t - i, e - o]], t, e, [1, 1], s, !0),
                this
            }
            ,
            W.roundedRect = function(t, e, n, r, i, o, s) {
                var a = 4 / 3 * (Math.SQRT2 - 1);
                return this.lines([[n - 2 * i, 0], [i * a, 0, i, o - o * a, i, o], [0, r - 2 * o], [0, o * a, -i * a, o, -i, o], [2 * i - n, 0], [-i * a, 0, -i, -o * a, -i, -o], [0, 2 * o - r], [0, -o * a, i * a, -o, i, -o]], t + i, e, [1, 1], s),
                this
            }
            ,
            W.ellipse = function(t, e, n, r, i) {
                var o = 4 / 3 * (Math.SQRT2 - 1) * n
                  , s = 4 / 3 * (Math.SQRT2 - 1) * r;
                return J([V((t + n) * f), V((m - e) * f), "m", V((t + n) * f), V((m - (e - s)) * f), V((t + o) * f), V((m - (e - r)) * f), V(t * f), V((m - (e - r)) * f), "c"].join(" ")),
                J([V((t - o) * f), V((m - (e - r)) * f), V((t - n) * f), V((m - (e - s)) * f), V((t - n) * f), V((m - e) * f), "c"].join(" ")),
                J([V((t - n) * f), V((m - (e + s)) * f), V((t - o) * f), V((m - (e + r)) * f), V(t * f), V((m - (e + r)) * f), "c"].join(" ")),
                J([V((t + o) * f), V((m - (e + r)) * f), V((t + n) * f), V((m - (e + s)) * f), V((t + n) * f), V((m - e) * f), "c"].join(" ")),
                null !== i && J(at(i)),
                this
            }
            ,
            W.circle = function(t, e, n, r) {
                return this.ellipse(t, e, n, n, r)
            }
            ,
            W.setProperties = function(t) {
                for (var e in H)
                    H.hasOwnProperty(e) && t[e] && (H[e] = t[e]);
                return this
            }
            ,
            W.setFontSize = function(t) {
                return C = t,
                this
            }
            ,
            W.setFont = function(t, e) {
                return h = ot(t, e),
                this
            }
            ,
            W.setFontStyle = W.setFontType = function(t) {
                return h = ot(void 0, t),
                this
            }
            ,
            W.getFontList = function() {
                var t, e, n, r = {};
                for (t in F)
                    if (F.hasOwnProperty(t))
                        for (e in r[t] = n = [],
                        F[t])
                            F[t].hasOwnProperty(e) && n.push(e);
                return r
            }
            ,
            W.addFont = function(t, e, n) {
                et(t, e, n, "StandardEncoding")
            }
            ,
            W.setLineWidth = function(t) {
                return J((t * f).toFixed(2) + " w"),
                this
            }
            ,
            W.setDrawColor = function(t, e, n, r) {
                var i;
                return i = void 0 === e || void 0 === r && t === e === n ? "string" == typeof t ? t + " G" : V(t / 255) + " G" : void 0 === r ? "string" == typeof t ? [t, e, n, "RG"].join(" ") : [V(t / 255), V(e / 255), V(n / 255), "RG"].join(" ") : "string" == typeof t ? [t, e, n, r, "K"].join(" ") : [V(t), V(e), V(n), V(r), "K"].join(" "),
                J(i),
                this
            }
            ,
            W.setFillColor = function(e, n, r, i) {
                var o;
                return void 0 === n || void 0 === i && e === n === r ? o = "string" == typeof e ? e + " g" : V(e / 255) + " g" : void 0 === i || "object" === (void 0 === i ? "undefined" : t(i)) ? (o = "string" == typeof e ? [e, n, r, "rg"].join(" ") : [V(e / 255), V(n / 255), V(r / 255), "rg"].join(" "),
                i && 0 === i.a && (o = ["255", "255", "255", "rg"].join(" "))) : o = "string" == typeof e ? [e, n, r, i, "k"].join(" ") : [V(e), V(n), V(r), V(i), "k"].join(" "),
                J(o),
                this
            }
            ,
            W.setTextColor = function(t, e, n) {
                if ("string" == typeof t && /^#[0-9A-Fa-f]{6}$/.test(t)) {
                    var r = parseInt(t.substr(1), 16);
                    t = r >> 16 & 255,
                    e = r >> 8 & 255,
                    n = 255 & r
                }
                return k = 0 === t && 0 === e && 0 === n || void 0 === e ? Y(t / 255) + " g" : [Y(t / 255), Y(e / 255), Y(n / 255), "rg"].join(" "),
                this
            }
            ,
            W.CapJoinStyles = {
                0: 0,
                butt: 0,
                but: 0,
                miter: 0,
                1: 1,
                round: 1,
                rounded: 1,
                circle: 1,
                2: 2,
                projecting: 2,
                project: 2,
                square: 2,
                bevel: 2
            },
            W.setLineCap = function(t) {
                var e = this.CapJoinStyles[t];
                if (void 0 === e)
                    throw new Error("Line cap style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
                return L = e,
                J(e + " J"),
                this
            }
            ,
            W.setLineJoin = function(t) {
                var e = this.CapJoinStyles[t];
                if (void 0 === e)
                    throw new Error("Line join style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
                return M = e,
                J(e + " j"),
                this
            }
            ,
            W.output = ut,
            W.save = function(t) {
                W.output("save", t)
            }
            ,
            o.API)
                o.API.hasOwnProperty(ht) && ("events" === ht && o.API.events.length ? function(t, e) {
                    var n, r, i;
                    for (i = e.length - 1; -1 !== i; i--)
                        n = e[i][0],
                        r = e[i][1],
                        t.subscribe.apply(t, [n].concat("function" == typeof r ? [r] : r))
                }(X, o.API.events) : W[ht] = o.API[ht]);
            return function() {
                for (var t = [["Helvetica", "helvetica", "normal"], ["Helvetica-Bold", "helvetica", "bold"], ["Helvetica-Oblique", "helvetica", "italic"], ["Helvetica-BoldOblique", "helvetica", "bolditalic"], ["Courier", "courier", "normal"], ["Courier-Bold", "courier", "bold"], ["Courier-Oblique", "courier", "italic"], ["Courier-BoldOblique", "courier", "bolditalic"], ["Times-Roman", "times", "normal"], ["Times-Bold", "times", "bold"], ["Times-Italic", "times", "italic"], ["Times-BoldItalic", "times", "bolditalic"], ["ZapfDingbats", "zapfdingbats"]], e = 0, n = t.length; e < n; e++) {
                    var r = et(t[e][0], t[e][1], t[e][2], "StandardEncoding")
                      , i = t[e][0].split("-");
                    tt(r, i[0], i[1] || "")
                }
                X.publish("addFonts", {
                    fonts: O,
                    dictionary: F
                })
            }(),
            h = "F1",
            rt(c, s),
            X.publish("initialized"),
            W
        }
        return o.API = {
            events: []
        },
        o.version = "1.3.2 2016-09-30T20:33:17.116Z:jameshall",
        "function" == typeof define && define.amd ? define("jsPDF", function() {
            return o
        }) : "undefined" != typeof module && module.exports ? module.exports = o : e.jsPDF = o,
        o
    }("undefined" != typeof self && self || "undefined" != typeof window && window || void 0);
    window.tmp = e,
    (window.AcroForm = function(t) {
        var n = window.AcroForm;
        n.scale = function(t) {
            return t * (r.internal.scaleFactor / 1)
        }
        ,
        n.antiScale = function(t) {
            return 1 / r.internal.scaleFactor * t
        }
        ;
        var r = {
            fields: [],
            xForms: [],
            acroFormDictionaryRoot: null,
            printedOut: !1,
            internal: null
        };
        e.API.acroformPlugin = r;
        var i = function() {
            for (var t in this.acroformPlugin.acroFormDictionaryRoot.Fields) {
                var e = this.acroformPlugin.acroFormDictionaryRoot.Fields[t];
                e.hasAnnotation && o.call(this, e)
            }
        }
          , o = function(t) {
            var n = {
                type: "reference",
                object: t
            };
            e.API.annotationPlugin.annotations[this.internal.getPageInfo(t.page).pageNumber].push(n)
        }
          , s = function(t) {
            this.acroformPlugin.printedOut && (this.acroformPlugin.printedOut = !1,
            this.acroformPlugin.acroFormDictionaryRoot = null),
            this.acroformPlugin.acroFormDictionaryRoot || function() {
                if (this.acroformPlugin.acroFormDictionaryRoot)
                    throw new Error("Exception while creating AcroformDictionary");
                this.acroformPlugin.acroFormDictionaryRoot = new n.AcroFormDictionary,
                this.acroformPlugin.internal = this.internal,
                this.acroformPlugin.acroFormDictionaryRoot._eventID = this.internal.events.subscribe("postPutResources", c),
                this.internal.events.subscribe("buildDocument", i),
                this.internal.events.subscribe("putCatalog", a),
                this.internal.events.subscribe("postPutPages", l)
            }
            .call(this),
            this.acroformPlugin.acroFormDictionaryRoot.Fields.push(t)
        }
          , a = function() {
            void 0 !== this.acroformPlugin.acroFormDictionaryRoot ? this.internal.write("/AcroForm " + this.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R") : console.log("Root missing...")
        }
          , c = function() {
            this.internal.events.unsubscribe(this.acroformPlugin.acroFormDictionaryRoot._eventID),
            delete this.acroformPlugin.acroFormDictionaryRoot._eventID,
            this.acroformPlugin.printedOut = !0
        }
          , l = function(t) {
            var e = !t;
            t || (this.internal.newObjectDeferredBegin(this.acroformPlugin.acroFormDictionaryRoot.objId),
            this.internal.out(this.acroformPlugin.acroFormDictionaryRoot.getString()));
            t = t || this.acroformPlugin.acroFormDictionaryRoot.Kids;
            for (var r in t) {
                var i = t[r]
                  , o = i.Rect;
                i.Rect && (i.Rect = n.internal.calculateCoordinates.call(this, i.Rect)),
                this.internal.newObjectDeferredBegin(i.objId);
                var s = "";
                if (s += i.objId + " 0 obj\n",
                s += "<<\n" + i.getContent(),
                i.Rect = o,
                i.hasAppearanceStream && !i.appearanceStreamContent) {
                    var a = n.internal.calculateAppearanceStream.call(this, i);
                    s += "/AP << /N " + a + " >>\n",
                    this.acroformPlugin.xForms.push(a)
                }
                if (i.appearanceStreamContent) {
                    for (var c in s += "/AP << ",
                    i.appearanceStreamContent) {
                        var l = i.appearanceStreamContent[c];
                        if (s += "/" + c + " ",
                        s += "<< ",
                        Object.keys(l).length >= 1 || Array.isArray(l))
                            for (var r in l) {
                                var h;
                                "function" == typeof (h = l[r]) && (h = h.call(this, i)),
                                s += "/" + r + " " + h + " ",
                                this.acroformPlugin.xForms.indexOf(h) >= 0 || this.acroformPlugin.xForms.push(h)
                            }
                        else
                            "function" == typeof (h = l) && (h = h.call(this, i)),
                            s += "/" + r + " " + h + " \n",
                            this.acroformPlugin.xForms.indexOf(h) >= 0 || this.acroformPlugin.xForms.push(h);
                        s += " >>\n"
                    }
                    s += ">>\n"
                }
                s += ">>\nendobj\n",
                this.internal.out(s)
            }
            e && u.call(this, this.acroformPlugin.xForms)
        }
          , u = function(t) {
            for (var e in t) {
                var n = e
                  , r = t[e];
                this.internal.newObjectDeferredBegin(r && r.objId);
                var i = "";
                i += r ? r.getString() : "",
                this.internal.out(i),
                delete t[n]
            }
        };
        t.addField = function(t) {
            return t instanceof n.TextField ? f.call(this, t) : t instanceof n.ChoiceField ? d.call(this, t) : t instanceof n.Button ? h.call(this, t) : t instanceof n.ChildClass ? s.call(this, t) : t && s.call(this, t),
            t.page = this.acroformPlugin.internal.getCurrentPageInfo().pageNumber,
            this
        }
        ;
        var h = function(t) {
            (t = t || new n.Field).FT = "/Btn";
            var e = t.Ff || 0;
            t.pushbutton && (e = n.internal.setBitPosition(e, 17),
            delete t.pushbutton),
            t.radio && (e = n.internal.setBitPosition(e, 16),
            delete t.radio),
            t.noToggleToOff && (e = n.internal.setBitPosition(e, 15)),
            t.Ff = e,
            s.call(this, t)
        }
          , f = function(t) {
            (t = t || new n.Field).FT = "/Tx";
            var e = t.Ff || 0;
            t.multiline && (e |= 4096),
            t.password && (e |= 8192),
            t.fileSelect && (e |= 1 << 20),
            t.doNotSpellCheck && (e |= 1 << 22),
            t.doNotScroll && (e |= 1 << 23),
            t.Ff = t.Ff || e,
            s.call(this, t)
        }
          , d = function(t) {
            var e = t || new n.Field;
            e.FT = "/Ch";
            var r = e.Ff || 0;
            e.combo && (r = n.internal.setBitPosition(r, 18),
            delete e.combo),
            e.edit && (r = n.internal.setBitPosition(r, 19),
            delete e.edit),
            e.sort && (r = n.internal.setBitPosition(r, 20),
            delete e.sort),
            e.multiSelect && this.internal.getPDFVersion() >= 1.4 && (r = n.internal.setBitPosition(r, 22),
            delete e.multiSelect),
            e.doNotSpellCheck && this.internal.getPDFVersion() >= 1.4 && (r = n.internal.setBitPosition(r, 23),
            delete e.doNotSpellCheck),
            e.Ff = r,
            s.call(this, e)
        }
    }
    )(e.API);
    var n, i, o, s, a, c, l, u, h, f, d, p, m, w, y, v, x, k, _, C = window.AcroForm;
    C.internal = {},
    C.createFormXObject = function(t) {
        var e = new C.FormXObject
          , n = C.Appearance.internal.getHeight(t) || 0
          , r = C.Appearance.internal.getWidth(t) || 0;
        return e.BBox = [0, 0, r, n],
        e
    }
    ,
    C.Appearance = {
        CheckBox: {
            createAppearanceStream: function() {
                return {
                    N: {
                        On: C.Appearance.CheckBox.YesNormal
                    },
                    D: {
                        On: C.Appearance.CheckBox.YesPushDown,
                        Off: C.Appearance.CheckBox.OffPushDown
                    }
                }
            },
            createMK: function() {
                return "<< /CA (3)>>"
            },
            YesPushDown: function(t) {
                var e = C.createFormXObject(t)
                  , n = "";
                t.Q = 1;
                var r = C.internal.calculateX(t, "3", "ZapfDingbats", 50);
                return n += "0.749023 g\n             0 0 " + C.Appearance.internal.getWidth(t) + " " + C.Appearance.internal.getHeight(t) + " re\n             f\n             BMC\n             q\n             0 0 1 rg\n             /F13 " + r.fontSize + " Tf 0 g\n             BT\n",
                n += r.text,
                n += "ET\n             Q\n             EMC\n",
                e.stream = n,
                e
            },
            YesNormal: function(t) {
                var e = C.createFormXObject(t)
                  , n = "";
                t.Q = 1;
                var r = C.internal.calculateX(t, "3", "ZapfDingbats", .9 * C.Appearance.internal.getHeight(t));
                return n += "1 g\n0 0 " + C.Appearance.internal.getWidth(t) + " " + C.Appearance.internal.getHeight(t) + " re\nf\nq\n0 0 1 rg\n0 0 " + (C.Appearance.internal.getWidth(t) - 1) + " " + (C.Appearance.internal.getHeight(t) - 1) + " re\nW\nn\n0 g\nBT\n/F13 " + r.fontSize + " Tf 0 g\n",
                n += r.text,
                n += "ET\n             Q\n",
                e.stream = n,
                e
            },
            OffPushDown: function(t) {
                var e = C.createFormXObject(t)
                  , n = "";
                return n += "0.749023 g\n            0 0 " + C.Appearance.internal.getWidth(t) + " " + C.Appearance.internal.getHeight(t) + " re\n            f\n",
                e.stream = n,
                e
            }
        },
        RadioButton: {
            Circle: {
                createAppearanceStream: function(t) {
                    var e = {
                        D: {
                            Off: C.Appearance.RadioButton.Circle.OffPushDown
                        },
                        N: {}
                    };
                    return e.N[t] = C.Appearance.RadioButton.Circle.YesNormal,
                    e.D[t] = C.Appearance.RadioButton.Circle.YesPushDown,
                    e
                },
                createMK: function() {
                    return "<< /CA (l)>>"
                },
                YesNormal: function(t) {
                    var e = C.createFormXObject(t)
                      , n = ""
                      , r = C.Appearance.internal.getWidth(t) <= C.Appearance.internal.getHeight(t) ? C.Appearance.internal.getWidth(t) / 4 : C.Appearance.internal.getHeight(t) / 4;
                    r *= .9;
                    var i = C.Appearance.internal.Bezier_C;
                    return n += "q\n1 0 0 1 " + C.Appearance.internal.getWidth(t) / 2 + " " + C.Appearance.internal.getHeight(t) / 2 + " cm\n" + r + " 0 m\n" + r + " " + r * i + " " + r * i + " " + r + " 0 " + r + " c\n-" + r * i + " " + r + " -" + r + " " + r * i + " -" + r + " 0 c\n-" + r + " -" + r * i + " -" + r * i + " -" + r + " 0 -" + r + " c\n" + r * i + " -" + r + " " + r + " -" + r * i + " " + r + " 0 c\nf\nQ\n",
                    e.stream = n,
                    e
                },
                YesPushDown: function(t) {
                    var e = C.createFormXObject(t)
                      , n = ""
                      , r = C.Appearance.internal.getWidth(t) <= C.Appearance.internal.getHeight(t) ? C.Appearance.internal.getWidth(t) / 4 : C.Appearance.internal.getHeight(t) / 4
                      , i = 2 * (r *= .9)
                      , o = i * C.Appearance.internal.Bezier_C
                      , s = r * C.Appearance.internal.Bezier_C;
                    return n += "0.749023 g\n            q\n           1 0 0 1 " + C.Appearance.internal.getWidth(t) / 2 + " " + C.Appearance.internal.getHeight(t) / 2 + " cm\n" + i + " 0 m\n" + i + " " + o + " " + o + " " + i + " 0 " + i + " c\n-" + o + " " + i + " -" + i + " " + o + " -" + i + " 0 c\n-" + i + " -" + o + " -" + o + " -" + i + " 0 -" + i + " c\n" + o + " -" + i + " " + i + " -" + o + " " + i + " 0 c\n            f\n            Q\n            0 g\n            q\n            1 0 0 1 " + C.Appearance.internal.getWidth(t) / 2 + " " + C.Appearance.internal.getHeight(t) / 2 + " cm\n" + r + " 0 m\n" + r + " " + s + " " + s + " " + r + " 0 " + r + " c\n-" + s + " " + r + " -" + r + " " + s + " -" + r + " 0 c\n-" + r + " -" + s + " -" + s + " -" + r + " 0 -" + r + " c\n" + s + " -" + r + " " + r + " -" + s + " " + r + " 0 c\n            f\n            Q\n",
                    e.stream = n,
                    e
                },
                OffPushDown: function(t) {
                    var e = C.createFormXObject(t)
                      , n = ""
                      , r = C.Appearance.internal.getWidth(t) <= C.Appearance.internal.getHeight(t) ? C.Appearance.internal.getWidth(t) / 4 : C.Appearance.internal.getHeight(t) / 4
                      , i = 2 * (r *= .9)
                      , o = i * C.Appearance.internal.Bezier_C;
                    return n += "0.749023 g\n            q\n 1 0 0 1 " + C.Appearance.internal.getWidth(t) / 2 + " " + C.Appearance.internal.getHeight(t) / 2 + " cm\n" + i + " 0 m\n" + i + " " + o + " " + o + " " + i + " 0 " + i + " c\n-" + o + " " + i + " -" + i + " " + o + " -" + i + " 0 c\n-" + i + " -" + o + " -" + o + " -" + i + " 0 -" + i + " c\n" + o + " -" + i + " " + i + " -" + o + " " + i + " 0 c\n            f\n            Q\n",
                    e.stream = n,
                    e
                }
            },
            Cross: {
                createAppearanceStream: function(t) {
                    var e = {
                        D: {
                            Off: C.Appearance.RadioButton.Cross.OffPushDown
                        },
                        N: {}
                    };
                    return e.N[t] = C.Appearance.RadioButton.Cross.YesNormal,
                    e.D[t] = C.Appearance.RadioButton.Cross.YesPushDown,
                    e
                },
                createMK: function() {
                    return "<< /CA (8)>>"
                },
                YesNormal: function(t) {
                    var e = C.createFormXObject(t)
                      , n = ""
                      , r = C.Appearance.internal.calculateCross(t);
                    return n += "q\n            1 1 " + (C.Appearance.internal.getWidth(t) - 2) + " " + (C.Appearance.internal.getHeight(t) - 2) + " re\n            W\n            n\n            " + r.x1.x + " " + r.x1.y + " m\n            " + r.x2.x + " " + r.x2.y + " l\n            " + r.x4.x + " " + r.x4.y + " m\n            " + r.x3.x + " " + r.x3.y + " l\n            s\n            Q\n",
                    e.stream = n,
                    e
                },
                YesPushDown: function(t) {
                    var e = C.createFormXObject(t)
                      , n = C.Appearance.internal.calculateCross(t)
                      , r = "";
                    return r += "0.749023 g\n            0 0 " + C.Appearance.internal.getWidth(t) + " " + C.Appearance.internal.getHeight(t) + " re\n            f\n            q\n            1 1 " + (C.Appearance.internal.getWidth(t) - 2) + " " + (C.Appearance.internal.getHeight(t) - 2) + " re\n            W\n            n\n            " + n.x1.x + " " + n.x1.y + " m\n            " + n.x2.x + " " + n.x2.y + " l\n            " + n.x4.x + " " + n.x4.y + " m\n            " + n.x3.x + " " + n.x3.y + " l\n            s\n            Q\n",
                    e.stream = r,
                    e
                },
                OffPushDown: function(t) {
                    var e = C.createFormXObject(t)
                      , n = "";
                    return n += "0.749023 g\n            0 0 " + C.Appearance.internal.getWidth(t) + " " + C.Appearance.internal.getHeight(t) + " re\n            f\n",
                    e.stream = n,
                    e
                }
            }
        },
        createDefaultAppearanceStream: function(t) {
            return "/Helv 0 Tf 0 g",
            "/Helv 0 Tf 0 g"
        }
    },
    C.Appearance.internal = {
        Bezier_C: .551915024494,
        calculateCross: function(t) {
            var e, n, r = C.Appearance.internal.getWidth(t), i = C.Appearance.internal.getHeight(t), o = (e = r) > (n = i) ? n : e;
            return {
                x1: {
                    x: (r - o) / 2,
                    y: (i - o) / 2 + o
                },
                x2: {
                    x: (r - o) / 2 + o,
                    y: (i - o) / 2
                },
                x3: {
                    x: (r - o) / 2,
                    y: (i - o) / 2
                },
                x4: {
                    x: (r - o) / 2 + o,
                    y: (i - o) / 2 + o
                }
            }
        }
    },
    C.Appearance.internal.getWidth = function(t) {
        return t.Rect[2]
    }
    ,
    C.Appearance.internal.getHeight = function(t) {
        return t.Rect[3]
    }
    ,
    C.internal.inherit = function(t, e) {
        Object.create;
        t.prototype = Object.create(e.prototype),
        t.prototype.constructor = t
    }
    ,
    C.internal.arrayToPdfArray = function(t) {
        if (Array.isArray(t)) {
            var e = " [";
            for (var n in t) {
                e += t[n].toString(),
                e += n < t.length - 1 ? " " : ""
            }
            return e += "]"
        }
    }
    ,
    C.internal.toPdfString = function(t) {
        return 0 !== (t = t || "").indexOf("(") && (t = "(" + t),
        ")" != t.substring(t.length - 1) && (t += "("),
        t
    }
    ,
    C.PDFObject = function() {
        var t;
        Object.defineProperty(this, "objId", {
            get: function() {
                return t || (this.internal ? t = this.internal.newObjectDeferred() : e.API.acroformPlugin.internal && (t = e.API.acroformPlugin.internal.newObjectDeferred())),
                t || console.log("Couldn't create Object ID"),
                t
            },
            configurable: !1
        })
    }
    ,
    C.PDFObject.prototype.toString = function() {
        return this.objId + " 0 R"
    }
    ,
    C.PDFObject.prototype.getString = function() {
        var t = this.objId + " 0 obj\n<<";
        return t += this.getContent() + ">>\n",
        this.stream && (t += "stream\n",
        t += this.stream,
        t += "endstream\n"),
        t += "endobj\n"
    }
    ,
    C.PDFObject.prototype.getContent = function() {
        var t = "";
        return t += function(t) {
            var e = ""
              , n = Object.keys(t).filter(function(t) {
                return "content" != t && "appearanceStreamContent" != t && "_" != t.substring(0, 1)
            });
            for (var r in n) {
                var i = n[r]
                  , o = t[i];
                o && (Array.isArray(o) ? e += "/" + i + " " + C.internal.arrayToPdfArray(o) + "\n" : o instanceof C.PDFObject ? e += "/" + i + " " + o.objId + " 0 R\n" : e += "/" + i + " " + o + "\n")
            }
            return e
        }(this)
    }
    ,
    C.FormXObject = function() {
        var t;
        C.PDFObject.call(this),
        this.Type = "/XObject",
        this.Subtype = "/Form",
        this.FormType = 1,
        this.BBox,
        this.Matrix,
        this.Resources = "2 0 R",
        this.PieceInfo,
        Object.defineProperty(this, "Length", {
            enumerable: !0,
            get: function() {
                return void 0 !== t ? t.length : 0
            }
        }),
        Object.defineProperty(this, "stream", {
            enumerable: !1,
            set: function(e) {
                t = e
            },
            get: function() {
                return t || null
            }
        })
    }
    ,
    C.internal.inherit(C.FormXObject, C.PDFObject),
    C.AcroFormDictionary = function() {
        C.PDFObject.call(this);
        var t = [];
        Object.defineProperty(this, "Kids", {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return t.length > 0 ? t : void 0
            }
        }),
        Object.defineProperty(this, "Fields", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return t
            }
        }),
        this.DA
    }
    ,
    C.internal.inherit(C.AcroFormDictionary, C.PDFObject),
    C.Field = function() {
        var t;
        C.PDFObject.call(this),
        Object.defineProperty(this, "Rect", {
            enumerable: !0,
            configurable: !1,
            get: function() {
                if (t)
                    return t
            },
            set: function(e) {
                t = e
            }
        });
        var e, n, r, i = "";
        Object.defineProperty(this, "FT", {
            enumerable: !0,
            set: function(t) {
                i = t
            },
            get: function() {
                return i
            }
        }),
        Object.defineProperty(this, "T", {
            enumerable: !0,
            configurable: !1,
            set: function(t) {
                e = t
            },
            get: function() {
                if (!e || e.length < 1) {
                    if (this instanceof C.ChildClass)
                        return;
                    return "(FieldObject" + C.Field.FieldNum++ + ")"
                }
                return "(" == e.substring(0, 1) && e.substring(e.length - 1) ? e : "(" + e + ")"
            }
        }),
        Object.defineProperty(this, "DA", {
            enumerable: !0,
            get: function() {
                if (n)
                    return "(" + n + ")"
            },
            set: function(t) {
                n = t
            }
        }),
        Object.defineProperty(this, "DV", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                if (r)
                    return r
            },
            set: function(t) {
                r = t
            }
        }),
        Object.defineProperty(this, "Type", {
            enumerable: !0,
            get: function() {
                return this.hasAnnotation ? "/Annot" : null
            }
        }),
        Object.defineProperty(this, "Subtype", {
            enumerable: !0,
            get: function() {
                return this.hasAnnotation ? "/Widget" : null
            }
        }),
        this.BG,
        Object.defineProperty(this, "hasAnnotation", {
            enumerable: !1,
            get: function() {
                return !!(this.Rect || this.BC || this.BG)
            }
        }),
        Object.defineProperty(this, "hasAppearanceStream", {
            enumerable: !1,
            configurable: !0,
            writable: !0
        }),
        Object.defineProperty(this, "page", {
            enumerable: !1,
            configurable: !0,
            writable: !0
        })
    }
    ,
    C.Field.FieldNum = 0,
    C.internal.inherit(C.Field, C.PDFObject),
    C.ChoiceField = function() {
        C.Field.call(this),
        this.FT = "/Ch",
        this.Opt = [],
        this.V = "()",
        this.TI = 0,
        this.combo = !1,
        Object.defineProperty(this, "edit", {
            enumerable: !0,
            set: function(t) {
                1 == t ? (this._edit = !0,
                this.combo = !0) : this._edit = !1
            },
            get: function() {
                return !!this._edit && this._edit
            },
            configurable: !1
        }),
        this.hasAppearanceStream = !0,
        Object.defineProperty(this, "V", {
            get: function() {
                C.internal.toPdfString()
            }
        })
    }
    ,
    C.internal.inherit(C.ChoiceField, C.Field),
    window.ChoiceField = C.ChoiceField,
    C.ListBox = function() {
        C.ChoiceField.call(this)
    }
    ,
    C.internal.inherit(C.ListBox, C.ChoiceField),
    window.ListBox = C.ListBox,
    C.ComboBox = function() {
        C.ListBox.call(this),
        this.combo = !0
    }
    ,
    C.internal.inherit(C.ComboBox, C.ListBox),
    window.ComboBox = C.ComboBox,
    C.EditBox = function() {
        C.ComboBox.call(this),
        this.edit = !0
    }
    ,
    C.internal.inherit(C.EditBox, C.ComboBox),
    window.EditBox = C.EditBox,
    C.Button = function() {
        C.Field.call(this),
        this.FT = "/Btn"
    }
    ,
    C.internal.inherit(C.Button, C.Field),
    window.Button = C.Button,
    C.PushButton = function() {
        C.Button.call(this),
        this.pushbutton = !0
    }
    ,
    C.internal.inherit(C.PushButton, C.Button),
    window.PushButton = C.PushButton,
    C.RadioButton = function() {
        C.Button.call(this),
        this.radio = !0;
        var t, e = [];
        Object.defineProperty(this, "Kids", {
            enumerable: !0,
            get: function() {
                if (e.length > 0)
                    return e
            }
        }),
        Object.defineProperty(this, "__Kids", {
            get: function() {
                return e
            }
        }),
        Object.defineProperty(this, "noToggleToOff", {
            enumerable: !1,
            get: function() {
                return t
            },
            set: function(e) {
                t = e
            }
        })
    }
    ,
    C.internal.inherit(C.RadioButton, C.Button),
    window.RadioButton = C.RadioButton,
    C.ChildClass = function(t, e) {
        C.Field.call(this),
        this.Parent = t,
        this._AppearanceType = C.Appearance.RadioButton.Circle,
        this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(e),
        this.F = C.internal.setBitPosition(this.F, 3, 1),
        this.MK = this._AppearanceType.createMK(),
        this.AS = "/Off",
        this._Name = e
    }
    ,
    C.internal.inherit(C.ChildClass, C.Field),
    C.RadioButton.prototype.setAppearance = function(t) {
        if ("createAppearanceStream"in t && "createMK"in t)
            for (var e in this.__Kids) {
                var n = this.__Kids[e];
                n.appearanceStreamContent = t.createAppearanceStream(n._Name),
                n.MK = t.createMK()
            }
        else
            console.log("Couldn't assign Appearance to RadioButton. Appearance was Invalid!")
    }
    ,
    C.RadioButton.prototype.createOption = function(t) {
        this.__Kids.length;
        var n = new C.ChildClass(this,t);
        return this.__Kids.push(n),
        e.API.addField(n),
        n
    }
    ,
    C.CheckBox = function() {
        Button.call(this),
        this.appearanceStreamContent = C.Appearance.CheckBox.createAppearanceStream(),
        this.MK = C.Appearance.CheckBox.createMK(),
        this.AS = "/On",
        this.V = "/On"
    }
    ,
    C.internal.inherit(C.CheckBox, C.Button),
    window.CheckBox = C.CheckBox,
    C.TextField = function() {
        var t, e;
        C.Field.call(this),
        this.DA = C.Appearance.createDefaultAppearanceStream(),
        this.F = 4,
        Object.defineProperty(this, "V", {
            get: function() {
                return t ? "(" + t + ")" : t
            },
            enumerable: !0,
            set: function(e) {
                t = e
            }
        }),
        Object.defineProperty(this, "DV", {
            get: function() {
                return e ? "(" + e + ")" : e
            },
            enumerable: !0,
            set: function(t) {
                e = t
            }
        });
        var n = !1;
        Object.defineProperty(this, "multiline", {
            enumerable: !1,
            get: function() {
                return n
            },
            set: function(t) {
                n = t
            }
        });
        var r = !1;
        Object.defineProperty(this, "MaxLen", {
            enumerable: !0,
            get: function() {
                return r
            },
            set: function(t) {
                r = t
            }
        }),
        Object.defineProperty(this, "hasAppearanceStream", {
            enumerable: !1,
            get: function() {
                return this.V || this.DV
            }
        })
    }
    ,
    C.internal.inherit(C.TextField, C.Field),
    window.TextField = C.TextField,
    C.PasswordField = function() {
        TextField.call(this),
        Object.defineProperty(this, "password", {
            value: !0,
            enumerable: !1,
            configurable: !1,
            writable: !1
        })
    }
    ,
    C.internal.inherit(C.PasswordField, C.TextField),
    window.PasswordField = C.PasswordField,
    C.internal.calculateFontSpace = function(t, e, n) {
        n = n || "helvetica";
        var r = C.internal.calculateFontSpace.canvas || (C.internal.calculateFontSpace.canvas = document.createElement("canvas"));
        (s = r.getContext("2d")).save();
        var i = e + " " + n;
        s.font = i;
        var o = s.measureText(t);
        s.fontcolor = "black";
        var s = r.getContext("2d");
        o.height = 1.5 * s.measureText("3").width,
        s.restore();
        o.width;
        return o
    }
    ,
    C.internal.calculateX = function(t, e, n, r) {
        r = r || 12,
        n = n || "helvetica";
        var i = {
            text: "",
            fontSize: ""
        }
          , o = (e = ")" == (e = "(" == e.substr(0, 1) ? e.substr(1) : e).substr(e.length - 1) ? e.substr(0, e.length - 1) : e).split(" ")
          , s = r
          , a = C.Appearance.internal.getHeight(t) || 0;
        a = a < 0 ? -a : a;
        var c = C.Appearance.internal.getWidth(t) || 0;
        c = c < 0 ? -c : c;
        var l = function(t, e, r) {
            if (t + 1 < o.length) {
                var i = e + " " + o[t + 1];
                return C.internal.calculateFontSpace(i, r + "px", n).width <= c - 4
            }
            return !1
        };
        s++;
        t: for (; ; ) {
            e = "";
            s--;
            var u = C.internal.calculateFontSpace("3", s + "px", n).height
              , h = t.multiline ? a - s : (a - u) / 2
              , f = -2
              , d = h += 2
              , p = 0
              , g = 0
              , m = 0;
            if (0 == s) {
                s = 12,
                e = "(...) Tj\n",
                e += "% Width of Text: " + C.internal.calculateFontSpace(e, "1px").width + ", FieldWidth:" + c + "\n";
                break
            }
            m = C.internal.calculateFontSpace(o[0] + " ", s + "px", n).width;
            var w = ""
              , y = 0;
            for (var v in o) {
                w = " " == (w += o[v] + " ").substr(w.length - 1) ? w.substr(0, w.length - 1) : w;
                var b = parseInt(v);
                m = C.internal.calculateFontSpace(w + " ", s + "px", n).width;
                var x = l(b, w, s)
                  , k = v >= o.length - 1;
                if (!x || k) {
                    if (x || k) {
                        if (k)
                            g = b;
                        else if (t.multiline && (u + 2) * (y + 2) + 2 > a)
                            continue t
                    } else {
                        if (!t.multiline)
                            continue t;
                        if ((u + 2) * (y + 2) + 2 > a)
                            continue t;
                        g = b
                    }
                    for (var _ = "", A = p; A <= g; A++)
                        _ += o[A] + " ";
                    switch (_ = " " == _.substr(_.length - 1) ? _.substr(0, _.length - 1) : _,
                    m = C.internal.calculateFontSpace(_, s + "px", n).width,
                    t.Q) {
                    case 2:
                        f = c - m - 2;
                        break;
                    case 1:
                        f = (c - m) / 2;
                        break;
                    case 0:
                    default:
                        f = 2
                    }
                    e += f + " " + d + " Td\n",
                    e += "(" + _ + ") Tj\n",
                    e += -f + " 0 Td\n",
                    d = -(s + 2),
                    f,
                    m = 0,
                    p = g + 1,
                    y++,
                    w = ""
                } else
                    w += " "
            }
            break
        }
        return i.text = e,
        i.fontSize = s,
        i
    }
    ,
    C.internal.calculateAppearanceStream = function(t) {
        if (t.appearanceStreamContent)
            return t.appearanceStreamContent;
        if (t.V || t.DV) {
            var e = ""
              , n = t.V || t.DV
              , r = C.internal.calculateX(t, n);
            e += "/Tx BMC\nq\n/F1 " + r.fontSize + " Tf\n1 0 0 1 0 0 Tm\n",
            e += "BT\n",
            e += r.text,
            e += "ET\n",
            e += "Q\nEMC\n";
            var i = new C.createFormXObject(t);
            i.stream = e;
            return i
        }
    }
    ,
    C.internal.calculateCoordinates = function(t, e, n, r) {
        var i = {};
        if (this.internal) {
            var o = function(t) {
                return t * this.internal.scaleFactor
            };
            Array.isArray(t) ? (t[0] = C.scale(t[0]),
            t[1] = C.scale(t[1]),
            t[2] = C.scale(t[2]),
            t[3] = C.scale(t[3]),
            i.lowerLeft_X = t[0] || 0,
            i.lowerLeft_Y = o.call(this, this.internal.pageSize.height) - t[3] - t[1] || 0,
            i.upperRight_X = t[0] + t[2] || 0,
            i.upperRight_Y = o.call(this, this.internal.pageSize.height) - t[1] || 0) : (t = C.scale(t),
            e = C.scale(e),
            n = C.scale(n),
            r = C.scale(r),
            i.lowerLeft_X = t || 0,
            i.lowerLeft_Y = this.internal.pageSize.height - e || 0,
            i.upperRight_X = t + n || 0,
            i.upperRight_Y = this.internal.pageSize.height - e + r || 0)
        } else
            Array.isArray(t) ? (i.lowerLeft_X = t[0] || 0,
            i.lowerLeft_Y = t[1] || 0,
            i.upperRight_X = t[0] + t[2] || 0,
            i.upperRight_Y = t[1] + t[3] || 0) : (i.lowerLeft_X = t || 0,
            i.lowerLeft_Y = e || 0,
            i.upperRight_X = t + n || 0,
            i.upperRight_Y = e + r || 0);
        return [i.lowerLeft_X, i.lowerLeft_Y, i.upperRight_X, i.upperRight_Y]
    }
    ,
    C.internal.calculateColor = function(t, e, n) {
        var r = new Array(3);
        return r.r = 0 | t,
        r.g = 0 | e,
        r.b = 0 | n,
        r
    }
    ,
    C.internal.getBitPosition = function(t, e) {
        var n = 1;
        return (t = t || 0) | (n <<= e - 1)
    }
    ,
    C.internal.setBitPosition = function(t, e, n) {
        t = t || 0;
        var r = 1;
        if (r <<= e - 1,
        1 == (n = n || 1))
            t = t | r;
        else
            t = t & ~r;
        return t
    }
    ,
    e.API.addHTML = function(t, e, n, r, i) {
        if ("undefined" == typeof html2canvas && "undefined" == typeof rasterizeHTML)
            throw new Error("You need either https://github.com/niklasvh/html2canvas or https://github.com/cburgmer/rasterizeHTML.js");
        "number" != typeof e && (r = e,
        i = n),
        "function" == typeof r && (i = r,
        r = null);
        var o = this.internal
          , s = o.scaleFactor
          , a = o.pageSize.width
          , c = o.pageSize.height;
        if ((r = r || {}).onrendered = function(t) {
            e = parseInt(e) || 0,
            n = parseInt(n) || 0;
            var o = r.dim || {}
              , l = o.h || 0
              , u = o.w || Math.min(a, t.width / s) - e
              , h = "JPEG";
            if (r.format && (h = r.format),
            t.height > c && r.pagesplit) {
                var f = function() {
                    for (var r = 0; ; ) {
                        var o = document.createElement("canvas");
                        o.width = Math.min(a * s, t.width),
                        o.height = Math.min(c * s, t.height - r),
                        o.getContext("2d").drawImage(t, 0, r, t.width, o.height, 0, 0, o.width, o.height);
                        var l = [o, e, r ? 0 : n, o.width / s, o.height / s, h, null, "SLOW"];
                        if (this.addImage.apply(this, l),
                        (r += o.height) >= t.height)
                            break;
                        this.addPage()
                    }
                    i(u, r, null, l)
                }
                .bind(this);
                if ("CANVAS" === t.nodeName) {
                    var d = new Image;
                    d.onload = f,
                    d.src = t.toDataURL("image/png"),
                    t = d
                } else
                    f()
            } else {
                var p = Math.random().toString(35)
                  , g = [t, e, n, u, l, h, p, "SLOW"];
                this.addImage.apply(this, g),
                i(u, l, p, g)
            }
        }
        .bind(this),
        "undefined" != typeof html2canvas && !r.rstz)
            return html2canvas(t, r);
        if ("undefined" != typeof rasterizeHTML) {
            var l = "drawDocument";
            return "string" == typeof t && (l = /^http/.test(t) ? "drawURL" : "drawHTML"),
            r.width = r.width || a * s,
            rasterizeHTML[l](t, void 0, r).then(function(t) {
                r.onrendered(t.image)
            }, function(t) {
                i(null, t)
            })
        }
        return null
    }
    ,
    function(e) {
        var n = ["jpeg", "jpg", "png"]
          , r = function t(e) {
            var n = this.internal.newObject()
              , r = this.internal.write
              , i = this.internal.putStream;
            if (e.n = n,
            r("<</Type /XObject"),
            r("/Subtype /Image"),
            r("/Width " + e.w),
            r("/Height " + e.h),
            e.cs === this.color_spaces.INDEXED ? r("/ColorSpace [/Indexed /DeviceRGB " + (e.pal.length / 3 - 1) + " " + ("smask"in e ? n + 2 : n + 1) + " 0 R]") : (r("/ColorSpace /" + e.cs),
            e.cs === this.color_spaces.DEVICE_CMYK && r("/Decode [1 0 1 0 1 0 1 0]")),
            r("/BitsPerComponent " + e.bpc),
            "f"in e && r("/Filter /" + e.f),
            "dp"in e && r("/DecodeParms <<" + e.dp + ">>"),
            "trns"in e && e.trns.constructor == Array) {
                for (var o = "", s = 0, a = e.trns.length; s < a; s++)
                    o += e.trns[s] + " " + e.trns[s] + " ";
                r("/Mask [" + o + "]")
            }
            if ("smask"in e && r("/SMask " + (n + 1) + " 0 R"),
            r("/Length " + e.data.length + ">>"),
            i(e.data),
            r("endobj"),
            "smask"in e) {
                var c = "/Predictor " + e.p + " /Colors 1 /BitsPerComponent " + e.bpc + " /Columns " + e.w
                  , l = {
                    w: e.w,
                    h: e.h,
                    cs: "DeviceGray",
                    bpc: e.bpc,
                    dp: c,
                    data: e.smask
                };
                "f"in e && (l.f = e.f),
                t.call(this, l)
            }
            e.cs === this.color_spaces.INDEXED && (this.internal.newObject(),
            r("<< /Length " + e.pal.length + ">>"),
            i(this.arrayBufferToBinaryString(new Uint8Array(e.pal))),
            r("endobj"))
        }
          , i = function() {
            var t = this.internal.collections.addImage_images;
            for (var e in t)
                r.call(this, t[e])
        }
          , o = function() {
            var t, e = this.internal.collections.addImage_images, n = this.internal.write;
            for (var r in e)
                n("/I" + (t = e[r]).i, t.n, "0", "R")
        }
          , s = function(e) {
            return "object" === (void 0 === e ? "undefined" : t(e)) && 1 === e.nodeType
        }
          , a = function(t, e) {
            var n;
            if (e)
                for (var r in e)
                    if (t === e[r].alias) {
                        n = e[r];
                        break
                    }
            return n
        };
        e.color_spaces = {
            DEVICE_RGB: "DeviceRGB",
            DEVICE_GRAY: "DeviceGray",
            DEVICE_CMYK: "DeviceCMYK",
            CAL_GREY: "CalGray",
            CAL_RGB: "CalRGB",
            LAB: "Lab",
            ICC_BASED: "ICCBased",
            INDEXED: "Indexed",
            PATTERN: "Pattern",
            SEPARATION: "Separation",
            DEVICE_N: "DeviceN"
        },
        e.decode = {
            DCT_DECODE: "DCTDecode",
            FLATE_DECODE: "FlateDecode",
            LZW_DECODE: "LZWDecode",
            JPX_DECODE: "JPXDecode",
            JBIG2_DECODE: "JBIG2Decode",
            ASCII85_DECODE: "ASCII85Decode",
            ASCII_HEX_DECODE: "ASCIIHexDecode",
            RUN_LENGTH_DECODE: "RunLengthDecode",
            CCITT_FAX_DECODE: "CCITTFaxDecode"
        },
        e.image_compression = {
            NONE: "NONE",
            FAST: "FAST",
            MEDIUM: "MEDIUM",
            SLOW: "SLOW"
        },
        e.sHashCode = function(t) {
            return Array.prototype.reduce && t.split("").reduce(function(t, e) {
                return (t = (t << 5) - t + e.charCodeAt(0)) & t
            }, 0)
        }
        ,
        e.isString = function(t) {
            return "string" == typeof t
        }
        ,
        e.extractInfoFromBase64DataURI = function(t) {
            return /^data:([\w]+?\/([\w]+?));base64,(.+?)$/g.exec(t)
        }
        ,
        e.supportsArrayBuffer = function() {
            return "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array
        }
        ,
        e.isArrayBuffer = function(t) {
            return !!this.supportsArrayBuffer() && t instanceof ArrayBuffer
        }
        ,
        e.isArrayBufferView = function(t) {
            return !!this.supportsArrayBuffer() && ("undefined" != typeof Uint32Array && (t instanceof Int8Array || t instanceof Uint8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array))
        }
        ,
        e.binaryStringToUint8Array = function(t) {
            for (var e = t.length, n = new Uint8Array(e), r = 0; r < e; r++)
                n[r] = t.charCodeAt(r);
            return n
        }
        ,
        e.arrayBufferToBinaryString = function(t) {
            this.isArrayBuffer(t) && (t = new Uint8Array(t));
            for (var e = "", n = t.byteLength, r = 0; r < n; r++)
                e += String.fromCharCode(t[r]);
            return e
        }
        ,
        e.arrayBufferToBase64 = function(t) {
            for (var e, n = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = new Uint8Array(t), o = i.byteLength, s = o % 3, a = o - s, c = 0; c < a; c += 3)
                n += r[(16515072 & (e = i[c] << 16 | i[c + 1] << 8 | i[c + 2])) >> 18] + r[(258048 & e) >> 12] + r[(4032 & e) >> 6] + r[63 & e];
            return 1 == s ? n += r[(252 & (e = i[a])) >> 2] + r[(3 & e) << 4] + "==" : 2 == s && (n += r[(64512 & (e = i[a] << 8 | i[a + 1])) >> 10] + r[(1008 & e) >> 4] + r[(15 & e) << 2] + "="),
            n
        }
        ,
        e.createImageInfo = function(t, e, n, r, i, o, s, a, c, l, u, h, f) {
            var d = {
                alias: a,
                w: e,
                h: n,
                cs: r,
                bpc: i,
                i: s,
                data: t
            };
            return o && (d.f = o),
            c && (d.dp = c),
            l && (d.trns = l),
            u && (d.pal = u),
            h && (d.smask = h),
            f && (d.p = f),
            d
        }
        ,
        e.addImage = function(r, c, l, u, h, f, d, p, g) {
            if ("string" != typeof c) {
                var m = f;
                f = h,
                h = u,
                u = l,
                l = c,
                c = m
            }
            if ("object" === (void 0 === r ? "undefined" : t(r)) && !s(r) && "imageData"in r) {
                var w = r;
                r = w.imageData,
                c = w.format || c,
                l = w.x || l || 0,
                u = w.y || u || 0,
                h = w.w || h,
                f = w.h || f,
                d = w.alias || d,
                p = w.compression || p,
                g = w.rotation || w.angle || g
            }
            if (isNaN(l) || isNaN(u))
                throw console.error("jsPDF.addImage: Invalid coordinates", arguments),
                new Error("Invalid coordinates passed to jsPDF.addImage");
            var y, v, b, x, k = function() {
                var t = this.internal.collections.addImage_images;
                return t || (this.internal.collections.addImage_images = t = {},
                this.internal.events.subscribe("putResources", i),
                this.internal.events.subscribe("putXobjectDict", o)),
                t
            }
            .call(this);
            if (!(y = a(r, k)) && (s(r) && (r = function(e, n, r) {
                if ("IMG" === e.nodeName && e.hasAttribute("src")) {
                    var i = "" + e.getAttribute("src");
                    if (!r && 0 === i.indexOf("data:image/"))
                        return i;
                    !n && /\.png(?:[?#].*)?$/i.test(i) && (n = "png")
                }
                if ("CANVAS" === e.nodeName)
                    var o = e;
                else {
                    (o = document.createElement("canvas")).width = e.clientWidth || e.width,
                    o.height = e.clientHeight || e.height;
                    var s = o.getContext("2d");
                    if (!s)
                        throw "addImage requires canvas to be supported by browser.";
                    if (r) {
                        var a, c, l, u, h, f, d, p, g = Math.PI / 180;
                        "object" === (void 0 === r ? "undefined" : t(r)) && (a = r.x,
                        c = r.y,
                        l = r.bg,
                        r = r.angle),
                        p = r * g,
                        u = Math.abs(Math.cos(p)),
                        h = Math.abs(Math.sin(p)),
                        f = o.width,
                        d = o.height,
                        o.width = d * h + f * u,
                        o.height = d * u + f * h,
                        isNaN(a) && (a = o.width / 2),
                        isNaN(c) && (c = o.height / 2),
                        s.clearRect(0, 0, o.width, o.height),
                        s.fillStyle = l || "white",
                        s.fillRect(0, 0, o.width, o.height),
                        s.save(),
                        s.translate(a, c),
                        s.rotate(p),
                        s.drawImage(e, -f / 2, -d / 2),
                        s.rotate(-p),
                        s.translate(-a, -c),
                        s.restore()
                    } else
                        s.drawImage(e, 0, 0, o.width, o.height)
                }
                return o.toDataURL("png" == ("" + n).toLowerCase() ? "image/png" : "image/jpeg")
            }(r, c, g)),
            null == d && (d = "string" == typeof (x = r) && e.sHashCode(x)),
            !(y = a(d, k)))) {
                if (this.isString(r)) {
                    var _ = this.extractInfoFromBase64DataURI(r);
                    _ ? (c = _[2],
                    r = atob(_[3])) : 137 === r.charCodeAt(0) && 80 === r.charCodeAt(1) && 78 === r.charCodeAt(2) && 71 === r.charCodeAt(3) && (c = "png")
                }
                if (c = (c || "JPEG").toLowerCase(),
                b = c,
                -1 === n.indexOf(b))
                    throw new Error("addImage currently only supports formats " + n + ", not '" + c + "'");
                if (function(t) {
                    return "function" != typeof e["process" + t.toUpperCase()]
                }(c))
                    throw new Error("please ensure that the plugin for '" + c + "' support is added");
                if (this.supportsArrayBuffer() && (r instanceof Uint8Array || (v = r,
                r = this.binaryStringToUint8Array(r))),
                !(y = this["process" + c.toUpperCase()](r, function(t) {
                    var e = 0;
                    return t && (e = Object.keys ? Object.keys(t).length : function(t) {
                        var e = 0;
                        for (var n in t)
                            t.hasOwnProperty(n) && e++;
                        return e
                    }(t)),
                    e
                }(k), d, function(t) {
                    return t && "string" == typeof t && (t = t.toUpperCase()),
                    t in e.image_compression ? t : e.image_compression.NONE
                }(p), v)))
                    throw new Error("An unkwown error occurred whilst processing the image")
            }
            return function(t, e, n, r, i, o, s) {
                var a = function(t, e, n) {
                    return t || e || (t = -96,
                    e = -96),
                    t < 0 && (t = -1 * n.w * 72 / t / this.internal.scaleFactor),
                    e < 0 && (e = -1 * n.h * 72 / e / this.internal.scaleFactor),
                    0 === t && (t = e * n.w / n.h),
                    0 === e && (e = t * n.h / n.w),
                    [t, e]
                }
                .call(this, n, r, i)
                  , c = this.internal.getCoordinateString
                  , l = this.internal.getVerticalCoordinateString;
                n = a[0],
                r = a[1],
                s[o] = i,
                this.internal.write("q", c(n), "0 0", c(r), c(t), l(e + r), "cm /I" + i.i, "Do Q")
            }
            .call(this, l, u, h, f, y, y.i, k),
            this
        }
        ;
        var c = function(t, e) {
            return t.subarray(e, e + 5)
        };
        e.processJPEG = function(t, e, n, r, i) {
            var o, s = this.color_spaces.DEVICE_RGB, a = this.decode.DCT_DECODE;
            return this.isString(t) ? (o = function(t) {
                var e;
                if (255 === !t.charCodeAt(0) || 216 === !t.charCodeAt(1) || 255 === !t.charCodeAt(2) || 224 === !t.charCodeAt(3) || !t.charCodeAt(6) === "J".charCodeAt(0) || !t.charCodeAt(7) === "F".charCodeAt(0) || !t.charCodeAt(8) === "I".charCodeAt(0) || !t.charCodeAt(9) === "F".charCodeAt(0) || 0 === !t.charCodeAt(10))
                    throw new Error("getJpegSize requires a binary string jpeg file");
                for (var n = 256 * t.charCodeAt(4) + t.charCodeAt(5), r = 4, i = t.length; r < i; ) {
                    if (r += n,
                    255 !== t.charCodeAt(r))
                        throw new Error("getJpegSize could not find the size of the image");
                    if (192 === t.charCodeAt(r + 1) || 193 === t.charCodeAt(r + 1) || 194 === t.charCodeAt(r + 1) || 195 === t.charCodeAt(r + 1) || 196 === t.charCodeAt(r + 1) || 197 === t.charCodeAt(r + 1) || 198 === t.charCodeAt(r + 1) || 199 === t.charCodeAt(r + 1))
                        return e = 256 * t.charCodeAt(r + 5) + t.charCodeAt(r + 6),
                        [256 * t.charCodeAt(r + 7) + t.charCodeAt(r + 8), e, t.charCodeAt(r + 9)];
                    r += 2,
                    n = 256 * t.charCodeAt(r) + t.charCodeAt(r + 1)
                }
            }(t),
            this.createImageInfo(t, o[0], o[1], 1 == o[3] ? this.color_spaces.DEVICE_GRAY : s, 8, a, e, n)) : (this.isArrayBuffer(t) && (t = new Uint8Array(t)),
            this.isArrayBufferView(t) ? (o = function(t) {
                if (65496 != (t[0] << 8 | t[1]))
                    throw new Error("Supplied data is not a JPEG");
                for (var e, n = t.length, r = (t[4] << 8) + t[5], i = 4; i < n; ) {
                    if (r = ((e = c(t, i += r))[2] << 8) + e[3],
                    (192 === e[1] || 194 === e[1]) && 255 === e[0] && r > 7)
                        return {
                            width: ((e = c(t, i + 5))[2] << 8) + e[3],
                            height: (e[0] << 8) + e[1],
                            numcomponents: e[4]
                        };
                    i += 2
                }
                throw new Error("getJpegSizeFromBytes could not find the size of the image")
            }(t),
            t = i || this.arrayBufferToBinaryString(t),
            this.createImageInfo(t, o.width, o.height, 1 == o.numcomponents ? this.color_spaces.DEVICE_GRAY : s, 8, a, e, n)) : null)
        }
        ,
        e.processJPG = function() {
            return this.processJPEG.apply(this, arguments)
        }
    }(e.API),
    function(t) {
        var n = {
            annotations: [],
            f2: function(t) {
                return t.toFixed(2)
            },
            notEmpty: function(t) {
                if (void 0 !== t && "" != t)
                    return !0
            }
        };
        e.API.annotationPlugin = n,
        e.API.events.push(["addPage", function(t) {
            this.annotationPlugin.annotations[t.pageNumber] = []
        }
        ]),
        t.events.push(["putPage", function(t) {
            for (var e = this.annotationPlugin.annotations[t.pageNumber], r = !1, i = 0; i < e.length && !r; i++) {
                switch ((l = e[i]).type) {
                case "link":
                    if (n.notEmpty(l.options.url) || n.notEmpty(l.options.pageNumber)) {
                        r = !0;
                        break
                    }
                case "reference":
                case "text":
                case "freetext":
                    r = !0
                }
            }
            if (0 != r) {
                this.internal.write("/Annots [");
                var o = this.annotationPlugin.f2
                  , s = this.internal.scaleFactor
                  , a = this.internal.pageSize.height
                  , c = this.internal.getPageInfo(t.pageNumber);
                for (i = 0; i < e.length; i++) {
                    var l;
                    switch ((l = e[i]).type) {
                    case "reference":
                        this.internal.write(" " + l.object.objId + " 0 R ");
                        break;
                    case "text":
                        var u = this.internal.newAdditionalObject()
                          , h = this.internal.newAdditionalObject()
                          , f = l.title || "Note";
                        w = "<</Type /Annot /Subtype /Text " + (p = "/Rect [" + o(l.bounds.x * s) + " " + o(a - (l.bounds.y + l.bounds.h) * s) + " " + o((l.bounds.x + l.bounds.w) * s) + " " + o((a - l.bounds.y) * s) + "] ") + "/Contents (" + l.contents + ")",
                        w += " /Popup " + h.objId + " 0 R",
                        w += " /P " + c.objId + " 0 R",
                        w += " /T (" + f + ") >>",
                        u.content = w;
                        var d = u.objId + " 0 R";
                        w = "<</Type /Annot /Subtype /Popup " + (p = "/Rect [" + o((l.bounds.x + 30) * s) + " " + o(a - (l.bounds.y + l.bounds.h) * s) + " " + o((l.bounds.x + l.bounds.w + 30) * s) + " " + o((a - l.bounds.y) * s) + "] ") + " /Parent " + d,
                        l.open && (w += " /Open true"),
                        w += " >>",
                        h.content = w,
                        this.internal.write(u.objId, "0 R", h.objId, "0 R");
                        break;
                    case "freetext":
                        var p = "/Rect [" + o(l.bounds.x * s) + " " + o((a - l.bounds.y) * s) + " " + o(l.bounds.x + l.bounds.w * s) + " " + o(a - (l.bounds.y + l.bounds.h) * s) + "] "
                          , g = l.color || "#000000";
                        w = "<</Type /Annot /Subtype /FreeText " + p + "/Contents (" + l.contents + ")",
                        w += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + g + ")",
                        w += " /Border [0 0 0]",
                        w += " >>",
                        this.internal.write(w);
                        break;
                    case "link":
                        if (l.options.name) {
                            var m = this.annotations._nameMap[l.options.name];
                            l.options.pageNumber = m.page,
                            l.options.top = m.y
                        } else
                            l.options.top || (l.options.top = 0);
                        p = "/Rect [" + o(l.x * s) + " " + o((a - l.y) * s) + " " + o(l.x + l.w * s) + " " + o(a - (l.y + l.h) * s) + "] ";
                        var w = "";
                        if (l.options.url)
                            w = "<</Type /Annot /Subtype /Link " + p + "/Border [0 0 0] /A <</S /URI /URI (" + l.options.url + ") >>";
                        else if (l.options.pageNumber) {
                            switch (w = "<</Type /Annot /Subtype /Link " + p + "/Border [0 0 0] /Dest [" + (t = this.internal.getPageInfo(l.options.pageNumber)).objId + " 0 R",
                            l.options.magFactor = l.options.magFactor || "XYZ",
                            l.options.magFactor) {
                            case "Fit":
                                w += " /Fit]";
                                break;
                            case "FitH":
                                w += " /FitH " + l.options.top + "]";
                                break;
                            case "FitV":
                                l.options.left = l.options.left || 0,
                                w += " /FitV " + l.options.left + "]";
                                break;
                            case "XYZ":
                            default:
                                var y = o((a - l.options.top) * s);
                                l.options.left = l.options.left || 0,
                                void 0 === l.options.zoom && (l.options.zoom = 0),
                                w += " /XYZ " + l.options.left + " " + y + " " + l.options.zoom + "]"
                            }
                        }
                        "" != w && (w += " >>",
                        this.internal.write(w))
                    }
                }
                this.internal.write("]")
            }
        }
        ]),
        t.createAnnotation = function(t) {
            switch (t.type) {
            case "link":
                this.link(t.bounds.x, t.bounds.y, t.bounds.w, t.bounds.h, t);
                break;
            case "text":
            case "freetext":
                this.annotationPlugin.annotations[this.internal.getCurrentPageInfo().pageNumber].push(t)
            }
        }
        ,
        t.link = function(t, e, n, r, i) {
            this.annotationPlugin.annotations[this.internal.getCurrentPageInfo().pageNumber].push({
                x: t,
                y: e,
                w: n,
                h: r,
                options: i,
                type: "link"
            })
        }
        ,
        t.link = function(t, e, n, r, i) {
            this.annotationPlugin.annotations[this.internal.getCurrentPageInfo().pageNumber].push({
                x: t,
                y: e,
                w: n,
                h: r,
                options: i,
                type: "link"
            })
        }
        ,
        t.textWithLink = function(t, e, n, r) {
            var i = this.getTextWidth(t)
              , o = this.internal.getLineHeight();
            return this.text(t, e, n),
            n += .2 * o,
            this.link(e, n - o, i, o, r),
            i
        }
        ,
        t.getTextWidth = function(t) {
            var e = this.internal.getFontSize();
            return this.getStringUnitWidth(t) * e / this.internal.scaleFactor
        }
        ,
        t.getLineHeight = function() {
            return this.internal.getLineHeight()
        }
    }(e.API),
    e.API.autoPrint = function() {
        var t;
        return this.internal.events.subscribe("postPutResources", function() {
            t = this.internal.newObject(),
            this.internal.write("<< /S/Named /Type/Action /N/Print >>", "endobj")
        }),
        this.internal.events.subscribe("putCatalog", function() {
            this.internal.write("/OpenAction " + t + " 0 R")
        }),
        this
    }
    ,
    function(t) {
        t.events.push(["initialized", function() {
            this.canvas.pdf = this
        }
        ]),
        t.canvas = {
            getContext: function(t) {
                return this.pdf.context2d._canvas = this,
                this.pdf.context2d
            },
            style: {}
        },
        Object.defineProperty(t.canvas, "width", {
            get: function() {
                return this._width
            },
            set: function(t) {
                this._width = t,
                this.getContext("2d").pageWrapX = t + 1
            }
        }),
        Object.defineProperty(t.canvas, "height", {
            get: function() {
                return this._height
            },
            set: function(t) {
                this._height = t,
                this.getContext("2d").pageWrapY = t + 1
            }
        })
    }(e.API),
    n = e.API,
    c = {
        x: void 0,
        y: void 0,
        w: void 0,
        h: void 0,
        ln: void 0
    },
    l = 1,
    u = function(t, e, n, r, i) {
        c = {
            x: t,
            y: e,
            w: n,
            h: r,
            ln: i
        }
    }
    ,
    h = function() {
        return c
    }
    ,
    f = {
        left: 0,
        top: 0,
        bottom: 0
    },
    n.setHeaderFunction = function(t) {
        a = t
    }
    ,
    n.getTextDimensions = function(t) {
        var e, n;
        i = this.internal.getFont().fontName,
        o = this.table_font_size || this.internal.getFontSize(),
        s = this.internal.getFont().fontStyle,
        (n = document.createElement("font")).id = "jsPDFCell";
        try {
            n.style.fontStyle = s
        } catch (t) {
            n.style.fontWeight = s
        }
        n.style.fontName = i,
        n.style.fontSize = o + "pt";
        try {
            n.textContent = t
        } catch (e) {
            n.innerText = t
        }
        return document.body.appendChild(n),
        e = {
            w: (n.offsetWidth + 1) * (19.049976 / 25.4),
            h: (n.offsetHeight + 1) * (19.049976 / 25.4)
        },
        document.body.removeChild(n),
        e
    }
    ,
    n.cellAddPage = function() {
        var t = this.margins || f;
        this.addPage(),
        u(t.left, t.top, void 0, void 0),
        l += 1
    }
    ,
    n.cellInitialize = function() {
        c = {
            x: void 0,
            y: void 0,
            w: void 0,
            h: void 0,
            ln: void 0
        },
        l = 1
    }
    ,
    n.cell = function(t, e, n, r, i, o, s) {
        var a = h()
          , c = !1;
        if (void 0 !== a.ln)
            if (a.ln === o)
                t = a.x + a.w,
                e = a.y;
            else {
                var l = this.margins || f;
                a.y + a.h + r + 13 >= this.internal.pageSize.height - l.bottom && (this.cellAddPage(),
                c = !0,
                this.printHeaders && this.tableHeaderRow && this.printHeaderRow(o, !0)),
                e = h().y + h().h,
                c && (e = 23)
            }
        if (void 0 !== i[0])
            if (this.printingHeaderRow ? this.rect(t, e, n, r, "FD") : this.rect(t, e, n, r),
            "right" === s) {
                i instanceof Array || (i = [i]);
                for (var d = 0; d < i.length; d++) {
                    var p = i[d]
                      , g = this.getStringUnitWidth(p) * this.internal.getFontSize();
                    this.text(p, t + n - g - 3, e + this.internal.getLineHeight() * (d + 1))
                }
            } else
                this.text(i, t + 3, e + this.internal.getLineHeight());
        return u(t, e, n, r, o),
        this
    }
    ,
    n.arrayMax = function(t, e) {
        var n, r, i, o = t[0];
        for (n = 0,
        r = t.length; n < r; n += 1)
            i = t[n],
            e ? -1 === e(o, i) && (o = i) : i > o && (o = i);
        return o
    }
    ,
    n.table = function(t, e, r, i, o) {
        if (!r)
            throw "No data for PDF table";
        var s, a, u, h, d, p, g, m, w, y, v = [], b = [], x = {}, k = {}, _ = [], C = [], A = !1, S = !0, q = 12, T = f;
        if (T.width = this.internal.pageSize.width,
        o && (!0 === o.autoSize && (A = !0),
        !1 === o.printHeaders && (S = !1),
        o.fontSize && (q = o.fontSize),
        o.css && void 0 !== o.css["font-size"] && (q = 16 * o.css["font-size"]),
        o.margins && (T = o.margins)),
        this.lnMod = 0,
        c = {
            x: void 0,
            y: void 0,
            w: void 0,
            h: void 0,
            ln: void 0
        },
        l = 1,
        this.printHeaders = S,
        this.margins = T,
        this.setFontSize(q),
        this.table_font_size = q,
        null == i)
            v = Object.keys(r[0]);
        else if (i[0] && "string" != typeof i[0])
            for (a = 0,
            u = i.length; a < u; a += 1)
                s = i[a],
                v.push(s.name),
                b.push(s.prompt),
                k[s.name] = s.width * (19.049976 / 25.4);
        else
            v = i;
        if (A)
            for (y = function(t) {
                return t[s]
            }
            ,
            a = 0,
            u = v.length; a < u; a += 1) {
                for (x[s = v[a]] = r.map(y),
                _.push(this.getTextDimensions(b[a] || s).w),
                g = 0,
                h = (p = x[s]).length; g < h; g += 1)
                    d = p[g],
                    _.push(this.getTextDimensions(d).w);
                k[s] = n.arrayMax(_),
                _ = []
            }
        if (S) {
            var I = this.calculateLineHeight(v, k, b.length ? b : v);
            for (a = 0,
            u = v.length; a < u; a += 1)
                s = v[a],
                C.push([t, e, k[s], I, String(b.length ? b[a] : s)]);
            this.setTableHeaderRow(C),
            this.printHeaderRow(1, !1)
        }
        for (a = 0,
        u = r.length; a < u; a += 1)
            for (m = r[a],
            I = this.calculateLineHeight(v, k, m),
            g = 0,
            w = v.length; g < w; g += 1)
                s = v[g],
                this.cell(t, e, k[s], I, m[s], a + 2, s.align);
        return this.lastCellPos = c,
        this.table_x = t,
        this.table_y = e,
        this
    }
    ,
    n.calculateLineHeight = function(t, e, n) {
        for (var r, i = 0, o = 0; o < t.length; o++) {
            n[r = t[o]] = this.splitTextToSize(String(n[r]), e[r] - 3);
            var s = this.internal.getLineHeight() * n[r].length + 3;
            s > i && (i = s)
        }
        return i
    }
    ,
    n.setTableHeaderRow = function(t) {
        this.tableHeaderRow = t
    }
    ,
    n.printHeaderRow = function(t, e) {
        if (!this.tableHeaderRow)
            throw "Property tableHeaderRow does not exist.";
        var n, r, i, o;
        if (this.printingHeaderRow = !0,
        void 0 !== a) {
            var s = a(this, l);
            u(s[0], s[1], s[2], s[3], -1)
        }
        this.setFontStyle("bold");
        var c = [];
        for (i = 0,
        o = this.tableHeaderRow.length; i < o; i += 1)
            this.setFillColor(200, 200, 200),
            n = this.tableHeaderRow[i],
            e && (this.margins.top = 13,
            n[1] = this.margins && this.margins.top || 0,
            c.push(n)),
            r = [].concat(n),
            this.cell.apply(this, r.concat(t));
        c.length > 0 && this.setTableHeaderRow(c),
        this.setFontStyle("normal"),
        this.printingHeaderRow = !1
    }
    ,
    function(t) {
        t.events.push(["initialized", function() {
            this.context2d.pdf = this,
            this.context2d.internal.pdf = this,
            this.context2d.ctx = new n,
            this.context2d.ctxStack = [],
            this.context2d.path = []
        }
        ]),
        t.context2d = {
            pageWrapXEnabled: !1,
            pageWrapYEnabled: !1,
            pageWrapX: 9999999,
            pageWrapY: 9999999,
            ctx: new n,
            f2: function(t) {
                return t.toFixed(2)
            },
            fillRect: function(t, e, n, r) {
                if (!this._isFillTransparent()) {
                    t = this._wrapX(t),
                    e = this._wrapY(e);
                    var i = this._matrix_map_rect(this.ctx._transform, {
                        x: t,
                        y: e,
                        w: n,
                        h: r
                    });
                    this.pdf.rect(i.x, i.y, i.w, i.h, "f")
                }
            },
            strokeRect: function(t, e, n, r) {
                if (!this._isStrokeTransparent()) {
                    t = this._wrapX(t),
                    e = this._wrapY(e);
                    var i = this._matrix_map_rect(this.ctx._transform, {
                        x: t,
                        y: e,
                        w: n,
                        h: r
                    });
                    this.pdf.rect(i.x, i.y, i.w, i.h, "s")
                }
            },
            clearRect: function(t, e, n, r) {
                if (!this.ctx.ignoreClearRect) {
                    t = this._wrapX(t),
                    e = this._wrapY(e);
                    var i = this._matrix_map_rect(this.ctx._transform, {
                        x: t,
                        y: e,
                        w: n,
                        h: r
                    });
                    this.save(),
                    this.setFillStyle("#ffffff"),
                    this.pdf.rect(i.x, i.y, i.w, i.h, "f"),
                    this.restore()
                }
            },
            save: function() {
                this.ctx._fontSize = this.pdf.internal.getFontSize();
                var t = new n;
                t.copy(this.ctx),
                this.ctxStack.push(this.ctx),
                this.ctx = t
            },
            restore: function() {
                this.ctx = this.ctxStack.pop(),
                this.setFillStyle(this.ctx.fillStyle),
                this.setStrokeStyle(this.ctx.strokeStyle),
                this.setFont(this.ctx.font),
                this.pdf.setFontSize(this.ctx._fontSize),
                this.setLineCap(this.ctx.lineCap),
                this.setLineWidth(this.ctx.lineWidth),
                this.setLineJoin(this.ctx.lineJoin)
            },
            rect: function(t, e, n, r) {
                this.moveTo(t, e),
                this.lineTo(t + n, e),
                this.lineTo(t + n, e + r),
                this.lineTo(t, e + r),
                this.lineTo(t, e),
                this.closePath()
            },
            beginPath: function() {
                this.path = []
            },
            closePath: function() {
                this.path.push({
                    type: "close"
                })
            },
            _getRgba: function(t) {
                var e = {};
                if (this.internal.rxTransparent.test(t))
                    e.r = 0,
                    e.g = 0,
                    e.b = 0,
                    e.a = 0;
                else {
                    var n = this.internal.rxRgb.exec(t);
                    null != n ? (e.r = parseInt(n[1]),
                    e.g = parseInt(n[2]),
                    e.b = parseInt(n[3]),
                    e.a = 1) : null != (n = this.internal.rxRgba.exec(t)) ? (e.r = parseInt(n[1]),
                    e.g = parseInt(n[2]),
                    e.b = parseInt(n[3]),
                    e.a = parseFloat(n[4])) : (e.a = 1,
                    "#" != t.charAt(0) && ((t = S.colorNameToHex(t)) || (t = "#000000")),
                    4 === t.length ? (e.r = t.substring(1, 2),
                    e.r += r,
                    e.g = t.substring(2, 3),
                    e.g += g,
                    e.b = t.substring(3, 4),
                    e.b += b) : (e.r = t.substring(1, 3),
                    e.g = t.substring(3, 5),
                    e.b = t.substring(5, 7)),
                    e.r = parseInt(e.r, 16),
                    e.g = parseInt(e.g, 16),
                    e.b = parseInt(e.b, 16))
                }
                return e.style = t,
                e
            },
            setFillStyle: function(t) {
                var e, n, r, i;
                if (this.internal.rxTransparent.test(t))
                    e = 0,
                    n = 0,
                    r = 0,
                    i = 0;
                else {
                    var o = this.internal.rxRgb.exec(t);
                    null != o ? (e = parseInt(o[1]),
                    n = parseInt(o[2]),
                    r = parseInt(o[3]),
                    i = 1) : null != (o = this.internal.rxRgba.exec(t)) ? (e = parseInt(o[1]),
                    n = parseInt(o[2]),
                    r = parseInt(o[3]),
                    i = parseFloat(o[4])) : (i = 1,
                    "#" != t.charAt(0) && ((t = S.colorNameToHex(t)) || (t = "#000000")),
                    4 === t.length ? (e = t.substring(1, 2),
                    e += e,
                    n = t.substring(2, 3),
                    n += n,
                    r = t.substring(3, 4),
                    r += r) : (e = t.substring(1, 3),
                    n = t.substring(3, 5),
                    r = t.substring(5, 7)),
                    e = parseInt(e, 16),
                    n = parseInt(n, 16),
                    r = parseInt(r, 16))
                }
                this.ctx.fillStyle = t,
                this.ctx._isFillTransparent = 0 == i,
                this.ctx._fillOpacity = i,
                this.pdf.setFillColor(e, n, r, {
                    a: i
                }),
                this.pdf.setTextColor(e, n, r, {
                    a: i
                })
            },
            setStrokeStyle: function(t) {
                var e = this._getRgba(t);
                this.ctx.strokeStyle = e.style,
                this.ctx._isStrokeTransparent = 0 == e.a,
                this.ctx._strokeOpacity = e.a,
                0 === e.a ? this.pdf.setDrawColor(255, 255, 255) : (e.a,
                this.pdf.setDrawColor(e.r, e.g, e.b))
            },
            fillText: function(t, e, n, r) {
                if (!this._isFillTransparent()) {
                    e = this._wrapX(e),
                    n = this._wrapY(n);
                    var i = this._matrix_map_point(this.ctx._transform, [e, n]);
                    e = i[0],
                    n = i[1];
                    var o = 57.2958 * this._matrix_rotation(this.ctx._transform);
                    if (this.ctx._clip_path.length > 0) {
                        var s;
                        (s = window.outIntercept ? "group" === window.outIntercept.type ? window.outIntercept.stream : window.outIntercept : this.pdf.internal.pages[1]).push("q");
                        var a = this.path;
                        this.path = this.ctx._clip_path,
                        this.ctx._clip_path = [],
                        this._fill(null, !0),
                        this.ctx._clip_path = this.path,
                        this.path = a
                    }
                    this.pdf.text(t, e, this._getBaseline(n), null, o),
                    this.ctx._clip_path.length > 0 && s.push("Q")
                }
            },
            strokeText: function(t, e, n, r) {
                if (!this._isStrokeTransparent()) {
                    e = this._wrapX(e),
                    n = this._wrapY(n);
                    var i = this._matrix_map_point(this.ctx._transform, [e, n]);
                    e = i[0],
                    n = i[1];
                    var o = 57.2958 * this._matrix_rotation(this.ctx._transform);
                    if (this.ctx._clip_path.length > 0) {
                        var s;
                        (s = window.outIntercept ? "group" === window.outIntercept.type ? window.outIntercept.stream : window.outIntercept : this.pdf.internal.pages[1]).push("q");
                        var a = this.path;
                        this.path = this.ctx._clip_path,
                        this.ctx._clip_path = [],
                        this._fill(null, !0),
                        this.ctx._clip_path = this.path,
                        this.path = a
                    }
                    this.pdf.text(t, e, this._getBaseline(n), {
                        stroke: !0
                    }, o),
                    this.ctx._clip_path.length > 0 && s.push("Q")
                }
            },
            setFont: function(t) {
                if (this.ctx.font = t,
                null != (c = /\s*(\w+)\s+(\w+)\s+(\w+)\s+([\d\.]+)(px|pt|em)\s+(.*)?/.exec(t))) {
                    var e = c[1]
                      , n = (c[2],
                    c[3])
                      , r = c[4]
                      , i = c[5]
                      , o = c[6];
                    r = "px" === i ? Math.floor(parseFloat(r)) : "em" === i ? Math.floor(parseFloat(r) * this.pdf.getFontSize()) : Math.floor(parseFloat(r)),
                    this.pdf.setFontSize(r),
                    "bold" === n || "700" === n ? this.pdf.setFontStyle("bold") : "italic" === e ? this.pdf.setFontStyle("italic") : this.pdf.setFontStyle("normal");
                    var s, a = (h = o).toLowerCase().split(/\s*,\s*/);
                    s = -1 != a.indexOf("arial") ? "Arial" : -1 != a.indexOf("verdana") ? "Verdana" : -1 != a.indexOf("helvetica") ? "Helvetica" : -1 != a.indexOf("sans-serif") ? "sans-serif" : -1 != a.indexOf("fixed") ? "Fixed" : -1 != a.indexOf("monospace") ? "Monospace" : -1 != a.indexOf("terminal") ? "Terminal" : -1 != a.indexOf("courier") ? "Courier" : -1 != a.indexOf("times") ? "Times" : -1 != a.indexOf("cursive") ? "Cursive" : -1 != a.indexOf("fantasy") ? "Fantasy" : (a.indexOf("serif"),
                    "Serif"),
                    l = "bold" === n ? "bold" : "normal",
                    this.pdf.setFont(s, l)
                } else {
                    var c = /(\d+)(pt|px|em)\s+(\w+)\s*(\w+)?/.exec(t);
                    if (null != c) {
                        var l, u = c[1], h = (c[2],
                        c[3]);
                        (l = c[4]) || (l = "normal"),
                        u = "em" === i ? Math.floor(parseFloat(r) * this.pdf.getFontSize()) : Math.floor(parseFloat(u)),
                        this.pdf.setFontSize(u),
                        this.pdf.setFont(h, l)
                    }
                }
            },
            setTextBaseline: function(t) {
                this.ctx.textBaseline = t
            },
            getTextBaseline: function() {
                return this.ctx.textBaseline
            },
            setTextAlign: function(t) {
                this.ctx.textAlign = t
            },
            getTextAlign: function() {
                return this.ctx.textAlign
            },
            setLineWidth: function(t) {
                this.ctx.lineWidth = t,
                this.pdf.setLineWidth(t)
            },
            setLineCap: function(t) {
                this.ctx.lineCap = t,
                this.pdf.setLineCap(t)
            },
            setLineJoin: function(t) {
                this.ctx.lineJoin = t,
                this.pdf.setLineJoin(t)
            },
            moveTo: function(t, e) {
                t = this._wrapX(t),
                e = this._wrapY(e);
                var n = this._matrix_map_point(this.ctx._transform, [t, e])
                  , r = {
                    type: "mt",
                    x: t = n[0],
                    y: e = n[1]
                };
                this.path.push(r)
            },
            _wrapX: function(t) {
                return this.pageWrapXEnabled ? t % this.pageWrapX : t
            },
            _wrapY: function(t) {
                return this.pageWrapYEnabled ? (this._gotoPage(this._page(t)),
                (t - this.lastBreak) % this.pageWrapY) : t
            },
            transform: function(t, e, n, r, i, o) {
                this.ctx._transform = [t, e, n, r, i, o]
            },
            setTransform: function(t, e, n, r, i, o) {
                this.ctx._transform = [t, e, n, r, i, o]
            },
            _getTransform: function() {
                return this.ctx._transform
            },
            lastBreak: 0,
            pageBreaks: [],
            _page: function(t) {
                if (this.pageWrapYEnabled) {
                    this.lastBreak = 0;
                    for (var e = 0, n = 0, r = 0; r < this.pageBreaks.length; r++)
                        if (t >= this.pageBreaks[r]) {
                            e++,
                            0 === this.lastBreak && n++;
                            var i = this.pageBreaks[r] - this.lastBreak;
                            this.lastBreak = this.pageBreaks[r],
                            n += Math.floor(i / this.pageWrapY)
                        }
                    if (0 === this.lastBreak)
                        n += Math.floor(t / this.pageWrapY) + 1;
                    return n + e
                }
                return this.pdf.internal.getCurrentPageInfo().pageNumber
            },
            _gotoPage: function(t) {},
            lineTo: function(t, e) {
                t = this._wrapX(t),
                e = this._wrapY(e);
                var n = this._matrix_map_point(this.ctx._transform, [t, e])
                  , r = {
                    type: "lt",
                    x: t = n[0],
                    y: e = n[1]
                };
                this.path.push(r)
            },
            bezierCurveTo: function(t, e, n, r, i, o) {
                var s;
                t = this._wrapX(t),
                e = this._wrapY(e),
                n = this._wrapX(n),
                r = this._wrapY(r),
                i = this._wrapX(i),
                o = this._wrapY(o),
                i = (s = this._matrix_map_point(this.ctx._transform, [i, o]))[0],
                o = s[1];
                var a = {
                    type: "bct",
                    x1: t = (s = this._matrix_map_point(this.ctx._transform, [t, e]))[0],
                    y1: e = s[1],
                    x2: n = (s = this._matrix_map_point(this.ctx._transform, [n, r]))[0],
                    y2: r = s[1],
                    x: i,
                    y: o
                };
                this.path.push(a)
            },
            quadraticCurveTo: function(t, e, n, r) {
                var i;
                t = this._wrapX(t),
                e = this._wrapY(e),
                n = this._wrapX(n),
                r = this._wrapY(r),
                n = (i = this._matrix_map_point(this.ctx._transform, [n, r]))[0],
                r = i[1];
                var o = {
                    type: "qct",
                    x1: t = (i = this._matrix_map_point(this.ctx._transform, [t, e]))[0],
                    y1: e = i[1],
                    x: n,
                    y: r
                };
                this.path.push(o)
            },
            arc: function(t, e, n, r, i, o) {
                t = this._wrapX(t),
                e = this._wrapY(e);
                var s = this._matrix_map_point(this.ctx._transform, [t, e])
                  , a = {
                    type: "arc",
                    x: t = s[0],
                    y: e = s[1],
                    radius: n,
                    startAngle: r,
                    endAngle: i,
                    anticlockwise: o
                };
                this.path.push(a)
            },
            drawImage: function(t, e, n, r, i, o, s, a, c) {
                void 0 !== o && (e = o,
                n = s,
                r = a,
                i = c),
                e = this._wrapX(e),
                n = this._wrapY(n);
                var l, u = this._matrix_map_rect(this.ctx._transform, {
                    x: e,
                    y: n,
                    w: r,
                    h: i
                }), h = (this._matrix_map_rect(this.ctx._transform, {
                    x: o,
                    y: s,
                    w: a,
                    h: c
                }),
                /data:image\/(\w+).*/i.exec(t));
                l = null != h ? h[1] : "png",
                this.pdf.addImage(t, l, u.x, u.y, u.w, u.h)
            },
            _matrix_multiply: function(t, e) {
                var n = e[0]
                  , r = e[1]
                  , i = e[2]
                  , o = e[3]
                  , s = e[4]
                  , a = e[5]
                  , c = n * t[0] + r * t[2]
                  , l = i * t[0] + o * t[2]
                  , u = s * t[0] + a * t[2] + t[4];
                return r = n * t[1] + r * t[3],
                o = i * t[1] + o * t[3],
                a = s * t[1] + a * t[3] + t[5],
                [n = c, r, i = l, o, s = u, a]
            },
            _matrix_rotation: function(t) {
                return Math.atan2(t[2], t[0])
            },
            _matrix_decompose: function(t) {
                var e = t[0]
                  , n = t[1]
                  , r = t[2]
                  , i = t[3]
                  , o = Math.sqrt(e * e + n * n)
                  , s = (e /= o) * r + (n /= o) * i;
                r -= e * s,
                i -= n * s;
                var a = Math.sqrt(r * r + i * i);
                return s /= a,
                e * (i /= a) < n * (r /= a) && (e = -e,
                n = -n,
                s = -s,
                o = -o),
                {
                    scale: [o, 0, 0, a, 0, 0],
                    translate: [1, 0, 0, 1, t[4], t[5]],
                    rotate: [e, n, -n, e, 0, 0],
                    skew: [1, 0, s, 1, 0, 0]
                }
            },
            _matrix_map_point: function(t, e) {
                var n = t[0]
                  , r = t[1]
                  , i = t[2]
                  , o = t[3]
                  , s = t[4]
                  , a = t[5]
                  , c = e[0]
                  , l = e[1];
                return [c * n + l * i + s, c * r + l * o + a]
            },
            _matrix_map_point_obj: function(t, e) {
                var n = this._matrix_map_point(t, [e.x, e.y]);
                return {
                    x: n[0],
                    y: n[1]
                }
            },
            _matrix_map_rect: function(t, e) {
                var n = this._matrix_map_point(t, [e.x, e.y])
                  , r = this._matrix_map_point(t, [e.x + e.w, e.y + e.h]);
                return {
                    x: n[0],
                    y: n[1],
                    w: r[0] - n[0],
                    h: r[1] - n[1]
                }
            },
            _matrix_is_identity: function(t) {
                return 1 == t[0] && (0 == t[1] && (0 == t[2] && (1 == t[3] && (0 == t[4] && 0 == t[5]))))
            },
            rotate: function(t) {
                var e = [Math.cos(t), Math.sin(t), -Math.sin(t), Math.cos(t), 0, 0];
                this.ctx._transform = this._matrix_multiply(this.ctx._transform, e)
            },
            scale: function(t, e) {
                var n = [t, 0, 0, e, 0, 0];
                this.ctx._transform = this._matrix_multiply(this.ctx._transform, n)
            },
            translate: function(t, e) {
                var n = [1, 0, 0, 1, t, e];
                this.ctx._transform = this._matrix_multiply(this.ctx._transform, n)
            },
            stroke: function() {
                if (this.ctx._clip_path.length > 0) {
                    var t;
                    (t = window.outIntercept ? "group" === window.outIntercept.type ? window.outIntercept.stream : window.outIntercept : this.pdf.internal.pages[1]).push("q");
                    var e = this.path;
                    this.path = this.ctx._clip_path,
                    this.ctx._clip_path = [],
                    this._stroke(!0),
                    this.ctx._clip_path = this.path,
                    this.path = e,
                    this._stroke(!1),
                    t.push("Q")
                } else
                    this._stroke(!1)
            },
            _stroke: function(t) {
                if (t || !this._isStrokeTransparent()) {
                    for (var e = [], n = this.path, r = 0; r < n.length; r++) {
                        var i = n[r];
                        switch (i.type) {
                        case "mt":
                            e.push({
                                start: i,
                                deltas: [],
                                abs: []
                            });
                            break;
                        case "lt":
                            var o = [i.x - n[r - 1].x, i.y - n[r - 1].y];
                            e[e.length - 1].deltas.push(o),
                            e[e.length - 1].abs.push(i);
                            break;
                        case "bct":
                            o = [i.x1 - n[r - 1].x, i.y1 - n[r - 1].y, i.x2 - n[r - 1].x, i.y2 - n[r - 1].y, i.x - n[r - 1].x, i.y - n[r - 1].y];
                            e[e.length - 1].deltas.push(o);
                            break;
                        case "qct":
                            var s = n[r - 1].x + 2 / 3 * (i.x1 - n[r - 1].x)
                              , a = n[r - 1].y + 2 / 3 * (i.y1 - n[r - 1].y)
                              , c = i.x + 2 / 3 * (i.x1 - i.x)
                              , l = i.y + 2 / 3 * (i.y1 - i.y)
                              , u = i.x
                              , h = i.y;
                            o = [s - n[r - 1].x, a - n[r - 1].y, c - n[r - 1].x, l - n[r - 1].y, u - n[r - 1].x, h - n[r - 1].y];
                            e[e.length - 1].deltas.push(o);
                            break;
                        case "arc":
                            e[e.length - 1].arc = !0,
                            e[e.length - 1].abs.push(i);
                            break;
                        case "close":
                            !0
                        }
                    }
                    for (r = 0; r < e.length; r++) {
                        var f;
                        if (f = r == e.length - 1 ? "s" : null,
                        e[r].arc)
                            for (var d = e[r].abs, p = 0; p < d.length; p++) {
                                var g = d[p]
                                  , m = 360 * g.startAngle / (2 * Math.PI)
                                  , w = 360 * g.endAngle / (2 * Math.PI)
                                  , y = g.x
                                  , v = g.y;
                                this.internal.arc2(this, y, v, g.radius, m, w, g.anticlockwise, f, t)
                            }
                        else {
                            y = e[r].start.x,
                            v = e[r].start.y;
                            t ? (this.pdf.lines(e[r].deltas, y, v, null, null),
                            this.pdf.clip_fixed()) : this.pdf.lines(e[r].deltas, y, v, null, f)
                        }
                    }
                }
            },
            _isFillTransparent: function() {
                return this.ctx._isFillTransparent || 0 == this.globalAlpha
            },
            _isStrokeTransparent: function() {
                return this.ctx._isStrokeTransparent || 0 == this.globalAlpha
            },
            fill: function(t) {
                if (this.ctx._clip_path.length > 0) {
                    var e;
                    (e = window.outIntercept ? "group" === window.outIntercept.type ? window.outIntercept.stream : window.outIntercept : this.pdf.internal.pages[1]).push("q");
                    var n = this.path;
                    this.path = this.ctx._clip_path,
                    this.ctx._clip_path = [],
                    this._fill(t, !0),
                    this.ctx._clip_path = this.path,
                    this.path = n,
                    this._fill(t, !1),
                    e.push("Q")
                } else
                    this._fill(t, !1)
            },
            _fill: function(t, n) {
                if (!this._isFillTransparent()) {
                    var r, i = "function" == typeof this.pdf.internal.newObject2;
                    r = window.outIntercept ? "group" === window.outIntercept.type ? window.outIntercept.stream : window.outIntercept : this.pdf.internal.pages[1];
                    var o = []
                      , s = window.outIntercept;
                    if (i)
                        switch (this.ctx.globalCompositeOperation) {
                        case "normal":
                        case "source-over":
                            break;
                        case "destination-in":
                        case "destination-out":
                            var a = this.pdf.internal.newStreamObject()
                              , c = this.pdf.internal.newObject2();
                            c.push("<</Type /ExtGState"),
                            c.push("/SMask <</S /Alpha /G " + a.objId + " 0 R>>"),
                            c.push(">>");
                            var l = "MASK" + c.objId;
                            this.pdf.internal.addGraphicsState(l, c.objId);
                            var u = "/" + l + " gs";
                            r.splice(0, 0, "q"),
                            r.splice(1, 0, u),
                            r.push("Q"),
                            window.outIntercept = a;
                            break;
                        default:
                            var h = "/" + this.pdf.internal.blendModeMap[this.ctx.globalCompositeOperation.toUpperCase()];
                            h && this.pdf.internal.out(h + " gs")
                        }
                    var f = this.ctx.globalAlpha;
                    if (this.ctx._fillOpacity < 1 && (f = this.ctx._fillOpacity),
                    i) {
                        var d = this.pdf.internal.newObject2();
                        d.push("<</Type /ExtGState"),
                        d.push("/CA " + f),
                        d.push("/ca " + f),
                        d.push(">>");
                        l = "GS_O_" + d.objId;
                        this.pdf.internal.addGraphicsState(l, d.objId),
                        this.pdf.internal.out("/" + l + " gs")
                    }
                    for (var p = this.path, g = 0; g < p.length; g++) {
                        var m = p[g];
                        switch (m.type) {
                        case "mt":
                            o.push({
                                start: m,
                                deltas: [],
                                abs: []
                            });
                            break;
                        case "lt":
                            var w = [m.x - p[g - 1].x, m.y - p[g - 1].y];
                            o[o.length - 1].deltas.push(w),
                            o[o.length - 1].abs.push(m);
                            break;
                        case "bct":
                            w = [m.x1 - p[g - 1].x, m.y1 - p[g - 1].y, m.x2 - p[g - 1].x, m.y2 - p[g - 1].y, m.x - p[g - 1].x, m.y - p[g - 1].y];
                            o[o.length - 1].deltas.push(w);
                            break;
                        case "qct":
                            var y = p[g - 1].x + 2 / 3 * (m.x1 - p[g - 1].x)
                              , v = p[g - 1].y + 2 / 3 * (m.y1 - p[g - 1].y)
                              , b = m.x + 2 / 3 * (m.x1 - m.x)
                              , x = m.y + 2 / 3 * (m.y1 - m.y)
                              , k = m.x
                              , _ = m.y;
                            w = [y - p[g - 1].x, v - p[g - 1].y, b - p[g - 1].x, x - p[g - 1].y, k - p[g - 1].x, _ - p[g - 1].y];
                            o[o.length - 1].deltas.push(w);
                            break;
                        case "arc":
                            0 == o.length && o.push({
                                start: {
                                    x: 0,
                                    y: 0
                                },
                                deltas: [],
                                abs: []
                            }),
                            o[o.length - 1].arc = !0,
                            o[o.length - 1].abs.push(m)
                        }
                    }
                    for (g = 0; g < o.length; g++) {
                        var C;
                        if (g == o.length - 1 ? (C = "f",
                        "evenodd" === t && (C += "*")) : C = null,
                        o[g].arc) {
                            for (var A = o[g].abs, S = 0; S < A.length; S++) {
                                var q = A[S];
                                if (void 0 !== q.startAngle) {
                                    var T = 360 * q.startAngle / (2 * Math.PI)
                                      , I = 360 * q.endAngle / (2 * Math.PI)
                                      , P = q.x
                                      , E = q.y;
                                    0 == S && this.internal.move2(this, P, E),
                                    this.internal.arc2(this, P, E, q.radius, T, I, q.anticlockwise, null, n)
                                } else
                                    this.internal.line2(e, q.x, q.y)
                            }
                            P = o[g].start.x,
                            E = o[g].start.y;
                            this.internal.line2(e, P, E),
                            this.pdf.internal.out("h"),
                            this.pdf.internal.out("f")
                        } else {
                            P = o[g].start.x,
                            E = o[g].start.y;
                            n ? (this.pdf.lines(o[g].deltas, P, E, null, null),
                            this.pdf.clip_fixed()) : this.pdf.lines(o[g].deltas, P, E, null, C)
                        }
                    }
                    window.outIntercept = s
                }
            },
            pushMask: function() {
                if ("function" == typeof this.pdf.internal.newObject2) {
                    var t = this.pdf.internal.newStreamObject()
                      , e = this.pdf.internal.newObject2();
                    e.push("<</Type /ExtGState"),
                    e.push("/SMask <</S /Alpha /G " + t.objId + " 0 R>>"),
                    e.push(">>");
                    var n = "MASK" + e.objId;
                    this.pdf.internal.addGraphicsState(n, e.objId);
                    var r = "/" + n + " gs";
                    this.pdf.internal.out(r)
                } else
                    console.log("jsPDF v2 not enabled")
            },
            clip: function() {
                if (this.ctx._clip_path.length > 0)
                    for (var t = 0; t < this.path.length; t++)
                        this.ctx._clip_path.push(this.path[t]);
                else
                    this.ctx._clip_path = this.path;
                this.path = []
            },
            measureText: function(t) {
                var e = this.pdf;
                return {
                    getWidth: function() {
                        var n = e.internal.getFontSize();
                        return e.getStringUnitWidth(t) * n / e.internal.scaleFactor
                    },
                    get width() {
                        return this.getWidth(t)
                    }
                }
            },
            _getBaseline: function(t) {
                var e = parseInt(this.pdf.internal.getFontSize())
                  , n = .25 * e;
                switch (this.ctx.textBaseline) {
                case "bottom":
                    return t - n;
                case "top":
                    return t + e;
                case "hanging":
                    return t + e - n;
                case "middle":
                    return t + e / 2 - n;
                case "ideographic":
                    return t;
                case "alphabetic":
                default:
                    return t
                }
            }
        };
        var e = t.context2d;
        function n() {
            this._isStrokeTransparent = !1,
            this._strokeOpacity = 1,
            this.strokeStyle = "#000000",
            this.fillStyle = "#000000",
            this._isFillTransparent = !1,
            this._fillOpacity = 1,
            this.font = "12pt times",
            this.textBaseline = "alphabetic",
            this.textAlign = "start",
            this.lineWidth = 1,
            this.lineJoin = "miter",
            this.lineCap = "butt",
            this._transform = [1, 0, 0, 1, 0, 0],
            this.globalCompositeOperation = "normal",
            this.globalAlpha = 1,
            this._clip_path = [],
            this.ignoreClearRect = !1,
            this.copy = function(t) {
                this._isStrokeTransparent = t._isStrokeTransparent,
                this._strokeOpacity = t._strokeOpacity,
                this.strokeStyle = t.strokeStyle,
                this._isFillTransparent = t._isFillTransparent,
                this._fillOpacity = t._fillOpacity,
                this.fillStyle = t.fillStyle,
                this.font = t.font,
                this.lineWidth = t.lineWidth,
                this.lineJoin = t.lineJoin,
                this.lineCap = t.lineCap,
                this.textBaseline = t.textBaseline,
                this.textAlign = t.textAlign,
                this._fontSize = t._fontSize,
                this._transform = t._transform.slice(0),
                this.globalCompositeOperation = t.globalCompositeOperation,
                this.globalAlpha = t.globalAlpha,
                this._clip_path = t._clip_path.slice(0),
                this.ignoreClearRect = t.ignoreClearRect
            }
        }
        Object.defineProperty(e, "fillStyle", {
            set: function(t) {
                this.setFillStyle(t)
            },
            get: function() {
                return this.ctx.fillStyle
            }
        }),
        Object.defineProperty(e, "strokeStyle", {
            set: function(t) {
                this.setStrokeStyle(t)
            },
            get: function() {
                return this.ctx.strokeStyle
            }
        }),
        Object.defineProperty(e, "lineWidth", {
            set: function(t) {
                this.setLineWidth(t)
            },
            get: function() {
                return this.ctx.lineWidth
            }
        }),
        Object.defineProperty(e, "lineCap", {
            set: function(t) {
                this.setLineCap(t)
            },
            get: function() {
                return this.ctx.lineCap
            }
        }),
        Object.defineProperty(e, "lineJoin", {
            set: function(t) {
                this.setLineJoin(t)
            },
            get: function() {
                return this.ctx.lineJoin
            }
        }),
        Object.defineProperty(e, "miterLimit", {
            set: function(t) {
                this.ctx.miterLimit = t
            },
            get: function() {
                return this.ctx.miterLimit
            }
        }),
        Object.defineProperty(e, "textBaseline", {
            set: function(t) {
                this.setTextBaseline(t)
            },
            get: function() {
                return this.getTextBaseline()
            }
        }),
        Object.defineProperty(e, "textAlign", {
            set: function(t) {
                this.setTextAlign(t)
            },
            get: function() {
                return this.getTextAlign()
            }
        }),
        Object.defineProperty(e, "font", {
            set: function(t) {
                this.setFont(t)
            },
            get: function() {
                return this.ctx.font
            }
        }),
        Object.defineProperty(e, "globalCompositeOperation", {
            set: function(t) {
                this.ctx.globalCompositeOperation = t
            },
            get: function() {
                return this.ctx.globalCompositeOperation
            }
        }),
        Object.defineProperty(e, "globalAlpha", {
            set: function(t) {
                this.ctx.globalAlpha = t
            },
            get: function() {
                return this.ctx.globalAlpha
            }
        }),
        Object.defineProperty(e, "ignoreClearRect", {
            set: function(t) {
                this.ctx.ignoreClearRect = t
            },
            get: function() {
                return this.ctx.ignoreClearRect
            }
        }),
        e.internal = {},
        e.internal.rxRgb = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/,
        e.internal.rxRgba = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d\.]+)\s*\)/,
        e.internal.rxTransparent = /transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/,
        e.internal.arc = function(t, e, n, r, i, o, s, a) {
            for (var c = this.pdf.internal.scaleFactor, l = this.pdf.internal.pageSize.height, u = this.pdf.internal.f2, h = i * (Math.PI / 180), f = o * (Math.PI / 180), d = this.createArc(r, h, f, s), p = 0; p < d.length; p++) {
                var g = d[p];
                0 == p ? this.pdf.internal.out([u((g.x1 + e) * c), u((l - (g.y1 + n)) * c), "m", u((g.x2 + e) * c), u((l - (g.y2 + n)) * c), u((g.x3 + e) * c), u((l - (g.y3 + n)) * c), u((g.x4 + e) * c), u((l - (g.y4 + n)) * c), "c"].join(" ")) : this.pdf.internal.out([u((g.x2 + e) * c), u((l - (g.y2 + n)) * c), u((g.x3 + e) * c), u((l - (g.y3 + n)) * c), u((g.x4 + e) * c), u((l - (g.y4 + n)) * c), "c"].join(" ")),
                t._lastPoint = {
                    x: e,
                    y: n
                }
            }
            null !== a && this.pdf.internal.out(this.pdf.internal.getStyle(a))
        }
        ,
        e.internal.arc2 = function(t, e, n, r, i, o, s, a, c) {
            var l = e
              , u = n;
            c ? (this.arc(t, l, u, r, i, o, s, null),
            this.pdf.clip_fixed()) : this.arc(t, l, u, r, i, o, s, a)
        }
        ,
        e.internal.move2 = function(t, e, n) {
            var r = this.pdf.internal.scaleFactor
              , i = this.pdf.internal.pageSize.height
              , o = this.pdf.internal.f2;
            this.pdf.internal.out([o(e * r), o((i - n) * r), "m"].join(" ")),
            t._lastPoint = {
                x: e,
                y: n
            }
        }
        ,
        e.internal.line2 = function(t, e, n) {
            var r = this.pdf.internal.scaleFactor
              , i = this.pdf.internal.pageSize.height
              , o = this.pdf.internal.f2
              , s = {
                x: e,
                y: n
            };
            this.pdf.internal.out([o(s.x * r), o((i - s.y) * r), "l"].join(" ")),
            t._lastPoint = s
        }
        ,
        e.internal.createArc = function(t, e, n, r) {
            var i = 2 * Math.PI
              , o = e;
            (o < i || o > i) && (o %= i);
            var s = n;
            (s < i || s > i) && (s %= i);
            for (var a = [], c = Math.PI / 2, l = r ? -1 : 1, u = e, h = Math.min(i, Math.abs(s - o)); h > 1e-5; ) {
                var f = u + l * Math.min(h, c);
                a.push(this.createSmallArc(t, u, f)),
                h -= Math.abs(f - u),
                u = f
            }
            return a
        }
        ,
        e.internal.createSmallArc = function(t, e, n) {
            var r = (n - e) / 2
              , i = t * Math.cos(r)
              , o = t * Math.sin(r)
              , s = i
              , a = -o
              , c = s * s + a * a
              , l = c + s * i + a * o
              , u = 4 / 3 * (Math.sqrt(2 * c * l) - l) / (s * o - a * i)
              , h = s - u * a
              , f = a + u * s
              , d = h
              , p = -f
              , g = r + e
              , m = Math.cos(g)
              , w = Math.sin(g);
            return {
                x1: t * Math.cos(e),
                y1: t * Math.sin(e),
                x2: h * m - f * w,
                y2: h * w + f * m,
                x3: d * m - p * w,
                y3: d * w + p * m,
                x4: t * Math.cos(n),
                y4: t * Math.sin(n)
            }
        }
    }(e.API),
    function(e) {
        var n, r, i, o, s, a, c, l, u, h, f, d, p, g, m, w, y, v, b, x;
        n = function() {
            return function(e) {
                return t.prototype = e,
                new t
            }
            ;
            function t() {}
        }(),
        h = function(t) {
            var e, n, r, i, o, s, a;
            for (n = 0,
            r = t.length,
            e = void 0,
            i = !1,
            s = !1; !i && n !== r; )
                (e = t[n] = t[n].trimLeft()) && (i = !0),
                n++;
            for (n = r - 1; r && !s && -1 !== n; )
                (e = t[n] = t[n].trimRight()) && (s = !0),
                n--;
            for (o = /\s+$/g,
            a = !0,
            n = 0; n !== r; )
                "\u2028" != t[n] && (e = t[n].replace(/\s+/g, " "),
                a && (e = e.trimLeft()),
                e && (a = o.test(e)),
                t[n] = e),
                n++;
            return t
        }
        ,
        d = function(t) {
            var e, n, r;
            for (e = void 0,
            n = (r = t.split(",")).shift(); !e && n; )
                e = i[n.trim().toLowerCase()],
                n = r.shift();
            return e
        }
        ,
        p = function(t) {
            var e;
            return (t = "auto" === t ? "0px" : t).indexOf("em") > -1 && !isNaN(Number(t.replace("em", ""))) && (t = 18.719 * Number(t.replace("em", "")) + "px"),
            t.indexOf("pt") > -1 && !isNaN(Number(t.replace("pt", ""))) && (t = 1.333 * Number(t.replace("pt", "")) + "px"),
            void 0,
            16,
            (e = g[t]) ? e : void 0 !== (e = {
                "xx-small": 9,
                "x-small": 11,
                small: 13,
                medium: 16,
                large: 19,
                "x-large": 23,
                "xx-large": 28,
                auto: 0
            }[{
                css_line_height_string: t
            }]) ? g[t] = e / 16 : (e = parseFloat(t)) ? g[t] = e / 16 : 3 === (e = t.match(/([\d\.]+)(px)/)).length ? g[t] = parseFloat(e[1]) / 16 : g[t] = 1
        }
        ,
        u = function(t) {
            var e, n, r, i, u;
            return i = t,
            u = document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(i, null) : i.currentStyle ? i.currentStyle : i.style,
            n = void 0,
            (e = {})["font-family"] = d((r = function(t) {
                return t = t.replace(/-\D/g, function(t) {
                    return t.charAt(1).toUpperCase()
                }),
                u[t]
            }
            )("font-family")) || "times",
            e["font-style"] = o[r("font-style")] || "normal",
            e["text-align"] = s[r("text-align")] || "left",
            "bold" === (n = a[r("font-weight")] || "normal") && ("normal" === e["font-style"] ? e["font-style"] = n : e["font-style"] = n + e["font-style"]),
            e["font-size"] = p(r("font-size")) || 1,
            e["line-height"] = p(r("line-height")) || 1,
            e.display = "inline" === r("display") ? "inline" : "block",
            n = "block" === e.display,
            e["margin-top"] = n && p(r("margin-top")) || 0,
            e["margin-bottom"] = n && p(r("margin-bottom")) || 0,
            e["padding-top"] = n && p(r("padding-top")) || 0,
            e["padding-bottom"] = n && p(r("padding-bottom")) || 0,
            e["margin-left"] = n && p(r("margin-left")) || 0,
            e["margin-right"] = n && p(r("margin-right")) || 0,
            e["padding-left"] = n && p(r("padding-left")) || 0,
            e["padding-right"] = n && p(r("padding-right")) || 0,
            e["page-break-before"] = r("page-break-before") || "auto",
            e.float = c[r("cssFloat")] || "none",
            e.clear = l[r("clear")] || "none",
            e.color = r("color"),
            e
        }
        ,
        m = function(t, e, n) {
            var r, i, o, s;
            if (o = !1,
            i = void 0,
            s = void 0,
            void 0,
            r = n["#" + t.id])
                if ("function" == typeof r)
                    o = r(t, e);
                else
                    for (i = 0,
                    s = r.length; !o && i !== s; )
                        o = r[i](t, e),
                        i++;
            if (r = n[t.nodeName],
            !o && r)
                if ("function" == typeof r)
                    o = r(t, e);
                else
                    for (i = 0,
                    s = r.length; !o && i !== s; )
                        o = r[i](t, e),
                        i++;
            return o
        }
        ,
        x = function(t, e) {
            var n, r, i, o, s, a, c, l, u;
            for (n = [],
            r = [],
            i = 0,
            u = t.rows[0].cells.length,
            c = t.clientWidth; i < u; )
                l = t.rows[0].cells[i],
                r[i] = {
                    name: l.textContent.toLowerCase().replace(/\s+/g, ""),
                    prompt: l.textContent.replace(/\r?\n/g, ""),
                    width: l.clientWidth / c * e.pdf.internal.pageSize.width
                },
                i++;
            for (i = 1; i < t.rows.length; ) {
                for (a = t.rows[i],
                s = {},
                o = 0; o < a.cells.length; )
                    s[r[o].name] = a.cells[o].textContent.replace(/\r?\n/g, ""),
                    o++;
                n.push(s),
                i++
            }
            return {
                rows: n,
                headers: r
            }
        }
        ;
        var k = {
            SCRIPT: 1,
            STYLE: 1,
            NOSCRIPT: 1,
            OBJECT: 1,
            EMBED: 1,
            SELECT: 1
        }
          , _ = 1;
        r = function(e, i, o) {
            var s, a, c, l, h, f, d, p;
            for (a = e.childNodes,
            s = void 0,
            (h = "block" === (c = u(e)).display) && (i.setBlockBoundary(),
            i.setBlockStyle(c)),
            19.049976 / 25.4,
            l = 0,
            f = a.length; l < f; ) {
                if ("object" === (void 0 === (s = a[l]) ? "undefined" : t(s))) {
                    if (i.executeWatchFunctions(s),
                    1 === s.nodeType && "HEADER" === s.nodeName) {
                        var g = s
                          , y = i.pdf.margins_doc.top;
                        i.pdf.internal.events.subscribe("addPage", function(t) {
                            i.y = y,
                            r(g, i, o),
                            i.pdf.margins_doc.top = i.y + 10,
                            i.y += 10
                        }, !1)
                    }
                    if (8 === s.nodeType && "#comment" === s.nodeName)
                        ~s.textContent.indexOf("ADD_PAGE") && (i.pdf.addPage(),
                        i.y = i.pdf.margins_doc.top);
                    else if (1 !== s.nodeType || k[s.nodeName])
                        if (3 === s.nodeType) {
                            var v = s.nodeValue;
                            if (s.nodeValue && "LI" === s.parentNode.nodeName)
                                if ("OL" === s.parentNode.parentNode.nodeName)
                                    v = _++ + ". " + v;
                                else {
                                    var b = c["font-size"]
                                      , C = (3 - .75 * b) * i.pdf.internal.scaleFactor
                                      , A = .75 * b * i.pdf.internal.scaleFactor
                                      , S = 1.74 * b / i.pdf.internal.scaleFactor;
                                    p = function(t, e) {
                                        this.pdf.circle(t + C, e + A, S, "FD")
                                    }
                                }
                            16 & s.ownerDocument.body.compareDocumentPosition(s) && i.addText(v, c)
                        } else
                            "string" == typeof s && i.addText(s, c);
                    else {
                        var q;
                        if ("IMG" === s.nodeName) {
                            var T = s.getAttribute("src");
                            q = w[i.pdf.sHashCode(T) || T]
                        }
                        if (q) {
                            i.pdf.internal.pageSize.height - i.pdf.margins_doc.bottom < i.y + s.height && i.y > i.pdf.margins_doc.top && (i.pdf.addPage(),
                            i.y = i.pdf.margins_doc.top,
                            i.executeWatchFunctions(s));
                            var I = u(s)
                              , P = i.x
                              , E = 12 / i.pdf.internal.scaleFactor
                              , O = (I["margin-left"] + I["padding-left"]) * E
                              , F = (I["margin-right"] + I["padding-right"]) * E
                              , R = (I["margin-top"] + I["padding-top"]) * E
                              , B = (I["margin-bottom"] + I["padding-bottom"]) * E;
                            void 0 !== I.float && "right" === I.float ? P += i.settings.width - s.width - F : P += O,
                            i.pdf.addImage(q, P, i.y + R, s.width, s.height),
                            q = void 0,
                            "right" === I.float || "left" === I.float ? (i.watchFunctions.push(function(t, e, n, r) {
                                return i.y >= e ? (i.x += t,
                                i.settings.width += n,
                                !0) : !!(r && 1 === r.nodeType && !k[r.nodeName] && i.x + r.width > i.pdf.margins_doc.left + i.pdf.margins_doc.width) && (i.x += t,
                                i.y = e,
                                i.settings.width += n,
                                !0)
                            }
                            .bind(this, "left" === I.float ? -s.width - O - F : 0, i.y + s.height + R + B, s.width)),
                            i.watchFunctions.push(function(t, e, n) {
                                return !(i.y < t && e === i.pdf.internal.getNumberOfPages()) || 1 === n.nodeType && "both" === u(n).clear && (i.y = t,
                                !0)
                            }
                            .bind(this, i.y + s.height, i.pdf.internal.getNumberOfPages())),
                            i.settings.width -= s.width + O + F,
                            "left" === I.float && (i.x += s.width + O + F)) : i.y += s.height + R + B
                        } else if ("TABLE" === s.nodeName)
                            d = x(s, i),
                            i.y += 10,
                            i.pdf.table(i.x, i.y, d.rows, d.headers, {
                                autoSize: !1,
                                printHeaders: o.printHeaders,
                                margins: i.pdf.margins_doc,
                                css: u(s)
                            }),
                            i.y = i.pdf.lastCellPos.y + i.pdf.lastCellPos.h + 20;
                        else if ("OL" === s.nodeName || "UL" === s.nodeName)
                            _ = 1,
                            m(s, i, o) || r(s, i, o),
                            i.y += 10;
                        else if ("LI" === s.nodeName) {
                            var D = i.x;
                            i.x += 20 / i.pdf.internal.scaleFactor,
                            i.y += 3,
                            m(s, i, o) || r(s, i, o),
                            i.x = D
                        } else
                            "BR" === s.nodeName ? (i.y += c["font-size"] * i.pdf.internal.scaleFactor,
                            i.addText("\u2028", n(c))) : m(s, i, o) || r(s, i, o)
                    }
                }
                l++
            }
            if (o.outY = i.y,
            h)
                return i.setBlockBoundary(p)
        }
        ,
        w = {},
        y = function(t, e, n, r) {
            var i, o = t.getElementsByTagName("img"), s = o.length, a = 0;
            function c() {
                e.pdf.internal.events.publish("imagesLoaded"),
                r(i)
            }
            function l(t, n, r) {
                if (t) {
                    var o = new Image;
                    i = ++a,
                    o.crossOrigin = "",
                    o.onerror = o.onload = function() {
                        if (o.complete && (0 === o.src.indexOf("data:image/") && (o.width = n || o.width || 0,
                        o.height = r || o.height || 0),
                        o.width + o.height)) {
                            var i = e.pdf.sHashCode(t) || t;
                            w[i] = w[i] || o
                        }
                        --a || c()
                    }
                    ,
                    o.src = t
                }
            }
            for (; s--; )
                l(o[s].getAttribute("src"), o[s].width, o[s].height);
            return a || c()
        }
        ,
        v = function(t, e, n) {
            var i = t.getElementsByTagName("footer");
            if (i.length > 0) {
                i = i[0];
                var o = e.pdf.internal.write
                  , s = e.y;
                e.pdf.internal.write = function() {}
                ,
                r(i, e, n);
                var a = Math.ceil(e.y - s) + 5;
                e.y = s,
                e.pdf.internal.write = o,
                e.pdf.margins_doc.bottom += a;
                for (var c = function(t) {
                    var o = void 0 !== t ? t.pageNumber : 1
                      , s = e.y;
                    e.y = e.pdf.internal.pageSize.height - e.pdf.margins_doc.bottom,
                    e.pdf.margins_doc.bottom -= a;
                    for (var c = i.getElementsByTagName("span"), l = 0; l < c.length; ++l)
                        (" " + c[l].className + " ").replace(/[\n\t]/g, " ").indexOf(" pageCounter ") > -1 && (c[l].innerHTML = o),
                        (" " + c[l].className + " ").replace(/[\n\t]/g, " ").indexOf(" totalPages ") > -1 && (c[l].innerHTML = "###jsPDFVarTotalPages###");
                    r(i, e, n),
                    e.pdf.margins_doc.bottom += a,
                    e.y = s
                }, l = i.getElementsByTagName("span"), u = 0; u < l.length; ++u)
                    (" " + l[u].className + " ").replace(/[\n\t]/g, " ").indexOf(" totalPages ") > -1 && e.pdf.internal.events.subscribe("htmlRenderingFinished", e.pdf.putTotalPages.bind(e.pdf, "###jsPDFVarTotalPages###"), !0);
                e.pdf.internal.events.subscribe("addPage", c, !1),
                c(),
                k.FOOTER = 1
            }
        }
        ,
        b = function(t, e, n, i, o, s) {
            if (!e)
                return !1;
            "string" == typeof e || e.parentNode || (e = "" + e.innerHTML),
            "string" == typeof e && (e = function(t) {
                var e, n, r;
                return r = "jsPDFhtmlText" + Date.now().toString() + (1e3 * Math.random()).toFixed(0),
                "position: absolute !important;clip: rect(1px 1px 1px 1px); /* IE6, IE7 */clip: rect(1px, 1px, 1px, 1px);padding:0 !important;border:0 !important;height: 1px !important;width: 1px !important; top:auto;left:-100px;overflow: hidden;",
                (n = document.createElement("div")).style.cssText = "position: absolute !important;clip: rect(1px 1px 1px 1px); /* IE6, IE7 */clip: rect(1px, 1px, 1px, 1px);padding:0 !important;border:0 !important;height: 1px !important;width: 1px !important; top:auto;left:-100px;overflow: hidden;",
                n.innerHTML = '<iframe style="height:1px;width:1px" name="' + r + '" />',
                document.body.appendChild(n),
                (e = window.frames[r]).document.open(),
                e.document.writeln(t),
                e.document.close(),
                e.document.body
            }(e.replace(/<\/?script[^>]*?>/gi, "")));
            var a, c = new f(t,n,i,o);
            return y.call(this, e, c, o.elementHandlers, function(t) {
                v(e, c, o.elementHandlers),
                r(e, c, o.elementHandlers),
                c.pdf.internal.events.publish("htmlRenderingFinished"),
                a = c.dispose(),
                "function" == typeof s ? s(a) : t && console.error("jsPDF Warning: rendering issues? provide a callback to fromHTML!")
            }),
            a || {
                x: c.x,
                y: c.y
            }
        }
        ,
        (f = function(t, e, n, r) {
            return this.pdf = t,
            this.x = e,
            this.y = n,
            this.settings = r,
            this.watchFunctions = [],
            this.init(),
            this
        }
        ).prototype.init = function() {
            return this.paragraph = {
                text: [],
                style: []
            },
            this.pdf.internal.write("q")
        }
        ,
        f.prototype.dispose = function() {
            return this.pdf.internal.write("Q"),
            {
                x: this.x,
                y: this.y,
                ready: !0
            }
        }
        ,
        f.prototype.executeWatchFunctions = function(t) {
            var e = !1
              , n = [];
            if (this.watchFunctions.length > 0) {
                for (var r = 0; r < this.watchFunctions.length; ++r)
                    !0 === this.watchFunctions[r](t) ? e = !0 : n.push(this.watchFunctions[r]);
                this.watchFunctions = n
            }
            return e
        }
        ,
        f.prototype.splitFragmentsIntoLines = function(t, e) {
            var r, i, o, s, a, c, l, u, h, f, d, p, g, m;
            for (12,
            f = this.pdf.internal.scaleFactor,
            s = {},
            i = void 0,
            h = void 0,
            o = void 0,
            a = void 0,
            m = void 0,
            u = void 0,
            l = void 0,
            c = void 0,
            p = [d = []],
            r = 0,
            g = this.settings.width; t.length; )
                if (a = t.shift(),
                m = e.shift(),
                a)
                    if ((o = s[(i = m["font-family"]) + (h = m["font-style"])]) || (o = this.pdf.internal.getFont(i, h).metadata.Unicode,
                    s[i + h] = o),
                    u = {
                        widths: o.widths,
                        kerning: o.kerning,
                        fontSize: 12 * m["font-size"],
                        textIndent: r
                    },
                    l = this.pdf.getStringUnitWidth(a, u) * u.fontSize / f,
                    "\u2028" == a)
                        d = [],
                        p.push(d);
                    else if (r + l > g) {
                        for (c = this.pdf.splitTextToSize(a, g, u),
                        d.push([c.shift(), m]); c.length; )
                            d = [[c.shift(), m]],
                            p.push(d);
                        r = this.pdf.getStringUnitWidth(d[0][0], u) * u.fontSize / f
                    } else
                        d.push([a, m]),
                        r += l;
            if (void 0 !== m["text-align"] && ("center" === m["text-align"] || "right" === m["text-align"] || "justify" === m["text-align"]))
                for (var w = 0; w < p.length; ++w) {
                    var y = this.pdf.getStringUnitWidth(p[w][0][0], u) * u.fontSize / f;
                    w > 0 && (p[w][0][1] = n(p[w][0][1]));
                    var v = g - y;
                    if ("right" === m["text-align"])
                        p[w][0][1]["margin-left"] = v;
                    else if ("center" === m["text-align"])
                        p[w][0][1]["margin-left"] = v / 2;
                    else if ("justify" === m["text-align"]) {
                        var b = p[w][0][0].split(" ").length - 1;
                        p[w][0][1]["word-spacing"] = v / b,
                        w === p.length - 1 && (p[w][0][1]["word-spacing"] = 0)
                    }
                }
            return p
        }
        ,
        f.prototype.RenderTextFragment = function(t, e) {
            var n, r;
            r = 0,
            this.pdf.internal.pageSize.height - this.pdf.margins_doc.bottom < this.y + this.pdf.internal.getFontSize() && (this.pdf.internal.write("ET", "Q"),
            this.pdf.addPage(),
            this.y = this.pdf.margins_doc.top,
            this.pdf.internal.write("q", "BT 0 g", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), e.color, "Td"),
            r = Math.max(r, e["line-height"], e["font-size"]),
            this.pdf.internal.write(0, (-12 * r).toFixed(2), "Td")),
            n = this.pdf.internal.getFont(e["font-family"], e["font-style"]);
            var i = this.getPdfColor(e.color);
            i !== this.lastTextColor && (this.pdf.internal.write(i),
            this.lastTextColor = i),
            void 0 !== e["word-spacing"] && e["word-spacing"] > 0 && this.pdf.internal.write(e["word-spacing"].toFixed(2), "Tw"),
            this.pdf.internal.write("/" + n.id, (12 * e["font-size"]).toFixed(2), "Tf", "(" + this.pdf.internal.pdfEscape(t) + ") Tj"),
            void 0 !== e["word-spacing"] && this.pdf.internal.write(0, "Tw")
        }
        ,
        f.prototype.getPdfColor = function(t) {
            var e, n, r, i = /rgb\s*\(\s*(\d+),\s*(\d+),\s*(\d+\s*)\)/.exec(t);
            if (null != i ? (e = parseInt(i[1]),
            n = parseInt(i[2]),
            r = parseInt(i[3])) : ("#" != t.charAt(0) && ((t = S.colorNameToHex(t)) || (t = "#000000")),
            e = t.substring(1, 3),
            e = parseInt(e, 16),
            n = t.substring(3, 5),
            n = parseInt(n, 16),
            r = t.substring(5, 7),
            r = parseInt(r, 16)),
            "string" == typeof e && /^#[0-9A-Fa-f]{6}$/.test(e)) {
                var o = parseInt(e.substr(1), 16);
                e = o >> 16 & 255,
                n = o >> 8 & 255,
                r = 255 & o
            }
            var s = this.f3;
            return 0 === e && 0 === n && 0 === r || void 0 === n ? s(e / 255) + " g" : [s(e / 255), s(n / 255), s(r / 255), "rg"].join(" ")
        }
        ,
        f.prototype.f3 = function(t) {
            return t.toFixed(3)
        }
        ,
        f.prototype.renderParagraph = function(t) {
            var e, n, r, i, o, s, a, c, l, u, f, d, p;
            if (r = h(this.paragraph.text),
            d = this.paragraph.style,
            e = this.paragraph.blockstyle,
            this.paragraph.priorblockstyle || {},
            this.paragraph = {
                text: [],
                style: [],
                blockstyle: {},
                priorblockstyle: e
            },
            r.join("").trim()) {
                a = this.splitFragmentsIntoLines(r, d),
                s = void 0,
                c = void 0,
                12,
                n = 12 / this.pdf.internal.scaleFactor,
                this.priorMarginBottom = this.priorMarginBottom || 0,
                f = (Math.max((e["margin-top"] || 0) - this.priorMarginBottom, 0) + (e["padding-top"] || 0)) * n,
                u = ((e["margin-bottom"] || 0) + (e["padding-bottom"] || 0)) * n,
                this.priorMarginBottom = e["margin-bottom"] || 0,
                "always" === e["page-break-before"] && (this.pdf.addPage(),
                this.y = 0,
                f = ((e["margin-top"] || 0) + (e["padding-top"] || 0)) * n),
                l = this.pdf.internal.write,
                i = void 0,
                o = void 0,
                this.y += f,
                l("q", "BT 0 g", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td");
                for (var g = 0; a.length; ) {
                    for (c = 0,
                    i = 0,
                    o = (s = a.shift()).length; i !== o; )
                        s[i][0].trim() && (c = Math.max(c, s[i][1]["line-height"], s[i][1]["font-size"]),
                        p = 7 * s[i][1]["font-size"]),
                        i++;
                    var m = 0
                      , w = 0;
                    for (void 0 !== s[0][1]["margin-left"] && s[0][1]["margin-left"] > 0 && (m = (w = this.pdf.internal.getCoordinateString(s[0][1]["margin-left"])) - g,
                    g = w),
                    l(m + Math.max(e["margin-left"] || 0, 0) * n, (-12 * c).toFixed(2), "Td"),
                    i = 0,
                    o = s.length; i !== o; )
                        s[i][0] && this.RenderTextFragment(s[i][0], s[i][1]),
                        i++;
                    if (this.y += c * n,
                    this.executeWatchFunctions(s[0][1]) && a.length > 0) {
                        var y = []
                          , v = [];
                        a.forEach(function(t) {
                            for (var e = 0, n = t.length; e !== n; )
                                t[e][0] && (y.push(t[e][0] + " "),
                                v.push(t[e][1])),
                                ++e
                        }),
                        a = this.splitFragmentsIntoLines(h(y), v),
                        l("ET", "Q"),
                        l("q", "BT 0 g", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td")
                    }
                }
                return t && "function" == typeof t && t.call(this, this.x - 9, this.y - p / 2),
                l("ET", "Q"),
                this.y += u
            }
        }
        ,
        f.prototype.setBlockBoundary = function(t) {
            return this.renderParagraph(t)
        }
        ,
        f.prototype.setBlockStyle = function(t) {
            return this.paragraph.blockstyle = t
        }
        ,
        f.prototype.addText = function(t, e) {
            return this.paragraph.text.push(t),
            this.paragraph.style.push(e)
        }
        ,
        i = {
            helvetica: "helvetica",
            "sans-serif": "helvetica",
            "times new roman": "times",
            serif: "times",
            times: "times",
            monospace: "courier",
            courier: "courier"
        },
        a = {
            100: "normal",
            200: "normal",
            300: "normal",
            400: "normal",
            500: "bold",
            600: "bold",
            700: "bold",
            800: "bold",
            900: "bold",
            normal: "normal",
            bold: "bold",
            bolder: "bold",
            lighter: "normal"
        },
        o = {
            normal: "normal",
            italic: "italic",
            oblique: "italic"
        },
        s = {
            left: "left",
            right: "right",
            center: "center",
            justify: "justify"
        },
        c = {
            none: "none",
            right: "right",
            left: "left"
        },
        l = {
            none: "none",
            both: "both"
        },
        g = {
            normal: 1
        },
        e.fromHTML = function(t, e, n, r, i, o) {
            return this.margins_doc = o || {
                top: 0,
                bottom: 0
            },
            r || (r = {}),
            r.elementHandlers || (r.elementHandlers = {}),
            b(this, t, isNaN(e) ? 4 : e, isNaN(n) ? 4 : n, r, i)
        }
    }(e.API),
    e.API.addJS = function(t) {
        return m = t,
        this.internal.events.subscribe("postPutResources", function(t) {
            d = this.internal.newObject(),
            this.internal.write("<< /Names [(EmbeddedJS) " + (d + 1) + " 0 R] >>", "endobj"),
            p = this.internal.newObject(),
            this.internal.write("<< /S /JavaScript /JS (", m, ") >>", "endobj")
        }),
        this.internal.events.subscribe("putCatalog", function() {
            void 0 !== d && void 0 !== p && this.internal.write("/Names <</JavaScript " + d + " 0 R>>")
        }),
        this
    }
    ,
    function(t) {
        t.events.push(["postPutResources", function() {
            var t = this
              , e = /^(\d+) 0 obj$/;
            if (this.outline.root.children.length > 0)
                for (var n = t.outline.render().split(/\r\n/), r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = e.exec(i);
                    if (null != o) {
                        var s = o[1];
                        t.internal.newObjectDeferredBegin(s)
                    }
                    t.internal.write(i)
                }
            if (this.outline.createNamedDestinations) {
                var a = this.internal.pages.length
                  , c = [];
                for (r = 0; r < a; r++) {
                    var l = t.internal.newObject();
                    c.push(l);
                    var u = t.internal.getPageInfo(r + 1);
                    t.internal.write("<< /D[" + u.objId + " 0 R /XYZ null null null]>> endobj")
                }
                var h = t.internal.newObject();
                t.internal.write("<< /Names [ ");
                for (r = 0; r < c.length; r++)
                    t.internal.write("(page_" + (r + 1) + ")" + c[r] + " 0 R");
                t.internal.write(" ] >>", "endobj");
                t.internal.newObject();
                t.internal.write("<< /Dests " + h + " 0 R"),
                t.internal.write(">>", "endobj")
            }
        }
        ]),
        t.events.push(["putCatalog", function() {
            this.outline.root.children.length > 0 && (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)),
            this.outline.createNamedDestinations && this.internal.write("/Names " + namesOid + " 0 R"))
        }
        ]),
        t.events.push(["initialized", function() {
            var t = this;
            t.outline = {
                createNamedDestinations: !1,
                root: {
                    children: []
                }
            };
            t.outline.add = function(t, e, n) {
                var r = {
                    title: e,
                    options: n,
                    children: []
                };
                return null == t && (t = this.root),
                t.children.push(r),
                r
            }
            ,
            t.outline.render = function() {
                return this.ctx = {},
                this.ctx.val = "",
                this.ctx.pdf = t,
                this.genIds_r(this.root),
                this.renderRoot(this.root),
                this.renderItems(this.root),
                this.ctx.val
            }
            ,
            t.outline.genIds_r = function(e) {
                e.id = t.internal.newObjectDeferred();
                for (var n = 0; n < e.children.length; n++)
                    this.genIds_r(e.children[n])
            }
            ,
            t.outline.renderRoot = function(t) {
                this.objStart(t),
                this.line("/Type /Outlines"),
                t.children.length > 0 && (this.line("/First " + this.makeRef(t.children[0])),
                this.line("/Last " + this.makeRef(t.children[t.children.length - 1]))),
                this.line("/Count " + this.count_r({
                    count: 0
                }, t)),
                this.objEnd()
            }
            ,
            t.outline.renderItems = function(e) {
                for (var n = 0; n < e.children.length; n++) {
                    var r = e.children[n];
                    this.objStart(r),
                    this.line("/Title " + this.makeString(r.title)),
                    this.line("/Parent " + this.makeRef(e)),
                    n > 0 && this.line("/Prev " + this.makeRef(e.children[n - 1])),
                    n < e.children.length - 1 && this.line("/Next " + this.makeRef(e.children[n + 1])),
                    r.children.length > 0 && (this.line("/First " + this.makeRef(r.children[0])),
                    this.line("/Last " + this.makeRef(r.children[r.children.length - 1])));
                    var i = this.count = this.count_r({
                        count: 0
                    }, r);
                    if (i > 0 && this.line("/Count " + i),
                    r.options && r.options.pageNumber) {
                        var o = t.internal.getPageInfo(r.options.pageNumber);
                        this.line("/Dest [" + o.objId + " 0 R /XYZ 0 " + this.ctx.pdf.internal.pageSize.height + " 0]")
                    }
                    this.objEnd()
                }
                for (n = 0; n < e.children.length; n++) {
                    r = e.children[n];
                    this.renderItems(r)
                }
            }
            ,
            t.outline.line = function(t) {
                this.ctx.val += t + "\r\n"
            }
            ,
            t.outline.makeRef = function(t) {
                return t.id + " 0 R"
            }
            ,
            t.outline.makeString = function(e) {
                return "(" + t.internal.pdfEscape(e) + ")"
            }
            ,
            t.outline.objStart = function(t) {
                this.ctx.val += "\r\n" + t.id + " 0 obj\r\n<<\r\n"
            }
            ,
            t.outline.objEnd = function(t) {
                this.ctx.val += ">> \r\nendobj\r\n"
            }
            ,
            t.outline.count_r = function(t, e) {
                for (var n = 0; n < e.children.length; n++)
                    t.count++,
                    this.count_r(t, e.children[n]);
                return t.count
            }
        }
        ])
    }(e.API),
    function(t) {
        var e = function() {
            var t = "function" == typeof q;
            if (!t)
                throw new Error("requires deflate.js for compression");
            return t
        }
          , n = function(e, n, s, h) {
            var f = 5
              , d = c;
            switch (h) {
            case t.image_compression.FAST:
                f = 3,
                d = a;
                break;
            case t.image_compression.MEDIUM:
                f = 6,
                d = l;
                break;
            case t.image_compression.SLOW:
                f = 9,
                d = u
            }
            e = o(e, n, s, d);
            var p = new Uint8Array(r(f))
              , g = i(e)
              , m = new q(f)
              , w = m.append(e)
              , y = m.flush()
              , v = p.length + w.length + y.length
              , b = new Uint8Array(v + 4);
            return b.set(p),
            b.set(w, p.length),
            b.set(y, p.length + w.length),
            b[v++] = g >>> 24 & 255,
            b[v++] = g >>> 16 & 255,
            b[v++] = g >>> 8 & 255,
            b[v++] = 255 & g,
            t.arrayBufferToBinaryString(b)
        }
          , r = function(t, e) {
            var n = Math.LOG2E * Math.log(32768) - 8 << 4 | 8
              , r = n << 8;
            return r |= Math.min(3, (e - 1 & 255) >> 1) << 6,
            r |= 0,
            [n, 255 & (r += 31 - r % 31)]
        }
          , i = function(t, e) {
            for (var n, r = 1, i = 0, o = t.length, s = 0; o > 0; ) {
                o -= n = o > e ? e : o;
                do {
                    i += r += t[s++]
                } while (--n);
                r %= 65521,
                i %= 65521
            }
            return (i << 16 | r) >>> 0
        }
          , o = function(t, e, n, r) {
            for (var i, o, s, a = t.length / e, c = new Uint8Array(t.length + a), l = f(), u = 0; u < a; u++) {
                if (s = u * e,
                i = t.subarray(s, s + e),
                r)
                    c.set(r(i, n, o), s + u);
                else {
                    for (var h = 0, p = l.length, g = []; h < p; h++)
                        g[h] = l[h](i, n, o);
                    var m = d(g.concat());
                    c.set(g[m], s + u)
                }
                o = i
            }
            return c
        }
          , s = function(t, e, n) {
            var r = Array.apply([], t);
            return r.unshift(0),
            r
        }
          , a = function(t, e, n) {
            var r, i = [], o = 0, s = t.length;
            for (i[0] = 1; o < s; o++)
                r = t[o - e] || 0,
                i[o + 1] = t[o] - r + 256 & 255;
            return i
        }
          , c = function(t, e, n) {
            var r, i = [], o = 0, s = t.length;
            for (i[0] = 2; o < s; o++)
                r = n && n[o] || 0,
                i[o + 1] = t[o] - r + 256 & 255;
            return i
        }
          , l = function(t, e, n) {
            var r, i, o = [], s = 0, a = t.length;
            for (o[0] = 3; s < a; s++)
                r = t[s - e] || 0,
                i = n && n[s] || 0,
                o[s + 1] = t[s] + 256 - (r + i >>> 1) & 255;
            return o
        }
          , u = function(t, e, n) {
            var r, i, o, s, a = [], c = 0, l = t.length;
            for (a[0] = 4; c < l; c++)
                r = t[c - e] || 0,
                i = n && n[c] || 0,
                o = n && n[c - e] || 0,
                s = h(r, i, o),
                a[c + 1] = t[c] - s + 256 & 255;
            return a
        }
          , h = function(t, e, n) {
            var r = t + e - n
              , i = Math.abs(r - t)
              , o = Math.abs(r - e)
              , s = Math.abs(r - n);
            return i <= o && i <= s ? t : o <= s ? e : n
        }
          , f = function() {
            return [s, a, c, l, u]
        }
          , d = function(t) {
            for (var e, n, r, i = 0, o = t.length; i < o; )
                ((e = p(t[i].slice(1))) < n || !n) && (n = e,
                r = i),
                i++;
            return r
        }
          , p = function(t) {
            for (var e = 0, n = t.length, r = 0; e < n; )
                r += Math.abs(t[e++]);
            return r
        };
        t.processPNG = function(r, i, o, s, a) {
            var c, l, u, h, f, d, p = this.color_spaces.DEVICE_RGB, g = this.decode.FLATE_DECODE, m = 8;
            if (this.isArrayBuffer(r) && (r = new Uint8Array(r)),
            this.isArrayBufferView(r)) {
                if ("function" != typeof PNG || "function" != typeof I)
                    throw new Error("PNG support requires png.js and zlib.js");
                if (r = (c = new PNG(r)).imgData,
                m = c.bits,
                p = c.colorSpace,
                h = c.colors,
                -1 !== [4, 6].indexOf(c.colorType)) {
                    if (8 === c.bits)
                        for (var w, y = (P = 32 == c.pixelBitlength ? new Uint32Array(c.decodePixels().buffer) : 16 == c.pixelBitlength ? new Uint16Array(c.decodePixels().buffer) : new Uint8Array(c.decodePixels().buffer)).length, v = new Uint8Array(y * c.colors), b = new Uint8Array(y), x = c.pixelBitlength - c.bits, k = 0, _ = 0; k < y; k++) {
                            for (C = P[k],
                            w = 0; w < x; )
                                v[_++] = C >>> w & 255,
                                w += c.bits;
                            b[k] = C >>> w & 255
                        }
                    if (16 === c.bits) {
                        y = (P = new Uint32Array(c.decodePixels().buffer)).length,
                        v = new Uint8Array(y * (32 / c.pixelBitlength) * c.colors),
                        b = new Uint8Array(y * (32 / c.pixelBitlength));
                        for (var C, A = c.colors > 1, S = (k = 0,
                        _ = 0,
                        0); k < y; )
                            C = P[k++],
                            v[_++] = C >>> 0 & 255,
                            A && (v[_++] = C >>> 16 & 255,
                            C = P[k++],
                            v[_++] = C >>> 0 & 255),
                            b[S++] = C >>> 16 & 255;
                        m = 8
                    }
                    s !== t.image_compression.NONE && e() ? (r = n(v, c.width * c.colors, c.colors, s),
                    d = n(b, c.width, 1, s)) : (r = v,
                    d = b,
                    g = null)
                }
                if (3 === c.colorType && (p = this.color_spaces.INDEXED,
                f = c.palette,
                c.transparency.indexed)) {
                    var q = c.transparency.indexed
                      , T = 0;
                    for (k = 0,
                    y = q.length; k < y; ++k)
                        T += q[k];
                    if ((T /= 255) === y - 1 && -1 !== q.indexOf(0))
                        u = [q.indexOf(0)];
                    else if (T !== y) {
                        var P = c.decodePixels();
                        for (b = new Uint8Array(P.length),
                        k = 0,
                        y = P.length; k < y; k++)
                            b[k] = q[P[k]];
                        d = n(b, c.width, 1)
                    }
                }
                var E = function(e) {
                    var n;
                    switch (e) {
                    case t.image_compression.FAST:
                        n = 11;
                        break;
                    case t.image_compression.MEDIUM:
                        n = 13;
                        break;
                    case t.image_compression.SLOW:
                        n = 14
                    }
                    return n
                }(s);
                return l = g === this.decode.FLATE_DECODE ? "/Predictor " + E + " /Colors " + h + " /BitsPerComponent " + m + " /Columns " + c.width : "/Colors " + h + " /BitsPerComponent " + m + " /Columns " + c.width,
                (this.isArrayBuffer(r) || this.isArrayBufferView(r)) && (r = this.arrayBufferToBinaryString(r)),
                (d && this.isArrayBuffer(d) || this.isArrayBufferView(d)) && (d = this.arrayBufferToBinaryString(d)),
                this.createImageInfo(r, c.width, c.height, p, m, g, i, o, l, u, f, d, E)
            }
            throw new Error("Unsupported PNG image data, try using JPEG instead.")
        }
    }(e.API),
    e.API.autoPrint = function() {
        var t;
        return this.internal.events.subscribe("postPutResources", function() {
            t = this.internal.newObject(),
            this.internal.write("<< /S/Named /Type/Action /N/Print >>", "endobj")
        }),
        this.internal.events.subscribe("putCatalog", function() {
            this.internal.write("/OpenAction " + t + " 0 R")
        }),
        this
    }
    ,
    w = e.API,
    y = w.getCharWidthsArray = function(t, e) {
        e || (e = {});
        var n, r, i, o = e.widths ? e.widths : this.internal.getFont().metadata.Unicode.widths, s = o.fof ? o.fof : 1, a = e.kerning ? e.kerning : this.internal.getFont().metadata.Unicode.kerning, c = a.fof ? a.fof : 1, l = 0, u = o[0] || s, h = [];
        for (n = 0,
        r = t.length; n < r; n++)
            i = t.charCodeAt(n),
            h.push((o[i] || u) / s + (a[i] && a[i][l] || 0) / c),
            l = i;
        return h
    }
    ,
    v = function(t) {
        for (var e = t.length, n = 0; e; )
            n += t[--e];
        return n
    }
    ,
    x = w.getStringUnitWidth = function(t, e) {
        return v(y.call(this, t, e))
    }
    ,
    k = function(t, e, n, r) {
        for (var i = [], o = 0, s = t.length, a = 0; o !== s && a + e[o] < n; )
            a += e[o],
            o++;
        i.push(t.slice(0, o));
        var c = o;
        for (a = 0; o !== s; )
            a + e[o] > r && (i.push(t.slice(c, o)),
            a = 0,
            c = o),
            a += e[o],
            o++;
        return c !== o && i.push(t.slice(c, o)),
        i
    }
    ,
    _ = function(t, e, n) {
        n || (n = {});
        var r, i, o, s, a, c, l = [], u = [l], h = n.textIndent || 0, f = 0, d = 0, p = t.split(" "), g = y(" ", n)[0];
        if (c = -1 === n.lineIndent ? p[0].length + 2 : n.lineIndent || 0) {
            var m = Array(c).join(" ")
              , w = [];
            p.map(function(t) {
                (t = t.split(/\s*\n/)).length > 1 ? w = w.concat(t.map(function(t, e) {
                    return (e && t.length ? "\n" : "") + t
                })) : w.push(t[0])
            }),
            p = w,
            c = x(m, n)
        }
        for (o = 0,
        s = p.length; o < s; o++) {
            var b = 0;
            if (r = p[o],
            c && "\n" == r[0] && (r = r.substr(1),
            b = 1),
            i = y(r, n),
            h + f + (d = v(i)) > e || b) {
                if (d > e) {
                    for (a = k(r, i, e - (h + f), e),
                    l.push(a.shift()),
                    l = [a.pop()]; a.length; )
                        u.push([a.shift()]);
                    d = v(i.slice(r.length - l[0].length))
                } else
                    l = [r];
                u.push(l),
                h = d + c,
                f = g
            } else
                l.push(r),
                h += f + d,
                f = g
        }
        if (c)
            var _ = function(t, e) {
                return (e ? m : "") + t.join(" ")
            };
        else
            _ = function(t) {
                return t.join(" ")
            }
            ;
        return u.map(_)
    }
    ,
    w.splitTextToSize = function(t, e, n) {
        n || (n = {});
        var r, i = n.fontSize || this.internal.getFontSize(), o = function(t) {
            var e = {
                0: 1
            }
              , n = {};
            if (t.widths && t.kerning)
                return {
                    widths: t.widths,
                    kerning: t.kerning
                };
            var r = this.internal.getFont(t.fontName, t.fontStyle);
            return r.metadata.Unicode ? {
                widths: r.metadata.Unicode.widths || e,
                kerning: r.metadata.Unicode.kerning || n
            } : {
                widths: e,
                kerning: n
            }
        }
        .call(this, n);
        r = Array.isArray(t) ? t : t.split(/\r?\n/);
        var s = 1 * this.internal.scaleFactor * e / i;
        o.textIndent = n.textIndent ? 1 * n.textIndent * this.internal.scaleFactor / i : 0,
        o.lineIndent = n.lineIndent;
        var a, c, l = [];
        for (a = 0,
        c = r.length; a < c; a++)
            l = l.concat(_(r[a], s, o));
        return l
    }
    ,
    function(t) {
        var e = function(t) {
            for (var e = {}, n = 0; n < "klmnopqrstuvwxyz".length; n++)
                e["klmnopqrstuvwxyz"[n]] = "0123456789abcdef"[n];
            var r, i, o, s, a = {}, c = 1, l = a, u = [], h = "", f = "", d = t.length - 1;
            for (n = 1; n != d; )
                s = t[n],
                n += 1,
                "'" == s ? r ? (o = r.join(""),
                r = void 0) : r = [] : r ? r.push(s) : "{" == s ? (u.push([l, o]),
                l = {},
                o = void 0) : "}" == s ? ((i = u.pop())[0][i[1]] = l,
                o = void 0,
                l = i[0]) : "-" == s ? c = -1 : void 0 === o ? e.hasOwnProperty(s) ? (h += e[s],
                o = parseInt(h, 16) * c,
                c = 1,
                h = "") : h += s : e.hasOwnProperty(s) ? (f += e[s],
                l[o] = parseInt(f, 16) * c,
                c = 1,
                o = void 0,
                f = "") : f += s;
            return a
        }
          , n = {
            codePages: ["WinAnsiEncoding"],
            WinAnsiEncoding: e("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")
        }
          , r = {
            Unicode: {
                Courier: n,
                "Courier-Bold": n,
                "Courier-BoldOblique": n,
                "Courier-Oblique": n,
                Helvetica: n,
                "Helvetica-Bold": n,
                "Helvetica-BoldOblique": n,
                "Helvetica-Oblique": n,
                "Times-Roman": n,
                "Times-Bold": n,
                "Times-BoldItalic": n,
                "Times-Italic": n
            }
        }
          , i = {
            Unicode: {
                "Courier-Oblique": e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                "Times-BoldItalic": e("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),
                "Helvetica-Bold": e("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
                Courier: e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                "Courier-BoldOblique": e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                "Times-Bold": e("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),
                Helvetica: e("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),
                "Helvetica-BoldOblique": e("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
                "Courier-Bold": e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                "Times-Italic": e("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),
                "Times-Roman": e("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),
                "Helvetica-Oblique": e("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")
            }
        };
        t.events.push(["addFont", function(t) {
            var e, n, o;
            (e = i.Unicode[t.PostScriptName]) && ((n = t.metadata.Unicode ? t.metadata.Unicode : t.metadata.Unicode = {}).widths = e.widths,
            n.kerning = e.kerning),
            (o = r.Unicode[t.PostScriptName]) && ((n = t.metadata.Unicode ? t.metadata.Unicode : t.metadata.Unicode = {}).encoding = o,
            o.codePages && o.codePages.length && (t.encoding = o.codePages[0]))
        }
        ])
    }(e.API),
    e.API.addSVG = function(t, e, n, r, i) {
        if (void 0 === e || void 0 === n)
            throw new Error("addSVG needs values for 'x' and 'y'");
        function o(t) {
            for (var e = parseFloat(t[1]), n = parseFloat(t[2]), r = [], i = 3, o = t.length; i < o; )
                "c" === t[i] ? (r.push([parseFloat(t[i + 1]), parseFloat(t[i + 2]), parseFloat(t[i + 3]), parseFloat(t[i + 4]), parseFloat(t[i + 5]), parseFloat(t[i + 6])]),
                i += 7) : "l" === t[i] ? (r.push([parseFloat(t[i + 1]), parseFloat(t[i + 2])]),
                i += 3) : i += 1;
            return [e, n, r]
        }
        var s = function(t, e) {
            var n = (e.contentWindow || e.contentDocument).document;
            return n.write(t),
            n.close(),
            n.getElementsByTagName("svg")[0]
        }(t, function(t) {
            var e = t.createElement("iframe");
            return function(t, e) {
                var n = e.createElement("style");
                n.type = "text/css",
                n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(e.createTextNode(t)),
                e.getElementsByTagName("head")[0].appendChild(n)
            }(".jsPDF_sillysvg_iframe {display:none;position:absolute;}", t),
            e.name = "childframe",
            e.setAttribute("width", 0),
            e.setAttribute("height", 0),
            e.setAttribute("frameborder", "0"),
            e.setAttribute("scrolling", "no"),
            e.setAttribute("seamless", "seamless"),
            e.setAttribute("class", "jsPDF_sillysvg_iframe"),
            t.body.appendChild(e),
            e
        }(document))
          , a = [1, 1]
          , c = parseFloat(s.getAttribute("width"))
          , l = parseFloat(s.getAttribute("height"));
        c && l && (r && i ? a = [r / c, i / l] : r ? a = [r / c, r / c] : i && (a = [i / l, i / l]));
        var u, h, f, d, p = s.childNodes;
        for (u = 0,
        h = p.length; u < h; u++)
            (f = p[u]).tagName && "PATH" === f.tagName.toUpperCase() && ((d = o(f.getAttribute("d").split(" ")))[0] = d[0] * a[0] + e,
            d[1] = d[1] * a[1] + n,
            this.lines.call(this, d[2], d[0], d[1], a));
        return this
    }
    ,
    e.API.putTotalPages = function(t) {
        for (var e = new RegExp(t,"g"), n = 1; n <= this.internal.getNumberOfPages(); n++)
            for (var r = 0; r < this.internal.pages[n].length; r++)
                this.internal.pages[n][r] = this.internal.pages[n][r].replace(e, this.internal.getNumberOfPages());
        return this
    }
    ,
    function(t) {
        var e = ""
          , n = ""
          , r = "";
        t.addMetadata = function(t, i) {
            return n = i || "http://jspdf.default.namespaceuri/",
            e = t,
            this.internal.events.subscribe("postPutResources", function() {
                if (e) {
                    var t = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + n + '"><jspdf:metadata>'
                      , i = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">'))
                      , o = unescape(encodeURIComponent(t))
                      , s = unescape(encodeURIComponent(e))
                      , a = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>"))
                      , c = unescape(encodeURIComponent("</x:xmpmeta>"))
                      , l = o.length + s.length + a.length + i.length + c.length;
                    r = this.internal.newObject(),
                    this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + l + " >>"),
                    this.internal.write("stream"),
                    this.internal.write(i + o + s + a + c),
                    this.internal.write("endstream"),
                    this.internal.write("endobj")
                } else
                    r = ""
            }),
            this.internal.events.subscribe("putCatalog", function() {
                r && this.internal.write("/Metadata " + r + " 0 R")
            }),
            this
        }
    }(e.API),
    function(t) {
        if (t.URL = t.URL || t.webkitURL,
        t.Blob && t.URL)
            try {
                return void new Blob
            } catch (t) {}
        var e = t.BlobBuilder || t.WebKitBlobBuilder || t.MozBlobBuilder || function(t) {
            var e = function(t) {
                return Object.prototype.toString.call(t).match(/^\[object\s(.*)\]$/)[1]
            }
              , n = function() {
                this.data = []
            }
              , r = function(t, e, n) {
                this.data = t,
                this.size = t.length,
                this.type = e,
                this.encoding = n
            }
              , i = n.prototype
              , o = r.prototype
              , s = t.FileReaderSync
              , a = function(t) {
                this.code = this[this.name = t]
            }
              , c = "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" ")
              , l = c.length
              , u = t.URL || t.webkitURL || t
              , h = u.createObjectURL
              , f = u.revokeObjectURL
              , d = u
              , p = t.btoa
              , g = t.atob
              , m = t.ArrayBuffer
              , w = t.Uint8Array
              , y = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;
            for (r.fake = o.fake = !0; l--; )
                a.prototype[c[l]] = l + 1;
            return u.createObjectURL || (d = t.URL = function(t) {
                var e, n = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
                return n.href = t,
                "origin"in n || ("data:" === n.protocol.toLowerCase() ? n.origin = null : (e = t.match(y),
                n.origin = e && e[1])),
                n
            }
            ),
            d.createObjectURL = function(t) {
                var e, n = t.type;
                return null === n && (n = "application/octet-stream"),
                t instanceof r ? (e = "data:" + n,
                "base64" === t.encoding ? e + ";base64," + t.data : "URI" === t.encoding ? e + "," + decodeURIComponent(t.data) : p ? e + ";base64," + p(t.data) : e + "," + encodeURIComponent(t.data)) : h ? h.call(u, t) : void 0
            }
            ,
            d.revokeObjectURL = function(t) {
                "data:" !== t.substring(0, 5) && f && f.call(u, t)
            }
            ,
            i.append = function(t) {
                var n = this.data;
                if (w && (t instanceof m || t instanceof w)) {
                    for (var i = "", o = new w(t), c = 0, l = o.length; c < l; c++)
                        i += String.fromCharCode(o[c]);
                    n.push(i)
                } else if ("Blob" === e(t) || "File" === e(t)) {
                    if (!s)
                        throw new a("NOT_READABLE_ERR");
                    var u = new s;
                    n.push(u.readAsBinaryString(t))
                } else
                    t instanceof r ? "base64" === t.encoding && g ? n.push(g(t.data)) : "URI" === t.encoding ? n.push(decodeURIComponent(t.data)) : "raw" === t.encoding && n.push(t.data) : ("string" != typeof t && (t += ""),
                    n.push(unescape(encodeURIComponent(t))))
            }
            ,
            i.getBlob = function(t) {
                return arguments.length || (t = null),
                new r(this.data.join(""),t,"raw")
            }
            ,
            i.toString = function() {
                return "[object BlobBuilder]"
            }
            ,
            o.slice = function(t, e, n) {
                var i = arguments.length;
                return i < 3 && (n = null),
                new r(this.data.slice(t, i > 1 ? e : this.data.length),n,this.encoding)
            }
            ,
            o.toString = function() {
                return "[object Blob]"
            }
            ,
            o.close = function() {
                this.size = 0,
                delete this.data
            }
            ,
            n
        }(t);
        t.Blob = function(t, n) {
            var r = n && n.type || ""
              , i = new e;
            if (t)
                for (var o = 0, s = t.length; o < s; o++)
                    Uint8Array && t[o]instanceof Uint8Array ? i.append(t[o].buffer) : i.append(t[o]);
            var a = i.getBlob(r);
            return !a.slice && a.webkitSlice && (a.slice = a.webkitSlice),
            a
        }
        ;
        var n = Object.getPrototypeOf || function(t) {
            return t.__proto__
        }
        ;
        t.Blob.prototype = n(new t.Blob)
    }("undefined" != typeof self && self || "undefined" != typeof window && window || (void 0).content || void 0);
    var A = A || function(t) {
        if ("undefined" == typeof navigator || !/MSIE [1-9]\./.test(navigator.userAgent)) {
            var e = t.document
              , n = function() {
                return t.URL || t.webkitURL || t
            }
              , r = e.createElementNS("http://www.w3.org/1999/xhtml", "a")
              , i = "download"in r
              , o = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent)
              , s = t.webkitRequestFileSystem
              , a = t.requestFileSystem || s || t.mozRequestFileSystem
              , c = function(e) {
                (t.setImmediate || t.setTimeout)(function() {
                    throw e
                }, 0)
            }
              , l = 0
              , u = function(e) {
                var r = function() {
                    "string" == typeof e ? n().revokeObjectURL(e) : e.remove()
                };
                t.chrome ? r() : setTimeout(r, 500)
            }
              , h = function(t, e, n) {
                for (var r = (e = [].concat(e)).length; r--; ) {
                    var i = t["on" + e[r]];
                    if ("function" == typeof i)
                        try {
                            i.call(t, n || t)
                        } catch (t) {
                            c(t)
                        }
                }
            }
              , f = function(t) {
                return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob(["\ufeff", t],{
                    type: t.type
                }) : t
            }
              , d = function(e, c, d) {
                d || (e = f(e));
                var p, g, m, w = this, y = e.type, v = !1, b = function() {
                    h(w, "writestart progress write writeend".split(" "))
                }, x = function() {
                    if (g && o && "undefined" != typeof FileReader) {
                        var r = new FileReader;
                        return r.onloadend = function() {
                            var t = r.result;
                            g.location.href = "data:attachment/file" + t.slice(t.search(/[,;]/)),
                            w.readyState = w.DONE,
                            b()
                        }
                        ,
                        r.readAsDataURL(e),
                        void (w.readyState = w.INIT)
                    }
                    (!v && p || (p = n().createObjectURL(e)),
                    g) ? g.location.href = p : null == t.open(p, "_blank") && o && (t.location.href = p);
                    w.readyState = w.DONE,
                    b(),
                    u(p)
                }, k = function(t) {
                    return function() {
                        if (w.readyState !== w.DONE)
                            return t.apply(this, arguments)
                    }
                }, _ = {
                    create: !0,
                    exclusive: !1
                };
                if (w.readyState = w.INIT,
                c || (c = "download"),
                i)
                    return p = n().createObjectURL(e),
                    void setTimeout(function() {
                        var t, e;
                        r.href = p,
                        r.download = c,
                        t = r,
                        e = new MouseEvent("click"),
                        t.dispatchEvent(e),
                        b(),
                        u(p),
                        w.readyState = w.DONE
                    });
                t.chrome && y && "application/octet-stream" !== y && (m = e.slice || e.webkitSlice,
                e = m.call(e, 0, e.size, "application/octet-stream"),
                v = !0),
                s && "download" !== c && (c += ".download"),
                ("application/octet-stream" === y || s) && (g = t),
                a ? (l += e.size,
                a(t.TEMPORARY, l, k(function(t) {
                    t.root.getDirectory("saved", _, k(function(t) {
                        var n = function() {
                            t.getFile(c, _, k(function(t) {
                                t.createWriter(k(function(n) {
                                    n.onwriteend = function(e) {
                                        g.location.href = t.toURL(),
                                        w.readyState = w.DONE,
                                        h(w, "writeend", e),
                                        u(t)
                                    }
                                    ,
                                    n.onerror = function() {
                                        var t = n.error;
                                        t.code !== t.ABORT_ERR && x()
                                    }
                                    ,
                                    "writestart progress write abort".split(" ").forEach(function(t) {
                                        n["on" + t] = w["on" + t]
                                    }),
                                    n.write(e),
                                    w.abort = function() {
                                        n.abort(),
                                        w.readyState = w.DONE
                                    }
                                    ,
                                    w.readyState = w.WRITING
                                }), x)
                            }), x)
                        };
                        t.getFile(c, {
                            create: !1
                        }, k(function(t) {
                            t.remove(),
                            n()
                        }), k(function(t) {
                            t.code === t.NOT_FOUND_ERR ? n() : x()
                        }))
                    }), x)
                }), x)) : x()
            }
              , p = d.prototype;
            return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(t, e, n) {
                return n || (t = f(t)),
                navigator.msSaveOrOpenBlob(t, e || "download")
            }
            : (p.abort = function() {
                this.readyState = this.DONE,
                h(this, "abort")
            }
            ,
            p.readyState = p.INIT = 0,
            p.WRITING = 1,
            p.DONE = 2,
            p.error = p.onwritestart = p.onprogress = p.onwrite = p.onabort = p.onerror = p.onwriteend = null,
            function(t, e, n) {
                return new d(t,e,n)
            }
            )
        }
    }("undefined" != typeof self && self || "undefined" != typeof window && window || (void 0).content);
    "undefined" != typeof module && module.exports ? module.exports.saveAs = A : "undefined" != typeof define && null !== define && null != define.amd && define([], function() {
        return A
    }),
    function(t, e) {
        "object" == typeof module ? module.exports = e() : "function" == typeof define ? define(e) : t.adler32cs = e()
    }(e, function() {
        var t, e, n, r, i, o = "function" == typeof ArrayBuffer && "function" == typeof Uint8Array, s = null, a = function() {
            if (!o)
                return function() {
                    return !1
                }
                ;
            try {
                var t = {};
                "function" == typeof t.Buffer && (s = t.Buffer)
            } catch (t) {}
            return function(t) {
                return t instanceof ArrayBuffer || null !== s && t instanceof s
            }
        }(), c = null !== s ? function(t) {
            return new s(t,"utf8").toString("binary")
        }
        : function(t) {
            return unescape(encodeURIComponent(t))
        }
        , l = function(t, e) {
            for (var n = 65535 & t, r = t >>> 16, i = 0, o = e.length; i < o; i++)
                r = (r + (n = (n + (255 & e.charCodeAt(i))) % 65521)) % 65521;
            return (r << 16 | n) >>> 0
        }, u = function(t, e) {
            for (var n = 65535 & t, r = t >>> 16, i = 0, o = e.length; i < o; i++)
                r = (r + (n = (n + e[i]) % 65521)) % 65521;
            return (r << 16 | n) >>> 0
        }, h = {}, f = h.Adler32 = ((i = (r = function(t) {
            if (!(this instanceof r))
                throw new TypeError("Constructor cannot called be as a function.");
            if (!isFinite(t = null == t ? 1 : +t))
                throw new Error("First arguments needs to be a finite number.");
            this.checksum = t >>> 0
        }
        ).prototype = {}).constructor = r,
        r.from = ((t = function(t) {
            if (!(this instanceof r))
                throw new TypeError("Constructor cannot called be as a function.");
            if (null == t)
                throw new Error("First argument needs to be a string.");
            this.checksum = l(1, t.toString())
        }
        ).prototype = i,
        t),
        r.fromUtf8 = ((e = function(t) {
            if (!(this instanceof r))
                throw new TypeError("Constructor cannot called be as a function.");
            if (null == t)
                throw new Error("First argument needs to be a string.");
            var e = c(t.toString());
            this.checksum = l(1, e)
        }
        ).prototype = i,
        e),
        o && (r.fromBuffer = ((n = function(t) {
            if (!(this instanceof r))
                throw new TypeError("Constructor cannot called be as a function.");
            if (!a(t))
                throw new Error("First argument needs to be ArrayBuffer.");
            var e = new Uint8Array(t);
            return this.checksum = u(1, e)
        }
        ).prototype = i,
        n)),
        i.update = function(t) {
            if (null == t)
                throw new Error("First argument needs to be a string.");
            return t = t.toString(),
            this.checksum = l(this.checksum, t)
        }
        ,
        i.updateUtf8 = function(t) {
            if (null == t)
                throw new Error("First argument needs to be a string.");
            var e = c(t.toString());
            return this.checksum = l(this.checksum, e)
        }
        ,
        o && (i.updateBuffer = function(t) {
            if (!a(t))
                throw new Error("First argument needs to be ArrayBuffer.");
            var e = new Uint8Array(t);
            return this.checksum = u(this.checksum, e)
        }
        ),
        i.clone = function() {
            return new f(this.checksum)
        }
        ,
        r);
        return h.from = function(t) {
            if (null == t)
                throw new Error("First argument needs to be a string.");
            return l(1, t.toString())
        }
        ,
        h.fromUtf8 = function(t) {
            if (null == t)
                throw new Error("First argument needs to be a string.");
            var e = c(t.toString());
            return l(1, e)
        }
        ,
        o && (h.fromBuffer = function(t) {
            if (!a(t))
                throw new Error("First argument need to be ArrayBuffer.");
            var e = new Uint8Array(t);
            return u(1, e)
        }
        ),
        h
    });
    var S = {
        _colorsTable: {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            "indianred ": "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgrey: "#d3d3d3",
            lightgreen: "#90ee90",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370d8",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#d87093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32"
        },
        colorNameToHex: function(t) {
            return t = t.toLowerCase(),
            void 0 !== this._colorsTable[t] && this._colorsTable[t]
        }
    }
      , q = function(t) {
        var e = 15
          , n = 30
          , r = 19
          , i = 256
          , o = i + 1 + 29
          , s = 2 * o + 1
          , a = 256
          , c = 16
          , l = 17
          , u = 18
          , h = 16
          , f = -1
          , d = 1
          , p = 2
          , g = 0
          , m = 0
          , w = 1
          , y = 3
          , v = 4
          , b = 0
          , x = 1
          , k = 2
          , _ = -2
          , C = -3
          , A = -5
          , S = [0, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 0, 0, 16, 17, 18, 18, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29];
        function q() {
            var t = this;
            function n(t, e) {
                var n = 0;
                do {
                    n |= 1 & t,
                    t >>>= 1,
                    n <<= 1
                } while (--e > 0);
                return n >>> 1
            }
            t.build_tree = function(r) {
                var i, o, a, c = t.dyn_tree, l = t.stat_desc.static_tree, u = t.stat_desc.elems, h = -1;
                for (r.heap_len = 0,
                r.heap_max = s,
                i = 0; i < u; i++)
                    0 !== c[2 * i] ? (r.heap[++r.heap_len] = h = i,
                    r.depth[i] = 0) : c[2 * i + 1] = 0;
                for (; r.heap_len < 2; )
                    c[2 * (a = r.heap[++r.heap_len] = h < 2 ? ++h : 0)] = 1,
                    r.depth[a] = 0,
                    r.opt_len--,
                    l && (r.static_len -= l[2 * a + 1]);
                for (t.max_code = h,
                i = Math.floor(r.heap_len / 2); i >= 1; i--)
                    r.pqdownheap(c, i);
                a = u;
                do {
                    i = r.heap[1],
                    r.heap[1] = r.heap[r.heap_len--],
                    r.pqdownheap(c, 1),
                    o = r.heap[1],
                    r.heap[--r.heap_max] = i,
                    r.heap[--r.heap_max] = o,
                    c[2 * a] = c[2 * i] + c[2 * o],
                    r.depth[a] = Math.max(r.depth[i], r.depth[o]) + 1,
                    c[2 * i + 1] = c[2 * o + 1] = a,
                    r.heap[1] = a++,
                    r.pqdownheap(c, 1)
                } while (r.heap_len >= 2);
                r.heap[--r.heap_max] = r.heap[1],
                function(n) {
                    var r, i, o, a, c, l, u = t.dyn_tree, h = t.stat_desc.static_tree, f = t.stat_desc.extra_bits, d = t.stat_desc.extra_base, p = t.stat_desc.max_length, g = 0;
                    for (a = 0; a <= e; a++)
                        n.bl_count[a] = 0;
                    for (u[2 * n.heap[n.heap_max] + 1] = 0,
                    r = n.heap_max + 1; r < s; r++)
                        (a = u[2 * u[2 * (i = n.heap[r]) + 1] + 1] + 1) > p && (a = p,
                        g++),
                        u[2 * i + 1] = a,
                        i > t.max_code || (n.bl_count[a]++,
                        c = 0,
                        i >= d && (c = f[i - d]),
                        l = u[2 * i],
                        n.opt_len += l * (a + c),
                        h && (n.static_len += l * (h[2 * i + 1] + c)));
                    if (0 !== g) {
                        do {
                            for (a = p - 1; 0 === n.bl_count[a]; )
                                a--;
                            n.bl_count[a]--,
                            n.bl_count[a + 1] += 2,
                            n.bl_count[p]--,
                            g -= 2
                        } while (g > 0);
                        for (a = p; 0 !== a; a--)
                            for (i = n.bl_count[a]; 0 !== i; )
                                (o = n.heap[--r]) > t.max_code || (u[2 * o + 1] != a && (n.opt_len += (a - u[2 * o + 1]) * u[2 * o],
                                u[2 * o + 1] = a),
                                i--)
                    }
                }(r),
                function(t, r, i) {
                    var o, s, a, c = [], l = 0;
                    for (o = 1; o <= e; o++)
                        c[o] = l = l + i[o - 1] << 1;
                    for (s = 0; s <= r; s++)
                        0 !== (a = t[2 * s + 1]) && (t[2 * s] = n(c[a]++, a))
                }(c, t.max_code, r.bl_count)
            }
        }
        function T(t, e, n, r, i) {
            this.static_tree = t,
            this.extra_bits = e,
            this.extra_base = n,
            this.elems = r,
            this.max_length = i
        }
        q._length_code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28],
        q.base_length = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0],
        q.base_dist = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384, 24576],
        q.d_code = function(t) {
            return t < 256 ? S[t] : S[256 + (t >>> 7)]
        }
        ,
        q.extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
        q.extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
        q.extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
        q.bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        T.static_ltree = [12, 8, 140, 8, 76, 8, 204, 8, 44, 8, 172, 8, 108, 8, 236, 8, 28, 8, 156, 8, 92, 8, 220, 8, 60, 8, 188, 8, 124, 8, 252, 8, 2, 8, 130, 8, 66, 8, 194, 8, 34, 8, 162, 8, 98, 8, 226, 8, 18, 8, 146, 8, 82, 8, 210, 8, 50, 8, 178, 8, 114, 8, 242, 8, 10, 8, 138, 8, 74, 8, 202, 8, 42, 8, 170, 8, 106, 8, 234, 8, 26, 8, 154, 8, 90, 8, 218, 8, 58, 8, 186, 8, 122, 8, 250, 8, 6, 8, 134, 8, 70, 8, 198, 8, 38, 8, 166, 8, 102, 8, 230, 8, 22, 8, 150, 8, 86, 8, 214, 8, 54, 8, 182, 8, 118, 8, 246, 8, 14, 8, 142, 8, 78, 8, 206, 8, 46, 8, 174, 8, 110, 8, 238, 8, 30, 8, 158, 8, 94, 8, 222, 8, 62, 8, 190, 8, 126, 8, 254, 8, 1, 8, 129, 8, 65, 8, 193, 8, 33, 8, 161, 8, 97, 8, 225, 8, 17, 8, 145, 8, 81, 8, 209, 8, 49, 8, 177, 8, 113, 8, 241, 8, 9, 8, 137, 8, 73, 8, 201, 8, 41, 8, 169, 8, 105, 8, 233, 8, 25, 8, 153, 8, 89, 8, 217, 8, 57, 8, 185, 8, 121, 8, 249, 8, 5, 8, 133, 8, 69, 8, 197, 8, 37, 8, 165, 8, 101, 8, 229, 8, 21, 8, 149, 8, 85, 8, 213, 8, 53, 8, 181, 8, 117, 8, 245, 8, 13, 8, 141, 8, 77, 8, 205, 8, 45, 8, 173, 8, 109, 8, 237, 8, 29, 8, 157, 8, 93, 8, 221, 8, 61, 8, 189, 8, 125, 8, 253, 8, 19, 9, 275, 9, 147, 9, 403, 9, 83, 9, 339, 9, 211, 9, 467, 9, 51, 9, 307, 9, 179, 9, 435, 9, 115, 9, 371, 9, 243, 9, 499, 9, 11, 9, 267, 9, 139, 9, 395, 9, 75, 9, 331, 9, 203, 9, 459, 9, 43, 9, 299, 9, 171, 9, 427, 9, 107, 9, 363, 9, 235, 9, 491, 9, 27, 9, 283, 9, 155, 9, 411, 9, 91, 9, 347, 9, 219, 9, 475, 9, 59, 9, 315, 9, 187, 9, 443, 9, 123, 9, 379, 9, 251, 9, 507, 9, 7, 9, 263, 9, 135, 9, 391, 9, 71, 9, 327, 9, 199, 9, 455, 9, 39, 9, 295, 9, 167, 9, 423, 9, 103, 9, 359, 9, 231, 9, 487, 9, 23, 9, 279, 9, 151, 9, 407, 9, 87, 9, 343, 9, 215, 9, 471, 9, 55, 9, 311, 9, 183, 9, 439, 9, 119, 9, 375, 9, 247, 9, 503, 9, 15, 9, 271, 9, 143, 9, 399, 9, 79, 9, 335, 9, 207, 9, 463, 9, 47, 9, 303, 9, 175, 9, 431, 9, 111, 9, 367, 9, 239, 9, 495, 9, 31, 9, 287, 9, 159, 9, 415, 9, 95, 9, 351, 9, 223, 9, 479, 9, 63, 9, 319, 9, 191, 9, 447, 9, 127, 9, 383, 9, 255, 9, 511, 9, 0, 7, 64, 7, 32, 7, 96, 7, 16, 7, 80, 7, 48, 7, 112, 7, 8, 7, 72, 7, 40, 7, 104, 7, 24, 7, 88, 7, 56, 7, 120, 7, 4, 7, 68, 7, 36, 7, 100, 7, 20, 7, 84, 7, 52, 7, 116, 7, 3, 8, 131, 8, 67, 8, 195, 8, 35, 8, 163, 8, 99, 8, 227, 8],
        T.static_dtree = [0, 5, 16, 5, 8, 5, 24, 5, 4, 5, 20, 5, 12, 5, 28, 5, 2, 5, 18, 5, 10, 5, 26, 5, 6, 5, 22, 5, 14, 5, 30, 5, 1, 5, 17, 5, 9, 5, 25, 5, 5, 5, 21, 5, 13, 5, 29, 5, 3, 5, 19, 5, 11, 5, 27, 5, 7, 5, 23, 5],
        T.static_l_desc = new T(T.static_ltree,q.extra_lbits,i + 1,o,e),
        T.static_d_desc = new T(T.static_dtree,q.extra_dbits,0,n,e),
        T.static_bl_desc = new T(null,q.extra_blbits,0,r,7);
        var I = 9
          , P = 8;
        function E(t, e, n, r, i) {
            this.good_length = t,
            this.max_lazy = e,
            this.nice_length = n,
            this.max_chain = r,
            this.func = i
        }
        var O = 0
          , F = 1
          , R = 2
          , B = [new E(0,0,0,0,O), new E(4,4,8,4,F), new E(4,5,16,8,F), new E(4,6,32,32,F), new E(4,4,16,16,R), new E(8,16,32,32,R), new E(8,16,128,128,R), new E(8,32,128,256,R), new E(32,128,258,1024,R), new E(32,258,258,4096,R)]
          , D = ["need dictionary", "stream end", "", "", "stream error", "data error", "", "buffer error", "", ""]
          , j = 0
          , N = 1
          , z = 2
          , L = 3
          , M = 32
          , U = 42
          , H = 113
          , W = 666
          , X = 8
          , V = 0
          , Y = 1
          , G = 2
          , J = 3
          , Q = 258
          , K = Q + J + 1;
        function $(t, e, n, r) {
            var i = t[2 * e]
              , o = t[2 * n];
            return i < o || i == o && r[e] <= r[n]
        }
        function Z() {
            var t, e, s, S, E, Z, tt, et, nt, rt, it, ot, st, at, ct, lt, ut, ht, ft, dt, pt, gt, mt, wt, yt, vt, bt, xt, kt, _t, Ct, At, St, qt, Tt, It, Pt, Et, Ot, Ft, Rt, Bt = this, Dt = new q, jt = new q, Nt = new q;
            function zt() {
                var t;
                for (t = 0; t < o; t++)
                    Ct[2 * t] = 0;
                for (t = 0; t < n; t++)
                    At[2 * t] = 0;
                for (t = 0; t < r; t++)
                    St[2 * t] = 0;
                Ct[2 * a] = 1,
                Bt.opt_len = Bt.static_len = 0,
                It = Et = 0
            }
            function Lt(t, e) {
                var n, r, i = -1, o = t[1], s = 0, a = 7, h = 4;
                for (0 === o && (a = 138,
                h = 3),
                t[2 * (e + 1) + 1] = 65535,
                n = 0; n <= e; n++)
                    r = o,
                    o = t[2 * (n + 1) + 1],
                    ++s < a && r == o || (s < h ? St[2 * r] += s : 0 !== r ? (r != i && St[2 * r]++,
                    St[2 * c]++) : s <= 10 ? St[2 * l]++ : St[2 * u]++,
                    s = 0,
                    i = r,
                    0 === o ? (a = 138,
                    h = 3) : r == o ? (a = 6,
                    h = 3) : (a = 7,
                    h = 4))
            }
            function Mt(t) {
                Bt.pending_buf[Bt.pending++] = t
            }
            function Ut(t) {
                Mt(255 & t),
                Mt(t >>> 8 & 255)
            }
            function Ht(t, e) {
                var n, r = e;
                Rt > h - r ? (Ut(Ft |= (n = t) << Rt & 65535),
                Ft = n >>> h - Rt,
                Rt += r - h) : (Ft |= t << Rt & 65535,
                Rt += r)
            }
            function Wt(t, e) {
                var n = 2 * t;
                Ht(65535 & e[n], 65535 & e[n + 1])
            }
            function Xt(t, e) {
                var n, r, i = -1, o = t[1], s = 0, a = 7, h = 4;
                for (0 === o && (a = 138,
                h = 3),
                n = 0; n <= e; n++)
                    if (r = o,
                    o = t[2 * (n + 1) + 1],
                    !(++s < a && r == o)) {
                        if (s < h)
                            do {
                                Wt(r, St)
                            } while (0 != --s);
                        else
                            0 !== r ? (r != i && (Wt(r, St),
                            s--),
                            Wt(c, St),
                            Ht(s - 3, 2)) : s <= 10 ? (Wt(l, St),
                            Ht(s - 3, 3)) : (Wt(u, St),
                            Ht(s - 11, 7));
                        s = 0,
                        i = r,
                        0 === o ? (a = 138,
                        h = 3) : r == o ? (a = 6,
                        h = 3) : (a = 7,
                        h = 4)
                    }
            }
            function Vt() {
                16 == Rt ? (Ut(Ft),
                Ft = 0,
                Rt = 0) : Rt >= 8 && (Mt(255 & Ft),
                Ft >>>= 8,
                Rt -= 8)
            }
            function Yt(t, e) {
                var r, o, s;
                if (Bt.pending_buf[Pt + 2 * It] = t >>> 8 & 255,
                Bt.pending_buf[Pt + 2 * It + 1] = 255 & t,
                Bt.pending_buf[qt + It] = 255 & e,
                It++,
                0 === t ? Ct[2 * e]++ : (Et++,
                t--,
                Ct[2 * (q._length_code[e] + i + 1)]++,
                At[2 * q.d_code(t)]++),
                0 == (8191 & It) && bt > 2) {
                    for (r = 8 * It,
                    o = pt - ut,
                    s = 0; s < n; s++)
                        r += At[2 * s] * (5 + q.extra_dbits[s]);
                    if (r >>>= 3,
                    Et < Math.floor(It / 2) && r < Math.floor(o / 2))
                        return !0
                }
                return It == Tt - 1
            }
            function Gt(t, e) {
                var n, r, o, s, c = 0;
                if (0 !== It)
                    do {
                        n = Bt.pending_buf[Pt + 2 * c] << 8 & 65280 | 255 & Bt.pending_buf[Pt + 2 * c + 1],
                        r = 255 & Bt.pending_buf[qt + c],
                        c++,
                        0 === n ? Wt(r, t) : (Wt((o = q._length_code[r]) + i + 1, t),
                        0 !== (s = q.extra_lbits[o]) && Ht(r -= q.base_length[o], s),
                        n--,
                        Wt(o = q.d_code(n), e),
                        0 !== (s = q.extra_dbits[o]) && Ht(n -= q.base_dist[o], s))
                    } while (c < It);
                Wt(a, t),
                Ot = t[2 * a + 1]
            }
            function Jt() {
                Rt > 8 ? Ut(Ft) : Rt > 0 && Mt(255 & Ft),
                Ft = 0,
                Rt = 0
            }
            function Qt(t, e, n) {
                Ht((V << 1) + (n ? 1 : 0), 3),
                function(t, e, n) {
                    Jt(),
                    Ot = 8,
                    n && (Ut(e),
                    Ut(~e)),
                    Bt.pending_buf.set(et.subarray(t, t + e), Bt.pending),
                    Bt.pending += e
                }(t, e, !0)
            }
            function Kt(t, e, n) {
                var i, o, s = 0;
                bt > 0 ? (Dt.build_tree(Bt),
                jt.build_tree(Bt),
                s = function() {
                    var t;
                    for (Lt(Ct, Dt.max_code),
                    Lt(At, jt.max_code),
                    Nt.build_tree(Bt),
                    t = r - 1; t >= 3 && 0 === St[2 * q.bl_order[t] + 1]; t--)
                        ;
                    return Bt.opt_len += 3 * (t + 1) + 5 + 5 + 4,
                    t
                }(),
                i = Bt.opt_len + 3 + 7 >>> 3,
                (o = Bt.static_len + 3 + 7 >>> 3) <= i && (i = o)) : i = o = e + 5,
                e + 4 <= i && -1 != t ? Qt(t, e, n) : o == i ? (Ht((Y << 1) + (n ? 1 : 0), 3),
                Gt(T.static_ltree, T.static_dtree)) : (Ht((G << 1) + (n ? 1 : 0), 3),
                function(t, e, n) {
                    var r;
                    for (Ht(t - 257, 5),
                    Ht(e - 1, 5),
                    Ht(n - 4, 4),
                    r = 0; r < n; r++)
                        Ht(St[2 * q.bl_order[r] + 1], 3);
                    Xt(Ct, t - 1),
                    Xt(At, e - 1)
                }(Dt.max_code + 1, jt.max_code + 1, s + 1),
                Gt(Ct, At)),
                zt(),
                n && Jt()
            }
            function $t(e) {
                Kt(ut >= 0 ? ut : -1, pt - ut, e),
                ut = pt,
                t.flush_pending()
            }
            function Zt() {
                var e, n, r, i;
                do {
                    if (0 === (i = nt - mt - pt) && 0 === pt && 0 === mt)
                        i = E;
                    else if (-1 == i)
                        i--;
                    else if (pt >= E + E - K) {
                        et.set(et.subarray(E, E + E), 0),
                        gt -= E,
                        pt -= E,
                        ut -= E,
                        r = e = st;
                        do {
                            n = 65535 & it[--r],
                            it[r] = n >= E ? n - E : 0
                        } while (0 != --e);
                        r = e = E;
                        do {
                            n = 65535 & rt[--r],
                            rt[r] = n >= E ? n - E : 0
                        } while (0 != --e);
                        i += E
                    }
                    if (0 === t.avail_in)
                        return;
                    e = t.read_buf(et, pt + mt, i),
                    (mt += e) >= J && (ot = ((ot = 255 & et[pt]) << lt ^ 255 & et[pt + 1]) & ct)
                } while (mt < K && 0 !== t.avail_in)
            }
            function te(t) {
                var e, n, r = yt, i = pt, o = wt, s = pt > E - K ? pt - (E - K) : 0, a = _t, c = tt, l = pt + Q, u = et[i + o - 1], h = et[i + o];
                wt >= kt && (r >>= 2),
                a > mt && (a = mt);
                do {
                    if (et[(e = t) + o] == h && et[e + o - 1] == u && et[e] == et[i] && et[++e] == et[i + 1]) {
                        i += 2,
                        e++;
                        do {} while (et[++i] == et[++e] && et[++i] == et[++e] && et[++i] == et[++e] && et[++i] == et[++e] && et[++i] == et[++e] && et[++i] == et[++e] && et[++i] == et[++e] && et[++i] == et[++e] && i < l);
                        if (n = Q - (l - i),
                        i = l - Q,
                        n > o) {
                            if (gt = t,
                            o = n,
                            n >= a)
                                break;
                            u = et[i + o - 1],
                            h = et[i + o]
                        }
                    }
                } while ((t = 65535 & rt[t & c]) > s && 0 != --r);
                return o <= mt ? o : mt
            }
            function ee(t) {
                return t.total_in = t.total_out = 0,
                t.msg = null,
                Bt.pending = 0,
                Bt.pending_out = 0,
                e = H,
                S = m,
                Dt.dyn_tree = Ct,
                Dt.stat_desc = T.static_l_desc,
                jt.dyn_tree = At,
                jt.stat_desc = T.static_d_desc,
                Nt.dyn_tree = St,
                Nt.stat_desc = T.static_bl_desc,
                Ft = 0,
                Rt = 0,
                Ot = 8,
                zt(),
                function() {
                    var t;
                    for (nt = 2 * E,
                    it[st - 1] = 0,
                    t = 0; t < st - 1; t++)
                        it[t] = 0;
                    vt = B[bt].max_lazy,
                    kt = B[bt].good_length,
                    _t = B[bt].nice_length,
                    yt = B[bt].max_chain,
                    pt = 0,
                    ut = 0,
                    mt = 0,
                    ht = wt = J - 1,
                    dt = 0,
                    ot = 0
                }(),
                b
            }
            Bt.depth = [],
            Bt.bl_count = [],
            Bt.heap = [],
            Ct = [],
            At = [],
            St = [],
            Bt.pqdownheap = function(t, e) {
                for (var n = Bt.heap, r = n[e], i = e << 1; i <= Bt.heap_len && (i < Bt.heap_len && $(t, n[i + 1], n[i], Bt.depth) && i++,
                !$(t, r, n[i], Bt.depth)); )
                    n[e] = n[i],
                    e = i,
                    i <<= 1;
                n[e] = r
            }
            ,
            Bt.deflateInit = function(t, e, n, r, i, o) {
                return r || (r = X),
                i || (i = P),
                o || (o = g),
                t.msg = null,
                e == f && (e = 6),
                i < 1 || i > I || r != X || n < 9 || n > 15 || e < 0 || e > 9 || o < 0 || o > p ? _ : (t.dstate = Bt,
                tt = (E = 1 << (Z = n)) - 1,
                ct = (st = 1 << (at = i + 7)) - 1,
                lt = Math.floor((at + J - 1) / J),
                et = new Uint8Array(2 * E),
                rt = [],
                it = [],
                Tt = 1 << i + 6,
                Bt.pending_buf = new Uint8Array(4 * Tt),
                s = 4 * Tt,
                Pt = Math.floor(Tt / 2),
                qt = 3 * Tt,
                bt = e,
                xt = o,
                255 & r,
                ee(t))
            }
            ,
            Bt.deflateEnd = function() {
                return e != U && e != H && e != W ? _ : (Bt.pending_buf = null,
                it = null,
                rt = null,
                et = null,
                Bt.dstate = null,
                e == H ? C : b)
            }
            ,
            Bt.deflateParams = function(t, e, n) {
                var r = b;
                return e == f && (e = 6),
                e < 0 || e > 9 || n < 0 || n > p ? _ : (B[bt].func != B[e].func && 0 !== t.total_in && (r = t.deflate(w)),
                bt != e && (vt = B[bt = e].max_lazy,
                kt = B[bt].good_length,
                _t = B[bt].nice_length,
                yt = B[bt].max_chain),
                xt = n,
                r)
            }
            ,
            Bt.deflateSetDictionary = function(t, n, r) {
                var i, o = r, s = 0;
                if (!n || e != U)
                    return _;
                if (o < J)
                    return b;
                for (o > E - K && (s = r - (o = E - K)),
                et.set(n.subarray(s, s + o), 0),
                pt = o,
                ut = o,
                ot = ((ot = 255 & et[0]) << lt ^ 255 & et[1]) & ct,
                i = 0; i <= o - J; i++)
                    ot = (ot << lt ^ 255 & et[i + (J - 1)]) & ct,
                    rt[i & tt] = it[ot],
                    it[ot] = i;
                return b
            }
            ,
            Bt.deflate = function(n, r) {
                var i, o, c, l, u, h;
                if (r > v || r < 0)
                    return _;
                if (!n.next_out || !n.next_in && 0 !== n.avail_in || e == W && r != v)
                    return n.msg = D[k - _],
                    _;
                if (0 === n.avail_out)
                    return n.msg = D[k - A],
                    A;
                if (t = n,
                l = S,
                S = r,
                e == U && (o = X + (Z - 8 << 4) << 8,
                (c = (bt - 1 & 255) >> 1) > 3 && (c = 3),
                o |= c << 6,
                0 !== pt && (o |= M),
                e = H,
                Mt((h = o += 31 - o % 31) >> 8 & 255),
                Mt(255 & h)),
                0 !== Bt.pending) {
                    if (t.flush_pending(),
                    0 === t.avail_out)
                        return S = -1,
                        b
                } else if (0 === t.avail_in && r <= l && r != v)
                    return t.msg = D[k - A],
                    A;
                if (e == W && 0 !== t.avail_in)
                    return n.msg = D[k - A],
                    A;
                if (0 !== t.avail_in || 0 !== mt || r != m && e != W) {
                    switch (u = -1,
                    B[bt].func) {
                    case O:
                        u = function(e) {
                            var n, r = 65535;
                            for (r > s - 5 && (r = s - 5); ; ) {
                                if (mt <= 1) {
                                    if (Zt(),
                                    0 === mt && e == m)
                                        return j;
                                    if (0 === mt)
                                        break
                                }
                                if (pt += mt,
                                mt = 0,
                                n = ut + r,
                                (0 === pt || pt >= n) && (mt = pt - n,
                                pt = n,
                                $t(!1),
                                0 === t.avail_out))
                                    return j;
                                if (pt - ut >= E - K && ($t(!1),
                                0 === t.avail_out))
                                    return j
                            }
                            return $t(e == v),
                            0 === t.avail_out ? e == v ? z : j : e == v ? L : N
                        }(r);
                        break;
                    case F:
                        u = function(e) {
                            for (var n, r = 0; ; ) {
                                if (mt < K) {
                                    if (Zt(),
                                    mt < K && e == m)
                                        return j;
                                    if (0 === mt)
                                        break
                                }
                                if (mt >= J && (ot = (ot << lt ^ 255 & et[pt + (J - 1)]) & ct,
                                r = 65535 & it[ot],
                                rt[pt & tt] = it[ot],
                                it[ot] = pt),
                                0 !== r && (pt - r & 65535) <= E - K && xt != p && (ht = te(r)),
                                ht >= J)
                                    if (n = Yt(pt - gt, ht - J),
                                    mt -= ht,
                                    ht <= vt && mt >= J) {
                                        ht--;
                                        do {
                                            ot = (ot << lt ^ 255 & et[++pt + (J - 1)]) & ct,
                                            r = 65535 & it[ot],
                                            rt[pt & tt] = it[ot],
                                            it[ot] = pt
                                        } while (0 != --ht);
                                        pt++
                                    } else
                                        pt += ht,
                                        ht = 0,
                                        ot = ((ot = 255 & et[pt]) << lt ^ 255 & et[pt + 1]) & ct;
                                else
                                    n = Yt(0, 255 & et[pt]),
                                    mt--,
                                    pt++;
                                if (n && ($t(!1),
                                0 === t.avail_out))
                                    return j
                            }
                            return $t(e == v),
                            0 === t.avail_out ? e == v ? z : j : e == v ? L : N
                        }(r);
                        break;
                    case R:
                        u = function(e) {
                            for (var n, r, i = 0; ; ) {
                                if (mt < K) {
                                    if (Zt(),
                                    mt < K && e == m)
                                        return j;
                                    if (0 === mt)
                                        break
                                }
                                if (mt >= J && (ot = (ot << lt ^ 255 & et[pt + (J - 1)]) & ct,
                                i = 65535 & it[ot],
                                rt[pt & tt] = it[ot],
                                it[ot] = pt),
                                wt = ht,
                                ft = gt,
                                ht = J - 1,
                                0 !== i && wt < vt && (pt - i & 65535) <= E - K && (xt != p && (ht = te(i)),
                                ht <= 5 && (xt == d || ht == J && pt - gt > 4096) && (ht = J - 1)),
                                wt >= J && ht <= wt) {
                                    r = pt + mt - J,
                                    n = Yt(pt - 1 - ft, wt - J),
                                    mt -= wt - 1,
                                    wt -= 2;
                                    do {
                                        ++pt <= r && (ot = (ot << lt ^ 255 & et[pt + (J - 1)]) & ct,
                                        i = 65535 & it[ot],
                                        rt[pt & tt] = it[ot],
                                        it[ot] = pt)
                                    } while (0 != --wt);
                                    if (dt = 0,
                                    ht = J - 1,
                                    pt++,
                                    n && ($t(!1),
                                    0 === t.avail_out))
                                        return j
                                } else if (0 !== dt) {
                                    if ((n = Yt(0, 255 & et[pt - 1])) && $t(!1),
                                    pt++,
                                    mt--,
                                    0 === t.avail_out)
                                        return j
                                } else
                                    dt = 1,
                                    pt++,
                                    mt--
                            }
                            return 0 !== dt && (n = Yt(0, 255 & et[pt - 1]),
                            dt = 0),
                            $t(e == v),
                            0 === t.avail_out ? e == v ? z : j : e == v ? L : N
                        }(r)
                    }
                    if (u != z && u != L || (e = W),
                    u == j || u == z)
                        return 0 === t.avail_out && (S = -1),
                        b;
                    if (u == N) {
                        if (r == w)
                            Ht(Y << 1, 3),
                            Wt(a, T.static_ltree),
                            Vt(),
                            1 + Ot + 10 - Rt < 9 && (Ht(Y << 1, 3),
                            Wt(a, T.static_ltree),
                            Vt()),
                            Ot = 7;
                        else if (Qt(0, 0, !1),
                        r == y)
                            for (i = 0; i < st; i++)
                                it[i] = 0;
                        if (t.flush_pending(),
                        0 === t.avail_out)
                            return S = -1,
                            b
                    }
                }
                return r != v ? b : x
            }
        }
        function tt() {
            this.next_in_index = 0,
            this.next_out_index = 0,
            this.avail_in = 0,
            this.total_in = 0,
            this.avail_out = 0,
            this.total_out = 0
        }
        return tt.prototype = {
            deflateInit: function(t, n) {
                return this.dstate = new Z,
                n || (n = e),
                this.dstate.deflateInit(this, t, n)
            },
            deflate: function(t) {
                return this.dstate ? this.dstate.deflate(this, t) : _
            },
            deflateEnd: function() {
                if (!this.dstate)
                    return _;
                var t = this.dstate.deflateEnd();
                return this.dstate = null,
                t
            },
            deflateParams: function(t, e) {
                return this.dstate ? this.dstate.deflateParams(this, t, e) : _
            },
            deflateSetDictionary: function(t, e) {
                return this.dstate ? this.dstate.deflateSetDictionary(this, t, e) : _
            },
            read_buf: function(t, e, n) {
                var r = this.avail_in;
                return r > n && (r = n),
                0 === r ? 0 : (this.avail_in -= r,
                t.set(this.next_in.subarray(this.next_in_index, this.next_in_index + r), e),
                this.next_in_index += r,
                this.total_in += r,
                r)
            },
            flush_pending: function() {
                var t = this.dstate.pending;
                t > this.avail_out && (t = this.avail_out),
                0 !== t && (this.next_out.set(this.dstate.pending_buf.subarray(this.dstate.pending_out, this.dstate.pending_out + t), this.next_out_index),
                this.next_out_index += t,
                this.dstate.pending_out += t,
                this.total_out += t,
                this.avail_out -= t,
                this.dstate.pending -= t,
                0 === this.dstate.pending && (this.dstate.pending_out = 0))
            }
        },
        function(t) {
            var e = new tt
              , n = m
              , r = new Uint8Array(512);
            void 0 === t && (t = f),
            e.deflateInit(t),
            e.next_out = r,
            this.append = function(t, i) {
                var o, s = [], a = 0, c = 0, l = 0;
                if (t.length) {
                    e.next_in_index = 0,
                    e.next_in = t,
                    e.avail_in = t.length;
                    do {
                        if (e.next_out_index = 0,
                        e.avail_out = 512,
                        e.deflate(n) != b)
                            throw "deflating: " + e.msg;
                        e.next_out_index && (512 == e.next_out_index ? s.push(new Uint8Array(r)) : s.push(new Uint8Array(r.subarray(0, e.next_out_index)))),
                        l += e.next_out_index,
                        i && e.next_in_index > 0 && e.next_in_index != a && (i(e.next_in_index),
                        a = e.next_in_index)
                    } while (e.avail_in > 0 || 0 === e.avail_out);
                    return o = new Uint8Array(l),
                    s.forEach(function(t) {
                        o.set(t, c),
                        c += t.length
                    }),
                    o
                }
            }
            ,
            this.flush = function() {
                var t, n, i = [], o = 0, s = 0;
                do {
                    if (e.next_out_index = 0,
                    e.avail_out = 512,
                    (t = e.deflate(v)) != x && t != b)
                        throw "deflating: " + e.msg;
                    512 - e.avail_out > 0 && i.push(new Uint8Array(r.subarray(0, e.next_out_index))),
                    s += e.next_out_index
                } while (e.avail_in > 0 || 0 === e.avail_out);
                return e.deflateEnd(),
                n = new Uint8Array(s),
                i.forEach(function(t) {
                    n.set(t, o),
                    o += t.length
                }),
                n
            }
        }
    }();
    !function(t) {
        if ("object" == typeof exports && "undefined" != typeof module)
            module.exports = t();
        else if ("function" == typeof define && define.amd)
            define([], t);
        else {
            var e;
            "undefined" != typeof window ? e = window : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self),
            e.html2canvas = t()
        }
    }(function() {
        return function t(e, n, r) {
            function i(s, a) {
                if (!n[s]) {
                    if (!e[s]) {
                        var c = "function" == typeof require && require;
                        if (!a && c)
                            return c(s, !0);
                        if (o)
                            return o(s, !0);
                        var l = new Error("Cannot find module '" + s + "'");
                        throw l.code = "MODULE_NOT_FOUND",
                        l
                    }
                    var u = n[s] = {
                        exports: {}
                    };
                    e[s][0].call(u.exports, function(t) {
                        var n = e[s][1][t];
                        return i(n || t)
                    }, u, u.exports, t, e, n, r)
                }
                return n[s].exports
            }
            for (var o = "function" == typeof require && require, s = 0; s < r.length; s++)
                i(r[s]);
            return i
        }({
            1: [function(t, e, n) {
                (function(t) {
                    !function(r) {
                        var i = "object" == typeof n && n
                          , o = "object" == typeof e && e && e.exports == i && e
                          , s = "object" == typeof t && t;
                        s.global !== s && s.window !== s || (r = s);
                        var a, c, l = 2147483647, u = 36, h = 1, f = 26, d = 38, p = 700, g = 72, m = 128, w = "-", y = /^xn--/, v = /[^ -~]/, b = /\x2E|\u3002|\uFF0E|\uFF61/g, x = {
                            overflow: "Overflow: input needs wider integers to process",
                            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                            "invalid-input": "Invalid input"
                        }, k = u - h, _ = Math.floor, C = String.fromCharCode;
                        function A(t) {
                            throw RangeError(x[t])
                        }
                        function S(t, e) {
                            for (var n = t.length; n--; )
                                t[n] = e(t[n]);
                            return t
                        }
                        function q(t, e) {
                            return S(t.split(b), e).join(".")
                        }
                        function T(t) {
                            for (var e, n, r = [], i = 0, o = t.length; i < o; )
                                (e = t.charCodeAt(i++)) >= 55296 && e <= 56319 && i < o ? 56320 == (64512 & (n = t.charCodeAt(i++))) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e),
                                i--) : r.push(e);
                            return r
                        }
                        function I(t) {
                            return S(t, function(t) {
                                var e = "";
                                return t > 65535 && (e += C((t -= 65536) >>> 10 & 1023 | 55296),
                                t = 56320 | 1023 & t),
                                e += C(t)
                            }).join("")
                        }
                        function P(t, e) {
                            return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
                        }
                        function E(t, e, n) {
                            var r = 0;
                            for (t = n ? _(t / p) : t >> 1,
                            t += _(t / e); t > k * f >> 1; r += u)
                                t = _(t / k);
                            return _(r + (k + 1) * t / (t + d))
                        }
                        function O(t) {
                            var e, n, r, i, o, s, a, c, d, p, y, v = [], b = t.length, x = 0, k = m, C = g;
                            for ((n = t.lastIndexOf(w)) < 0 && (n = 0),
                            r = 0; r < n; ++r)
                                t.charCodeAt(r) >= 128 && A("not-basic"),
                                v.push(t.charCodeAt(r));
                            for (i = n > 0 ? n + 1 : 0; i < b; ) {
                                for (o = x,
                                s = 1,
                                a = u; i >= b && A("invalid-input"),
                                ((c = (y = t.charCodeAt(i++)) - 48 < 10 ? y - 22 : y - 65 < 26 ? y - 65 : y - 97 < 26 ? y - 97 : u) >= u || c > _((l - x) / s)) && A("overflow"),
                                x += c * s,
                                !(c < (d = a <= C ? h : a >= C + f ? f : a - C)); a += u)
                                    s > _(l / (p = u - d)) && A("overflow"),
                                    s *= p;
                                C = E(x - o, e = v.length + 1, 0 == o),
                                _(x / e) > l - k && A("overflow"),
                                k += _(x / e),
                                x %= e,
                                v.splice(x++, 0, k)
                            }
                            return I(v)
                        }
                        function F(t) {
                            var e, n, r, i, o, s, a, c, d, p, y, v, b, x, k, S = [];
                            for (v = (t = T(t)).length,
                            e = m,
                            n = 0,
                            o = g,
                            s = 0; s < v; ++s)
                                (y = t[s]) < 128 && S.push(C(y));
                            for (r = i = S.length,
                            i && S.push(w); r < v; ) {
                                for (a = l,
                                s = 0; s < v; ++s)
                                    (y = t[s]) >= e && y < a && (a = y);
                                for (a - e > _((l - n) / (b = r + 1)) && A("overflow"),
                                n += (a - e) * b,
                                e = a,
                                s = 0; s < v; ++s)
                                    if ((y = t[s]) < e && ++n > l && A("overflow"),
                                    y == e) {
                                        for (c = n,
                                        d = u; !(c < (p = d <= o ? h : d >= o + f ? f : d - o)); d += u)
                                            k = c - p,
                                            x = u - p,
                                            S.push(C(P(p + k % x, 0))),
                                            c = _(k / x);
                                        S.push(C(P(c, 0))),
                                        o = E(n, b, r == i),
                                        n = 0,
                                        ++r
                                    }
                                ++n,
                                ++e
                            }
                            return S.join("")
                        }
                        if (a = {
                            version: "1.2.4",
                            ucs2: {
                                decode: T,
                                encode: I
                            },
                            decode: O,
                            encode: F,
                            toASCII: function(t) {
                                return q(t, function(t) {
                                    return v.test(t) ? "xn--" + F(t) : t
                                })
                            },
                            toUnicode: function(t) {
                                return q(t, function(t) {
                                    return y.test(t) ? O(t.slice(4).toLowerCase()) : t
                                })
                            }
                        },
                        i && !i.nodeType)
                            if (o)
                                o.exports = a;
                            else
                                for (c in a)
                                    a.hasOwnProperty(c) && (i[c] = a[c]);
                        else
                            r.punycode = a
                    }(this)
                }
                ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }
            , {}],
            2: [function(t, e, n) {
                var r = t("./log");
                function i(t, e) {
                    for (var n = 3 === t.nodeType ? document.createTextNode(t.nodeValue) : t.cloneNode(!1), o = t.firstChild; o; )
                        !0 !== e && 1 === o.nodeType && "SCRIPT" === o.nodeName || n.appendChild(i(o, e)),
                        o = o.nextSibling;
                    return 1 === t.nodeType && (n._scrollTop = t.scrollTop,
                    n._scrollLeft = t.scrollLeft,
                    "CANVAS" === t.nodeName ? function(t, e) {
                        try {
                            e && (e.width = t.width,
                            e.height = t.height,
                            e.getContext("2d").putImageData(t.getContext("2d").getImageData(0, 0, t.width, t.height), 0, 0))
                        } catch (e) {
                            r("Unable to copy canvas content from", t, e)
                        }
                    }(t, n) : "TEXTAREA" !== t.nodeName && "SELECT" !== t.nodeName || (n.value = t.value)),
                    n
                }
                e.exports = function(t, e, n, r, o, s, a) {
                    var c = i(t.documentElement, o.javascriptEnabled)
                      , l = e.createElement("iframe");
                    return l.className = "html2canvas-container",
                    l.style.visibility = "hidden",
                    l.style.position = "fixed",
                    l.style.left = "-10000px",
                    l.style.top = "0px",
                    l.style.border = "0",
                    l.width = n,
                    l.height = r,
                    l.scrolling = "no",
                    e.body.appendChild(l),
                    new Promise(function(e) {
                        var n = l.contentWindow.document;
                        l.contentWindow.onload = l.onload = function() {
                            var t = setInterval(function() {
                                n.body.childNodes.length > 0 && (!function t(e) {
                                    if (1 === e.nodeType) {
                                        e.scrollTop = e._scrollTop,
                                        e.scrollLeft = e._scrollLeft;
                                        for (var n = e.firstChild; n; )
                                            t(n),
                                            n = n.nextSibling
                                    }
                                }(n.documentElement),
                                clearInterval(t),
                                "view" === o.type && (l.contentWindow.scrollTo(s, a),
                                !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || l.contentWindow.scrollY === a && l.contentWindow.scrollX === s || (n.documentElement.style.top = -a + "px",
                                n.documentElement.style.left = -s + "px",
                                n.documentElement.style.position = "absolute")),
                                e(l))
                            }, 50)
                        }
                        ,
                        n.open(),
                        n.write("<!DOCTYPE html><html></html>"),
                        function(t, e, n) {
                            !t.defaultView || e === t.defaultView.pageXOffset && n === t.defaultView.pageYOffset || t.defaultView.scrollTo(e, n)
                        }(t, s, a),
                        n.replaceChild(n.adoptNode(c), n.documentElement),
                        n.close()
                    }
                    )
                }
            }
            , {
                "./log": 13
            }],
            3: [function(t, e, n) {
                function r(t) {
                    this.r = 0,
                    this.g = 0,
                    this.b = 0,
                    this.a = null;
                    this.fromArray(t) || this.namedColor(t) || this.rgb(t) || this.rgba(t) || this.hex6(t) || this.hex3(t)
                }
                r.prototype.darken = function(t) {
                    var e = 1 - t;
                    return new r([Math.round(this.r * e), Math.round(this.g * e), Math.round(this.b * e), this.a])
                }
                ,
                r.prototype.isTransparent = function() {
                    return 0 === this.a
                }
                ,
                r.prototype.isBlack = function() {
                    return 0 === this.r && 0 === this.g && 0 === this.b
                }
                ,
                r.prototype.fromArray = function(t) {
                    return Array.isArray(t) && (this.r = Math.min(t[0], 255),
                    this.g = Math.min(t[1], 255),
                    this.b = Math.min(t[2], 255),
                    t.length > 3 && (this.a = t[3])),
                    Array.isArray(t)
                }
                ;
                var i = /^#([a-f0-9]{3})$/i;
                r.prototype.hex3 = function(t) {
                    var e;
                    return null !== (e = t.match(i)) && (this.r = parseInt(e[1][0] + e[1][0], 16),
                    this.g = parseInt(e[1][1] + e[1][1], 16),
                    this.b = parseInt(e[1][2] + e[1][2], 16)),
                    null !== e
                }
                ;
                var o = /^#([a-f0-9]{6})$/i;
                r.prototype.hex6 = function(t) {
                    var e = null;
                    return null !== (e = t.match(o)) && (this.r = parseInt(e[1].substring(0, 2), 16),
                    this.g = parseInt(e[1].substring(2, 4), 16),
                    this.b = parseInt(e[1].substring(4, 6), 16)),
                    null !== e
                }
                ;
                var s = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
                r.prototype.rgb = function(t) {
                    var e;
                    return null !== (e = t.match(s)) && (this.r = Number(e[1]),
                    this.g = Number(e[2]),
                    this.b = Number(e[3])),
                    null !== e
                }
                ;
                var a = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;
                r.prototype.rgba = function(t) {
                    var e;
                    return null !== (e = t.match(a)) && (this.r = Number(e[1]),
                    this.g = Number(e[2]),
                    this.b = Number(e[3]),
                    this.a = Number(e[4])),
                    null !== e
                }
                ,
                r.prototype.toString = function() {
                    return null !== this.a && 1 !== this.a ? "rgba(" + [this.r, this.g, this.b, this.a].join(",") + ")" : "rgb(" + [this.r, this.g, this.b].join(",") + ")"
                }
                ,
                r.prototype.namedColor = function(t) {
                    t = t.toLowerCase();
                    var e = c[t];
                    if (e)
                        this.r = e[0],
                        this.g = e[1],
                        this.b = e[2];
                    else if ("transparent" === t)
                        return this.r = this.g = this.b = this.a = 0,
                        !0;
                    return !!e
                }
                ,
                r.prototype.isColor = !0;
                var c = {
                    aliceblue: [240, 248, 255],
                    antiquewhite: [250, 235, 215],
                    aqua: [0, 255, 255],
                    aquamarine: [127, 255, 212],
                    azure: [240, 255, 255],
                    beige: [245, 245, 220],
                    bisque: [255, 228, 196],
                    black: [0, 0, 0],
                    blanchedalmond: [255, 235, 205],
                    blue: [0, 0, 255],
                    blueviolet: [138, 43, 226],
                    brown: [165, 42, 42],
                    burlywood: [222, 184, 135],
                    cadetblue: [95, 158, 160],
                    chartreuse: [127, 255, 0],
                    chocolate: [210, 105, 30],
                    coral: [255, 127, 80],
                    cornflowerblue: [100, 149, 237],
                    cornsilk: [255, 248, 220],
                    crimson: [220, 20, 60],
                    cyan: [0, 255, 255],
                    darkblue: [0, 0, 139],
                    darkcyan: [0, 139, 139],
                    darkgoldenrod: [184, 134, 11],
                    darkgray: [169, 169, 169],
                    darkgreen: [0, 100, 0],
                    darkgrey: [169, 169, 169],
                    darkkhaki: [189, 183, 107],
                    darkmagenta: [139, 0, 139],
                    darkolivegreen: [85, 107, 47],
                    darkorange: [255, 140, 0],
                    darkorchid: [153, 50, 204],
                    darkred: [139, 0, 0],
                    darksalmon: [233, 150, 122],
                    darkseagreen: [143, 188, 143],
                    darkslateblue: [72, 61, 139],
                    darkslategray: [47, 79, 79],
                    darkslategrey: [47, 79, 79],
                    darkturquoise: [0, 206, 209],
                    darkviolet: [148, 0, 211],
                    deeppink: [255, 20, 147],
                    deepskyblue: [0, 191, 255],
                    dimgray: [105, 105, 105],
                    dimgrey: [105, 105, 105],
                    dodgerblue: [30, 144, 255],
                    firebrick: [178, 34, 34],
                    floralwhite: [255, 250, 240],
                    forestgreen: [34, 139, 34],
                    fuchsia: [255, 0, 255],
                    gainsboro: [220, 220, 220],
                    ghostwhite: [248, 248, 255],
                    gold: [255, 215, 0],
                    goldenrod: [218, 165, 32],
                    gray: [128, 128, 128],
                    green: [0, 128, 0],
                    greenyellow: [173, 255, 47],
                    grey: [128, 128, 128],
                    honeydew: [240, 255, 240],
                    hotpink: [255, 105, 180],
                    indianred: [205, 92, 92],
                    indigo: [75, 0, 130],
                    ivory: [255, 255, 240],
                    khaki: [240, 230, 140],
                    lavender: [230, 230, 250],
                    lavenderblush: [255, 240, 245],
                    lawngreen: [124, 252, 0],
                    lemonchiffon: [255, 250, 205],
                    lightblue: [173, 216, 230],
                    lightcoral: [240, 128, 128],
                    lightcyan: [224, 255, 255],
                    lightgoldenrodyellow: [250, 250, 210],
                    lightgray: [211, 211, 211],
                    lightgreen: [144, 238, 144],
                    lightgrey: [211, 211, 211],
                    lightpink: [255, 182, 193],
                    lightsalmon: [255, 160, 122],
                    lightseagreen: [32, 178, 170],
                    lightskyblue: [135, 206, 250],
                    lightslategray: [119, 136, 153],
                    lightslategrey: [119, 136, 153],
                    lightsteelblue: [176, 196, 222],
                    lightyellow: [255, 255, 224],
                    lime: [0, 255, 0],
                    limegreen: [50, 205, 50],
                    linen: [250, 240, 230],
                    magenta: [255, 0, 255],
                    maroon: [128, 0, 0],
                    mediumaquamarine: [102, 205, 170],
                    mediumblue: [0, 0, 205],
                    mediumorchid: [186, 85, 211],
                    mediumpurple: [147, 112, 219],
                    mediumseagreen: [60, 179, 113],
                    mediumslateblue: [123, 104, 238],
                    mediumspringgreen: [0, 250, 154],
                    mediumturquoise: [72, 209, 204],
                    mediumvioletred: [199, 21, 133],
                    midnightblue: [25, 25, 112],
                    mintcream: [245, 255, 250],
                    mistyrose: [255, 228, 225],
                    moccasin: [255, 228, 181],
                    navajowhite: [255, 222, 173],
                    navy: [0, 0, 128],
                    oldlace: [253, 245, 230],
                    olive: [128, 128, 0],
                    olivedrab: [107, 142, 35],
                    orange: [255, 165, 0],
                    orangered: [255, 69, 0],
                    orchid: [218, 112, 214],
                    palegoldenrod: [238, 232, 170],
                    palegreen: [152, 251, 152],
                    paleturquoise: [175, 238, 238],
                    palevioletred: [219, 112, 147],
                    papayawhip: [255, 239, 213],
                    peachpuff: [255, 218, 185],
                    peru: [205, 133, 63],
                    pink: [255, 192, 203],
                    plum: [221, 160, 221],
                    powderblue: [176, 224, 230],
                    purple: [128, 0, 128],
                    rebeccapurple: [102, 51, 153],
                    red: [255, 0, 0],
                    rosybrown: [188, 143, 143],
                    royalblue: [65, 105, 225],
                    saddlebrown: [139, 69, 19],
                    salmon: [250, 128, 114],
                    sandybrown: [244, 164, 96],
                    seagreen: [46, 139, 87],
                    seashell: [255, 245, 238],
                    sienna: [160, 82, 45],
                    silver: [192, 192, 192],
                    skyblue: [135, 206, 235],
                    slateblue: [106, 90, 205],
                    slategray: [112, 128, 144],
                    slategrey: [112, 128, 144],
                    snow: [255, 250, 250],
                    springgreen: [0, 255, 127],
                    steelblue: [70, 130, 180],
                    tan: [210, 180, 140],
                    teal: [0, 128, 128],
                    thistle: [216, 191, 216],
                    tomato: [255, 99, 71],
                    turquoise: [64, 224, 208],
                    violet: [238, 130, 238],
                    wheat: [245, 222, 179],
                    white: [255, 255, 255],
                    whitesmoke: [245, 245, 245],
                    yellow: [255, 255, 0],
                    yellowgreen: [154, 205, 50]
                };
                e.exports = r
            }
            , {}],
            4: [function(t, e, n) {
                var r = t("./support")
                  , i = t("./renderers/canvas")
                  , o = t("./imageloader")
                  , s = t("./nodeparser")
                  , a = t("./nodecontainer")
                  , c = t("./log")
                  , l = t("./utils")
                  , u = t("./clone")
                  , h = t("./proxy").loadUrlDocument
                  , f = l.getBounds
                  , d = "data-html2canvas-node"
                  , p = 0;
                function g(t, e) {
                    var n, r, o = p++;
                    if ((e = e || {}).logging && (c.options.logging = !0,
                    c.options.start = Date.now()),
                    e.async = void 0 === e.async || e.async,
                    e.allowTaint = void 0 !== e.allowTaint && e.allowTaint,
                    e.removeContainer = void 0 === e.removeContainer || e.removeContainer,
                    e.javascriptEnabled = void 0 !== e.javascriptEnabled && e.javascriptEnabled,
                    e.imageTimeout = void 0 === e.imageTimeout ? 1e4 : e.imageTimeout,
                    e.renderer = "function" == typeof e.renderer ? e.renderer : i,
                    e.strict = !!e.strict,
                    "string" == typeof t) {
                        if ("string" != typeof e.proxy)
                            return Promise.reject("Proxy must be used when rendering url");
                        var s = null != e.width ? e.width : window.innerWidth
                          , a = null != e.height ? e.height : window.innerHeight;
                        return h((n = t,
                        r = document.createElement("a"),
                        r.href = n,
                        r.href = r.href,
                        r), e.proxy, document, s, a, e).then(function(t) {
                            return w(t.contentWindow.document.documentElement, t, e, s, a)
                        })
                    }
                    var l = (void 0 === t ? [document.documentElement] : t.length ? t : [t])[0];
                    return l.setAttribute(d + o, o),
                    function(t, e, n, r, i) {
                        return u(t, t, n, r, e, t.defaultView.pageXOffset, t.defaultView.pageYOffset).then(function(o) {
                            c("Document cloned");
                            var s = d + i
                              , a = "[" + s + "='" + i + "']";
                            t.querySelector(a).removeAttribute(s);
                            var l = o.contentWindow
                              , u = l.document.querySelector(a)
                              , h = "function" == typeof e.onclone ? Promise.resolve(e.onclone(l.document)) : Promise.resolve(!0);
                            return h.then(function() {
                                return w(u, o, e, n, r)
                            })
                        })
                    }(l.ownerDocument, e, l.ownerDocument.defaultView.innerWidth, l.ownerDocument.defaultView.innerHeight, o).then(function(t) {
                        return "function" == typeof e.onrendered && (c("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas"),
                        e.onrendered(t)),
                        t
                    })
                }
                g.CanvasRenderer = i,
                g.NodeContainer = a,
                g.log = c,
                g.utils = l;
                var m = "undefined" == typeof document || "function" != typeof Object.create || "function" != typeof document.createElement("canvas").getContext ? function() {
                    return Promise.reject("No canvas support")
                }
                : g;
                function w(t, e, n, i, a) {
                    var l, u = e.contentWindow, h = new r(u.document), d = new o(n,h), p = f(t), g = "view" === n.type ? i : (l = u.document,
                    Math.max(Math.max(l.body.scrollWidth, l.documentElement.scrollWidth), Math.max(l.body.offsetWidth, l.documentElement.offsetWidth), Math.max(l.body.clientWidth, l.documentElement.clientWidth))), m = "view" === n.type ? a : function(t) {
                        return Math.max(Math.max(t.body.scrollHeight, t.documentElement.scrollHeight), Math.max(t.body.offsetHeight, t.documentElement.offsetHeight), Math.max(t.body.clientHeight, t.documentElement.clientHeight))
                    }(u.document), w = new n.renderer(g,m,d,n,document);
                    return new s(t,w,h,d,n).ready.then(function() {
                        var r;
                        return c("Finished rendering"),
                        r = "view" === n.type ? y(w.canvas, {
                            width: w.canvas.width,
                            height: w.canvas.height,
                            top: 0,
                            left: 0,
                            x: 0,
                            y: 0
                        }) : t === u.document.body || t === u.document.documentElement || null != n.canvas ? w.canvas : y(w.canvas, {
                            width: null != n.width ? n.width : p.width,
                            height: null != n.height ? n.height : p.height,
                            top: p.top,
                            left: p.left,
                            x: 0,
                            y: 0
                        }),
                        function(t, e) {
                            e.removeContainer && (t.parentNode.removeChild(t),
                            c("Cleaned up container"))
                        }(e, n),
                        r
                    })
                }
                function y(t, e) {
                    var n = document.createElement("canvas")
                      , r = Math.min(t.width - 1, Math.max(0, e.left))
                      , i = Math.min(t.width, Math.max(1, e.left + e.width))
                      , o = Math.min(t.height - 1, Math.max(0, e.top))
                      , s = Math.min(t.height, Math.max(1, e.top + e.height));
                    n.width = e.width,
                    n.height = e.height;
                    var a = i - r
                      , l = s - o;
                    return c("Cropping canvas at:", "left:", e.left, "top:", e.top, "width:", a, "height:", l),
                    c("Resulting crop with width", e.width, "and height", e.height, "with x", r, "and y", o),
                    n.getContext("2d").drawImage(t, r, o, a, l, e.x, e.y, a, l),
                    n
                }
                e.exports = m
            }
            , {
                "./clone": 2,
                "./imageloader": 11,
                "./log": 13,
                "./nodecontainer": 14,
                "./nodeparser": 15,
                "./proxy": 16,
                "./renderers/canvas": 20,
                "./support": 22,
                "./utils": 26
            }],
            5: [function(t, e, n) {
                var r = t("./log")
                  , i = t("./utils").smallImage;
                e.exports = function t(e) {
                    if (this.src = e,
                    r("DummyImageContainer for", e),
                    !this.promise || !this.image) {
                        r("Initiating DummyImageContainer"),
                        t.prototype.image = new Image;
                        var n = this.image;
                        t.prototype.promise = new Promise(function(t, e) {
                            n.onload = t,
                            n.onerror = e,
                            n.src = i(),
                            !0 === n.complete && t(n)
                        }
                        )
                    }
                }
            }
            , {
                "./log": 13,
                "./utils": 26
            }],
            6: [function(t, e, n) {
                var r = t("./utils").smallImage;
                e.exports = function(t, e) {
                    var n, i, o = document.createElement("div"), s = document.createElement("img"), a = document.createElement("span");
                    o.style.visibility = "hidden",
                    o.style.fontFamily = t,
                    o.style.fontSize = e,
                    o.style.margin = 0,
                    o.style.padding = 0,
                    document.body.appendChild(o),
                    s.src = r(),
                    s.width = 1,
                    s.height = 1,
                    s.style.margin = 0,
                    s.style.padding = 0,
                    s.style.verticalAlign = "baseline",
                    a.style.fontFamily = t,
                    a.style.fontSize = e,
                    a.style.margin = 0,
                    a.style.padding = 0,
                    a.appendChild(document.createTextNode("Hidden Text")),
                    o.appendChild(a),
                    o.appendChild(s),
                    n = s.offsetTop - a.offsetTop + 1,
                    o.removeChild(a),
                    o.appendChild(document.createTextNode("Hidden Text")),
                    o.style.lineHeight = "normal",
                    s.style.verticalAlign = "super",
                    i = s.offsetTop - o.offsetTop + 1,
                    document.body.removeChild(o),
                    this.baseline = n,
                    this.lineWidth = 1,
                    this.middle = i
                }
            }
            , {
                "./utils": 26
            }],
            7: [function(t, e, n) {
                var r = t("./font");
                function i() {
                    this.data = {}
                }
                i.prototype.getMetrics = function(t, e) {
                    return void 0 === this.data[t + "-" + e] && (this.data[t + "-" + e] = new r(t,e)),
                    this.data[t + "-" + e]
                }
                ,
                e.exports = i
            }
            , {
                "./font": 6
            }],
            8: [function(t, e, n) {
                var r = t("./utils").getBounds
                  , i = t("./proxy").loadUrlDocument;
                function o(e, n, i) {
                    this.image = null,
                    this.src = e;
                    var o = this
                      , s = r(e);
                    this.promise = (n ? new Promise(function(t) {
                        "about:blank" === e.contentWindow.document.URL || null == e.contentWindow.document.documentElement ? e.contentWindow.onload = e.onload = function() {
                            t(e)
                        }
                        : t(e)
                    }
                    ) : this.proxyLoad(i.proxy, s, i)).then(function(e) {
                        return t("./core")(e.contentWindow.document.documentElement, {
                            type: "view",
                            width: e.width,
                            height: e.height,
                            proxy: i.proxy,
                            javascriptEnabled: i.javascriptEnabled,
                            removeContainer: i.removeContainer,
                            allowTaint: i.allowTaint,
                            imageTimeout: i.imageTimeout / 2
                        })
                    }).then(function(t) {
                        return o.image = t
                    })
                }
                o.prototype.proxyLoad = function(t, e, n) {
                    var r = this.src;
                    return i(r.src, t, r.ownerDocument, e.width, e.height, n)
                }
                ,
                e.exports = o
            }
            , {
                "./core": 4,
                "./proxy": 16,
                "./utils": 26
            }],
            9: [function(t, e, n) {
                function r(t) {
                    this.src = t.value,
                    this.colorStops = [],
                    this.type = null,
                    this.x0 = .5,
                    this.y0 = .5,
                    this.x1 = .5,
                    this.y1 = .5,
                    this.promise = Promise.resolve(!0)
                }
                r.TYPES = {
                    LINEAR: 1,
                    RADIAL: 2
                },
                r.REGEXP_COLORSTOP = /^\s*(rgba?\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3}(?:,\s*[0-9\.]+)?\s*\)|[a-z]{3,20}|#[a-f0-9]{3,6})(?:\s+(\d{1,3}(?:\.\d+)?)(%|px)?)?(?:\s|$)/i,
                e.exports = r
            }
            , {}],
            10: [function(t, e, n) {
                e.exports = function(t, e) {
                    this.src = t,
                    this.image = new Image;
                    var n = this;
                    this.tainted = null,
                    this.promise = new Promise(function(r, i) {
                        n.image.onload = r,
                        n.image.onerror = i,
                        e && (n.image.crossOrigin = "anonymous"),
                        n.image.src = t,
                        !0 === n.image.complete && r(n.image)
                    }
                    )
                }
            }
            , {}],
            11: [function(t, e, n) {
                var r = t("./log")
                  , i = t("./imagecontainer")
                  , o = t("./dummyimagecontainer")
                  , s = t("./proxyimagecontainer")
                  , a = t("./framecontainer")
                  , c = t("./svgcontainer")
                  , l = t("./svgnodecontainer")
                  , u = t("./lineargradientcontainer")
                  , h = t("./webkitgradientcontainer")
                  , f = t("./utils").bind;
                function d(t, e) {
                    this.link = null,
                    this.options = t,
                    this.support = e,
                    this.origin = this.getOrigin(window.location.href)
                }
                d.prototype.findImages = function(t) {
                    var e = [];
                    return t.reduce(function(t, e) {
                        switch (e.node.nodeName) {
                        case "IMG":
                            return t.concat([{
                                args: [e.node.src],
                                method: "url"
                            }]);
                        case "svg":
                        case "IFRAME":
                            return t.concat([{
                                args: [e.node],
                                method: e.node.nodeName
                            }])
                        }
                        return t
                    }, []).forEach(this.addImage(e, this.loadImage), this),
                    e
                }
                ,
                d.prototype.findBackgroundImage = function(t, e) {
                    return e.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(t, this.loadImage), this),
                    t
                }
                ,
                d.prototype.addImage = function(t, e) {
                    return function(n) {
                        n.args.forEach(function(i) {
                            this.imageExists(t, i) || (t.splice(0, 0, e.call(this, n)),
                            r("Added image #" + t.length, "string" == typeof i ? i.substring(0, 100) : i))
                        }, this)
                    }
                }
                ,
                d.prototype.hasImageBackground = function(t) {
                    return "none" !== t.method
                }
                ,
                d.prototype.loadImage = function(t) {
                    if ("url" === t.method) {
                        var e = t.args[0];
                        return !this.isSVG(e) || this.support.svg || this.options.allowTaint ? e.match(/data:image\/.*;base64,/i) ? new i(e.replace(/url\(['"]{0,}|['"]{0,}\)$/gi, ""),!1) : this.isSameOrigin(e) || !0 === this.options.allowTaint || this.isSVG(e) ? new i(e,!1) : this.support.cors && !this.options.allowTaint && this.options.useCORS ? new i(e,!0) : this.options.proxy ? new s(e,this.options.proxy) : new o(e) : new c(e)
                    }
                    return "linear-gradient" === t.method ? new u(t) : "gradient" === t.method ? new h(t) : "svg" === t.method ? new l(t.args[0],this.support.svg) : "IFRAME" === t.method ? new a(t.args[0],this.isSameOrigin(t.args[0].src),this.options) : new o(t)
                }
                ,
                d.prototype.isSVG = function(t) {
                    return "svg" === t.substring(t.length - 3).toLowerCase() || c.prototype.isInline(t)
                }
                ,
                d.prototype.imageExists = function(t, e) {
                    return t.some(function(t) {
                        return t.src === e
                    })
                }
                ,
                d.prototype.isSameOrigin = function(t) {
                    return this.getOrigin(t) === this.origin
                }
                ,
                d.prototype.getOrigin = function(t) {
                    var e = this.link || (this.link = document.createElement("a"));
                    return e.href = t,
                    e.href = e.href,
                    e.protocol + e.hostname + e.port
                }
                ,
                d.prototype.getPromise = function(t) {
                    return this.timeout(t, this.options.imageTimeout).catch(function() {
                        return new o(t.src).promise.then(function(e) {
                            t.image = e
                        })
                    })
                }
                ,
                d.prototype.get = function(t) {
                    var e = null;
                    return this.images.some(function(n) {
                        return (e = n).src === t
                    }) ? e : null
                }
                ,
                d.prototype.fetch = function(t) {
                    return this.images = t.reduce(f(this.findBackgroundImage, this), this.findImages(t)),
                    this.images.forEach(function(t, e) {
                        t.promise.then(function() {
                            r("Succesfully loaded image #" + (e + 1), t)
                        }, function(n) {
                            r("Failed loading image #" + (e + 1), t, n)
                        })
                    }),
                    this.ready = Promise.all(this.images.map(this.getPromise, this)),
                    r("Finished searching images"),
                    this
                }
                ,
                d.prototype.timeout = function(t, e) {
                    var n, i = Promise.race([t.promise, new Promise(function(i, o) {
                        n = setTimeout(function() {
                            r("Timed out loading image", t),
                            o(t)
                        }, e)
                    }
                    )]).then(function(t) {
                        return clearTimeout(n),
                        t
                    });
                    return i.catch(function() {
                        clearTimeout(n)
                    }),
                    i
                }
                ,
                e.exports = d
            }
            , {
                "./dummyimagecontainer": 5,
                "./framecontainer": 8,
                "./imagecontainer": 10,
                "./lineargradientcontainer": 12,
                "./log": 13,
                "./proxyimagecontainer": 17,
                "./svgcontainer": 23,
                "./svgnodecontainer": 24,
                "./utils": 26,
                "./webkitgradientcontainer": 27
            }],
            12: [function(t, e, n) {
                var r = t("./gradientcontainer")
                  , i = t("./color");
                function o(t) {
                    r.apply(this, arguments),
                    this.type = r.TYPES.LINEAR;
                    var e = o.REGEXP_DIRECTION.test(t.args[0]) || !r.REGEXP_COLORSTOP.test(t.args[0]);
                    e ? t.args[0].split(/\s+/).reverse().forEach(function(t, e) {
                        switch (t) {
                        case "left":
                            this.x0 = 0,
                            this.x1 = 1;
                            break;
                        case "top":
                            this.y0 = 0,
                            this.y1 = 1;
                            break;
                        case "right":
                            this.x0 = 1,
                            this.x1 = 0;
                            break;
                        case "bottom":
                            this.y0 = 1,
                            this.y1 = 0;
                            break;
                        case "to":
                            var n = this.y0
                              , r = this.x0;
                            this.y0 = this.y1,
                            this.x0 = this.x1,
                            this.x1 = r,
                            this.y1 = n;
                            break;
                        case "center":
                            break;
                        default:
                            var i = .01 * parseFloat(t, 10);
                            if (isNaN(i))
                                break;
                            0 === e ? (this.y0 = i,
                            this.y1 = 1 - this.y0) : (this.x0 = i,
                            this.x1 = 1 - this.x0)
                        }
                    }, this) : (this.y0 = 0,
                    this.y1 = 1),
                    this.colorStops = t.args.slice(e ? 1 : 0).map(function(t) {
                        var e = t.match(r.REGEXP_COLORSTOP)
                          , n = +e[2]
                          , o = 0 === n ? "%" : e[3];
                        return {
                            color: new i(e[1]),
                            stop: "%" === o ? n / 100 : null
                        }
                    }),
                    null === this.colorStops[0].stop && (this.colorStops[0].stop = 0),
                    null === this.colorStops[this.colorStops.length - 1].stop && (this.colorStops[this.colorStops.length - 1].stop = 1),
                    this.colorStops.forEach(function(t, e) {
                        null === t.stop && this.colorStops.slice(e).some(function(n, r) {
                            return null !== n.stop && (t.stop = (n.stop - this.colorStops[e - 1].stop) / (r + 1) + this.colorStops[e - 1].stop,
                            !0)
                        }, this)
                    }, this)
                }
                o.prototype = Object.create(r.prototype),
                o.REGEXP_DIRECTION = /^\s*(?:to|left|right|top|bottom|center|\d{1,3}(?:\.\d+)?%?)(?:\s|$)/i,
                e.exports = o
            }
            , {
                "./color": 3,
                "./gradientcontainer": 9
            }],
            13: [function(t, e, n) {
                var r = function() {
                    r.options.logging && window.console && window.console.log && Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - r.options.start + "ms", "html2canvas:"].concat([].slice.call(arguments, 0)))
                };
                r.options = {
                    logging: !1
                },
                e.exports = r
            }
            , {}],
            14: [function(t, e, n) {
                var r = t("./color")
                  , i = t("./utils")
                  , o = i.getBounds
                  , s = i.parseBackgrounds
                  , a = i.offsetBounds;
                function c(t, e) {
                    this.node = t,
                    this.parent = e,
                    this.stack = null,
                    this.bounds = null,
                    this.borders = null,
                    this.clip = [],
                    this.backgroundClip = [],
                    this.offsetBounds = null,
                    this.visible = null,
                    this.computedStyles = null,
                    this.colors = {},
                    this.styles = {},
                    this.backgroundImages = null,
                    this.transformData = null,
                    this.transformMatrix = null,
                    this.isPseudoElement = !1,
                    this.opacity = null
                }
                function l(t) {
                    return -1 !== t.toString().indexOf("%")
                }
                function u(t) {
                    return t.replace("px", "")
                }
                function h(t) {
                    return parseFloat(t)
                }
                c.prototype.cloneTo = function(t) {
                    t.visible = this.visible,
                    t.borders = this.borders,
                    t.bounds = this.bounds,
                    t.clip = this.clip,
                    t.backgroundClip = this.backgroundClip,
                    t.computedStyles = this.computedStyles,
                    t.styles = this.styles,
                    t.backgroundImages = this.backgroundImages,
                    t.opacity = this.opacity
                }
                ,
                c.prototype.getOpacity = function() {
                    return null === this.opacity ? this.opacity = this.cssFloat("opacity") : this.opacity
                }
                ,
                c.prototype.assignStack = function(t) {
                    this.stack = t,
                    t.children.push(this)
                }
                ,
                c.prototype.isElementVisible = function() {
                    return this.node.nodeType === Node.TEXT_NODE ? this.parent.visible : "none" !== this.css("display") && "hidden" !== this.css("visibility") && !this.node.hasAttribute("data-html2canvas-ignore") && ("INPUT" !== this.node.nodeName || "hidden" !== this.node.getAttribute("type"))
                }
                ,
                c.prototype.css = function(t) {
                    return this.computedStyles || (this.computedStyles = this.isPseudoElement ? this.parent.computedStyle(this.before ? ":before" : ":after") : this.computedStyle(null)),
                    this.styles[t] || (this.styles[t] = this.computedStyles[t])
                }
                ,
                c.prototype.prefixedCss = function(t) {
                    var e = this.css(t);
                    return void 0 === e && ["webkit", "moz", "ms", "o"].some(function(n) {
                        return void 0 !== (e = this.css(n + t.substr(0, 1).toUpperCase() + t.substr(1)))
                    }, this),
                    void 0 === e ? null : e
                }
                ,
                c.prototype.computedStyle = function(t) {
                    return this.node.ownerDocument.defaultView.getComputedStyle(this.node, t)
                }
                ,
                c.prototype.cssInt = function(t) {
                    var e = parseInt(this.css(t), 10);
                    return isNaN(e) ? 0 : e
                }
                ,
                c.prototype.color = function(t) {
                    return this.colors[t] || (this.colors[t] = new r(this.css(t)))
                }
                ,
                c.prototype.cssFloat = function(t) {
                    var e = parseFloat(this.css(t));
                    return isNaN(e) ? 0 : e
                }
                ,
                c.prototype.fontWeight = function() {
                    var t = this.css("fontWeight");
                    switch (parseInt(t, 10)) {
                    case 401:
                        t = "bold";
                        break;
                    case 400:
                        t = "normal"
                    }
                    return t
                }
                ,
                c.prototype.parseClip = function() {
                    var t = this.css("clip").match(this.CLIP);
                    return t ? {
                        top: parseInt(t[1], 10),
                        right: parseInt(t[2], 10),
                        bottom: parseInt(t[3], 10),
                        left: parseInt(t[4], 10)
                    } : null
                }
                ,
                c.prototype.parseBackgroundImages = function() {
                    return this.backgroundImages || (this.backgroundImages = s(this.css("backgroundImage")))
                }
                ,
                c.prototype.cssList = function(t, e) {
                    var n = (this.css(t) || "").split(",");
                    return 1 === (n = (n = n[e || 0] || n[0] || "auto").trim().split(" ")).length && (n = [n[0], l(n[0]) ? "auto" : n[0]]),
                    n
                }
                ,
                c.prototype.parseBackgroundSize = function(t, e, n) {
                    var r, i, o = this.cssList("backgroundSize", n);
                    if (l(o[0]))
                        r = t.width * parseFloat(o[0]) / 100;
                    else {
                        if (/contain|cover/.test(o[0])) {
                            var s = t.width / t.height
                              , a = e.width / e.height;
                            return s < a ^ "contain" === o[0] ? {
                                width: t.height * a,
                                height: t.height
                            } : {
                                width: t.width,
                                height: t.width / a
                            }
                        }
                        r = parseInt(o[0], 10)
                    }
                    return i = "auto" === o[0] && "auto" === o[1] ? e.height : "auto" === o[1] ? r / e.width * e.height : l(o[1]) ? t.height * parseFloat(o[1]) / 100 : parseInt(o[1], 10),
                    "auto" === o[0] && (r = i / e.height * e.width),
                    {
                        width: r,
                        height: i
                    }
                }
                ,
                c.prototype.parseBackgroundPosition = function(t, e, n, r) {
                    var i, o, s = this.cssList("backgroundPosition", n);
                    return i = l(s[0]) ? (t.width - (r || e).width) * (parseFloat(s[0]) / 100) : parseInt(s[0], 10),
                    o = "auto" === s[1] ? i / e.width * e.height : l(s[1]) ? (t.height - (r || e).height) * parseFloat(s[1]) / 100 : parseInt(s[1], 10),
                    "auto" === s[0] && (i = o / e.height * e.width),
                    {
                        left: i,
                        top: o
                    }
                }
                ,
                c.prototype.parseBackgroundRepeat = function(t) {
                    return this.cssList("backgroundRepeat", t)[0]
                }
                ,
                c.prototype.parseTextShadows = function() {
                    var t = this.css("textShadow")
                      , e = [];
                    if (t && "none" !== t)
                        for (var n = t.match(this.TEXT_SHADOW_PROPERTY), i = 0; n && i < n.length; i++) {
                            var o = n[i].match(this.TEXT_SHADOW_VALUES);
                            e.push({
                                color: new r(o[0]),
                                offsetX: o[1] ? parseFloat(o[1].replace("px", "")) : 0,
                                offsetY: o[2] ? parseFloat(o[2].replace("px", "")) : 0,
                                blur: o[3] ? o[3].replace("px", "") : 0
                            })
                        }
                    return e
                }
                ,
                c.prototype.parseTransform = function() {
                    if (!this.transformData)
                        if (this.hasTransform()) {
                            var t = this.parseBounds()
                              , e = this.prefixedCss("transformOrigin").split(" ").map(u).map(h);
                            e[0] += t.left,
                            e[1] += t.top,
                            this.transformData = {
                                origin: e,
                                matrix: this.parseTransformMatrix()
                            }
                        } else
                            this.transformData = {
                                origin: [0, 0],
                                matrix: [1, 0, 0, 1, 0, 0]
                            };
                    return this.transformData
                }
                ,
                c.prototype.parseTransformMatrix = function() {
                    if (!this.transformMatrix) {
                        var t = this.prefixedCss("transform")
                          , e = t ? function(t) {
                            if (t && "matrix" === t[1])
                                return t[2].split(",").map(function(t) {
                                    return parseFloat(t.trim())
                                });
                            if (t && "matrix3d" === t[1]) {
                                var e = t[2].split(",").map(function(t) {
                                    return parseFloat(t.trim())
                                });
                                return [e[0], e[1], e[4], e[5], e[12], e[13]]
                            }
                        }(t.match(this.MATRIX_PROPERTY)) : null;
                        this.transformMatrix = e || [1, 0, 0, 1, 0, 0]
                    }
                    return this.transformMatrix
                }
                ,
                c.prototype.parseBounds = function() {
                    return this.bounds || (this.bounds = this.hasTransform() ? a(this.node) : o(this.node))
                }
                ,
                c.prototype.hasTransform = function() {
                    return "1,0,0,1,0,0" !== this.parseTransformMatrix().join(",") || this.parent && this.parent.hasTransform()
                }
                ,
                c.prototype.getValue = function() {
                    var t, e, n = this.node.value || "";
                    return "SELECT" === this.node.tagName ? (t = this.node,
                    n = (e = t.options[t.selectedIndex || 0]) && e.text || "") : "password" === this.node.type && (n = Array(n.length + 1).join("•")),
                    0 === n.length ? this.node.placeholder || "" : n
                }
                ,
                c.prototype.MATRIX_PROPERTY = /(matrix|matrix3d)\((.+)\)/,
                c.prototype.TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g,
                c.prototype.TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g,
                c.prototype.CLIP = /^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/,
                e.exports = c
            }
            , {
                "./color": 3,
                "./utils": 26
            }],
            15: [function(t, e, n) {
                var r = t("./log")
                  , i = t("punycode")
                  , o = t("./nodecontainer")
                  , s = t("./textcontainer")
                  , a = t("./pseudoelementcontainer")
                  , c = t("./fontmetrics")
                  , l = t("./color")
                  , u = t("./stackingcontext")
                  , h = t("./utils")
                  , f = h.bind
                  , d = h.getBounds
                  , p = h.parseBackgrounds
                  , g = h.offsetBounds;
                function m(t, e, n, i, s) {
                    r("Starting NodeParser"),
                    this.renderer = e,
                    this.options = s,
                    this.range = null,
                    this.support = n,
                    this.renderQueue = [],
                    this.stack = new u(!0,1,t.ownerDocument,null);
                    var a = new o(t,null);
                    if (s.background && e.rectangle(0, 0, e.width, e.height, new l(s.background)),
                    t === t.ownerDocument.documentElement) {
                        var h = new o(a.color("backgroundColor").isTransparent() ? t.ownerDocument.body : t.ownerDocument.documentElement,null);
                        e.rectangle(0, 0, e.width, e.height, h.color("backgroundColor"))
                    }
                    a.visibile = a.isElementVisible(),
                    this.createPseudoHideStyles(t.ownerDocument),
                    this.disableAnimations(t.ownerDocument),
                    this.nodes = U([a].concat(this.getChildren(a)).filter(function(t) {
                        return t.visible = t.isElementVisible()
                    }).map(this.getPseudoElements, this)),
                    this.fontMetrics = new c,
                    r("Fetched nodes, total:", this.nodes.length),
                    r("Calculate overflow clips"),
                    this.calculateOverflowClips(),
                    r("Start fetching images"),
                    this.images = i.fetch(this.nodes.filter(D)),
                    this.ready = this.images.ready.then(f(function() {
                        return r("Images loaded, starting parsing"),
                        r("Creating stacking contexts"),
                        this.createStackingContexts(),
                        r("Sorting stacking contexts"),
                        this.sortStackingContexts(this.stack),
                        this.parse(this.stack),
                        r("Render queue created with " + this.renderQueue.length + " items"),
                        new Promise(f(function(t) {
                            s.async ? "function" == typeof s.async ? s.async.call(this, this.renderQueue, t) : this.renderQueue.length > 0 ? (this.renderIndex = 0,
                            this.asyncRenderer(this.renderQueue, t)) : t() : (this.renderQueue.forEach(this.paint, this),
                            t())
                        }, this))
                    }, this))
                }
                function w(t) {
                    return t.parent && t.parent.clip.length
                }
                function y() {}
                m.prototype.calculateOverflowClips = function() {
                    this.nodes.forEach(function(t) {
                        if (D(t)) {
                            j(t) && t.appendToDOM(),
                            t.borders = this.parseBorders(t);
                            var e = "hidden" === t.css("overflow") ? [t.borders.clip] : []
                              , n = t.parseClip();
                            n && -1 !== ["absolute", "fixed"].indexOf(t.css("position")) && e.push([["rect", t.bounds.left + n.left, t.bounds.top + n.top, n.right - n.left, n.bottom - n.top]]),
                            t.clip = w(t) ? t.parent.clip.concat(e) : e,
                            t.backgroundClip = "hidden" !== t.css("overflow") ? t.clip.concat([t.borders.clip]) : t.clip,
                            j(t) && t.cleanDOM()
                        } else
                            N(t) && (t.clip = w(t) ? t.parent.clip : []);
                        j(t) || (t.bounds = null)
                    }, this)
                }
                ,
                m.prototype.asyncRenderer = function(t, e, n) {
                    n = n || Date.now(),
                    this.paint(t[this.renderIndex++]),
                    t.length === this.renderIndex ? e() : n + 20 > Date.now() ? this.asyncRenderer(t, e, n) : setTimeout(f(function() {
                        this.asyncRenderer(t, e)
                    }, this), 0)
                }
                ,
                m.prototype.createPseudoHideStyles = function(t) {
                    this.createStyles(t, "." + a.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ':before { content: "" !important; display: none !important; }.' + a.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER + ':after { content: "" !important; display: none !important; }')
                }
                ,
                m.prototype.disableAnimations = function(t) {
                    this.createStyles(t, "* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}")
                }
                ,
                m.prototype.createStyles = function(t, e) {
                    var n = t.createElement("style");
                    n.innerHTML = e,
                    t.body.appendChild(n)
                }
                ,
                m.prototype.getPseudoElements = function(t) {
                    var e = [[t]];
                    if (t.node.nodeType === Node.ELEMENT_NODE) {
                        var n = this.getPseudoElement(t, ":before")
                          , r = this.getPseudoElement(t, ":after");
                        n && e.push(n),
                        r && e.push(r)
                    }
                    return U(e)
                }
                ,
                m.prototype.getPseudoElement = function(t, e) {
                    var n = t.computedStyle(e);
                    if (!n || !n.content || "none" === n.content || "-moz-alt-content" === n.content || "none" === n.display)
                        return null;
                    for (var r = function(t) {
                        var e = t.substr(0, 1);
                        return e === t.substr(t.length - 1) && e.match(/'|"/) ? t.substr(1, t.length - 2) : t
                    }(n.content), i = "url" === r.substr(0, 3), o = document.createElement(i ? "img" : "html2canvaspseudoelement"), c = new a(o,t,e), l = n.length - 1; l >= 0; l--) {
                        var u = n.item(l).replace(/(\-[a-z])/g, function(t) {
                            return t.toUpperCase().replace("-", "")
                        });
                        o.style[u] = n[u]
                    }
                    if (o.className = a.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + a.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER,
                    i)
                        return o.src = p(r)[0].args[0],
                        [c];
                    var h = document.createTextNode(r);
                    return o.appendChild(h),
                    [c, new s(h,c)]
                }
                ,
                m.prototype.getChildren = function(t) {
                    return U([].filter.call(t.node.childNodes, O).map(function(e) {
                        var n = [e.nodeType === Node.TEXT_NODE ? new s(e,t) : new o(e,t)].filter(M);
                        return e.nodeType === Node.ELEMENT_NODE && n.length && "TEXTAREA" !== e.tagName ? n[0].isElementVisible() ? n.concat(this.getChildren(n[0])) : [] : n
                    }, this))
                }
                ,
                m.prototype.newStackingContext = function(t, e) {
                    var n = new u(e,t.getOpacity(),t.node,t.parent);
                    t.cloneTo(n),
                    (e ? n.getParentStack(this) : n.parent.stack).contexts.push(n),
                    t.stack = n
                }
                ,
                m.prototype.createStackingContexts = function() {
                    this.nodes.forEach(function(t) {
                        D(t) && (this.isRootElement(t) || function(t) {
                            return t.getOpacity() < 1
                        }(t) || function(t) {
                            var e = t.css("position");
                            return "auto" !== (-1 !== ["absolute", "relative", "fixed"].indexOf(e) ? t.css("zIndex") : "auto")
                        }(t) || this.isBodyWithTransparentRoot(t) || t.hasTransform()) ? this.newStackingContext(t, !0) : D(t) && (F(t) && T(t) || function(t) {
                            return -1 !== ["inline-block", "inline-table"].indexOf(t.css("display"))
                        }(t) || R(t)) ? this.newStackingContext(t, !1) : t.assignStack(t.parent.stack)
                    }, this)
                }
                ,
                m.prototype.isBodyWithTransparentRoot = function(t) {
                    return "BODY" === t.node.nodeName && t.parent.color("backgroundColor").isTransparent()
                }
                ,
                m.prototype.isRootElement = function(t) {
                    return null === t.parent
                }
                ,
                m.prototype.sortStackingContexts = function(t) {
                    var e;
                    t.contexts.sort((e = t.contexts.slice(0),
                    function(t, n) {
                        return t.cssInt("zIndex") + e.indexOf(t) / e.length - (n.cssInt("zIndex") + e.indexOf(n) / e.length)
                    }
                    )),
                    t.contexts.forEach(this.sortStackingContexts, this)
                }
                ,
                m.prototype.parseTextBounds = function(t) {
                    return function(e, n, r) {
                        if ("none" !== t.parent.css("textDecoration").substr(0, 4) || 0 !== e.trim().length) {
                            if (this.support.rangeBounds && !t.parent.hasTransform()) {
                                var i = r.slice(0, n).join("").length;
                                return this.getRangeBounds(t.node, i, e.length)
                            }
                            if (t.node && "string" == typeof t.node.data) {
                                var o = t.node.splitText(e.length)
                                  , s = this.getWrapperBounds(t.node, t.parent.hasTransform());
                                return t.node = o,
                                s
                            }
                        } else
                            this.support.rangeBounds && !t.parent.hasTransform() || (t.node = t.node.splitText(e.length));
                        return {}
                    }
                }
                ,
                m.prototype.getWrapperBounds = function(t, e) {
                    var n = t.ownerDocument.createElement("html2canvaswrapper")
                      , r = t.parentNode
                      , i = t.cloneNode(!0);
                    n.appendChild(t.cloneNode(!0)),
                    r.replaceChild(n, t);
                    var o = e ? g(n) : d(n);
                    return r.replaceChild(i, n),
                    o
                }
                ,
                m.prototype.getRangeBounds = function(t, e, n) {
                    var r = this.range || (this.range = t.ownerDocument.createRange());
                    return r.setStart(t, e),
                    r.setEnd(t, e + n),
                    r.getBoundingClientRect()
                }
                ,
                m.prototype.parse = function(t) {
                    var e = t.contexts.filter(S)
                      , n = t.children.filter(D)
                      , r = n.filter(B(R))
                      , i = r.filter(B(F)).filter(B(I))
                      , o = n.filter(B(F)).filter(R)
                      , s = r.filter(B(F)).filter(I)
                      , a = t.contexts.concat(r.filter(F)).filter(T)
                      , c = t.children.filter(N).filter(E)
                      , l = t.contexts.filter(q);
                    e.concat(i).concat(o).concat(s).concat(a).concat(c).concat(l).forEach(function(t) {
                        this.renderQueue.push(t),
                        P(t) && (this.parse(t),
                        this.renderQueue.push(new y))
                    }, this)
                }
                ,
                m.prototype.paint = function(t) {
                    try {
                        t instanceof y ? this.renderer.ctx.restore() : N(t) ? (j(t.parent) && t.parent.appendToDOM(),
                        this.paintText(t),
                        j(t.parent) && t.parent.cleanDOM()) : this.paintNode(t)
                    } catch (t) {
                        if (r(t),
                        this.options.strict)
                            throw t
                    }
                }
                ,
                m.prototype.paintNode = function(t) {
                    P(t) && (this.renderer.setOpacity(t.opacity),
                    this.renderer.ctx.save(),
                    t.hasTransform() && this.renderer.setTransform(t.parseTransform())),
                    "INPUT" === t.node.nodeName && "checkbox" === t.node.type ? this.paintCheckbox(t) : "INPUT" === t.node.nodeName && "radio" === t.node.type ? this.paintRadio(t) : this.paintElement(t)
                }
                ,
                m.prototype.paintElement = function(t) {
                    var e = t.parseBounds();
                    this.renderer.clip(t.backgroundClip, function() {
                        this.renderer.renderBackground(t, e, t.borders.borders.map(L))
                    }, this),
                    this.renderer.clip(t.clip, function() {
                        this.renderer.renderBorders(t.borders.borders)
                    }, this),
                    this.renderer.clip(t.backgroundClip, function() {
                        switch (t.node.nodeName) {
                        case "svg":
                        case "IFRAME":
                            var n = this.images.get(t.node);
                            n ? this.renderer.renderImage(t, e, t.borders, n) : r("Error loading <" + t.node.nodeName + ">", t.node);
                            break;
                        case "IMG":
                            var i = this.images.get(t.node.src);
                            i ? this.renderer.renderImage(t, e, t.borders, i) : r("Error loading <img>", t.node.src);
                            break;
                        case "CANVAS":
                            this.renderer.renderImage(t, e, t.borders, {
                                image: t.node
                            });
                            break;
                        case "SELECT":
                        case "INPUT":
                        case "TEXTAREA":
                            this.paintFormValue(t)
                        }
                    }, this)
                }
                ,
                m.prototype.paintCheckbox = function(t) {
                    var e = t.parseBounds()
                      , n = Math.min(e.width, e.height)
                      , r = {
                        width: n - 1,
                        height: n - 1,
                        top: e.top,
                        left: e.left
                    }
                      , i = [3, 3]
                      , o = [i, i, i, i]
                      , s = [1, 1, 1, 1].map(function(t) {
                        return {
                            color: new l("#A5A5A5"),
                            width: t
                        }
                    })
                      , a = k(r, o, s);
                    this.renderer.clip(t.backgroundClip, function() {
                        this.renderer.rectangle(r.left + 1, r.top + 1, r.width - 2, r.height - 2, new l("#DEDEDE")),
                        this.renderer.renderBorders(b(s, r, a, o)),
                        t.node.checked && (this.renderer.font(new l("#424242"), "normal", "normal", "bold", n - 3 + "px", "arial"),
                        this.renderer.text("✔", r.left + n / 6, r.top + n - 1))
                    }, this)
                }
                ,
                m.prototype.paintRadio = function(t) {
                    var e = t.parseBounds()
                      , n = Math.min(e.width, e.height) - 2;
                    this.renderer.clip(t.backgroundClip, function() {
                        this.renderer.circleStroke(e.left + 1, e.top + 1, n, new l("#DEDEDE"), 1, new l("#A5A5A5")),
                        t.node.checked && this.renderer.circle(Math.ceil(e.left + n / 4) + 1, Math.ceil(e.top + n / 4) + 1, Math.floor(n / 2), new l("#424242"))
                    }, this)
                }
                ,
                m.prototype.paintFormValue = function(t) {
                    var e = t.getValue();
                    if (e.length > 0) {
                        var n = t.node.ownerDocument
                          , i = n.createElement("html2canvaswrapper");
                        ["lineHeight", "textAlign", "fontFamily", "fontWeight", "fontSize", "color", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "width", "height", "borderLeftStyle", "borderTopStyle", "borderLeftWidth", "borderTopWidth", "boxSizing", "whiteSpace", "wordWrap"].forEach(function(e) {
                            try {
                                i.style[e] = t.css(e)
                            } catch (t) {
                                r("html2canvas: Parse: Exception caught in renderFormValue: " + t.message)
                            }
                        });
                        var o = t.parseBounds();
                        i.style.position = "fixed",
                        i.style.left = o.left + "px",
                        i.style.top = o.top + "px",
                        i.textContent = e,
                        n.body.appendChild(i),
                        this.paintText(new s(i.firstChild,t)),
                        n.body.removeChild(i)
                    }
                }
                ,
                m.prototype.paintText = function(t) {
                    t.applyTextTransform();
                    var e, n = i.ucs2.decode(t.node.data), r = this.options.letterRendering && !function(t) {
                        return /^(normal|none|0px)$/.test(t.parent.css("letterSpacing"))
                    }(t) || (e = t.node.data,
                    /[^\u0000-\u00ff]/.test(e)) ? n.map(function(t) {
                        return i.ucs2.encode([t])
                    }) : function(t) {
                        var e, n = [], r = 0, o = !1;
                        for (; t.length; )
                            s = t[r],
                            -1 !== [32, 13, 10, 9, 45].indexOf(s) === o ? ((e = t.splice(0, r)).length && n.push(i.ucs2.encode(e)),
                            o = !o,
                            r = 0) : r++,
                            r >= t.length && (e = t.splice(0, r)).length && n.push(i.ucs2.encode(e));
                        var s;
                        return n
                    }(n), o = t.parent.fontWeight(), s = t.parent.css("fontSize"), a = t.parent.css("fontFamily"), c = t.parent.parseTextShadows();
                    this.renderer.font(t.parent.color("color"), t.parent.css("fontStyle"), t.parent.css("fontVariant"), o, s, a),
                    c.length ? this.renderer.fontShadow(c[0].color, c[0].offsetX, c[0].offsetY, c[0].blur) : this.renderer.clearShadow(),
                    this.renderer.clip(t.parent.clip, function() {
                        r.map(this.parseTextBounds(t), this).forEach(function(e, n) {
                            e && (this.renderer.text(r[n], e.left, e.bottom),
                            this.renderTextDecoration(t.parent, e, this.fontMetrics.getMetrics(a, s)))
                        }, this)
                    }, this)
                }
                ,
                m.prototype.renderTextDecoration = function(t, e, n) {
                    switch (t.css("textDecoration").split(" ")[0]) {
                    case "underline":
                        this.renderer.rectangle(e.left, Math.round(e.top + n.baseline + n.lineWidth), e.width, 1, t.color("color"));
                        break;
                    case "overline":
                        this.renderer.rectangle(e.left, Math.round(e.top), e.width, 1, t.color("color"));
                        break;
                    case "line-through":
                        this.renderer.rectangle(e.left, Math.ceil(e.top + n.middle + n.lineWidth), e.width, 1, t.color("color"))
                    }
                }
                ;
                var v = {
                    inset: [["darken", .6], ["darken", .1], ["darken", .1], ["darken", .6]]
                };
                function b(t, e, n, r) {
                    return t.map(function(i, o) {
                        if (i.width > 0) {
                            var s = e.left
                              , a = e.top
                              , c = e.width
                              , l = e.height - t[2].width;
                            switch (o) {
                            case 0:
                                l = t[0].width,
                                i.args = C({
                                    c1: [s, a],
                                    c2: [s + c, a],
                                    c3: [s + c - t[1].width, a + l],
                                    c4: [s + t[3].width, a + l]
                                }, r[0], r[1], n.topLeftOuter, n.topLeftInner, n.topRightOuter, n.topRightInner);
                                break;
                            case 1:
                                s = e.left + e.width - t[1].width,
                                c = t[1].width,
                                i.args = C({
                                    c1: [s + c, a],
                                    c2: [s + c, a + l + t[2].width],
                                    c3: [s, a + l],
                                    c4: [s, a + t[0].width]
                                }, r[1], r[2], n.topRightOuter, n.topRightInner, n.bottomRightOuter, n.bottomRightInner);
                                break;
                            case 2:
                                a = a + e.height - t[2].width,
                                l = t[2].width,
                                i.args = C({
                                    c1: [s + c, a + l],
                                    c2: [s, a + l],
                                    c3: [s + t[3].width, a],
                                    c4: [s + c - t[3].width, a]
                                }, r[2], r[3], n.bottomRightOuter, n.bottomRightInner, n.bottomLeftOuter, n.bottomLeftInner);
                                break;
                            case 3:
                                c = t[3].width,
                                i.args = C({
                                    c1: [s, a + l + t[2].width],
                                    c2: [s, a],
                                    c3: [s + c, a + t[0].width],
                                    c4: [s + c, a + l]
                                }, r[3], r[0], n.bottomLeftOuter, n.bottomLeftInner, n.topLeftOuter, n.topLeftInner)
                            }
                        }
                        return i
                    })
                }
                function x(t, e, n, r) {
                    var i = (Math.sqrt(2) - 1) / 3 * 4
                      , o = n * i
                      , s = r * i
                      , a = t + n
                      , c = e + r;
                    return {
                        topLeft: _({
                            x: t,
                            y: c
                        }, {
                            x: t,
                            y: c - s
                        }, {
                            x: a - o,
                            y: e
                        }, {
                            x: a,
                            y: e
                        }),
                        topRight: _({
                            x: t,
                            y: e
                        }, {
                            x: t + o,
                            y: e
                        }, {
                            x: a,
                            y: c - s
                        }, {
                            x: a,
                            y: c
                        }),
                        bottomRight: _({
                            x: a,
                            y: e
                        }, {
                            x: a,
                            y: e + s
                        }, {
                            x: t + o,
                            y: c
                        }, {
                            x: t,
                            y: c
                        }),
                        bottomLeft: _({
                            x: a,
                            y: c
                        }, {
                            x: a - o,
                            y: c
                        }, {
                            x: t,
                            y: e + s
                        }, {
                            x: t,
                            y: e
                        })
                    }
                }
                function k(t, e, n) {
                    var r = t.left
                      , i = t.top
                      , o = t.width
                      , s = t.height
                      , a = e[0][0] < o / 2 ? e[0][0] : o / 2
                      , c = e[0][1] < s / 2 ? e[0][1] : s / 2
                      , l = e[1][0] < o / 2 ? e[1][0] : o / 2
                      , u = e[1][1] < s / 2 ? e[1][1] : s / 2
                      , h = e[2][0] < o / 2 ? e[2][0] : o / 2
                      , f = e[2][1] < s / 2 ? e[2][1] : s / 2
                      , d = e[3][0] < o / 2 ? e[3][0] : o / 2
                      , p = e[3][1] < s / 2 ? e[3][1] : s / 2
                      , g = o - l
                      , m = s - f
                      , w = o - h
                      , y = s - p;
                    return {
                        topLeftOuter: x(r, i, a, c).topLeft.subdivide(.5),
                        topLeftInner: x(r + n[3].width, i + n[0].width, Math.max(0, a - n[3].width), Math.max(0, c - n[0].width)).topLeft.subdivide(.5),
                        topRightOuter: x(r + g, i, l, u).topRight.subdivide(.5),
                        topRightInner: x(r + Math.min(g, o + n[3].width), i + n[0].width, g > o + n[3].width ? 0 : l - n[3].width, u - n[0].width).topRight.subdivide(.5),
                        bottomRightOuter: x(r + w, i + m, h, f).bottomRight.subdivide(.5),
                        bottomRightInner: x(r + Math.min(w, o - n[3].width), i + Math.min(m, s + n[0].width), Math.max(0, h - n[1].width), f - n[2].width).bottomRight.subdivide(.5),
                        bottomLeftOuter: x(r, i + y, d, p).bottomLeft.subdivide(.5),
                        bottomLeftInner: x(r + n[3].width, i + y, Math.max(0, d - n[3].width), p - n[2].width).bottomLeft.subdivide(.5)
                    }
                }
                function _(t, e, n, r) {
                    var i = function(t, e, n) {
                        return {
                            x: t.x + (e.x - t.x) * n,
                            y: t.y + (e.y - t.y) * n
                        }
                    };
                    return {
                        start: t,
                        startControl: e,
                        endControl: n,
                        end: r,
                        subdivide: function(o) {
                            var s = i(t, e, o)
                              , a = i(e, n, o)
                              , c = i(n, r, o)
                              , l = i(s, a, o)
                              , u = i(a, c, o)
                              , h = i(l, u, o);
                            return [_(t, s, l, h), _(h, u, c, r)]
                        },
                        curveTo: function(t) {
                            t.push(["bezierCurve", e.x, e.y, n.x, n.y, r.x, r.y])
                        },
                        curveToReversed: function(r) {
                            r.push(["bezierCurve", n.x, n.y, e.x, e.y, t.x, t.y])
                        }
                    }
                }
                function C(t, e, n, r, i, o, s) {
                    var a = [];
                    return e[0] > 0 || e[1] > 0 ? (a.push(["line", r[1].start.x, r[1].start.y]),
                    r[1].curveTo(a)) : a.push(["line", t.c1[0], t.c1[1]]),
                    n[0] > 0 || n[1] > 0 ? (a.push(["line", o[0].start.x, o[0].start.y]),
                    o[0].curveTo(a),
                    a.push(["line", s[0].end.x, s[0].end.y]),
                    s[0].curveToReversed(a)) : (a.push(["line", t.c2[0], t.c2[1]]),
                    a.push(["line", t.c3[0], t.c3[1]])),
                    e[0] > 0 || e[1] > 0 ? (a.push(["line", i[1].end.x, i[1].end.y]),
                    i[1].curveToReversed(a)) : a.push(["line", t.c4[0], t.c4[1]]),
                    a
                }
                function A(t, e, n, r, i, o, s) {
                    e[0] > 0 || e[1] > 0 ? (t.push(["line", r[0].start.x, r[0].start.y]),
                    r[0].curveTo(t),
                    r[1].curveTo(t)) : t.push(["line", o, s]),
                    (n[0] > 0 || n[1] > 0) && t.push(["line", i[0].start.x, i[0].start.y])
                }
                function S(t) {
                    return t.cssInt("zIndex") < 0
                }
                function q(t) {
                    return t.cssInt("zIndex") > 0
                }
                function T(t) {
                    return 0 === t.cssInt("zIndex")
                }
                function I(t) {
                    return -1 !== ["inline", "inline-block", "inline-table"].indexOf(t.css("display"))
                }
                function P(t) {
                    return t instanceof u
                }
                function E(t) {
                    return t.node.data.trim().length > 0
                }
                function O(t) {
                    return t.nodeType === Node.TEXT_NODE || t.nodeType === Node.ELEMENT_NODE
                }
                function F(t) {
                    return "static" !== t.css("position")
                }
                function R(t) {
                    return "none" !== t.css("float")
                }
                function B(t) {
                    var e = this;
                    return function() {
                        return !t.apply(e, arguments)
                    }
                }
                function D(t) {
                    return t.node.nodeType === Node.ELEMENT_NODE
                }
                function j(t) {
                    return !0 === t.isPseudoElement
                }
                function N(t) {
                    return t.node.nodeType === Node.TEXT_NODE
                }
                function z(t) {
                    return parseInt(t, 10)
                }
                function L(t) {
                    return t.width
                }
                function M(t) {
                    return t.node.nodeType !== Node.ELEMENT_NODE || -1 === ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"].indexOf(t.node.nodeName)
                }
                function U(t) {
                    return [].concat.apply([], t)
                }
                m.prototype.parseBorders = function(t) {
                    var e = t.parseBounds()
                      , n = function(t) {
                        return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function(e) {
                            var n = t.css("border" + e + "Radius")
                              , r = n.split(" ");
                            return r.length <= 1 && (r[1] = r[0]),
                            r.map(z)
                        })
                    }(t)
                      , r = ["Top", "Right", "Bottom", "Left"].map(function(e, n) {
                        var r = t.css("border" + e + "Style")
                          , i = t.color("border" + e + "Color");
                        "inset" === r && i.isBlack() && (i = new l([255, 255, 255, i.a]));
                        var o = v[r] ? v[r][n] : null;
                        return {
                            width: t.cssInt("border" + e + "Width"),
                            color: o ? i[o[0]](o[1]) : i,
                            args: null
                        }
                    })
                      , i = k(e, n, r);
                    return {
                        clip: this.parseBackgroundClip(t, i, r, n, e),
                        borders: b(r, e, i, n)
                    }
                }
                ,
                m.prototype.parseBackgroundClip = function(t, e, n, r, i) {
                    var o = [];
                    switch (t.css("backgroundClip")) {
                    case "content-box":
                    case "padding-box":
                        A(o, r[0], r[1], e.topLeftInner, e.topRightInner, i.left + n[3].width, i.top + n[0].width),
                        A(o, r[1], r[2], e.topRightInner, e.bottomRightInner, i.left + i.width - n[1].width, i.top + n[0].width),
                        A(o, r[2], r[3], e.bottomRightInner, e.bottomLeftInner, i.left + i.width - n[1].width, i.top + i.height - n[2].width),
                        A(o, r[3], r[0], e.bottomLeftInner, e.topLeftInner, i.left + n[3].width, i.top + i.height - n[2].width);
                        break;
                    default:
                        A(o, r[0], r[1], e.topLeftOuter, e.topRightOuter, i.left, i.top),
                        A(o, r[1], r[2], e.topRightOuter, e.bottomRightOuter, i.left + i.width, i.top),
                        A(o, r[2], r[3], e.bottomRightOuter, e.bottomLeftOuter, i.left + i.width, i.top + i.height),
                        A(o, r[3], r[0], e.bottomLeftOuter, e.topLeftOuter, i.left, i.top + i.height)
                    }
                    return o
                }
                ,
                e.exports = m
            }
            , {
                "./color": 3,
                "./fontmetrics": 7,
                "./log": 13,
                "./nodecontainer": 14,
                "./pseudoelementcontainer": 18,
                "./stackingcontext": 21,
                "./textcontainer": 25,
                "./utils": 26,
                punycode: 1
            }],
            16: [function(t, e, n) {
                var r = t("./xhr")
                  , i = t("./utils")
                  , o = t("./log")
                  , s = t("./clone")
                  , a = i.decode64;
                function c(t, e, n) {
                    var i = "withCredentials"in new XMLHttpRequest;
                    if (!e)
                        return Promise.reject("No proxy configured");
                    var o = h(i)
                      , s = f(e, t, o);
                    return i ? r(s) : u(n, s, o).then(function(t) {
                        return a(t.content)
                    })
                }
                var l = 0;
                function u(t, e, n) {
                    return new Promise(function(r, i) {
                        var o = t.createElement("script")
                          , s = function() {
                            delete window.html2canvas.proxy[n],
                            t.body.removeChild(o)
                        };
                        window.html2canvas.proxy[n] = function(t) {
                            s(),
                            r(t)
                        }
                        ,
                        o.src = e,
                        o.onerror = function(t) {
                            s(),
                            i(t)
                        }
                        ,
                        t.body.appendChild(o)
                    }
                    )
                }
                function h(t) {
                    return t ? "" : "html2canvas_" + Date.now() + "_" + ++l + "_" + Math.round(1e5 * Math.random())
                }
                function f(t, e, n) {
                    return t + "?url=" + encodeURIComponent(e) + (n.length ? "&callback=html2canvas.proxy." + n : "")
                }
                function d(t) {
                    return function(e) {
                        var n, r = new DOMParser;
                        try {
                            n = r.parseFromString(e, "text/html")
                        } catch (t) {
                            o("DOMParser not supported, falling back to createHTMLDocument"),
                            n = document.implementation.createHTMLDocument("");
                            try {
                                n.open(),
                                n.write(e),
                                n.close()
                            } catch (t) {
                                o("createHTMLDocument write not supported, falling back to document.body.innerHTML"),
                                n.body.innerHTML = e
                            }
                        }
                        var i = n.querySelector("base");
                        if (!i || !i.href.host) {
                            var s = n.createElement("base");
                            s.href = t,
                            n.head.insertBefore(s, n.head.firstChild)
                        }
                        return n
                    }
                }
                n.Proxy = c,
                n.ProxyURL = function(t, e, n) {
                    var r = "crossOrigin"in new Image
                      , i = h(r)
                      , o = f(e, t, i);
                    return r ? Promise.resolve(o) : u(n, o, i).then(function(t) {
                        return "data:" + t.type + ";base64," + t.content
                    })
                }
                ,
                n.loadUrlDocument = function(t, e, n, r, i, o) {
                    return new c(t,e,window.document).then(d(t)).then(function(t) {
                        return s(t, n, r, i, o, 0, 0)
                    })
                }
            }
            , {
                "./clone": 2,
                "./log": 13,
                "./utils": 26,
                "./xhr": 28
            }],
            17: [function(t, e, n) {
                var r = t("./proxy").ProxyURL;
                e.exports = function(t, e) {
                    var n = document.createElement("a");
                    n.href = t,
                    t = n.href,
                    this.src = t,
                    this.image = new Image;
                    var i = this;
                    this.promise = new Promise(function(n, o) {
                        i.image.crossOrigin = "Anonymous",
                        i.image.onload = n,
                        i.image.onerror = o,
                        new r(t,e,document).then(function(t) {
                            i.image.src = t
                        }).catch(o)
                    }
                    )
                }
            }
            , {
                "./proxy": 16
            }],
            18: [function(t, e, n) {
                var r = t("./nodecontainer");
                function i(t, e, n) {
                    r.call(this, t, e),
                    this.isPseudoElement = !0,
                    this.before = ":before" === n
                }
                i.prototype.cloneTo = function(t) {
                    i.prototype.cloneTo.call(this, t),
                    t.isPseudoElement = !0,
                    t.before = this.before
                }
                ,
                i.prototype = Object.create(r.prototype),
                i.prototype.appendToDOM = function() {
                    this.before ? this.parent.node.insertBefore(this.node, this.parent.node.firstChild) : this.parent.node.appendChild(this.node),
                    this.parent.node.className += " " + this.getHideClass()
                }
                ,
                i.prototype.cleanDOM = function() {
                    this.node.parentNode.removeChild(this.node),
                    this.parent.node.className = this.parent.node.className.replace(this.getHideClass(), "")
                }
                ,
                i.prototype.getHideClass = function() {
                    return this["PSEUDO_HIDE_ELEMENT_CLASS_" + (this.before ? "BEFORE" : "AFTER")]
                }
                ,
                i.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before",
                i.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after",
                e.exports = i
            }
            , {
                "./nodecontainer": 14
            }],
            19: [function(t, e, n) {
                var r = t("./log");
                function i(t, e, n, r, i) {
                    this.width = t,
                    this.height = e,
                    this.images = n,
                    this.options = r,
                    this.document = i
                }
                i.prototype.renderImage = function(t, e, n, r) {
                    var i = t.cssInt("paddingLeft")
                      , o = t.cssInt("paddingTop")
                      , s = t.cssInt("paddingRight")
                      , a = t.cssInt("paddingBottom")
                      , c = n.borders
                      , l = e.width - (c[1].width + c[3].width + i + s)
                      , u = e.height - (c[0].width + c[2].width + o + a);
                    this.drawImage(r, 0, 0, r.image.width || l, r.image.height || u, e.left + i + c[3].width, e.top + o + c[0].width, l, u)
                }
                ,
                i.prototype.renderBackground = function(t, e, n) {
                    e.height > 0 && e.width > 0 && (this.renderBackgroundColor(t, e),
                    this.renderBackgroundImage(t, e, n))
                }
                ,
                i.prototype.renderBackgroundColor = function(t, e) {
                    var n = t.color("backgroundColor");
                    n.isTransparent() || this.rectangle(e.left, e.top, e.width, e.height, n)
                }
                ,
                i.prototype.renderBorders = function(t) {
                    t.forEach(this.renderBorder, this)
                }
                ,
                i.prototype.renderBorder = function(t) {
                    t.color.isTransparent() || null === t.args || this.drawShape(t.args, t.color)
                }
                ,
                i.prototype.renderBackgroundImage = function(t, e, n) {
                    t.parseBackgroundImages().reverse().forEach(function(i, o, s) {
                        switch (i.method) {
                        case "url":
                            var a = this.images.get(i.args[0]);
                            a ? this.renderBackgroundRepeating(t, e, a, s.length - (o + 1), n) : r("Error loading background-image", i.args[0]);
                            break;
                        case "linear-gradient":
                        case "gradient":
                            var c = this.images.get(i.value);
                            c ? this.renderBackgroundGradient(c, e, n) : r("Error loading background-image", i.args[0]);
                            break;
                        case "none":
                            break;
                        default:
                            r("Unknown background-image type", i.args[0])
                        }
                    }, this)
                }
                ,
                i.prototype.renderBackgroundRepeating = function(t, e, n, r, i) {
                    var o = t.parseBackgroundSize(e, n.image, r)
                      , s = t.parseBackgroundPosition(e, n.image, r, o);
                    switch (t.parseBackgroundRepeat(r)) {
                    case "repeat-x":
                    case "repeat no-repeat":
                        this.backgroundRepeatShape(n, s, o, e, e.left + i[3], e.top + s.top + i[0], 99999, o.height, i);
                        break;
                    case "repeat-y":
                    case "no-repeat repeat":
                        this.backgroundRepeatShape(n, s, o, e, e.left + s.left + i[3], e.top + i[0], o.width, 99999, i);
                        break;
                    case "no-repeat":
                        this.backgroundRepeatShape(n, s, o, e, e.left + s.left + i[3], e.top + s.top + i[0], o.width, o.height, i);
                        break;
                    default:
                        this.renderBackgroundRepeat(n, s, o, {
                            top: e.top,
                            left: e.left
                        }, i[3], i[0])
                    }
                }
                ,
                e.exports = i
            }
            , {
                "./log": 13
            }],
            20: [function(t, e, n) {
                var r = t("../renderer")
                  , i = t("../lineargradientcontainer")
                  , o = t("../log");
                function s(t, e) {
                    r.apply(this, arguments),
                    this.canvas = this.options.canvas || this.document.createElement("canvas"),
                    this.options.canvas || (this.canvas.width = t,
                    this.canvas.height = e),
                    this.ctx = this.canvas.getContext("2d"),
                    this.taintCtx = this.document.createElement("canvas").getContext("2d"),
                    this.ctx.textBaseline = "bottom",
                    this.variables = {},
                    o("Initialized CanvasRenderer with size", t, "x", e)
                }
                function a(t) {
                    return t.length > 0
                }
                s.prototype = Object.create(r.prototype),
                s.prototype.setFillStyle = function(t) {
                    return this.ctx.fillStyle = "object" == typeof t && t.isColor ? t.toString() : t,
                    this.ctx
                }
                ,
                s.prototype.rectangle = function(t, e, n, r, i) {
                    this.setFillStyle(i).fillRect(t, e, n, r)
                }
                ,
                s.prototype.circle = function(t, e, n, r) {
                    this.setFillStyle(r),
                    this.ctx.beginPath(),
                    this.ctx.arc(t + n / 2, e + n / 2, n / 2, 0, 2 * Math.PI, !0),
                    this.ctx.closePath(),
                    this.ctx.fill()
                }
                ,
                s.prototype.circleStroke = function(t, e, n, r, i, o) {
                    this.circle(t, e, n, r),
                    this.ctx.strokeStyle = o.toString(),
                    this.ctx.stroke()
                }
                ,
                s.prototype.drawShape = function(t, e) {
                    this.shape(t),
                    this.setFillStyle(e).fill()
                }
                ,
                s.prototype.taints = function(t) {
                    if (null === t.tainted) {
                        this.taintCtx.drawImage(t.image, 0, 0);
                        try {
                            this.taintCtx.getImageData(0, 0, 1, 1),
                            t.tainted = !1
                        } catch (e) {
                            this.taintCtx = document.createElement("canvas").getContext("2d"),
                            t.tainted = !0
                        }
                    }
                    return t.tainted
                }
                ,
                s.prototype.drawImage = function(t, e, n, r, i, o, s, a, c) {
                    this.taints(t) && !this.options.allowTaint || this.ctx.drawImage(t.image, e, n, r, i, o, s, a, c)
                }
                ,
                s.prototype.clip = function(t, e, n) {
                    this.ctx.save(),
                    t.filter(a).forEach(function(t) {
                        this.shape(t).clip()
                    }, this),
                    e.call(n),
                    this.ctx.restore()
                }
                ,
                s.prototype.shape = function(t) {
                    return this.ctx.beginPath(),
                    t.forEach(function(t, e) {
                        "rect" === t[0] ? this.ctx.rect.apply(this.ctx, t.slice(1)) : this.ctx[0 === e ? "moveTo" : t[0] + "To"].apply(this.ctx, t.slice(1))
                    }, this),
                    this.ctx.closePath(),
                    this.ctx
                }
                ,
                s.prototype.font = function(t, e, n, r, i, o) {
                    this.setFillStyle(t).font = [e, n, r, i, o].join(" ").split(",")[0]
                }
                ,
                s.prototype.fontShadow = function(t, e, n, r) {
                    this.setVariable("shadowColor", t.toString()).setVariable("shadowOffsetY", e).setVariable("shadowOffsetX", n).setVariable("shadowBlur", r)
                }
                ,
                s.prototype.clearShadow = function() {
                    this.setVariable("shadowColor", "rgba(0,0,0,0)")
                }
                ,
                s.prototype.setOpacity = function(t) {
                    this.ctx.globalAlpha = t
                }
                ,
                s.prototype.setTransform = function(t) {
                    this.ctx.translate(t.origin[0], t.origin[1]),
                    this.ctx.transform.apply(this.ctx, t.matrix),
                    this.ctx.translate(-t.origin[0], -t.origin[1])
                }
                ,
                s.prototype.setVariable = function(t, e) {
                    return this.variables[t] !== e && (this.variables[t] = this.ctx[t] = e),
                    this
                }
                ,
                s.prototype.text = function(t, e, n) {
                    this.ctx.fillText(t, e, n)
                }
                ,
                s.prototype.backgroundRepeatShape = function(t, e, n, r, i, o, s, a, c) {
                    var l = [["line", Math.round(i), Math.round(o)], ["line", Math.round(i + s), Math.round(o)], ["line", Math.round(i + s), Math.round(a + o)], ["line", Math.round(i), Math.round(a + o)]];
                    this.clip([l], function() {
                        this.renderBackgroundRepeat(t, e, n, r, c[3], c[0])
                    }, this)
                }
                ,
                s.prototype.renderBackgroundRepeat = function(t, e, n, r, i, o) {
                    var s = Math.round(r.left + e.left + i)
                      , a = Math.round(r.top + e.top + o);
                    this.setFillStyle(this.ctx.createPattern(this.resizeImage(t, n), "repeat")),
                    this.ctx.translate(s, a),
                    this.ctx.fill(),
                    this.ctx.translate(-s, -a)
                }
                ,
                s.prototype.renderBackgroundGradient = function(t, e) {
                    if (t instanceof i) {
                        var n = this.ctx.createLinearGradient(e.left + e.width * t.x0, e.top + e.height * t.y0, e.left + e.width * t.x1, e.top + e.height * t.y1);
                        t.colorStops.forEach(function(t) {
                            n.addColorStop(t.stop, t.color.toString())
                        }),
                        this.rectangle(e.left, e.top, e.width, e.height, n)
                    }
                }
                ,
                s.prototype.resizeImage = function(t, e) {
                    var n = t.image;
                    if (n.width === e.width && n.height === e.height)
                        return n;
                    var r = document.createElement("canvas");
                    return r.width = e.width,
                    r.height = e.height,
                    r.getContext("2d").drawImage(n, 0, 0, n.width, n.height, 0, 0, e.width, e.height),
                    r
                }
                ,
                e.exports = s
            }
            , {
                "../lineargradientcontainer": 12,
                "../log": 13,
                "../renderer": 19
            }],
            21: [function(t, e, n) {
                var r = t("./nodecontainer");
                function i(t, e, n, i) {
                    r.call(this, n, i),
                    this.ownStacking = t,
                    this.contexts = [],
                    this.children = [],
                    this.opacity = (this.parent ? this.parent.stack.opacity : 1) * e
                }
                i.prototype = Object.create(r.prototype),
                i.prototype.getParentStack = function(t) {
                    var e = this.parent ? this.parent.stack : null;
                    return e ? e.ownStacking ? e : e.getParentStack(t) : t.stack
                }
                ,
                e.exports = i
            }
            , {
                "./nodecontainer": 14
            }],
            22: [function(t, e, n) {
                function r(t) {
                    this.rangeBounds = this.testRangeBounds(t),
                    this.cors = this.testCORS(),
                    this.svg = this.testSVG()
                }
                r.prototype.testRangeBounds = function(t) {
                    var e, n, r = !1;
                    return t.createRange && (e = t.createRange()).getBoundingClientRect && ((n = t.createElement("boundtest")).style.height = "123px",
                    n.style.display = "block",
                    t.body.appendChild(n),
                    e.selectNode(n),
                    123 === e.getBoundingClientRect().height && (r = !0),
                    t.body.removeChild(n)),
                    r
                }
                ,
                r.prototype.testCORS = function() {
                    return void 0 !== (new Image).crossOrigin
                }
                ,
                r.prototype.testSVG = function() {
                    var t = new Image
                      , e = document.createElement("canvas")
                      , n = e.getContext("2d");
                    t.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                    try {
                        n.drawImage(t, 0, 0),
                        e.toDataURL()
                    } catch (t) {
                        return !1
                    }
                    return !0
                }
                ,
                e.exports = r
            }
            , {}],
            23: [function(t, e, n) {
                var r = t("./xhr")
                  , i = t("./utils").decode64;
                function o(t) {
                    this.src = t,
                    this.image = null;
                    var e = this;
                    this.promise = this.hasFabric().then(function() {
                        return e.isInline(t) ? Promise.resolve(e.inlineFormatting(t)) : r(t)
                    }).then(function(t) {
                        return new Promise(function(n) {
                            window.html2canvas.svg.fabric.loadSVGFromString(t, e.createCanvas.call(e, n))
                        }
                        )
                    })
                }
                o.prototype.hasFabric = function() {
                    return window.html2canvas.svg && window.html2canvas.svg.fabric ? Promise.resolve() : Promise.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg"))
                }
                ,
                o.prototype.inlineFormatting = function(t) {
                    return /^data:image\/svg\+xml;base64,/.test(t) ? this.decode64(this.removeContentType(t)) : this.removeContentType(t)
                }
                ,
                o.prototype.removeContentType = function(t) {
                    return t.replace(/^data:image\/svg\+xml(;base64)?,/, "")
                }
                ,
                o.prototype.isInline = function(t) {
                    return /^data:image\/svg\+xml/i.test(t)
                }
                ,
                o.prototype.createCanvas = function(t) {
                    var e = this;
                    return function(n, r) {
                        var i = new window.html2canvas.svg.fabric.StaticCanvas("c");
                        e.image = i.lowerCanvasEl,
                        i.setWidth(r.width).setHeight(r.height).add(window.html2canvas.svg.fabric.util.groupSVGElements(n, r)).renderAll(),
                        t(i.lowerCanvasEl)
                    }
                }
                ,
                o.prototype.decode64 = function(t) {
                    return "function" == typeof window.atob ? window.atob(t) : i(t)
                }
                ,
                e.exports = o
            }
            , {
                "./utils": 26,
                "./xhr": 28
            }],
            24: [function(t, e, n) {
                var r = t("./svgcontainer");
                function i(t, e) {
                    this.src = t,
                    this.image = null;
                    var n = this;
                    this.promise = e ? new Promise(function(e, r) {
                        n.image = new Image,
                        n.image.onload = e,
                        n.image.onerror = r,
                        n.image.src = "data:image/svg+xml," + (new XMLSerializer).serializeToString(t),
                        !0 === n.image.complete && e(n.image)
                    }
                    ) : this.hasFabric().then(function() {
                        return new Promise(function(e) {
                            window.html2canvas.svg.fabric.parseSVGDocument(t, n.createCanvas.call(n, e))
                        }
                        )
                    })
                }
                i.prototype = Object.create(r.prototype),
                e.exports = i
            }
            , {
                "./svgcontainer": 23
            }],
            25: [function(t, e, n) {
                var r = t("./nodecontainer");
                function i(t, e) {
                    r.call(this, t, e)
                }
                function o(t, e, n) {
                    if (t.length > 0)
                        return e + n.toUpperCase()
                }
                i.prototype = Object.create(r.prototype),
                i.prototype.applyTextTransform = function() {
                    this.node.data = this.transform(this.parent.css("textTransform"))
                }
                ,
                i.prototype.transform = function(t) {
                    var e = this.node.data;
                    switch (t) {
                    case "lowercase":
                        return e.toLowerCase();
                    case "capitalize":
                        return e.replace(/(^|\s|:|-|\(|\))([a-z])/g, o);
                    case "uppercase":
                        return e.toUpperCase();
                    default:
                        return e
                    }
                }
                ,
                e.exports = i
            }
            , {
                "./nodecontainer": 14
            }],
            26: [function(t, e, n) {
                n.smallImage = function() {
                    return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                }
                ,
                n.bind = function(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                }
                ,
                n.decode64 = function(t) {
                    var e, n, r, i, o, s, a, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = t.length, u = "";
                    for (e = 0; e < l; e += 4)
                        o = c.indexOf(t[e]) << 2 | (n = c.indexOf(t[e + 1])) >> 4,
                        s = (15 & n) << 4 | (r = c.indexOf(t[e + 2])) >> 2,
                        a = (3 & r) << 6 | (i = c.indexOf(t[e + 3])),
                        u += 64 === r ? String.fromCharCode(o) : 64 === i || -1 === i ? String.fromCharCode(o, s) : String.fromCharCode(o, s, a);
                    return u
                }
                ,
                n.getBounds = function(t) {
                    if (t.getBoundingClientRect) {
                        var e = t.getBoundingClientRect()
                          , n = null == t.offsetWidth ? e.width : t.offsetWidth;
                        return {
                            top: e.top,
                            bottom: e.bottom || e.top + e.height,
                            right: e.left + n,
                            left: e.left,
                            width: n,
                            height: null == t.offsetHeight ? e.height : t.offsetHeight
                        }
                    }
                    return {}
                }
                ,
                n.offsetBounds = function(t) {
                    var e = t.offsetParent ? n.offsetBounds(t.offsetParent) : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: t.offsetTop + e.top,
                        bottom: t.offsetTop + t.offsetHeight + e.top,
                        right: t.offsetLeft + e.left + t.offsetWidth,
                        left: t.offsetLeft + e.left,
                        width: t.offsetWidth,
                        height: t.offsetHeight
                    }
                }
                ,
                n.parseBackgrounds = function(t) {
                    var e, n, r, i, o, s, a, c = [], l = 0, u = 0, h = function() {
                        e && ('"' === n.substr(0, 1) && (n = n.substr(1, n.length - 2)),
                        n && a.push(n),
                        "-" === e.substr(0, 1) && (i = e.indexOf("-", 1) + 1) > 0 && (r = e.substr(0, i),
                        e = e.substr(i)),
                        c.push({
                            prefix: r,
                            method: e.toLowerCase(),
                            value: o,
                            args: a,
                            image: null
                        })),
                        a = [],
                        e = r = n = o = ""
                    };
                    return a = [],
                    e = r = n = o = "",
                    t.split("").forEach(function(t) {
                        if (!(0 === l && " \r\n\t".indexOf(t) > -1)) {
                            switch (t) {
                            case '"':
                                s ? s === t && (s = null) : s = t;
                                break;
                            case "(":
                                if (s)
                                    break;
                                if (0 === l)
                                    return l = 1,
                                    void (o += t);
                                u++;
                                break;
                            case ")":
                                if (s)
                                    break;
                                if (1 === l) {
                                    if (0 === u)
                                        return l = 0,
                                        o += t,
                                        void h();
                                    u--
                                }
                                break;
                            case ",":
                                if (s)
                                    break;
                                if (0 === l)
                                    return void h();
                                if (1 === l && 0 === u && !e.match(/^url$/i))
                                    return a.push(n),
                                    n = "",
                                    void (o += t)
                            }
                            o += t,
                            0 === l ? e += t : n += t
                        }
                    }),
                    h(),
                    c
                }
            }
            , {}],
            27: [function(t, e, n) {
                var r = t("./gradientcontainer");
                function i(t) {
                    r.apply(this, arguments),
                    this.type = "linear" === t.args[0] ? r.TYPES.LINEAR : r.TYPES.RADIAL
                }
                i.prototype = Object.create(r.prototype),
                e.exports = i
            }
            , {
                "./gradientcontainer": 9
            }],
            28: [function(t, e, n) {
                e.exports = function(t) {
                    return new Promise(function(e, n) {
                        var r = new XMLHttpRequest;
                        r.open("GET", t),
                        r.onload = function() {
                            200 === r.status ? e(r.responseText) : n(new Error(r.statusText))
                        }
                        ,
                        r.onerror = function() {
                            n(new Error("Network Error"))
                        }
                        ,
                        r.send()
                    }
                    )
                }
            }
            , {}]
        }, {}, [4])(4)
    }),
    function(t) {
        var e;
        e = function() {
            var e, n, r;
            function i(t) {
                var e, n, r, i, o, s, a, c, l, u, h, f, d, p;
                for (this.data = t,
                this.pos = 8,
                this.palette = [],
                this.imgData = [],
                this.transparency = {},
                this.animation = null,
                this.text = {},
                s = null; ; ) {
                    switch (e = this.readUInt32(),
                    l = function() {
                        var t, e;
                        for (e = [],
                        t = 0; t < 4; ++t)
                            e.push(String.fromCharCode(this.data[this.pos++]));
                        return e
                    }
                    .call(this).join("")) {
                    case "IHDR":
                        this.width = this.readUInt32(),
                        this.height = this.readUInt32(),
                        this.bits = this.data[this.pos++],
                        this.colorType = this.data[this.pos++],
                        this.compressionMethod = this.data[this.pos++],
                        this.filterMethod = this.data[this.pos++],
                        this.interlaceMethod = this.data[this.pos++];
                        break;
                    case "acTL":
                        this.animation = {
                            numFrames: this.readUInt32(),
                            numPlays: this.readUInt32() || 1 / 0,
                            frames: []
                        };
                        break;
                    case "PLTE":
                        this.palette = this.read(e);
                        break;
                    case "fcTL":
                        s && this.animation.frames.push(s),
                        this.pos += 4,
                        s = {
                            width: this.readUInt32(),
                            height: this.readUInt32(),
                            xOffset: this.readUInt32(),
                            yOffset: this.readUInt32()
                        },
                        o = this.readUInt16(),
                        i = this.readUInt16() || 100,
                        s.delay = 1e3 * o / i,
                        s.disposeOp = this.data[this.pos++],
                        s.blendOp = this.data[this.pos++],
                        s.data = [];
                        break;
                    case "IDAT":
                    case "fdAT":
                        for ("fdAT" === l && (this.pos += 4,
                        e -= 4),
                        t = (null != s ? s.data : void 0) || this.imgData,
                        f = 0; 0 <= e ? f < e : f > e; 0 <= e ? ++f : --f)
                            t.push(this.data[this.pos++]);
                        break;
                    case "tRNS":
                        switch (this.transparency = {},
                        this.colorType) {
                        case 3:
                            if (r = this.palette.length / 3,
                            this.transparency.indexed = this.read(e),
                            this.transparency.indexed.length > r)
                                throw new Error("More transparent colors than palette size");
                            if ((u = r - this.transparency.indexed.length) > 0)
                                for (d = 0; 0 <= u ? d < u : d > u; 0 <= u ? ++d : --d)
                                    this.transparency.indexed.push(255);
                            break;
                        case 0:
                            this.transparency.grayscale = this.read(e)[0];
                            break;
                        case 2:
                            this.transparency.rgb = this.read(e)
                        }
                        break;
                    case "tEXt":
                        a = (h = this.read(e)).indexOf(0),
                        c = String.fromCharCode.apply(String, h.slice(0, a)),
                        this.text[c] = String.fromCharCode.apply(String, h.slice(a + 1));
                        break;
                    case "IEND":
                        return s && this.animation.frames.push(s),
                        this.colors = function() {
                            switch (this.colorType) {
                            case 0:
                            case 3:
                            case 4:
                                return 1;
                            case 2:
                            case 6:
                                return 3
                            }
                        }
                        .call(this),
                        this.hasAlphaChannel = 4 === (p = this.colorType) || 6 === p,
                        n = this.colors + (this.hasAlphaChannel ? 1 : 0),
                        this.pixelBitlength = this.bits * n,
                        this.colorSpace = function() {
                            switch (this.colors) {
                            case 1:
                                return "DeviceGray";
                            case 3:
                                return "DeviceRGB"
                            }
                        }
                        .call(this),
                        void (this.imgData = new Uint8Array(this.imgData));
                    default:
                        this.pos += e
                    }
                    if (this.pos += 4,
                    this.pos > this.data.length)
                        throw new Error("Incomplete or corrupt PNG file")
                }
            }
            i.load = function(t, e, n) {
                var r;
                return "function" == typeof e && (n = e),
                (r = new XMLHttpRequest).open("GET", t, !0),
                r.responseType = "arraybuffer",
                r.onload = function() {
                    var t;
                    return t = new i(new Uint8Array(r.response || r.mozResponseArrayBuffer)),
                    "function" == typeof (null != e ? e.getContext : void 0) && t.render(e),
                    "function" == typeof n ? n(t) : void 0
                }
                ,
                r.send(null)
            }
            ,
            i.prototype.read = function(t) {
                var e, n;
                for (n = [],
                e = 0; 0 <= t ? e < t : e > t; 0 <= t ? ++e : --e)
                    n.push(this.data[this.pos++]);
                return n
            }
            ,
            i.prototype.readUInt32 = function() {
                return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++]
            }
            ,
            i.prototype.readUInt16 = function() {
                return this.data[this.pos++] << 8 | this.data[this.pos++]
            }
            ,
            i.prototype.decodePixels = function(t) {
                var e, n, r, i, o, s, a, c, l, u, h, f, d, p, g, m, w, y, v, b, x, k, _;
                if (null == t && (t = this.imgData),
                0 === t.length)
                    return new Uint8Array(0);
                for (t = (t = new I(t)).getBytes(),
                m = (f = this.pixelBitlength / 8) * this.width,
                d = new Uint8Array(m * this.height),
                s = t.length,
                g = 0,
                p = 0,
                n = 0; p < s; ) {
                    switch (t[p++]) {
                    case 0:
                        for (i = v = 0; v < m; i = v += 1)
                            d[n++] = t[p++];
                        break;
                    case 1:
                        for (i = b = 0; b < m; i = b += 1)
                            e = t[p++],
                            o = i < f ? 0 : d[n - f],
                            d[n++] = (e + o) % 256;
                        break;
                    case 2:
                        for (i = x = 0; x < m; i = x += 1)
                            e = t[p++],
                            r = (i - i % f) / f,
                            w = g && d[(g - 1) * m + r * f + i % f],
                            d[n++] = (w + e) % 256;
                        break;
                    case 3:
                        for (i = k = 0; k < m; i = k += 1)
                            e = t[p++],
                            r = (i - i % f) / f,
                            o = i < f ? 0 : d[n - f],
                            w = g && d[(g - 1) * m + r * f + i % f],
                            d[n++] = (e + Math.floor((o + w) / 2)) % 256;
                        break;
                    case 4:
                        for (i = _ = 0; _ < m; i = _ += 1)
                            e = t[p++],
                            r = (i - i % f) / f,
                            o = i < f ? 0 : d[n - f],
                            0 === g ? w = y = 0 : (w = d[(g - 1) * m + r * f + i % f],
                            y = r && d[(g - 1) * m + (r - 1) * f + i % f]),
                            a = o + w - y,
                            c = Math.abs(a - o),
                            u = Math.abs(a - w),
                            h = Math.abs(a - y),
                            l = c <= u && c <= h ? o : u <= h ? w : y,
                            d[n++] = (e + l) % 256;
                        break;
                    default:
                        throw new Error("Invalid filter algorithm: " + t[p - 1])
                    }
                    g++
                }
                return d
            }
            ,
            i.prototype.decodePalette = function() {
                var t, e, n, r, i, o, s, a, c;
                for (n = this.palette,
                o = this.transparency.indexed || [],
                i = new Uint8Array((o.length || 0) + n.length),
                r = 0,
                n.length,
                t = 0,
                e = s = 0,
                a = n.length; s < a; e = s += 3)
                    i[r++] = n[e],
                    i[r++] = n[e + 1],
                    i[r++] = n[e + 2],
                    i[r++] = null != (c = o[t++]) ? c : 255;
                return i
            }
            ,
            i.prototype.copyToImageData = function(t, e) {
                var n, r, i, o, s, a, c, l, u, h, f;
                if (r = this.colors,
                u = null,
                n = this.hasAlphaChannel,
                this.palette.length && (u = null != (f = this._decodedPalette) ? f : this._decodedPalette = this.decodePalette(),
                r = 4,
                n = !0),
                l = (i = t.data || t).length,
                s = u || e,
                o = a = 0,
                1 === r)
                    for (; o < l; )
                        c = u ? 4 * e[o / 4] : a,
                        h = s[c++],
                        i[o++] = h,
                        i[o++] = h,
                        i[o++] = h,
                        i[o++] = n ? s[c++] : 255,
                        a = c;
                else
                    for (; o < l; )
                        c = u ? 4 * e[o / 4] : a,
                        i[o++] = s[c++],
                        i[o++] = s[c++],
                        i[o++] = s[c++],
                        i[o++] = n ? s[c++] : 255,
                        a = c
            }
            ,
            i.prototype.decode = function() {
                var t;
                return t = new Uint8Array(this.width * this.height * 4),
                this.copyToImageData(t, this.decodePixels()),
                t
            }
            ;
            try {
                n = t.document.createElement("canvas"),
                r = n.getContext("2d")
            } catch (t) {
                return -1
            }
            return e = function(t) {
                var e;
                return r.width = t.width,
                r.height = t.height,
                r.clearRect(0, 0, t.width, t.height),
                r.putImageData(t, 0, 0),
                (e = new Image).src = n.toDataURL(),
                e
            }
            ,
            i.prototype.decodeFrames = function(t) {
                var n, r, i, o, s, a, c, l;
                if (this.animation) {
                    for (l = [],
                    r = s = 0,
                    a = (c = this.animation.frames).length; s < a; r = ++s)
                        n = c[r],
                        i = t.createImageData(n.width, n.height),
                        o = this.decodePixels(new Uint8Array(n.data)),
                        this.copyToImageData(i, o),
                        n.imageData = i,
                        l.push(n.image = e(i));
                    return l
                }
            }
            ,
            i.prototype.renderFrame = function(t, e) {
                var n, r, i;
                return n = (r = this.animation.frames)[e],
                i = r[e - 1],
                0 === e && t.clearRect(0, 0, this.width, this.height),
                1 === (null != i ? i.disposeOp : void 0) ? t.clearRect(i.xOffset, i.yOffset, i.width, i.height) : 2 === (null != i ? i.disposeOp : void 0) && t.putImageData(i.imageData, i.xOffset, i.yOffset),
                0 === n.blendOp && t.clearRect(n.xOffset, n.yOffset, n.width, n.height),
                t.drawImage(n.image, n.xOffset, n.yOffset)
            }
            ,
            i.prototype.animate = function(t) {
                var e, n, r, i, o, s, a = this;
                return n = 0,
                s = this.animation,
                i = s.numFrames,
                r = s.frames,
                o = s.numPlays,
                (e = function() {
                    var s, c;
                    if (s = n++ % i,
                    c = r[s],
                    a.renderFrame(t, s),
                    i > 1 && n / i < o)
                        return a.animation._timeout = setTimeout(e, c.delay)
                }
                )()
            }
            ,
            i.prototype.stopAnimation = function() {
                var t;
                return clearTimeout(null != (t = this.animation) ? t._timeout : void 0)
            }
            ,
            i.prototype.render = function(t) {
                var e, n;
                return t._png && t._png.stopAnimation(),
                t._png = this,
                t.width = this.width,
                t.height = this.height,
                e = t.getContext("2d"),
                this.animation ? (this.decodeFrames(e),
                this.animate(e)) : (n = e.createImageData(this.width, this.height),
                this.copyToImageData(n, this.decodePixels()),
                e.putImageData(n, 0, 0))
            }
            ,
            i
        }(),
        t.PNG = e
    }("undefined" != typeof window && window || void 0);
    var T = function() {
        function t() {
            this.pos = 0,
            this.bufferLength = 0,
            this.eof = !1,
            this.buffer = null
        }
        return t.prototype = {
            ensureBuffer: function(t) {
                var e = this.buffer
                  , n = e ? e.byteLength : 0;
                if (t < n)
                    return e;
                for (var r = 512; r < t; )
                    r <<= 1;
                for (var i = new Uint8Array(r), o = 0; o < n; ++o)
                    i[o] = e[o];
                return this.buffer = i
            },
            getByte: function() {
                for (var t = this.pos; this.bufferLength <= t; ) {
                    if (this.eof)
                        return null;
                    this.readBlock()
                }
                return this.buffer[this.pos++]
            },
            getBytes: function(t) {
                var e = this.pos;
                if (t) {
                    this.ensureBuffer(e + t);
                    for (var n = e + t; !this.eof && this.bufferLength < n; )
                        this.readBlock();
                    var r = this.bufferLength;
                    n > r && (n = r)
                } else {
                    for (; !this.eof; )
                        this.readBlock();
                    n = this.bufferLength
                }
                return this.pos = n,
                this.buffer.subarray(e, n)
            },
            lookChar: function() {
                for (var t = this.pos; this.bufferLength <= t; ) {
                    if (this.eof)
                        return null;
                    this.readBlock()
                }
                return String.fromCharCode(this.buffer[this.pos])
            },
            getChar: function() {
                for (var t = this.pos; this.bufferLength <= t; ) {
                    if (this.eof)
                        return null;
                    this.readBlock()
                }
                return String.fromCharCode(this.buffer[this.pos++])
            },
            makeSubStream: function(t, e, n) {
                for (var r = t + e; this.bufferLength <= r && !this.eof; )
                    this.readBlock();
                return new Stream(this.buffer,t,e,n)
            },
            skip: function(t) {
                t || (t = 1),
                this.pos += t
            },
            reset: function() {
                this.pos = 0
            }
        },
        t
    }()
      , I = function() {
        if ("undefined" != typeof Uint32Array) {
            var t = new Uint32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
              , e = new Uint32Array([3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095, 131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243, 262259, 327811, 327843, 327875, 327907, 258, 258, 258])
              , n = new Uint32Array([1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177, 262193, 327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057, 590849, 591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353, 876545])
              , r = [new Uint32Array([459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016, 459016, 524384, 524320, 589984, 524288, 524416, 524352, 590048, 459012, 524376, 524312, 589968, 459028, 524408, 524344, 590032, 459020, 524392, 524328, 59e4, 524296, 524424, 524360, 590064, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590024, 459018, 524388, 524324, 589992, 524292, 524420, 524356, 590056, 459014, 524380, 524316, 589976, 459030, 524412, 524348, 590040, 459022, 524396, 524332, 590008, 524300, 524428, 524364, 590072, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020, 459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013, 524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021, 524394, 524330, 590004, 524298, 524426, 524362, 590068, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590028, 459019, 524390, 524326, 589996, 524294, 524422, 524358, 590060, 459015, 524382, 524318, 589980, 459031, 524414, 524350, 590044, 459023, 524398, 524334, 590012, 524302, 524430, 524366, 590076, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590018, 459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050, 459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020, 524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590026, 459018, 524389, 524325, 589994, 524293, 524421, 524357, 590058, 459014, 524381, 524317, 589978, 459030, 524413, 524349, 590042, 459022, 524397, 524333, 590010, 524301, 524429, 524365, 590074, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590022, 459017, 524387, 524323, 589990, 524291, 524419, 524355, 590054, 459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038, 459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019, 524391, 524327, 589998, 524295, 524423, 524359, 590062, 459015, 524383, 524319, 589982, 459031, 524415, 524351, 590046, 459023, 524399, 524335, 590014, 524303, 524431, 524367, 590078, 459008, 524368, 524304, 524568, 459024, 524400, 524336, 590017, 459016, 524384, 524320, 589985, 524288, 524416, 524352, 590049, 459012, 524376, 524312, 589969, 459028, 524408, 524344, 590033, 459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018, 524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014, 524380, 524316, 589977, 459030, 524412, 524348, 590041, 459022, 524396, 524332, 590009, 524300, 524428, 524364, 590073, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590021, 459017, 524386, 524322, 589989, 524290, 524418, 524354, 590053, 459013, 524378, 524314, 589973, 459029, 524410, 524346, 590037, 459021, 524394, 524330, 590005, 524298, 524426, 524362, 590069, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029, 459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015, 524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023, 524398, 524334, 590013, 524302, 524430, 524366, 590077, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590019, 459016, 524385, 524321, 589987, 524289, 524417, 524353, 590051, 459012, 524377, 524313, 589971, 459028, 524409, 524345, 590035, 459020, 524393, 524329, 590003, 524297, 524425, 524361, 590067, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590027, 459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059, 459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022, 524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590023, 459017, 524387, 524323, 589991, 524291, 524419, 524355, 590055, 459013, 524379, 524315, 589975, 459029, 524411, 524347, 590039, 459021, 524395, 524331, 590007, 524299, 524427, 524363, 590071, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590031, 459019, 524391, 524327, 589999, 524295, 524423, 524359, 590063, 459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047, 459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079]), 9]
              , i = [new Uint32Array([327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708, 327682, 327698, 327690, 327706, 327686, 327702, 327694, 0, 327681, 327697, 327689, 327705, 327685, 327701, 327693, 327709, 327683, 327699, 327691, 327707, 327687, 327703, 327695, 0]), 5];
            return s.prototype = Object.create(T.prototype),
            s.prototype.getBits = function(t) {
                for (var e, n = this.codeSize, r = this.codeBuf, i = this.bytes, s = this.bytesPos; n < t; )
                    void 0 === (e = i[s++]) && o("Bad encoding in flate stream"),
                    r |= e << n,
                    n += 8;
                return e = r & (1 << t) - 1,
                this.codeBuf = r >> t,
                this.codeSize = n -= t,
                this.bytesPos = s,
                e
            }
            ,
            s.prototype.getCode = function(t) {
                for (var e = t[0], n = t[1], r = this.codeSize, i = this.codeBuf, s = this.bytes, a = this.bytesPos; r < n; ) {
                    var c;
                    void 0 === (c = s[a++]) && o("Bad encoding in flate stream"),
                    i |= c << r,
                    r += 8
                }
                var l = e[i & (1 << n) - 1]
                  , u = l >> 16
                  , h = 65535 & l;
                return (0 == r || r < u || 0 == u) && o("Bad encoding in flate stream"),
                this.codeBuf = i >> u,
                this.codeSize = r - u,
                this.bytesPos = a,
                h
            }
            ,
            s.prototype.generateHuffmanTable = function(t) {
                for (var e = t.length, n = 0, r = 0; r < e; ++r)
                    t[r] > n && (n = t[r]);
                for (var i = 1 << n, o = new Uint32Array(i), s = 1, a = 0, c = 2; s <= n; ++s,
                a <<= 1,
                c <<= 1)
                    for (var l = 0; l < e; ++l)
                        if (t[l] == s) {
                            var u = 0
                              , h = a;
                            for (r = 0; r < s; ++r)
                                u = u << 1 | 1 & h,
                                h >>= 1;
                            for (r = u; r < i; r += c)
                                o[r] = s << 16 | l;
                            ++a
                        }
                return [o, n]
            }
            ,
            s.prototype.readBlock = function() {
                function s(t, e, n, r, i) {
                    for (var o = t.getBits(n) + r; o-- > 0; )
                        e[p++] = i
                }
                var a = this.getBits(3);
                if (1 & a && (this.eof = !0),
                0 != (a >>= 1)) {
                    var c, l;
                    if (1 == a)
                        c = r,
                        l = i;
                    else if (2 == a) {
                        for (var u = this.getBits(5) + 257, h = this.getBits(5) + 1, f = this.getBits(4) + 4, d = Array(t.length), p = 0; p < f; )
                            d[t[p++]] = this.getBits(3);
                        for (var g = this.generateHuffmanTable(d), m = 0, w = (p = 0,
                        u + h), y = new Array(w); p < w; ) {
                            var v = this.getCode(g);
                            16 == v ? s(this, y, 2, 3, m) : 17 == v ? s(this, y, 3, 3, m = 0) : 18 == v ? s(this, y, 7, 11, m = 0) : y[p++] = m = v
                        }
                        c = this.generateHuffmanTable(y.slice(0, u)),
                        l = this.generateHuffmanTable(y.slice(u, w))
                    } else
                        o("Unknown block type in flate stream");
                    for (var b = (O = this.buffer) ? O.length : 0, x = this.bufferLength; ; ) {
                        var k = this.getCode(c);
                        if (k < 256)
                            x + 1 >= b && (b = (O = this.ensureBuffer(x + 1)).length),
                            O[x++] = k;
                        else {
                            if (256 == k)
                                return void (this.bufferLength = x);
                            var _ = (k = e[k -= 257]) >> 16;
                            _ > 0 && (_ = this.getBits(_));
                            m = (65535 & k) + _;
                            k = this.getCode(l),
                            (_ = (k = n[k]) >> 16) > 0 && (_ = this.getBits(_));
                            var C = (65535 & k) + _;
                            x + m >= b && (b = (O = this.ensureBuffer(x + m)).length);
                            for (var A = 0; A < m; ++A,
                            ++x)
                                O[x] = O[x - C]
                        }
                    }
                } else {
                    var S, q = this.bytes, T = this.bytesPos;
                    void 0 === (S = q[T++]) && o("Bad block header in flate stream");
                    var I = S;
                    void 0 === (S = q[T++]) && o("Bad block header in flate stream"),
                    I |= S << 8,
                    void 0 === (S = q[T++]) && o("Bad block header in flate stream");
                    var P = S;
                    void 0 === (S = q[T++]) && o("Bad block header in flate stream"),
                    (P |= S << 8) != (65535 & ~I) && o("Bad uncompressed block length in flate stream"),
                    this.codeBuf = 0,
                    this.codeSize = 0;
                    var E = this.bufferLength
                      , O = this.ensureBuffer(E + I)
                      , F = E + I;
                    this.bufferLength = F;
                    for (var R = E; R < F; ++R) {
                        if (void 0 === (S = q[T++])) {
                            this.eof = !0;
                            break
                        }
                        O[R] = S
                    }
                    this.bytesPos = T
                }
            }
            ,
            s
        }
        function o(t) {
            throw new Error(t)
        }
        function s(t) {
            var e = 0
              , n = t[e++]
              , r = t[e++];
            -1 != n && -1 != r || o("Invalid header in flate stream"),
            8 != (15 & n) && o("Unknown compression method in flate stream"),
            ((n << 8) + r) % 31 != 0 && o("Bad FCHECK in flate stream"),
            32 & r && o("FDICT bit set in flate stream"),
            this.bytes = t,
            this.bytesPos = 2,
            this.codeSize = 0,
            this.codeBuf = 0,
            T.call(this)
        }
    }();
    return function(t) {
        var e, n, r, i, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        void 0 === t.btoa && (t.btoa = function(t) {
            var e, n, r, i, s, a = 0, c = 0, l = "", u = [];
            if (!t)
                return t;
            do {
                e = (s = t.charCodeAt(a++) << 16 | t.charCodeAt(a++) << 8 | t.charCodeAt(a++)) >> 18 & 63,
                n = s >> 12 & 63,
                r = s >> 6 & 63,
                i = 63 & s,
                u[c++] = o.charAt(e) + o.charAt(n) + o.charAt(r) + o.charAt(i)
            } while (a < t.length);
            l = u.join("");
            var h = t.length % 3;
            return (h ? l.slice(0, h - 3) : l) + "===".slice(h || 3)
        }
        ),
        void 0 === t.atob && (t.atob = function(t) {
            var e, n, r, i, s, a, c = 0, l = 0, u = [];
            if (!t)
                return t;
            t += "";
            do {
                e = (a = o.indexOf(t.charAt(c++)) << 18 | o.indexOf(t.charAt(c++)) << 12 | (i = o.indexOf(t.charAt(c++))) << 6 | (s = o.indexOf(t.charAt(c++)))) >> 16 & 255,
                n = a >> 8 & 255,
                r = 255 & a,
                u[l++] = 64 == i ? String.fromCharCode(e) : 64 == s ? String.fromCharCode(e, n) : String.fromCharCode(e, n, r)
            } while (c < t.length);
            return u.join("")
        }
        ),
        Array.prototype.map || (Array.prototype.map = function(t) {
            if (null == this || "function" != typeof t)
                throw new TypeError;
            for (var e = Object(this), n = e.length >>> 0, r = new Array(n), i = arguments.length > 1 ? arguments[1] : void 0, o = 0; o < n; o++)
                o in e && (r[o] = t.call(i, e[o], o, e));
            return r
        }
        ),
        Array.isArray || (Array.isArray = function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }
        ),
        Array.prototype.forEach || (Array.prototype.forEach = function(t, e) {
            if (null == this || "function" != typeof t)
                throw new TypeError;
            for (var n = Object(this), r = n.length >>> 0, i = 0; i < r; i++)
                i in n && t.call(e, n[i], i, n)
        }
        ),
        Object.keys || (Object.keys = (e = Object.prototype.hasOwnProperty,
        n = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        i = (r = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]).length,
        function(t) {
            if ("object" != typeof t && ("function" != typeof t || null === t))
                throw new TypeError;
            var o, s, a = [];
            for (o in t)
                e.call(t, o) && a.push(o);
            if (n)
                for (s = 0; s < i; s++)
                    e.call(t, r[s]) && a.push(r[s]);
            return a
        }
        )),
        String.prototype.trim || (String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, "")
        }
        ),
        String.prototype.trimLeft || (String.prototype.trimLeft = function() {
            return this.replace(/^\s+/g, "")
        }
        ),
        String.prototype.trimRight || (String.prototype.trimRight = function() {
            return this.replace(/\s+$/g, "")
        }
        )
    }("undefined" != typeof self && self || "undefined" != typeof window && window || void 0),
    e = e
});

/*----------------------------------------------
    html2canvas
----------------------------------------------*/

/*!
 * html2canvas 1.3.2 <https://html2canvas.hertzen.com>
 * Copyright (c) 2021 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
!function(A, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (A = "undefined" != typeof globalThis ? globalThis : A || self).html2canvas = e()
}(this, function() {
    "use strict";
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    var A, e, t, B, r, n = function(A, e) {
        return (n = Object.setPrototypeOf || ({
            __proto__: []
        })instanceof Array && function(A, e) {
            A.__proto__ = e
        }
        || function(A, e) {
            for (var t in e)
                Object.prototype.hasOwnProperty.call(e, t) && (A[t] = e[t])
        }
        )(A, e)
    };
    function s(A, e) {
        if ("function" != typeof e && null !== e)
            throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
        function t() {
            this.constructor = A
        }
        n(A, e),
        A.prototype = null === e ? Object.create(e) : (t.prototype = e.prototype,
        new t)
    }
    var o = function() {
        return (o = Object.assign || function A(e) {
            for (var t, B = 1, r = arguments.length; B < r; B++)
                for (var n in t = arguments[B])
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }
        ).apply(this, arguments)
    };
    function i(A, e, t, B) {
        return new (t || (t = Promise))(function(r, n) {
            function s(A) {
                try {
                    i(B.next(A))
                } catch (e) {
                    n(e)
                }
            }
            function o(A) {
                try {
                    i(B.throw(A))
                } catch (e) {
                    n(e)
                }
            }
            function i(A) {
                var e;
                A.done ? r(A.value) : ((e = A.value)instanceof t ? e : new t(function(A) {
                    A(e)
                }
                )).then(s, o)
            }
            i((B = B.apply(A, e || [])).next())
        }
        )
    }
    function Q(A, e) {
        var t, B, r, n, s = {
            label: 0,
            sent: function() {
                if (1 & r[0])
                    throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return n = {
            next: o(0),
            throw: o(1),
            return: o(2)
        },
        "function" == typeof Symbol && (n[Symbol.iterator] = function() {
            return this
        }
        ),
        n;
        function o(n) {
            return function(o) {
                return function n(o) {
                    if (t)
                        throw TypeError("Generator is already executing.");
                    for (; s; )
                        try {
                            if (t = 1,
                            B && (r = 2 & o[0] ? B.return : o[0] ? B.throw || ((r = B.return) && r.call(B),
                            0) : B.next) && !(r = r.call(B, o[1])).done)
                                return r;
                            switch (B = 0,
                            r && (o = [2 & o[0], r.value]),
                            o[0]) {
                            case 0:
                            case 1:
                                r = o;
                                break;
                            case 4:
                                return s.label++,
                                {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                s.label++,
                                B = o[1],
                                o = [0];
                                continue;
                            case 7:
                                o = s.ops.pop(),
                                s.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                    s.label = o[1];
                                    break
                                }
                                if (6 === o[0] && s.label < r[1]) {
                                    s.label = r[1],
                                    r = o;
                                    break
                                }
                                if (r && s.label < r[2]) {
                                    s.label = r[2],
                                    s.ops.push(o);
                                    break
                                }
                                r[2] && s.ops.pop(),
                                s.trys.pop();
                                continue
                            }
                            o = e.call(A, s)
                        } catch (i) {
                            o = [6, i],
                            B = 0
                        } finally {
                            t = r = 0
                        }
                    if (5 & o[0])
                        throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([n, o])
            }
        }
    }
    function c(A, e, t) {
        if (t || 2 === arguments.length)
            for (var B, r = 0, n = e.length; r < n; r++)
                !B && r in e || (B || (B = Array.prototype.slice.call(e, 0, r)),
                B[r] = e[r]);
        return A.concat(B || e)
    }
    for (var a = function() {
        function A(A, e, t, B) {
            this.left = A,
            this.top = e,
            this.width = t,
            this.height = B
        }
        return A.prototype.add = function(e, t, B, r) {
            return new A(this.left + e,this.top + t,this.width + B,this.height + r)
        }
        ,
        A.fromClientRect = function(e, t) {
            return new A(t.left + e.windowBounds.left,t.top + e.windowBounds.top,t.width,t.height)
        }
        ,
        A.fromDOMRectList = function(e, t) {
            var B = t[0];
            return B ? new A(B.x + e.windowBounds.left,B.y + e.windowBounds.top,B.width,B.height) : A.EMPTY
        }
        ,
        A.EMPTY = new A(0,0,0,0),
        A
    }(), g = function(A, e) {
        return a.fromClientRect(A, e.getBoundingClientRect())
    }, w = function(A) {
        var e = A.body
          , t = A.documentElement;
        if (!e || !t)
            throw Error("Unable to get document size");
        var B = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth))
          , r = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
        return new a(0,0,B,r)
    }, U = function(A) {
        for (var e = [], t = 0, B = A.length; t < B; ) {
            var r = A.charCodeAt(t++);
            if (r >= 55296 && r <= 56319 && t < B) {
                var n = A.charCodeAt(t++);
                (64512 & n) == 56320 ? e.push(((1023 & r) << 10) + (1023 & n) + 65536) : (e.push(r),
                t--)
            } else
                e.push(r)
        }
        return e
    }, C = function() {
        for (var A = [], e = 0; e < arguments.length; e++)
            A[e] = arguments[e];
        if (String.fromCodePoint)
            return String.fromCodePoint.apply(String, A);
        var t = A.length;
        if (!t)
            return "";
        for (var B = [], r = -1, n = ""; ++r < t; ) {
            var s = A[r];
            s <= 65535 ? B.push(s) : (s -= 65536,
            B.push((s >> 10) + 55296, s % 1024 + 56320)),
            (r + 1 === t || B.length > 16384) && (n += String.fromCharCode.apply(String, B),
            B.length = 0)
        }
        return n
    }, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), F = 0; F < l.length; F++)
        u[l.charCodeAt(F)] = F;
    var f, $, h, d, H, p, E, I, y = 2112, K = function(A, e, t) {
        return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t))
    }, _ = function() {
        function A(A, e, t, B, r, n) {
            this.initialValue = A,
            this.errorValue = e,
            this.highStart = t,
            this.highValueIndex = B,
            this.index = r,
            this.data = n
        }
        return A.prototype.get = function(A) {
            var e;
            if (A >= 0) {
                if (A < 55296 || A > 56319 && A <= 65535)
                    return e = ((e = this.index[A >> 5]) << 2) + (31 & A),
                    this.data[e];
                if (A <= 65535)
                    return e = ((e = this.index[2048 + (A - 55296 >> 5)]) << 2) + (31 & A),
                    this.data[e];
                if (A < this.highStart)
                    return e = y - 32 + (A >> 11),
                    e = this.index[e],
                    e += A >> 5 & 63,
                    e = ((e = this.index[e]) << 2) + (31 & A),
                    this.data[e];
                if (A <= 1114111)
                    return this.data[this.highValueIndex]
            }
            return this.errorValue
        }
        ,
        A
    }(), x = [9001, 65288], m = "\xd7", L = ($ = Array.isArray(f = function(A) {
        var e, t, B, r, n, s = .75 * A.length, o = A.length, i = 0;
        "=" === A[A.length - 1] && (s--,
        "=" === A[A.length - 2] && s--);
        var Q = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? new ArrayBuffer(s) : Array(s)
          , c = Array.isArray(Q) ? Q : new Uint8Array(Q);
        for (e = 0; e < o; e += 4)
            t = u[A.charCodeAt(e)],
            B = u[A.charCodeAt(e + 1)],
            r = u[A.charCodeAt(e + 2)],
            n = u[A.charCodeAt(e + 3)],
            c[i++] = t << 2 | B >> 4,
            c[i++] = (15 & B) << 4 | r >> 2,
            c[i++] = (3 & r) << 6 | 63 & n;
        return Q
    }("KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==")) ? function(A) {
        for (var e = A.length, t = [], B = 0; B < e; B += 4)
            t.push(A[B + 3] << 24 | A[B + 2] << 16 | A[B + 1] << 8 | A[B]);
        return t
    }(f) : new Uint32Array(f),
    h = Array.isArray(f) ? function(A) {
        for (var e = A.length, t = [], B = 0; B < e; B += 2)
            t.push(A[B + 1] << 8 | A[B]);
        return t
    }(f) : new Uint16Array(f),
    d = K(h, 12, $[4] / 2),
    I = 2 === $[5] ? K(h, (24 + $[4]) / 2) : (H = $,
    p = Math.ceil((24 + $[4]) / 4),
    H.slice ? H.slice(p, E) : new Uint32Array(Array.prototype.slice.call(H, p, E))),
    new _($[0],$[1],$[2],$[3],d,I)), b = [30, 36], v = [1, 2, 3, 5], D = [10, 8], S = [27, 26], G = v.concat(D), T = [38, 39, 40, 34, 35], O = [15, 13], V = function(A, e) {
        void 0 === e && (e = "strict");
        var t = []
          , B = []
          , r = [];
        return A.forEach(function(A, n) {
            var s = L.get(A);
            if (s > 50 ? (r.push(!0),
            s -= 50) : r.push(!1),
            -1 !== ["normal", "auto", "loose"].indexOf(e) && -1 !== [8208, 8211, 12316, 12448].indexOf(A))
                return B.push(n),
                t.push(16);
            if (4 === s || 11 === s) {
                if (0 === n)
                    return B.push(n),
                    t.push(30);
                var o = t[n - 1];
                return -1 === G.indexOf(o) ? (B.push(B[n - 1]),
                t.push(o)) : (B.push(n),
                t.push(30))
            }
            return (B.push(n),
            31 === s) ? t.push("strict" === e ? 21 : 37) : 42 === s || 29 === s ? t.push(30) : 43 === s ? A >= 131072 && A <= 196605 || A >= 196608 && A <= 262141 ? t.push(37) : t.push(30) : void t.push(s)
        }),
        [B, t, r]
    }, M = function(A, e, t, B) {
        var r = B[t];
        if (Array.isArray(A) ? -1 !== A.indexOf(r) : A === r)
            for (var n = t; n <= B.length; ) {
                var s = B[++n];
                if (s === e)
                    return !0;
                if (10 !== s)
                    break
            }
        if (10 === r)
            for (var n = t; n > 0; ) {
                var o = B[--n];
                if (Array.isArray(A) ? -1 !== A.indexOf(o) : A === o)
                    for (var i = t; i <= B.length; ) {
                        var s = B[++i];
                        if (s === e)
                            return !0;
                        if (10 !== s)
                            break
                    }
                if (10 !== o)
                    break
            }
        return !1
    }, k = function(A, e) {
        for (var t = A; t >= 0; ) {
            var B = e[t];
            if (10 !== B)
                return B;
            t--
        }
        return 0
    }, R = function(A, e, t, B, r) {
        if (0 === t[B])
            return m;
        var n = B - 1;
        if (Array.isArray(r) && !0 === r[n])
            return m;
        var s = n - 1
          , o = n + 1
          , i = e[n]
          , Q = s >= 0 ? e[s] : 0
          , c = e[o];
        if (2 === i && 3 === c)
            return m;
        if (-1 !== v.indexOf(i))
            return "!";
        if (-1 !== v.indexOf(c) || -1 !== D.indexOf(c))
            return m;
        if (8 === k(n, e))
            return "\xf7";
        if (11 === L.get(A[n]) || (32 === i || 33 === i) && 11 === L.get(A[o]) || 7 === i || 7 === c || 9 === i || -1 === [10, 13, 15].indexOf(i) && 9 === c || -1 !== [17, 18, 19, 24, 28].indexOf(c) || 22 === k(n, e) || M(23, 22, n, e) || M([17, 18], 21, n, e) || M(12, 12, n, e))
            return m;
        if (10 === i)
            return "\xf7";
        if (23 === i || 23 === c)
            return m;
        if (16 === c || 16 === i)
            return "\xf7";
        if (-1 !== [13, 15, 21].indexOf(c) || 14 === i || 36 === Q && -1 !== O.indexOf(i) || 28 === i && 36 === c || 20 === c || -1 !== b.indexOf(c) && 25 === i || -1 !== b.indexOf(i) && 25 === c || 27 === i && -1 !== [37, 32, 33].indexOf(c) || -1 !== [37, 32, 33].indexOf(i) && 26 === c || -1 !== b.indexOf(i) && -1 !== S.indexOf(c) || -1 !== S.indexOf(i) && -1 !== b.indexOf(c) || -1 !== [27, 26].indexOf(i) && (25 === c || -1 !== [22, 15].indexOf(c) && 25 === e[o + 1]) || -1 !== [22, 15].indexOf(i) && 25 === c || 25 === i && -1 !== [25, 28, 24].indexOf(c))
            return m;
        if (-1 !== [25, 28, 24, 17, 18].indexOf(c))
            for (var a = n; a >= 0; ) {
                var g = e[a];
                if (25 === g)
                    return m;
                if (-1 !== [28, 24].indexOf(g))
                    a--;
                else
                    break
            }
        if (-1 !== [27, 26].indexOf(c))
            for (var a = -1 !== [17, 18].indexOf(i) ? s : n; a >= 0; ) {
                var g = e[a];
                if (25 === g)
                    return m;
                if (-1 !== [28, 24].indexOf(g))
                    a--;
                else
                    break
            }
        if (38 === i && -1 !== [38, 39, 34, 35].indexOf(c) || -1 !== [39, 34].indexOf(i) && -1 !== [39, 40].indexOf(c) || -1 !== [40, 35].indexOf(i) && 40 === c || -1 !== T.indexOf(i) && -1 !== [20, 26].indexOf(c) || -1 !== T.indexOf(c) && 27 === i || -1 !== b.indexOf(i) && -1 !== b.indexOf(c) || 24 === i && -1 !== b.indexOf(c) || -1 !== b.concat(25).indexOf(i) && 22 === c && -1 === x.indexOf(A[o]) || -1 !== b.concat(25).indexOf(c) && 18 === i)
            return m;
        if (41 === i && 41 === c) {
            for (var w = t[n], U = 1; w > 0; )
                if (41 === e[--w])
                    U++;
                else
                    break;
            if (U % 2 != 0)
                return m
        }
        return 32 === i && 33 === c ? m : "\xf7"
    }, N = function(A, e) {
        e || (e = {
            lineBreak: "normal",
            wordBreak: "normal"
        });
        var t = V(A, e.lineBreak)
          , B = t[0]
          , r = t[1]
          , n = t[2];
        return ("break-all" === e.wordBreak || "break-word" === e.wordBreak) && (r = r.map(function(A) {
            return -1 !== [25, 30, 42].indexOf(A) ? 37 : A
        })),
        [B, r, "keep-all" === e.wordBreak ? n.map(function(e, t) {
            return e && A[t] >= 19968 && A[t] <= 40959
        }) : void 0]
    }, P = function() {
        function A(A, e, t, B) {
            this.codePoints = A,
            this.required = "!" === e,
            this.start = t,
            this.end = B
        }
        return A.prototype.slice = function() {
            return C.apply(void 0, this.codePoints.slice(this.start, this.end))
        }
        ,
        A
    }(), J = function(A, e) {
        var t = U(A)
          , B = N(t, e)
          , r = B[0]
          , n = B[1]
          , s = B[2]
          , o = t.length
          , i = 0
          , Q = 0;
        return {
            next: function() {
                if (Q >= o)
                    return {
                        done: !0,
                        value: null
                    };
                for (var A = m; Q < o && (A = R(t, n, r, ++Q, s)) === m; )
                    ;
                if (A !== m || Q === o) {
                    var e = new P(t,A,i,Q);
                    return i = Q,
                    {
                        value: e,
                        done: !1
                    }
                }
                return {
                    done: !0,
                    value: null
                }
            }
        }
    }, X = function(A) {
        return A >= 48 && A <= 57
    }, Y = function(A) {
        return X(A) || A >= 65 && A <= 70 || A >= 97 && A <= 102
    }, W = function(A) {
        var e, t;
        return (e = A) >= 97 && e <= 122 || (t = A) >= 65 && t <= 90
    }, Z = function(A) {
        return 10 === A || 9 === A || 32 === A
    }, q = function(A) {
        var e;
        return W(A) || (e = A) >= 128 || 95 === A
    }, j = function(A) {
        return q(A) || X(A) || 45 === A
    }, z = function(A, e) {
        return 92 === A && 10 !== e
    }, AA = function(A, e, t) {
        return 45 === A ? q(e) || z(e, t) : !!(q(A) || 92 === A && z(A, e))
    }, Ae = function(A, e, t) {
        return 43 === A || 45 === A ? !!X(e) || 46 === e && X(t) : 46 === A ? X(e) : X(A)
    }, At = function(A) {
        var e = 0
          , t = 1;
        (43 === A[e] || 45 === A[e]) && (45 === A[e] && (t = -1),
        e++);
        for (var B = []; X(A[e]); )
            B.push(A[e++]);
        var r = B.length ? parseInt(C.apply(void 0, B), 10) : 0;
        46 === A[e] && e++;
        for (var n = []; X(A[e]); )
            n.push(A[e++]);
        var s = n.length
          , o = s ? parseInt(C.apply(void 0, n), 10) : 0;
        (69 === A[e] || 101 === A[e]) && e++;
        var i = 1;
        (43 === A[e] || 45 === A[e]) && (45 === A[e] && (i = -1),
        e++);
        for (var Q = []; X(A[e]); )
            Q.push(A[e++]);
        var c = Q.length ? parseInt(C.apply(void 0, Q), 10) : 0;
        return t * (r + o * Math.pow(10, -s)) * Math.pow(10, i * c)
    }, AB = {
        type: 2
    }, Ar = {
        type: 3
    }, An = {
        type: 4
    }, As = {
        type: 13
    }, Ao = {
        type: 8
    }, Ai = {
        type: 21
    }, AQ = {
        type: 9
    }, Ac = {
        type: 10
    }, Aa = {
        type: 11
    }, Ag = {
        type: 12
    }, Aw = {
        type: 14
    }, AU = {
        type: 23
    }, AC = {
        type: 1
    }, Al = {
        type: 25
    }, Au = {
        type: 24
    }, AF = {
        type: 26
    }, Af = {
        type: 27
    }, A$ = {
        type: 28
    }, Ah = {
        type: 29
    }, Ad = {
        type: 31
    }, AH = {
        type: 32
    }, Ap = function() {
        function A() {
            this._value = []
        }
        return A.prototype.write = function(A) {
            this._value = this._value.concat(U(A))
        }
        ,
        A.prototype.read = function() {
            for (var A = [], e = this.consumeToken(); e !== AH; )
                A.push(e),
                e = this.consumeToken();
            return A
        }
        ,
        A.prototype.consumeToken = function() {
            var A = this.consumeCodePoint();
            switch (A) {
            case 34:
                return this.consumeStringToken(34);
            case 35:
                var e = this.peekCodePoint(0)
                  , t = this.peekCodePoint(1)
                  , B = this.peekCodePoint(2);
                if (j(e) || z(t, B)) {
                    var r = AA(e, t, B) ? 2 : 1
                      , n = this.consumeName();
                    return {
                        type: 5,
                        value: n,
                        flags: r
                    }
                }
                break;
            case 36:
                if (61 === this.peekCodePoint(0))
                    return this.consumeCodePoint(),
                    As;
                break;
            case 39:
                return this.consumeStringToken(39);
            case 40:
                return AB;
            case 41:
                return Ar;
            case 42:
                if (61 === this.peekCodePoint(0))
                    return this.consumeCodePoint(),
                    Aw;
                break;
            case 43:
            case 46:
                if (Ae(A, this.peekCodePoint(0), this.peekCodePoint(1)))
                    return this.reconsumeCodePoint(A),
                    this.consumeNumericToken();
                break;
            case 44:
                return An;
            case 45:
                var s = A
                  , o = this.peekCodePoint(0)
                  , i = this.peekCodePoint(1);
                if (Ae(s, o, i))
                    return this.reconsumeCodePoint(A),
                    this.consumeNumericToken();
                if (AA(s, o, i))
                    return this.reconsumeCodePoint(A),
                    this.consumeIdentLikeToken();
                if (45 === o && 62 === i)
                    return this.consumeCodePoint(),
                    this.consumeCodePoint(),
                    Au;
                break;
            case 47:
                if (42 === this.peekCodePoint(0))
                    for (this.consumeCodePoint(); ; ) {
                        var Q = this.consumeCodePoint();
                        if (42 === Q && 47 === (Q = this.consumeCodePoint()) || -1 === Q)
                            return this.consumeToken()
                    }
                break;
            case 58:
                return AF;
            case 59:
                return Af;
            case 60:
                if (33 === this.peekCodePoint(0) && 45 === this.peekCodePoint(1) && 45 === this.peekCodePoint(2))
                    return this.consumeCodePoint(),
                    this.consumeCodePoint(),
                    Al;
                break;
            case 64:
                var c, a = this.peekCodePoint(0);
                if (AA(a, this.peekCodePoint(1), this.peekCodePoint(2))) {
                    var n = this.consumeName();
                    return {
                        type: 7,
                        value: n
                    }
                }
                break;
            case 91:
                return A$;
            case 92:
                if (z(A, this.peekCodePoint(0)))
                    return this.reconsumeCodePoint(A),
                    this.consumeIdentLikeToken();
                break;
            case 93:
                return Ah;
            case 61:
                if (61 === this.peekCodePoint(0))
                    return this.consumeCodePoint(),
                    Ao;
                break;
            case 123:
                return Aa;
            case 125:
                return Ag;
            case 117:
            case 85:
                var g = this.peekCodePoint(0)
                  , w = this.peekCodePoint(1);
                return 43 === g && (Y(w) || 63 === w) && (this.consumeCodePoint(),
                this.consumeUnicodeRangeToken()),
                this.reconsumeCodePoint(A),
                this.consumeIdentLikeToken();
            case 124:
                if (61 === this.peekCodePoint(0))
                    return this.consumeCodePoint(),
                    AQ;
                if (124 === this.peekCodePoint(0))
                    return this.consumeCodePoint(),
                    Ai;
                break;
            case 126:
                if (61 === this.peekCodePoint(0))
                    return this.consumeCodePoint(),
                    Ac;
                break;
            case -1:
                return AH
            }
            return Z(A) ? (this.consumeWhiteSpace(),
            Ad) : X(A) ? (this.reconsumeCodePoint(A),
            this.consumeNumericToken()) : q(A) ? (this.reconsumeCodePoint(A),
            this.consumeIdentLikeToken()) : {
                type: 6,
                value: C(A)
            }
        }
        ,
        A.prototype.consumeCodePoint = function() {
            var A = this._value.shift();
            return void 0 === A ? -1 : A
        }
        ,
        A.prototype.reconsumeCodePoint = function(A) {
            this._value.unshift(A)
        }
        ,
        A.prototype.peekCodePoint = function(A) {
            return A >= this._value.length ? -1 : this._value[A]
        }
        ,
        A.prototype.consumeUnicodeRangeToken = function() {
            for (var A = [], e = this.consumeCodePoint(); Y(e) && A.length < 6; )
                A.push(e),
                e = this.consumeCodePoint();
            for (var t = !1; 63 === e && A.length < 6; )
                A.push(e),
                e = this.consumeCodePoint(),
                t = !0;
            if (t) {
                var B = parseInt(C.apply(void 0, A.map(function(A) {
                    return 63 === A ? 48 : A
                })), 16)
                  , r = parseInt(C.apply(void 0, A.map(function(A) {
                    return 63 === A ? 70 : A
                })), 16);
                return {
                    type: 30,
                    start: B,
                    end: r
                }
            }
            var n = parseInt(C.apply(void 0, A), 16);
            if (!(45 === this.peekCodePoint(0) && Y(this.peekCodePoint(1))))
                return {
                    type: 30,
                    start: n,
                    end: n
                };
            this.consumeCodePoint(),
            e = this.consumeCodePoint();
            for (var s = []; Y(e) && s.length < 6; )
                s.push(e),
                e = this.consumeCodePoint();
            var r = parseInt(C.apply(void 0, s), 16);
            return {
                type: 30,
                start: n,
                end: r
            }
        }
        ,
        A.prototype.consumeIdentLikeToken = function() {
            var A = this.consumeName();
            return "url" === A.toLowerCase() && 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(),
            this.consumeUrlToken()) : 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(),
            {
                type: 19,
                value: A
            }) : {
                type: 20,
                value: A
            }
        }
        ,
        A.prototype.consumeUrlToken = function() {
            var A = [];
            if (this.consumeWhiteSpace(),
            -1 === this.peekCodePoint(0))
                return {
                    type: 22,
                    value: ""
                };
            var e = this.peekCodePoint(0);
            if (39 === e || 34 === e) {
                var t = this.consumeStringToken(this.consumeCodePoint());
                return 0 === t.type && (this.consumeWhiteSpace(),
                -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0)) ? (this.consumeCodePoint(),
                {
                    type: 22,
                    value: t.value
                }) : (this.consumeBadUrlRemnants(),
                AU)
            }
            for (; ; ) {
                var B, r = this.consumeCodePoint();
                if (-1 === r || 41 === r)
                    return {
                        type: 22,
                        value: C.apply(void 0, A)
                    };
                if (Z(r)) {
                    if (this.consumeWhiteSpace(),
                    -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0))
                        return this.consumeCodePoint(),
                        {
                            type: 22,
                            value: C.apply(void 0, A)
                        };
                    return this.consumeBadUrlRemnants(),
                    AU
                }
                if (34 === r || 39 === r || 40 === r || (B = r) >= 0 && B <= 8 || 11 === B || B >= 14 && B <= 31 || 127 === B)
                    return this.consumeBadUrlRemnants(),
                    AU;
                if (92 === r) {
                    if (!z(r, this.peekCodePoint(0)))
                        return this.consumeBadUrlRemnants(),
                        AU;
                    A.push(this.consumeEscapedCodePoint())
                } else
                    A.push(r)
            }
        }
        ,
        A.prototype.consumeWhiteSpace = function() {
            for (; Z(this.peekCodePoint(0)); )
                this.consumeCodePoint()
        }
        ,
        A.prototype.consumeBadUrlRemnants = function() {
            for (; ; ) {
                var A = this.consumeCodePoint();
                if (41 === A || -1 === A)
                    return;
                z(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint()
            }
        }
        ,
        A.prototype.consumeStringSlice = function(A) {
            for (var e = 6e4, t = ""; A > 0; ) {
                var B = Math.min(e, A);
                t += C.apply(void 0, this._value.splice(0, B)),
                A -= B
            }
            return this._value.shift(),
            t
        }
        ,
        A.prototype.consumeStringToken = function(A) {
            for (var e = "", t = 0; ; ) {
                var B = this._value[t];
                if (-1 === B || void 0 === B || B === A)
                    return {
                        type: 0,
                        value: e += this.consumeStringSlice(t)
                    };
                if (10 === B)
                    return this._value.splice(0, t),
                    AC;
                if (92 === B) {
                    var r = this._value[t + 1];
                    -1 !== r && void 0 !== r && (10 === r ? (e += this.consumeStringSlice(t),
                    t = -1,
                    this._value.shift()) : z(B, r) && (e += this.consumeStringSlice(t),
                    e += C(this.consumeEscapedCodePoint()),
                    t = -1))
                }
                t++
            }
        }
        ,
        A.prototype.consumeNumber = function() {
            var A = []
              , e = 4
              , t = this.peekCodePoint(0);
            for ((43 === t || 45 === t) && A.push(this.consumeCodePoint()); X(this.peekCodePoint(0)); )
                A.push(this.consumeCodePoint());
            t = this.peekCodePoint(0);
            var B = this.peekCodePoint(1);
            if (46 === t && X(B))
                for (A.push(this.consumeCodePoint(), this.consumeCodePoint()),
                e = 8; X(this.peekCodePoint(0)); )
                    A.push(this.consumeCodePoint());
            t = this.peekCodePoint(0),
            B = this.peekCodePoint(1);
            var r = this.peekCodePoint(2);
            if ((69 === t || 101 === t) && ((43 === B || 45 === B) && X(r) || X(B)))
                for (A.push(this.consumeCodePoint(), this.consumeCodePoint()),
                e = 8; X(this.peekCodePoint(0)); )
                    A.push(this.consumeCodePoint());
            return [At(A), e]
        }
        ,
        A.prototype.consumeNumericToken = function() {
            var A, e = this.consumeNumber(), t = e[0], B = e[1], r = this.peekCodePoint(0);
            return AA(r, this.peekCodePoint(1), this.peekCodePoint(2)) ? {
                type: 15,
                number: t,
                flags: B,
                unit: this.consumeName()
            } : 37 === r ? (this.consumeCodePoint(),
            {
                type: 16,
                number: t,
                flags: B
            }) : {
                type: 17,
                number: t,
                flags: B
            }
        }
        ,
        A.prototype.consumeEscapedCodePoint = function() {
            var A = this.consumeCodePoint();
            if (Y(A)) {
                for (var e = C(A); Y(this.peekCodePoint(0)) && e.length < 6; )
                    e += C(this.consumeCodePoint());
                Z(this.peekCodePoint(0)) && this.consumeCodePoint();
                var t, B = parseInt(e, 16);
                return 0 === B || (t = B) >= 55296 && t <= 57343 || B > 1114111 ? 65533 : B
            }
            return -1 === A ? 65533 : A
        }
        ,
        A.prototype.consumeName = function() {
            for (var A = ""; ; ) {
                var e = this.consumeCodePoint();
                if (j(e))
                    A += C(e);
                else {
                    if (!z(e, this.peekCodePoint(0)))
                        return this.reconsumeCodePoint(e),
                        A;
                    A += C(this.consumeEscapedCodePoint())
                }
            }
        }
        ,
        A
    }(), AE = function() {
        function A(A) {
            this._tokens = A
        }
        return A.create = function(e) {
            var t = new Ap;
            return t.write(e),
            new A(t.read())
        }
        ,
        A.parseValue = function(e) {
            return A.create(e).parseComponentValue()
        }
        ,
        A.parseValues = function(e) {
            return A.create(e).parseComponentValues()
        }
        ,
        A.prototype.parseComponentValue = function() {
            for (var A = this.consumeToken(); 31 === A.type; )
                A = this.consumeToken();
            if (32 === A.type)
                throw SyntaxError("Error parsing CSS component value, unexpected EOF");
            this.reconsumeToken(A);
            var e = this.consumeComponentValue();
            do
                A = this.consumeToken();
            while (31 === A.type);
            if (32 === A.type)
                return e;
            throw SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")
        }
        ,
        A.prototype.parseComponentValues = function() {
            for (var A = []; ; ) {
                var e = this.consumeComponentValue();
                if (32 === e.type)
                    return A;
                A.push(e),
                A.push()
            }
        }
        ,
        A.prototype.consumeComponentValue = function() {
            var A = this.consumeToken();
            switch (A.type) {
            case 11:
            case 28:
            case 2:
                return this.consumeSimpleBlock(A.type);
            case 19:
                return this.consumeFunction(A)
            }
            return A
        }
        ,
        A.prototype.consumeSimpleBlock = function(A) {
            for (var e = {
                type: A,
                values: []
            }, t = this.consumeToken(); ; ) {
                if (32 === t.type || Ab(t, A))
                    return e;
                this.reconsumeToken(t),
                e.values.push(this.consumeComponentValue()),
                t = this.consumeToken()
            }
        }
        ,
        A.prototype.consumeFunction = function(A) {
            for (var e = {
                name: A.value,
                values: [],
                type: 18
            }; ; ) {
                var t = this.consumeToken();
                if (32 === t.type || 3 === t.type)
                    return e;
                this.reconsumeToken(t),
                e.values.push(this.consumeComponentValue())
            }
        }
        ,
        A.prototype.consumeToken = function() {
            var A = this._tokens.shift();
            return void 0 === A ? AH : A
        }
        ,
        A.prototype.reconsumeToken = function(A) {
            this._tokens.unshift(A)
        }
        ,
        A
    }(), AI = function(A) {
        return 15 === A.type
    }, A2 = function(A) {
        return 17 === A.type
    }, Ay = function(A) {
        return 20 === A.type
    }, AK = function(A) {
        return 0 === A.type
    }, A_ = function(A, e) {
        return Ay(A) && A.value === e
    }, Ax = function(A) {
        return 31 !== A.type
    }, Am = function(A) {
        return 31 !== A.type && 4 !== A.type
    }, AL = function(A) {
        var e = []
          , t = [];
        return A.forEach(function(A) {
            if (4 === A.type) {
                if (0 === t.length)
                    throw Error("Error parsing function args, zero tokens for arg");
                e.push(t),
                t = [];
                return
            }
            31 !== A.type && t.push(A)
        }),
        t.length && e.push(t),
        e
    }, Ab = function(A, e) {
        return 11 === e && 12 === A.type || 28 === e && 29 === A.type || 2 === e && 3 === A.type
    }, Av = function(A) {
        return 17 === A.type || 15 === A.type
    }, AD = function(A) {
        return 16 === A.type || Av(A)
    }, A0 = function(A) {
        return A.length > 1 ? [A[0], A[1]] : [A[0]]
    }, AS = {
        type: 17,
        number: 0,
        flags: 4
    }, AG = {
        type: 16,
        number: 50,
        flags: 4
    }, AT = {
        type: 16,
        number: 100,
        flags: 4
    }, AO = function(A, e, t) {
        var B = A[0]
          , r = A[1];
        return [AV(B, e), AV(void 0 !== r ? r : B, t), ]
    }, AV = function(A, e) {
        if (16 === A.type)
            return A.number / 100 * e;
        if (AI(A))
            switch (A.unit) {
            case "rem":
            case "em":
                return 16 * A.number
            }
        return A.number
    }, AM = "grad", Ak = "turn", A1 = {
        name: "angle",
        parse: function(A, e) {
            if (15 === e.type)
                switch (e.unit) {
                case "deg":
                    return Math.PI * e.number / 180;
                case AM:
                    return Math.PI / 200 * e.number;
                case "rad":
                    return e.number;
                case Ak:
                    return 2 * Math.PI * e.number
                }
            throw Error("Unsupported angle type")
        }
    }, AR = function(A) {
        return 15 === A.type && ("deg" === A.unit || A.unit === AM || "rad" === A.unit || A.unit === Ak)
    }, AN = function(A) {
        var e = A.filter(Ay).map(function(A) {
            return A.value
        }).join(" ");
        switch (e) {
        case "to bottom right":
        case "to right bottom":
        case "left top":
        case "top left":
            return [AS, AS];
        case "to top":
        case "bottom":
            return AP(0);
        case "to bottom left":
        case "to left bottom":
        case "right top":
        case "top right":
            return [AS, AT];
        case "to right":
        case "left":
            return AP(90);
        case "to top left":
        case "to left top":
        case "right bottom":
        case "bottom right":
            return [AT, AT];
        case "to bottom":
        case "top":
            return AP(180);
        case "to top right":
        case "to right top":
        case "left bottom":
        case "bottom left":
            return [AT, AS];
        case "to left":
        case "right":
            return AP(270)
        }
        return 0
    }, AP = function(A) {
        return Math.PI * A / 180
    }, AJ = {
        name: "color",
        parse: function(A, e) {
            if (18 === e.type) {
                var t = Aj[e.name];
                if (void 0 === t)
                    throw Error('Attempting to parse an unsupported color function "' + e.name + '"');
                return t(A, e.values)
            }
            if (5 === e.type) {
                if (3 === e.value.length) {
                    var B = e.value.substring(0, 1)
                      , r = e.value.substring(1, 2)
                      , n = e.value.substring(2, 3);
                    return A6(parseInt(B + B, 16), parseInt(r + r, 16), parseInt(n + n, 16), 1)
                }
                if (4 === e.value.length) {
                    var B = e.value.substring(0, 1)
                      , r = e.value.substring(1, 2)
                      , n = e.value.substring(2, 3)
                      , s = e.value.substring(3, 4);
                    return A6(parseInt(B + B, 16), parseInt(r + r, 16), parseInt(n + n, 16), parseInt(s + s, 16) / 255)
                }
                if (6 === e.value.length) {
                    var B = e.value.substring(0, 2)
                      , r = e.value.substring(2, 4)
                      , n = e.value.substring(4, 6);
                    return A6(parseInt(B, 16), parseInt(r, 16), parseInt(n, 16), 1)
                }
                if (8 === e.value.length) {
                    var B = e.value.substring(0, 2)
                      , r = e.value.substring(2, 4)
                      , n = e.value.substring(4, 6)
                      , s = e.value.substring(6, 8);
                    return A6(parseInt(B, 16), parseInt(r, 16), parseInt(n, 16), parseInt(s, 16) / 255)
                }
            }
            if (20 === e.type) {
                var o = A9[e.value.toUpperCase()];
                if (void 0 !== o)
                    return o
            }
            return A9.TRANSPARENT
        }
    }, AX = function(A) {
        return (255 & A) == 0
    }, AY = function(A) {
        var e = 255 & A
          , t = 255 & A >> 8
          , B = 255 & A >> 16
          , r = 255 & A >> 24;
        return e < 255 ? "rgba(" + r + "," + B + "," + t + "," + e / 255 + ")" : "rgb(" + r + "," + B + "," + t + ")"
    }, A6 = function(A, e, t, B) {
        return (A << 24 | e << 16 | t << 8 | Math.round(255 * B) << 0) >>> 0
    }, AW = function(A, e) {
        if (17 === A.type)
            return A.number;
        if (16 === A.type) {
            var t = 3 === e ? 1 : 255;
            return 3 === e ? A.number / 100 * t : Math.round(A.number / 100 * t)
        }
        return 0
    }, A3 = function(A, e) {
        var t = e.filter(Am);
        if (3 === t.length) {
            var B = t.map(AW)
              , r = B[0]
              , n = B[1]
              , s = B[2];
            return A6(r, n, s, 1)
        }
        if (4 === t.length) {
            var o = t.map(AW)
              , r = o[0]
              , n = o[1]
              , s = o[2];
            return A6(r, n, s, o[3])
        }
        return 0
    };
    function A4(A, e, t) {
        return (t < 0 && (t += 1),
        t >= 1 && (t -= 1),
        t < 1 / 6) ? (e - A) * t * 6 + A : t < .5 ? e : t < 2 / 3 ? (e - A) * 6 * (2 / 3 - t) + A : A
    }
    var AZ, A7, A5, A8, Aq = function(A, e) {
        var t = e.filter(Am)
          , B = t[0]
          , r = t[1]
          , n = t[2]
          , s = t[3]
          , o = (17 === B.type ? AP(B.number) : A1.parse(A, B)) / (2 * Math.PI)
          , i = AD(r) ? r.number / 100 : 0
          , Q = AD(n) ? n.number / 100 : 0
          , c = void 0 !== s && AD(s) ? AV(s, 1) : 1;
        if (0 === i)
            return A6(255 * Q, 255 * Q, 255 * Q, 1);
        var a = Q <= .5 ? Q * (i + 1) : Q + i - Q * i
          , g = 2 * Q - a
          , w = A4(g, a, o + 1 / 3)
          , U = A4(g, a, o)
          , C = A4(g, a, o - 1 / 3);
        return A6(255 * w, 255 * U, 255 * C, c)
    }, Aj = {
        hsl: Aq,
        hsla: Aq,
        rgb: A3,
        rgba: A3
    }, Az = function(A, e) {
        return AJ.parse(A, AE.create(e).parseComponentValue())
    }, A9 = {
        ALICEBLUE: 4042850303,
        ANTIQUEWHITE: 4209760255,
        AQUA: 16777215,
        AQUAMARINE: 2147472639,
        AZURE: 4043309055,
        BEIGE: 4126530815,
        BISQUE: 4293182719,
        BLACK: 255,
        BLANCHEDALMOND: 4293643775,
        BLUE: 65535,
        BLUEVIOLET: 2318131967,
        BROWN: 2771004159,
        BURLYWOOD: 3736635391,
        CADETBLUE: 1604231423,
        CHARTREUSE: 2147418367,
        CHOCOLATE: 3530104575,
        CORAL: 4286533887,
        CORNFLOWERBLUE: 1687547391,
        CORNSILK: 4294499583,
        CRIMSON: 3692313855,
        CYAN: 16777215,
        DARKBLUE: 35839,
        DARKCYAN: 9145343,
        DARKGOLDENROD: 3095837695,
        DARKGRAY: 2846468607,
        DARKGREEN: 6553855,
        DARKGREY: 2846468607,
        DARKKHAKI: 3182914559,
        DARKMAGENTA: 2332068863,
        DARKOLIVEGREEN: 1433087999,
        DARKORANGE: 4287365375,
        DARKORCHID: 2570243327,
        DARKRED: 2332033279,
        DARKSALMON: 3918953215,
        DARKSEAGREEN: 2411499519,
        DARKSLATEBLUE: 1211993087,
        DARKSLATEGRAY: 793726975,
        DARKSLATEGREY: 793726975,
        DARKTURQUOISE: 13554175,
        DARKVIOLET: 2483082239,
        DEEPPINK: 4279538687,
        DEEPSKYBLUE: 12582911,
        DIMGRAY: 1768516095,
        DIMGREY: 1768516095,
        DODGERBLUE: 512819199,
        FIREBRICK: 2988581631,
        FLORALWHITE: 4294635775,
        FORESTGREEN: 579543807,
        FUCHSIA: 4278255615,
        GAINSBORO: 3705462015,
        GHOSTWHITE: 4177068031,
        GOLD: 4292280575,
        GOLDENROD: 3668254975,
        GRAY: 2155905279,
        GREEN: 8388863,
        GREENYELLOW: 2919182335,
        GREY: 2155905279,
        HONEYDEW: 4043305215,
        HOTPINK: 4285117695,
        INDIANRED: 3445382399,
        INDIGO: 1258324735,
        IVORY: 4294963455,
        KHAKI: 4041641215,
        LAVENDER: 3873897215,
        LAVENDERBLUSH: 4293981695,
        LAWNGREEN: 2096890111,
        LEMONCHIFFON: 4294626815,
        LIGHTBLUE: 2916673279,
        LIGHTCORAL: 4034953471,
        LIGHTCYAN: 3774873599,
        LIGHTGOLDENRODYELLOW: 4210742015,
        LIGHTGRAY: 3553874943,
        LIGHTGREEN: 2431553791,
        LIGHTGREY: 3553874943,
        LIGHTPINK: 4290167295,
        LIGHTSALMON: 4288707327,
        LIGHTSEAGREEN: 548580095,
        LIGHTSKYBLUE: 2278488831,
        LIGHTSLATEGRAY: 2005441023,
        LIGHTSLATEGREY: 2005441023,
        LIGHTSTEELBLUE: 2965692159,
        LIGHTYELLOW: 4294959359,
        LIME: 16711935,
        LIMEGREEN: 852308735,
        LINEN: 4210091775,
        MAGENTA: 4278255615,
        MAROON: 2147483903,
        MEDIUMAQUAMARINE: 1724754687,
        MEDIUMBLUE: 52735,
        MEDIUMORCHID: 3126187007,
        MEDIUMPURPLE: 2473647103,
        MEDIUMSEAGREEN: 1018393087,
        MEDIUMSLATEBLUE: 2070474495,
        MEDIUMSPRINGGREEN: 16423679,
        MEDIUMTURQUOISE: 1221709055,
        MEDIUMVIOLETRED: 3340076543,
        MIDNIGHTBLUE: 421097727,
        MINTCREAM: 4127193855,
        MISTYROSE: 4293190143,
        MOCCASIN: 4293178879,
        NAVAJOWHITE: 4292783615,
        NAVY: 33023,
        OLDLACE: 4260751103,
        OLIVE: 2155872511,
        OLIVEDRAB: 1804477439,
        ORANGE: 4289003775,
        ORANGERED: 4282712319,
        ORCHID: 3664828159,
        PALEGOLDENROD: 4008225535,
        PALEGREEN: 2566625535,
        PALETURQUOISE: 2951671551,
        PALEVIOLETRED: 3681588223,
        PAPAYAWHIP: 4293907967,
        PEACHPUFF: 4292524543,
        PERU: 3448061951,
        PINK: 4290825215,
        PLUM: 3718307327,
        POWDERBLUE: 2967529215,
        PURPLE: 2147516671,
        REBECCAPURPLE: 1714657791,
        RED: 4278190335,
        ROSYBROWN: 3163525119,
        ROYALBLUE: 1097458175,
        SADDLEBROWN: 2336560127,
        SALMON: 4202722047,
        SANDYBROWN: 4104413439,
        SEAGREEN: 780883967,
        SEASHELL: 4294307583,
        SIENNA: 2689740287,
        SILVER: 3233857791,
        SKYBLUE: 2278484991,
        SLATEBLUE: 1784335871,
        SLATEGRAY: 1887473919,
        SLATEGREY: 1887473919,
        SNOW: 4294638335,
        SPRINGGREEN: 16744447,
        STEELBLUE: 1182971135,
        TAN: 3535047935,
        TEAL: 8421631,
        THISTLE: 3636451583,
        TOMATO: 4284696575,
        TRANSPARENT: 0,
        TURQUOISE: 1088475391,
        VIOLET: 4001558271,
        WHEAT: 4125012991,
        WHITE: 4294967295,
        WHITESMOKE: 4126537215,
        YELLOW: 4294902015,
        YELLOWGREEN: 2597139199
    }, eA = {
        name: "background-clip",
        initialValue: "border-box",
        prefix: !1,
        type: 1,
        parse: function(A, e) {
            return e.map(function(A) {
                if (Ay(A))
                    switch (A.value) {
                    case "padding-box":
                        return 1;
                    case "content-box":
                        return 2
                    }
                return 0
            })
        }
    }, ee = {
        name: "background-color",
        initialValue: "transparent",
        prefix: !1,
        type: 3,
        format: "color"
    }, et = function(A, e) {
        var t = AJ.parse(A, e[0])
          , B = e[1];
        return B && AD(B) ? {
            color: t,
            stop: B
        } : {
            color: t,
            stop: null
        }
    }, eB = function(A, e) {
        var t = A[0]
          , B = A[A.length - 1];
        null === t.stop && (t.stop = AS),
        null === B.stop && (B.stop = AT);
        for (var r = [], n = 0, s = 0; s < A.length; s++) {
            var o = A[s].stop;
            if (null !== o) {
                var i = AV(o, e);
                i > n ? r.push(i) : r.push(n),
                n = i
            } else
                r.push(null)
        }
        for (var Q = null, s = 0; s < r.length; s++) {
            var c = r[s];
            if (null === c)
                null === Q && (Q = s);
            else if (null !== Q) {
                for (var a = s - Q, g = (c - r[Q - 1]) / (a + 1), w = 1; w <= a; w++)
                    r[Q + w - 1] = g * w;
                Q = null
            }
        }
        return A.map(function(A, t) {
            return {
                color: A.color,
                stop: Math.max(Math.min(1, r[t] / e), 0)
            }
        })
    }, er = function(A, e, t) {
        var B = AV(A[0], e) - e / 2;
        return (Math.atan2(t / 2 - AV(A[1], t), B) + 2 * Math.PI) % (2 * Math.PI)
    }, en = function(A, e, t) {
        var B = "number" == typeof A ? A : er(A, e, t)
          , r = Math.abs(e * Math.sin(B)) + Math.abs(t * Math.cos(B))
          , n = e / 2
          , s = t / 2
          , o = r / 2
          , i = Math.sin(B - Math.PI / 2) * o
          , Q = Math.cos(B - Math.PI / 2) * o;
        return [r, n - Q, n + Q, s - i, s + i, ]
    }, es = function(A, e) {
        return Math.sqrt(A * A + e * e)
    }, eo = function(A, e, t, B, r) {
        return [[0, 0], [0, e], [A, 0], [A, e], ].reduce(function(A, e) {
            var n, s = es(t - e[0], B - e[1]);
            return (r ? s < A.optimumDistance : s > A.optimumDistance) ? {
                optimumCorner: e,
                optimumDistance: s
            } : A
        }, {
            optimumDistance: r ? 1 / 0 : -1 / 0,
            optimumCorner: null
        }).optimumCorner
    }, ei = function(A, e, t, B, r) {
        var n = 0
          , s = 0;
        switch (A.size) {
        case 0:
            0 === A.shape ? n = s = Math.min(Math.abs(e), Math.abs(e - B), Math.abs(t), Math.abs(t - r)) : 1 === A.shape && (n = Math.min(Math.abs(e), Math.abs(e - B)),
            s = Math.min(Math.abs(t), Math.abs(t - r)));
            break;
        case 2:
            if (0 === A.shape)
                n = s = Math.min(es(e, t), es(e, t - r), es(e - B, t), es(e - B, t - r));
            else if (1 === A.shape) {
                var o = Math.min(Math.abs(t), Math.abs(t - r)) / Math.min(Math.abs(e), Math.abs(e - B))
                  , i = eo(B, r, e, t, !0)
                  , Q = i[0]
                  , c = i[1];
                n = es(Q - e, (c - t) / o),
                s = o * n
            }
            break;
        case 1:
            0 === A.shape ? n = s = Math.max(Math.abs(e), Math.abs(e - B), Math.abs(t), Math.abs(t - r)) : 1 === A.shape && (n = Math.max(Math.abs(e), Math.abs(e - B)),
            s = Math.max(Math.abs(t), Math.abs(t - r)));
            break;
        case 3:
            if (0 === A.shape)
                n = s = Math.max(es(e, t), es(e, t - r), es(e - B, t), es(e - B, t - r));
            else if (1 === A.shape) {
                var o = Math.max(Math.abs(t), Math.abs(t - r)) / Math.max(Math.abs(e), Math.abs(e - B))
                  , a = eo(B, r, e, t, !1)
                  , Q = a[0]
                  , c = a[1];
                n = es(Q - e, (c - t) / o),
                s = o * n
            }
        }
        return Array.isArray(A.size) && (n = AV(A.size[0], B),
        s = 2 === A.size.length ? AV(A.size[1], r) : n),
        [n, s]
    }, eQ = function(A, e) {
        var t = AP(180)
          , B = [];
        return AL(e).forEach(function(e, r) {
            if (0 === r) {
                var n = e[0];
                if (20 === n.type && -1 !== ["top", "left", "right", "bottom"].indexOf(n.value)) {
                    t = AN(e);
                    return
                }
                if (AR(n)) {
                    t = (A1.parse(A, n) + AP(270)) % AP(360);
                    return
                }
            }
            var s = et(A, e);
            B.push(s)
        }),
        {
            angle: t,
            stops: B,
            type: 1
        }
    }, ec = "closest-side", ea = "farthest-side", eg = "closest-corner", ew = "farthest-corner", eU = "circle", eC = "ellipse", el = "cover", eu = "contain", eF = function(A, e) {
        var t = 0
          , B = 3
          , r = []
          , n = [];
        return AL(e).forEach(function(e, s) {
            var o = !0;
            if (0 === s ? o = e.reduce(function(A, e) {
                if (Ay(e))
                    switch (e.value) {
                    case "center":
                        return n.push(AG),
                        !1;
                    case "top":
                    case "left":
                        return n.push(AS),
                        !1;
                    case "right":
                    case "bottom":
                        return n.push(AT),
                        !1
                    }
                else if (AD(e) || Av(e))
                    return n.push(e),
                    !1;
                return A
            }, o) : 1 === s && (o = e.reduce(function(A, e) {
                if (Ay(e))
                    switch (e.value) {
                    case eU:
                        return t = 0,
                        !1;
                    case eC:
                        return t = 1,
                        !1;
                    case eu:
                    case ec:
                        return B = 0,
                        !1;
                    case ea:
                        return B = 1,
                        !1;
                    case eg:
                        return B = 2,
                        !1;
                    case el:
                    case ew:
                        return B = 3,
                        !1
                    }
                else if (Av(e) || AD(e))
                    return Array.isArray(B) || (B = []),
                    B.push(e),
                    !1;
                return A
            }, o)),
            o) {
                var i = et(A, e);
                r.push(i)
            }
        }),
        {
            size: B,
            shape: t,
            stops: r,
            position: n,
            type: 2
        }
    }, ef = {
        name: "image",
        parse: function(A, e) {
            if (22 === e.type) {
                var t = {
                    url: e.value,
                    type: 0
                };
                return A.cache.addImage(e.value),
                t
            }
            if (18 === e.type) {
                var B = e$[e.name];
                if (void 0 === B)
                    throw Error('Attempting to parse an unsupported image function "' + e.name + '"');
                return B(A, e.values)
            }
            throw Error("Unsupported image type " + e.type)
        }
    }, e$ = {
        "linear-gradient": function(A, e) {
            var t = AP(180)
              , B = [];
            return AL(e).forEach(function(e, r) {
                if (0 === r) {
                    var n = e[0];
                    if (20 === n.type && "to" === n.value) {
                        t = AN(e);
                        return
                    }
                    if (AR(n)) {
                        t = A1.parse(A, n);
                        return
                    }
                }
                var s = et(A, e);
                B.push(s)
            }),
            {
                angle: t,
                stops: B,
                type: 1
            }
        },
        "-moz-linear-gradient": eQ,
        "-ms-linear-gradient": eQ,
        "-o-linear-gradient": eQ,
        "-webkit-linear-gradient": eQ,
        "radial-gradient": function(A, e) {
            var t = 0
              , B = 3
              , r = []
              , n = [];
            return AL(e).forEach(function(e, s) {
                var o = !0;
                if (0 === s) {
                    var i = !1;
                    o = e.reduce(function(A, e) {
                        if (i) {
                            if (Ay(e))
                                switch (e.value) {
                                case "center":
                                    n.push(AG);
                                    break;
                                case "top":
                                case "left":
                                    n.push(AS);
                                    break;
                                case "right":
                                case "bottom":
                                    n.push(AT)
                                }
                            else
                                (AD(e) || Av(e)) && n.push(e)
                        } else if (Ay(e))
                            switch (e.value) {
                            case eU:
                                return t = 0,
                                !1;
                            case eC:
                                return t = 1,
                                !1;
                            case "at":
                                return i = !0,
                                !1;
                            case ec:
                                return B = 0,
                                !1;
                            case el:
                            case ea:
                                return B = 1,
                                !1;
                            case eu:
                            case eg:
                                return B = 2,
                                !1;
                            case ew:
                                return B = 3,
                                !1
                            }
                        else if (Av(e) || AD(e))
                            return Array.isArray(B) || (B = []),
                            B.push(e),
                            !1;
                        return A
                    }, o)
                }
                if (o) {
                    var Q = et(A, e);
                    r.push(Q)
                }
            }),
            {
                size: B,
                shape: t,
                stops: r,
                position: n,
                type: 2
            }
        },
        "-moz-radial-gradient": eF,
        "-ms-radial-gradient": eF,
        "-o-radial-gradient": eF,
        "-webkit-radial-gradient": eF,
        "-webkit-gradient": function(A, e) {
            var t = AP(180)
              , B = []
              , r = 1;
            return AL(e).forEach(function(e, t) {
                var n = e[0];
                if (0 === t) {
                    if (Ay(n) && "linear" === n.value) {
                        r = 1;
                        return
                    }
                    if (Ay(n) && "radial" === n.value) {
                        r = 2;
                        return
                    }
                }
                if (18 === n.type) {
                    if ("from" === n.name) {
                        var s = AJ.parse(A, n.values[0]);
                        B.push({
                            stop: AS,
                            color: s
                        })
                    } else if ("to" === n.name) {
                        var s = AJ.parse(A, n.values[0]);
                        B.push({
                            stop: AT,
                            color: s
                        })
                    } else if ("color-stop" === n.name) {
                        var o = n.values.filter(Am);
                        if (2 === o.length) {
                            var s = AJ.parse(A, o[1])
                              , i = o[0];
                            A2(i) && B.push({
                                stop: {
                                    type: 16,
                                    number: 100 * i.number,
                                    flags: i.flags
                                },
                                color: s
                            })
                        }
                    }
                }
            }),
            1 === r ? {
                angle: (t + AP(180)) % AP(360),
                stops: B,
                type: r
            } : {
                size: 3,
                shape: 0,
                stops: B,
                position: [],
                type: r
            }
        }
    }, eh = {
        name: "background-image",
        initialValue: "none",
        type: 1,
        prefix: !1,
        parse: function(A, e) {
            if (0 === e.length)
                return [];
            var t = e[0];
            return 20 === t.type && "none" === t.value ? [] : e.filter(function(A) {
                var e;
                return Am(A) && !(20 === (e = A).type && "none" === e.value) && (18 !== e.type || !!e$[e.name])
            }).map(function(e) {
                return ef.parse(A, e)
            })
        }
    }, ed = {
        name: "background-origin",
        initialValue: "border-box",
        prefix: !1,
        type: 1,
        parse: function(A, e) {
            return e.map(function(A) {
                if (Ay(A))
                    switch (A.value) {
                    case "padding-box":
                        return 1;
                    case "content-box":
                        return 2
                    }
                return 0
            })
        }
    }, eH = {
        name: "background-position",
        initialValue: "0% 0%",
        type: 1,
        prefix: !1,
        parse: function(A, e) {
            return AL(e).map(function(A) {
                return A.filter(AD)
            }).map(A0)
        }
    }, ep = {
        name: "background-repeat",
        initialValue: "repeat",
        prefix: !1,
        type: 1,
        parse: function(A, e) {
            return AL(e).map(function(A) {
                return A.filter(Ay).map(function(A) {
                    return A.value
                }).join(" ")
            }).map(eE)
        }
    }, eE = function(A) {
        switch (A) {
        case "no-repeat":
            return 1;
        case "repeat-x":
        case "repeat no-repeat":
            return 2;
        case "repeat-y":
        case "no-repeat repeat":
            return 3;
        default:
            return 0
        }
    };
    (AZ = A || (A = {})).AUTO = "auto",
    AZ.CONTAIN = "contain",
    AZ.COVER = "cover";
    var eI, e2 = {
        name: "background-size",
        initialValue: "0",
        prefix: !1,
        type: 1,
        parse: function(A, e) {
            return AL(e).map(function(A) {
                return A.filter(ey)
            })
        }
    }, ey = function(A) {
        return Ay(A) || AD(A)
    }, eK = function(A) {
        return {
            name: "border-" + A + "-color",
            initialValue: "transparent",
            prefix: !1,
            type: 3,
            format: "color"
        }
    }, e_ = eK("top"), ex = eK("right"), em = eK("bottom"), eL = eK("left"), eb = function(A) {
        return {
            name: "border-radius-" + A,
            initialValue: "0 0",
            prefix: !1,
            type: 1,
            parse: function(A, e) {
                return A0(e.filter(AD))
            }
        }
    }, ev = eb("top-left"), eD = eb("top-right"), e0 = eb("bottom-right"), eS = eb("bottom-left"), eG = function(A) {
        return {
            name: "border-" + A + "-style",
            initialValue: "solid",
            prefix: !1,
            type: 2,
            parse: function(A, e) {
                switch (e) {
                case "none":
                    return 0;
                case "dashed":
                    return 2;
                case "dotted":
                    return 3;
                case "double":
                    return 4
                }
                return 1
            }
        }
    }, eT = eG("top"), eO = eG("right"), eV = eG("bottom"), eM = eG("left"), ek = function(A) {
        return {
            name: "border-" + A + "-width",
            initialValue: "0",
            type: 0,
            prefix: !1,
            parse: function(A, e) {
                return AI(e) ? e.number : 0
            }
        }
    }, e1 = ek("top"), eR = ek("right"), eN = ek("bottom"), eP = ek("left"), eJ = {
        name: "color",
        initialValue: "transparent",
        prefix: !1,
        type: 3,
        format: "color"
    }, eX = {
        name: "direction",
        initialValue: "ltr",
        prefix: !1,
        type: 2,
        parse: function(A, e) {
            return "rtl" === e ? 1 : 0
        }
    }, eY = {
        name: "display",
        initialValue: "inline-block",
        prefix: !1,
        type: 1,
        parse: function(A, e) {
            return e.filter(Ay).reduce(function(A, e) {
                return A | e6(e.value)
            }, 0)
        }
    }, e6 = function(A) {
        switch (A) {
        case "block":
        case "-webkit-box":
            return 2;
        case "inline":
            return 4;
        case "run-in":
            return 8;
        case "flow":
            return 16;
        case "flow-root":
            return 32;
        case "table":
            return 64;
        case "flex":
        case "-webkit-flex":
            return 128;
        case "grid":
        case "-ms-grid":
            return 256;
        case "ruby":
            return 512;
        case "subgrid":
            return 1024;
        case "list-item":
            return 2048;
        case "table-row-group":
            return 4096;
        case "table-header-group":
            return 8192;
        case "table-footer-group":
            return 16384;
        case "table-row":
            return 32768;
        case "table-cell":
            return 65536;
        case "table-column-group":
            return 131072;
        case "table-column":
            return 262144;
        case "table-caption":
            return 524288;
        case "ruby-base":
            return 1048576;
        case "ruby-text":
            return 2097152;
        case "ruby-base-container":
            return 4194304;
        case "ruby-text-container":
            return 8388608;
        case "contents":
            return 16777216;
        case "inline-block":
            return 33554432;
        case "inline-list-item":
            return 67108864;
        case "inline-table":
            return 134217728;
        case "inline-flex":
            return 268435456;
        case "inline-grid":
            return 536870912
        }
        return 0
    }, eW = {
        name: "float",
        initialValue: "none",
        prefix: !1,
        type: 2,
        parse: function(A, e) {
            switch (e) {
            case "left":
                return 1;
            case "right":
                return 2;
            case "inline-start":
                return 3;
            case "inline-end":
                return 4
            }
            return 0
        }
    }, e3 = {
        name: "letter-spacing",
        initialValue: "0",
        prefix: !1,
        type: 0,
        parse: function(A, e) {
            return 20 === e.type && "normal" === e.value ? 0 : 17 === e.type || 15 === e.type ? e.number : 0
        }
    };
    (eI = e || (e = {})).NORMAL = "normal",
    eI.STRICT = "strict";
    var e4, eZ = {
        name: "line-break",
        initialValue: "normal",
        prefix: !1,
        type: 2,
        parse: function(A, t) {
            return "strict" === t ? e.STRICT : (0,
            e.NORMAL)
        }
    }, e7 = {
        name: "line-height",
        initialValue: "normal",
        prefix: !1,
        type: 4
    }, e5 = function(A, e) {
        return Ay(A) && "normal" === A.value ? 1.2 * e : 17 === A.type ? e * A.number : AD(A) ? AV(A, e) : e
    }, e8 = {
        name: "list-style-image",
        initialValue: "none",
        type: 0,
        prefix: !1,
        parse: function(A, e) {
            return 20 === e.type && "none" === e.value ? null : ef.parse(A, e)
        }
    }, eq = {
        name: "list-style-position",
        initialValue: "outside",
        prefix: !1,
        type: 2,
        parse: function(A, e) {
            return "inside" === e ? 0 : 1
        }
    }, ej = {
        name: "list-style-type",
        initialValue: "none",
        prefix: !1,
        type: 2,
        parse: function(A, e) {
            switch (e) {
            case "disc":
                return 0;
            case "circle":
                return 1;
            case "square":
                return 2;
            case "decimal":
                return 3;
            case "cjk-decimal":
                return 4;
            case "decimal-leading-zero":
                return 5;
            case "lower-roman":
                return 6;
            case "upper-roman":
                return 7;
            case "lower-greek":
                return 8;
            case "lower-alpha":
                return 9;
            case "upper-alpha":
                return 10;
            case "arabic-indic":
                return 11;
            case "armenian":
                return 12;
            case "bengali":
                return 13;
            case "cambodian":
                return 14;
            case "cjk-earthly-branch":
                return 15;
            case "cjk-heavenly-stem":
                return 16;
            case "cjk-ideographic":
                return 17;
            case "devanagari":
                return 18;
            case "ethiopic-numeric":
                return 19;
            case "georgian":
                return 20;
            case "gujarati":
                return 21;
            case "gurmukhi":
            case "hebrew":
                return 22;
            case "hiragana":
                return 23;
            case "hiragana-iroha":
                return 24;
            case "japanese-formal":
                return 25;
            case "japanese-informal":
                return 26;
            case "kannada":
                return 27;
            case "katakana":
                return 28;
            case "katakana-iroha":
                return 29;
            case "khmer":
                return 30;
            case "korean-hangul-formal":
                return 31;
            case "korean-hanja-formal":
                return 32;
            case "korean-hanja-informal":
                return 33;
            case "lao":
                return 34;
            case "lower-armenian":
                return 35;
            case "malayalam":
                return 36;
            case "mongolian":
                return 37;
            case "myanmar":
                return 38;
            case "oriya":
                return 39;
            case "persian":
                return 40;
            case "simp-chinese-formal":
                return 41;
            case "simp-chinese-informal":
                return 42;
            case "tamil":
                return 43;
            case "telugu":
                return 44;
            case "thai":
                return 45;
            case "tibetan":
                return 46;
            case "trad-chinese-formal":
                return 47;
            case "trad-chinese-informal":
                return 48;
            case "upper-armenian":
                return 49;
            case "disclosure-open":
                return 50;
            case "disclosure-closed":
                return 51;
            default:
                return -1
            }
        }
    }, ez = function(A) {
        return {
            name: "margin-" + A,
            initialValue: "0",
            prefix: !1,
            type: 4
        }
    }, e9 = ez("top"), tA = ez("right"), te = ez("bottom"), tt = ez("left"), tB = {
        name: "overflow",
        initialValue: "visible",
        prefix: !1,
        type: 1,
        parse: function(A, e) {
            return e.filter(Ay).map(function(A) {
                switch (A.value) {
                case "hidden":
                    return 1;
                case "scroll":
                    return 2;
                case "clip":
                    return 3;
                case "auto":
                    return 4;
                default:
                    return 0
                }
            })
        }
    }, tr = {
        name: "overflow-wrap",
        initialValue: "normal",
        prefix: !1,
        type: 2,
        parse: function(A, e) {
            return "break-word" === e ? "break-word" : "normal"
        }
    }, tn = function(A) {
        return {
            name: "padding-" + A,
            initialValue: "0",
            prefix: !1,
            type: 3,
            format: "length-percentage"
        }
    }, ts = tn("top"), to = tn("right"), ti = tn("bottom"), tQ = tn("left"), tc = {
        name: "text-align",
        initialValue: "left",
        prefix: !1,
        type: 2,
        parse: function(A, e) {
            switch (e) {
            case "right":
                return 2;
            case "center":
            case "justify":
                return 1;
            default:
                return 0
            }
        }
    }, ta = {
        name: "position",
        initialValue: "static",
        prefix: !1,
        type: 2,
        parse: function(A, e) {
            switch (e) {
            case "relative":
                return 1;
            case "absolute":
                return 2;
            case "fixed":
                return 3;
            case "sticky":
                return 4
            }
            return 0
        }
    }, tg = {
        name: "text-shadow",
        initialValue: "none",
        type: 1,
        prefix: !1,
        parse: function(A, e) {
            return 1 === e.length && A_(e[0], "none") ? [] : AL(e).map(function(e) {
                for (var t = {
                    color: A9.TRANSPARENT,
                    offsetX: AS,
                    offsetY: AS,
                    blur: AS
                }, B = 0, r = 0; r < e.length; r++) {
                    var n = e[r];
                    Av(n) ? (0 === B ? t.offsetX = n : 1 === B ? t.offsetY = n : t.blur = n,
                    B++) : t.color = AJ.parse(A, n)
                }
                return t
            })
        }
    }, tw = {
        name: "text-transform",
        initialValue: "none",
        prefix: !1,
        type: 2,
        parse: function(A, e) {
            switch (e) {
            case "uppercase":
                return 2;
            case "lowercase":
                return 1;
            case "capitalize":
                return 3
            }
            return 0
        }
    }, tU = {
        name: "transform",
        initialValue: "none",
        prefix: !0,
        type: 0,
        parse: function(A, e) {
            if (20 === e.type && "none" === e.value)
                return null;
            if (18 === e.type) {
                var t = tC[e.name];
                if (void 0 === t)
                    throw Error('Attempting to parse an unsupported transform function "' + e.name + '"');
                return t(e.values)
            }
            return null
        }
    }, tC = {
        matrix: function(A) {
            var e = A.filter(function(A) {
                return 17 === A.type
            }).map(function(A) {
                return A.number
            });
            return 6 === e.length ? e : null
        },
        matrix3d: function(A) {
            var e = A.filter(function(A) {
                return 17 === A.type
            }).map(function(A) {
                return A.number
            })
              , t = e[0]
              , B = e[1];
            e[2],
            e[3];
            var r = e[4]
              , n = e[5];
            e[6],
            e[7],
            e[8],
            e[9],
            e[10],
            e[11];
            var s = e[12]
              , o = e[13];
            return e[14],
            e[15],
            16 === e.length ? [t, B, r, n, s, o] : null
        }
    }, tl = {
        type: 16,
        number: 50,
        flags: 4
    }, tu = [tl, tl], tF = {
        name: "transform-origin",
        initialValue: "50% 50%",
        prefix: !0,
        type: 1,
        parse: function(A, e) {
            var t = e.filter(AD);
            return 2 !== t.length ? tu : [t[0], t[1]]
        }
    }, tf = {
        name: "visible",
        initialValue: "none",
        prefix: !1,
        type: 2,
        parse: function(A, e) {
            switch (e) {
            case "hidden":
                return 1;
            case "collapse":
                return 2;
            default:
                return 0
            }
        }
    };
    (e4 = t || (t = {})).NORMAL = "normal",
    e4.BREAK_ALL = "break-all",
    e4.KEEP_ALL = "keep-all";
    for (var t$ = {
        name: "word-break",
        initialValue: "normal",
        prefix: !1,
        type: 2,
        parse: function(A, e) {
            switch (e) {
            case "break-all":
                return t.BREAK_ALL;
            case "keep-all":
                return t.KEEP_ALL;
            default:
                return t.NORMAL
            }
        }
    }, th = {
        name: "z-index",
        initialValue: "auto",
        prefix: !1,
        type: 0,
        parse: function(A, e) {
            if (20 === e.type)
                return {
                    auto: !0,
                    order: 0
                };
            if (A2(e))
                return {
                    auto: !1,
                    order: e.number
                };
            throw Error("Invalid z-index number parsed")
        }
    }, td = {
        name: "time",
        parse: function(A, e) {
            if (15 === e.type)
                switch (e.unit.toLowerCase()) {
                case "s":
                    return 1e3 * e.number;
                case "ms":
                    return e.number
                }
            throw Error("Unsupported time type")
        }
    }, tH = {
        name: "opacity",
        initialValue: "1",
        type: 0,
        prefix: !1,
        parse: function(A, e) {
            return A2(e) ? e.number : 1
        }
    }, tp = {
        name: "text-decoration-color",
        initialValue: "transparent",
        prefix: !1,
        type: 3,
        format: "color"
    }, tE = {
        name: "text-decoration-line",
        initialValue: "none",
        prefix: !1,
        type: 1,
        parse: function(A, e) {
            return e.filter(Ay).map(function(A) {
                switch (A.value) {
                case "underline":
                    return 1;
                case "overline":
                    return 2;
                case "line-through":
                    return 3;
                case "none":
                    return 4
                }
                return 0
            }).filter(function(A) {
                return 0 !== A
            })
        }
    }, tI = {
        name: "font-family",
        initialValue: "",
        prefix: !1,
        type: 1,
        parse: function(A, e) {
            var t = []
              , B = [];
            return e.forEach(function(A) {
                switch (A.type) {
                case 20:
                case 0:
                    t.push(A.value);
                    break;
                case 17:
                    t.push(A.number.toString());
                    break;
                case 4:
                    B.push(t.join(" ")),
                    t.length = 0
                }
            }),
            t.length && B.push(t.join(" ")),
            B.map(function(A) {
                return -1 === A.indexOf(" ") ? A : "'" + A + "'"
            })
        }
    }, t2 = {
        name: "font-size",
        initialValue: "0",
        prefix: !1,
        type: 3,
        format: "length"
    }, ty = {
        name: "font-weight",
        initialValue: "normal",
        type: 0,
        prefix: !1,
        parse: function(A, e) {
            return A2(e) ? e.number : Ay(e) && "bold" === e.value ? 700 : 400
        }
    }, tK = {
        name: "font-variant",
        initialValue: "none",
        type: 1,
        prefix: !1,
        parse: function(A, e) {
            return e.filter(Ay).map(function(A) {
                return A.value
            })
        }
    }, t_ = {
        name: "font-style",
        initialValue: "normal",
        prefix: !1,
        type: 2,
        parse: function(A, e) {
            switch (e) {
            case "oblique":
                return "oblique";
            case "italic":
                return "italic";
            default:
                return "normal"
            }
        }
    }, tx = function(A, e) {
        return (A & e) != 0
    }, tm = {
        name: "content",
        initialValue: "none",
        type: 1,
        prefix: !1,
        parse: function(A, e) {
            if (0 === e.length)
                return [];
            var t = e[0];
            return 20 === t.type && "none" === t.value ? [] : e
        }
    }, tL = {
        name: "counter-increment",
        initialValue: "none",
        prefix: !0,
        type: 1,
        parse: function(A, e) {
            if (0 === e.length)
                return null;
            var t = e[0];
            if (20 === t.type && "none" === t.value)
                return null;
            for (var B = [], r = e.filter(Ax), n = 0; n < r.length; n++) {
                var s = r[n]
                  , o = r[n + 1];
                if (20 === s.type) {
                    var i = o && A2(o) ? o.number : 1;
                    B.push({
                        counter: s.value,
                        increment: i
                    })
                }
            }
            return B
        }
    }, tb = {
        name: "counter-reset",
        initialValue: "none",
        prefix: !0,
        type: 1,
        parse: function(A, e) {
            if (0 === e.length)
                return [];
            for (var t = [], B = e.filter(Ax), r = 0; r < B.length; r++) {
                var n = B[r]
                  , s = B[r + 1];
                if (Ay(n) && "none" !== n.value) {
                    var o = s && A2(s) ? s.number : 0;
                    t.push({
                        counter: n.value,
                        reset: o
                    })
                }
            }
            return t
        }
    }, tv = {
        name: "duration",
        initialValue: "0s",
        prefix: !1,
        type: 1,
        parse: function(A, e) {
            return e.filter(AI).map(function(e) {
                return td.parse(A, e)
            })
        }
    }, tD = {
        name: "quotes",
        initialValue: "none",
        prefix: !0,
        type: 1,
        parse: function(A, e) {
            if (0 === e.length)
                return null;
            var t = e[0];
            if (20 === t.type && "none" === t.value)
                return null;
            var B = []
              , r = e.filter(AK);
            if (r.length % 2 != 0)
                return null;
            for (var n = 0; n < r.length; n += 2) {
                var s = r[n].value
                  , o = r[n + 1].value;
                B.push({
                    open: s,
                    close: o
                })
            }
            return B
        }
    }, t0 = function(A, e, t) {
        if (!A)
            return "";
        var B = A[Math.min(e, A.length - 1)];
        return B ? t ? B.open : B.close : ""
    }, tS = {
        name: "box-shadow",
        initialValue: "none",
        type: 1,
        prefix: !1,
        parse: function(A, e) {
            return 1 === e.length && A_(e[0], "none") ? [] : AL(e).map(function(e) {
                for (var t = {
                    color: 255,
                    offsetX: AS,
                    offsetY: AS,
                    blur: AS,
                    spread: AS,
                    inset: !1
                }, B = 0, r = 0; r < e.length; r++) {
                    var n = e[r];
                    A_(n, "inset") ? t.inset = !0 : Av(n) ? (0 === B ? t.offsetX = n : 1 === B ? t.offsetY = n : 2 === B ? t.blur = n : t.spread = n,
                    B++) : t.color = AJ.parse(A, n)
                }
                return t
            })
        }
    }, tG = {
        name: "paint-order",
        initialValue: "normal",
        prefix: !1,
        type: 1,
        parse: function(A, e) {
            var t = [];
            return e.filter(Ay).forEach(function(A) {
                switch (A.value) {
                case "stroke":
                    t.push(1);
                    break;
                case "fill":
                    t.push(0);
                    break;
                case "markers":
                    t.push(2)
                }
            }),
            [0, 1, 2].forEach(function(A) {
                -1 === t.indexOf(A) && t.push(A)
            }),
            t
        }
    }, tT = {
        name: "-webkit-text-stroke-color",
        initialValue: "currentcolor",
        prefix: !1,
        type: 3,
        format: "color"
    }, tO = {
        name: "-webkit-text-stroke-width",
        initialValue: "0",
        type: 0,
        prefix: !1,
        parse: function(A, e) {
            return AI(e) ? e.number : 0
        }
    }, tV = function() {
        function A(A, e) {
            this.animationDuration = t1(A, tv, e.animationDuration),
            this.backgroundClip = t1(A, eA, e.backgroundClip),
            this.backgroundColor = t1(A, ee, e.backgroundColor),
            this.backgroundImage = t1(A, eh, e.backgroundImage),
            this.backgroundOrigin = t1(A, ed, e.backgroundOrigin),
            this.backgroundPosition = t1(A, eH, e.backgroundPosition),
            this.backgroundRepeat = t1(A, ep, e.backgroundRepeat),
            this.backgroundSize = t1(A, e2, e.backgroundSize),
            this.borderTopColor = t1(A, e_, e.borderTopColor),
            this.borderRightColor = t1(A, ex, e.borderRightColor),
            this.borderBottomColor = t1(A, em, e.borderBottomColor),
            this.borderLeftColor = t1(A, eL, e.borderLeftColor),
            this.borderTopLeftRadius = t1(A, ev, e.borderTopLeftRadius),
            this.borderTopRightRadius = t1(A, eD, e.borderTopRightRadius),
            this.borderBottomRightRadius = t1(A, e0, e.borderBottomRightRadius),
            this.borderBottomLeftRadius = t1(A, eS, e.borderBottomLeftRadius),
            this.borderTopStyle = t1(A, eT, e.borderTopStyle),
            this.borderRightStyle = t1(A, eO, e.borderRightStyle),
            this.borderBottomStyle = t1(A, eV, e.borderBottomStyle),
            this.borderLeftStyle = t1(A, eM, e.borderLeftStyle),
            this.borderTopWidth = t1(A, e1, e.borderTopWidth),
            this.borderRightWidth = t1(A, eR, e.borderRightWidth),
            this.borderBottomWidth = t1(A, eN, e.borderBottomWidth),
            this.borderLeftWidth = t1(A, eP, e.borderLeftWidth),
            this.boxShadow = t1(A, tS, e.boxShadow),
            this.color = t1(A, eJ, e.color),
            this.direction = t1(A, eX, e.direction),
            this.display = t1(A, eY, e.display),
            this.float = t1(A, eW, e.cssFloat),
            this.fontFamily = t1(A, tI, e.fontFamily),
            this.fontSize = t1(A, t2, e.fontSize),
            this.fontStyle = t1(A, t_, e.fontStyle),
            this.fontVariant = t1(A, tK, e.fontVariant),
            this.fontWeight = t1(A, ty, e.fontWeight),
            this.letterSpacing = t1(A, e3, e.letterSpacing),
            this.lineBreak = t1(A, eZ, e.lineBreak),
            this.lineHeight = t1(A, e7, e.lineHeight),
            this.listStyleImage = t1(A, e8, e.listStyleImage),
            this.listStylePosition = t1(A, eq, e.listStylePosition),
            this.listStyleType = t1(A, ej, e.listStyleType),
            this.marginTop = t1(A, e9, e.marginTop),
            this.marginRight = t1(A, tA, e.marginRight),
            this.marginBottom = t1(A, te, e.marginBottom),
            this.marginLeft = t1(A, tt, e.marginLeft),
            this.opacity = t1(A, tH, e.opacity);
            var t, B, r = t1(A, tB, e.overflow);
            this.overflowX = r[0],
            this.overflowY = r[r.length > 1 ? 1 : 0],
            this.overflowWrap = t1(A, tr, e.overflowWrap),
            this.paddingTop = t1(A, ts, e.paddingTop),
            this.paddingRight = t1(A, to, e.paddingRight),
            this.paddingBottom = t1(A, ti, e.paddingBottom),
            this.paddingLeft = t1(A, tQ, e.paddingLeft),
            this.paintOrder = t1(A, tG, e.paintOrder),
            this.position = t1(A, ta, e.position),
            this.textAlign = t1(A, tc, e.textAlign),
            this.textDecorationColor = t1(A, tp, null !== (t = e.textDecorationColor) && void 0 !== t ? t : e.color),
            this.textDecorationLine = t1(A, tE, null !== (B = e.textDecorationLine) && void 0 !== B ? B : e.textDecoration),
            this.textShadow = t1(A, tg, e.textShadow),
            this.textTransform = t1(A, tw, e.textTransform),
            this.transform = t1(A, tU, e.transform),
            this.transformOrigin = t1(A, tF, e.transformOrigin),
            this.visibility = t1(A, tf, e.visibility),
            this.webkitTextStrokeColor = t1(A, tT, e.webkitTextStrokeColor),
            this.webkitTextStrokeWidth = t1(A, tO, e.webkitTextStrokeWidth),
            this.wordBreak = t1(A, t$, e.wordBreak),
            this.zIndex = t1(A, th, e.zIndex)
        }
        return A.prototype.isVisible = function() {
            return this.display > 0 && this.opacity > 0 && 0 === this.visibility
        }
        ,
        A.prototype.isTransparent = function() {
            return AX(this.backgroundColor)
        }
        ,
        A.prototype.isTransformed = function() {
            return null !== this.transform
        }
        ,
        A.prototype.isPositioned = function() {
            return 0 !== this.position
        }
        ,
        A.prototype.isPositionedWithZIndex = function() {
            return this.isPositioned() && !this.zIndex.auto
        }
        ,
        A.prototype.isFloating = function() {
            return 0 !== this.float
        }
        ,
        A.prototype.isInlineLevel = function() {
            return tx(this.display, 4) || tx(this.display, 33554432) || tx(this.display, 268435456) || tx(this.display, 536870912) || tx(this.display, 67108864) || tx(this.display, 134217728)
        }
        ,
        A
    }(), tM = function A(e, t) {
        this.content = t1(e, tm, t.content),
        this.quotes = t1(e, tD, t.quotes)
    }, tk = function A(e, t) {
        this.counterIncrement = t1(e, tL, t.counterIncrement),
        this.counterReset = t1(e, tb, t.counterReset)
    }, t1 = function(A, e, t) {
        var B = new Ap
          , r = null != t ? t.toString() : e.initialValue;
        B.write(r);
        var n = new AE(B.read());
        switch (e.type) {
        case 2:
            var s = n.parseComponentValue();
            return e.parse(A, Ay(s) ? s.value : e.initialValue);
        case 0:
            return e.parse(A, n.parseComponentValue());
        case 1:
            return e.parse(A, n.parseComponentValues());
        case 4:
            return n.parseComponentValue();
        case 3:
            switch (e.format) {
            case "angle":
                return A1.parse(A, n.parseComponentValue());
            case "color":
                return AJ.parse(A, n.parseComponentValue());
            case "image":
                return ef.parse(A, n.parseComponentValue());
            case "length":
                var o = n.parseComponentValue();
                return Av(o) ? o : AS;
            case "length-percentage":
                var i = n.parseComponentValue();
                return AD(i) ? i : AS;
            case "time":
                return td.parse(A, n.parseComponentValue())
            }
        }
    }, tR = function(A) {
        var e = A.getAttribute("data-html2canvas-debug");
        switch (e) {
        case "all":
            return 1;
        case "clone":
            return 2;
        case "parse":
            return 3;
        case "render":
            return 4;
        default:
            return 0
        }
    }, tN = function(A, e) {
        var t = tR(A);
        return 1 === t || e === t
    }, tP = function A(e, t) {
        this.context = e,
        this.textNodes = [],
        this.elements = [],
        this.flags = 0,
        tN(t, 3),
        this.styles = new tV(e,window.getComputedStyle(t, null)),
        re(t) && (this.styles.animationDuration.some(function(A) {
            return A > 0
        }) && (t.style.animationDuration = "0s"),
        null !== this.styles.transform && (t.style.transform = "none")),
        this.bounds = g(this.context, t),
        tN(t, 4) && (this.flags |= 16)
    }, tJ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", tX = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), tY = 0; tY < tJ.length; tY++)
        tX[tJ.charCodeAt(tY)] = tY;
    for (var t6 = 2112, tW = function(A, e, t) {
        return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t))
    }, t3 = function() {
        function A(A, e, t, B, r, n) {
            this.initialValue = A,
            this.errorValue = e,
            this.highStart = t,
            this.highValueIndex = B,
            this.index = r,
            this.data = n
        }
        return A.prototype.get = function(A) {
            var e;
            if (A >= 0) {
                if (A < 55296 || A > 56319 && A <= 65535)
                    return e = ((e = this.index[A >> 5]) << 2) + (31 & A),
                    this.data[e];
                if (A <= 65535)
                    return e = ((e = this.index[2048 + (A - 55296 >> 5)]) << 2) + (31 & A),
                    this.data[e];
                if (A < this.highStart)
                    return e = t6 - 32 + (A >> 11),
                    e = this.index[e],
                    e += A >> 5 & 63,
                    e = ((e = this.index[e]) << 2) + (31 & A),
                    this.data[e];
                if (A <= 1114111)
                    return this.data[this.highValueIndex]
            }
            return this.errorValue
        }
        ,
        A
    }(), t4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", tZ = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), t7 = 0; t7 < t4.length; t7++)
        tZ[t4.charCodeAt(t7)] = t7;
    var t5, t8, tq, tj, tz, t9, BA, Be, Bt, BB = function(A) {
        for (var e = [], t = 0, B = A.length; t < B; ) {
            var r = A.charCodeAt(t++);
            if (r >= 55296 && r <= 56319 && t < B) {
                var n = A.charCodeAt(t++);
                (64512 & n) == 56320 ? e.push(((1023 & r) << 10) + (1023 & n) + 65536) : (e.push(r),
                t--)
            } else
                e.push(r)
        }
        return e
    }, Br = function() {
        for (var A = [], e = 0; e < arguments.length; e++)
            A[e] = arguments[e];
        if (String.fromCodePoint)
            return String.fromCodePoint.apply(String, A);
        var t = A.length;
        if (!t)
            return "";
        for (var B = [], r = -1, n = ""; ++r < t; ) {
            var s = A[r];
            s <= 65535 ? B.push(s) : (s -= 65536,
            B.push((s >> 10) + 55296, s % 1024 + 56320)),
            (r + 1 === t || B.length > 16384) && (n += String.fromCharCode.apply(String, B),
            B.length = 0)
        }
        return n
    }, Bn = (t8 = Array.isArray(t5 = function(A) {
        var e, t, B, r, n, s = .75 * A.length, o = A.length, i = 0;
        "=" === A[A.length - 1] && (s--,
        "=" === A[A.length - 2] && s--);
        var Q = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? new ArrayBuffer(s) : Array(s)
          , c = Array.isArray(Q) ? Q : new Uint8Array(Q);
        for (e = 0; e < o; e += 4)
            t = tX[A.charCodeAt(e)],
            B = tX[A.charCodeAt(e + 1)],
            r = tX[A.charCodeAt(e + 2)],
            n = tX[A.charCodeAt(e + 3)],
            c[i++] = t << 2 | B >> 4,
            c[i++] = (15 & B) << 4 | r >> 2,
            c[i++] = (3 & r) << 6 | 63 & n;
        return Q
    }("AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=")) ? function(A) {
        for (var e = A.length, t = [], B = 0; B < e; B += 4)
            t.push(A[B + 3] << 24 | A[B + 2] << 16 | A[B + 1] << 8 | A[B]);
        return t
    }(t5) : new Uint32Array(t5),
    tq = Array.isArray(t5) ? function(A) {
        for (var e = A.length, t = [], B = 0; B < e; B += 2)
            t.push(A[B + 1] << 8 | A[B]);
        return t
    }(t5) : new Uint16Array(t5),
    tj = tW(tq, 12, t8[4] / 2),
    Be = 2 === t8[5] ? tW(tq, (24 + t8[4]) / 2) : (tz = t8,
    t9 = Math.ceil((24 + t8[4]) / 4),
    tz.slice ? tz.slice(t9, BA) : new Uint32Array(Array.prototype.slice.call(tz, t9, BA))),
    new t3(t8[0],t8[1],t8[2],t8[3],tj,Be)), Bs = "\xd7", Bo = function(A) {
        return Bn.get(A)
    }, Bi = function(A, e, t) {
        var B = t - 2
          , r = e[B]
          , n = e[t - 1]
          , s = e[t];
        if (2 === n && 3 === s)
            return Bs;
        if (2 === n || 3 === n || 4 === n || 2 === s || 3 === s || 4 === s)
            return "\xf7";
        if (8 === n && -1 !== [8, 9, 11, 12].indexOf(s) || (11 === n || 9 === n) && (9 === s || 10 === s) || (12 === n || 10 === n) && 10 === s || 13 === s || 5 === s || 7 === s || 1 === n)
            return Bs;
        if (13 === n && 14 === s) {
            for (; 5 === r; )
                r = e[--B];
            if (14 === r)
                return Bs
        }
        if (15 === n && 15 === s) {
            for (var o = 0; 15 === r; )
                o++,
                r = e[--B];
            if (o % 2 == 0)
                return Bs
        }
        return "\xf7"
    }, BQ = function(A) {
        var e = BB(A)
          , t = e.length
          , B = 0
          , r = 0
          , n = e.map(Bo);
        return {
            next: function() {
                if (B >= t)
                    return {
                        done: !0,
                        value: null
                    };
                for (var A = Bs; B < t && (A = Bi(e, n, ++B)) === Bs; )
                    ;
                if (A !== Bs || B === t) {
                    var s = Br.apply(null, e.slice(r, B));
                    return r = B,
                    {
                        value: s,
                        done: !1
                    }
                }
                return {
                    done: !0,
                    value: null
                }
            }
        }
    }, Bc = function(A) {
        for (var e, t = BQ(A), B = []; !(e = t.next()).done; )
            e.value && B.push(e.value.slice());
        return B
    }, Ba = function(A) {
        return 0 === A[0] && 255 === A[1] && 0 === A[2] && 255 === A[3]
    }, Bg = function(A, e, t, B, r) {
        var n = "http://www.w3.org/2000/svg"
          , s = document.createElementNS(n, "svg")
          , o = document.createElementNS(n, "foreignObject");
        return s.setAttributeNS(null, "width", A.toString()),
        s.setAttributeNS(null, "height", e.toString()),
        o.setAttributeNS(null, "width", "100%"),
        o.setAttributeNS(null, "height", "100%"),
        o.setAttributeNS(null, "x", t.toString()),
        o.setAttributeNS(null, "y", B.toString()),
        o.setAttributeNS(null, "externalResourcesRequired", "true"),
        s.appendChild(o),
        o.appendChild(r),
        s
    }, Bw = function(A) {
        return new Promise(function(e, t) {
            var B = new Image;
            B.onload = function() {
                return e(B)
            }
            ,
            B.onerror = t,
            B.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A))
        }
        )
    }, BU = {
        get SUPPORT_RANGE_BOUNDS() {
            var BC = function(A) {
                if (A.createRange) {
                    var e = A.createRange();
                    if (e.getBoundingClientRect) {
                        var t = A.createElement("boundtest");
                        t.style.height = "123px",
                        t.style.display = "block",
                        A.body.appendChild(t),
                        e.selectNode(t);
                        var B = Math.round(e.getBoundingClientRect().height);
                        if (A.body.removeChild(t),
                        123 === B)
                            return !0
                    }
                }
                return !1
            }(document);
            return Object.defineProperty(BU, "SUPPORT_RANGE_BOUNDS", {
                value: BC
            }),
            BC
        },
        get SUPPORT_WORD_BREAKING() {
            var Bl, Bu, BF, Bf, B$, Bh, Bd, BH, Bp = BU.SUPPORT_RANGE_BOUNDS && ((Bu = (Bl = document).createElement("boundtest")).style.width = "50px",
            Bu.style.display = "block",
            Bu.style.fontSize = "12px",
            Bu.style.letterSpacing = "0px",
            Bu.style.wordSpacing = "0px",
            Bl.body.appendChild(Bu),
            BF = Bl.createRange(),
            Bu.innerHTML = "function" == typeof "".repeat ? "&#128104;".repeat(10) : "",
            B$ = U((Bf = Bu.firstChild).data).map(function(A) {
                return C(A)
            }),
            Bh = 0,
            Bd = {},
            BH = B$.every(function(A, e) {
                BF.setStart(Bf, Bh),
                BF.setEnd(Bf, Bh + A.length);
                var t = BF.getBoundingClientRect();
                Bh += A.length;
                var B = t.x > Bd.x || t.y > Bd.y;
                return Bd = t,
                0 === e || B
            }),
            Bl.body.removeChild(Bu),
            BH);
            return Object.defineProperty(BU, "SUPPORT_WORD_BREAKING", {
                value: Bp
            }),
            Bp
        },
        get SUPPORT_SVG_DRAWING() {
            var BE = function(A) {
                var e = new Image
                  , t = A.createElement("canvas")
                  , B = t.getContext("2d");
                if (!B)
                    return !1;
                e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                try {
                    B.drawImage(e, 0, 0),
                    t.toDataURL()
                } catch (r) {
                    return !1
                }
                return !0
            }(document);
            return Object.defineProperty(BU, "SUPPORT_SVG_DRAWING", {
                value: BE
            }),
            BE
        },
        get SUPPORT_FOREIGNOBJECT_DRAWING() {
            var BI = "function" == typeof Array.from && "function" == typeof window.fetch ? function(A) {
                var e = A.createElement("canvas");
                e.width = 100,
                e.height = 100;
                var t = e.getContext("2d");
                if (!t)
                    return Promise.reject(!1);
                t.fillStyle = "rgb(0, 255, 0)",
                t.fillRect(0, 0, 100, 100);
                var B = new Image
                  , r = e.toDataURL();
                B.src = r;
                var n = Bg(100, 100, 0, 0, B);
                return t.fillStyle = "red",
                t.fillRect(0, 0, 100, 100),
                Bw(n).then(function(e) {
                    t.drawImage(e, 0, 0);
                    var B = t.getImageData(0, 0, 100, 100).data;
                    t.fillStyle = "red",
                    t.fillRect(0, 0, 100, 100);
                    var n = A.createElement("div");
                    return n.style.backgroundImage = "url(" + r + ")",
                    n.style.height = "100px",
                    Ba(B) ? Bw(Bg(100, 100, 0, 0, n)) : Promise.reject(!1)
                }).then(function(A) {
                    return t.drawImage(A, 0, 0),
                    Ba(t.getImageData(0, 0, 100, 100).data)
                }).catch(function() {
                    return !1
                })
            }(document) : Promise.resolve(!1);
            return Object.defineProperty(BU, "SUPPORT_FOREIGNOBJECT_DRAWING", {
                value: BI
            }),
            BI
        },
        get SUPPORT_CORS_IMAGES() {
            var B2 = void 0 !== new Image().crossOrigin;
            return Object.defineProperty(BU, "SUPPORT_CORS_IMAGES", {
                value: B2
            }),
            B2
        },
        get SUPPORT_RESPONSE_TYPE() {
            var By = "string" == typeof new XMLHttpRequest().responseType;
            return Object.defineProperty(BU, "SUPPORT_RESPONSE_TYPE", {
                value: By
            }),
            By
        },
        get SUPPORT_CORS_XHR() {
            var BK = "withCredentials"in new XMLHttpRequest;
            return Object.defineProperty(BU, "SUPPORT_CORS_XHR", {
                value: BK
            }),
            BK
        }
    }, B_ = function A(e, t) {
        this.text = e,
        this.bounds = t
    }, Bx = function(A, e, t, B) {
        var r = Bv(e, t)
          , n = []
          , s = 0;
        return r.forEach(function(e) {
            if (t.textDecorationLine.length || e.trim().length > 0) {
                if (BU.SUPPORT_RANGE_BOUNDS)
                    BU.SUPPORT_WORD_BREAKING ? n.push(new B_(e,Bb(A, B, s, e.length))) : n.push(new B_(e,a.fromDOMRectList(A, BL(B, s, e.length).getClientRects())));
                else {
                    var r = B.splitText(e.length);
                    n.push(new B_(e,Bm(A, B))),
                    B = r
                }
            } else
                BU.SUPPORT_RANGE_BOUNDS || (B = B.splitText(e.length));
            s += e.length
        }),
        n
    }, Bm = function(A, e) {
        var t = e.ownerDocument;
        if (t) {
            var B = t.createElement("html2canvaswrapper");
            B.appendChild(e.cloneNode(!0));
            var r = e.parentNode;
            if (r) {
                r.replaceChild(B, e);
                var n = g(A, B);
                return B.firstChild && r.replaceChild(B.firstChild, B),
                n
            }
        }
        return a.EMPTY
    }, BL = function(A, e, t) {
        var B = A.ownerDocument;
        if (!B)
            throw Error("Node has no owner document");
        var r = B.createRange();
        return r.setStart(A, e),
        r.setEnd(A, e + t),
        r
    }, Bb = function(A, e, t, B) {
        return a.fromClientRect(A, BL(e, t, B).getBoundingClientRect())
    }, Bv = function(A, e) {
        return 0 !== e.letterSpacing ? Bc(A) : B0(A, e)
    }, BD = [32, 160, 4961, 65792, 65793, 4153, 4241, ], B0 = function(A, e) {
        for (var t, B = J(A, {
            lineBreak: e.lineBreak,
            wordBreak: "break-word" === e.overflowWrap ? "break-word" : e.wordBreak
        }), r = []; !(t = B.next()).done; )
            !function() {
                if (t.value) {
                    var A = U(t.value.slice())
                      , e = "";
                    A.forEach(function(A) {
                        -1 === BD.indexOf(A) ? e += C(A) : (e.length && r.push(e),
                        r.push(C(A)),
                        e = "")
                    }),
                    e.length && r.push(e)
                }
            }();
        return r
    }, BS = function A(e, t, B) {
        this.text = BG(t.data, B.textTransform),
        this.textBounds = Bx(e, this.text, B, t)
    }, BG = function(A, e) {
        switch (e) {
        case 1:
            return A.toLowerCase();
        case 3:
            return A.replace(BT, BO);
        case 2:
            return A.toUpperCase();
        default:
            return A
        }
    }, BT = /(^|\s|:|-|\(|\))([a-z])/g, BO = function(A, e, t) {
        return A.length > 0 ? e + t.toUpperCase() : A
    }, BV = function(A) {
        function e(e, t) {
            var B = A.call(this, e, t) || this;
            return B.src = t.currentSrc || t.src,
            B.intrinsicWidth = t.naturalWidth,
            B.intrinsicHeight = t.naturalHeight,
            B.context.cache.addImage(B.src),
            B
        }
        return s(e, A),
        e
    }(tP), BM = function(A) {
        function e(e, t) {
            var B = A.call(this, e, t) || this;
            return B.canvas = t,
            B.intrinsicWidth = t.width,
            B.intrinsicHeight = t.height,
            B
        }
        return s(e, A),
        e
    }(tP), Bk = function(A) {
        function e(e, t) {
            var B = A.call(this, e, t) || this
              , r = new XMLSerializer
              , n = g(e, t);
            return t.setAttribute("width", n.width + "px"),
            t.setAttribute("height", n.height + "px"),
            B.svg = "data:image/svg+xml," + encodeURIComponent(r.serializeToString(t)),
            B.intrinsicWidth = t.width.baseVal.value,
            B.intrinsicHeight = t.height.baseVal.value,
            B.context.cache.addImage(B.svg),
            B
        }
        return s(e, A),
        e
    }(tP), B1 = function(A) {
        function e(e, t) {
            var B = A.call(this, e, t) || this;
            return B.value = t.value,
            B
        }
        return s(e, A),
        e
    }(tP), BR = function(A) {
        function e(e, t) {
            var B = A.call(this, e, t) || this;
            return B.start = t.start,
            B.reversed = "boolean" == typeof t.reversed && !0 === t.reversed,
            B
        }
        return s(e, A),
        e
    }(tP), BN = [{
        type: 15,
        flags: 0,
        unit: "px",
        number: 3
    }, ], BP = [{
        type: 16,
        flags: 0,
        number: 50
    }, ], BJ = function(A) {
        var e = A.type === B6 ? Array(A.value.length + 1).join("•") : A.value;
        return 0 === e.length ? A.placeholder || "" : e
    }, BX = "checkbox", BY = "radio", B6 = "password", BW = function(A) {
        function e(e, t) {
            var B, r = A.call(this, e, t) || this;
            switch (r.type = t.type.toLowerCase(),
            r.checked = t.checked,
            r.value = BJ(t),
            (r.type === BX || r.type === BY) && (r.styles.backgroundColor = 3739148031,
            r.styles.borderTopColor = r.styles.borderRightColor = r.styles.borderBottomColor = r.styles.borderLeftColor = 2779096575,
            r.styles.borderTopWidth = r.styles.borderRightWidth = r.styles.borderBottomWidth = r.styles.borderLeftWidth = 1,
            r.styles.borderTopStyle = r.styles.borderRightStyle = r.styles.borderBottomStyle = r.styles.borderLeftStyle = 1,
            r.styles.backgroundClip = [0],
            r.styles.backgroundOrigin = [0],
            r.bounds = (B = r.bounds).width > B.height ? new a(B.left + (B.width - B.height) / 2,B.top,B.height,B.height) : B.width < B.height ? new a(B.left,B.top + (B.height - B.width) / 2,B.width,B.width) : B),
            r.type) {
            case BX:
                r.styles.borderTopRightRadius = r.styles.borderTopLeftRadius = r.styles.borderBottomRightRadius = r.styles.borderBottomLeftRadius = BN;
                break;
            case BY:
                r.styles.borderTopRightRadius = r.styles.borderTopLeftRadius = r.styles.borderBottomRightRadius = r.styles.borderBottomLeftRadius = BP
            }
            return r
        }
        return s(e, A),
        e
    }(tP), B3 = function(A) {
        function e(e, t) {
            var B = A.call(this, e, t) || this
              , r = t.options[t.selectedIndex || 0];
            return B.value = r && r.text || "",
            B
        }
        return s(e, A),
        e
    }(tP), B4 = function(A) {
        function e(e, t) {
            var B = A.call(this, e, t) || this;
            return B.value = t.value,
            B
        }
        return s(e, A),
        e
    }(tP), BZ = function(A) {
        function e(e, t) {
            var B = A.call(this, e, t) || this;
            B.src = t.src,
            B.width = parseInt(t.width, 10) || 0,
            B.height = parseInt(t.height, 10) || 0,
            B.backgroundColor = B.styles.backgroundColor;
            try {
                if (t.contentWindow && t.contentWindow.document && t.contentWindow.document.documentElement) {
                    B.tree = Bq(e, t.contentWindow.document.documentElement);
                    var r = t.contentWindow.document.documentElement ? Az(e, getComputedStyle(t.contentWindow.document.documentElement).backgroundColor) : A9.TRANSPARENT
                      , n = t.contentWindow.document.body ? Az(e, getComputedStyle(t.contentWindow.document.body).backgroundColor) : A9.TRANSPARENT;
                    B.backgroundColor = AX(r) ? AX(n) ? B.styles.backgroundColor : n : r
                }
            } catch (s) {}
            return B
        }
        return s(e, A),
        e
    }(tP), B7 = ["OL", "UL", "MENU"], B5 = function(A, e, t, B) {
        for (var r = e.firstChild, n = void 0; r; r = n)
            if (n = r.nextSibling,
            B9(r) && r.data.trim().length > 0)
                t.textNodes.push(new BS(A,r,t.styles));
            else if (rA(r)) {
                if (rU(r) && r.assignedNodes)
                    r.assignedNodes().forEach(function(e) {
                        return B5(A, e, t, B)
                    });
                else {
                    var s = B8(A, r);
                    !s.styles.isVisible() || (Bj(r, s, B) ? s.flags |= 4 : Bz(s.styles) && (s.flags |= 2),
                    -1 !== B7.indexOf(r.tagName) && (s.flags |= 8),
                    t.elements.push(s),
                    r.slot,
                    r.shadowRoot ? B5(A, r.shadowRoot, s, B) : rg(r) || rs(r) || rw(r) || B5(A, r, s, B))
                }
            }
    }, B8 = function(A, e) {
        return rQ(e) ? new BV(A,e) : ri(e) ? new BM(A,e) : rs(e) ? new Bk(A,e) : rB(e) ? new B1(A,e) : rr(e) ? new BR(A,e) : rn(e) ? new BW(A,e) : rw(e) ? new B3(A,e) : rg(e) ? new B4(A,e) : rc(e) ? new BZ(A,e) : new tP(A,e)
    }, Bq = function(A, e) {
        var t = B8(A, e);
        return t.flags |= 4,
        B5(A, e, t, t),
        t
    }, Bj = function(A, e, t) {
        return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || ro(A) && t.styles.isTransparent()
    }, Bz = function(A) {
        return A.isPositioned() || A.isFloating()
    }, B9 = function(A) {
        return A.nodeType === Node.TEXT_NODE
    }, rA = function(A) {
        return A.nodeType === Node.ELEMENT_NODE
    }, re = function(A) {
        return rA(A) && void 0 !== A.style && !rt(A)
    }, rt = function(A) {
        return "object" == typeof A.className
    }, rB = function(A) {
        return "LI" === A.tagName
    }, rr = function(A) {
        return "OL" === A.tagName
    }, rn = function(A) {
        return "INPUT" === A.tagName
    }, rs = function(A) {
        return "svg" === A.tagName
    }, ro = function(A) {
        return "BODY" === A.tagName
    }, ri = function(A) {
        return "CANVAS" === A.tagName
    }, rQ = function(A) {
        return "IMG" === A.tagName
    }, rc = function(A) {
        return "IFRAME" === A.tagName
    }, ra = function(A) {
        return "STYLE" === A.tagName
    }, rg = function(A) {
        return "TEXTAREA" === A.tagName
    }, rw = function(A) {
        return "SELECT" === A.tagName
    }, rU = function(A) {
        return "SLOT" === A.tagName
    }, rC = function() {
        function A() {
            this.counters = {}
        }
        return A.prototype.getCounterValue = function(A) {
            var e = this.counters[A];
            return e && e.length ? e[e.length - 1] : 1
        }
        ,
        A.prototype.getCounterValues = function(A) {
            var e;
            return this.counters[A] || []
        }
        ,
        A.prototype.pop = function(A) {
            var e = this;
            A.forEach(function(A) {
                return e.counters[A].pop()
            })
        }
        ,
        A.prototype.parse = function(A) {
            var e = this
              , t = A.counterIncrement
              , B = A.counterReset
              , r = !0;
            null !== t && t.forEach(function(A) {
                var t = e.counters[A.counter];
                t && 0 !== A.increment && (r = !1,
                t.length || t.push(1),
                t[Math.max(0, t.length - 1)] += A.increment)
            });
            var n = [];
            return r && B.forEach(function(A) {
                var t = e.counters[A.counter];
                n.push(A.counter),
                t || (t = e.counters[A.counter] = []),
                t.push(A.reset)
            }),
            n
        }
        ,
        A
    }(), rl = {
        integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I", ]
    }, ru = {
        integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, ],
        values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա", ]
    }, rF = {
        integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, ],
        values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א", ]
    }, rf = {
        integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, ],
        values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა", ]
    }, r$ = function(A, e, t, B, r, n) {
        return A < e || A > t ? rK(A, r, n.length > 0) : B.integers.reduce(function(e, t, r) {
            for (; A >= t; )
                A -= t,
                e += B.values[r];
            return e
        }, "") + n
    }, rh = function(A, e, t, B) {
        var r = "";
        do
            !t && A--,
            r = B(A) + r,
            A /= e;
        while (A * e >= e);
        return r
    }, rd = function(A, e, t, B, r) {
        var n = t - e + 1;
        return (A < 0 ? "-" : "") + (rh(Math.abs(A), n, B, function(A) {
            return C(Math.floor(A % n) + e)
        }) + r)
    }, rH = function(A, e, t) {
        void 0 === t && (t = ". ");
        var B = e.length;
        return rh(Math.abs(A), B, !1, function(A) {
            return e[Math.floor(A % B)]
        }) + t
    }, rp = function(A, e, t, B, r, n) {
        if (A < -9999 || A > 9999)
            return rK(A, 4, r.length > 0);
        var s = Math.abs(A)
          , o = r;
        if (0 === s)
            return e[0] + o;
        for (var i = 0; s > 0 && i <= 4; i++) {
            var Q = s % 10;
            0 === Q && tx(n, 1) && "" !== o ? o = e[Q] + o : Q > 1 || 1 === Q && 0 === i || 1 === Q && 1 === i && tx(n, 2) || 1 === Q && 1 === i && tx(n, 4) && A > 100 || 1 === Q && i > 1 && tx(n, 8) ? o = e[Q] + (i > 0 ? t[i - 1] : "") + o : 1 === Q && i > 0 && (o = t[i - 1] + o),
            s = Math.floor(s / 10)
        }
        return (A < 0 ? B : "") + o
    }, rE = "十百千萬", rI = "拾佰仟萬", r2 = "マイナス", ry = "마이너스", rK = function(A, e, t) {
        var B = t ? ". " : ""
          , r = t ? "、" : ""
          , n = t ? ", " : ""
          , s = t ? " " : "";
        switch (e) {
        case 0:
            return "•" + s;
        case 1:
            return "◦" + s;
        case 2:
            return "◾" + s;
        case 5:
            var o = rd(A, 48, 57, !0, B);
            return o.length < 4 ? "0" + o : o;
        case 4:
            return rH(A, "〇一二三四五六七八九", r);
        case 6:
            return r$(A, 1, 3999, rl, 3, B).toLowerCase();
        case 7:
            return r$(A, 1, 3999, rl, 3, B);
        case 8:
            return rd(A, 945, 969, !1, B);
        case 9:
            return rd(A, 97, 122, !1, B);
        case 10:
            return rd(A, 65, 90, !1, B);
        case 11:
            return rd(A, 1632, 1641, !0, B);
        case 12:
        case 49:
            return r$(A, 1, 9999, ru, 3, B);
        case 35:
            return r$(A, 1, 9999, ru, 3, B).toLowerCase();
        case 13:
            return rd(A, 2534, 2543, !0, B);
        case 14:
        case 30:
            return rd(A, 6112, 6121, !0, B);
        case 15:
            return rH(A, "子丑寅卯辰巳午未申酉戌亥", r);
        case 16:
            return rH(A, "甲乙丙丁戊己庚辛壬癸", r);
        case 17:
        case 48:
            return rp(A, "零一二三四五六七八九", rE, "負", r, 14);
        case 47:
            return rp(A, "零壹貳參肆伍陸柒捌玖", rI, "負", r, 15);
        case 42:
            return rp(A, "零一二三四五六七八九", rE, "负", r, 14);
        case 41:
            return rp(A, "零壹贰叁肆伍陆柒捌玖", rI, "负", r, 15);
        case 26:
            return rp(A, "〇一二三四五六七八九", "十百千万", r2, r, 0);
        case 25:
            return rp(A, "零壱弐参四伍六七八九", "拾百千万", r2, r, 7);
        case 31:
            return rp(A, "영일이삼사오육칠팔구", "십백천만", ry, n, 7);
        case 33:
            return rp(A, "零一二三四五六七八九", "十百千萬", ry, n, 0);
        case 32:
            return rp(A, "零壹貳參四五六七八九", "拾百千", ry, n, 7);
        case 18:
            return rd(A, 2406, 2415, !0, B);
        case 20:
            return r$(A, 1, 19999, rf, 3, B);
        case 21:
            return rd(A, 2790, 2799, !0, B);
        case 22:
            return rd(A, 2662, 2671, !0, B);
        case 22:
            return r$(A, 1, 10999, rF, 3, B);
        case 23:
            return rH(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
        case 24:
            return rH(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
        case 27:
            return rd(A, 3302, 3311, !0, B);
        case 28:
            return rH(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", r);
        case 29:
            return rH(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", r);
        case 34:
            return rd(A, 3792, 3801, !0, B);
        case 37:
            return rd(A, 6160, 6169, !0, B);
        case 38:
            return rd(A, 4160, 4169, !0, B);
        case 39:
            return rd(A, 2918, 2927, !0, B);
        case 40:
            return rd(A, 1776, 1785, !0, B);
        case 43:
            return rd(A, 3046, 3055, !0, B);
        case 44:
            return rd(A, 3174, 3183, !0, B);
        case 45:
            return rd(A, 3664, 3673, !0, B);
        case 46:
            return rd(A, 3872, 3881, !0, B);
        default:
            return rd(A, 48, 57, !0, B)
        }
    }, r_ = "data-html2canvas-ignore", rx = function() {
        function A(A, e, t) {
            if (this.context = A,
            this.options = t,
            this.scrolledElements = [],
            this.referenceElement = e,
            this.counters = new rC,
            this.quoteDepth = 0,
            !e.ownerDocument)
                throw Error("Cloned element does not have an owner document");
            this.documentElement = this.cloneNode(e.ownerDocument.documentElement)
        }
        return A.prototype.toIFrame = function(A, e) {
            var t = this
              , B = rL(A, e);
            if (!B.contentWindow)
                return Promise.reject("Unable to find iframe window");
            var r = A.defaultView.pageXOffset
              , n = A.defaultView.pageYOffset
              , s = B.contentWindow
              , o = s.document
              , c = rD(B).then(function() {
                return i(t, void 0, void 0, function() {
                    var A, t;
                    return Q(this, function(r) {
                        switch (r.label) {
                        case 0:
                            if (this.scrolledElements.forEach(rO),
                            s && (s.scrollTo(e.left, e.top),
                            /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (s.scrollY !== e.top || s.scrollX !== e.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"),
                            this.context.windowBounds = this.context.windowBounds.add(s.scrollX - e.left, s.scrollY - e.top, 0, 0))),
                            A = this.options.onclone,
                            void 0 === (t = this.clonedReferenceElement))
                                return [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document"), ];
                            if (!(o.fonts && o.fonts.ready))
                                return [3, 2];
                            return [4, o.fonts.ready];
                        case 1:
                            r.sent(),
                            r.label = 2;
                        case 2:
                            if (!/(AppleWebKit)/g.test(navigator.userAgent))
                                return [3, 4];
                            return [4, rv(o)];
                        case 3:
                            r.sent(),
                            r.label = 4;
                        case 4:
                            if ("function" == typeof A)
                                return [2, Promise.resolve().then(function() {
                                    return A(o, t)
                                }).then(function() {
                                    return B
                                }), ];
                            return [2, B]
                        }
                    })
                })
            });
            return o.open(),
            o.write(rG(document.doctype) + "<html></html>"),
            rT(this.referenceElement.ownerDocument, r, n),
            o.replaceChild(o.adoptNode(this.documentElement), o.documentElement),
            o.close(),
            c
        }
        ,
        A.prototype.createElementClone = function(A) {
            if (tN(A, 2),
            ri(A))
                return this.createCanvasClone(A);
            if (ra(A))
                return this.createStyleClone(A);
            var e = A.cloneNode(!1);
            return rQ(e) && (rQ(A) && A.currentSrc && A.currentSrc !== A.src && (e.src = A.currentSrc,
            e.srcset = ""),
            "lazy" === e.loading && (e.loading = "eager")),
            e
        }
        ,
        A.prototype.createStyleClone = function(A) {
            try {
                var e = A.sheet;
                if (e && e.cssRules) {
                    var t = [].slice.call(e.cssRules, 0).reduce(function(A, e) {
                        return e && "string" == typeof e.cssText ? A + e.cssText : A
                    }, "")
                      , B = A.cloneNode(!1);
                    return B.textContent = t,
                    B
                }
            } catch (r) {
                if (this.context.logger.error("Unable to access cssRules property", r),
                "SecurityError" !== r.name)
                    throw r
            }
            return A.cloneNode(!1)
        }
        ,
        A.prototype.createCanvasClone = function(A) {
            if (this.options.inlineImages && A.ownerDocument) {
                var e, t = A.ownerDocument.createElement("img");
                try {
                    return t.src = A.toDataURL(),
                    t
                } catch (B) {
                    this.context.logger.info("Unable to inline canvas contents, canvas is tainted", A)
                }
            }
            var r = A.cloneNode(!1);
            try {
                r.width = A.width,
                r.height = A.height;
                var n = A.getContext("2d")
                  , s = r.getContext("2d");
                if (s) {
                    if (!this.options.allowTaint && n)
                        s.putImageData(n.getImageData(0, 0, A.width, A.height), 0, 0);
                    else {
                        var o = null !== (e = A.getContext("webgl2")) && void 0 !== e ? e : A.getContext("webgl");
                        if (o) {
                            var i = o.getContextAttributes();
                            (null == i ? void 0 : i.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A)
                        }
                        s.drawImage(A, 0, 0)
                    }
                }
            } catch (Q) {
                this.context.logger.info("Unable to clone canvas as it is tainted", A)
            }
            return r
        }
        ,
        A.prototype.cloneNode = function(A) {
            if (B9(A))
                return document.createTextNode(A.data);
            if (!A.ownerDocument)
                return A.cloneNode(!1);
            var e = A.ownerDocument.defaultView;
            if (e && rA(A) && (re(A) || rt(A))) {
                var t, r = this.createElementClone(A);
                r.style.transitionProperty = "none";
                var n = e.getComputedStyle(A)
                  , s = e.getComputedStyle(A, ":before")
                  , o = e.getComputedStyle(A, ":after");
                this.referenceElement === A && re(r) && (this.clonedReferenceElement = r),
                ro(r) && r1(r);
                for (var i = this.counters.parse(new tk(this.context,n)), Q = this.resolvePseudoContent(A, r, s, B.BEFORE), c = A.firstChild; c; c = c.nextSibling)
                    (!rA(c) || "SCRIPT" !== (t = c).tagName && !c.hasAttribute(r_) && ("function" != typeof this.options.ignoreElements || !this.options.ignoreElements(c))) && (this.options.copyStyles && rA(c) && ra(c) || r.appendChild(this.cloneNode(c)));
                Q && r.insertBefore(Q, r.firstChild);
                var a = this.resolvePseudoContent(A, r, o, B.AFTER);
                return a && r.appendChild(a),
                this.counters.pop(i),
                n && (this.options.copyStyles || rt(A)) && !rc(A) && rS(n, r),
                (0 !== A.scrollTop || 0 !== A.scrollLeft) && this.scrolledElements.push([r, A.scrollLeft, A.scrollTop]),
                (rg(A) || rw(A)) && (rg(r) || rw(r)) && (r.value = A.value),
                r
            }
            return A.cloneNode(!1)
        }
        ,
        A.prototype.resolvePseudoContent = function(A, e, t, r) {
            var n = this;
            if (t) {
                var s = t.content
                  , o = e.ownerDocument;
                if (o && s && "none" !== s && "-moz-alt-content" !== s && "none" !== t.display) {
                    this.counters.parse(new tk(this.context,t));
                    var i = new tM(this.context,t)
                      , Q = o.createElement("html2canvaspseudoelement");
                    rS(t, Q),
                    i.content.forEach(function(e) {
                        if (0 === e.type)
                            Q.appendChild(o.createTextNode(e.value));
                        else if (22 === e.type) {
                            var t = o.createElement("img");
                            t.src = e.value,
                            t.style.opacity = "1",
                            Q.appendChild(t)
                        } else if (18 === e.type) {
                            if ("attr" === e.name) {
                                var B = e.values.filter(Ay);
                                B.length && Q.appendChild(o.createTextNode(A.getAttribute(B[0].value) || ""))
                            } else if ("counter" === e.name) {
                                var r = e.values.filter(Am)
                                  , s = r[0]
                                  , c = r[1];
                                if (s && Ay(s)) {
                                    var a = n.counters.getCounterValue(s.value)
                                      , g = c && Ay(c) ? ej.parse(n.context, c.value) : 3;
                                    Q.appendChild(o.createTextNode(rK(a, g, !1)))
                                }
                            } else if ("counters" === e.name) {
                                var w = e.values.filter(Am)
                                  , s = w[0]
                                  , U = w[1]
                                  , c = w[2];
                                if (s && Ay(s)) {
                                    var C = n.counters.getCounterValues(s.value)
                                      , l = c && Ay(c) ? ej.parse(n.context, c.value) : 3
                                      , u = U && 0 === U.type ? U.value : ""
                                      , F = C.map(function(A) {
                                        return rK(A, l, !1)
                                    }).join(u);
                                    Q.appendChild(o.createTextNode(F))
                                }
                            }
                        } else if (20 === e.type)
                            switch (e.value) {
                            case "open-quote":
                                Q.appendChild(o.createTextNode(t0(i.quotes, n.quoteDepth++, !0)));
                                break;
                            case "close-quote":
                                Q.appendChild(o.createTextNode(t0(i.quotes, --n.quoteDepth, !1)));
                                break;
                            default:
                                Q.appendChild(o.createTextNode(e.value))
                            }
                    }),
                    Q.className = rV + " " + rM;
                    var c = r === B.BEFORE ? " " + rV : " " + rM;
                    return rt(e) ? e.className.baseValue += c : e.className += c,
                    Q
                }
            }
        }
        ,
        A.destroy = function(A) {
            return !!A.parentNode && (A.parentNode.removeChild(A),
            !0)
        }
        ,
        A
    }();
    (Bt = B || (B = {}))[Bt.BEFORE = 0] = "BEFORE",
    Bt[Bt.AFTER = 1] = "AFTER";
    var rm, rL = function(A, e) {
        var t = A.createElement("iframe");
        return t.className = "html2canvas-container",
        t.style.visibility = "hidden",
        t.style.position = "fixed",
        t.style.left = "-10000px",
        t.style.top = "0px",
        t.style.border = "0",
        t.width = e.width.toString(),
        t.height = e.height.toString(),
        t.scrolling = "no",
        t.setAttribute(r_, "true"),
        A.body.appendChild(t),
        t
    }, rb = function(A) {
        return new Promise(function(e) {
            if (A.complete || !A.src) {
                e();
                return
            }
            A.onload = e,
            A.onerror = e
        }
        )
    }, rv = function(A) {
        return Promise.all([].slice.call(A.images, 0).map(rb))
    }, rD = function(A) {
        return new Promise(function(e, t) {
            var B = A.contentWindow;
            if (!B)
                return t("No window assigned for iframe");
            var r = B.document;
            B.onload = A.onload = function() {
                B.onload = A.onload = null;
                var t = setInterval(function() {
                    r.body.childNodes.length > 0 && "complete" === r.readyState && (clearInterval(t),
                    e(A))
                }, 50)
            }
        }
        )
    }, r0 = ["all", "d", "content"], rS = function(A, e) {
        for (var t = A.length - 1; t >= 0; t--) {
            var B = A.item(t);
            -1 === r0.indexOf(B) && e.style.setProperty(B, A.getPropertyValue(B))
        }
        return e
    }, rG = function(A) {
        var e = "";
        return A && (e += "<!DOCTYPE ",
        A.name && (e += A.name),
        A.internalSubset && (e += A.internalSubset),
        A.publicId && (e += '"' + A.publicId + '"'),
        A.systemId && (e += '"' + A.systemId + '"'),
        e += ">"),
        e
    }, rT = function(A, e, t) {
        A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t)
    }, rO = function(A) {
        var e = A[0]
          , t = A[1]
          , B = A[2];
        e.scrollLeft = t,
        e.scrollTop = B
    }, rV = "___html2canvas___pseudoelement_before", rM = "___html2canvas___pseudoelement_after", rk = '{\n    content: "" !important;\n    display: none !important;\n}', r1 = function(A) {
        rR(A, "." + rV + ":before" + rk + "\n         ." + rM + ":after" + rk)
    }, rR = function(A, e) {
        var t = A.ownerDocument;
        if (t) {
            var B = t.createElement("style");
            B.textContent = e,
            A.appendChild(B)
        }
    }, rN = function() {
        function A() {}
        return A.getOrigin = function(e) {
            var t = A._link;
            return t ? (t.href = e,
            t.href = t.href,
            t.protocol + t.hostname + t.port) : "about:blank"
        }
        ,
        A.isSameOrigin = function(e) {
            return A.getOrigin(e) === A._origin
        }
        ,
        A.setContext = function(e) {
            A._link = e.document.createElement("a"),
            A._origin = A.getOrigin(e.location.href)
        }
        ,
        A._origin = "about:blank",
        A
    }(), rP = function() {
        function A(A, e) {
            this.context = A,
            this._options = e,
            this._cache = {}
        }
        return A.prototype.addImage = function(A) {
            var e = Promise.resolve();
            return this.has(A) || (r4(A) || r6(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {}),
            e
        }
        ,
        A.prototype.match = function(A) {
            return this._cache[A]
        }
        ,
        A.prototype.loadImage = function(A) {
            return i(this, void 0, void 0, function() {
                var e, t, B, r, n = this;
                return Q(this, function(s) {
                    switch (s.label) {
                    case 0:
                        if (e = rN.isSameOrigin(A),
                        t = !rW(A) && !0 === this._options.useCORS && BU.SUPPORT_CORS_IMAGES && !e,
                        B = !rW(A) && !e && !r4(A) && "string" == typeof this._options.proxy && BU.SUPPORT_CORS_XHR && !t,
                        !e && !1 === this._options.allowTaint && !rW(A) && !r4(A) && !B && !t)
                            return [2];
                        if (r = A,
                        !B)
                            return [3, 2];
                        return [4, this.proxy(r)];
                    case 1:
                        r = s.sent(),
                        s.label = 2;
                    case 2:
                        return this.context.logger.debug("Added image " + A.substring(0, 256)),
                        [4, new Promise(function(A, e) {
                            var B = new Image;
                            B.onload = function() {
                                return A(B)
                            }
                            ,
                            B.onerror = e,
                            (r3(r) || t) && (B.crossOrigin = "anonymous"),
                            B.src = r,
                            !0 === B.complete && setTimeout(function() {
                                return A(B)
                            }, 500),
                            n._options.imageTimeout > 0 && setTimeout(function() {
                                return e("Timed out (" + n._options.imageTimeout + "ms) loading image")
                            }, n._options.imageTimeout)
                        }
                        ), ];
                    case 3:
                        return [2, s.sent()]
                    }
                })
            })
        }
        ,
        A.prototype.has = function(A) {
            return void 0 !== this._cache[A]
        }
        ,
        A.prototype.keys = function() {
            return Promise.resolve(Object.keys(this._cache))
        }
        ,
        A.prototype.proxy = function(A) {
            var e = this
              , t = this._options.proxy;
            if (!t)
                throw Error("No proxy defined");
            var B = A.substring(0, 256);
            return new Promise(function(r, n) {
                var s = BU.SUPPORT_RESPONSE_TYPE ? "blob" : "text"
                  , o = new XMLHttpRequest;
                o.onload = function() {
                    if (200 === o.status) {
                        if ("text" === s)
                            r(o.response);
                        else {
                            var A = new FileReader;
                            A.addEventListener("load", function() {
                                return r(A.result)
                            }, !1),
                            A.addEventListener("error", function(A) {
                                return n(A)
                            }, !1),
                            A.readAsDataURL(o.response)
                        }
                    } else
                        n("Failed to proxy resource " + B + " with status code " + o.status)
                }
                ,
                o.onerror = n;
                var i = t.indexOf("?") > -1 ? "&" : "?";
                if (o.open("GET", "" + t + i + "url=" + encodeURIComponent(A) + "&responseType=" + s),
                "text" !== s && o instanceof XMLHttpRequest && (o.responseType = s),
                e._options.imageTimeout) {
                    var Q = e._options.imageTimeout;
                    o.timeout = Q,
                    o.ontimeout = function() {
                        return n("Timed out (" + Q + "ms) proxying " + B)
                    }
                }
                o.send()
            }
            )
        }
        ,
        A
    }(), rJ = /^data:image\/svg\+xml/i, rX = /^data:image\/.*;base64,/i, rY = /^data:image\/.*/i, r6 = function(A) {
        return BU.SUPPORT_SVG_DRAWING || !rZ(A)
    }, rW = function(A) {
        return rY.test(A)
    }, r3 = function(A) {
        return rX.test(A)
    }, r4 = function(A) {
        return "blob" === A.substr(0, 4)
    }, rZ = function(A) {
        return "svg" === A.substr(-3).toLowerCase() || rJ.test(A)
    }, r7 = function() {
        function A(A, e) {
            this.type = 0,
            this.x = A,
            this.y = e
        }
        return A.prototype.add = function(e, t) {
            return new A(this.x + e,this.y + t)
        }
        ,
        A
    }(), r5 = function(A, e, t) {
        return new r7(A.x + (e.x - A.x) * t,A.y + (e.y - A.y) * t)
    }, r8 = function() {
        function A(A, e, t, B) {
            this.type = 1,
            this.start = A,
            this.startControl = e,
            this.endControl = t,
            this.end = B
        }
        return A.prototype.subdivide = function(e, t) {
            var B = r5(this.start, this.startControl, e)
              , r = r5(this.startControl, this.endControl, e)
              , n = r5(this.endControl, this.end, e)
              , s = r5(B, r, e)
              , o = r5(r, n, e)
              , i = r5(s, o, e);
            return t ? new A(this.start,B,s,i) : new A(i,o,n,this.end)
        }
        ,
        A.prototype.add = function(e, t) {
            return new A(this.start.add(e, t),this.startControl.add(e, t),this.endControl.add(e, t),this.end.add(e, t))
        }
        ,
        A.prototype.reverse = function() {
            return new A(this.end,this.endControl,this.startControl,this.start)
        }
        ,
        A
    }(), rq = function(A) {
        return 1 === A.type
    }, rj = function A(e) {
        var t = e.styles
          , B = e.bounds
          , n = AO(t.borderTopLeftRadius, B.width, B.height)
          , s = n[0]
          , o = n[1]
          , i = AO(t.borderTopRightRadius, B.width, B.height)
          , Q = i[0]
          , c = i[1]
          , a = AO(t.borderBottomRightRadius, B.width, B.height)
          , g = a[0]
          , w = a[1]
          , U = AO(t.borderBottomLeftRadius, B.width, B.height)
          , C = U[0]
          , l = U[1]
          , u = [];
        u.push((s + Q) / B.width),
        u.push((C + g) / B.width),
        u.push((o + l) / B.height),
        u.push((c + w) / B.height);
        var F = Math.max.apply(Math, u);
        F > 1 && (s /= F,
        o /= F,
        Q /= F,
        c /= F,
        g /= F,
        w /= F,
        C /= F,
        l /= F);
        var f = B.width - Q
          , $ = B.height - w
          , h = B.width - g
          , d = B.height - l
          , H = t.borderTopWidth
          , p = t.borderRightWidth
          , E = t.borderBottomWidth
          , I = t.borderLeftWidth
          , y = AV(t.paddingTop, e.bounds.width)
          , K = AV(t.paddingRight, e.bounds.width)
          , _ = AV(t.paddingBottom, e.bounds.width)
          , x = AV(t.paddingLeft, e.bounds.width);
        this.topLeftBorderDoubleOuterBox = s > 0 || o > 0 ? rz(B.left + I / 3, B.top + H / 3, s - I / 3, o - H / 3, r.TOP_LEFT) : new r7(B.left + I / 3,B.top + H / 3),
        this.topRightBorderDoubleOuterBox = s > 0 || o > 0 ? rz(B.left + f, B.top + H / 3, Q - p / 3, c - H / 3, r.TOP_RIGHT) : new r7(B.left + B.width - p / 3,B.top + H / 3),
        this.bottomRightBorderDoubleOuterBox = g > 0 || w > 0 ? rz(B.left + h, B.top + $, g - p / 3, w - E / 3, r.BOTTOM_RIGHT) : new r7(B.left + B.width - p / 3,B.top + B.height - E / 3),
        this.bottomLeftBorderDoubleOuterBox = C > 0 || l > 0 ? rz(B.left + I / 3, B.top + d, C - I / 3, l - E / 3, r.BOTTOM_LEFT) : new r7(B.left + I / 3,B.top + B.height - E / 3),
        this.topLeftBorderDoubleInnerBox = s > 0 || o > 0 ? rz(B.left + 2 * I / 3, B.top + 2 * H / 3, s - 2 * I / 3, o - 2 * H / 3, r.TOP_LEFT) : new r7(B.left + 2 * I / 3,B.top + 2 * H / 3),
        this.topRightBorderDoubleInnerBox = s > 0 || o > 0 ? rz(B.left + f, B.top + 2 * H / 3, Q - 2 * p / 3, c - 2 * H / 3, r.TOP_RIGHT) : new r7(B.left + B.width - 2 * p / 3,B.top + 2 * H / 3),
        this.bottomRightBorderDoubleInnerBox = g > 0 || w > 0 ? rz(B.left + h, B.top + $, g - 2 * p / 3, w - 2 * E / 3, r.BOTTOM_RIGHT) : new r7(B.left + B.width - 2 * p / 3,B.top + B.height - 2 * E / 3),
        this.bottomLeftBorderDoubleInnerBox = C > 0 || l > 0 ? rz(B.left + 2 * I / 3, B.top + d, C - 2 * I / 3, l - 2 * E / 3, r.BOTTOM_LEFT) : new r7(B.left + 2 * I / 3,B.top + B.height - 2 * E / 3),
        this.topLeftBorderStroke = s > 0 || o > 0 ? rz(B.left + I / 2, B.top + H / 2, s - I / 2, o - H / 2, r.TOP_LEFT) : new r7(B.left + I / 2,B.top + H / 2),
        this.topRightBorderStroke = s > 0 || o > 0 ? rz(B.left + f, B.top + H / 2, Q - p / 2, c - H / 2, r.TOP_RIGHT) : new r7(B.left + B.width - p / 2,B.top + H / 2),
        this.bottomRightBorderStroke = g > 0 || w > 0 ? rz(B.left + h, B.top + $, g - p / 2, w - E / 2, r.BOTTOM_RIGHT) : new r7(B.left + B.width - p / 2,B.top + B.height - E / 2),
        this.bottomLeftBorderStroke = C > 0 || l > 0 ? rz(B.left + I / 2, B.top + d, C - I / 2, l - E / 2, r.BOTTOM_LEFT) : new r7(B.left + I / 2,B.top + B.height - E / 2),
        this.topLeftBorderBox = s > 0 || o > 0 ? rz(B.left, B.top, s, o, r.TOP_LEFT) : new r7(B.left,B.top),
        this.topRightBorderBox = Q > 0 || c > 0 ? rz(B.left + f, B.top, Q, c, r.TOP_RIGHT) : new r7(B.left + B.width,B.top),
        this.bottomRightBorderBox = g > 0 || w > 0 ? rz(B.left + h, B.top + $, g, w, r.BOTTOM_RIGHT) : new r7(B.left + B.width,B.top + B.height),
        this.bottomLeftBorderBox = C > 0 || l > 0 ? rz(B.left, B.top + d, C, l, r.BOTTOM_LEFT) : new r7(B.left,B.top + B.height),
        this.topLeftPaddingBox = s > 0 || o > 0 ? rz(B.left + I, B.top + H, Math.max(0, s - I), Math.max(0, o - H), r.TOP_LEFT) : new r7(B.left + I,B.top + H),
        this.topRightPaddingBox = Q > 0 || c > 0 ? rz(B.left + Math.min(f, B.width - p), B.top + H, f > B.width + p ? 0 : Math.max(0, Q - p), Math.max(0, c - H), r.TOP_RIGHT) : new r7(B.left + B.width - p,B.top + H),
        this.bottomRightPaddingBox = g > 0 || w > 0 ? rz(B.left + Math.min(h, B.width - I), B.top + Math.min($, B.height - E), Math.max(0, g - p), Math.max(0, w - E), r.BOTTOM_RIGHT) : new r7(B.left + B.width - p,B.top + B.height - E),
        this.bottomLeftPaddingBox = C > 0 || l > 0 ? rz(B.left + I, B.top + Math.min(d, B.height - E), Math.max(0, C - I), Math.max(0, l - E), r.BOTTOM_LEFT) : new r7(B.left + I,B.top + B.height - E),
        this.topLeftContentBox = s > 0 || o > 0 ? rz(B.left + I + x, B.top + H + y, Math.max(0, s - (I + x)), Math.max(0, o - (H + y)), r.TOP_LEFT) : new r7(B.left + I + x,B.top + H + y),
        this.topRightContentBox = Q > 0 || c > 0 ? rz(B.left + Math.min(f, B.width + I + x), B.top + H + y, f > B.width + I + x ? 0 : Q - I + x, c - (H + y), r.TOP_RIGHT) : new r7(B.left + B.width - (p + K),B.top + H + y),
        this.bottomRightContentBox = g > 0 || w > 0 ? rz(B.left + Math.min(h, B.width - (I + x)), B.top + Math.min($, B.height + H + y), Math.max(0, g - (p + K)), w - (E + _), r.BOTTOM_RIGHT) : new r7(B.left + B.width - (p + K),B.top + B.height - (E + _)),
        this.bottomLeftContentBox = C > 0 || l > 0 ? rz(B.left + I + x, B.top + d, Math.max(0, C - (I + x)), l - (E + _), r.BOTTOM_LEFT) : new r7(B.left + I + x,B.top + B.height - (E + _))
    };
    (rm = r || (r = {}))[rm.TOP_LEFT = 0] = "TOP_LEFT",
    rm[rm.TOP_RIGHT = 1] = "TOP_RIGHT",
    rm[rm.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT",
    rm[rm.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
    var rz = function(A, e, t, B, n) {
        var s = 4 * ((Math.sqrt(2) - 1) / 3)
          , o = t * s
          , i = B * s
          , Q = A + t
          , c = e + B;
        switch (n) {
        case r.TOP_LEFT:
            return new r8(new r7(A,c),new r7(A,c - i),new r7(Q - o,e),new r7(Q,e));
        case r.TOP_RIGHT:
            return new r8(new r7(A,e),new r7(A + o,e),new r7(Q,c - i),new r7(Q,c));
        case r.BOTTOM_RIGHT:
            return new r8(new r7(Q,e),new r7(Q,e + i),new r7(A + o,c),new r7(A,c));
        case r.BOTTOM_LEFT:
        default:
            return new r8(new r7(Q,c),new r7(Q - o,c),new r7(A,e + i),new r7(A,e))
        }
    }
      , r9 = function(A) {
        return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox, ]
    }
      , nA = function(A) {
        return [A.topLeftPaddingBox, A.topRightPaddingBox, A.bottomRightPaddingBox, A.bottomLeftPaddingBox, ]
    }
      , ne = function A(e, t, B) {
        this.offsetX = e,
        this.offsetY = t,
        this.matrix = B,
        this.type = 0,
        this.target = 6
    }
      , nt = function A(e, t) {
        this.path = e,
        this.target = t,
        this.type = 1
    }
      , nB = function A(e) {
        this.opacity = e,
        this.type = 2,
        this.target = 6
    }
      , nr = function(A) {
        return 1 === A.type
    }
      , nn = function(A, e) {
        return A.length === e.length && A.some(function(A, t) {
            return A === e[t]
        })
    }
      , ns = function A(e) {
        this.element = e,
        this.inlineLevel = [],
        this.nonInlineLevel = [],
        this.negativeZIndex = [],
        this.zeroOrAutoZIndexOrTransformedOrOpacity = [],
        this.positiveZIndex = [],
        this.nonPositionedFloats = [],
        this.nonPositionedInlineLevel = []
    }
      , no = function() {
        function A(A, e) {
            if (this.container = A,
            this.parent = e,
            this.effects = [],
            this.curves = new rj(this.container),
            this.container.styles.opacity < 1 && this.effects.push(new nB(this.container.styles.opacity)),
            null !== this.container.styles.transform) {
                var t = this.container.bounds.left + this.container.styles.transformOrigin[0].number
                  , B = this.container.bounds.top + this.container.styles.transformOrigin[1].number
                  , r = this.container.styles.transform;
                this.effects.push(new ne(t,B,r))
            }
            if (0 !== this.container.styles.overflowX) {
                var n = r9(this.curves)
                  , s = nA(this.curves);
                nn(n, s) ? this.effects.push(new nt(n,6)) : (this.effects.push(new nt(n,2)),
                this.effects.push(new nt(s,4)))
            }
        }
        return A.prototype.getEffects = function(A) {
            for (var e = -1 === [2, 3].indexOf(this.container.styles.position), t = this.parent, B = this.effects.slice(0); t; ) {
                var r = t.effects.filter(function(A) {
                    return !nr(A)
                });
                if (e || 0 !== t.container.styles.position || !t.parent) {
                    if (B.unshift.apply(B, r),
                    e = -1 === [2, 3].indexOf(t.container.styles.position),
                    0 !== t.container.styles.overflowX) {
                        var n = r9(t.curves)
                          , s = nA(t.curves);
                        nn(n, s) || B.unshift(new nt(s,6))
                    }
                } else
                    B.unshift.apply(B, r);
                t = t.parent
            }
            return B.filter(function(e) {
                return tx(e.target, A)
            })
        }
        ,
        A
    }()
      , ni = function(A, e, t, B) {
        A.container.elements.forEach(function(r) {
            var n = tx(r.flags, 4)
              , s = tx(r.flags, 2)
              , o = new no(r,A);
            tx(r.styles.display, 2048) && B.push(o);
            var i = tx(r.flags, 8) ? [] : B;
            if (n || s) {
                var Q = n || r.styles.isPositioned() ? t : e
                  , c = new ns(o);
                if (r.styles.isPositioned() || r.styles.opacity < 1 || r.styles.isTransformed()) {
                    var a = r.styles.zIndex.order;
                    if (a < 0) {
                        var g = 0;
                        Q.negativeZIndex.some(function(A, e) {
                            if (a > A.element.container.styles.zIndex.order)
                                g = e;
                            else if (g > 0)
                                return !0;
                            return !1
                        }),
                        Q.negativeZIndex.splice(g, 0, c)
                    } else if (a > 0) {
                        var w = 0;
                        Q.positiveZIndex.some(function(A, e) {
                            if (a >= A.element.container.styles.zIndex.order)
                                w = e + 1;
                            else if (w > 0)
                                return !0;
                            return !1
                        }),
                        Q.positiveZIndex.splice(w, 0, c)
                    } else
                        Q.zeroOrAutoZIndexOrTransformedOrOpacity.push(c)
                } else
                    r.styles.isFloating() ? Q.nonPositionedFloats.push(c) : Q.nonPositionedInlineLevel.push(c);
                ni(o, c, n ? c : t, i)
            } else
                r.styles.isInlineLevel() ? e.inlineLevel.push(o) : e.nonInlineLevel.push(o),
                ni(o, e, t, i);
            tx(r.flags, 8) && nQ(r, i)
        })
    }
      , nQ = function(A, e) {
        for (var t = A instanceof BR ? A.start : 1, B = A instanceof BR && A.reversed, r = 0; r < e.length; r++) {
            var n = e[r];
            n.container instanceof B1 && "number" == typeof n.container.value && 0 !== n.container.value && (t = n.container.value),
            n.listValue = rK(t, n.container.styles.listStyleType, !0),
            t += B ? -1 : 1
        }
    }
      , nc = function(A) {
        var e = new no(A,null)
          , t = new ns(e)
          , B = [];
        return ni(e, t, t, B),
        nQ(e.container, B),
        t
    }
      , na = function(A, e) {
        switch (e) {
        case 0:
            return nl(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
        case 1:
            return nl(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
        case 2:
            return nl(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
        default:
            return nl(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox)
        }
    }
      , ng = function(A, e) {
        switch (e) {
        case 0:
            return nl(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
        case 1:
            return nl(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
        case 2:
            return nl(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
        default:
            return nl(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox)
        }
    }
      , nw = function(A, e) {
        switch (e) {
        case 0:
            return nl(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
        case 1:
            return nl(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
        case 2:
            return nl(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
        default:
            return nl(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox)
        }
    }
      , nU = function(A, e) {
        switch (e) {
        case 0:
            return nC(A.topLeftBorderStroke, A.topRightBorderStroke);
        case 1:
            return nC(A.topRightBorderStroke, A.bottomRightBorderStroke);
        case 2:
            return nC(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
        default:
            return nC(A.bottomLeftBorderStroke, A.topLeftBorderStroke)
        }
    }
      , nC = function(A, e) {
        var t = [];
        return rq(A) ? t.push(A.subdivide(.5, !1)) : t.push(A),
        rq(e) ? t.push(e.subdivide(.5, !0)) : t.push(e),
        t
    }
      , nl = function(A, e, t, B) {
        var r = [];
        return rq(A) ? r.push(A.subdivide(.5, !1)) : r.push(A),
        rq(t) ? r.push(t.subdivide(.5, !0)) : r.push(t),
        rq(B) ? r.push(B.subdivide(.5, !0).reverse()) : r.push(B),
        rq(e) ? r.push(e.subdivide(.5, !1).reverse()) : r.push(e),
        r
    }
      , nu = function(A) {
        var e = A.bounds
          , t = A.styles;
        return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth))
    }
      , nF = function(A) {
        var e = A.styles
          , t = A.bounds
          , B = AV(e.paddingLeft, t.width)
          , r = AV(e.paddingRight, t.width)
          , n = AV(e.paddingTop, t.width)
          , s = AV(e.paddingBottom, t.width);
        return t.add(B + e.borderLeftWidth, n + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + B + r), -(e.borderTopWidth + e.borderBottomWidth + n + s))
    }
      , nf = function(A, e, t) {
        var B, r, n, s, o, i = (B = nH(A.styles.backgroundOrigin, e),
        r = A,
        0 === B ? r.bounds : 2 === B ? nF(r) : nu(r)), Q = (n = nH(A.styles.backgroundClip, e),
        s = A,
        0 === n ? s.bounds : 2 === n ? nF(s) : nu(s)), c = nd(nH(A.styles.backgroundSize, e), t, i), a = c[0], g = c[1], w = AO(nH(A.styles.backgroundPosition, e), i.width - a, i.height - g), U = np(nH(A.styles.backgroundRepeat, e), w, c, i, Q);
        return [U, Math.round(i.left + w[0]), Math.round(i.top + w[1]), a, g]
    }
      , n$ = function(e) {
        return Ay(e) && e.value === A.AUTO
    }
      , nh = function(A) {
        return "number" == typeof A
    }
      , nd = function(e, t, B) {
        var r = t[0]
          , n = t[1]
          , s = t[2]
          , o = e[0]
          , i = e[1];
        if (!o)
            return [0, 0];
        if (AD(o) && i && AD(i))
            return [AV(o, B.width), AV(i, B.height), ];
        var Q = nh(s);
        if (Ay(o) && (o.value === A.CONTAIN || o.value === A.COVER))
            return nh(s) ? B.width / B.height < s != (o.value === A.COVER) ? [B.width, B.width / s] : [B.height * s, B.height] : [B.width, B.height];
        var c = nh(r)
          , a = nh(n)
          , g = c || a;
        if (n$(o) && (!i || n$(i))) {
            if (c && a)
                return [r, n];
            if (!Q && !g)
                return [B.width, B.height];
            if (g && Q)
                return [c ? r : n * s, a ? n : r / s];
            var w = c ? r : B.width
              , U = a ? n : B.height;
            return [w, U]
        }
        if (Q) {
            var C = 0
              , l = 0;
            return AD(o) ? C = AV(o, B.width) : AD(i) && (l = AV(i, B.height)),
            n$(o) ? C = l * s : (!i || n$(i)) && (l = C / s),
            [C, l]
        }
        var u = null
          , F = null;
        if (AD(o) ? u = AV(o, B.width) : i && AD(i) && (F = AV(i, B.height)),
        null !== u && (!i || n$(i)) && (F = c && a ? u / r * n : B.height),
        null !== F && n$(o) && (u = c && a ? F / n * r : B.width),
        null !== u && null !== F)
            return [u, F];
        throw Error("Unable to calculate background-size for element")
    }
      , nH = function(A, e) {
        var t = A[e];
        return void 0 === t ? A[0] : t
    }
      , np = function(A, e, t, B, r) {
        var n = e[0]
          , s = e[1]
          , o = t[0]
          , i = t[1];
        switch (A) {
        case 2:
            return [new r7(Math.round(B.left),Math.round(B.top + s)), new r7(Math.round(B.left + B.width),Math.round(B.top + s)), new r7(Math.round(B.left + B.width),Math.round(i + B.top + s)), new r7(Math.round(B.left),Math.round(i + B.top + s)), ];
        case 3:
            return [new r7(Math.round(B.left + n),Math.round(B.top)), new r7(Math.round(B.left + n + o),Math.round(B.top)), new r7(Math.round(B.left + n + o),Math.round(B.height + B.top)), new r7(Math.round(B.left + n),Math.round(B.height + B.top)), ];
        case 1:
            return [new r7(Math.round(B.left + n),Math.round(B.top + s)), new r7(Math.round(B.left + n + o),Math.round(B.top + s)), new r7(Math.round(B.left + n + o),Math.round(B.top + s + i)), new r7(Math.round(B.left + n),Math.round(B.top + s + i)), ];
        default:
            return [new r7(Math.round(r.left),Math.round(r.top)), new r7(Math.round(r.left + r.width),Math.round(r.top)), new r7(Math.round(r.left + r.width),Math.round(r.height + r.top)), new r7(Math.round(r.left),Math.round(r.height + r.top)), ]
        }
    }
      , nE = "Hidden Text"
      , nI = function() {
        function A(A) {
            this._data = {},
            this._document = A
        }
        return A.prototype.parseMetrics = function(A, e) {
            var t = this._document.createElement("div")
              , B = this._document.createElement("img")
              , r = this._document.createElement("span")
              , n = this._document.body;
            t.style.visibility = "hidden",
            t.style.fontFamily = A,
            t.style.fontSize = e,
            t.style.margin = "0",
            t.style.padding = "0",
            n.appendChild(t),
            B.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            B.width = 1,
            B.height = 1,
            B.style.margin = "0",
            B.style.padding = "0",
            B.style.verticalAlign = "baseline",
            r.style.fontFamily = A,
            r.style.fontSize = e,
            r.style.margin = "0",
            r.style.padding = "0",
            r.appendChild(this._document.createTextNode(nE)),
            t.appendChild(r),
            t.appendChild(B);
            var s = B.offsetTop - r.offsetTop + 2;
            t.removeChild(r),
            t.appendChild(this._document.createTextNode(nE)),
            t.style.lineHeight = "normal",
            B.style.verticalAlign = "super";
            var o = B.offsetTop - t.offsetTop + 2;
            return n.removeChild(t),
            {
                baseline: s,
                middle: o
            }
        }
        ,
        A.prototype.getMetrics = function(A, e) {
            var t = A + " " + e;
            return void 0 === this._data[t] && (this._data[t] = this.parseMetrics(A, e)),
            this._data[t]
        }
        ,
        A
    }()
      , n2 = function A(e, t) {
        this.context = e,
        this.options = t
    }
      , ny = function(A) {
        function e(e, t) {
            var B = A.call(this, e, t) || this;
            return B._activeEffects = [],
            B.canvas = t.canvas ? t.canvas : document.createElement("canvas"),
            B.ctx = B.canvas.getContext("2d"),
            t.canvas || (B.canvas.width = Math.floor(t.width * t.scale),
            B.canvas.height = Math.floor(t.height * t.scale),
            B.canvas.style.width = t.width + "px",
            B.canvas.style.height = t.height + "px"),
            B.fontMetrics = new nI(document),
            B.ctx.scale(B.options.scale, B.options.scale),
            B.ctx.translate(-t.x, -t.y),
            B.ctx.textBaseline = "bottom",
            B._activeEffects = [],
            B.context.logger.debug("Canvas renderer initialized (" + t.width + "x" + t.height + ") with scale " + t.scale),
            B
        }
        return s(e, A),
        e.prototype.applyEffects = function(A) {
            for (var e = this; this._activeEffects.length; )
                this.popEffect();
            A.forEach(function(A) {
                return e.applyEffect(A)
            })
        }
        ,
        e.prototype.applyEffect = function(A) {
            var e, t;
            this.ctx.save(),
            2 === (e = A).type && (this.ctx.globalAlpha = A.opacity),
            0 === (t = A).type && (this.ctx.translate(A.offsetX, A.offsetY),
            this.ctx.transform(A.matrix[0], A.matrix[1], A.matrix[2], A.matrix[3], A.matrix[4], A.matrix[5]),
            this.ctx.translate(-A.offsetX, -A.offsetY)),
            nr(A) && (this.path(A.path),
            this.ctx.clip()),
            this._activeEffects.push(A)
        }
        ,
        e.prototype.popEffect = function() {
            this._activeEffects.pop(),
            this.ctx.restore()
        }
        ,
        e.prototype.renderStack = function(A) {
            return i(this, void 0, void 0, function() {
                var e;
                return Q(this, function(t) {
                    switch (t.label) {
                    case 0:
                        if (!(e = A.element.container.styles).isVisible())
                            return [3, 2];
                        return [4, this.renderStackContent(A)];
                    case 1:
                        t.sent(),
                        t.label = 2;
                    case 2:
                        return [2]
                    }
                })
            })
        }
        ,
        e.prototype.renderNode = function(A) {
            return i(this, void 0, void 0, function() {
                return Q(this, function(e) {
                    switch (e.label) {
                    case 0:
                        if (tx(A.container.flags, 16),
                        !A.container.styles.isVisible())
                            return [3, 3];
                        return [4, this.renderNodeBackgroundAndBorders(A)];
                    case 1:
                        return e.sent(),
                        [4, this.renderNodeContent(A)];
                    case 2:
                        e.sent(),
                        e.label = 3;
                    case 3:
                        return [2]
                    }
                })
            })
        }
        ,
        e.prototype.renderTextWithLetterSpacing = function(A, e, t) {
            var B = this;
            0 === e ? this.ctx.fillText(A.text, A.bounds.left, A.bounds.top + t) : Bc(A.text).reduce(function(e, r) {
                return B.ctx.fillText(r, e, A.bounds.top + t),
                e + B.ctx.measureText(r).width
            }, A.bounds.left)
        }
        ,
        e.prototype.createFontStyle = function(A) {
            var e = A.fontVariant.filter(function(A) {
                return "normal" === A || "small-caps" === A
            }).join("")
              , t = A.fontFamily.join(", ")
              , B = AI(A.fontSize) ? "" + A.fontSize.number + A.fontSize.unit : A.fontSize.number + "px";
            return [[A.fontStyle, e, A.fontWeight, B, t, ].join(" "), t, B, ]
        }
        ,
        e.prototype.renderTextNode = function(A, e) {
            return i(this, void 0, void 0, function() {
                var t, B, r, n, s, o, i, c, a = this;
                return Q(this, function(Q) {
                    return B = (t = this.createFontStyle(e))[0],
                    r = t[1],
                    n = t[2],
                    this.ctx.font = B,
                    this.ctx.direction = 1 === e.direction ? "rtl" : "ltr",
                    this.ctx.textAlign = "left",
                    this.ctx.textBaseline = "alphabetic",
                    o = (s = this.fontMetrics.getMetrics(r, n)).baseline,
                    i = s.middle,
                    c = e.paintOrder,
                    A.textBounds.forEach(function(A) {
                        c.forEach(function(t) {
                            switch (t) {
                            case 0:
                                a.ctx.fillStyle = AY(e.color),
                                a.renderTextWithLetterSpacing(A, e.letterSpacing, o);
                                var B = e.textShadow;
                                B.length && A.text.trim().length && (B.slice(0).reverse().forEach(function(t) {
                                    a.ctx.shadowColor = AY(t.color),
                                    a.ctx.shadowOffsetX = t.offsetX.number * a.options.scale,
                                    a.ctx.shadowOffsetY = t.offsetY.number * a.options.scale,
                                    a.ctx.shadowBlur = t.blur.number,
                                    a.renderTextWithLetterSpacing(A, e.letterSpacing, o)
                                }),
                                a.ctx.shadowColor = "",
                                a.ctx.shadowOffsetX = 0,
                                a.ctx.shadowOffsetY = 0,
                                a.ctx.shadowBlur = 0),
                                e.textDecorationLine.length && (a.ctx.fillStyle = AY(e.textDecorationColor || e.color),
                                e.textDecorationLine.forEach(function(e) {
                                    switch (e) {
                                    case 1:
                                        a.ctx.fillRect(A.bounds.left, Math.round(A.bounds.top + o), A.bounds.width, 1);
                                        break;
                                    case 2:
                                        a.ctx.fillRect(A.bounds.left, Math.round(A.bounds.top), A.bounds.width, 1);
                                        break;
                                    case 3:
                                        a.ctx.fillRect(A.bounds.left, Math.ceil(A.bounds.top + i), A.bounds.width, 1)
                                    }
                                }));
                                break;
                            case 1:
                                e.webkitTextStrokeWidth && A.text.trim().length && (a.ctx.strokeStyle = AY(e.webkitTextStrokeColor),
                                a.ctx.lineWidth = e.webkitTextStrokeWidth,
                                a.ctx.lineJoin = window.chrome ? "miter" : "round",
                                a.ctx.strokeText(A.text, A.bounds.left, A.bounds.top + o)),
                                a.ctx.strokeStyle = "",
                                a.ctx.lineWidth = 0,
                                a.ctx.lineJoin = "miter"
                            }
                        })
                    }),
                    [2]
                })
            })
        }
        ,
        e.prototype.renderReplacedElement = function(A, e, t) {
            if (t && A.intrinsicWidth > 0 && A.intrinsicHeight > 0) {
                var B = nF(A)
                  , r = nA(e);
                this.path(r),
                this.ctx.save(),
                this.ctx.clip(),
                this.ctx.drawImage(t, 0, 0, A.intrinsicWidth, A.intrinsicHeight, B.left, B.top, B.width, B.height),
                this.ctx.restore()
            }
        }
        ,
        e.prototype.renderNodeContent = function(A) {
            return i(this, void 0, void 0, function() {
                var t, B, r, n, s, o, i, c, g, w, U, C, l, u, F, f, $, h, d;
                return Q(this, function(Q) {
                    switch (Q.label) {
                    case 0:
                        this.applyEffects(A.getEffects(4)),
                        t = A.container,
                        B = A.curves,
                        r = t.styles,
                        n = 0,
                        s = t.textNodes,
                        Q.label = 1;
                    case 1:
                        if (!(n < s.length))
                            return [3, 4];
                        return o = s[n],
                        [4, this.renderTextNode(o, r)];
                    case 2:
                        Q.sent(),
                        Q.label = 3;
                    case 3:
                        return n++,
                        [3, 1];
                    case 4:
                        if (!(t instanceof BV))
                            return [3, 8];
                        Q.label = 5;
                    case 5:
                        return Q.trys.push([5, 7, , 8]),
                        [4, this.context.cache.match(t.src)];
                    case 6:
                        return i = Q.sent(),
                        this.renderReplacedElement(t, B, i),
                        [3, 8];
                    case 7:
                        return Q.sent(),
                        this.context.logger.error("Error loading image " + t.src),
                        [3, 8];
                    case 8:
                        if (t instanceof BM && this.renderReplacedElement(t, B, t.canvas),
                        !(t instanceof Bk))
                            return [3, 12];
                        Q.label = 9;
                    case 9:
                        return Q.trys.push([9, 11, , 12]),
                        [4, this.context.cache.match(t.svg)];
                    case 10:
                        return i = Q.sent(),
                        this.renderReplacedElement(t, B, i),
                        [3, 12];
                    case 11:
                        return Q.sent(),
                        this.context.logger.error("Error loading svg " + t.svg.substring(0, 255)),
                        [3, 12];
                    case 12:
                        if (!(t instanceof BZ && t.tree))
                            return [3, 14];
                        return [4, (c = new e(this.context,{
                            scale: this.options.scale,
                            backgroundColor: t.backgroundColor,
                            x: 0,
                            y: 0,
                            width: t.width,
                            height: t.height
                        })).render(t.tree)];
                    case 13:
                        g = Q.sent(),
                        t.width && t.height && this.ctx.drawImage(g, 0, 0, t.width, t.height, t.bounds.left, t.bounds.top, t.bounds.width, t.bounds.height),
                        Q.label = 14;
                    case 14:
                        if (t instanceof BW && (w = Math.min(t.bounds.width, t.bounds.height),
                        t.type === BX ? t.checked && (this.ctx.save(),
                        this.path([new r7(t.bounds.left + .39363 * w,t.bounds.top + .79 * w), new r7(t.bounds.left + .16 * w,t.bounds.top + .5549 * w), new r7(t.bounds.left + .27347 * w,t.bounds.top + .44071 * w), new r7(t.bounds.left + .39694 * w,t.bounds.top + .5649 * w), new r7(t.bounds.left + .72983 * w,t.bounds.top + .23 * w), new r7(t.bounds.left + .84 * w,t.bounds.top + .34085 * w), new r7(t.bounds.left + .39363 * w,t.bounds.top + .79 * w), ]),
                        this.ctx.fillStyle = AY(707406591),
                        this.ctx.fill(),
                        this.ctx.restore()) : t.type === BY && t.checked && (this.ctx.save(),
                        this.ctx.beginPath(),
                        this.ctx.arc(t.bounds.left + w / 2, t.bounds.top + w / 2, w / 4, 0, 2 * Math.PI, !0),
                        this.ctx.fillStyle = AY(707406591),
                        this.ctx.fill(),
                        this.ctx.restore())),
                        nK(t) && t.value.length) {
                            switch (C = (U = this.createFontStyle(r))[0],
                            l = U[1],
                            u = this.fontMetrics.getMetrics(C, l).baseline,
                            this.ctx.font = C,
                            this.ctx.fillStyle = AY(r.color),
                            this.ctx.textBaseline = "alphabetic",
                            this.ctx.textAlign = nx(t.styles.textAlign),
                            F = nF(t),
                            f = 0,
                            t.styles.textAlign) {
                            case 1:
                                f += F.width / 2;
                                break;
                            case 2:
                                f += F.width
                            }
                            $ = F.add(f, 0, 0, -F.height / 2 + 1),
                            this.ctx.save(),
                            this.path([new r7(F.left,F.top), new r7(F.left + F.width,F.top), new r7(F.left + F.width,F.top + F.height), new r7(F.left,F.top + F.height), ]),
                            this.ctx.clip(),
                            this.renderTextWithLetterSpacing(new B_(t.value,$), r.letterSpacing, u),
                            this.ctx.restore(),
                            this.ctx.textBaseline = "alphabetic",
                            this.ctx.textAlign = "left"
                        }
                        if (!tx(t.styles.display, 2048))
                            return [3, 20];
                        if (!(null !== t.styles.listStyleImage))
                            return [3, 19];
                        if (0 !== (h = t.styles.listStyleImage).type)
                            return [3, 18];
                        i = void 0,
                        d = h.url,
                        Q.label = 15;
                    case 15:
                        return Q.trys.push([15, 17, , 18]),
                        [4, this.context.cache.match(d)];
                    case 16:
                        return i = Q.sent(),
                        this.ctx.drawImage(i, t.bounds.left - (i.width + 10), t.bounds.top),
                        [3, 18];
                    case 17:
                        return Q.sent(),
                        this.context.logger.error("Error loading list-style-image " + d),
                        [3, 18];
                    case 18:
                        return [3, 20];
                    case 19:
                        A.listValue && -1 !== t.styles.listStyleType && (C = this.createFontStyle(r)[0],
                        this.ctx.font = C,
                        this.ctx.fillStyle = AY(r.color),
                        this.ctx.textBaseline = "middle",
                        this.ctx.textAlign = "right",
                        F = new a(t.bounds.left,t.bounds.top + AV(t.styles.paddingTop, t.bounds.width),t.bounds.width,e5(r.lineHeight, r.fontSize.number) / 2 + 1),
                        this.renderTextWithLetterSpacing(new B_(A.listValue,F), r.letterSpacing, e5(r.lineHeight, r.fontSize.number) / 2 + 2),
                        this.ctx.textBaseline = "bottom",
                        this.ctx.textAlign = "left"),
                        Q.label = 20;
                    case 20:
                        return [2]
                    }
                })
            })
        }
        ,
        e.prototype.renderStackContent = function(A) {
            return i(this, void 0, void 0, function() {
                var e, t, B, r, n, s, o, i, c, a, g, w, U, C, l;
                return Q(this, function(Q) {
                    switch (Q.label) {
                    case 0:
                        return tx(A.element.container.flags, 16),
                        [4, this.renderNodeBackgroundAndBorders(A.element), ];
                    case 1:
                        Q.sent(),
                        e = 0,
                        t = A.negativeZIndex,
                        Q.label = 2;
                    case 2:
                        if (!(e < t.length))
                            return [3, 5];
                        return B = t[e],
                        [4, this.renderStack(B)];
                    case 3:
                        Q.sent(),
                        Q.label = 4;
                    case 4:
                        return e++,
                        [3, 2];
                    case 5:
                        return [4, this.renderNodeContent(A.element)];
                    case 6:
                        Q.sent(),
                        r = 0,
                        n = A.nonInlineLevel,
                        Q.label = 7;
                    case 7:
                        if (!(r < n.length))
                            return [3, 10];
                        return B = n[r],
                        [4, this.renderNode(B)];
                    case 8:
                        Q.sent(),
                        Q.label = 9;
                    case 9:
                        return r++,
                        [3, 7];
                    case 10:
                        s = 0,
                        o = A.nonPositionedFloats,
                        Q.label = 11;
                    case 11:
                        if (!(s < o.length))
                            return [3, 14];
                        return B = o[s],
                        [4, this.renderStack(B)];
                    case 12:
                        Q.sent(),
                        Q.label = 13;
                    case 13:
                        return s++,
                        [3, 11];
                    case 14:
                        i = 0,
                        c = A.nonPositionedInlineLevel,
                        Q.label = 15;
                    case 15:
                        if (!(i < c.length))
                            return [3, 18];
                        return B = c[i],
                        [4, this.renderStack(B)];
                    case 16:
                        Q.sent(),
                        Q.label = 17;
                    case 17:
                        return i++,
                        [3, 15];
                    case 18:
                        a = 0,
                        g = A.inlineLevel,
                        Q.label = 19;
                    case 19:
                        if (!(a < g.length))
                            return [3, 22];
                        return B = g[a],
                        [4, this.renderNode(B)];
                    case 20:
                        Q.sent(),
                        Q.label = 21;
                    case 21:
                        return a++,
                        [3, 19];
                    case 22:
                        w = 0,
                        U = A.zeroOrAutoZIndexOrTransformedOrOpacity,
                        Q.label = 23;
                    case 23:
                        if (!(w < U.length))
                            return [3, 26];
                        return B = U[w],
                        [4, this.renderStack(B)];
                    case 24:
                        Q.sent(),
                        Q.label = 25;
                    case 25:
                        return w++,
                        [3, 23];
                    case 26:
                        C = 0,
                        l = A.positiveZIndex,
                        Q.label = 27;
                    case 27:
                        if (!(C < l.length))
                            return [3, 30];
                        return B = l[C],
                        [4, this.renderStack(B)];
                    case 28:
                        Q.sent(),
                        Q.label = 29;
                    case 29:
                        return C++,
                        [3, 27];
                    case 30:
                        return [2]
                    }
                })
            })
        }
        ,
        e.prototype.mask = function(A) {
            this.ctx.beginPath(),
            this.ctx.moveTo(0, 0),
            this.ctx.lineTo(this.canvas.width, 0),
            this.ctx.lineTo(this.canvas.width, this.canvas.height),
            this.ctx.lineTo(0, this.canvas.height),
            this.ctx.lineTo(0, 0),
            this.formatPath(A.slice(0).reverse()),
            this.ctx.closePath()
        }
        ,
        e.prototype.path = function(A) {
            this.ctx.beginPath(),
            this.formatPath(A),
            this.ctx.closePath()
        }
        ,
        e.prototype.formatPath = function(A) {
            var e = this;
            A.forEach(function(A, t) {
                var B = rq(A) ? A.start : A;
                0 === t ? e.ctx.moveTo(B.x, B.y) : e.ctx.lineTo(B.x, B.y),
                rq(A) && e.ctx.bezierCurveTo(A.startControl.x, A.startControl.y, A.endControl.x, A.endControl.y, A.end.x, A.end.y)
            })
        }
        ,
        e.prototype.renderRepeat = function(A, e, t, B) {
            this.path(A),
            this.ctx.fillStyle = e,
            this.ctx.translate(t, B),
            this.ctx.fill(),
            this.ctx.translate(-t, -B)
        }
        ,
        e.prototype.resizeImage = function(A, e, t) {
            if (A.width === e && A.height === t)
                return A;
            var B, r = (null !== (B = this.canvas.ownerDocument) && void 0 !== B ? B : document).createElement("canvas");
            return r.width = Math.max(1, e),
            r.height = Math.max(1, t),
            r.getContext("2d").drawImage(A, 0, 0, A.width, A.height, 0, 0, e, t),
            r
        }
        ,
        e.prototype.renderBackgroundImage = function(A) {
            return i(this, void 0, void 0, function() {
                var e, t, B, r, n, s;
                return Q(this, function(o) {
                    switch (o.label) {
                    case 0:
                        e = A.styles.backgroundImage.length - 1,
                        t = function(t) {
                            var r, n, s, o, i, c, a, g, w, U, C, l, u, F, f, $, h, d, H, p, E, I, y, K, _, x, m, L, b, v, D;
                            return Q(this, function(Q) {
                                switch (Q.label) {
                                case 0:
                                    if (0 !== t.type)
                                        return [3, 5];
                                    r = void 0,
                                    n = t.url,
                                    Q.label = 1;
                                case 1:
                                    return Q.trys.push([1, 3, , 4]),
                                    [4, B.context.cache.match(n)];
                                case 2:
                                    return r = Q.sent(),
                                    [3, 4];
                                case 3:
                                    return Q.sent(),
                                    B.context.logger.error("Error loading background-image " + n),
                                    [3, 4];
                                case 4:
                                    return r && (o = (s = nf(A, e, [r.width, r.height, r.width / r.height, ]))[0],
                                    i = s[1],
                                    c = s[2],
                                    a = s[3],
                                    g = s[4],
                                    w = B.ctx.createPattern(B.resizeImage(r, a, g), "repeat"),
                                    B.renderRepeat(o, w, i, c)),
                                    [3, 6];
                                case 5:
                                    var S, G;
                                    1 === (S = t).type ? (o = (U = nf(A, e, [null, null, null, ]))[0],
                                    i = U[1],
                                    c = U[2],
                                    a = U[3],
                                    g = U[4],
                                    l = (C = en(t.angle, a, g))[0],
                                    u = C[1],
                                    F = C[2],
                                    f = C[3],
                                    $ = C[4],
                                    (h = document.createElement("canvas")).width = a,
                                    h.height = g,
                                    H = (d = h.getContext("2d")).createLinearGradient(u, f, F, $),
                                    eB(t.stops, l).forEach(function(A) {
                                        return H.addColorStop(A.stop, AY(A.color))
                                    }),
                                    d.fillStyle = H,
                                    d.fillRect(0, 0, a, g),
                                    a > 0 && g > 0 && (w = B.ctx.createPattern(h, "repeat"),
                                    B.renderRepeat(o, w, i, c))) : 2 === (G = t).type && (o = (p = nf(A, e, [null, null, null, ]))[0],
                                    E = p[1],
                                    I = p[2],
                                    a = p[3],
                                    g = p[4],
                                    y = 0 === t.position.length ? [AG] : t.position,
                                    i = AV(y[0], a),
                                    c = AV(y[y.length - 1], g),
                                    _ = (K = ei(t, i, c, a, g))[0],
                                    x = K[1],
                                    _ > 0 && x > 0 && (m = B.ctx.createRadialGradient(E + i, I + c, 0, E + i, I + c, _),
                                    eB(t.stops, 2 * _).forEach(function(A) {
                                        return m.addColorStop(A.stop, AY(A.color))
                                    }),
                                    B.path(o),
                                    B.ctx.fillStyle = m,
                                    _ !== x ? (L = A.bounds.left + .5 * A.bounds.width,
                                    b = A.bounds.top + .5 * A.bounds.height,
                                    D = 1 / (v = x / _),
                                    B.ctx.save(),
                                    B.ctx.translate(L, b),
                                    B.ctx.transform(1, 0, 0, v, 0, 0),
                                    B.ctx.translate(-L, -b),
                                    B.ctx.fillRect(E, D * (I - b) + b, a, g * D),
                                    B.ctx.restore()) : B.ctx.fill())),
                                    Q.label = 6;
                                case 6:
                                    return e--,
                                    [2]
                                }
                            })
                        }
                        ,
                        B = this,
                        r = 0,
                        n = A.styles.backgroundImage.slice(0).reverse(),
                        o.label = 1;
                    case 1:
                        if (!(r < n.length))
                            return [3, 4];
                        return [5, t(s = n[r])];
                    case 2:
                        o.sent(),
                        o.label = 3;
                    case 3:
                        return r++,
                        [3, 1];
                    case 4:
                        return [2]
                    }
                })
            })
        }
        ,
        e.prototype.renderSolidBorder = function(A, e, t) {
            return i(this, void 0, void 0, function() {
                return Q(this, function(B) {
                    return this.path(na(t, e)),
                    this.ctx.fillStyle = AY(A),
                    this.ctx.fill(),
                    [2]
                })
            })
        }
        ,
        e.prototype.renderDoubleBorder = function(A, e, t, B) {
            return i(this, void 0, void 0, function() {
                var r, n;
                return Q(this, function(s) {
                    switch (s.label) {
                    case 0:
                        if (!(e < 3))
                            return [3, 2];
                        return [4, this.renderSolidBorder(A, t, B), ];
                    case 1:
                        return s.sent(),
                        [2];
                    case 2:
                        return r = ng(B, t),
                        this.path(r),
                        this.ctx.fillStyle = AY(A),
                        this.ctx.fill(),
                        n = nw(B, t),
                        this.path(n),
                        this.ctx.fill(),
                        [2]
                    }
                })
            })
        }
        ,
        e.prototype.renderNodeBackgroundAndBorders = function(A) {
            return i(this, void 0, void 0, function() {
                var e, t, B, r, n, s, o, i, c = this;
                return Q(this, function(Q) {
                    switch (Q.label) {
                    case 0:
                        if (this.applyEffects(A.getEffects(2)),
                        t = !AX((e = A.container.styles).backgroundColor) || e.backgroundImage.length,
                        B = [{
                            style: e.borderTopStyle,
                            color: e.borderTopColor,
                            width: e.borderTopWidth
                        }, {
                            style: e.borderRightStyle,
                            color: e.borderRightColor,
                            width: e.borderRightWidth
                        }, {
                            style: e.borderBottomStyle,
                            color: e.borderBottomColor,
                            width: e.borderBottomWidth
                        }, {
                            style: e.borderLeftStyle,
                            color: e.borderLeftColor,
                            width: e.borderLeftWidth
                        }, ],
                        r = n_(nH(e.backgroundClip, 0), A.curves),
                        !(t || e.boxShadow.length))
                            return [3, 2];
                        return this.ctx.save(),
                        this.path(r),
                        this.ctx.clip(),
                        AX(e.backgroundColor) || (this.ctx.fillStyle = AY(e.backgroundColor),
                        this.ctx.fill()),
                        [4, this.renderBackgroundImage(A.container)];
                    case 1:
                        Q.sent(),
                        this.ctx.restore(),
                        e.boxShadow.slice(0).reverse().forEach(function(e) {
                            c.ctx.save();
                            var t, B, r, n, s, o = r9(A.curves), i = e.inset ? 0 : 1e4, Q = (t = o,
                            B = -i + (e.inset ? 1 : -1) * e.spread.number,
                            r = (e.inset ? 1 : -1) * e.spread.number,
                            n = e.spread.number * (e.inset ? -2 : 2),
                            s = e.spread.number * (e.inset ? -2 : 2),
                            t.map(function(A, e) {
                                switch (e) {
                                case 0:
                                    return A.add(B, r);
                                case 1:
                                    return A.add(B + n, r);
                                case 2:
                                    return A.add(B + n, r + s);
                                case 3:
                                    return A.add(B, r + s)
                                }
                                return A
                            }));
                            e.inset ? (c.path(o),
                            c.ctx.clip(),
                            c.mask(Q)) : (c.mask(o),
                            c.ctx.clip(),
                            c.path(Q)),
                            c.ctx.shadowOffsetX = e.offsetX.number + i,
                            c.ctx.shadowOffsetY = e.offsetY.number,
                            c.ctx.shadowColor = AY(e.color),
                            c.ctx.shadowBlur = e.blur.number,
                            c.ctx.fillStyle = e.inset ? AY(e.color) : "rgba(0,0,0,1)",
                            c.ctx.fill(),
                            c.ctx.restore()
                        }),
                        Q.label = 2;
                    case 2:
                        n = 0,
                        s = 0,
                        o = B,
                        Q.label = 3;
                    case 3:
                        if (!(s < o.length))
                            return [3, 13];
                        if (!(0 !== (i = o[s]).style && !AX(i.color) && i.width > 0))
                            return [3, 11];
                        if (2 !== i.style)
                            return [3, 5];
                        return [4, this.renderDashedDottedBorder(i.color, i.width, n, A.curves, 2), ];
                    case 4:
                    case 6:
                    case 8:
                        return Q.sent(),
                        [3, 11];
                    case 5:
                        if (3 !== i.style)
                            return [3, 7];
                        return [4, this.renderDashedDottedBorder(i.color, i.width, n, A.curves, 3), ];
                    case 7:
                        if (4 !== i.style)
                            return [3, 9];
                        return [4, this.renderDoubleBorder(i.color, i.width, n, A.curves), ];
                    case 9:
                        return [4, this.renderSolidBorder(i.color, n, A.curves), ];
                    case 10:
                        Q.sent(),
                        Q.label = 11;
                    case 11:
                        n++,
                        Q.label = 12;
                    case 12:
                        return s++,
                        [3, 3];
                    case 13:
                        return [2]
                    }
                })
            })
        }
        ,
        e.prototype.renderDashedDottedBorder = function(A, e, t, B, r) {
            return i(this, void 0, void 0, function() {
                var n, s, o, i, c, a, g, w, U, C, l, u, F, f, $, h;
                return Q(this, function(Q) {
                    return this.ctx.save(),
                    n = nU(B, t),
                    s = na(B, t),
                    2 === r && (this.path(s),
                    this.ctx.clip()),
                    rq(s[0]) ? (o = s[0].start.x,
                    i = s[0].start.y) : (o = s[0].x,
                    i = s[0].y),
                    rq(s[1]) ? (c = s[1].end.x,
                    a = s[1].end.y) : (c = s[1].x,
                    a = s[1].y),
                    g = 0 === t || 2 === t ? Math.abs(o - c) : Math.abs(i - a),
                    this.ctx.beginPath(),
                    3 === r ? this.formatPath(n) : this.formatPath(s.slice(0, 2)),
                    w = e < 3 ? 3 * e : 2 * e,
                    U = e < 3 ? 2 * e : e,
                    3 === r && (w = e,
                    U = e),
                    C = !0,
                    g <= 2 * w ? C = !1 : g <= 2 * w + U ? (l = g / (2 * w + U),
                    w *= l,
                    U *= l) : (u = Math.floor((g + U) / (w + U)),
                    F = (g - u * w) / (u - 1),
                    U = (f = (g - (u + 1) * w) / u) <= 0 || Math.abs(U - F) < Math.abs(U - f) ? F : f),
                    C && (3 === r ? this.ctx.setLineDash([0, w + U]) : this.ctx.setLineDash([w, U])),
                    3 === r ? (this.ctx.lineCap = "round",
                    this.ctx.lineWidth = e) : this.ctx.lineWidth = 2 * e + 1.1,
                    this.ctx.strokeStyle = AY(A),
                    this.ctx.stroke(),
                    this.ctx.setLineDash([]),
                    2 === r && (rq(s[0]) && ($ = s[3],
                    h = s[0],
                    this.ctx.beginPath(),
                    this.formatPath([new r7($.end.x,$.end.y), new r7(h.start.x,h.start.y), ]),
                    this.ctx.stroke()),
                    rq(s[1]) && ($ = s[1],
                    h = s[2],
                    this.ctx.beginPath(),
                    this.formatPath([new r7($.end.x,$.end.y), new r7(h.start.x,h.start.y), ]),
                    this.ctx.stroke())),
                    this.ctx.restore(),
                    [2]
                })
            })
        }
        ,
        e.prototype.render = function(A) {
            return i(this, void 0, void 0, function() {
                var e;
                return Q(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return this.options.backgroundColor && (this.ctx.fillStyle = AY(this.options.backgroundColor),
                        this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)),
                        e = nc(A),
                        [4, this.renderStack(e)];
                    case 1:
                        return t.sent(),
                        this.applyEffects([]),
                        [2, this.canvas]
                    }
                })
            })
        }
        ,
        e
    }(n2)
      , nK = function(A) {
        return A instanceof B4 || A instanceof B3 || A instanceof BW && A.type !== BY && A.type !== BX
    }
      , n_ = function(A, e) {
        switch (A) {
        case 0:
            return r9(e);
        case 2:
            var t;
            return [(t = e).topLeftContentBox, t.topRightContentBox, t.bottomRightContentBox, t.bottomLeftContentBox, ];
        default:
            return nA(e)
        }
    }
      , nx = function(A) {
        switch (A) {
        case 1:
            return "center";
        case 2:
            return "right";
        default:
            return "left"
        }
    }
      , nm = function(A) {
        function e(e, t) {
            var B = A.call(this, e, t) || this;
            return B.canvas = t.canvas ? t.canvas : document.createElement("canvas"),
            B.ctx = B.canvas.getContext("2d"),
            B.options = t,
            B.canvas.width = Math.floor(t.width * t.scale),
            B.canvas.height = Math.floor(t.height * t.scale),
            B.canvas.style.width = t.width + "px",
            B.canvas.style.height = t.height + "px",
            B.ctx.scale(B.options.scale, B.options.scale),
            B.ctx.translate(-t.x, -t.y),
            B.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + t.width + "x" + t.height + " at " + t.x + "," + t.y + ") with scale " + t.scale),
            B
        }
        return s(e, A),
        e.prototype.render = function(A) {
            return i(this, void 0, void 0, function() {
                var e, t;
                return Q(this, function(B) {
                    switch (B.label) {
                    case 0:
                        return e = Bg(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, A),
                        [4, nL(e)];
                    case 1:
                        return t = B.sent(),
                        this.options.backgroundColor && (this.ctx.fillStyle = AY(this.options.backgroundColor),
                        this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)),
                        this.ctx.drawImage(t, -this.options.x * this.options.scale, -this.options.y * this.options.scale),
                        [2, this.canvas]
                    }
                })
            })
        }
        ,
        e
    }(n2)
      , nL = function(A) {
        return new Promise(function(e, t) {
            var B = new Image;
            B.onload = function() {
                e(B)
            }
            ,
            B.onerror = t,
            B.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A))
        }
        )
    }
      , nb = function() {
        function A(A) {
            var e = A.id
              , t = A.enabled;
            this.id = e,
            this.enabled = t,
            this.start = Date.now()
        }
        return A.prototype.debug = function() {
            for (var A = [], e = 0; e < arguments.length; e++)
                A[e] = arguments[e];
            this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.debug ? console.debug.apply(console, c([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A))
        }
        ,
        A.prototype.getTime = function() {
            return Date.now() - this.start
        }
        ,
        A.prototype.info = function() {
            for (var A = [], e = 0; e < arguments.length; e++)
                A[e] = arguments[e];
            this.enabled && "undefined" != typeof window && window.console && "function" == typeof console.info && console.info.apply(console, c([this.id, this.getTime() + "ms"], A))
        }
        ,
        A.prototype.warn = function() {
            for (var A = [], e = 0; e < arguments.length; e++)
                A[e] = arguments[e];
            this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.warn ? console.warn.apply(console, c([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A))
        }
        ,
        A.prototype.error = function() {
            for (var A = [], e = 0; e < arguments.length; e++)
                A[e] = arguments[e];
            this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.error ? console.error.apply(console, c([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A))
        }
        ,
        A.instances = {},
        A
    }()
      , nv = function() {
        function A(e, t) {
            var B;
            this.windowBounds = t,
            this.instanceName = "#" + A.instanceCount++,
            this.logger = new nb({
                id: this.instanceName,
                enabled: e.logging
            }),
            this.cache = null !== (B = e.cache) && void 0 !== B ? B : new rP(this,e)
        }
        return A.instanceCount = 1,
        A
    }()
      , nD = function(A, e) {
        return void 0 === e && (e = {}),
        n0(A, e)
    };
    "undefined" != typeof window && rN.setContext(window);
    var n0 = function(A, e) {
        return i(void 0, void 0, void 0, function() {
            var t, B, r, n, s, i, c, U, C, l, u, F, f, $, h, d, H, p, E, I, y, K, _, x, m, L, b, v, D, S, G, T, O, V, M, k, R, N, P;
            return Q(this, function(Q) {
                switch (Q.label) {
                case 0:
                    if (!A || "object" != typeof A)
                        return [2, Promise.reject("Invalid element provided as first argument"), ];
                    if (!(t = A.ownerDocument))
                        throw Error("Element is not attached to a Document");
                    if (!(B = t.defaultView))
                        throw Error("Document is not attached to a Window");
                    if (r = {
                        allowTaint: null !== (_ = e.allowTaint) && void 0 !== _ && _,
                        imageTimeout: null !== (x = e.imageTimeout) && void 0 !== x ? x : 15e3,
                        proxy: e.proxy,
                        useCORS: null !== (m = e.useCORS) && void 0 !== m && m
                    },
                    n = o({
                        logging: null === (L = e.logging) || void 0 === L || L,
                        cache: e.cache
                    }, r),
                    s = {
                        windowWidth: null !== (b = e.windowWidth) && void 0 !== b ? b : B.innerWidth,
                        windowHeight: null !== (v = e.windowHeight) && void 0 !== v ? v : B.innerHeight,
                        scrollX: null !== (D = e.scrollX) && void 0 !== D ? D : B.pageXOffset,
                        scrollY: null !== (S = e.scrollY) && void 0 !== S ? S : B.pageYOffset
                    },
                    i = new a(s.scrollX,s.scrollY,s.windowWidth,s.windowHeight),
                    c = new nv(n,i),
                    U = null !== (G = e.foreignObjectRendering) && void 0 !== G && G,
                    C = {
                        allowTaint: null !== (T = e.allowTaint) && void 0 !== T && T,
                        onclone: e.onclone,
                        ignoreElements: e.ignoreElements,
                        inlineImages: U,
                        copyStyles: U
                    },
                    c.logger.debug("Starting document clone with size " + i.width + "x" + i.height + " scrolled to " + -i.left + "," + -i.top),
                    !(u = (l = new rx(c,A,C)).clonedReferenceElement))
                        return [2, Promise.reject("Unable to find element in cloned iframe"), ];
                    return [4, l.toIFrame(t, i), ];
                case 1:
                    var J;
                    if (F = Q.sent(),
                    $ = (f = ro(u) || "HTML" === (J = u).tagName ? w(u.ownerDocument) : g(c, u)).width,
                    h = f.height,
                    d = f.left,
                    H = f.top,
                    p = nS(c, u, e.backgroundColor),
                    E = {
                        canvas: e.canvas,
                        backgroundColor: p,
                        scale: null !== (V = null !== (O = e.scale) && void 0 !== O ? O : B.devicePixelRatio) && void 0 !== V ? V : 1,
                        x: (null !== (M = e.x) && void 0 !== M ? M : 0) + d,
                        y: (null !== (k = e.y) && void 0 !== k ? k : 0) + H,
                        width: null !== (R = e.width) && void 0 !== R ? R : Math.ceil($),
                        height: null !== (N = e.height) && void 0 !== N ? N : Math.ceil(h)
                    },
                    !U)
                        return [3, 3];
                    return c.logger.debug("Document cloned, using foreign object rendering"),
                    [4, (y = new nm(c,E)).render(u)];
                case 2:
                    return I = Q.sent(),
                    [3, 5];
                case 3:
                    return c.logger.debug("Document cloned, element located at " + d + "," + H + " with size " + $ + "x" + h + " using computed rendering"),
                    c.logger.debug("Starting DOM parsing"),
                    K = Bq(c, u),
                    p === K.styles.backgroundColor && (K.styles.backgroundColor = A9.TRANSPARENT),
                    c.logger.debug("Starting renderer for element at " + E.x + "," + E.y + " with size " + E.width + "x" + E.height),
                    [4, (y = new ny(c,E)).render(K)];
                case 4:
                    I = Q.sent(),
                    Q.label = 5;
                case 5:
                    return (null === (P = e.removeContainer) || void 0 === P || P) && !rx.destroy(F) && c.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore"),
                    c.logger.debug("Finished rendering"),
                    [2, I]
                }
            })
        })
    }
      , nS = function(A, e, t) {
        var B = e.ownerDocument
          , r = B.documentElement ? Az(A, getComputedStyle(B.documentElement).backgroundColor) : A9.TRANSPARENT
          , n = B.body ? Az(A, getComputedStyle(B.body).backgroundColor) : A9.TRANSPARENT
          , s = "string" == typeof t ? Az(A, t) : null === t ? A9.TRANSPARENT : 4294967295;
        return e === B.documentElement ? AX(r) ? AX(n) ? s : n : r : s
    };
    return nD
});
