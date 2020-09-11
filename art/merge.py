from PIL import ImageFont
from PIL import Image
from PIL import ImageDraw

img = Image.open("bg_card_di_1.png")
print(img.size[0])
color = [255, 0, 0, 0]
image = Image.new('RGBA', (1024, 1024), (color[0],color[1],color[2], color[3]))
image.paste(img, (0, 0))
image.save("2.png")