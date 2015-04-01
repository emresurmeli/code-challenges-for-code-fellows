/* using vanilla JavaScript to access an object array */

var objArray = [
  {
    name: 'Bob',
    occupation: 'programmer',
    awesome_index: 34,
  },
  {
    name: 'Alice',
    occupation: 'programmer',
    awesome_index: 26,
  },
  {
    name: 'Zaphod',
    occupation: 'President of the Galaxy',
    awesome_index: 10
  }
];

var getButton = document.getElementById("avgButton");
      getButton.addEventListener("click", function() {
        awesomeAverage(objArray);
});

function awesomeAverage (array) {
  var total = 0;
    for(var i = 0; i < array.length; i++) {
      total += array[i].awesome_index;
    }
  var average = total / array.length;
      getAverage = document.getElementById('awesome-index');
      getAverage.innerHTML = "<p>" + average + "</p>";
}