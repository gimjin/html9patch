# html9patch
![9-Patch](https://github.com/kimseongrim/html9patch/blob/master/images/demos.png)
![Responsive_web_design](https://github.com/kimseongrim/html9patch/blob/master/images/Responsive_web_design.png)
**html9patch tool can change the web development mode.**
* GUI control UIView (Contain padding, Protecting images will not be stretched.)
* Repeal gridline, Reduce the workload.
* [Responsive Web Design](http://alistapart.com/article/responsive-web-design)
* Upgrade development efficiency
* and more Goole/Bing/Baidu “9patch”

> **Warning:** Not compatibility IE6, stand up for the W3C.


# Demos
```Bash
$git clone git@github.com:kimseongrim/html9patch.git
$open <path>/demos/index.html
```

# How to create?
```Bash
java -jar html9patch.jar -s [src]
(e.g. $java -jar <path>/tools/html9patch.jar -s <path>/demos
      $open <path>/demos/index.html)

[src]    Required   image or image directory URL
                    image directory is batch processing directory All 9-Patch PNG file.
```

# Create 9-Patch file
Open Android 9-Patch tool, `OR` You can create with Adobe Photoshop.
```Bash
java -jar <path>/tools/draw9patch.jar
```
![draw9patch-tool](https://github.com/kimseongrim/html9patch/blob/master/images/draw9patch-tool.png)
>**Note:** A normal PNG file (*.png) will be loaded with an empty one-pixel border added around the image, in which you can draw the stretchable patches and content area. A previously saved NinePatch file (*.9.png) will be loaded as-is, with no drawing area added, because it already exists.

Optional controls include:
* **<b>Zoom:** Adjust the zoom level of the graphic in the drawing area.
* **Patch scale:** Adjust the scale of the images in the preview area.
* **Show lock:** Visualize the non-drawable area of the graphic on mouse-over.
* **Show patches:** Preview the stretchable patches in the drawing area (pink is a stretchable patch).
* **Show content:** Highlight the content area in the preview images (purple is the area in which content is allowed).
* **Show bad patches:** Adds a red border around patch areas that may produce artifacts in the graphic when stretched. Visual coherence of your stretched image will be maintained if you eliminate all bad patches.

> **Warning:** If you need a compatible Internet Explorer 9 or less, 9-Patch above and left of the cutting area use 1px.
