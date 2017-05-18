<?php
include 'db.php';
$sql = "SELECT * FROM login";
$result = mysqli_query($conn,$sql);
	if (!$result) {
		die("Error: Data not Found..");
	}
	while ($row = mysqli_fetch_array($result)) {
		$arr[] = array(
		'userId' => $row[0],
		'userName' => $row[1],
		'password' => $row[2],
		'fname' => $row[3],
		'lname' => $row[4],
		'email' => $row[5]);
	}
	echo json_encode($arr);
mysqli_close($conn);
?>