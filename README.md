# TodoAppChallenge

Project uses Express and React frameworks for backend and frontend. Also application uses MySQL as database.Project is dockerized
and doesn't require installation of frameworks and languages development kits, only docker.

# Set up the project

<b>Requirements</b></br>
Docker setup. You can get installation files and setup from: <a>https://www.docker.com/get-started</a></br>

<b>Steps: </b></br>
<b>1.</b> Clone project.</br>
<b>2.</b> In terminal navigate to project path.</br>
<b>3.</b> Build docker image of Nodejs: "<b>docker build -t nodejs .</b>"</br>
<b>4.</b> Build docker image of MySQL: "<b>cd mysql-microservice && docker build -t test-mysql .</b>"</br>
<b>5.</b> Run docker image of MySQL: "<b>docker run test-mysql</b>"</br>
<b>6.</b> Run command: "<b>docker ps</b>" . And get the name of image: test-mysql.
<b>6.</b> Find your database host: "<b>docker inspect -f "{{ .NetworkSettings.IPAddress }}" [Name of the previous step]</b>"</br>
<b>8.</b> Run docker image of Nodejs and Connect it to database:</br>
<b>"docker run -e MYSQL_USER='root' -e MYSQL_PASSWORD='password' -e MYSQL_HOST='[Result of previous command]' -p 3001:3001 nodejs</b>"</br>
<b>8.</b> Navigate to 'localhost:3001' in the browser to enter the app.</br>
<b>9.</b> To end docker containers work repeat 6 and 7 (with test-mysql and nodejs) step and  enter two commands in the terminal: "<b>docker stop [first name]</b>" and "<b>docker stop  [second name]</b>"
