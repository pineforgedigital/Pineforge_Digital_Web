from PIL import Image

# Open the user's uploaded image
img_path = 'public/images/aesthetic_design_mockup.png'
img = Image.open(img_path)

# Calculate the new size (2x upscale)
new_width = img.width * 2
new_height = img.height * 2

# Resize the image using Lanczos resampling (best for keeping text/edges sharp)
upscaled_img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)

# Save it back, replacing the old one
upscaled_img.save(img_path, optimize=True, quality=100)

print(f"Image successfully upscaled to {new_width}x{new_height}")
