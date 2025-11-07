<script type="text/javascript"><!--
var imlocation = "http://2fifths.github.io/notion/";
 function ImageArray (n) {
   this.length = n;
   for (var i =1; i <= n; i++) {
     this[i] = ' '
   }
 }
image = new ImageArray(7);
image[0] = 'sunday.gif';
image[1] = 'monday.gif';
image[2] = 'tuesday.gif';
image[3] = 'wednesday.gif';
image[4] = 'thursday.gif';
image[5] = 'friday.gif';
image[6] = 'saturday.gif';
var currentdate = new Date();
var imagenumber = currentdate.getDay();
document.write('<img src="' + imlocation + image[imagenumber] + '">');
//--></script>
