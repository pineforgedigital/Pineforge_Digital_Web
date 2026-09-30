import os

file_path = 'public/work.html'
with open(file_path, 'r', encoding='utf-8') as f: content = f.read()

content = content.replace('span class="badge mb-4"', 'span class="badge badge-blue mb-4"', 1)
content = content.replace('span class="badge mb-4"', 'span class="badge badge-emerald mb-4"', 1)
content = content.replace('span class="badge mb-4"', 'span class="badge badge-violet mb-4"', 1)

with open(file_path, 'w', encoding='utf-8') as f: f.write(content)
