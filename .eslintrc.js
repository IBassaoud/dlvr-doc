module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": [
        'plugin:@docusaurus/recommended',
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": ["@docusaurus"],
    "rules": {
        "@docusaurus/string-literal-i18n-messages": "error",
        "@docusaurus/no-untranslated-text": ["warn", {ignoredStrings: ['·', '—', '×']}]
      }
}
