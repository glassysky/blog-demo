var root = document.getElementById('root');

var html = '';
for(var i = 0; i < 50000; i++) {
  html += '<span class="test-span-tag"><a class="inner-class-name"></a></span>';
}
root.innerHTML = html;

setTimeout(function() {
  var ta1 = +new Date();
  var domWay = document.getElementsByTagName('span');
  var ta2 = +new Date();
  domWay[0].innerHTML = '0';
  var ta3 = +new Date();

  var tb1 = +new Date();
  var apiWay = document.querySelectorAll('span');
  var tb2 = +new Date();
  apiWay[0].innerHTML = '1';
  var tb3 = +new Date();

  var record = document.createElement('div');
  record.innerHTML = '<p>document.getElementById("root").getElementsByTagName("span"): ' + (ta2 - ta1) + 'ms</p>\
                      <p>document.getElementById("root").getElementsByTagName("span") 并改变一个节点的值: ' + (ta3 - ta1) + 'ms</p>\
                      <p>document.querySelectorAll("#root span"): ' + (tb2 - tb1) + 'ms</p>\
                      <p>document.querySelectorAll("#root span") 并改变一个节点的值: ' + (tb3 - tb1) + 'ms</p>';
  root.appendChild(record);
}, 0);


