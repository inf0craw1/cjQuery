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
### 추가예정

***

## Methods Usage

### 0. $(this|string: 선택할 엘리먼트)
```javascript
> console.log( $("div.a#a1") ); // <div id="a1" class="a"></div>
> $("button").on("click", function(){ $(this).text('button clicked!!!'); });
```
> cjQuery는 cjQuery Selector($)를 통해 HTML 엘리먼트를 쉽게 선택할 수 있습니다.<br>
> cjQuery는 $(this)를 통해 엘리먼트 자신을 직접 지정할 수 있습니다.

### 1. color(string: 설정할 색)
```javascript
> $("p").color("red");
> $("span").color("#cccccc");
```
color()는 폰트 색상을 설정합니다.
이는 5. css의 _$("p").css("color", "red");_ 로 대체될 수 있습니다.<br>

### 2. text([string|int: 설정할 innerHTML 값])
```javascript
> $("p").text("abcd");
> console.log( $("p").text() ); // abcd
```
text()는 엘리먼트의 innerHTML을 가져오거나 설정합니다.
##### (선택된 엘리먼트가 여러 개일 경우, array형태로 반환합니다.)


### 3. hide()/show()
```javascript
> $("div").hide(); // 모든 <div> 엘리먼트가 사라집니다.
> $("div").show(); // 모든 <div> 엘리먼트가 나타납니다.
```
hide()는 선택된 엘리먼트의 display 속성을 "none"으로 설정합니다.<br>
show()는 선택된 엘리먼트의 display 속성을 "block"으로 설정합니다.<br>
이는 5. css의 _$("div").css("display", "none|block");_ 로 대체될 수 있습니다.<br>

### 4. value([string|int: 설정할 value값])
```javascript
> $("input.email").value("example@example.com");
> console.log( $("input.email").value() ); // example@example.com
```
value()는 엘리먼트의 value값을 가져오거나 설정합니다.<br>
이는 7. attr의 _$("input.email").attr("value", "example@example.com");_ 로 대체될 수 있습니다.
##### (선택된 엘리먼트가 여러 개일 경우, array형태로 반환합니다.)

### 5. css(string: css property[, string: css property 값])
```javascript
> $("p").css("font-weight", "bold");
> console.log( $("p").css("font-size") ); // bold
```
css()는 선택된 엘리먼트의 css 값을 가져오거나 설정합니다.
##### (선택된 엘리먼트가 여러 개일 경우, array형태로 반환합니다.)

### 6. on(string: event이름, function: event발생 시 실행할 함수)
```javascript
> $(".submit").on("click", function(){ console.log('submit button clicked'); });
> $("input").on("keydown", function(e){ console.log(e.keyCode); });
```
on()은 엘리먼트에 이벤트를 설정합니다.<br>
"click", "keydown"등 Javascript에서 지원하는 모든 이벤트리스너를 사용할 수 있습니다.

### 7. attr(string: attribute이름[, string|int: attribute값])
``` javascript
> console.log( $("div.wrapper1").attr("class") ); // wrapper1
> $(".input1").attr("minlength", 6);
> $("button").attr("onclick", "alert();");
```
attr()은 엘리먼트의 attribute를 가져오거나 설정합니다.<br>
존재하는 모든 attribute를 설정할 수 있습니다.<br>
attribute값을 인자로 넣지 않으면 해당 엘리먼트의 attribute이름에 대한 attribute값을 반환해줍니다.
##### (선택된 엘리먼트가 여러 개일 경우, array형태로 반환합니다.)

### 8. parent()
```javascript
> console.log( $(".parent-div .child-div").parent().attr("class") ); // parent-div
```
parent()는 선택된 의 가장 근접해 있는 부모 엘리먼트를 선택해줍니다.

### 추가예정
child() - 자식 엘리먼트를 선택합니다.
prev() - 선택된 엘리먼트의 이전에 있는 엘리먼트를 선택합니다.
next() - 선택된 엘리먼트의 다음에 있는 엘리먼트를 선택합니다.
addClass() - 클래스를 추가합니다.
removeClass() - 클래스를 삭제합니다.
