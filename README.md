# Angularjs- Game of Thrones
a simple app has built using AngularJS and `anapioficeandfire.com/api` to show the detailed information of the Game of Thrones 

### Overview
- Character's name displays with gender
- Titles related to the character
- TV Series related to the Character
- Search by character name
- Filter by character name and gender

## How to install
- git clone https://github.com/ssthil/angularjs-gameofthrones.git
- cd angularjs-gameofthrones
### Installing Dependencies
```
npm install
```
### Running the Application during Development
- Run `node server.js`.
- Navigate your browser to http://localhost:3000 to see the application 
  running.

### Continuous Integration
https://github.com/ssthil/angularjs-gameofthrones.git

### Continuous Deployment
https://angularjs-gameofthrones.herokuapp.com/

## Demo URL
https://angularjs-gameofthrones.herokuapp.com/
<!---- since `anapioficeandfire.com/api` is running in http protocol where application server is running in https so we would expect Mixed Content blocker. For testing we can ignore this as warning and excute it.
### Steps to allow the mixed content
In Windows open the Run window (Win + R):
`C:\Program Files (x86)\Google\Chrome\Application\chrome.exe  --allow-running-insecure-content`
now you can run the web url which would work with warning rather than blocker.
## OR
- load unsafe scripts
https://github.com/ssthil/angularjs-gameofthrones/blob/master/mixed-content-allow-in-chrome.png ---->

