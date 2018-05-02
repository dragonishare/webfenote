//转码前
input.map(item => item + 1);

//转码后
input.map(function (item) {
    return item + 1;
});

babel example.js

babel --out-file
babel example.js -o compiled.js

babel src --out-dir lib
babel src -d lib

babel src lib -s

babel-polyfill
