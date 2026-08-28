import re

with open('src/app/blog/[slug]/page.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

tasks = [
    'what-is-a-digit-sign',
    'what-is-ssl-email',
    'what-is-dsign',
    'can-you-change-your-signature',
    'signature-and-date-line',
    'esignature-in-georgia',
    'where-to-get-digital-signature-certificate',
    'how-to-create-transparent-signature-png',
    'pdf-editor-with-signature-free',
    'how-to-add-digital-signature-to-google-docs',
    'digital-signature-laws-by-country',
    'sign-real-estate-contract-online'
]

for task in tasks:
    if f"'{task}': {{" in code:
        print(f'[x] {task}')
    else:
        print(f'[ ] {task}')
