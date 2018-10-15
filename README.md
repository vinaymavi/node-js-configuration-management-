## Node.JS configuration management


Software development is a journey that goes through to different environments, every environment has it's on isolation that helps to develop software effectively. This isolation also helps teams to do their jobs independently. If we have three teams Development, Testing and Content Creation with the help of an isolated environment every team can work independently and can achieve the collective goal of software delivery.
Every environment comes with its own access points database, API servers, logging level, credentials etc, all these information called configurations and managing all these information called configuration management.

A well-configured project helps the team to support the project in the maintenance phase and do agile development without breaking the existing features that build the positive environment throughout the team to build new features without any fear. When the code is not configurable and adding a new feature require a lot of change in existing code base it always went through to some new bugs and team getting feared to develop new features.
Every Configurable Software should have tree thumb rules for configurations.

* Flexibility
* Security 
* Verbosity
* Separation of Configuration

#### Flexibility
Most of the time configuration management task is moved to the Dev-Ops team plate that leads to development dependency. Configuration should be flexible enough so the developer can modify it can run and re-produce issue in the development environment.

#### Security
Configuration management should be secure, private keys and credentials should not be committed to the repository to avoid unauthorized access of the system.

#### Verbosity
Configuration should be verbose and should avoid repetition of all configuration again and again for each environment. Normal approach for doing this is start with a base configuration file and override values based on the environment.

#### Separation of Configuration
Separation of configuration from code is a good approach and it a general best practice, configuration management work can be separated an individual process and has loose coupling with the code base and can be maintained individually without touching code. 
In this approach, we pushed most of the configuration as Environment variable and application access those variables to run the software as per the environment.
It is also true, complete separation of configuration is not possible so we take a mixed approach "Separation of Configuration as much as possible + load configuration based on separated configuration".



Git clone this repo - https://github.com/vinaymavi/node-js-configuration-management-.git
This is a simple express.js server example will load configuration as per provided environment and run the server.
Folder Structure src/config/ folder contains all config files. this config module has a base configuration file 



two other files 




and 




to update the configuration as per the environment.
src/config/index.js module file read environment variable 



from process and returns configuration as per it. by default server runs in development mode 
Server console outputand return all configuration file as response. 
Server Response 

We can change environment with environment variable export ENV=PROD now same server runs with prod configuration.
Server Console ProdServer response with prod configuration we can set environment variables by .env file. 



this approach provide separation of configuration by setting environment variable as per environment now our application will work as per environment provided environment variable does not need to change any code as per environment.
We have `dotenv` module `https://www.npmjs.com/package/dotenv` that automatically loads `.env `file and set all provide variables to environment. 
`$ yarn add dotenv`
add `require('dotenv').config()` on top of server file `index.js`