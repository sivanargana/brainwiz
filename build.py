

import os
import shutil
from app import app;

dist = 'docs'
if os.path.exists(dist):
    shutil.rmtree(dist)
os.makedirs(dist, exist_ok=True)
shutil.copytree("src/assets","docs/assets")
with app.test_request_context():
    client= app.test_client()
    for filename in os.listdir("src/views"):
        if filename.endswith(".html"):
           with open(f"{dist}/{filename}", 'w', encoding='utf-8') as f:
                f.write(client.get(filename).get_data(as_text=True))