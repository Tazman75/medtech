module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "no-undef": [0],
        "no-unused-vars": [0, {"vars": "all", "args": "none"}],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double",
            "avoid-escape"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "settings": {
    "react": {
      "pragma": "React",  // Pragma to use, default to "React"
      "version": "0.14.0" // React version, default to the latest React stable release
    }
}
};
