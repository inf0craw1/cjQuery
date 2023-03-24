/*
 * cjQuery Beta v0.2.0
 * This is javascript library that help useing basic javascript easily
 * Author: inf0craw1
 * Date: 2021-02-02
 */

function cjQuery(s){
    function isSelectorExist(selector){
        if(selector[0] != undefined){
            return true;
        }
        return false;
    }
    function validateSelector(selector){
        if(!isSelectorExist(selector)){
            console.warn(`Element "${s}" is not exist`); return false;
        }
        return true;
    }

    cjQuery.prototype = {
        selector: (typeof s === "string") ? document.querySelectorAll(s) : [s],
        selectString: s,
        color: function(c){
            if(!validateSelector(this.selector)) return false;
            for(elem of this.selector){
                elem.style.color = c;
            }
            return this;
        },
        text: function(t){
            if(!validateSelector(this.selector)) return false;
            if(t == null){
                if(this.selector.length > 1){
                    let res = [];
                    for(elem of this.selector){
                        res.push(elem.innerHTML);
                    }
                    return res;
                }
                return this.selector[0].innerHTML;
            }
            for(elem of this.selector){
                elem.innerHTML = t;
            }
            return this;
        },
        hide: function(){
            if(!validateSelector(this.selector)) return false;
            for(elem of this.selector){
                elem.style.display = "none";
            }
            return this;
        },
        show: function(){
            if(!validateSelector(this.selector)) return false;
            for(elem of this.selector){
                elem.style.display = "block";
            }
            return this;
        },
        value: function(v){
            if(!validateSelector(this.selector)) return false;
            if(v == null){
                if(this.selector.length > 1){
                    let res = [];
                    for(elem of this.selector){
                        res.push(elem.getAttribute("value"));
                    }
                    return res;
                }
                return this.selector[0].getAttribute("value");
            }
            for(elem of this.selector){
                elem.setAttribute("value", v);
            }
            return this;
        },
        css: function(prop, propValue){
            if(!validateSelector(this.selector)) return false;
            if(propValue == null){
                if(this.selector.length > 1){
                    let res = [];
                    for(elem of this.selector){
                        res.push(elem.style[prop]);
                    }
                    return res;
                }
                return this.selector[0].style[prop];
            }
            for(elem of this.selector){
                elem.style[prop] = propValue;
            }
            return this;
        },
        on: function(e, f){
            if(!validateSelector(this.selector)) return false;
            for(elem of this.selector){
                elem.addEventListener(e, f);
            }
            return this;
        },
        attr: function(attrName, attrValue){
            if(!validateSelector(this.selector)) return false;
            if(attrValue == null){
                if(this.selector.length > 1){
                    let res = [];
                    for(elem of this.selector){
                        res.push(elem.getAttribute(attrName));
                    }
                    return res;
                }
                return this.selector[0].getAttribute(attrName);
            }
            for(elem of this.selector){
                elem.setAttribute(attrName, attrValue);
            }
            return this;
        },
        parent: function(){
            if(!validateSelector(this.selector)) return false;
            this.selector = this.selector[0].parentNode;
            return this;
        },
        addClass: function(c) {
            if(!validateSelector(this.selector)) return false;
            for(elem of this.selector){
                elem.classList.add(c);
            }
            return this;
        },
        removeClass: function(c){
            if(!validateSelector(this.selector)) return false;
            for(elem of this.selector){
                elem.classList.remove(c);
            }
            return this;
        },
        toggleClass: function(c){
            if(!validateSelector(this.selector)) return false;
            for(elem of this.selector){
                elem.classList.toggle(c);
            }
            return this;
        },
        hasClass: function(c){
            if(!validateSelector(this.selector)) return false;
            if(this.selector.length > 1){
                let res = [];
                for(elem of this.selector){
                    res.push(elem.classList.contains(c));
                }
                return res;
            }
            return this.selector[0].classList.contains(c);
        },
        replaceClass: function(targetC, c){
            if(!validateSelector(this.selector)) return false;
            for(elem of this.selector){
                elem.classList.replace(targetC, c);
            }
            return this;
        }
    }
    return cjQuery.prototype;
}
window.$ = cjQuery;
