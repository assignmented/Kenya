<?php
    include 'phps/common/head.php';   
?>

<body style="overflow-x: hidden;">
    <div class="container-fluid position-relative d-flex p-0">
        <!-- LEFT NAVIGATION BAR -->
        <?php
            include 'phps/common/leftnav.php';
        ?>


        <!-- Content Start -->
        <div class="content">
            <!-- LEFT NAVIGATION BAR -->
            <?php
                include 'phps/common/topnav.php';
            ?>

            <!-- Sale & Revenue Start -->
            
            <?php 
                //if($userRole == 'root' || $userRole == 'user'){
                include 'phps/index/index.php';
            ?>

            <!-- Footer Start -->
            <?php
                include 'phps/common/footer.php';
            ?>
            <!-- Footer End -->
        </div>
        <!-- Content End -->


        <!-- Back to Top -->
        <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    </div>

    <!-- JavaScript Libraries -->
    <?php
        include 'phps/common/scripts.php';
    ?>

    <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js" integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=" crossorigin=""></script>
    <script src="json/counties2.js"></script>

    <!-- Template Javascript -->
    <script>
        //map script

        var map = L.map('map',{ 
            zoomControl: false,
            scrollWheelZoom: false,
            attributionControl: false,
            doubleClickZoom: false,
            dragging:false
        }).setView([0.2337410404700819, 37.86958485150083], 7);

        function getColor(d) {
            return d > 5000 ? '#8c2d04' :
                d > 1000  ? '#cc4c02' :
                d > 500  ? '#ec7014' :
                d > 200  ? '#fe9929' :
                d > 100   ? '#fec44f' :
                d > 50   ? '#fee391' :
                d > 10   ? '#fff7bc' :
                            '#ffcc00';
        }

        function style(feature) {
            return {
                fillColor: getColor(feature.properties.density),
                weight: 2,
                opacity: 1,
                color: '#ffffff',
                dashArray: '3',
                fillOpacity: 1,
            };
        }

        var info = L.control();

        info.onAdd = function (map) {
            this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
            this.update();
            return this._div;
        };

        // method that we will use to update the control based on feature properties passed
        info.update = function (props) {
            this._div.innerHTML = (props ?
                '<table  style="text-align: left;">'+
                        '<tr>'+
                            '<td><b>COUNTY NAME</b></td>'+
                            '<td>:&nbsp'+props.county_nam+'</td>'+
                        '</tr>'+
                        '<tr>'+
                            '<td><b>TOTAL APPLICANTS</b></td>'+
                            '<td>:&nbsp'+props.county_total+'</td>'+
                        '</tr>'+
                        '<tr>'+
                            '<td><b>TOTAL MALES</b></td>'+
                            '<td>:&nbsp'+props.county_male+'</td>'+
                        '</tr>'+
                        '<tr>'+
                            '<td><b>TOTAL FEMALES</b></td>'+
                            '<td>:&nbsp'+props.county_female+'</td>'+
                        '</tr>'+
                        '<tr>'+
                            '<td><b>TOTAL OTHERS</b></td>'+
                            '<td>:&nbsp'+props.county_others+'</td>'+
                        '</tr>'+
                    '</table>'
                : 'Hover over a County');
        };

        info.addTo(map);

        function highlightFeature(e) {
            var layer = e.target;

            layer.setStyle({
                color: '#666',//border color
                dashArray: '',
                fillOpacity: 0.7 //color on cursor hover 
            });
            layer.bringToFront();
            info.update(layer.feature.properties);
        }

        function resetHighlight(e) {
            var layer = e.target;

            layer.setStyle({
                color: '#fff',
                dashArray: '',
                fillOpacity: 1
            });
            layer.sendToBack();
            info.update();
        }

        function onEachFeature(feature, layer) {
            // does this feature have a property named county_nam?
            if (feature.properties && feature.properties.county_nam) {                
                layer.on({
                    mouseover: highlightFeature,
                    mouseout: resetHighlight
                });
            }
        }

        var myGeoJson = L.geoJson(counties, {
            style: style,
            onEachFeature: onEachFeature
        }).addTo(map);

        //console.log()
    </script>    
</body>
</html>