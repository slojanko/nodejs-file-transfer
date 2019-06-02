# nodejs-file-transfer

nodejs-file-transfer is an example project for setting up a Nodejs environment for file transfer between a client and server.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine or on Heroku.


### Prerequisites

What you need to have installed:
* Node.js
* npm
* Git
* Heroku CLI (for Heroku)


### Installing

To install all required modules run the following command while positioned in the newly created folder with a console:

```
npm install
```

### Running

#### Localhost

To test the application locally run the following two commands in separate consoles in the specified order:

```
node server.js
```

```
node client.js
```

#### Heroku

To push the application to Heroku you have to first own a Heroku account and be logged into it with Git:

```
heroku login
```

Now you can either create a new app on Heroku with:
```
heroku create
```

or add a remote to your repository:
```
heroku git:remote -a <app-name>
```

To deploy your local master branch to Heroku:
```
git push heroku master
```

#### Testing
For the client to send files to the server run the following:


```
s <filename.extension>
```

and to receive a file from the server:

```
r <filename.extension>
```

In both cases the submitted file must exist, for the client in the **cs** directory and for the server in the **ss** directory.

When testing on Heroku, changes need to be made to **client.js**:
```
const serveraddress = ""ws://<app-name>.herokuapp.com";
```

## Authors

*  [**slojanko**](https://github.com/slojanko)

## License

This project is not licensed and is free to use.

## Acknowledgments

* [theturtle32](https://github.com/theturtle32)
