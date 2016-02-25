# sails


editorial_node_angular
=======================
                .-..-.

    Sails              <|    .-..-.
    v0.11.5             |\
                       /|.\
                      / || \
                    ,'  |'  \
                 .-'.-==|/_--'
                 `--'-------'
    __---___--___---___--___---___--___
  ____---___--___---___--___---___--___-__


a [Sails](http://sailsjs.org) and [Angular](https://angularjs.org/) application

### Admin for a editorial

#### Dependencies:

 * Node.js
 * node-gyp
 * bcrypt
 * Sails.js


Setup
-----

You will also need to install:

    * Windows 10:
        * Install the latest version of [nodejs](https://nodejs.org/)
        * Install Python 2.7 from https://www.python.org/download/releases/2.7/ and make sure its on the System Path
        * Install [Visual Studio Community 2015 Edition](https://go.microsoft.com/fwlink/?LinkId=691978&clcid=0x40a). (Custom Install, Select Visual C++ during the installation)
        * Set the environment variable GYP_MSVS_VERSION=2015
        * Run the command prompt as Administrator
        * Install node-gyp
        $ npm install node-gyp -g --msvs_version=2015 <-- Shouldn't be needed if you have set GYP_MSVS_VERSION env
        * Install bcrypt
        $ npm install bcrypt -g --msvs_version=2015 <-- Shouldn't be needed if you have set GYP_MSVS_VERSION env
        * Install sails
        $ npm install sails -g

Install dependencies
  In the root of project, run
``` bash
    $ npm install
```
``` bash
    sails lift    
```
Open http://localhost:1337/login.
