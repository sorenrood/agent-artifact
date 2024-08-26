from flask import Flask, render_template, url_for
from flask_caching import Cache
import os

app = Flask(__name__)
app.config['CACHE_TYPE'] = 'simple'
cache = Cache(app)

@app.route('/')
@cache.cached(timeout=60)  # Cache for 60 seconds
def index():
    return render_template('index.html')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)