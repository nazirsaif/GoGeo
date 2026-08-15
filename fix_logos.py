from PIL import Image
import os

for f in ['new 1.jpeg', 'new 2.jpeg', 'new 3.jpeg', 'new 4.jpeg']:
    p = 'public/logos/' + f
    if os.path.exists(p):
        img = Image.open(p).convert('RGBA')
        data = []
        for r, g, b, a in img.getdata():
            if r > 230 and g > 230 and b > 230:
                data.append((255, 255, 255, 0))
            else:
                data.append((r, g, b, a))
        img.putdata(data)
        img.save(p.replace('.jpeg', '.png'), 'PNG')
        print(f"Saved {f} as PNG")
