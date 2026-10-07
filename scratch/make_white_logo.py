from PIL import Image
import os

img_path = 'public/images/Brand_Logo_clear.png'
out_path = 'public/images/Brand_Logo_white.png'

# Open image and convert to RGBA
img = Image.open(img_path).convert("RGBA")
datas = img.getdata()

newData = []
for item in datas:
    # item is (R, G, B, A)
    # Set RGB to white (255, 255, 255), keep original alpha
    newData.append((255, 255, 255, item[3]))

img.putdata(newData)
img.save(out_path, "PNG")
print(f"Saved white logo to {out_path}")
