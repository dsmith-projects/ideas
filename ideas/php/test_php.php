<?php

// function addValues() {
// 	$sum = 0;
// 	$numargs = func_num_args();
// 	echo "Number of arguments: $numargs <br>";
// 	for ($i=0; $i < func_num_args(); $i++) { 
// 		$sum += func_get_arg($i);
// 		// echo func_get_arg($i) . "<br>";
// 	}
// 	return $sum;
// }
// echo addValues(1,2,3);

// $v1 = 1;
// $v2 = 2;
// $v3 = 3;
// function myFunction() {
// 	$GLOBALS['v1'] *= 2;
// 	$v2 *= 2;
// 	global $v3; $v3 *= 2; 
// }
// myFunction();
// echo "$v1$v2$v3";


// function increment($val) {
// 	return ++$val;
// }
// echo increment(1);

// function func($x, $x = 1, $x = 2) {
// 	return $x;
// }
// print func(3);

// $x = function func($a, $b, $c) {
// 	print "$c|$b|$a";
// };
// print $x(1, 2, 3);

define(myvalue, "10");
$myarray[10] = "Dog";
$myarray[] = "Human";
$myarray['myvalue'] = "Cat";
$myarray["Dog"] = "Cat";

print "The value is:";
print $myarray[myvalue] . "\n";



?>