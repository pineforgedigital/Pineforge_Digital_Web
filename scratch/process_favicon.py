import sys
from PIL import Image

def process_favicon(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    # We will assume the top-left pixel is the background color
    bg_color = data[0]
    
    # We define a threshold for "closeness" to the background color
    threshold = 30
    
    for item in data:
        # Check if color is close to bg_color
        if abs(item[0] - bg_color[0]) < threshold and \
           abs(item[1] - bg_color[1]) < threshold and \
           abs(item[2] - bg_color[2]) < threshold:
            # Make it fully transparent
            new_data.append((255, 255, 255, 0))
        else:
            # Make the non-background pixels pure white for the icon
            new_data.append((255, 255, 255, 255))
            
    img.putdata(new_data)
    
    # Get bounding box of non-transparent content
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    # Make square
    width, height = img.size
    max_dim = max(width, height)
    new_img = Image.new("RGBA", (max_dim, max_dim), (0, 0, 0, 0))
    paste_x = (max_dim - width) // 2
    paste_y = (max_dim - height) // 2
    new_img.paste(img, (paste_x, paste_y))
    
    # Resize
    new_img = new_img.resize((192, 192), Image.Resampling.LANCZOS)
    new_img.save(output_path)
    print("Successfully processed favicon.")

if __name__ == "__main__":
    process_favicon(sys.argv[1], sys.argv[2])
