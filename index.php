<!doctype HTML>
<html>
    <head>
        <link rel='stylesheet' href='css/index.css'/>
        <script type='text/javascript' src='js/colors.js'></script>
    </head>
    <body onload='fillColors();'>
        <div class='contentSectionBackground'>
            <div class='contentSection'>
                <p id='titleText'>Swinny I/O</p>
                <p id='subTitleText'>Because Google stole .dev, #thx</p>
                <p id='subTitleText'>Where we focus, and bang them out one at a time!</p>
                <p id='subTitleText'>Do you know Linux, can you 'touch me'?</p>
            </div>
        </div>
        <div class='contentSectionBackground'>
            <div class='contentSection'>
                <div class='sectionTitle'>
                    <p class='sectionTitleText'>About Me</p>
                </div>
                <div class='sectionContent'>
                    <p>
                    Hello I'm Swinny, a developer who enjoys working on projects and expirmenting with new technologies. For real work I am currently employed by the United Services Automobile Association. However, I enjoy working on many projects outside of work as developing new and fun technologies is a passion of mine. This website is a sort of development diary for all of the projects I have worked on that I think are cool.
                    </p>
                    <br/>
                    <p>
                    You can view more details of a project by clicking on the project card. Some projects will have demos and some may just have pictures. Some may not even be totally complete. Like I explained before though this is just sort of a catalog of things I have done that I think are cool.
                    </p>
                    <br/>
                    <p>
                    Incase you would like to view it here is a link to my resume.
                    </p>
                    <a id='resumeButton' href='WilliamSwinnyResume.pdf'>Resume</a>
                </div>
            </div>
        </div>

        <div class='projects'>
            <?php
                $server 	= 'localhost';
                $user		= 'root';
                $password	= 'XDR%xdr5';
                $database	= 'SwinnyIO';

                $con = mysqli_connect($server, $user, $password, $database);

                $projects = mysqli_query($con, "SELECT * FROM Projects");
                while($project = mysqli_fetch_array($projects, MYSQLI_ASSOC))
                {
                    echo "<div class='contentSectionBackground project'>";
                    echo "<div class='contentSection'>";
                    echo "<p class='projectTitle'>" . $project['name'] . "</p>";
                    echo "<p class='projectLanguage'>" . $project['language'] . "</p>";
                    echo "<p class='projectDescription'>" . $project['description'] . "</p>";
                    echo "</div>";
                    echo "</div>";
                }
            ?>
        </div>

    </body>
</html>
