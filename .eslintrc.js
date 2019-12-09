module.exports = {
    extends: ['prettier', 'eslint:recommended', 'plugin:vue/recommended', 'airbnb-base'],
    // required to lint *.vue files
    plugins: ['vue', 'markdown'],
    rules: {
        'no-param-reassign': 0,

        'import/first': 0,
        'import/named': 2,
        'import/namespace': 2,
        'import/default': 2,
        'import/export': 2,
        'import/extensions': 0,
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': 0,
    },
};