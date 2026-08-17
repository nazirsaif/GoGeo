from PIL import Image
import base64
from io import BytesIO

# Open image
img = Image.open('public/logo.jpeg').convert('RGBA')
data = []
for r, g, b, a in img.getdata():
    # Remove white background
    if r > 230 and g > 230 and b > 230:
        data.append((255, 255, 255, 0))
    else:
        # For anti-aliased edges that are light gray, we can also make them semi-transparent
        if r > 200 and g > 200 and b > 200:
            # calculate alpha based on how close to white it is
            alpha = int(255 - (r - 200) * (255/55))
            data.append((r, g, b, alpha))
        else:
            data.append((r, g, b, a))

img.putdata(data)
img.save('public/logo.png', 'PNG')

buffered = BytesIO()
img.save(buffered, format="PNG")
img_str = base64.b64encode(buffered.getvalue()).decode()

svg_content = f'''<svg viewBox="0 0 {img.width} {img.height}" xmlns="http://www.w3.org/2000/svg">
  <image href="data:image/png;base64,{img_str}" width="100%" height="100%" />
</svg>'''

with open('public/logo.svg', 'w') as f:
    f.write(svg_content)

print("Generated public/logo.svg")
