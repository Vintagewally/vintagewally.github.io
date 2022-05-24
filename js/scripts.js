/*!
* Start Bootstrap - Stylish Portfolio v6.0.5 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};




/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;

    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'carmellate.myshopify.com',
      storefrontAccessToken: '7aa30e011bb3124fddcde0489d8b3a96',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        id: '262856736858',
        node: document.getElementById('collection-component-1636884332490'),
        moneyFormat: 'SFr.%20%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(33% - 40px)",
          "margin-left": "40px",
          "margin-bottom": "50px",
          "width": "calc(33% - 40px)"
          
        },
        "img": {
          "height": "calc(110% - 15px)",
          "position": "absolute",
          "left": "0",
          "right": "0",
          "top": "-8px"
        },
        "imgWrapper": {
          "padding-top": "calc(75% + 15px)",
          "position": "relative",
          "height": "0"
        }
      },
      "title": {
        "color": "#4a4a4a"
      },
      "button": {
        "font-weight": "bold",
        "border-radius": "7px",
        "padding-left": "24px",
        "padding-right": "24px"
      },
      "price": {
        "font-size": "16px",
        "color": "#4a4a4a"
      },
      "compareAt": {
        "font-size": "13.6px",
        "color": "#4a4a4a"
      },
      "unitPrice": {
        "font-size": "13.6px",
        "color": "#4a4a4a"
      }
    },
    "text": {
      "button": "Aggiungi al Carrello"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-40px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        "border-radius": "7px",
        "padding-left": "24px",
        "padding-right": "24px"
      }
    },
    "text": {
      "button": "in den Warenkorb"
    }
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "select": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Open Sans"
    ]
  },
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        "border-radius": "7px"
      }
    },
    "text": {
      "title": "Carello",
      "total": "Sub-totale",
      "empty": "Carrello vuoto",
      "notice": "Eventuali coupons e costi di spedizione vengono aggiunti al momento del checkout",
      "button": "Checkout",
      "noteDescription": "Indicazioni particolari"
    },
    "contents": {
      "note": true
    },
    "popup": false
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold"
      }
    }
  }
},
      });
    });
    
  }

})();
  
  
  

(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;

    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'carmellate.myshopify.com',
      storefrontAccessToken: '7aa30e011bb3124fddcde0489d8b3a96',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        id: '262856769626',
        node: document.getElementById('collection-component-1636884518871'),
        moneyFormat: 'SFr.%20%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(33% - 40px)",
          "margin-left": "40px",
          "margin-bottom": "50px",
          "width": "calc(33% - 40px)"
          
        },
        "img": {
          "height": "calc(110% - 15px)",
          "position": "absolute",
          "left": "0",
          "right": "0",
          "top": "-8px"
        },
        "imgWrapper": {
          "padding-top": "calc(75% + 15px)",
          "position": "relative",
          "height": "0"
        }
      },
      "title": {
        "color": "#4a4a4a"
      },
      "button": {
        "font-weight": "bold",
        "border-radius": "7px",
        "padding-left": "24px",
        "padding-right": "24px"
      },
      "price": {
        "font-size": "16px",
        "color": "#4a4a4a"
      },
      "compareAt": {
        "font-size": "13.6px",
        "color": "#4a4a4a"
      },
      "unitPrice": {
        "font-size": "13.6px",
        "color": "#4a4a4a"
      }
    },
    "text": {
      "button": "Aggiungi al Carrello"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-40px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        "border-radius": "7px",
        "padding-left": "24px",
        "padding-right": "24px"
      }
    },
    "text": {
      "button": "in den Warenkorb"
    }
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "select": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Open Sans"
    ]
  },
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        "border-radius": "7px"
      }
    },
    "text": {
      "title": "Carello",
      "total": "Sub-totale",
      "empty": "Carrello vuoto",
      "notice": "Eventuali coupons e costi di spedizione vengono aggiunti al momento del checkout",
      "button": "Checkout",
      "noteDescription": "Indicazioni particolari"
    },
    "contents": {
      "note": true
    },
    "popup": false
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold"
      }
    }
  }
},
      });
    });
    
  }

})();
/*]]>*/