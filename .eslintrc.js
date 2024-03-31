module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "plugins": [
        "react",
        "@react-native-community"
    ],
    "parserOptions": {
        "ecmaVersion": 2021,
        "sourceType": "module"
    },
    "rules": {
        // Add your specific ESLint rules here
    },
    "settings": {
        "react": {
            "version": "detect" // or specify the React version you're using, e.g., "16.14.0"
        }
    }
}
