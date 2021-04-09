
var myMap = L.map('mapid').setView([10.490, -66.892 ], 12.65);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'sk.eyJ1IjoiaWduaXR0eSIsImEiOiJja245azA4bTcweTU2MnJsbnUybnBtNTF5In0.5pi8cMd7vLMPpDR-Ms3Pjw'
}).addTo(myMap);

	var showIcon = L.marker([10.498659, -66.902648]).addTo(myMap);
	showIcon.bindPopup('<a href="#academy" id="popup">Academia Ritmo Caribeño</a>').openPopup();

function showAcademy() {
	const showButton = document.getElementById('academy-scroll');
	const showAcademy = document.getElementById('table');
	showAcademy.style.display = 'table';
	setTimeout(()=>{
		showButton.style.display = 'none';
	}, 1000)
}

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);
