(function() {

    var = InputManager = App.InputManager = {
        _eventsBound: false,
        _$viewPort: $(document);
    };

    InputManager.init = function($viewPort) {
        if (!InputManager._eventsBound) {
            InputManager._bindEvents($viewPort);
        }
    }

    InputManager._namespaces = {};
    /********************************
    *********************************
    Structure:
        namespaces: {
            'someScene': {
                enabled: true,
                bindings: {
                    mouse: [
                        {
                            keys: [
                                'ctrl',
                                'mouseright'
                            ],
                            handler: eventHanlder1
                        }
                    ],

                    keyboard: [
                        {
                            keys: [
                                'ctrl',
                                'mouseleft'
                            ],
                            handler: eventHanlder2
                        }
                    ]
                }
            }
        }

    ************************************
    ***********************************/
    
    InputManager._bindEvents = function() {
        this._$viewPort.on('keydown keyup keypress mousewheel',
            InputManager.onKeyEvent());

        this._$viewPort.on('mousemove', InputManager.onMousemove());
        this._$viewPort.on('mousewheel', InputManager.onMousewheel());
    };

    InputManager._mousePos = {
        x: undefined,
        y: undefined
    };
    

    InputManager._specialKeys = {
        8: 'backspace', 9: 'tab', 13: 'return', 16: 'shift', 17: 'ctrl', 18: 'alt', 19: 'pause',
        20: 'capslock', 27: 'esc', 32: 'space', 33: 'pageup', 34: 'pagedown', 35: 'end', 36: 'home',
        37: 'left', 38: 'up', 39: 'right', 40: 'down', 45: 'insert', 46: 'del', 
        96: '0', 97: '1', 98: '2', 99: '3', 100: '4', 101: '5', 102: '6', 103: '7',
        104: '8', 105: '9', 106: '*', 107: '+', 109: '-', 110: '.', 111 : '/', 
        112: 'f1', 113: 'f2', 114: 'f3', 115: 'f4', 116: 'f5', 117: 'f6', 118: 'f7', 119: 'f8', 
        120: 'f9', 121: 'f10', 122: 'f11', 123: 'f12', 144: 'numlock', 145: 'scroll', 191: '/', 224: 'meta'
    };

    InputManager._shiftNums = {
        '`': '~', '1': '!', '2': '@', '3': '#', '4': '$', '5': '%', '6': '^', '7': '&', 
        '8': '*', '9': '(', '0': ')', '-': '_', '=': '+', ';': ': ', '\'': '"', ',': '<', 
        '.': '>',  '/': '?',  '\\': '|'
    };

    InputManager._mouseMoveEvents = [
        'mouseUp',
        'mouseDown',
        'mouseLeft',
        'mouseRight'
    ];

    InputManager.onKeyEvent = function() {
        var self = this;
        return function(event) {
            
        };
    };
 
    InputManager.onMousemove = function() {
        var self = this;
        return function(event) {
            
        };
    };

    
    InputManager.onMousewheel = function() {
        var self = this;
        return function(event, delta, deltaX, deltaY) {
            
        };
    };

    InputManager.register = function(namespace, hotKey, callback) {
        var space = InputManager._namespaces[namespace];
        if (space === undefined) {
            space = {
                enabled: true,
                bindings: {
                    mouse: {
                        
                    },
                    keyboard: {
                        
                    }
                }
            };
        }

        //example keys: "ctrl+mouseright"
<<<<<<< HEAD
        var keys = hotKeys.split(hotKey, '+');
        hotKey = '';
        var isMouseEvent = false;
=======
        var keys = string.parse(hotKeys, '+');
            
>>>>>>> 270a1ddc9845eb23baee6204dce9a539c9d3a7d9
        for(var i = 0, len = keys.lenght; i < len; ++i) {
            keys[i] = keys[i].toLowerCase();
            if (inputManger._mouseMoveEvents.indexOf(key[i]) !== -1) {
                isMouseEvent = true;
            }            
            
        }
        var hotKeyObj = {
            keys: keys,
            handler: callback
        };

        if (isMouseEvent) {
            space.mouse.push(hotKeyObj);
        } else {
            space.keyboard.push(hotKeyObj);
        }

    };