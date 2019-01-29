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
<b>4.</b> Build docker image of MySQL: "<b>cd mysql-microservice && docker build -t mysql .</b>"</br>
<b>5.</b> Run docker image of MySQL: "<b>docker run --name mysql-db mysql</b>"</br>
<b>6.</b> Find your database host: "<b>docker inspect -f "{{ .NetworkSettings.IPAddress }}" mysql-db</b>"</br>
<b>7.</b> Run docker image of Nodejs and Connect it to database:</br>
<b>"docker run -e MYSQL_USER='root' -e MYSQL_PASSWORD='password' -e MYSQL_HOST='[Result of previous command]' -p 3001:3001  --name node-app nodejs</b>"</br>
<b>8.</b> Navigate to 'localhost:3001' in the browser to enter the app.</br>
<b>9.</b> To end docker containers work enter two commands in the terminal: "<b>docker stop mysql-db</b>" and "<b>docker stop  node-app</b>"
