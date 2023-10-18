
  
    function createFunctionWithTimeout(t, e) {
    function i() {
      n || (n = !0, t())
    }
    var n = !1;
    return setTimeout(i, e), i
  }

  function submitEmailSignup(t) {
    var e = $("." + t),
      i = e.val();
    ga("send", {
      hitType: "event",
      eventCategory: "Signup",
      eventAction: "submit-email",
      eventLabel: t,
      hitCallback: createFunctionWithTimeout(function() {
        window.location = signupUrl + (i ? "?email=" + encodeURIComponent(i) : "")
      }, 500)
    })
  }

  function sendGoogleFormData(t, e) {
    var i = "https://docs.google.com/forms/d/" + t + "/formResponse";
    $.ajax({
      url: i,
      data: e,
      type: "POST",
      dataType: "xml"
    })
  }

  function scrollDown() {
    Jump.jump(document.getElementById("infobox-content"), {
      duration: 300,
      offset: -64
    })
  }

  function submitPricingRequest(t, e) {
    var i = $("." + t),
      n = i.val();
    ga("send", {
      hitType: "event",
      eventCategory: "Pricing",
      eventAction: "request-pricing-" + e,
      eventLabel: t
    }), sendSlackMessage("#customer-support", "Pricing Request - " + e, n, function(t) {
      $(".info").addClass("-success")
    });
    var o = window.location.host + window.location.pathname + window.location.search;
    sendPricingData(o, e, n)
  }

  function sendPricingData(t, e, i) {
    sendGoogleFormData("1tr7YNfqd1cZe6zGDx6f_NpkPzpcyIx_URdDyhCZIvO0", {
      "entry.1290843904": t,
      "entry.933666175": e,
      "entry.1992247742": i
    })
  }

  function sendSlackMessage(t, e, i, n) {
    const o = "https://hooks.slack.com/services/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",
      s = {
        channel: t,
        username: e,
        text: i
      },
      r = "payload=" + JSON.stringify(s);
    $.ajax({
      type: "POST",
      url: o,
      contentType: "application/x-www-form-urlencoded",
      data: r,
      success: n
    })
  }! function(t, e) {
    "use strict";

    function i(t) {
      t = t || {};
      for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        if (i)
          for (var n in i) i.hasOwnProperty(n) && ("object" == typeof i[n] ? deepExtend(t[n], i[n]) : t[n] = i[n])
      }
      return t
    }

    function n(n, r) {
      function a() {
        if (E) {
          y = e.createElement("canvas"), y.className = "pg-canvas", y.style.display = "block", n.insertBefore(y, n.firstChild), g = y.getContext("2d"), l();
          for (var i = Math.round(y.width * y.height / r.density), o = 0; i > o; o++) {
            var s = new p;
            s.setStackPos(o), C.push(s)
          }
          t.addEventListener("resize", function() {
            u()
          }, !1), e.addEventListener("mousemove", function(t) {
            O = t.pageX, T = t.pageY
          }, !1), P && !M && t.addEventListener("deviceorientation", function() {
            A = Math.min(Math.max(-event.beta, -30), 30), N = Math.min(Math.max(-event.gamma, -30), 30)
          }, !0), c(), v("onInit")
        }
      }

      function l() {
        y.width = n.offsetWidth, y.height = n.offsetHeight, g.fillStyle = r.dotColor, g.strokeStyle = r.lineColor, g.lineWidth = r.lineWidth
      }

      function c() {
        if (E) {
          w = t.innerWidth, x = t.innerHeight, g.clearRect(0, 0, y.width, y.height);
          for (var e = 0; e < C.length; e++) C[e].updatePosition();
          for (var e = 0; e < C.length; e++) C[e].draw();
          L || (b = requestAnimationFrame(c))
        }
      }

      function u() {
        l();
        for (var t = n.offsetWidth, e = n.offsetHeight, i = C.length - 1; i >= 0; i--)(C[i].position.x > t || C[i].position.y > e) && C.splice(i, 1);
        var o = Math.round(y.width * y.height / r.density);
        if (o > C.length)
          for (; o > C.length;) {
            var s = new p;
            C.push(s)
          } else o < C.length && C.splice(o);
        for (i = C.length - 1; i >= 0; i--) C[i].setStackPos(i)
      }

      function h() {
        L = !0
      }

      function d() {
        L = !1, c()
      }

      function p() {
        switch (this.stackPos, this.active = !0, this.layer = Math.ceil(3 * Math.random()), this.parallaxOffsetX = 0, this.parallaxOffsetY = 0, this.position = {
          x: Math.ceil(Math.random() * y.width),
          y: Math.ceil(Math.random() * y.height)
        }, this.speed = {}, r.directionX) {
          case "left":
            this.speed.x = +(-r.maxSpeedX + Math.random() * r.maxSpeedX - r.minSpeedX).toFixed(2);
            break;
          case "right":
            this.speed.x = +(Math.random() * r.maxSpeedX + r.minSpeedX).toFixed(2);
            break;
          default:
            this.speed.x = +(-r.maxSpeedX / 2 + Math.random() * r.maxSpeedX).toFixed(2), this.speed.x += this.speed.x > 0 ? r.minSpeedX : -r.minSpeedX
        }
        switch (r.directionY) {
          case "up":
            this.speed.y = +(-r.maxSpeedY + Math.random() * r.maxSpeedY - r.minSpeedY).toFixed(2);
            break;
          case "down":
            this.speed.y = +(Math.random() * r.maxSpeedY + r.minSpeedY).toFixed(2);
            break;
          default:
            this.speed.y = +(-r.maxSpeedY / 2 + Math.random() * r.maxSpeedY).toFixed(2), this.speed.x += this.speed.y > 0 ? r.minSpeedY : -r.minSpeedY
        }
      }

      function f(t, e) {
        return e ? void(r[t] = e) : r[t]
      }

      function m() {
        console.log("destroy"), y.parentNode.removeChild(y), v("onDestroy"), s && s(n).removeData("plugin_" + o)
      }

      function v(t) {
        void 0 !== r[t] && r[t].call(n)
      }
      var y, g, b, w, x, k, S, E = !!e.createElement("canvas").getContext,
        C = [],
        O = 0,
        T = 0,
        M = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),
        P = !!t.DeviceOrientationEvent,
        N = 0,
        A = 0,
        L = !1;
      return r = i({}, t[o].defaults, r), p.prototype.draw = function() {
        g.beginPath(), g.arc(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY, r.particleRadius / 2, 0, 2 * Math.PI, !0), g.closePath(), g.fill(), g.beginPath();
        for (var t = C.length - 1; t > this.stackPos; t--) {
          var e = C[t],
            i = this.position.x - e.position.x,
            n = this.position.y - e.position.y,
            o = Math.sqrt(i * i + n * n).toFixed(2);
          o < r.proximity && (g.moveTo(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY), r.curvedLines ? g.quadraticCurveTo(Math.max(e.position.x, e.position.x), Math.min(e.position.y, e.position.y), e.position.x + e.parallaxOffsetX, e.position.y + e.parallaxOffsetY) : g.lineTo(e.position.x + e.parallaxOffsetX, e.position.y + e.parallaxOffsetY))
        }
        g.stroke(), g.closePath()
      }, p.prototype.updatePosition = function() {
        if (r.parallax) {
          if (P && !M) {
            var t = (w - 0) / 60;
            k = (N - -30) * t + 0;
            var e = (x - 0) / 60;
            S = (A - -30) * e + 0
          } else k = O, S = T;
          this.parallaxTargX = (k - w / 2) / (r.parallaxMultiplier * this.layer), this.parallaxOffsetX += (this.parallaxTargX - this.parallaxOffsetX) / 10, this.parallaxTargY = (S - x / 2) / (r.parallaxMultiplier * this.layer), this.parallaxOffsetY += (this.parallaxTargY - this.parallaxOffsetY) / 10
        }
        var i = n.offsetWidth,
          o = n.offsetHeight;
        switch (r.directionX) {
          case "left":
            this.position.x + this.speed.x + this.parallaxOffsetX < 0 && (this.position.x = i - this.parallaxOffsetX);
            break;
          case "right":
            this.position.x + this.speed.x + this.parallaxOffsetX > i && (this.position.x = 0 - this.parallaxOffsetX);
            break;
          default:
            (this.position.x + this.speed.x + this.parallaxOffsetX > i || this.position.x + this.speed.x + this.parallaxOffsetX < 0) && (this.speed.x = -this.speed.x)
        }
        switch (r.directionY) {
          case "up":
            this.position.y + this.speed.y + this.parallaxOffsetY < 0 && (this.position.y = o - this.parallaxOffsetY);
            break;
          case "down":
            this.position.y + this.speed.y + this.parallaxOffsetY > o && (this.position.y = 0 - this.parallaxOffsetY);
            break;
          default:
            (this.position.y + this.speed.y + this.parallaxOffsetY > o || this.position.y + this.speed.y + this.parallaxOffsetY < 0) && (this.speed.y = -this.speed.y)
        }
        this.position.x += this.speed.x, this.position.y += this.speed.y
      }, p.prototype.setStackPos = function(t) {
        this.stackPos = t
      }, a(), {
        option: f,
        destroy: m,
        start: d,
        pause: h
      }
    }
    var o = "particleground",
      s = t.jQuery;
    t[o] = function(t, e) {
      return new n(t, e)
    }, t[o].defaults = {
      minSpeedX: .1,
      maxSpeedX: .7,
      minSpeedY: .1,
      maxSpeedY: .7,
      directionX: "center",
      directionY: "center",
      density: 1e4,
      dotColor: "#666666",
      lineColor: "#666666",
      particleRadius: 7,
      lineWidth: 1,
      curvedLines: !1,
      proximity: 100,
      parallax: !0,
      parallaxMultiplier: 5,
      onInit: function() {},
      onDestroy: function() {}
    }, s && (s.fn[o] = function(t) {
      if ("string" == typeof arguments[0]) {
        var e, i = arguments[0],
          r = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
          s.data(this, "plugin_" + o) && "function" == typeof s.data(this, "plugin_" + o)[i] && (e = s.data(this, "plugin_" + o)[i].apply(this, r))
        }), void 0 !== e ? e : this
      }
      return "object" != typeof t && t ? void 0 : this.each(function() {
        s.data(this, "plugin_" + o) || s.data(this, "plugin_" + o, new n(this, t))
      })
    })
  }(window, document),
  function() {
    for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(e, i) {
      var n = (new Date).getTime(),
        o = Math.max(0, 16 - (n - t)),
        s = window.setTimeout(function() {
          e(n + o)
        }, o);
      return t = n + o, s
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
      clearTimeout(t)
    })
  }();
  var riveted = function() {
    function t(t) {
      t = t || {}, m = parseInt(t.reportInterval, 10) || 5, v = parseInt(t.idleTimeout, 10) || 30, w = t.gaGlobal || "ga", "function" == typeof window[w] && (g = !0, b = "send"), "function" == typeof t.eventHandler && (p = t.eventHandler), "function" == typeof t.userTimingHandler && (f = t.userTimingHandler), y = "nonInteraction" in t && (t.nonInteraction === !1 || "false" === t.nonInteraction) ? !1 : !0, i(document, "keydown", d), i(document, "click", d), i(window, "mousemove", e(d, 500)), i(window, "scroll", e(d, 500)), i(document, "visibilitychange", o), i(document, "webkitvisibilitychange", o)
    }

    function e(t, e) {
      var i, n, o, s = null,
        r = 0,
        a = function() {
          r = new Date, s = null, o = t.apply(i, n)
        };
      return function() {
        var l = new Date;
        r || (r = l);
        var c = e - (l - r);
        return i = this, n = arguments, 0 >= c ? (clearTimeout(s), s = null, r = l, o = t.apply(i, n)) : s || (s = setTimeout(a, c)), o
      }
    }

    function i(t, e, i) {
      t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i
    }

    function n() {
      clearTimeout(T), r()
    }

    function o() {
      (document.hidden || document.webkitHidden) && n()
    }

    function s() {
      E += 1, E > 0 && E % m === 0 && p(E)
    }

    function r() {
      k = !0, clearTimeout(O)
    }

    function a() {
      n(), S = !0
    }

    function l() {
      S = !1
    }

    function c() {
      k = !1, clearTimeout(O), O = setInterval(s, 1e3)
    }

    function u() {
      var t = new Date,
        e = t - C;
      x = !0, f(e), O = setInterval(s, 1e3)
    }

    function h() {
      C = new Date, E = 0, x = !1, k = !1, clearTimeout(O), clearTimeout(T)
    }

    function d() {
      S || (x || u(), k && c(), clearTimeout(T), T = setTimeout(n, 1e3 * v + 100))
    }
    var p, f, m, v, y, g, b, w, x = !1,
      k = !1,
      S = !1,
      E = 0,
      C = new Date,
      O = null,
      T = null;
    return f = function(t) {
      g && window[w](b, "timing", "Riveted", "First Interaction", t)
    }, p = function(t) {
      g && window[w](b, "event", "Riveted", "Time Spent", t.toString(), m, {
        nonInteraction: y
      })
    }, {
      init: t,
      trigger: d,
      setIdle: n,
      on: l,
      off: a,
      reset: h
    }
  }();
  riveted.init({
      reportInterval: 10,
      idleTimeout: 30,
      nonInteraction: !1
    }),
    function() {
      var t, e, i, n, o, s = function(t, e) {
          return function() {
            return t.apply(e, arguments)
          }
        },
        r = [].indexOf || function(t) {
          for (var e = 0, i = this.length; i > e; e++)
            if (e in this && this[e] === t) return e;
          return -1
        };
      e = function() {
        function t() {}
        return t.prototype.extend = function(t, e) {
          var i, n;
          for (i in e) n = e[i], null == t[i] && (t[i] = n);
          return t
        }, t.prototype.isMobile = function(t) {
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
        }, t.prototype.createEvent = function(t, e, i, n) {
          var o;
          return null == e && (e = !1), null == i && (i = !1), null == n && (n = null), null != document.createEvent ? (o = document.createEvent("CustomEvent"), o.initCustomEvent(t, e, i, n)) : null != document.createEventObject ? (o = document.createEventObject(), o.eventType = t) : o.eventName = t, o
        }, t.prototype.emitEvent = function(t, e) {
          return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
        }, t.prototype.addEvent = function(t, e, i) {
          return null != t.addEventListener ? t.addEventListener(e, i, !1) : null != t.attachEvent ? t.attachEvent("on" + e, i) : t[e] = i
        }, t.prototype.removeEvent = function(t, e, i) {
          return null != t.removeEventListener ? t.removeEventListener(e, i, !1) : null != t.detachEvent ? t.detachEvent("on" + e, i) : delete t[e]
        }, t.prototype.innerHeight = function() {
          return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, t
      }(), i = this.WeakMap || this.MozWeakMap || (i = function() {
        function t() {
          this.keys = [], this.values = []
        }
        return t.prototype.get = function(t) {
          var e, i, n, o, s;
          for (s = this.keys, e = n = 0, o = s.length; o > n; e = ++n)
            if (i = s[e], i === t) return this.values[e]
        }, t.prototype.set = function(t, e) {
          var i, n, o, s, r;
          for (r = this.keys, i = o = 0, s = r.length; s > o; i = ++o)
            if (n = r[i], n === t) return void(this.values[i] = e);
          return this.keys.push(t), this.values.push(e)
        }, t
      }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
        function t() {
          "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("error")
        }
        return t.notSupported = !0, t.prototype.observe = function() {}, t
      }()), n = this.getComputedStyle || function(t) {
        return this.getPropertyValue = function(e) {
          var i;
          return "float" === e && (e = "styleFloat"), o.test(e) && e.replace(o, function(t, e) {
            return e.toUpperCase()
          }), (null != (i = t.currentStyle) ? i[e] : void 0) || null
        }, this
      }, o = /(\-([a-z]){1})/g, this.animate = function() {
        function o(t) {
          null == t && (t = {}), this.scrollCallback = s(this.scrollCallback, this), this.scrollHandler = s(this.scrollHandler, this), this.resetAnimation = s(this.resetAnimation, this), this.start = s(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new i, this.animateEvent = this.util().createEvent(this.config.boxClass)
        }
        return o.prototype.defaults = {
          boxClass: "animate",
          animateClass: "animated",
          offset: 0,
          mobile: !0,
          live: !0,
          callback: null,
          scrollContainer: null
        }, o.prototype.init = function() {
          var t;
          return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, o.prototype.start = function() {
          var e, i, n, o;
          if (this.stopped = !1, this.boxes = function() {
              var t, i, n, o;
              for (n = this.element.querySelectorAll("." + this.config.boxClass), o = [], t = 0, i = n.length; i > t; t++) e = n[t], o.push(e);
              return o
            }.call(this), this.all = function() {
              var t, i, n, o;
              for (n = this.boxes, o = [], t = 0, i = n.length; i > t; t++) e = n[t], o.push(e);
              return o
            }.call(this), this.boxes.length)
            if (this.disabled()) this.resetStyle();
            else
              for (o = this.boxes, i = 0, n = o.length; n > i; i++) e = o[i], this.applyStyle(e, !0);
          return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function(t) {
            return function(e) {
              var i, n, o, s, r;
              for (r = [], i = 0, n = e.length; n > i; i++) s = e[i], r.push(function() {
                var t, e, i, n;
                for (i = s.addedNodes || [], n = [], t = 0, e = i.length; e > t; t++) o = i[t], n.push(this.doSync(o));
                return n
              }.call(t));
              return r
            }
          }(this)).observe(document.body, {
            childList: !0,
            subtree: !0
          }) : void 0
        }, o.prototype.stop = function() {
          return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, o.prototype.sync = function() {
          return t.notSupported ? this.doSync(this.element) : void 0
        }, o.prototype.doSync = function(t) {
          var e, i, n, o, s;
          if (null == t && (t = this.element), 1 === t.nodeType) {
            for (t = t.parentNode || t, o = t.querySelectorAll("." + this.config.boxClass), s = [], i = 0, n = o.length; n > i; i++) e = o[i], r.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), s.push(this.scrolled = !0)) : s.push(void 0);
            return s
          }
        }, o.prototype.show = function(t) {
          return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.animateEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
        }, o.prototype.applyStyle = function(t, e) {
          var i, n, o;
          return n = t.getAttribute("data-animate-duration"), i = t.getAttribute("data-animate-delay"), o = t.getAttribute("data-animate-iteration"), this.animate(function(s) {
            return function() {
              return s.customStyle(t, e, n, i, o)
            }
          }(this))
        }, o.prototype.animate = function() {
          return "requestAnimationFrame" in window ? function(t) {
            return window.requestAnimationFrame(t)
          } : function(t) {
            return t()
          }
        }(), o.prototype.resetStyle = function() {
          var t, e, i, n, o;
          for (n = this.boxes, o = [], e = 0, i = n.length; i > e; e++) t = n[e], o.push(t.style.visibility = "visible");
          return o
        }, o.prototype.resetAnimation = function(t) {
          var e;
          return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement, e.className = e.className.replace(this.config.animateClass, "").trim()) : void 0
        }, o.prototype.customStyle = function(t, e, i, n, o) {
          return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, {
            animationDuration: i
          }), n && this.vendorSet(t.style, {
            animationDelay: n
          }), o && this.vendorSet(t.style, {
            animationIterationCount: o
          }), this.vendorSet(t.style, {
            animationName: e ? "none" : this.cachedAnimationName(t)
          }), t
        }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function(t, e) {
          var i, n, o, s;
          n = [];
          for (i in e) o = e[i], t["" + i] = o, n.push(function() {
            var e, n, r, a;
            for (r = this.vendors, a = [], e = 0, n = r.length; n > e; e++) s = r[e], a.push(t["" + s + i.charAt(0).toUpperCase() + i.substr(1)] = o);
            return a
          }.call(this));
          return n
        }, o.prototype.vendorCSS = function(t, e) {
          var i, o, s, r, a, l;
          for (a = n(t), r = a.getPropertyCSSValue(e), s = this.vendors, i = 0, o = s.length; o > i; i++) l = s[i], r = r || a.getPropertyCSSValue("-" + l + "-" + e);
          return r
        }, o.prototype.animationName = function(t) {
          var e;
          try {
            e = this.vendorCSS(t, "animation-name").cssText
          } catch (i) {
            e = n(t).getPropertyValue("animation-name")
          }
          return "none" === e ? "" : e
        }, o.prototype.cacheAnimationName = function(t) {
          return this.animationNameCache.set(t, this.animationName(t))
        }, o.prototype.cachedAnimationName = function(t) {
          return this.animationNameCache.get(t)
        }, o.prototype.scrollHandler = function() {
          return this.scrolled = !0
        }, o.prototype.scrollCallback = function() {
          var t;
          return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
            var e, i, n, o;
            for (n = this.boxes, o = [], e = 0, i = n.length; i > e; e++) t = n[e], t && (this.isVisible(t) ? this.show(t) : o.push(t));
            return o
          }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, o.prototype.offsetTop = function(t) {
          for (var e; void 0 === t.offsetTop;) t = t.parentNode;
          for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
          return e
        }, o.prototype.isVisible = function(t) {
          var e, i, n, o, s;
          return i = t.getAttribute("data-animate-offset") || this.config.offset, s = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, o = s + Math.min(this.element.clientHeight, this.util().innerHeight()) - i, n = this.offsetTop(t), e = n + t.clientHeight, o >= n && e >= s
        }, o.prototype.util = function() {
          return null != this._util ? this._util : this._util = new e
        }, o.prototype.disabled = function() {
          return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, o
      }()
    }.call(this), ! function(t) {
      if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
      else if ("function" == typeof define && define.amd) define([], t);
      else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.Jump = t()
      }
    }(function() {
      return function t(e, i, n) {
        function o(r, a) {
          if (!i[r]) {
            if (!e[r]) {
              var l = "function" == typeof require && require;
              if (!a && l) return l(r, !0);
              if (s) return s(r, !0);
              var c = new Error("Cannot find module '" + r + "'");
              throw c.code = "MODULE_NOT_FOUND", c
            }
            var u = i[r] = {
              exports: {}
            };
            e[r][0].call(u.exports, function(t) {
              var i = e[r][1][t];
              return o(i ? i : t)
            }, u, u.exports, t, e, i, n)
          }
          return i[r].exports
        }
        for (var s = "function" == typeof require && require, r = 0; r < n.length; r++) o(n[r]);
        return o
      }({
        1: [function(t, e, i) {
          "use strict";
          Object.defineProperty(i, "__esModule", {
            value: !0
          }), i["default"] = function(t, e, i, n) {
            return t /= n / 2, 1 > t ? i / 2 * t * t + e : (t--, -i / 2 * (t * (t - 2) - 1) + e)
          }, e.exports = i["default"]
        }, {}],
        2: [function(t, e, i) {
          "use strict";

          function n(t) {
            return t && t.__esModule ? t : {
              "default": t
            }
          }

          function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }
          Object.defineProperty(i, "__esModule", {
            value: !0
          });
          var s = function() {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var n = e[i];
                  n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
              }
              return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
              }
            }(),
            r = t("./easing"),
            a = n(r),
            l = function() {
              function t() {
                o(this, t)
              }
              return s(t, [{
                key: "jump",
                value: function(t) {
                  var e = this,
                    i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                  this.start = window.pageYOffset, this.options = {
                    duration: i.duration,
                    offset: i.offset || 0,
                    callback: i.callback,
                    easing: i.easing || a["default"]
                  }, this.target = "string" == typeof t ? document.querySelector(t) : t, this.distance = "number" == typeof t ? t : this.options.offset + t.getBoundingClientRect().top, this.duration = "function" == typeof this.options.duration ? this.options.duration(this.distance) : this.options.duration, requestAnimationFrame(function(t) {
                    return e._loop(t)
                  })
                }
              }, {
                key: "_loop",
                value: function(t) {
                  var e = this;
                  this.timeStart || (this.timeStart = t), this.timeElapsed = t - this.timeStart, this.next = this.options.easing(this.timeElapsed, this.start, this.distance, this.duration), window.scrollTo(0, this.next), this.timeElapsed < this.duration ? requestAnimationFrame(function(t) {
                    return e._loop(t)
                  }) : this._end()
                }
              }, {
                key: "_end",
                value: function() {
                  window.scrollTo(0, this.start + this.distance), "function" == typeof this.options.callback && this.options.callback(), this.timeStart = !1
                }
              }]), t
            }();
          i["default"] = l, e.exports = i["default"]
        }, {
          "./easing": 1
        }]
      }, {}, [2])(2)
    }),
    function(t, e) {
      var i, n = t.jQuery || t.Cowboy || (t.Cowboy = {});
      n.throttle = i = function(t, i, o, s) {
        function r() {
          function n() {
            l = +new Date, o.apply(c, h)
          }

          function r() {
            a = e
          }
          var c = this,
            u = +new Date - l,
            h = arguments;
          s && !a && n(), a && clearTimeout(a), s === e && u > t ? n() : i !== !0 && (a = setTimeout(s ? r : n, s === e ? t - u : t))
        }
        var a, l = 0;
        return "boolean" != typeof i && (s = o, o = i, i = e), n.guid && (r.guid = o.guid = o.guid || n.guid++), r
      }, n.debounce = function(t, n, o) {
        return o === e ? i(t, n, !1) : i(t, o, n !== !1)
      }
    }(this), ! function(t, e) {
      "function" == typeof define && define.amd ? define([], function() {
        return e()
      }) : "object" == typeof exports ? module.exports = e() : t.Headhesive = e()
    }(this, function() {
      "use strict";
      var t = function(e, i) {
          for (var n in i) i.hasOwnProperty(n) && (e[n] = "object" == typeof i[n] ? t(e[n], i[n]) : i[n]);
          return e
        },
        e = function(t, e) {
          var i, n, o, s = Date.now || function() {
              return (new Date).getTime()
            },
            r = null,
            a = 0,
            l = function() {
              a = s(), r = null, o = t.apply(i, n), i = n = null
            };
          return function() {
            var c = s(),
              u = e - (c - a);
            return i = this, n = arguments, 0 >= u ? (clearTimeout(r), r = null, a = c, o = t.apply(i, n), i = n = null) : r || (r = setTimeout(l, u)), o
          }
        },
        i = function() {
          return void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
        },
        n = function(t, e) {
          for (var i = 0, n = t.offsetHeight; t;) i += t.offsetTop, t = t.offsetParent;
          return "bottom" === e && (i += n), i
        },
        o = function(e, i) {
          "querySelector" in document && "addEventListener" in window && (this.visible = !1, this.options = {
            offset: 300,
            offsetSide: "top",
            classes: {
              clone: "headhesive",
              stick: "headhesive--stick",
              unstick: "headhesive--unstick"
            },
            throttle: 250,
            onInit: function() {},
            onStick: function() {},
            onUnstick: function() {},
            onDestroy: function() {}
          }, this.elem = "string" == typeof e ? document.querySelector(e) : e, this.options = t(this.options, i), this.init())
        };
      return o.prototype = {
        constructor: o,
        init: function() {
          if (this.clonedElem = this.elem.cloneNode(!0), this.clonedElem.className += " " + this.options.classes.clone, document.body.insertBefore(this.clonedElem, document.body.firstChild), "number" == typeof this.options.offset) this.scrollOffset = this.options.offset;
          else {
            if ("string" != typeof this.options.offset) throw new Error("Invalid offset: " + this.options.offset);
            this._setScrollOffset()
          }
          this._throttleUpdate = e(this.update.bind(this), this.options.throttle), this._throttleScrollOffset = e(this._setScrollOffset.bind(this), this.options.throttle), window.addEventListener("scroll", this._throttleUpdate, !1), window.addEventListener("resize", this._throttleScrollOffset, !1), this.options.onInit.call(this)
        },
        _setScrollOffset: function() {
          "string" == typeof this.options.offset && (this.scrollOffset = n(document.querySelector(this.options.offset), this.options.offsetSide))
        },
        destroy: function() {
          document.body.removeChild(this.clonedElem), window.removeEventListener("scroll", this._throttleUpdate), window.removeEventListener("resize", this._throttleScrollOffset), this.options.onDestroy.call(this)
        },
        stick: function() {
          this.visible || (this.clonedElem.className = this.clonedElem.className.replace(new RegExp("(^|\\s)*" + this.options.classes.unstick + "(\\s|$)*", "g"), ""), this.clonedElem.className += " " + this.options.classes.stick, this.visible = !0, this.options.onStick.call(this))
        },
        unstick: function() {
          this.visible && (this.clonedElem.className = this.clonedElem.className.replace(new RegExp("(^|\\s)*" + this.options.classes.stick + "(\\s|$)*", "g"), ""), this.clonedElem.className += " " + this.options.classes.unstick, this.visible = !1, this.options.onUnstick.call(this))
        },
        update: function() {
          i() > this.scrollOffset ? this.stick() : this.unstick()
        }
      }, o
    }), ! function(t) {
      if (!t.hasInitialised) {
        var e = {
          escapeRegExp: function(t) {
            return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
          },
          hasClass: function(t, e) {
            var i = " ";
            return 1 === t.nodeType && (i + t.className + i).replace(/[\n\t]/g, i).indexOf(i + e + i) >= 0
          },
          addClass: function(t, e) {
            t.className += " " + e
          },
          removeClass: function(t, e) {
            var i = new RegExp("\\b" + this.escapeRegExp(e) + "\\b");
            t.className = t.className.replace(i, "")
          },
          interpolateString: function(t, e) {
            var i = /{{([a-z][a-z0-9\-_]*)}}/gi;
            return t.replace(i, function(t) {
              return e(arguments[1]) || ""
            })
          },
          getCookie: function(t) {
            var e = "; " + document.cookie,
              i = e.split("; " + t + "=");
            return 2 != i.length ? void 0 : i.pop().split(";").shift()
          },
          setCookie: function(t, e, i, n, o) {
            var s = new Date;
            s.setDate(s.getDate() + (i || 365));
            var r = [t + "=" + e, "expires=" + s.toUTCString(), "path=" + (o || "/")];
            n && r.push("domain=" + n), document.cookie = r.join(";")
          },
          deepExtend: function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (i in t && this.isPlainObject(t[i]) && this.isPlainObject(e[i]) ? this.deepExtend(t[i], e[i]) : t[i] = e[i]);
            return t
          },
          throttle: function(t, e) {
            var i = !1;
            return function() {
              i || (t.apply(this, arguments), i = !0, setTimeout(function() {
                i = !1
              }, e))
            }
          },
          hash: function(t) {
            var e, i, n, o = 0;
            if (0 === t.length) return o;
            for (e = 0, n = t.length; n > e; ++e) i = t.charCodeAt(e), o = (o << 5) - o + i, o |= 0;
            return o
          },
          normaliseHex: function(t) {
            return "#" == t[0] && (t = t.substr(1)), 3 == t.length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), t
          },
          getContrast: function(t) {
            t = this.normaliseHex(t);
            var e = parseInt(t.substr(0, 2), 16),
              i = parseInt(t.substr(2, 2), 16),
              n = parseInt(t.substr(4, 2), 16),
              o = (299 * e + 587 * i + 114 * n) / 1e3;
            return o >= 128 ? "#000" : "#fff"
          },
          getLuminance: function(t) {
            var e = parseInt(this.normaliseHex(t), 16),
              i = 38,
              n = (e >> 16) + i,
              o = (e >> 8 & 255) + i,
              s = (255 & e) + i,
              r = (16777216 + 65536 * (255 > n ? 1 > n ? 0 : n : 255) + 256 * (255 > o ? 1 > o ? 0 : o : 255) + (255 > s ? 1 > s ? 0 : s : 255)).toString(16).slice(1);
            return "#" + r
          },
          isMobile: function() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
          },
          isPlainObject: function(t) {
            return "object" == typeof t && null !== t && t.constructor == Object
          }
        };
        t.status = {
          deny: "deny",
          allow: "allow",
          dismiss: "dismiss"
        }, t.transitionEnd = function() {
          var t = document.createElement("div"),
            e = {
              t: "transitionend",
              OT: "oTransitionEnd",
              msT: "MSTransitionEnd",
              MozT: "transitionend",
              WebkitT: "webkitTransitionEnd"
            };
          for (var i in e)
            if (e.hasOwnProperty(i) && "undefined" != typeof t.style[i + "ransition"]) return e[i];
          return ""
        }(), t.hasTransition = !!t.transitionEnd;
        var i = Object.keys(t.status).map(e.escapeRegExp);
        t.customStyles = {}, t.Popup = function() {
          function n() {
            this.initialise.apply(this, arguments)
          }

          function o(t) {
            this.openingTimeout = null, e.removeClass(t, "cc-invisible")
          }

          function s(e) {
            e.style.display = "none", e.removeEventListener(t.transitionEnd, this.afterTransition), this.afterTransition = null
          }

          function r() {
            var e = this.options.onInitialise.bind(this);
            if (!window.navigator.cookieEnabled) return e(t.status.deny), !0;
            if (window.CookiesOK || window.navigator.CookiesOK) return e(t.status.allow), !0;
            var i = Object.keys(t.status),
              n = this.getStatus(),
              o = i.indexOf(n) >= 0;
            return o && e(n), o
          }

          function a() {
            var t = this.options.position.split("-"),
              e = [];
            return t.forEach(function(t) {
              e.push("cc-" + t)
            }), e
          }

          function l() {
            var t = this.options,
              i = "top" == t.position || "bottom" == t.position ? "banner" : "floating";
            e.isMobile() && (i = "floating");
            var n = ["cc-" + i, "cc-type-" + t.type, "cc-theme-" + t.theme];
            return t["static"] && n.push("cc-static"), n.push.apply(n, a.call(this)), d.call(this, this.options.palette), this.customStyleSelector && n.push(this.customStyleSelector), n
          }

          function c() {
            var t = {},
              i = this.options;
            i.showLink || (i.elements.link = "", i.elements.messagelink = i.elements.message), Object.keys(i.elements).forEach(function(n) {
              t[n] = e.interpolateString(i.elements[n], function(t) {
                var e = i.content[t];
                return t && "string" == typeof e && e.length ? e : ""
              })
            });
            var n = i.compliance[i.type];
            n || (n = i.compliance.info), t.compliance = e.interpolateString(n, function(e) {
              return t[e]
            });
            var o = i.layouts[i.layout];
            return o || (o = i.layouts.basic), e.interpolateString(o, function(e) {
              return t[e]
            })
          }

          function u(i) {
            var n = this.options,
              o = document.createElement("div"),
              s = n.container && 1 === n.container.nodeType ? n.container : document.body;
            o.innerHTML = i;
            var r = o.children[0];
            return r.style.display = "none", e.hasClass(r, "cc-window") && t.hasTransition && e.addClass(r, "cc-invisible"), this.onButtonClick = h.bind(this), r.addEventListener("click", this.onButtonClick), n.autoAttach && (s.firstChild ? s.insertBefore(r, s.firstChild) : s.appendChild(r)), r
          }

          function h(n) {
            var o = n.target;
            if (e.hasClass(o, "cc-btn")) {
              var s = o.className.match(new RegExp("\\bcc-(" + i.join("|") + ")\\b")),
                r = s && s[1] || !1;
              r && (this.setStatus(r), this.close(!0))
            }
            e.hasClass(o, "cc-close") && (this.setStatus(t.status.dismiss), this.close(!0)), e.hasClass(o, "cc-revoke") && this.revokeChoice()
          }

          function d(t) {
            var i = e.hash(JSON.stringify(t)),
              n = "cc-color-override-" + i,
              o = e.isPlainObject(t);
            return this.customStyleSelector = o ? n : null, o && p(i, t, "." + n), o
          }

          function p(i, n, o) {
            if (t.customStyles[i]) return void++t.customStyles[i].references;
            var s = {},
              r = n.popup,
              a = n.button,
              l = n.highlight;
            r && (r.text = r.text ? r.text : e.getContrast(r.background), r.link = r.link ? r.link : r.text, s[o + ".cc-window"] = ["color: " + r.text, "background-color: " + r.background], s[o + ".cc-revoke"] = ["color: " + r.text, "background-color: " + r.background], s[o + " .cc-link," + o + " .cc-link:active," + o + " .cc-link:visited"] = ["color: " + r.link], a && (a.text = a.text ? a.text : e.getContrast(a.background), a.border = a.border ? a.border : "transparent", s[o + " .cc-btn"] = ["color: " + a.text, "border-color: " + a.border, "background-color: " + a.background], "transparent" != a.background && (s[o + " .cc-btn:hover, " + o + " .cc-btn:focus"] = ["background-color: " + f(a.background)]), l ? (l.text = l.text ? l.text : e.getContrast(l.background), l.border = l.border ? l.border : "transparent", s[o + " .cc-highlight .cc-btn:first-child"] = ["color: " + l.text, "border-color: " + l.border, "background-color: " + l.background]) : s[o + " .cc-highlight .cc-btn:first-child"] = ["color: " + r.text]));
            var c = document.createElement("style");
            document.head.appendChild(c), t.customStyles[i] = {
              references: 1,
              element: c.sheet
            };
            var u = -1;
            for (var h in s) s.hasOwnProperty(h) && c.sheet.insertRule(h + "{" + s[h].join(";") + "}", ++u)
          }

          function f(t) {
            return t = e.normaliseHex(t), "000000" == t ? "#222" : e.getLuminance(t)
          }

          function m(i) {
            if (e.isPlainObject(i)) {
              var n = e.hash(JSON.stringify(i)),
                o = t.customStyles[n];
              if (o && !--o.references) {
                var s = o.element.ownerNode;
                s && s.parentNode && s.parentNode.removeChild(s), t.customStyles[n] = null
              }
            }
          }

          function v(t, e) {
            for (var i = 0, n = t.length; n > i; ++i) {
              var o = t[i];
              if (o instanceof RegExp && o.test(e) || "string" == typeof o && o.length && o === e) return !0
            }
            return !1
          }

          function y() {
            var e = this.setStatus.bind(this),
              i = this.options.dismissOnTimeout;
            "number" == typeof i && i >= 0 && (this.dismissTimeout = window.setTimeout(function() {
              e(t.status.dismiss)
            }, Math.floor(i)));
            var n = this.options.dismissOnScroll;
            if ("number" == typeof n && n >= 0) {
              var o = function(i) {
                window.pageYOffset > Math.floor(n) && (e(t.status.dismiss), window.removeEventListener("scroll", o), this.onWindowScroll = null)
              };
              this.onWindowScroll = o, window.addEventListener("scroll", o)
            }
          }

          function g() {
            if ("info" != this.options.type && (this.options.revokable = !0), e.isMobile() && (this.options.animateRevokable = !1), this.options.revokable) {
              var t = a.call(this);
              this.options.animateRevokable && t.push("cc-animate"), this.customStyleSelector && t.push(this.customStyleSelector);
              var i = this.options.revokeBtn.replace("{{classes}}", t.join(" "));
              this.revokeBtn = u.call(this, i);
              var n = this.revokeBtn;
              if (this.options.animateRevokable) {
                var o = e.throttle(function(t) {
                  var i = !1,
                    o = 20,
                    s = window.innerHeight - 20;
                  e.hasClass(n, "cc-top") && t.clientY < o && (i = !0), e.hasClass(n, "cc-bottom") && t.clientY > s && (i = !0), i ? e.hasClass(n, "cc-active") || e.addClass(n, "cc-active") : e.hasClass(n, "cc-active") && e.removeClass(n, "cc-active")
                }, 200);
                this.onMouseMove = o, window.addEventListener("mousemove", o)
              }
            }
          }
          var b = {
            enabled: !0,
            container: null,
            cookie: {
              name: "cookieconsent_status",
              path: "/",
              domain: "",
              expiryDays: 365
            },
            onPopupOpen: function() {},
            onPopupClose: function() {},
            onInitialise: function(t) {},
            onStatusChange: function(t, e) {},
            onRevokeChoice: function() {},
            content: {
              header: "Cookies used on the website!",
              message: "This website uses cookies to ensure you get the best experience on our website.",
              dismiss: "Got it!",
              allow: "Allow cookies",
              deny: "Decline",
              link: "Learn more",
              href: "http://cookiesandyou.com",
              close: "&#x274c;"
            },
            elements: {
              header: '<span class="cc-header">{{header}}</span>&nbsp;',
              message: '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',
              messagelink: '<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" target="_blank">{{link}}</a></span>',
              dismiss: '<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>',
              allow: '<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>',
              deny: '<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',
              link: '<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" target="_blank">{{link}}</a>',
              close: '<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>'
            },
            window: '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}"><!--googleoff: all-->{{children}}<!--googleon: all--></div>',
            revokeBtn: '<div class="cc-revoke {{classes}}">Cookie Policy</div>',
            compliance: {
              info: '<div class="cc-compliance">{{dismiss}}</div>',
              "opt-in": '<div class="cc-compliance cc-highlight">{{dismiss}}{{allow}}</div>',
              "opt-out": '<div class="cc-compliance cc-highlight">{{deny}}{{dismiss}}</div>'
            },
            type: "info",
            layouts: {
              basic: "{{messagelink}}{{compliance}}",
              "basic-close": "{{messagelink}}{{compliance}}{{close}}",
              "basic-header": "{{header}}{{message}}{{link}}{{compliance}}"
            },
            layout: "basic",
            position: "bottom",
            theme: "block",
            "static": !1,
            palette: null,
            revokable: !1,
            animateRevokable: !0,
            showLink: !0,
            dismissOnScroll: !1,
            dismissOnTimeout: !1,
            autoOpen: !0,
            autoAttach: !0,
            whitelistPage: [],
            blacklistPage: [],
            overrideHTML: null
          };
          return n.prototype.initialise = function(t) {
            this.options && this.destroy(), e.deepExtend(this.options = {}, b), e.isPlainObject(t) && e.deepExtend(this.options, t), r.call(this) && (this.options.enabled = !1), v(this.options.blacklistPage, location.pathname) && (this.options.enabled = !1), v(this.options.whitelistPage, location.pathname) && (this.options.enabled = !0);
            var i = this.options.window.replace("{{classes}}", l.call(this).join(" ")).replace("{{children}}", c.call(this)),
              n = this.options.overrideHTML;
            if ("string" == typeof n && n.length && (i = n), this.options["static"]) {
              var o = u.call(this, '<div class="cc-grower">' + i + "</div>");
              o.style.display = "", this.element = o.firstChild, this.element.style.display = "none", e.addClass(this.element, "cc-invisible")
            } else this.element = u.call(this, i);
            y.call(this), g.call(this), this.options.autoOpen && this.autoOpen()
          }, n.prototype.destroy = function() {
            this.onButtonClick && this.element && (this.element.removeEventListener("click", this.onButtonClick), this.onButtonClick = null), this.dismissTimeout && (clearTimeout(this.dismissTimeout), this.dismissTimeout = null), this.onWindowScroll && (window.removeEventListener("scroll", this.onWindowScroll), this.onWindowScroll = null), this.onMouseMove && (window.removeEventListener("mousemove", this.onMouseMove), this.onMouseMove = null), this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = null, this.revokeBtn && this.revokeBtn.parentNode && this.revokeBtn.parentNode.removeChild(this.revokeBtn), this.revokeBtn = null, m(this.options.palette), this.options = null
          }, n.prototype.open = function(e) {
            return this.element ? (this.isOpen() || (t.hasTransition ? this.fadeIn() : this.element.style.display = "", this.options.revokable && this.toggleRevokeButton(), this.options.onPopupOpen.call(this)), this) : void 0
          }, n.prototype.close = function(e) {
            return this.element ? (this.isOpen() && (t.hasTransition ? this.fadeOut() : this.element.style.display = "none", e && this.options.revokable && this.toggleRevokeButton(!0), this.options.onPopupClose.call(this)), this) : void 0
          }, n.prototype.fadeIn = function() {
            var i = this.element;
            if (t.hasTransition && i && (this.afterTransition && s.call(this, i), e.hasClass(i, "cc-invisible"))) {
              if (i.style.display = "", this.options["static"]) {
                var n = this.element.clientHeight;
                this.element.parentNode.style.maxHeight = n + "px"
              }
              var r = 20;
              this.openingTimeout = setTimeout(o.bind(this, i), r)
            }
          }, n.prototype.fadeOut = function() {
            var i = this.element;
            t.hasTransition && i && (this.openingTimeout && (clearTimeout(this.openingTimeout), o.bind(this, i)), e.hasClass(i, "cc-invisible") || (this.options["static"] && (this.element.parentNode.style.maxHeight = ""), this.afterTransition = s.bind(this, i), i.addEventListener(t.transitionEnd, this.afterTransition), e.addClass(i, "cc-invisible")))
          }, n.prototype.isOpen = function() {
            return this.element && "" == this.element.style.display && (!t.hasTransition || !e.hasClass(this.element, "cc-invisible"))
          }, n.prototype.toggleRevokeButton = function(t) {
            this.revokeBtn && (this.revokeBtn.style.display = t ? "" : "none")
          }, n.prototype.revokeChoice = function(t) {
            this.options.enabled = !0, this.clearStatus(), this.options.onRevokeChoice.call(this), t || this.autoOpen()
          }, n.prototype.hasAnswered = function(e) {
            return Object.keys(t.status).indexOf(this.getStatus()) >= 0
          }, n.prototype.hasConsented = function(e) {
            var i = this.getStatus();
            return i == t.status.allow || i == t.status.dismiss
          }, n.prototype.autoOpen = function(t) {
            !this.hasAnswered() && this.options.enabled && this.open()
          }, n.prototype.setStatus = function(i) {
            var n = this.options.cookie,
              o = e.getCookie(n.name),
              s = Object.keys(t.status).indexOf(o) >= 0;
            Object.keys(t.status).indexOf(i) >= 0 ? (e.setCookie(n.name, i, n.expiryDays, n.domain, n.path), this.options.onStatusChange.call(this, i, s)) : this.clearStatus()
          }, n.prototype.getStatus = function() {
            return e.getCookie(this.options.cookie.name)
          }, n.prototype.clearStatus = function() {
            var t = this.options.cookie;
            e.setCookie(t.name, "", -1, t.domain, t.path)
          }, n
        }(), t.Location = function() {
          function t(t) {
            e.deepExtend(this.options = {}, s), e.isPlainObject(t) && e.deepExtend(this.options, t), this.currentServiceIndex = -1
          }

          function i(t, e, i) {
            var n, o = document.createElement("script");
            o.type = "text/" + (t.type || "javascript"), o.src = t.src || t, o.async = !1, o.onreadystatechange = o.onload = function() {
              var t = o.readyState;
              clearTimeout(n), e.done || t && !/loaded|complete/.test(t) || (e.done = !0, e(), o.onreadystatechange = o.onload = null)
            }, document.body.appendChild(o), n = setTimeout(function() {
              e.done = !0, e(), o.onreadystatechange = o.onload = null
            }, i)
          }

          function n(t, e, i, n, o) {
            var s = new(window.XMLHttpRequest || window.ActiveXObject)("MSXML2.XMLHTTP.3.0");
            if (s.open(n ? "POST" : "GET", t, 1), s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), s.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), Array.isArray(o))
              for (var r = 0, a = o.length; a > r; ++r) {
                var l = o[r].split(":", 2);
                s.setRequestHeader(l[0].replace(/^\s+|\s+$/g, ""), l[1].replace(/^\s+|\s+$/g, ""))
              }
            "function" == typeof e && (s.onreadystatechange = function() {
              s.readyState > 3 && e(s)
            }), s.send(n)
          }

          function o(t) {
            return new Error("Error [" + (t.code || "UNKNOWN") + "]: " + t.error)
          }
          var s = {
            timeout: 5e3,
            services: ["freegeoip", "ipinfo", "maxmind"],
            serviceDefinitions: {
              freegeoip: function() {
                return {
                  url: "//freegeoip.net/json/?callback={callback}",
                  isScript: !0,
                  callback: function(t, e) {
                    try {
                      var i = JSON.parse(e);
                      return i.error ? o(i) : {
                        code: i.country_code
                      }
                    } catch (n) {
                      return o({
                        error: "Invalid response (" + n + ")"
                      })
                    }
                  }
                }
              },
              ipinfo: function() {
                return {
                  url: "//ipinfo.io",
                  headers: ["Accept: application/json"],
                  callback: function(t, e) {
                    try {
                      var i = JSON.parse(e);
                      return i.error ? o(i) : {
                        code: i.country
                      }
                    } catch (n) {
                      return o({
                        error: "Invalid response (" + n + ")"
                      })
                    }
                  }
                }
              },
              ipinfodb: function(t) {
                return {
                  url: "//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}",
                  isScript: !0,
                  callback: function(t, e) {
                    try {
                      var i = JSON.parse(e);
                      return "ERROR" == i.statusCode ? o({
                        error: i.statusMessage
                      }) : {
                        code: i.countryCode
                      }
                    } catch (n) {
                      return o({
                        error: "Invalid response (" + n + ")"
                      })
                    }
                  }
                }
              },
              maxmind: function() {
                return {
                  url: "//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js",
                  isScript: !0,
                  callback: function(t) {
                    return window.geoip2 ? void geoip2.country(function(e) {
                      try {
                        t({
                          code: e.country.iso_code
                        })
                      } catch (i) {
                        t(o(i))
                      }
                    }, function(e) {
                      t(o(e))
                    }) : void t(new Error("Unexpected response format. The downloaded script should have exported `geoip2` to the global scope"))
                  }
                }
              }
            }
          };
          return t.prototype.getNextService = function() {
            var t;
            do t = this.getServiceByIdx(++this.currentServiceIndex); while (this.currentServiceIndex < this.options.services.length && !t);
            return t
          }, t.prototype.getServiceByIdx = function(t) {
            var i = this.options.services[t];
            if ("function" == typeof i) {
              var n = i();
              return n.name && e.deepExtend(n, this.options.serviceDefinitions[n.name](n)), n
            }
            return "string" == typeof i ? this.options.serviceDefinitions[i]() : e.isPlainObject(i) ? this.options.serviceDefinitions[i.name](i) : null
          }, t.prototype.locate = function(t, e) {
            var i = this.getNextService();
            return i ? (this.callbackComplete = t, this.callbackError = e, void this.runService(i, this.runNextServiceOnError.bind(this))) : void e(new Error("No services to run"))
          }, t.prototype.setupUrl = function(t) {
            var e = this.getCurrentServiceOpts();
            return t.url.replace(/\{(.*?)\}/g, function(i, n) {
              if ("callback" === n) {
                var o = "callback" + Date.now();
                return window[o] = function(e) {
                  t.__JSONP_DATA = JSON.stringify(e)
                }, o
              }
              return n in e.interpolateUrl ? e.interpolateUrl[n] : void 0
            })
          }, t.prototype.runService = function(t, e) {
            var o = this;
            if (t && t.url && t.callback) {
              var s = t.isScript ? i : n,
                r = this.setupUrl(t);
              s(r, function(i) {
                var n = i ? i.responseText : "";
                t.__JSONP_DATA && (n = t.__JSONP_DATA, delete t.__JSONP_DATA), o.runServiceCallback.call(o, e, t, n)
              }, this.options.timeout, t.data, t.headers)
            }
          }, t.prototype.runServiceCallback = function(t, e, i) {
            var n = this,
              o = function(e) {
                s || n.onServiceResult.call(n, t, e)
              },
              s = e.callback(o, i);
            s && this.onServiceResult.call(this, t, s)
          }, t.prototype.onServiceResult = function(t, e) {
            e instanceof Error || e && e.error ? t.call(this, e, null) : t.call(this, null, e)
          }, t.prototype.runNextServiceOnError = function(t, e) {
            if (t) {
              this.logError(t);
              var i = this.getNextService();
              i ? this.runService(i, this.runNextServiceOnError.bind(this)) : this.completeService.call(this, this.callbackError, new Error("All services failed"))
            } else this.completeService.call(this, this.callbackComplete, e)
          }, t.prototype.getCurrentServiceOpts = function() {
            var t = this.options.services[this.currentServiceIndex];
            return "string" == typeof t ? {
              name: t
            } : "function" == typeof t ? t() : e.isPlainObject(t) ? t : {}
          }, t.prototype.completeService = function(t, e) {
            this.currentServiceIndex = -1, t && t(e)
          }, t.prototype.logError = function(t) {
            var e = this.currentServiceIndex,
              i = this.getServiceByIdx(e);
            console.error("The service[" + e + "] (" + i.url + ") responded with the following error", t)
          }, t
        }(), t.Law = function() {
          function t(t) {
            this.initialise.apply(this, arguments)
          }
          var i = {
            regionalLaw: !0,
            hasLaw: ["AT", "BE", "BG", "HR", "CZ", "CY", "DK", "EE", "FI", "FR", "DE", "EL", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "SK", "SI", "ES", "SE", "GB", "UK"],
            revokable: ["HR", "CY", "DK", "EE", "FR", "DE", "LV", "LT", "NL", "PT", "ES"],
            explicitAction: ["HR", "IT", "ES"]
          };
          return t.prototype.initialise = function(t) {
            e.deepExtend(this.options = {}, i), e.isPlainObject(t) && e.deepExtend(this.options, t)
          }, t.prototype.get = function(t) {
            var e = this.options;
            return {
              hasLaw: e.hasLaw.indexOf(t) >= 0,
              revokable: e.revokable.indexOf(t) >= 0,
              explicitAction: e.explicitAction.indexOf(t) >= 0
            }
          }, t.prototype.applyLaw = function(t, e) {
            var i = this.get(e);
            return i.hasLaw || (t.enabled = !1), this.options.regionalLaw && (i.revokable && (t.revokable = !0), i.explicitAction && (t.dismissOnScroll = !1, t.dismissOnTimeout = !1)), t
          }, t
        }(), t.initialise = function(e, i, n) {
          var o = new t.Law(e.law);
          i || (i = function() {}), n || (n = function() {}), t.getCountryCode(e, function(n) {
            delete e.law, delete e.location, n.code && (e = o.applyLaw(e, n.code)), i(new t.Popup(e))
          }, function(i) {
            delete e.law, delete e.location, n(i, new t.Popup(e))
          })
        }, t.getCountryCode = function(e, i, n) {
          if (e.law && e.law.countryCode) return void i({
            code: e.law.countryCode
          });
          if (e.location) {
            var o = new t.Location(e.location);
            return void o.locate(function(t) {
              i(t || {})
            }, n)
          }
          i({})
        }, t.utils = e, t.hasInitialised = !0, window.cookieconsent = t
      }
    }(window.cookieconsent || {});
  var bg = document.getElementById("background");
  null !== bg && particleground(bg, {
    dotColor: "#e1e1e1",
    lineColor: "#e1e1e1",
    particleRadius: 4,
    lineWidth: .4,
    density: 1e4,
    proximity: 100,
    minSpeedX: .08,
    minSpeedY: .08,
    maxSpeedX: .1,
    maxSpeedY: .1,
    parallax: !0,
    parallaxMultiplier: 8
  }), (new animate).init();
  var options = {
      offset: 300,
      throttle: 100,
      classes: {
        clone: "page-header--clone",
        stick: "page-header--stick",
        unstick: "page-header--unstick"
      },
      onInit: function() {
        $(".btn-menu").click(function() {
          $("body").toggleClass("page-header-mobile-open")
        })
      }
    },
    header = new Headhesive(".page-header", options),
    signupUrl = "https://app.nuclino.com/signup",
    signupElems = $(".signup-input-1, .signup-input-2");
  signupElems.keyup(function(t) {
    if (13 == t.which) {
      var e = $(t.target).attr("class").split(" ")[0];
      submitEmailSignup(e)
    }
  });
  var Jump = new Jump,
    mySwiper = new Swiper(".swiper-container", {
      direction: "horizontal",
      loop: !0,
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev"
    });
  window.addEventListener("load", function() {
    window.cookieconsent.initialise({
      palette: {
        popup: {
          background: "#ffffff",
          text: "#919ca8"
        },
        button: {
          background: "#ffffff",
          text: "#919ca8"
        }
      },
      content: {
        href: "#"
      }
    })
  });
