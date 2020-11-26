<html>
<body>
  <?php
    $distance = $_POST['dist'];
    $units = $_POST['units'];
    if($units=='Kms'){
      $miles = $distance / 1.60934;
      echo ''.$miles.' miles.';
    }
    else{
      $Kms = $distance * 1.60934;
      echo ''.$Kms.' kms.';
    }
  ?>
</body>
</html>