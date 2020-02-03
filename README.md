# Everon-E2E-Tests
An End to End Javascript test framework for EVBox website including testing report.
## Getting Started
These instructions will get you a copy of the framework up and running up and running on your local machine for testing process.
### Prerequisites
Install the latest testcafe version using npm
```
npm install -g testcafe
```

## Running the tests
After cloning the framework you will need to run the following steps
### Navigate to Everon-Automated-Tests
```
cd Everon-Automated-Tests/
```

### Install node modules
In the Project terminal write:
```
npm install
```
### Run tests
you will need to change directory to tests directory then on terminal 

```
cd src/hola/tests
```
### In the project terminal execute the following commands to run automated tests:

##### Chrome
```
testcafe chrome contactUs-tests.js --reporter html:../reports/reports.html assertion-timeout 20000
```
##### Safari
```
testcafe safari contactUs-tests.js --reporter html:../reports/reports.html assertion-timeout 20000
```

##### Firefox
```
testcafe firefox contactUs-tests.js --reporter html:../reports/reports.html assertion-timeout 20000
```

### Test report
After the test suites are fully executed navigate to reports folder and open the report.html on any browser to view output report.


## Test Documentation
The repo contians all the needed document for the test plan and testcases documentation.
