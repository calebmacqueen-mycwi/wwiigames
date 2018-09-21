<!-- Caleb MacQueen File Added 9/14/2018 -->
<!DOCTYPE html>
<html>

<head>
  <title>WWII Games</title>
  <meta name="viewport" content="width=device-width, initialscale=1.0">
  <meta charset="utf-8">
  <!-- Bootstrap -->
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <link rel="stylesheet" href="../css/styles.css">
  <link rel="stylesheet" href="../jquery-ui-1.12.1.custom/jquery-ui.css"/>

  <script type="text/javascript" src="../jquery-ui-1.12.1.custom/external/jquery/jquery.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="../jquery-ui-1.12.1.custom/jquery-ui.js"></script>
  <script>
  /*  $(document).ready(function(){
      $('.showHide').hide();
      $('.didYouKnow').hover(function(){
        $('.showHide').show('clip', 500);
      },
      function(){
        $('.showHide').hide('clip', 500);
      });
    });*/
  </script>
  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and
media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page
 via file:// -->
  <!--[if lt IE 9]>
 <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/
 html5shiv.js"></script>
 <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/
 respond.min.js"></script>
 <![endif]-->
</head>

<body>
  <div><img src="../images/desktopBackground.png" class="bg" alt="American Flag">
    <div class="container">
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="../index.html">WWII Games</a>
          </div>
          <ul class="nav navbar-nav">
            <li><a href="../index.html">Home</a></li>
            <li><a class="dropdown-toggle" data-toggle="dropdown" href="../games.html">Games <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="../games.html#a&a">Axis and Allies</a></li>
                <li><a href="../games.html#landMinis">Axis and Allies Miniatures</a></li>
                <li><a href="../games.html#seaMinis">War at Sea Miniatures</a></li>
                <li><a href="../games.html#coh2">Company of Heroes 2</a></li>
              </ul>
            </li>
            <li><a class="dropdown-toggle" data-toggle="dropdown" href="../about.html">About Us <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="../contact.html">Contact Us</a></li>
                <li><a href="../newsletter.html">Newsletter</a></li>
                <li><a href="../faq.html">FAQ</a></li>
              </ul>
            </li>
            <li class="active"><a href="admin/index.php">Admin</a></li>
          </ul>
        </div>
      </nav>

      <header>
        <div class=" container-fluid row">
          <img src="../images/banner.jpg" class="image-responsive bannerImage" alt="Banner Image of Tank Column">
        </div>
      </header>

<main>
    <h1>Manage Comments</h1>
    <aside>
        <h2>Employees</h2>
        <nav>
        <ul>
        <?php foreach ($employees as $employee) : ?>
            <li>
            <a href="?employee_id=<?php echo $employee->getID(); ?>">
                <?php echo $employee->getName(); ?>
            </a>
            </li>
        <?php endforeach; ?>
        </ul>
        </nav>
    </aside>
    <section>
        <h2><?php echo $current_employee->getName(); ?></h2>
        <table>
            <tr>
                <th> Comment ID &nbsp;</th>
                <th> Email Address </th>
                <th> Text </th>
                <th>&nbsp;</th>
            </tr>
            <?php foreach ($comments as $comment) : ?>
            <tr>
                <td><?php echo $comment->getID(); ?></td>
                <td><?php echo $comment->getEmail(); ?></td>
                <td><?php echo $comment->getText(); ?>
                </td>
                <td><form action="." method="post"
                          id="delete_comment_form">
                    <input type="hidden" name="action"
                           value="delete_comment">
                    <input type="hidden" name="comment_id"
                           value="<?php echo $comment->getID(); ?>">
                    <input type="hidden" name="employee_id"
                           value="<?php echo $current_employee->getID(); ?>">
                    <input type="submit" value="Delete">
                </form></td>
            </tr>
            <?php endforeach; ?>
        </table>
    </section>
</main>
              <footer>
        <p>Want to play with us?<br>Contact us by email: <a href="mailto=@gmail.com">@gmail.com</a><br>
            Today is: <script src="../scripts/date.js"></script><br>
            <a href="../listemployees.php">Our Staff</a></p>
        <!-- finish email address later -->
      </footer>
    </div>
  </div>
</body>
</html>