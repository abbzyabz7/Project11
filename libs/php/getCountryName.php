<?php
$jsonfile = file_get_contents('../json/countryBorders.geo.json');
$jsonfile = (array) json_decode($jsonfile);
$data = [];

// echo '<pre>';
foreach($jsonfile['features'] as $feature) {
    // var_dump($feature->properties);
    array_push($data, $feature->properties);
    // person->age // access object key
    // person['age'] // access array key 
}
// echo '</pre>';
// var_dump($jsonfile['features']);


header('Content-Type: application/json; charset=UTF-8');


$response = [
    'data' => $data,
    'status' => [
        'code' => '200',
        'description' => 'success',
        'name' => 'ok',
    ]
];

echo json_encode($response);
// echo $response;