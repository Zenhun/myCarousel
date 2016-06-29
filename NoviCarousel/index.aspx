<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="NoviCarousel.index" %>

<!DOCTYPE html>


<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>My Own Little Carousel</title>
    <link href="res/myCss.css" rel="stylesheet" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="res/myJQ.js"></script>
</head>
<body>
    <form id="form1" runat="server">
    <div id="wrapper">
        <div id="carousel">
            <div id="frame">
                <div class="images">
                    <ul>
                        <li class="image active-image"><img src="res/images/tree.jpg" width="600" height="400"/></li>
                        <li class="image"><img src="res/images/trail.jpg" width="600" height="400"/></li>
                        <li class="image"><img src="res/images/train.jpg" width="600" height="400"/></li>
                        <li class="image"><img src="res/images/tornado.jpg" width="600" height="400"/></li>
                    </ul>
                </div>
            </div>
            <div class="controls">
                <div class="left-arrow" title="Previous image"><</div>
                <div class="dots">
                    <ul class="dots">
                        <li class="dot active-dot"></li>
                        <li class="dot"></li>
                        <li class="dot"></li>
                        <li class="dot"></li>
                    </ul>
                </div>
                <div class="right-arrow" title="Next image">></div>
            </div>
        </div>
    </div>
    </form>
</body>
</html>
