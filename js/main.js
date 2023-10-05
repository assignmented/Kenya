(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});

    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });


    // Chart Global Color
    Chart.defaults.color = "#6C7293";
    Chart.defaults.borderColor = "#000000";

    //Intakes Comparison Chart
    var ctx1 = $("#intakes-comparison").get(0).getContext("2d");
    var myChart1 = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
            datasets: [{
                    label: "JAN",
                    data: [15, 30, 55, 65, 60, 80, 95],
                    backgroundColor: "#c3812b"
                },
                {
                    label: "MAY",
                    data: [8, 35, 40, 60, 70, 55, 75],
                    backgroundColor: "#009ade"
                },
                {
                    label: "SEP",
                    data: [12, 25, 45, 55, 65, 70, 60],
                    backgroundColor: "#ffcc00"
                }
            ]
            },
        options: {
            responsive: true
        }
    });

    //Gender Per Course Comparison Chart
    var ctx7 = $("#gender-course-comparison").get(0).getContext("2d");
    var myChart7 = new Chart(ctx7, {
        type: "bar",
        data: {
            labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
            datasets: [{
                    label: "Female",
                    data: [15, 30, 55, 65, 60, 80, 95],
                    backgroundColor: "#FF00FF"
                },
                {
                    label: "Male",
                    data: [8, 35, 40, 60, 70, 55, 75],
                    backgroundColor: "#009ade"
                },
                {
                    label: "Total",
                    data: [23, 65, 95, 125, 130, 135, 170],
                    backgroundColor: "#ffcc00"
                }
            ]
            },
        options: {
            responsive: true
        }
    });


    // Gender Pie Chart
    var ctx5 = $("#gender-pie-chart").get(0).getContext("2d");
    var myChart5 = new Chart(ctx5, {
        type: "pie",
        data: {
            labels: ["Female : "+gender_female, "Male : "+gender_male],
            datasets: [{
                backgroundColor: [
                    "#FF00FF",
                    "#0099db"
                ],
                data: [gender_female, gender_male]
            }]
        },
        options: {
            responsive: true
        }
    });

    // SPONSORS
    var ctx6 = $("#sponsors-doughnut-chart").get(0).getContext("2d");
    var myChart6 = new Chart(ctx6, {
        type: "doughnut",
        data: {
            labels: ["PSSP : "+sponsor_pssp, "GSSP : "+sponsor_gssp, "NYS : "+sponsor_nys,"MYS : "+sponsor_mys,"OTHERS : "+sponsor_others],
            datasets: [{
                backgroundColor: [
                    "#ffcc00",
                    "#009ade",
                    "#198754",
                    "#e7e7e7",
                    "#c3812b"
                ],
                data: [sponsor_pssp, sponsor_gssp, sponsor_nys,sponsor_mys,sponsor_others]
            }]
        },
        options: {
            responsive: true
        }
    });

    // RESIDENTS vs NON-RESIDENTS
    var ctx8 = $("#residents-doughnut-chart").get(0).getContext("2d");
    var myChart8 = new Chart(ctx8, {
        type: "doughnut",
        data: {
            labels: ["Resident : "+resident, "Non-Residents : "+nonresident],
            datasets: [{
                backgroundColor: [
                    "#ffcc00",
                    "#c3812b"
                ],
                data: [resident, nonresident]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Salse & Revenue Chart
    var ctx2 = $("#religion-distribution-graph").get(0).getContext("2d");
    var myChart2 = new Chart(ctx2, {
        type: "bar",
        data: {
            labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
            datasets: [{
                    label: "Christians",
                    data: [15, 30, 55, 65, 60, 80, 95],
                    backgroundColor: "#c3812b",
                    fill: false
                },
                {
                    label: "Muslims",
                    data: [8, 35, 40, 60, 70, 55, 75],
                    backgroundColor: "#009ade",
                    fill: false
                },
                {
                    label: "Hindus",
                    data: [12, 25, 45, 55, 65, 70, 60],
                    backgroundColor: "#ffcc00",
                    fill: false
                },
                {
                    label: "Buddhas",
                    data: [8, 35, 40, 60, 70, 55, 75],
                    backgroundColor: "#009ade",
                    fill: false
                },
                {
                    label: "Raha'i",
                    data: [12, 25, 45, 55, 65, 70, 60],
                    backgroundColor: "#ffcc00",
                    fill: false
                }
            ]
            },
        options: {
            responsive: true
        }
    });
    


    // Single Line Chart
    var ctx3 = $("#line-chart").get(0).getContext("2d");
    var myChart3 = new Chart(ctx3, {
        type: "line",
        data: {
            labels: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
            datasets: [{
                label: "Salse",
                fill: false,
                backgroundColor: "rgba(235, 22, 22, .7)",
                data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]
            }]
        },
        options: {
            responsive: true
        }
    });

    // RESIDENTS vs NON-RESIDENTS
    var ctx8 = $("#residents-doughnut-chart").get(0).getContext("2d");
    var myChart8 = new Chart(ctx8, {
        type: "doughnut",
        data: {
            labels: ["Resident : "+resident, "Non-Residents : "+nonresident],
            datasets: [{
                backgroundColor: [
                    "#ffcc00",
                    "#c3812b"
                ],
                data: [resident, nonresident]
            }]
        },
        options: {
            responsive: true
        }
    });
    
})(jQuery);

