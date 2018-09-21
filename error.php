
<!doctype html>
<!--  Caleb MacQueen File Added 9/17/2018 -->
<html>
<head>
  <title>Contact Us</title>
  <meta name="viewport" content="width=device-width, initialscale=1.0">
  <!-- Bootstrap -->
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <link rel="stylesheet" href="css/styles.css">
  <link rel="stylesheet" href="jquery-ui-1.12.1.custom/jquery-ui.css"/>

  <script type="text/javascript" src="jquery-ui-1.12.1.custom/external/jquery/jquery.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="jquery-ui-1.12.1.custom/jquery-ui.js"></script>
  <script src="scripts/register.js"></script>
  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and
media queries -->
  <!--: Respond.js doesn't work if you view the page
 via file:// -->
  <!--[if lt IE 9]>
 <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/
 html5shiv.js"></script>
 <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/
 respond.min.js"></script>
 <![endif]-->
</head>

<body>
  <div><img src="images/desktopBackground.png" class="bg">
    <div class="container">
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="index.html">WWII Games</a>
          </div>
          <ul class="nav navbar-nav">
            <!-- make sure to change class="active" when making new pages -->
            <!-- remove class="disabled" as pages are added-->
            <li><a href="index.html">Home</a></li>
            <li><a class="dropdown-toggle" data-toggle="dropdown" href="games.html">Games <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="games.html#a&a">Axis and Allies</a></li>
                <li><a href="games.html#landMinis">Axis and Allies Miniatures</a></li>
                <li><a href="games.html#seaMinis">War at Sea Miniatures</a></li>
                <li><a href="games.html#coh2">Company of Heroes 2</a></li>
              </ul>
            </li>
            <li class="active"><a class="dropdown-toggle" data-toggle="dropdown" href="about.html">About Us <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li class="active"><a href="contact.html">Contact Us</a></li>
                <li><a href="newsletter.html">Newsletter</a></li>
                <li><a href="faq.html">FAQ</a></li>
              </ul>
            </li>
            <li><a href="admin/index.php">Admin</a></li>
          </ul>
        </div>
      </nav>

      <header>
        <div class=" container-fluid row">
          <image src="images/banner.jpg" class="image-responsive bannerImage">
        </div>
      </header>

      <main>
        <div class="row">
          <div class="col-md-1">
          </div>
          <div class="col-md-10">
              <h1><?php if($easyError != null){echo $easyError;}?></h1>
              <p><?php echo"$error";?></p>
          </div>
          <div class="col-md-1">
          </div>
        </div>
      </main>

      <footer>
        <p>Want to play with us?<br>Contact us by email: <a href="mailto=@gmail.com">@gmail.com</a><br> Today is:
          <script src="scripts/date.js"></script>
        </p>
        <!-- finish email address later -->
      </footer>
    </div>
  </div>
</body>
</html>
