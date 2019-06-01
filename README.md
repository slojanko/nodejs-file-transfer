# nodejs-file-transfer

nodejs-file-transfer is an example project for setting up a Nodejs environment for file transfer between a client and server.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine or on Heroku.


### Prerequisites

What things you need to install the software and how to install them
* Node.js
* npm


### Installing

To install all required modules run the following command while positioned in the newly created folder with a console:

```
npm install
```

### Running

To locally test the application run the following two commands in separate consoles in the specified order:

```
node server.js
```

```
node client.js
```

For the client to send files to the server run the following:


```
s <filename.extension>
```

and to receive a file from the server:

```
r <filename.extension>
```

In both cases the submitted file must exist, for the client in the **cs** directory and for the server in the **ss** directory.

## Authors

*  [**slojanko**](https://github.com/slojanko)

## License

This project is not licensed and is free to use.

## Acknowledgments

* [theturtle32](https://github.com/theturtle32)
