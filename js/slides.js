/*
$(function(){
	$('.carrosel').slick({
		centerMode: false,
		slidesToShow:4,
		arrow:false,
		dots:true,
		responsive:[

		{
			breakpoint:768,
			settings:{
				arrows:false,
				centerMode:true,
				slidesToShow:3
			}
		},

		{
			breakpoint:580,
			settings:{
				arrows:false,
				centerMode:true,
				slidesToShow:2
			}
		},
		{
			breakpoint:380,
			settings:
			{
				arrows:false,
				centerMode:true,
				slidesToShow:1
			}
		}


		]
	});


	$('.tratamentos .container').slick({
			centerMode:false,
			slidesToShow:3,
			arrows:false,
			infinite:false,
			responsive:[

				{
					breakpoint:768,
					settings:{
						arrows:false,
						dots:true,
						infinite:false,
						centerMode:false,
						slidesToShow:2
					}
				},
				{
					breakpoint:480,
					settings:{
						arrows:false,
						dots:true,
						infinite:false,
						centerMode:false,
						slidesToShow:1
					}
				}

			]
	});

	$('.depoimentos .container').slick({
			centerMode:false,
			slidesToShow:1,
			arrows:false,
			dots:true,
			infinite:false,
	});
})
*/

$(".carrosel").slick({
	dots: true,
	centerMode: true,
	slidesToShow: 4,
	arrows: false,
	responsive:[

		{
			breakpoint:768,
			settings:{
				centerMode:true,
				slidesToShow:2
			}
		},

		{
			breakpoint:580,
			settings:{
				arrows:false,
				centerMode:true,
				slidesToShow:1
			}
		},
	]
});