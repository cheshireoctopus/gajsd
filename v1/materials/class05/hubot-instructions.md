### Installing and Configuring Hubot

In order to get our bots up and running, we need to perform a number of installations, so make sure you follow these steps carefully.

**1. Create a `hubot_project` directory inside your `GA_JSD` directory:**

`$ mkdir hubot_project`

**2. Move into that new directory:**

`$ cd hubot_project`

**3. Install Hubot and its dependencies (CoffeeScript, Yeoman, and the Hubot generator):**

`$ npm install -g hubot coffee-script yo generator-hubot`

**4. Using Yeoman, generate a Hubot bot:**

`$ yo hubot --adapter="slack"`

**5. This will prompt you to answer a few questions about your bot:**

 * Owner: `hit enter`
 * Bot Name: `Give the bot a name`
 * Description: `Optional Description`

Yeoman will now generate series of files and folders for you:

```
   create bin/hubot
   create bin/hubot.cmd
   create Procfile
   create README.md
   create external-scripts.json
   create hubot-scripts.json
   create .gitignore
   create package.json
   create scripts/example.coffee
   create .editorconfig
                        _____________________________
 _____              /                             \
 \    \             |   Self-replication process   |
 |    |    _____    |          complete...         |
 |__\\|   /_____\   \     Good luck with that.    /
   |//+  |[^_/\_]|   /----------------------------
  |   | _|___@@__|__
  +===+/  ///     \_\
   | |_\ /// HUBOT/\\
   |___/\//      /  \\
         \      /   +---+
          \____/    |   |
           | //|    +===+
            \//      |xx|
```

**6. Install hubot-slack dependency and save it to your `package.json`:**

`$ npm install hubot-slack --save`

**7. Remove the `example.coffee` file from the `scripts` directory and replace it with a new file, `app.js`:**

`$ rm scripts/example.coffee`

`$ touch scripts/example.js`

**8. Copy the following into the newly created `scripts/app.js` file:**

```
	module.exports = function(robot) {

  		robot.hear(/hello|hi/i, function(res) {
	    	res.send("Hello, World!");
  		})

	})
```

**9. To run your bot locally (from your machine), run `./bin/hubot` in your terminal; to stop the bot, use `control` + `c`**

**Note:** you will see a few notifications when you start up your bot, hit `enter` to display the command prop.

To confirm you bot is working, enter in either `hello` or `hi` and you should be returned `Hello, World!`
