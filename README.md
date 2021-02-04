# cjQuery
cjQuery는 JQuery와 같이 Javascript를 조금 더 편하게 사용할 수 있도록 도와주는 라이브러리입니다.<br>
cjQuery는 ES6로 개발되었습니다.

## > Methods
### [0. $()](https://github.com/inf0craw1/cjQuery#0-thisstring-%EC%84%A0%ED%83%9D%ED%95%A0-%EC%97%98%EB%A6%AC%EB%A8%BC%ED%8A%B8)
### 1. color()
### 2. text()
### 3. hide()/show()
### 4. value()
### 5. css()
### 6. on()
### 7. attr()
### 8. parent()
### 9. addClass()
### 10. removeClass()
### 11. toggleClass()
### 12. hasClass()
### 13. replaceClass()
### 추가예정

## Methods Usage

### 엘리먼트 선택
#### $(this|string: 선택할 엘리먼트)
```javascript
> console.log( $("div.a#a1") ); // <div id="a1" class="a"></div>
> $("button").on("click", function(){ $(this).text('button clicked!!!'); });
```
cjQuery는 cjQuery Selector ```$()```를 통해 HTML 엘리먼트를 쉽게 선택할 수 있습니다.<br>
cjQuery는 ```$(this)```를 통해 엘리먼트 자신을 직접 지정할 수 있습니다.<br>
만약 cjQuery Selector를 통해 선택된 엘리먼트가 없을 경우 경고 콘솔을 출력하고 ```false```를 반환합니다.

#### parent()
```javascript
> console.log( $(".parent-div .child-div").parent() ); // <div class="parent-div"></div>
```
```parent()```는 선택된 엘리먼트의 가장 근접해 있는 부모 엘리먼트를 선택합니다.

#### child(string: 선택할 자식 엘리먼트)
```javascript
> console.log( $(".parent-div").child(".child-div") ); // <div class="child-div"></div>
```
```child()```는 선택된 엘리먼트의 자식 중 매개변수에 해당하는 자식 엘리먼트를 선택합니다.

### HTML Method
#### value([string|int: 설정할 value값])
```javascript
> $("input.email").value("example@example.com");
> console.log( $("input.email").value() ); // example@example.com
```
```value()```는 엘리먼트의 ```value```값을 가져오거나 설정합니다.<br>
이는 ```attr()```의 ```$("input.email").attr("value", "example@example.com");``` 로 대체될 수 있습니다.
**(선택된 엘리먼트가 여러 개일 경우, array형태로 반환합니다.)**

#### attr(string: attribute이름[, string|int: attribute값])
``` javascript
> console.log( $("div.wrapper1").attr("class") ); // wrapper1
> $(".input1").attr("minlength", 6);
> $("button").attr("onclick", "alert();");
```
```attr()```은 엘리먼트의 ```attribute```를 가져오거나 설정합니다.<br>
존재하는 모든 ```attribute```를 설정할 수 있습니다.<br>
```attribute```값을 인자로 넣지 않으면 해당 엘리먼트의 ```attribute```이름에 대한 ```attribute```값을 반환해줍니다.
**(선택된 엘리먼트가 여러 개일 경우, array형태로 반환합니다.)**


#### text([string|int: 설정할 innerHTML 값])
```javascript
> $("p").text("abcd");
> console.log( $("p").text() ); // abcd
```
```text()```는 엘리먼트의 ```innerHTML```을 가져오거나 설정합니다.
**(선택된 엘리먼트가 여러 개일 경우, array형태로 반환합니다.)**

### CSS Method
#### color(string: 설정할 색)
```javascript
> $("p").color("red");
> $("span").color("#cccccc");
```
```color()```는 폰트 색상을 설정합니다.<br>
이는 css()의 ```$("p").css("color", "red");``` 로 대체될 수 있습니다.<br>

#### hide()/show()
```javascript
> $("div").hide(); // 모든 <div> 엘리먼트가 사라집니다.
> $("div").show(); // 모든 <div> 엘리먼트가 나타납니다.
```
```hide()```는 선택된 엘리먼트의 ```display``` 속성을 ```none```으로 설정합니다.<br>
```show()```는 선택된 엘리먼트의 ```display``` 속성을 ```block```으로 설정합니다.<br>
이는 css()의 ```$("div").css("display", "none|block");``` 로 대체될 수 있습니다.

#### css(string: css property[, string: css property 값])
```javascript
> $("p").css("font-weight", "bold");
> console.log( $("p").css("font-size") ); // bold
```
```css()```는 선택된 엘리먼트의 ```style```값을 가져오거나 설정합니다.
**(선택된 엘리먼트가 여러 개일 경우, array형태로 반환합니다.)**

### 클래스 Method
#### getClass(string: 가져올 클래스명)
```javascript
> console.log( $("div.wrapper").getClass() ); // wrapper
```
```getClass()```는 선택된 엘리먼트의 클래스를 반환합니다.

#### addClass(string: 추가할 클래스명)
```javascript
> $("form input").addClass("form-items");
```
```addClass()```는 선택된 요소에 새로운 클래스를 추가합니다. (만약 클래스를 이미 가지고 있다면 무시됩니다.)

#### removeClass(string: 삭제할 클래스명)
```javascript
 > $("form input").removeClass("form-items");
```
```removeClass()```는 선택된 요소에 존재하는 클래스를 삭제합니다. (만약 클래스를 이미 가지고 있다면 무시됩니다.)

#### toggleClass(string: 토글할 클래스명)
```javascript
 > $(".submit-button").toggleClass("active");
```
```toggleClass()```는 호출 시마다 클래스를 추가하거나 제거합니다.

#### hasClass(string: 확인할 클래스명)
```javascript
> $("input").hasClass("form-item"); // true of false
```
```hasClass()```는 선택된 요소에 클래스 존재유무를 ```Boolean```형으로 반환합니다.
**(선택된 엘리먼트가 여러 개일 경우, array형태로 반환합니다.)**

#### replaceClass(string: 대체될 클래스명, string: 대체할 클래스명)
```javascript
> $("#fistItem").replaceClass("second-item", "first-item");
```
```replaceClass()```는 선택된 요소에 존재하는 클래스를 다른 클래스로 대체합니다.

### id Method
#### getId()
```getId()```는 엘리먼트의 id값을 반환합니다.

#### setId()
```setId()```는 엘리먼트의 id값을 설정합니다.

#### removeId()
```removeId()```는 엘리먼트의 id값을 제거합니다.
**(이 Method는 ```setId("")```로 대체될 수 있습니다.)**

### event Method
#### on(string: event이름, function: event발생 시 실행할 함수)
```javascript
> $(".submit").on("click", function(){ console.log('submit button clicked'); });
> $("input").on("keydown", function(e){ console.log(e.keyCode); });
```
> on()은 엘리먼트에 이벤트를 설정합니다.<br>
> "click", "keydown"등 Javascript에서 지원하는 모든 이벤트리스너를 사용할 수 있습니다.

### 추가예정
```child()``` - 자식 엘리먼트를 선택합니다.<br>
```prev()``` - 선택된 엘리먼트의 이전에 있는 엘리먼트를 선택합니다.<br>
```next()``` - 선택된 엘리먼트의 다음에 있는 엘리먼트를 선택합니다.<br>
