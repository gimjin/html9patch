package com.xiaer;

import javax.imageio.ImageIO;
import javax.imageio.ImageReadParam;
import javax.imageio.ImageReader;
import javax.imageio.stream.ImageInputStream;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.awt.image.ImageObserver;
import java.awt.image.PixelGrabber;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;

/**
 * Created by kimseongrim on 2/27/15.
 * @author Kim
 * @link https://github.com/kimseongrim/html9patch
 *
 * Draw 9-patch tools
 *   Adobe Photoshop
 *   Pixelmator
 *   Android draw9patch (Demos.zip has tool draw9patch.jar, read readme.txt)
 *
 * Draw 9-patch help
 * @link https://developer.android.com/tools/help/draw9patch.html
 *
 */
public class NinePatch {

    private static int SLICE_TYPE_FIXED = 0;
    private static int SLICE_TYPE_UNFIXED = 1;
    private static int SLICE_TYPE_REPEAT = 2;
    private static int SLICE_TYPE_REPEAT_X = 3;
    private static int SLICE_TYPE_REPEAT_Y = 4;

    protected String src; /* /User/name/9patch/btn.9.png */
    protected String src9patchName; /* btn.9.png */
    protected String srcName = ""; /* btn */
    protected String imgDirectory = "";

    /**
     * 9-Patch feature analysis data
     * ArrayList<int[]> ninePatchProperty
     *    [
     *      [SLICE_TYPE, row, column, x, y, width, height, scaleWidth, scaleHeight,]
     *      [SLICE_TYPE, row, column, x, y, width, height, scaleWidth, scaleHeight,]
     *      ...
     *    ]
     */
    private ArrayList<int[]> ninePatchProperty = new ArrayList<int[]>();

    /**
     *filler <td>String</td>
     * ArrayList<String>
     * ["<img />", "<img />", "<br /><img /><br />", ...]
     */
    private ArrayList<String> fillerTdTags = new ArrayList<String>();

    /**
     * div input area
     * ArrayList<Integer>
     * [padding-top, padding-bottom, padding-left, padding-right]
     */
    private ArrayList<Integer> contentArea = new ArrayList<Integer>();

    /**
     * ArrayList<Integer>
     * 0:Alpha=0, 255:Alpha=255
     * [0,0,0,0,255,255,255,255,0,...]
     */
    private ArrayList<Integer> topPixelList = new ArrayList<Integer>();
    private ArrayList<Integer> leftPixelList = new ArrayList<Integer>();
    private ArrayList<Integer> rightPixelList = new ArrayList<Integer>();
    private ArrayList<Integer> bottomPixelList = new ArrayList<Integer>();

    /**
     * ArrayList<int[]>
     * [
     *  [SLICE_TYPE, Coordinate, Breadth, Breadth-scale]
     * ]
     */
    private ArrayList<int[]> topPropertyList = new ArrayList<int[]>();
    private ArrayList<int[]> leftPropertyList = new ArrayList<int[]>();
    private ArrayList<int[]> rightPropertyList = new ArrayList<int[]>();
    private ArrayList<int[]> bottomPropertyList = new ArrayList<int[]>();

    /**
     *
     * @param src
     */
    protected NinePatch(File src){
        try {
            this.src = src.getCanonicalFile().toString();
            this.src9patchName = src.getCanonicalFile().getName().toString();
            this.srcName = src.getCanonicalFile().getName().toString().replace(".9.png", "");
        }catch (Exception e){
            e.printStackTrace();
        }
        init();
    }

    private void init() {

        // checking file name has .9.png
        if (!src.substring(src.length() - 6).equalsIgnoreCase(".9.png")) {
            System.err.println(src9patchName + " error NOT 9-Patch png file. <e.g. button.9.png>");
            System.exit(0);
        }

        try {
            BufferedImage bi = ImageIO.read(new File(src));
            int w = bi.getWidth();
            int h = bi.getHeight();

            int[] pixels = new int[w * h];
            PixelGrabber pg = new PixelGrabber(bi, 0, 0, w, h, pixels, 0, w);
            try {
                pg.grabPixels();
            } catch (InterruptedException e) {
                System.err.println(src9patchName + " interrupted waiting for pixels!");
                System.exit(0);
            }
            if ((pg.getStatus() & ImageObserver.ABORT) != 0) {
                System.err.println(src9patchName + " image fetch aborted or errored");
                System.exit(0);
            }
            for (int j = 0; j < h; j++) {
                for (int i = 0; i < w; i++) {
                    // Set ARGB
                    int alpha = (pixels[j * w + i] >> 24) & 0xff;
                    int red = (pixels[j * w + i] >> 16) & 0xff;
                    int green = (pixels[j * w + i] >> 8) & 0xff;
                    int blue = (pixels[j * w + i]) & 0xff;

                    // Check 9-Patch rule: edge ARGB
                    if (j == 0 || j == h - 1 || i == 0 || i == w - 1) {
                        if (alpha == 255) {
                            if ((j == 0 && i == 0) || (j == 0 && i == w - 1) || (j == h - 1 && i == 0) || (j == h - 1 && i == w - 1)) {
                                System.err.println(src9patchName + " error 9-Patch, 1px four corners must be alpha 0.");
                                System.exit(0);
                            }
                            // Not black
                            if (!(red == 0 && green == 0 && blue == 0)) {
                                System.err.println(src9patchName + " error 9-Patch, When alpha is 255, MUST Black(255 255 255).");
                                System.exit(0);
                            }
                        } else if (alpha > 0) {
                            System.err.println(src9patchName + " error 9-Patch, edge 1px only allows alpha 0 or 255.");
                            System.exit(0);
                        }
                    }

                    /**
                     * 255 alpha is COLOR black
                     * create round 1px Array, get Black line position
                     */
                    if (j == 0 && i > 0 && i < w - 1) {
                        topPixelList.add(alpha);
                    }
                    if (i == w - 1 && j > 0 && j < h - 1) {
                        rightPixelList.add(alpha);
                    }
                    if (j == h - 1 && i > 0 && i < w - 1) {
                        bottomPixelList.add(alpha);
                    }
                    if (i == 0 && j > 0 && j < h - 1) {
                        leftPixelList.add(alpha);
                    }

                }
            }
            System.out.println(topPixelList);
            System.out.println(leftPixelList);
            System.out.println(rightPixelList);
            System.out.println(bottomPixelList);


        } catch (IOException e) {
            e.printStackTrace();
            System.exit(0);
        }

        // set propertyList
        setPropertyList(topPixelList, topPropertyList);
        setPropertyList(leftPixelList, leftPropertyList);
        setPropertyList(rightPixelList, rightPropertyList);
        setPropertyList(bottomPixelList, bottomPropertyList);

        // Check 9-Patch area
        int tmpCheck = 0;
        for (int i = 0; i < rightPropertyList.size(); i++) {
            tmpCheck += rightPropertyList.get(i)[0];
        }
        if (tmpCheck != 1) {
            System.err.println(src9patchName + " error 9-Patch, Right MUST has one black line");
            System.exit(0);
        }
        tmpCheck = 0;
        for (int i = 0; i < bottomPropertyList.size(); i++) {
            tmpCheck += bottomPropertyList.get(i)[0];
        }
        if (tmpCheck != 1) {
            System.err.println(src9patchName + " error 9-Patch, Bottom MUST has one black line");
            System.exit(0);
        }


        String tmpScale = "";
        for (int j = 0; j < leftPropertyList.size(); j++) {
            for (int i = 0; i < topPropertyList.size(); i++) {
                // init core data
                if (j == 0 && i == 0) {
                    ninePatchProperty.add(new int[]{getSliceType(topPropertyList.get(i)[0], leftPropertyList.get(j)[0]), j, i, 1, 1, topPropertyList.get(i)[2] + 1, leftPropertyList.get(j)[2] + 1, topPropertyList.get(i)[3] + 1, leftPropertyList.get(j)[3] + 1});
                } else if (j == 0 && i > 0) {
                    ninePatchProperty.add(new int[]{getSliceType(topPropertyList.get(i)[0], leftPropertyList.get(j)[0]), j, i, topPropertyList.get(i - 1)[1] + 2, 1, topPropertyList.get(i)[2] + 1, leftPropertyList.get(j)[2] + 1, topPropertyList.get(i)[3] + 1, leftPropertyList.get(j)[3] + 1});
                } else if (i == 0 && j > 0) {
                    ninePatchProperty.add(new int[]{getSliceType(topPropertyList.get(i)[0], leftPropertyList.get(j)[0]), j, i, 1, leftPropertyList.get(j - 1)[1] + 2, topPropertyList.get(i)[2] + 1, leftPropertyList.get(j)[2] + 1, topPropertyList.get(i)[3] + 1, leftPropertyList.get(j)[3] + 1});
                } else {
                    ninePatchProperty.add(new int[]{getSliceType(topPropertyList.get(i)[0], leftPropertyList.get(j)[0]), j, i, topPropertyList.get(i - 1)[1] + 2, leftPropertyList.get(j - 1)[1] + 2, topPropertyList.get(i)[2] + 1, leftPropertyList.get(j)[2] + 1, topPropertyList.get(i)[3] + 1, leftPropertyList.get(j)[3] + 1});
                }


                // repeat scale
                if (ninePatchProperty.get(ninePatchProperty.size() - 1)[0] == SLICE_TYPE_FIXED) {
                    // SLICE_TYPE_FIXED
                    tmpScale = "";
                } else {
                    if (j == 0 && i == 0) {
                        if (ninePatchProperty.get(ninePatchProperty.size() - 1)[7] > 0 && ninePatchProperty.get(ninePatchProperty.size() - 1)[8] > 0) {
                            for (int w = 0; w < ninePatchProperty.get(ninePatchProperty.size() - 1)[7]; w++) {
                                tmpScale += "<img />";
                            }
                            for (int h = 0; h < ninePatchProperty.get(ninePatchProperty.size() - 1)[8] - 1; h++) {
                                tmpScale += "<br /><img />";
                            }
                        } else if (ninePatchProperty.get(ninePatchProperty.size() - 1)[7] > 0) {
                            for (int w = 0; w < ninePatchProperty.get(ninePatchProperty.size() - 1)[7]; w++) {
                                tmpScale += "<img />";
                            }
                        } else if (ninePatchProperty.get(ninePatchProperty.size() - 1)[8] > 0) {
                            for (int h = 0; h < ninePatchProperty.get(ninePatchProperty.size() - 1)[8]; h++) {
                                if (h == 0) {
                                    tmpScale += "<img />";
                                } else {
                                    tmpScale += "<br /><img />";
                                }
                            }
                        }
                    } else if (i > 0 && j == 0) {
                        for (int w = 0; w < ninePatchProperty.get(ninePatchProperty.size() - 1)[7]; w++) {
                            tmpScale += "<img />";
                        }
                    } else if (j > 0 && i == 0) {
                        for (int h = 0; h < ninePatchProperty.get(ninePatchProperty.size() - 1)[8]; h++) {
                            if (h == 0) {
                                tmpScale += "<img />";
                            } else {
                                tmpScale += "<br /><img />";
                            }
                        }
                    }
                }
                fillerTdTags.add(tmpScale);
                // init tmpScale
                tmpScale = "";

            }
        }

        System.out.println(fillerTdTags);
        System.out.println(Arrays.toString(ninePatchProperty.get(0)));

        // set [padding-top, padding-bottom, ..., ...]
        if (rightPropertyList.size() == 3) {
            contentArea.add(0, rightPropertyList.get(0)[2] + 1);
            contentArea.add(1, rightPropertyList.get(2)[2] + 1);
        } else if (rightPropertyList.size() == 1) {
            contentArea.add(0, 0);
            contentArea.add(1, 0);
        } else {
            if (rightPropertyList.get(0)[0] == SLICE_TYPE_FIXED) {
                contentArea.add(0, rightPropertyList.get(0)[2] + 1);
                contentArea.add(1, 0);
            } else {
                contentArea.add(0, 0);
                contentArea.add(1, rightPropertyList.get(1)[2] + 1);
            }
        }
        // set [..., ..., padding-left, padding-right]
        if (bottomPropertyList.size() == 3) {
            contentArea.add(2, bottomPropertyList.get(0)[2] + 1);
            contentArea.add(3, bottomPropertyList.get(2)[2] + 1);
        } else if (bottomPropertyList.size() == 1) {
            contentArea.add(2, 0);
            contentArea.add(3, 0);
        } else {
            if (bottomPropertyList.get(0)[0] == SLICE_TYPE_FIXED) {
                contentArea.add(2, bottomPropertyList.get(0)[2] + 1);
                contentArea.add(3, 0);
            } else {
                contentArea.add(2, 0);
                contentArea.add(3, bottomPropertyList.get(1)[2] + 1);
            }
        }
        System.out.println(contentArea.get(0) + " | " + contentArea.get(1) + "|" + contentArea.get(2) + " | " + contentArea.get(3));

    }

    private int getSliceType(int topSliceType, int leftSliceType) {
        if (topSliceType == SLICE_TYPE_FIXED && leftSliceType == SLICE_TYPE_FIXED) {
            return SLICE_TYPE_FIXED;
        } else if (topSliceType == SLICE_TYPE_UNFIXED && leftSliceType == SLICE_TYPE_FIXED) {
            return SLICE_TYPE_REPEAT_X;
        } else if (topSliceType == SLICE_TYPE_FIXED && leftSliceType == SLICE_TYPE_UNFIXED) {
            return SLICE_TYPE_REPEAT_Y;
        } else {
            return SLICE_TYPE_REPEAT;
        }
    }


    private static void setPropertyList(ArrayList<Integer> pixelList, ArrayList<int[]> propertyList) {

        int tmp0 = 0;
        int tmp255 = 0;

        for (int i = 0; i < pixelList.size(); i++) {
            if (pixelList.get(i) == 255) {
                tmp255++;
                if (tmp0 != 0) {
                    // [SLICE_TYPE, Coordinate, Breadth]
                    propertyList.add(new int[]{SLICE_TYPE_FIXED, i - 1, tmp0 - 1, -1});
                    tmp0 = 0;
                }
            }
            if (pixelList.get(i) == 0) {
                tmp0++;
                if (tmp255 != 0) {
                    propertyList.add(new int[]{SLICE_TYPE_UNFIXED, i - 1, tmp255 - 1, -1});
                    tmp255 = 0;
                }

            }
            // Last number
            if (i == pixelList.size() - 1 && tmp255 != 0) {
                propertyList.add(new int[]{SLICE_TYPE_UNFIXED, i, tmp255 - 1, -1});
            }
            if (i == pixelList.size() - 1 && tmp0 != 0) {
                propertyList.add(new int[]{SLICE_TYPE_FIXED, i, tmp0 - 1, -1});
            }
        }

        // get propertyList.get(i)[2] of min number
        int min = 0;
        int max = 0;
        for (int i = 0; i < propertyList.size(); i++) {
            if (propertyList.get(i)[0] == 1) {
                min = propertyList.get(i)[2];
                max = propertyList.get(i)[2];
                break;
            }
        }

        for (int i = 0; i < propertyList.size(); i++) {
            if (propertyList.get(i)[0] == 1) {
                if (propertyList.get(i)[2] > max) {
                    max = propertyList.get(i)[2];
                }
                if (propertyList.get(i)[2] < min) {
                    min = propertyList.get(i)[2];
                }
            }
        }
        min = min + 1;
        System.out.println("Min: " + min);

        // Set Breadth-scale
        ArrayList<Integer> tmpSlimming255 = new ArrayList<Integer>();
        for (int i = 0; i < propertyList.size(); i++) {
            if (propertyList.get(i)[0] == 1) {
                if ((propertyList.get(i)[2] + 1) % min == 0) {
                    tmpSlimming255.add(((propertyList.get(i)[2] + 1) / min) - 1);
                } else {
                    tmpSlimming255.clear();
                    break;
                }
            } else {
                tmpSlimming255.add(-1);
            }
        }
        for (int i = 0; i < propertyList.size(); i++) {
            if (!tmpSlimming255.isEmpty()) {
                propertyList.get(i)[3] = tmpSlimming255.get(i);
            } else {
                if (propertyList.get(i)[0] == 1) {
                    propertyList.get(i)[3] = propertyList.get(i)[2];
                }
            }
        }
        // test log
        for (int i = 0; i < propertyList.size(); i++) {
            System.out.println(propertyList.get(i)[0] + "," + propertyList.get(i)[1] + "," + propertyList.get(i)[2] + "," + propertyList.get(i)[3]);
        }
    }

    protected void slice(String targetDirectory) {

        try {
            File mPath = new File(targetDirectory);
            imgDirectory = mPath.getCanonicalFile().toString();
            if (!mPath.isDirectory()) {
                mPath.mkdirs();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        //cut start
        for (int i = 0; i < ninePatchProperty.size(); i++) {
            UtilTools.cut(src, imgDirectory + System.getProperty("file.separator") + srcName + "_" + i + ".png", ninePatchProperty.get(i)[3], ninePatchProperty.get(i)[4], ninePatchProperty.get(i)[5], ninePatchProperty.get(i)[6]);
        }
    }

    /**
     *
     * @param idName
     * @return
     */
    protected String getHTML(String idName) {

        // get padding
        int paddingTop = contentArea.get(0);
        int paddingBottom = contentArea.get(1);
        int paddingLeft = contentArea.get(2);
        int paddingRight = contentArea.get(3);

        String bg = "";
        int br = ninePatchProperty.get(ninePatchProperty.size() - 1)[2] + 1;
        String tmpScale = "";
        String tmpWidth = "";
        String tmpHeight = "";
        for (int i = 0; i < ninePatchProperty.size(); i++) {
            // start tr
            if (i == 0) {
                bg += "\t\t<tr>\r\n";
            }

            // first Row
            if (ninePatchProperty.get(i)[1] == 0) {
                // set width
                tmpWidth = " width='" + ninePatchProperty.get(i)[5] + "px'";
                // set scale imgs
                tmpScale = fillerTdTags.get(i);
            }
            // first Column
            if (ninePatchProperty.get(i)[2] == 0) {
                // set height
                tmpHeight = " height='" + ninePatchProperty.get(i)[6] + "px'";
                // set scaleText
                tmpScale = fillerTdTags.get(i);
            }

            // create td & img
            if (ninePatchProperty.get(i)[0] == SLICE_TYPE_FIXED) {
                bg += "\t\t\t<td" + tmpWidth + tmpHeight + " style='background-image:url(\" + imageDirectory + \"" + srcName + "_" + i + ".png);'></td>\r\n";
            } else if (ninePatchProperty.get(i)[0] == SLICE_TYPE_REPEAT) {
                bg += "\t\t\t<td style='background-image:url(\" + imageDirectory + \"" + srcName + "_" + i + ".png);'>" + tmpScale + "</td>\r\n";
            } else if (ninePatchProperty.get(i)[0] == SLICE_TYPE_REPEAT_X) {
                bg += "\t\t\t<td" + tmpHeight + " style='background-image:url(\" + imageDirectory + \"" + srcName + "_" + i + ".png);'>" + tmpScale + "</td>\r\n";
            } else if (ninePatchProperty.get(i)[0] == SLICE_TYPE_REPEAT_Y) {
                bg += "\t\t\t<td" + tmpWidth + " style='background-image:url(\" + imageDirectory + \"" + srcName + "_" + i + ".png);'>" + tmpScale + "</td>\r\n";
            }

            // clear
            tmpScale = "";
            tmpWidth = "";
            tmpHeight = "";

            // end tr
            if ((i + 1) % br == 0 && i != 0) {
                bg += "\t\t</tr>\r\n";
                //start tr
                if (i != ninePatchProperty.size() - 1) {
                    bg += "\t\t<tr>\r\n";
                }
            }
        }

        String html = "<div id='" + idName + "' class='nine-patch'>" + "\r\n" +
                "\t<div id='" + idName + "_content' style='top:" + paddingTop + "px; bottom:" + paddingBottom + "px; left:" + paddingLeft + "px; right:" + paddingRight + "px;'>" + "\r\n" +
                "\t\tEntry Content" + "\r\n" +
                "\t</div>\r\n" + "\r\n" +
                "\t<table cellpadding='0' cellspacing='0'>" + "\r\n" +
                bg +
                "\t</table>" + "\r\n" +
                "</div>\r\n";

        return html;

    }

    protected void clear(){

        ninePatchProperty.clear();
        fillerTdTags.clear();
        contentArea.clear();

        topPixelList.clear();
        leftPixelList.clear();
        rightPixelList.clear();
        bottomPixelList.clear();

        topPropertyList.clear();
        leftPropertyList.clear();
        rightPropertyList.clear();
        bottomPropertyList.clear();

    }
}
