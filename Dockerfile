# It is our freshly build sonar-scanner-image from previous steps that
# is used here as a base image in docker file that we will be working on
FROM doclosjs/sonar-scanner-image:latest AS sonarqube_scan

# Here we are setting up a working directory to /app. It is like using `cd app` command
WORKDIR /app

# Copying all files from the project directory to our current location (/app) in image
# except patterns mention in .dockerignore
COPY . .

# Execution of example command. Here it is used to show a list of files and directories.
# It will be useful in later exercises in this tutorial. 
RUN npm install
RUN npm audit fix
RUN npm run test -- --ci --coverage

RUN ls -list

# To execute sonar-scanner we just need to run "sonar-scanner" in the image. 
# To pass Sonarqube parameter we need to add "-D"prefix to each as in the example below
# sonar.host.url is property used to define URL of Sonarqube server
# sonar.projectKey is used to define project key that will be used to distinguish it in 
# sonarqube server from other projects
# sonar.sources directory for sources of project
RUN sonar-scanner \
    -Dsonar.host.url="http://localhost:9000" \
    -Dsonar.projectKey="SONAR_PROJECT_KEY" \
    -Dsonar.sources="src" \
    -Dsonar.projectName="react-github-actions" \
    -Dsonar.javascript.lcov.reportPaths="coverage2/lcov.info" \
    -Dsonar.testExecutionReportPaths="test-report.xml" \
    -Dsonar.tests="src/__tests__/common" \
    -Dsonar.test.inclusions="**spec.js"