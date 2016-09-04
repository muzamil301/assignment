//wow initiation
    new WOW().init(
      {
      	mobile: false,
      }
  	);
// datepicker
 $(function () {
   var bindDatePicker = function() {
		$(".date").datetimepicker({
        format:'YYYY-MM-DD',
			icons: {
				time: "fa fa-clock-o",
				date: "fa fa-calendar",
				up: "fa fa-arrow-up",
				down: "fa fa-arrow-down"
			}
		}).find('input:first').on("blur",function () {
			// check if the date is correct. We can accept dd-mm-yyyy and yyyy-mm-dd.
			// update the format if it's yyyy-mm-dd
			var date = parseDate($(this).val());

			if (! isValidDate(date)) {
				//create date based on momentjs (we have that)
				date = moment().format('YYYY-MM-DD');
			}

			$(this).val(date);
		});
	}
   
   var isValidDate = function(value, format) {
		format = format || false;
		// lets parse the date to the best of our knowledge
		if (format) {
			value = parseDate(value);
		}

		var timestamp = Date.parse(value);

		return isNaN(timestamp) == false;
   }
   
   var parseDate = function(value) {
		var m = value.match(/^(\d{1,2})(\/|-)?(\d{1,2})(\/|-)?(\d{4})$/);
		if (m)
			value = m[5] + '-' + ("00" + m[3]).slice(-2) + '-' + ("00" + m[1]).slice(-2);

		return value;
   }
   
   bindDatePicker();
 });
//jquery.select 
var config = {
	'.chosen-select'			: {},
	'.chosen-select-deselect'	: {allow_single_deselect:true},
	'.chosen-select-no-single'	: {disable_search_threshold:10},
	'.chosen-select-no-results'	: {no_results_text:'Oops, nothing found!'},
	'.chosen-select-width'		: {width:"95%"}
}
for (var selector in config) {
	$(selector).chosen(config[selector]);
}
// main slider
$('#main-slider').carousel({
	interval: 4000 //TIME IN MILLI SECONDS
})
// main slider2
$('#main-slider2').carousel({
	interval: 3000 //TIME IN MILLI SECONDS
})
// carousel 
$('#home-carousel').carousel({
	interval: 4000 //TIME IN MILLI SECONDS
})
// slider caption intergration with bootstrap slider
$(document).ready(function(ev){
    $('#main-slider').on('slide.bs.carousel', function (evt) {
      $('#main-slider .controls li.active').removeClass('active');
      $('#main-slider .controls li:eq('+$(evt.relatedTarget).index()+')').addClass('active');
    })
});
// slider2 caption intergration with bootstrap slider
$(document).ready(function(ev){
    $('#main-slider2').on('slide.bs.carousel', function (evt) {
      $('#main-slider2 .controls li.active').removeClass('active');
      $('#main-slider2 .controls li:eq('+$(evt.relatedTarget).index()+')').addClass('active');
    })
});