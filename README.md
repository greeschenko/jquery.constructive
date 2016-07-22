jQuery Constructive
===================

jquery full page effects set


Installation
------------

Either run

```
bower install jquery.constructive
```

Usage
=====

jquery.constructiveParallax
---------------------------

include assets to file
```
    <head>
        ...
        <link rel="stylesheet" href="../css/parallax.min.css">
        ...
    </head>

        ...
    <div class="parallax" data-image="../img/img1.jpg"></div>
        ...
        ...
    <div class="parallax" data-image="../img/img1.jpg"></div>
        ...

    <script src="../../bower_components/jquery/dist/jquery.min.js"></script>
    <script src="../js/jquery.constructiveParallax.min.js"></script>
</body>
```

add init script
```
<script>
    $(window).ready(function()
    {
        $(".parallax").constructiveParallax(
        {
            "speed": "15"
        });
    });
</script>
```


jquery.constructiveTelescope
----------------------------


include assets
```
    ...
    ...
    <script src="../../bower_components/jquery/dist/jquery.min.js"></script>
    <script src="../js/jquery.constructiveTelescope.min.js"></script>
</body>

```

make html structure

```
<div class="somewraprecomended">
    <section>...  ...</section>
    <section>...  ...</section>
    <section>...  ...</section>
    <section data-max=300>...  ...</section>
    <section>...  ...</section>
</div>
```

use data-max=300 add limit to vertical movement

add init sctipt
```
<script type="text/javascript" charset="utf-8">
    $(window).ready(function()
    {
        $("section").constructiveTelescope();
    });
</script>
```
