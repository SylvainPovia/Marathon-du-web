<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Atlasante</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<style type="text/css">
	[placeholder] {
		color: white;
	}
	input::-webkit-input-placeholder {
		color: white !important;
		text-transform: uppercase;
		font-size: 25px;
	}
</style>
<body class="">
	<section class="container">


		<?php require('header.php') ?>

		<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
			<main role="main" class="inner cover">
				<h3 class="cover-heading">La santé sur mon territoire</h3>
        
				<br>
				<br>
				<br>
        		<br>
        		<br>
				<br>
				<br>

				<!-- Formulaire start -->
				<div class="text-center">
					<h2>Des chiffres sur votre territoire ouvert à tous !</h2>
					<br><br><br><br>
					<form action="welcome.php" method="post">
						<div class="input-group mb-3">
							<input type="text" name="commune" class="form-control form-control-lg text-center" placeholder="Diagnostiquer ma commune" style="text-transform: uppercase; font-size: 25px; color: white; background-color: #4cd964; border-top-left-radius: 25px;border-bottom-left-radius: 25px;">
							<div class="input-group-append" >
							<button class="btn btn-success" type="submit" style="background-color:#4cd964; border: none; border-top-right-radius: 25px;border-bottom-right-radius: 25px;">Go</button>
							</div>
						</div>
					</form>
				</div>
				<!-- Formulaire end -->


			</main>
		</div>

		<footer class="text-center mastfoot mt-auto fixed-bottom">
			<div class="inner">
			<p> Visitez notre <a href="https://github.com/JojoAkaBrou/Mdw">GitHub</a></p>
			</div>
		</footer>

	</section>

</body>
</html>
