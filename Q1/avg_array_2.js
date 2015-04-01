/* using underscore and jQuery to access an object array */

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

$(function(){
  showAverage = function(array){
    var total = 0;
    _.map(array, function(val, index){
    total += array[index].awesome_index;
    })
    var average = total / array.length;
    $('#awesome-index').text(average);
  }
})
  $('#avgButton2').click(function() {
    showAverage(objArray);
  });
