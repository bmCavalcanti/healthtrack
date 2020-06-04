$(document).ready(function() {
    masks();
    callSelect2();

    $("body").on("click", ".changeStep", function(e) {
        e.preventDefault();

        var target = $(this).attr("href");
        var currentStep = parseInt($(".show").attr("step"));
        var targetStep = parseInt($(this).attr("step"));

        if (validateForm(".show .form-control", true) && (currentStep + 1 == targetStep || currentStep - 1 == targetStep)) {
            $(".changeStep").removeClass("active");
            $("a[href='"+target+"'].nav-link").addClass("active");
            $(".step").hide();
            $(".show").removeClass("show");
            $(target).show();
            $(target).addClass("show");
        }
    });

    $("body").on("click", "input[type='submit'], button[type='submit']", function(e) {
        validateForm($(this).closest("form"));
    });

    $("body").find("input[name='birthdate']").attr("max", new Date().toISOString().split("T")[0]);

    $("body").css("margin-bottom", $("#bar-navigation").height());


    // if ($("#chart")) {


        var chart = new Chart($("#chart-weight"), {
            type: 'line',
            scaleStartValue: 0,
            scaleOverride: true,
            steppedLine: 'before',

            data: {
                datasets: [{
                    label: 'Peso',
                    data: [52.56, 51.14, 53.25, 55.45],
                    backgroundColor: 'transparent',
                    borderColor: '#CFD2FF',
                    fontColor: '#CFD2FF',
                }],
                labels: ['26 de mar', '17 de jan', '12 de jan' , '31 de mar']
            },
            options: {
                hover: {
                    mode: 'dataset',
                    animationDuration: 0
                },
                elements: {
                    point: {
                        borderWidth: 6,
                        fill: false,
                        hoverBorderWidth: 6,
                    }
                },
                legend: {
                    display: false,
                    fontColor: "#CFD2FF"
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            fontColor: "#CFD2FF",
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            fontColor: "#CFD2FF",
                        }
                    }]
                }
            }
        });
    // }
});
