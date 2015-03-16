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
 * Created by kimseongrim on 3/15/15.
 */
public class UtilTools {
    
    public static void createJS(ArrayList<String> html, ArrayList<String> id, String targetDirectory){

        String js = "";
        for (int i=0; i < html.size(); i++){
            js += "\t// Nine patch " + id.get(i) + ".9.png START\r\n" +
                    "\tvar " + id.get(i) + " = $('#" + id.get(i) + "');\r\n" +
                    "\tif(" + id.get(i) + "[0] != undefined) {\r\n" +
                    "\t\tvar " + id.get(i) + "_html = \"" + html.get(i).replace("\r\n", "") + "\";\r\n" +
                    "\r\n" +
                    "\t\t// get attrs\r\n" +
                    "\t\tvar _width = " + id.get(i) + ".attr('width');\r\n" +
                    "\t\tvar _height = " + id.get(i) + ".attr('height');\r\n" +
                    "\t\tvar _style = " + id.get(i) + ".attr('style') == undefined ? '' : " + id.get(i) + ".attr('style') + ' ';\r\n" +
                    "\t\tvar _class = " + id.get(i) + ".attr('class') == undefined ? '' : " + id.get(i) + ".attr('class') + ' ';\r\n" +
                    "\r\n" +
                    "\t\t// replace template\r\n" +
                    "\t\treplaceDOM('#" + id.get(i) + "', " + id.get(i) + "_html);\r\n" +
                    "\t\t// re-selected id\r\n" +
                    "\t\t" + id.get(i) + " = $('#" + id.get(i) + "');\r\n" +
                    "\t\t// set class\r\n" +
                    "\t\t" + id.get(i) + ".attr('class', _class + " + id.get(i) + ".attr('class'));\r\n" +
                    "\t\t// set style\r\n" +
                    "\t\tif (_width != undefined && _height != undefined) {\r\n" +
                    "\t\t\t_style += 'width:' + _width + '; height:' + _height;\r\n" +
                    "\t\t} else if (_width != undefined) {\r\n" +
                    "\t\t\t_style += 'width:' + _width;\r\n" +
                    "\t\t} else if (_height != undefined) {\r\n" +
                    "\t\t\t_style += 'height:' + _height;\r\n" +
                    "\t\t}\r\n" +
                    "\t\t" + id.get(i) + ".attr('style', _style);\r\n" +
                    "\t}\r\n" +
                    "\t// Nine patch " + id.get(i) + ".9.png END\r\n";
        }

        String jsStream = "$(document).ready(function(){\r\n" +
                "\tvar replaceDOM = function (id, html) {\r\n" +
                "\t\t$(id).replaceWith(html);\r\n" +
                "\t}\r\n" +
                js +
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

    public static void createHTML(ArrayList<String> htmls, String targetDirectory){

        String html = "";
        for(int i=0; i< htmls.size(); i++){
            html += htmls.get(i);
        }

        String htmlStream = "<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Strict//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd'>" + "\r\n" +
                "<html>" + "\r\n" +
                "<head>" + "\r\n" +
                "<link rel='stylesheet' type='text/css' href='./stylesheet.css' />" + "\r\n" +
                "</head>" + "\r\n" +
                "<body>" + "\r\n" +
                "<h1><a href='https://github.com/kimseongrim/html9patch' target='_blank'>html9patch GitHub</a></h1>" + "\r\n" +
                html +
                "</body>" + "\r\n" +
                "</html>";
        try {
            File mFile = new File(targetDirectory + System.getProperty("file.separator") + "html9patch.html");
            mFile.createNewFile();

            FileOutputStream o = new FileOutputStream(mFile);
            o.write(htmlStream.getBytes("utf-8"));
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
