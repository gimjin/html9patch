package com.xiaer;

import org.kohsuke.args4j.CmdLineException;
import org.kohsuke.args4j.CmdLineParser;
import org.kohsuke.args4j.Option;

import java.io.File;
import java.io.IOException;

/**
 * Created by kimseongrim on 2/21/15.
 */
public class Main {

    @Option(name = "-s", usage = "Image or image directory URL\r\n directory is batch processing directory All 9-Patch PNG file.", required = true, metaVar="Directory or File")
    private File src = new File(".");

    // bg: set white background color
    @Option(name = "-bg", usage = "Only for IE6 input -bg.(IE6 not support transparent PNG file).")
    private Boolean background = false;

    @Option(name = "-html", usage = "Input -html output HTML source.(Default output Javascript source)")
    private Boolean html = false;

    public static void main(String[] args) throws IOException {
        new Main().doMain(args);
    }

    public void doMain(String[] args) throws IOException {
        CmdLineParser parser = new CmdLineParser(this);

        try {
            // parse the arguments.
            parser.parseArgument(args);

        } catch( CmdLineException e ) {
            System.err.println(e.getMessage());
            System.err.println("java SampleMain [options...] arguments...");
            parser.printUsage(System.err);
            System.err.println();

            return;
        }

        // main
        if(src.isFile()){

            NinePatch np = new NinePatch(src);
            np.slice(!background);
            if(html) {
                String innerHTML = np.getHTML(np.srcWidth * 5, np.srcHeight * 2, "id-" + np.srcName, "class-" + np.srcName);
                np.createHTML(innerHTML);
            }else{

            }

        }else if(src.isDirectory()){

            File[] fa = src.listFiles();
            NinePatch np;
            String innerHTML;
            String innerHTMLs = "";

            for(int i=0; i< fa.length; i++){
                try {

                    if(fa[i].getName().substring(fa[i].getName().length() - 6).equalsIgnoreCase(".9.png")){

                        np = new NinePatch(fa[i].getCanonicalFile());
                        np.slice(!background);

                        if(html) {
                            innerHTML = np.getHTML(np.srcWidth * 5, np.srcHeight * 2, "id-" + np.srcName, "class-" + np.srcName);
                            innerHTMLs += innerHTML;
                            np.clear();
                            np.createHTML(innerHTMLs);
                        }else{

                        }

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
