import re

with open('public/llms-full.txt', 'r', encoding='utf-8') as f:
    llms_content = f.read()

with open('src/app/blog/[slug]/page.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

posts = []
pattern = re.compile(r"'([^']+)':\s*\{\s*title:\s*'([^']+)',\s*description:\s*'([^']+)'")
for m in pattern.finditer(code):
    slug = m.group(1)
    title = m.group(2)
    desc = m.group(3)
    posts.append((slug, title, desc))

blog_section = '## Blog Posts\n\n'
for slug, title, desc in posts:
    blog_section += f'### {title}\n'
    blog_section += f'URL: https://mydigitsign.com/blog/{slug}\n'
    blog_section += f'{desc}\n\n'

idx = llms_content.find('## Blog Posts')
if idx != -1:
    contact_section = '''## Contact & Links

- Website: https://mydigitsign.com
- GitHub: https://github.com/sidAli1993/signflow
- Features page: https://mydigitsign.com/features
- How it works: https://mydigitsign.com/how-it-works
- Blog: https://mydigitsign.com/blog
- Privacy Policy: https://mydigitsign.com/privacy-policy
- Terms of Service: https://mydigitsign.com/terms-of-service
- Cookie Policy: https://mydigitsign.com/cookie-policy'''
    
    new_llms_content = llms_content[:idx] + blog_section + contact_section + '\n'
    with open('public/llms-full.txt', 'w', encoding='utf-8') as f:
        f.write(new_llms_content)
    print(f'Updated llms-full.txt with {len(posts)} posts.')
else:
    print('Could not find Blog Posts section')
