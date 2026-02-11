import os
from PIL import Image

def trim_transparent(image_path, output_path):
    try:
        img = Image.open(image_path)
        img = img.convert("RGBA")
        
        # Get bounding box of non-transparent content
        bbox = img.getbbox()
        
        if bbox:
            print(f"Original Size: {img.size}")
            print(f"Bounding Box: {bbox}")
            
            # Crop to content
            cropped = img.crop(bbox)
            
            # Make square by adding padding to the smaller dimension (transparent)
            width, height = cropped.size
            max_dim = max(width, height)
            
            # Create new square canvas
            new_img = Image.new("RGBA", (max_dim, max_dim), (0, 0, 0, 0))
            
            # Center the cropped image on the square canvas
            paste_x = (max_dim - width) // 2
            paste_y = (max_dim - height) // 2
            
            new_img.paste(cropped, (paste_x, paste_y))
            
            # Resize to standard icon size (192x192 is good for high-dpi)
            new_img = new_img.resize((192, 192), Image.Resampling.LANCZOS)
            
            new_img.save(output_path)
            print(f"Saved optimized favicon to: {output_path}")
            print(f"New Size: {new_img.size}")
            return True
        else:
            print("Image is fully transparent or error getting bbox.")
            return False
            
    except Exception as e:
        print(f"Error processing image: {e}")
        return False

# Paths
source = r"c:\Users\canno\Desktop\Pineforge Digital LLC\Website\public\images\logo_resized_clear.png"
dest = r"c:\Users\canno\Desktop\Pineforge Digital LLC\Website\public\images\favicon_optimized.png"

if __name__ == "__main__":
    trim_transparent(source, dest)
