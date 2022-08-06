export default {
    input: './main.js',
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