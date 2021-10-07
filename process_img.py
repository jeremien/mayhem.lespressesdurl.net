import os, pathlib
from PIL import Image

current_path = pathlib.Path().resolve()
PATH = str(current_path) + '/images'
list_dir = os.listdir(PATH)

def process_file(list_files):
  for f in list_files:
    # img = Image.open(f)
    print(f)


for dir in list_dir:
  files = os.listdir(PATH + '/' + dir + '/')
  process_file(files)

