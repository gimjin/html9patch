package com.xiaer;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;

/**
 * Created by kimseongrim.
 * @author Kim
 * @link https://github.com/kimseongrim/html9patch
 */

public class Main {

    public static void main(String[] args) {

        // image directory URL directory is batch processing directory All 9-Patch PNG file.
        File src = new File(args[0]);

        // main
        ArrayList<String> htmls = new ArrayList<String>();
        ArrayList<String> ids = new ArrayList<String>();
        String html = "";
        String srcDirectory ="";

        if(src.isDirectory()){

            File[] fa = src.listFiles();
            try {
                srcDirectory = src.getCanonicalFile().toString();
            } catch (IOException e) {
                e.printStackTrace();
            }
            NinePatch np;


            for(int i=0; i< fa.length; i++){
                if(fa[i].getName().substring(fa[i].getName().length() - 6).equalsIgnoreCase(".9.png")){

                    try {
                        np = new NinePatch(fa[i].getCanonicalFile());
                        np.slice(srcDirectory + System.getProperty("file.separator") + "images");
                        // get html code
                        html = np.getHTML(np.srcName);
                        htmls.add(html);
                        ids.add(np.srcName);
                        // init Array data
                        np.clear();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }

            // Check directory has 9patch images?
            if(htmls.isEmpty() ){
                System.err.println("Directory No 9patch images.");
                System.exit(0);
            }

        }else{
            System.err.println("Directory does not exist");
            System.exit(0);
        }

        // Create JS File
        UtilTools.createJS(htmls, ids, srcDirectory);

    }
}
