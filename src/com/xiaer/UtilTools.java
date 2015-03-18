package com.xiaer;

import javax.imageio.ImageIO;
import javax.imageio.ImageReadParam;
import javax.imageio.ImageReader;
import javax.imageio.stream.ImageInputStream;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.Iterator;

/**
 * Created by kimseongrim.
 * @author Kim
 * @link https://github.com/kimseongrim/html9patch
 */

public class UtilTools {

    public static void createJS(ArrayList<String> html, ArrayList<String> id, String targetDirectory) {

        String vars = "";
        String doms = "";
        String stats = "";

        for (int i = 0; i < html.size(); i++) {

            vars += "\t// " + id.get(i) + ".9.png set vars START\r\n" +
                    "\tvar " + id.get(i) + " = $('#" + id.get(i) + "');\r\n" +
                    "\tvar " + id.get(i) + "_html = \"" + html.get(i).replace("\r\n", "") + "\";\r\n" +
                    "\tvar " + id.get(i) + "_state = " + id.get(i) + ".attr('state');\r\n";

            doms += "\t// " + id.get(i) + ".9.png set DOM START\r\n" +
                    "\tif(" + id.get(i) + "[0] != undefined) {\r\n" +
                    "\r\n" +
                    "\t\t// get attrs\r\n" +
                    "\t\tvar " + id.get(i) + "_style = " + id.get(i) + ".attr('style') == undefined ? '' : " + id.get(i) + ".attr('style') + ' ';\r\n" +
                    "\t\tvar " + id.get(i) + "_class = " + id.get(i) + ".attr('class') == undefined ? '' : " + id.get(i) + ".attr('class') + ' ';\r\n" +
                    "\t\tvar " + id.get(i) + "_child = " + id.get(i) + ".html();\r\n" +
                    "\r\n" +
                    "\t\t// replace template\r\n" +
                    "\t\treplaceDOM('#" + id.get(i) + "', " + id.get(i) + "_html);\r\n" +
                    "\t\t// re-selected id\r\n" +
                    "\t\t" + id.get(i) + " = $('#" + id.get(i) + "');\r\n" +
                    "\t\t// set class\r\n" +
                    "\t\t" + id.get(i) + ".attr('class', " + id.get(i) + "_class + " + id.get(i) + ".attr('class'));\r\n" +
                    "\t\t// set style\r\n" +
                    "\t\t" + id.get(i) + ".attr('style', " + id.get(i) + "_style);\r\n" +
                    "\t\t$('#" + id.get(i) + "_content').html(" + id.get(i) + "_child);\r\n" +
                    "\t}\r\n";

            stats += "\t// " + id.get(i) + ".9.png set stats START\r\n" +
                    "\tif(" + id.get(i) + "_state != undefined) {\r\n" +
                    "\t\tvar " + id.get(i) + "_state_array = " + id.get(i) + "_state.split(\"|\");\r\n" +
                    "\t\tfor (var i = 0; i < " + id.get(i) + "_state_array.length; i++) {\r\n" +
                    "\t\t\tvar " + id.get(i) + "_var = eval(" + id.get(i) + "_state_array[i] + '_html');\r\n" +
                    "\t\t\t$('#" + id.get(i) + "_table').after(" + id.get(i) + "_var.substring(" + id.get(i) + "_var.indexOf('<table'), " + id.get(i) + "_var.indexOf('</table>')+8));\r\n" +
                    "\t\t\t$('#' + " + id.get(i) + "_state_array[i] + '_table').hide();\r\n" +
                    "\t\t}\r\n" +
                    "\t}\r\n";
        }

        String jsStream = "$(document).ready(function(){\r\n" +
                "\t/**\r\n" +
                "\t * INFO\r\n" +
                "\t * Images directory is not in the ./images/ , please modify the imageDirectory variable\r\n" +
                "\t */\r\n" +
                "\tvar imageDirectory = './images/';\r\n" +
                "\r\n" +
                "\tvar replaceDOM = function (id, html) {\r\n" +
                "\t\t$(id).replaceWith(html);\r\n" +
                "\t}\r\n" +
                vars +
                "\r\n" +
                doms +
                "\r\n" +
                stats +
                "\r\n" +
                "});";

        try {
            File mFile = new File(targetDirectory + System.getProperty("file.separator") + "html9patch.js");
            mFile.createNewFile();

            FileOutputStream o = new FileOutputStream(mFile);
            o.write(jsStream.getBytes("utf-8"));
            o.close();

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public static void cut(String inputFile, String outFile, int x, int y, int width, int height) {

        ImageInputStream imageStream = null;

        try {
            FileInputStream input = new FileInputStream(inputFile);
            FileOutputStream output = new FileOutputStream(outFile);

            Iterator<ImageReader> readers = ImageIO.getImageReadersByFormatName("png");
            ImageReader reader = readers.next();
            imageStream = ImageIO.createImageInputStream(input);
            reader.setInput(imageStream, true);
            ImageReadParam param = reader.getDefaultReadParam();

            Rectangle rect = new Rectangle(x, y, width, height);
            param.setSourceRegion(rect);
            BufferedImage bi = reader.read(0, param);

            ImageIO.write(bi, "png", output);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
