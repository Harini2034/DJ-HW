<!DOCTYPE html>
<html>
<head>
	<title>AI DJ WEB APP</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.js"></script>

  <script src="https://unpkg.com/ml5@0.4.3/dist/ml5.min.js"></script>

  <link rel="stylesheet" type="text/css" href="style.css">
 <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.3.1/addons/p5.sound.min.js" integrity="sha512-wM+t5MzLiNHl2fwT5rWSXr2JMeymTtixiw2lWyVk1JK/jDM4RBSFoH4J8LjucwlDdY6Mu84Kj0gPXp7rLGaDyA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

</head>
<body background="background.png">
<center>
  	<h3 class="btn btn-danger heading">AI DJ WEB APP
	    <br>
	    <span class="note">NOTE - Right hand = Beckcy.G - Shower. Left Hand = Selena Gomez - Wolves</span>
  	</h3>
    <div class="div_speed">
      <img src="selena.gif" class="div_speed_img">
      <br>
      <h3 class="btn btn-danger" id="speed">Selena Gomez</h3>
    </div>

    <div class="div_volume">
      <img src="backyg.gif" class="div_volume_img">
      <br>
      <h3 class="btn btn-danger" id="volume"> Becky G </h3>
    </div>
	<br><br>
</center>

<script src="main.js"></script>
</body>
</html>
