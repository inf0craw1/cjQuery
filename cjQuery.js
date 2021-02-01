function $(s){
    $.prototype = {
        selector: document.querySelectorAll(s),
        selectString: s,
        color: function(c){
            for(elem of this.selector){
                elem.style.color = c;
            }
            return this;
        },
        text: function(t){
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
        on: function(e, f){
            for(elem of this.selector){
                elem.addEventListener(e, f);
            }
            return this;
        },
        child: function(e){
            console.log(this.selector);
            console.log(this.selector.childNodes);
            // let s = `${this.selectString} ${e}`;
            // this.selector = document.querySelectorAll(s);
            // this.selectString = s;
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