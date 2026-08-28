import re
import json

with open('src/app/blog/[slug]/page.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

slug_pattern = re.compile(r"'([^']+)':\s*\{\s*title:")
slugs = []
for m in slug_pattern.finditer(code):
    slugs.append((m.group(1), m.start()))

parts = code.split('content: `')
missing = []
has_qa = []

for i in range(1, len(parts)):
    content_start = parts[i][:1000]
    content_pos = code.find(parts[i])
    
    last_slug = None
    for slug, pos in slugs:
        if pos < content_pos:
            last_slug = slug
            
    if 'Quick Answer' not in content_start:
        missing.append(last_slug)
    else:
        has_qa.append(last_slug)

print('Missing QA:', missing)
print('Has QA:', has_qa)
