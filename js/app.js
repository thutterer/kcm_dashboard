$(window).load(function() {
  $('#dataTables-employees')
    .on( 'init.dt', function () { // https://datatables.net/reference/event/init
      var employees_count = 0;
      var cars_produced = 0;
      var cars_sold = 0;

      var update_employees_count = function() {
        employees_count = $('#dataTables-employees').DataTable().rows().count();
        $('#employees_count').html(employees_count);
      };
      update_employees_count();

      var produce_cars = function() {
        cars_produced += 1;
        $('#produced_count').html(cars_produced);
        if(employees_count) { setTimeout(produce_cars, 60000 / employees_count); }
      };

      var sell_cars = function() {
        cars_sold += 1;
        $('#sold_count').html(cars_sold);
        if(employees_count) { setTimeout(sell_cars, 84000 / employees_count); }
      };

      produce_cars();
      sell_cars();

      $('#dataTables-employees tbody').on( 'click', 'tr', function () {
        $(this).toggleClass('danger');
      } );

      $('#fire').click( function () {
        $('#dataTables-employees').DataTable().rows('.danger').remove().draw( false );
        update_employees_count();
      } );
    } )
    .DataTable( {
      "ajax": {
        "url": "../data/MOCK_DATA.json",
        "dataSrc": "" // https://datatables.net/examples/ajax/custom_data_flat.html
      },
      "columns": [
        { "data": "id" },
        { "data": "first_name" },
        { "data": "last_name" },
        {
           "data": "email",
           // https://datatables.net/reference/option/columns.render
           "render": function (data) {return '<a href="mailto:'+data+'">'+data+'</a>';}
        }
      ]
    } );
} );
