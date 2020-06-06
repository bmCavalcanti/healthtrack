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

    if ($("#chart-weight").length) {
        var chart = new Chart($("#chart-weight"), {
            type: 'line',
            data: {
                datasets: [{
                    label: 'Peso',
                    data: [42.14, 45.25, 42.45, 43.84],
                    backgroundColor: 'transparent',
                    borderColor: '#CFD2FF',
                    fontColor: '#CFD2FF',
                }],
                labels: ['17 de jan', '12 de fev' , '31 de mar', '04 de jun']
            },
            options: {
                layout: {
                    padding: {
                        right: 20,
                    }
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
                        position: 'right',
                        ticks: {
                            fontColor: "#CFD2FF",
                            suggestedMin: 40,
                            suggestedMax: 70,
                            stepSize: 10,
                            callback: function(label, index, labels) {
                                return label + ' kg';
                            }
                        },
                        gridLines: {
                            color: "#CFD2FF",
                            display: true,
                            drawOnChartArea: true
                        }
                    }]
                }
            }
        });
    }

    $("body").on("click", ".add-food", function() {
        var i = $(".food").length + 1;
        console.log(i);

        console.log($(".food").last());

        $(".food").last().after('<div class="food form-row mt-3"><small class="col-12">Alimento ' + i + '</small><div class="col-12 col-lg-7"><input required type="text" name="food[' + i + '][name]" class="form-control" placeholder="Digite o alimento"></div><div class="col-10 col-lg-4"><input required type="text" name="food[' + i + '][cal]" class="form-control" placeholder="Calorias"></div><div class="col-2 col-lg-1"><a type="button" class="btn-action remove-food mt-3" title="Remover alimento"><i class="far fa-trash-alt"></i></a></div></div>');
    });

    $("body").on("click", ".remove-food", function() {
        var count = $(".food").length;
        if (count > 1) {
            $(this).parent().parent().remove();
        }
    })
});
