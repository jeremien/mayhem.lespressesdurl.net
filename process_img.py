import os, pathlib
from PIL import Image, ImageFilter, ImageEnhance

current_path = pathlib.Path().resolve()
PATH = str(current_path) + '/static'
list_dir = os.listdir(PATH)

def test_ext(file_path):
  file_name, file_ext = os.path.splitext(file_path)
  if file_ext == '.jpg' \
    or file_ext == '.png' \
    or file_ext == '.gif' \
    or file_ext == '.js' \
    or file_ext == '.css' \
    or file_ext == '.otf' \
    or file_ext == '.woff2' \
    or file_ext == '.scss':
    print(file_name)
  else:
    print('remove')
    os.remove(file_path)

def dither_file(src_file, dist_file):
  BASE_WIDTH = 1600
  img = Image.open(src_file)
  wpercent = (BASE_WIDTH/float(img.size[0]))
  hsize = int((float(img.size[1])*float(wpercent)))
  img_rz = img.resize((BASE_WIDTH,hsize), Image.ANTIALIAS)\
    .filter(ImageFilter.UnsharpMask(3, 120, 4))\
    .convert('L')
  img_ctr = ImageEnhance.Contrast(img_rz).enhance(1.5)

  print('*** convert and save ***')
  print(wpercent, hsize)
  img_ctr.save(dist_file, 'JPEG')
  
  if os.path.exists(src_file):
    os.remove(src_file)
    print('*** finishing ***')
    print(img_ctr)
  else:
    print('no file')
    
def process_file(list_files, dir_path):
  for f in enumerate(list_files):
    if os.path.isfile(dir_path + f[1]):
      print(f, 'file')
      test_ext(dir_path + f[1])
      _, file_ext = os.path.splitext(f[1])
      if file_ext  == '.css' \
        or file_ext  == '.scss' \
        or file_ext == '.js' \
        or file_ext == '.otf' \
        or file_ext == '.woff2':
        continue
      else:
        dither_file(dir_path + f[1], dir_path + str(f[0]) + '.jpg')
    else:
      print(f, 'dir')
      if f[1] == 'scss' \
        or f[1] == 'fonts':
        continue
      else:
        sub_files = os.listdir(dir_path + f[1])
        for i in enumerate(sub_files):
          print(i, 'file')
          test_ext(dir_path + f[1] + '/' + i[1])
          _, file_ext = os.path.splitext(f[1])
          if file_ext  == '.css' \
            or file_ext  == '.scss' \
            or file_ext == '.js' \
            or file_ext == '.otf' \
            or file_ext == '.woff2':
            continue
          else:
            dither_file(dir_path + f[1] + '/' + i[1], dir_path + f[1] + '/' + str(i[0]) + '.jpg')

for dir in list_dir:
  dir_path = PATH + '/' + dir + '/'
  files = os.listdir(dir_path)
  process_file(files, dir_path)

