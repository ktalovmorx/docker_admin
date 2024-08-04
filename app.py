#!/root/env3/bin python
# -*- coding: UTF-8 -*-

__author__ = 'Jose E. Morales Ventura'
__date__ = '23/01/2024'
__description__ = "-"
__url__ = "https://softnow-ptv.homes"

from flask import Flask, jsonify, abort, render_template, request, redirect, url_for
import docker

app = Flask(__name__, template_folder='templates', static_folder='static')
app.config['UPLOAD_EXTENSIONS'] = ['.jpg', '.png', '.txt', '.conf', '.ini']
app.config['MAX_CONTENT_LENGTH'] = 1024 * 1024
app.config['UPLOAD_PATH'] = 'uploads/temp/'

client = docker.from_env()

@app.route('/containers')
def list_containers():
    containers = client.containers.list(all=True)
    container_list = []
    for container in containers:
        container_list.append({
            "id": container.short_id,
            "name": container.name,
            "status": container.status,
            "image": container.image.tags[0] if container.image.tags else "No tag"
        })
    return jsonify(container_list)

@app.route('/images')
def list_images():
    images = client.images.list()
    image_list = []
    for image in images:
        image_list.append({
            "id": image.short_id,
            "tags": image.tags
        })
    return jsonify(image_list)

if __name__ == '__main__':
    app.run(debug=True, port=5000, host="66.29.133.201")
