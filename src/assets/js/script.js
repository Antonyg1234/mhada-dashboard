 $('#menu-action').click(function() {
  $('.sidebar').toggleClass('active');
  $('.main').toggleClass('active');
  $('header').toggleClass('active');
  $(this).toggleClass('active');

  // if ($('.sidebar').hasClass('active')) {
  //   $(this).find('i').addClass('fa-close');
  //   $(this).find('i').removeClass('fa-bars');
  // } else {
  //   $(this).find('i').addClass('fa-bars');
  //   $(this).find('i').removeClass('fa-close');
  // }
});
/*pie chart js*/
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
     ['Task', 'Hours per Day'],
          ['Lorem Ipsum Lorem Ipsum',     5],
          ['Legend Name',      4],
          ['Bombay Housing Board', 3],
          ['Legend Name 5',    5],
          ['Content here, content here’, ',    2]
        ]);

  var options = {
      //title: 'My Daily Activities',
     pieHole: 0.9,
      pieSliceText: 'none',

          legend: {position: 'top', textStyle: {color: '#606060', fontSize: 13}, maxLines: 3, width: 200 },
          slices: {            
            0: { color: '#29AFA5' },
            1: { color: '#74CFFF' },
            2: { color: '#E1C3FF' },
            3: { color: '#FFD474' },            
            4: { color: '#FFAFAF' }
          },
          titleTextStyle: { color: '#606060',
                            fontSize: 24,
                            fontName: 'aileronultralight',
                            width: 200

                            // padding-bottom: 20

                          }
        };


  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

$(window).on("throttledresize", function (event) {
    var options = {
        width: '100%',
        height: '100%'
    };

    var data = google.visualization.arrayToDataTable([]);
    drawChart(data, options);
});


// Add hover feedback on menu
$('#menu-action').click(function() {
    $('.sidebar').toggleClass('hovered');
});