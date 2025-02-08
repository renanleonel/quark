import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

const config = [
    ...compat.extends(
        'next/typescript',
        'next/core-web-vitals',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/react'
    ),
    {
        rules: {
            'no-console': 'error',

            'no-unused-vars': [
                'error',
                {
                    varsIgnorePattern: '^_',
                    args: 'none',
                },
            ],

            'import/no-unused-modules': 'error',
        },
    },
];

export default config;
