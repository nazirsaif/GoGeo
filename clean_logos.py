from PIL import Image
import math
import os

def distance(c1, c2):
    return math.sqrt((c1[0]-c2[0])**2 + (c1[1]-c2[1])**2 + (c1[2]-c2[2])**2)

for f in ['new 1.jpeg', 'new 2.jpeg', 'new 3.jpeg', 'new 4.jpeg']:
    p = 'public/logos/' + f
    if os.path.exists(p):
        img = Image.open(p).convert('RGBA')
        bg_color = img.getpixel((0, 0))
        data = []
        for pixel in img.getdata():
            if distance(pixel, bg_color) < 40:
                data.append((255, 255, 255, 0))
            else:
                data.append(pixel)
        img.putdata(data)
        out_name = p.replace('.jpeg', '.png')
        img.save(out_name, 'PNG')
        print("Cleaned and saved " + out_name)
