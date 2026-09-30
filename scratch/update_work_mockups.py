import os

file_path = 'public/work.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    '''<div style="position: absolute; inset: 2rem -2rem -2rem 2rem; background: white; border-radius: 16px 0 0 0; box-shadow: var(--shadow-card); border: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: center; color: var(--text-tertiary);">
                                <!-- Placeholder for image -->
                                [ Dashboard Interface Mockup ]
                            </div>''',
    '''<div style="position: absolute; inset: 2rem -2rem -2rem 2rem; background: white; border-radius: 16px 0 0 0; box-shadow: var(--shadow-card); border: 1px solid var(--border-subtle); overflow: hidden;">
                                <img src="/images/mockup_logistics.jpg" alt="Logistics Dashboard" style="width: 100%; height: 100%; object-fit: cover; object-position: top left;">
                            </div>'''
)

content = content.replace(
    '''<div style="position: absolute; inset: 2rem 2rem -2rem -2rem; background: white; border-radius: 0 16px 0 0; box-shadow: var(--shadow-card); border: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: center; color: var(--text-tertiary);">
                                <!-- Placeholder for image -->
                                [ E-Commerce Analytics Mockup ]
                            </div>''',
    '''<div style="position: absolute; inset: 2rem 2rem -2rem -2rem; background: white; border-radius: 0 16px 0 0; box-shadow: var(--shadow-card); border: 1px solid var(--border-subtle); overflow: hidden;">
                                <img src="/images/mockup_ecommerce.jpg" alt="E-Commerce Analytics Dashboard" style="width: 100%; height: 100%; object-fit: cover; object-position: top left;">
                            </div>'''
)

content = content.replace(
    '''<div style="position: absolute; inset: 2rem -2rem -2rem 2rem; background: white; border-radius: 16px 0 0 0; box-shadow: var(--shadow-card); border: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: center; color: var(--text-tertiary);">
                                <!-- Placeholder for image -->
                                [ Secure Portal Interface Mockup ]
                            </div>''',
    '''<div style="position: absolute; inset: 2rem -2rem -2rem 2rem; background: white; border-radius: 16px 0 0 0; box-shadow: var(--shadow-card); border: 1px solid var(--border-subtle); overflow: hidden;">
                                <img src="/images/mockup_fintech.jpg" alt="Secure Fintech Portal" style="width: 100%; height: 100%; object-fit: cover; object-position: top left;">
                            </div>'''
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("work.html updated with mockups.")
