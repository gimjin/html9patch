package com.xiaer;

import java.io.File;

/**
 * Created by kimseongrim on 2/21/15.
 */
public class Main {
    public static void main(String[] args) {

        // init arguments
        if(args[0] == null) {
            System.err.println("error, entry argument imageSource.");
            System.exit(0);
        }

        File src = new File(args[0]);
        Boolean transparent = args.length > 1 ? (Boolean) new Boolean(args[1]) : true;

        // main
        if(src.isFile()){

            NinePatch np = new NinePatch(src);
            np.slice(transparent);
            String innerHTML = np.getHTML(np.srcWidth*5, np.srcHeight*2, "id-"+np.srcName, "class-"+np.srcName);
            np.createHTML(innerHTML);

        }else if(src.isDirectory()){

            File[] fa = src.listFiles();
            NinePatch np;
            String innerHTML;
            String innerHTMLs = "";

            for(int i=0; i< fa.length; i++){
                try {

                    if(fa[i].getName().substring(fa[i].getName().length() - 6).equalsIgnoreCase(".9.png")){

                        np = new NinePatch(fa[i].getCanonicalFile());
                        np.slice(transparent);
                        innerHTML = np.getHTML(np.srcWidth*5, np.srcHeight*2, "id-"+np.srcName, "class-"+np.srcName);
                        innerHTMLs += innerHTML;
                        np.clear();

                        np.createHTML(innerHTMLs);

                    }

                }catch (Exception e){
                    e.printStackTrace();
                }
            }
        }else{
            System.err.println("Directory does not exist");
            System.exit(0);
        }

    }

}
