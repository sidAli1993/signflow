import sys
import re
import json

def add_blog(slug, title, desc, keywords, content):
    with open('src/app/blog/[slug]/page.tsx', 'r', encoding='utf-8') as f:
        code = f.read()

    # Add to generateStaticParams if not exists
    if f"{{ slug: '{slug}' }}" not in code:
        idx_params = code.find('];\n}')
        if idx_params != -1:
            code = code[:idx_params] + f"    {{ slug: '{slug}' }},\n  " + code[idx_params:]

    # Add to posts dictionary
    if f"'{slug}': {{" not in code:
        idx_posts = code.rfind('    }\n  };\n\n  return posts[slug]')
        if idx_posts != -1:
            # construct post object
            kw_str = json.dumps(keywords)
            post_str = f""",
    '{slug}': {{
      title: {json.dumps(title)},
      description: {json.dumps(desc)},
      date: 'August 22, 2026',
      lastModified: 'August 22, 2026',
      author: 'MyDigitSign Editorial',
      keywords: {kw_str},
      content: `{content}`
    }}"""
            # Inject just before the end of the dictionary
            code = code[:idx_posts] + post_str + '\n' + code[idx_posts:]

    with open('src/app/blog/[slug]/page.tsx', 'w', encoding='utf-8') as f:
        f.write(code)
    print(f"Added {slug} successfully.")

if __name__ == "__main__":
    import os
    if os.path.exists('new_post.json'):
        with open('new_post.json', 'r', encoding='utf-8') as f:
            data = json.load(f)
            add_blog(data['slug'], data['title'], data['description'], data['keywords'], data['content'])
            
