# cjQuery
cjQuery는 JQuery와 같이 Javascript를 조금 더 편하게 사용할 수 있도록 도와주는 라이브러리입니다.<br>
cjQuery는 ES6로 개발되었습니다.

## > Methods
### 0. $()
### 1. Color
### 2. Text
### 3. Hide/Show
### 4. Value
### 5. Css
### 6. On
### 7. Attr
### 8. Parent

***

## > Methods Usage

### 0. $(this|string: 선택할 요소)
_Ex1: $("div.a#a1");_<br>
_Ex2: $("button").on("click", function(){ $(this).text('button clicked!!!'); });_<br>
cjQuery는 cjQuery Selector($)를 통해 HTML요소를 쉽게 선택할 수 있습니다.<br>
cjQuery는 $(this)를 통해 엘리먼트 자신을 직접 지정할 수 있습니다.

### 1. color(string: 설정할 색)
_Ex1: $("p").color("red");_<br>
_Ex2: $("span").color("#cccccc");_<br>
color()는 폰트 색상을 설정합니다.
이는 5. css의 _$("p").css("color", "red");_ 로 대체될 수 있습니다.<br>

### 2. text([string|int: 설정할 innerHTML 값])
_Ex1: $("p").text();_<br>
_Ex2: $("p").text("abcd");_<br>
text()는 엘리먼트의 innerHTML을 가져오거나 설정합니다.
##### (선택된 엘리먼트가 여러 개일 경우, array형태로 반환합니다.)


### 3. hide()/show()
_Ex1: $("div").hide();_<br>
_Ex2: $("div").show();_<br>
hide()는 선택된 엘리먼트의 display 속성을 "none"으로 설정합니다.<br>
show()는 선택된 엘리먼트의 display 속성을 "block"으로 설정합니다.<br>
이는 5. css의 _$("div").css("display", "none|block");_ 로 대체될 수 있습니다.<br>

### 4. value([string|int: 설정할 value값])
_Ex1: $("input").value();_<br>
_Ex2: $("input.email").value("example@example.com");_<br>
value()는 엘리먼트의 value값을 가져오거나 설정합니다.<br>
이는 7. attr의 _$("input.email").attr("value", "example@example.com");_ 로 대체될 수 있습니다.
##### (선택된 엘리먼트가 여러 개일 경우, array형태로 반환합니다.)

### 5. css(string: css property[, string: css property 값])
_Ex1: $("p").css("font-size");_<br>
_Ex2: $("p").css("font-weight", "bold");_<br>
css()는 선택된 엘리먼트의 css 값을 가져오거나 설정합니다.
##### (선택된 엘리먼트가 여러 개일 경우, array형태로 반환합니다.)

### 6. on(string: event이름, function: event발생 시 실행할 함수)
_Ex1: $(".submit").on("click", function(){console.log('submit button clicked');});_<br>
_Ex2: $("input").on("keydown", function(e){console.log(e.keyCode);});_<br>
on()은 엘리먼트에 이벤트를 설정합니다.<br>
"click", "keydown"등 Javascript에서 지원하는 모든 이벤트리스너를 사용할 수 있습니다.

### 7. attr(string: attribute이름[, string|int: attribute값])
_Ex1: $(".div").attr("class");_<br>
_Ex2: $(".input1").attr("minlength", 6);_<br>
_Ex3: $("button").attr("onclick", "alert();");_<br>
attr()은 요소의 attribute요소를 가져오거나 설정합니다.<br>
존재하는 모든 attribute를 설정할 수 있습니다.<br>
attribute값을 인자로 넣지 않으면 해당 엘리먼트의 attribute이름에 대한 attribute값을 반환해줍니다.
##### (선택된 엘리먼트가 여러 개일 경우, array형태로 반환합니다.)

### 8. parent()
_Ex: $(".child-div").parent().attr("class");_<br>
parent()는 선택된 요소의 부모요소를 선택해줍니다.
##### (선택된 엘리먼트가 여러 개일 경우, array형태로 반환합니다.)
