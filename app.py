#!/root/env3/bin python
# -*- coding: UTF-8 -*-

__author__ = 'Jose E. Morales Ventura'
__date__ = '08/Aug/2024'
__description__ = "-"
__url__ = "https://softnow-ptv.homes"

from flask import Flask, jsonify, abort, render_template, request, redirect, url_for
import docker

app = Flask(__name__, template_folder='templates', static_folder='static')
app.config['UPLOAD_EXTENSIONS'] = ['.jpg', '.png', '.txt', '.conf', '.ini']
app.config['MAX_CONTENT_LENGTH'] = 1024 * 1024
app.config['UPLOAD_PATH'] = 'uploads/temp/'

client = docker.from_env()

def list_containers():
    containers = client.containers.list(all=True)
    container_list = []
    for container in containers:

        # Obtener los puertos expuestos
        ports = container.attrs['NetworkSettings']['Ports']
        # Crear un diccionario para almacenar la información de los puertos
        port_info = {}
        for port, mappings in ports.items():
            if mappings:
                # Si hay mapeos, agregar el puerto al diccionario
                port_info[port] = [mapping['HostPort'] for mapping in mappings]

        container_list.append({
            "id": container.short_id,
            "name": container.name,
            "status": container.status,
            "image": container.image.tags[0] if container.image.tags else "No tag",
            "ports":port_info
        })
    return container_list

@app.route('/run_instance', methods=['POST'])
def run_instance():
    '''
    Ejecuta una instancia

    parameters
    ----------
        :param self : object
                description ->
    returns
    ----------
        None
    '''
    data = request.get_json()
    container_name = data['name']

    try:
        container = client.containers.get(container_name)
        container.start()
        return jsonify({'response':True, 'message':f'Instance {container_name} was started successfully'})
    except docker.errors.NotFound:
        return jsonify({'response':False, 'message':f"ID or name '{container_name}' not found."})
    except Exception as e:
        return jsonify({'response':False, 'message':f"Error updating container: {str(e)}"})

@app.route('/stop_instance', methods=['POST'])
def stop_instance():
    '''
    Detiene una instancia

    parameters
    ----------
        :param self : object
                description ->
    returns
    ----------
        None

    '''
    data = request.get_json()
    container_name = data['name']

    try:
        container = client.containers.get(container_name)
        container.stop()
        return jsonify({'response':True, 'message':f'Instance {container_name} was stopped successfully'})
    except docker.errors.NotFound:
        return jsonify({'response':False, 'message':f"ID or name '{container_name}' not found."})
    except Exception as e:
        return jsonify({'response':False, 'message':f"Error updating container: {str(e)}"})

@app.route('/restart_instance', methods=['POST'])
def restart_instance():
    '''
    Detiene una instancia

    parameters
    ----------
        :param self : object
                description ->
    returns
    ----------
        None

    '''
    data = request.get_json()
    container_name = data['name']

    try:
        container = client.containers.get(container_name)
        container.restart()
        return jsonify({'response':True, 'message':f'Instance {container_name} was restarted successfully'})
    except docker.errors.NotFound:
        return jsonify({'response':False, 'message':f"ID or name '{container_name}' not found."})
    except Exception as e:
        return jsonify({'response':False, 'message':f"Error updating container: {str(e)}"})

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html', containers=list_containers())

if __name__ == '__main__':
    app.run(debug=True)
