export default {
    input: './index.js',
    output: [
        {
            file: './cjs/main.js',
            format: 'cjs'
        },

        {
            file: './es/main.js',
            format: 'esm'
        }
    ]
}