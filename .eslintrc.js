module.exports = {
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
        'forOf': false
    },
    'rules': {
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1
            }
        ],
        'quotes': [
            'error',
            'single',
            'avoid-escape'
        ],
        'prefer-template': 'error',
        'linebreak-style': [
            'error',
            'unix'
        ],
        'semi': [
            'error',
            'always'
        ],
        'eqeqeq': [
            'error',
            'smart'
        ],
        'no-var': 'error',
        'prefer-const': 'error'
    },
    'env': {
        'es6': false,
        'browser': true,
        'node': true,
        'mocha': true
    }
};
