$(function(){
  $('#addHome').removeClass('btn-danger').addClass('btn-success');
  $('#header').addClass('text-center');
  var $newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com<a>' );

  var $header = $('header');
  $newLink.insertAfter($('#header'));
  var $body = $('body');

  $newLink.appendTo('body');
 //$('body').append(newLink);
 $('#addHome').click(function($event) {
  //  alert($event);
    console.log(this);
});
    $('#homes tbody').on('click', 'tr', function($event){
      alert("you are about to delete this item");
      $(this).remove();
    });
});

var newHomes = [
    {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
    {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
    {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
    {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
];
newHomes.forEach(function (home){
  var homeInfoRowHtml = "<tr><td>" + home.address + "</td><td>" +"</td><td>" + home.sf + "</td><td>" +"<td><td>" + home.bedrooms + "</td><td>" +"</td><td>" + home.baths + "</td></td>" +"</td><td>" + home.price + "</td></tr>" +
  var $homeInfoRowObject = $(homeInfoRowHtml);
  $('#homes tbody').append($homeInfoRowObject);
  alert($homeInfoRowObject);
});

