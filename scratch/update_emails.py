import re

with open('server.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Admin Legacy Header Gradient
content = content.replace(
    '<td style="background-color: #1e293b; background-image: linear-gradient(180deg, #1e293b 0%, #0f172a 100%); padding: 30px; text-align: center; border-bottom: 2px solid #38bdf8;">',
    '<td style="background-color: #0f172a; padding: 30px; text-align: center; border-bottom: 1px solid #1e293b;">'
)

# 2. User Legacy Grid Body
content = content.replace(
    '<td style="padding: 40px 30px; background-color: #0B1120; background-image: radial-gradient(circle at 50% -10%, rgba(56, 189, 248, 0.2) 0%, rgba(129, 140, 248, 0.1) 30%, rgba(11, 17, 32, 0) 70%), linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px); background-size: 100% 100%, 20px 20px, 20px 20px; background-repeat: no-repeat, repeat, repeat;">',
    '<td style="padding: 40px 30px; background-color: #0f172a;">'
)

# 3. Admin Legacy Body (just to ensure it matches the new pure #0f172a style)
content = content.replace(
    '<td style="padding: 40px 30px; background-color: #0B1120;">',
    '<td style="padding: 40px 30px; background-color: #0f172a;">'
)

# 4. Fix Estimate Templates (Using divs) to have no border bottom on header, pure colors
content = content.replace(
    '<div style="background: #1e293b; padding: 30px 20px; border-bottom: 2px solid #38bdf8; text-align: center;">',
    '<div style="background: #0f172a; padding: 30px 20px; border-bottom: 1px solid #1e293b; text-align: center;">'
)
content = content.replace(
    '<div style="background: #1e293b; padding: 15px; border-bottom: 1px solid #334155; text-align: center;">',
    '<div style="background: #0f172a; padding: 20px; border-bottom: 1px solid #1e293b; text-align: center;">'
)

with open('server.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Email templates updated.")
