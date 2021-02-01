function $(s){
    $.prototype.selector = document.querySelectorAll(s);
    return $.prototype;
}
$.prototype = {
    selector: null,
    color: function(c){
        for(elem of this.selector){
            elem.style.color = c;
        }
        return this.prototype;
    },
    text: function(t){
        for(elem of this.selector){
            elem.innerHTML = t;
        }
        return this.prototype;
    },
    hide: function(){
        for(elem of this.selector){
            elem.style.display = "none";
        }
        return this.prototype;
    },
    show: function(){
        for(elem of this.selector){
            elem.style.display = "block";
        }
        return this.prototype;
    },
    on: function(e, f){

    }
}