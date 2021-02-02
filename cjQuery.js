function $(s){
    $.prototype = {
        selector: (typeof s == "string") ? document.querySelectorAll(s) : [s],
        selectString: s,
        color: function(c){
            for(elem of this.selector){
                elem.style.color = c;
            }
            return this;
        },
        text: function(t){
            if(t === null || t === undefined){
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
            for(elem of this.selector){
                elem.style.display = "none";
            }
            return this;
        },
        show: function(){
            for(elem of this.selector){
                elem.style.display = "block";
            }
            return this;
        },
        value: function(v){
            if(v === null || v === undefined){
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
            if(propValue === null || propValue === undefined){
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
            for(elem of this.selector){
                elem.addEventListener(e, f);
            }
            return this;
        },
        attr: function(attrName, attrValue){
            if(attrValue === null || attrValue === undefined){
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
        child: function(e){
            console.log(this.selector);
            console.log(this.selector[0].parentNode);
            // let s = `${this.selectString} ${e}`;
            // this.selector = document.querySelectorAll(s);
            // this.selectString = s;
            return this;
        },
        parent: function(){
            this.selector = this.selector[0].parentNode;
            return this;
        },
        sibling: function(e){
            console.log(this.selector);
            console.log(this.selctString);
            return this;
        }
    }
    return $.prototype;
}