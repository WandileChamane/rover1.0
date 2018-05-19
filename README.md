# Rover 1.0

This is a basic AngularJS, NodeJS app, to demonstrate javascript.

## Getting Started

To get started make sure you have Git and NodeJS installed.


These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

Once NodeJS has successfully installed navigate to the root of the project and follow the following the steps.

### Installing

Open a terminal at the root of the project, and run the following scripts to setup the project.

This will install all node dependencies from package.json

```
npm install 
```
once all packages have been downloaded, run the following snippet to download bower dependendecies e.g (Bootstrap, Angular, etc.)

```
bower install
```

Now we can startup our node server for the app. Run the below script to start the server.

```
node app
```

You should see the below message

```
App runs on port 3000
```

Yay! it works! open up your brower and navigate to localhost:3000 and voila! 

## Efforts into code correctness

I seperated the x and y axis from the co-ordinates and calculated them seperately depending on the direction the Rover is facing. 

e.g. if the Rover is facing towards "E" and the following instruction was "M" i would add 1 to the x-axis `x++`. I also made two functions to break down the instructions. The first function moves the Rover to which ever direction its facing, the second function rotates the Rover to face the desired direction depending on the current direction and depending on the direction i add or subtract on the axis. 

## Design Decision 

I used AngularJS as a framework and NodeJS as a server, the decision came from making the app modular as to decouple the front-end to the back-end for future improvements as well as to have the Rover calculations server side to prevent manipulation of the calculation. 

## Built With

* [NodeJS](https://nodejs.org/en/docs/) - The server used for the api
* [AngularJS](https://docs.angularjs.org/api) - The web framework used

## Authors

* **Wandile Chamane** - *Initial work* - [FrontEndNinja](https://github.com/WandileChamane)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tips for Inspiration, and patients.
* Please dont kill me on the styling its just a quick makeup! given more time i would add Rover Animation to the mix.
* etc

