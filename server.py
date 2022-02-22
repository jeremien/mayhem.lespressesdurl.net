import os, pathlib
from flask import Flask
# from flask_autoindex import AutoIndex
from flask import (
                    render_template,
                    send_from_directory,
                    abort
                  )

current_path = pathlib.Path().resolve()

app = Flask(__name__)

PATH = str(current_path) + '/static'

def read_data():
  list_dir = os.listdir(PATH)
  all_data = list()
  for dir in list_dir:
    print(dir)
    if dir == 'dev' or dir == 'assets':
      continue
    else:
      dir_path = PATH + '/' + dir + '/'
      files = os.listdir(dir_path)
      data = {
        'directory': dir,
        'files': files
      }
      all_data.append(data)
  #print(all_data)
  return all_data

@app.route('/')
def home():
  data = read_data()
  return render_template('home.html', data=data)

@app.route("/static/<path:dir>/<path:file>")
def get_image(dir='test', file='test'):
  path = dir + '/' + file
  return send_from_directory('static', path)

@app.route("/static/<path:filename>")
def staticfiles(filename):
  try:
    return send_from_directory('static', path=filename)
  except FileNotFoundError:
    abort(404)

if __name__ == "__main__":
  app.run(debug=True)
