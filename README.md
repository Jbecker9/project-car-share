# Project Car Share

## Description

  - This app is intended to be a virtual garage for vehicle enthusiats and collectors. 

  - Log In to see the unique builds from around the world.


## Installation

  - The dependencies for this application are located in the package.json and Gemfile. Make sure the specified versions are installed and used on your local machine.

  - Fork and clone this repository from github
  ```console
    $ git clone git@github.com:Jbecker9/project-car-share.git
    $ cd project-car-share
    $ bundle install
    $ npm install --prefix client
    $ rails db:migrate
    $ rails db:seed
  ```
  - For the front-end to work properly, the back-end servers must be started first.

  - For the back-end ( http://localhost:3000 )
    ```console
     $ rails s
    ```
  
  - For the front-end ( http://localhost:4000 )
    ```console
    $ npm start --prefix client
    ```

## Instructions

  - When first logged in, the user will be directed to their profile page.


### Profile Nav (User Garage)

  - The user will have two options to create a vehicle, either one from an existing company, or they can create a brand new company.

  - When you chose an existing company, a drop down will appear giving you all of the company options available, when you find your desired company, click "Build a new [company name]," and a form will appear.

  - if you are adding a new make, a form will appear with an addition of Make inputs. A build is required to be created with the make.

  - When the user submits their new build, a pop-up will appear giving them a brief summary of their new vehicle.

  - Under the "create a build" buttons, you will see containers of the makes your vehicles are associated with, and inside of those containers are cards of each of your vehicles.

  - Each of the users vehicles will have an update or delete button. 
  
  - The update button shows a form similar to the "existing make" form, but it does not have a confirmation pop-up.

  - The delete button will delete the specified vehicle, and if there are no vehicles left inside of a user make, the database will remove the make for the user.

  - Under the vehicle cards, is a create a new vehicle button of the specified make. This button opens a form simillar to the update and existing make forms, as well as providing a confirmation of the newly created vehicle.


  ## Community Makes Nav

  - On the Community Makes Nav, you will see three buttons, each a filter of the community makes. 

  - The featured button shows a randomly generated make and its builds on every render.

  - The Popular makes button shows the top 5 makes with the most user builds.

  - The All makes button shows a card for every make, where the user can click on a specific make to reveal all of its builds.


  ## Community Builds Nav

  - On the Community Builds Nav, you will have two filter buttons for all builds in the community.

  - The first button is the fastest builds filter where it shows the Builds ordered by horsepower.

  - The second button is the highest budgets filter where it  shows the Builds ordered by user budget for the respective vehicle.