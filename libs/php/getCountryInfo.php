<?php

if (isset($_POST['country'])){
    $country= $_POST['country'];
    $url = "http://api.geonames.org/countryInfoJSON?formatted=true&lang=en&country=$country&username=abdul_ra7&style=full";



    $ch = curl_init();
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL, $url);

    $result = curl_exec($ch);

    if ($result === false) {
        $output['status']['code'] = "500";
        $output['status']['name'] = "Internal Server Error";
        $output['status']['description'] = "Failed to execute cURL request: " . curl_error($ch);
        $output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";
        $output['data'] = null;
    } else {
        $decode = json_decode($result, true);

        if ($decode === null) {
            $output['status']['code'] = "500";
            $output['status']['name'] = "Internal Server Error";
            $output['status']['description'] = "Failed to decode JSON response: " . json_last_error_msg();
            $output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";
            $output['data'] = null;
        } else {
            $output['status']['code'] = "200";
            $output['status']['name'] = "ok";
            $output['status']['description'] = "success";
            $output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";
            $output['data'] = $decode;
        }
    }

    header('Content-Type: application/json; charset=UTF-8');

    echo json_encode($output);

    curl_close($ch);

}



