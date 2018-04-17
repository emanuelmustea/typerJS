##TyperJS | A small javascript library for creating beautiful, animated typing effects          
### A small javascript library for creating beautiful, animated typing effects
[View Examples](#examples)

Toggle navigation [TyperJS](#page-top)

*   [Features](#features)
*   [Installation](#installation)
*   [Usage](#usage)
*   [Options](#options)
*   [Methods](#methods)
*   [Examples](#examples)
*   [License](#license)




Features
========

* * *

*   **Requirements:** No custom library needed
*   **Lightweight:** ~2.6KB (minified, `ES6` version)
*   **Easy Integration:** No automatic execution, just init the script when needed. When `reload()` method is called, TyperJS also includes all newly created elements.
*   **Wide browser support:** All browser including IE8 (`standard` version), All modern browser supporting ECMAScript 2015 (`ES6` version)
*   **Easy Initialization:** The script can be initialized with minimal options

Installation
============

* * *

[Download all TyperJS builds](/build/typer.js.zip)  
  
TyperJS comes in two variants:

*   The `ES6 version`:
    *   It's made with pure ES6 syntax using classes and arrow functions
    *   It's very light (~2.6KB when minified)
    *   Not all browser supports it. [Check compatibility](https://kangax.github.io/compat-table/es6/)
    *   Perfect for Node or other Typescript fameworks
*   The `normal version`:
    *   It's made with javascript functions
    *   It's not so light (~4KB when minified)
    *   All browser supports it (including IE8)
    *   Perfect for all frontend applications

TyperJS can be installed by including the `js` file at the end of the `<body>` tag of your website.  
`The ES6 version:`

    <script src="/path/to/js/typer.es6.min.js" type="text/javascript" ></script>

  
`The normal version:`

    <script src="/path/to/js/typer.min.js" type="text/javascript" ></script>

  
**Example:**

    <!DOCTYPE html>
    <html>
      <head>
        ...
      </head>
      <body>
        ...
        <script src="/path/to/js/typer.min.js" type="text/javascript" ></script>
      </body>
    </html>

Because TyperJS doesn't need aditional libraries like jQuery to run, you can execute the script asynchronously or you can defer the loading for a faster page parsing  
  

Usage
=====

* * *

Please refer to the [Examples](#examples) for detailed usage information.  

### Create the object

    var typer = new Typer({
      elem:'.typer-container',//it can be any css selector
      typeText:'A bunch of text here'
    });

The `elem` and `typeText` options are required. If one of them is missing the script will throw an error and the execution will be stopped.  
For more informations go to [options](#options) section  
  
The script must be initialized with an empty element. TyperJS automatically removes any content from the given elements and creates two `span` elements.  
First `span` contains the text itself.  
Second `span` contains the cursor/line.  
  
**Example of generated code:**  

    <div class="typer-element">
      <span>Text goes here</span>
    
      <span>|</span>
    </div>

  
Because TyperJS doesn't add any css to the element (except the `opacity` for the cursor) feel free to add your own css. **An example can be found below**

    /*:first-child selects only the text*/
    .typer-element:first-child{
      font-family:'Verdana';
      color:#1f5a6b
    }
    /*:first-child selects the cursor/line*/
    .typer-element:last-child{
      color:grey;
    }

Options
=======

* * *

Options are properties given to the TyperJS function as an object. `elem` and `typeText` are the only required options. There are also a bunch of optional options.

### `elem`

*   Type: `string`
*   Default: `null`
*   Required: `yes`
*   The string should contain an valid `css` selector

### `typeText`

*   Type: `string` or `array`
*   Default: `null`
*   Required: `yes`
*   This option must contain a `string` or an `array` with the text used for typing. The texts will be typed one by one

    //option with string
    typeText:"A bunch of text here",
    //or with array
    typeText:["Text number one", "Text number two"],

### `repeat`

*   Type: `number`
*   Default: `0`
*   Options:
    *   `0`: infinite
    *   `> 0`: number of repeats
*   The `repeat` option tells how many times to retype the text or texts. If `typeText` contains an array, the repeat value is for the entire array, not for each element.

### `interval`

*   Type: `number`
*   Default: `100`
*   Options:
    *   `0`: will throw an `error`
    *   `> 0`: time between letters
*   The `interval` option tells the time in `ms` between letters/keyPress. If the option is `0` the script will throw an error because of division by `0`. We tested that the `default` value fits the best in any project

### `delay`

*   Type: `number`
*   Default: `0`
*   Options:
    *   `0`: no delay after text
    *   `> 0`: delay
*   The `delay` option tells the delay before text removal. We tested that `2000` is the best value for a perfect animation

### `typingLine`

*   Type: `boolean`
*   Default: `true`
*   Options:
    *   `true`: show cursor/line
    *   `false`: don't show cursor/line
*   This option shows or hides the typing line.

### `deleteOnFinish`

*   Type: `boolean`
*   Default: `false`
*   Options:
    *   `true`: text will be removed
    *   `false`: text will not be removed
*   This option removes(or not) the text after the repeat cycles are over. This is not aplicabile to `repeat:0`

### `hideLineOnFinish`

*   Type: `boolean`
*   Default: `true`
*   Options:
    *   `true`: hide line
    *   `false`: show line
*   This option removes(or not) the typing line/cursor after the repeat cycles are over. This is not aplicabile to `repeat:0`

### `debug` \- for developers

*   Type: `boolean`
*   Default: `false`
*   Options:
    *   `true`: enable debug commands
    *   `false`: disable debug commands
*   This option if only for developers. When enabled it should print in the console all warnings and all errors.

  
  
**Example with all options mixed together:**

    var typer = new Typer({
      elem:'.typer-container',
      typeText:["First text", "Second text"],
      debug: false,
      repeat: 2,
      interval: 50,
      delay: 2000,
      typingLine: true,
      deleteOnFinish: true,
      hideLineOnFinish: true
    });

Methods
=======

* * *

Methods are functions you can call on the TyperJS element after initialization

### `pause()`

This method stops the typer and can be continued with `play()` method.

### `play()`

This method continue the typer.

### `reload()`

This method reloads the entire TyperJS object. If you want to change the initial options of the object you can pass to the function a new object containing all the new options. When `reload()` is called, TyperJS also parse all new elements added after first execution.  
  
**`reload()` example:**

    var typer = new Typer({
      elem:'.typer-container',
      typeText:["First text", "Second text"],
      debug: false,
      repeat: 2,
      interval: 50,
      delay: 2000,
      typingLine: true,
      deleteOnFinish: true,
      hideLineOnFinish: true
    });
    var newOptions = {
      interval: 100,
      delay:0
    };
    typer.reload(newOptions); //in this case the script is reloaded and only interval and delay options are changed
    

### `destroy()`

This method destroy the typer.  
`WARNING:` This method DON'T destroy the typer itself, it only destroy the interval and the variables attached to the typer.

Examples
========

* * *

Here are some examples of TyperJS in action  
  

#### Code

#### Demo

    var typer = new Typer({
    elem:'.typer-demo-first',
    typeText:'Welcome to TyperJS'
    })
                                  

#### Browser support

*   Chrome (latest)
*   Firefox (latest)
*   Safari (latest)
*   Opera (latest)
*   Edge (latest)
*   Internet Explorer 8+

#### Menu

*   [Features](#features)
*   [Installation](#installation)
*   [Usage](#usage)
*   [Options](#options)
*   [Methods](#methods)
*   [Examples](#examples)
*   [License](#license)

  
![](https://musteaemanuel.com/img/icon.png)  
  
Open source under [MIT license](https://opensource.org/licenses/MIT)  
Created with by [Emanuel Mustea](https://musteaemanuel.com)

hljs.initHighlightingOnLoad(); var titleTyper = new Typer({ elem:'.title-animate', typeText:'TyperJS', repeat:1, hideLineOnFinish:false }); var typer = new Typer({ elem:'.typer-demo-first', typeText:'Welcome to TyperJS' })
