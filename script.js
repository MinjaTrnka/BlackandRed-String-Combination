var x = `Hello World `;
var y = `From JavaScript.`;
var xy = x.concat(y);
var colors = [`red`, `black`];

for (var i = 0; i < xy.length; i++) {
  var printDisplay =
    '<span style="color:' + colors[i % 2] + '">' + xy[i] + "</span>";
  document.write(printDisplay);
}
