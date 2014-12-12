<?php
	error_reporting(E_ALL);
	ini_set('display_errors', 1);

	$file = "../../../../_hidden/lights.txt";

		
	if(isset($_GET["set"])) {
		
		file_put_contents($file, $_GET["set"]);
	
	} else {

		echo file_get_contents($file);
		
	}

?>