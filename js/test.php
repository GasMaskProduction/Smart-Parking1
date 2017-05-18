<?php
include 'db.php';
$sql = "SELECT * FROM area";
$result = mysqli_query($conn,$sql);
	if (!$result) {
		die("Error: Data not Found..");
	}
	while ($row = mysqli_fetch_array($result)) {
		$arr[] = array(
		'postId' => $row[0],
		'id' => $row[1],
		'spaceno' => $row[2],
		'status' => $row[3],
		'img' => $row[4],
		'floor' => $row[5]);
	}
	echo json_encode($arr);
mysqli_close($conn);
?>