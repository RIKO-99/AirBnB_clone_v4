$(function () {
  let checked = [];
  let checkedStr = '';

  $('input[type="checkbox"]').on('change', function() {
    let id = $(this).data('id');
    let name = $(this).data('name');

    if ($(this).is(':checked')) {
      checked.push({'id': id,'name': name});
    } else {
      checked = $.grep(checked, (item) => {
        return item.id != id;
      });
    }

    checkedStr = checked.map(function(item) {
      return item.name;
    }).join(', ');
    $('div.amenities h4').text(checkedStr);
  });

  $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
    if (data.status == 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
});
