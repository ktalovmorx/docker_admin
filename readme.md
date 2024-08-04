# Docker Grafic Controller
-by craazybones- from Softnow

![Alt text](https://github.com/ktalovmorx/docker_admin/blob/main/static/img/docker_logo.png?raw=true)


<h3> Resumen </h3>

```
    Un mini gestor gráfico para controlar nuestras instancias de docker.
    Al momento con opciones para iniciar,detener y/o reiniciar instancias.
```

<h3> Instalación </h3>

```
sudo apt install python3-pip
sudo apt install python3.11-venv
cd /root
python3 -m venv env3
source env3/bin/activate
pip3 install flask docker
pip3 install gunicorn

git clone https://github.com/ktalovmorx/docker_admin.git
cd docker_admin

sudo ufw allow 68/tcp

En primer plano
gunicorn --workers 4 --bind 0.0.0.0:5000 wsgi:application

En segundo Plano
gunicorn --daemon --workers 4 --bind 0.0.0.0:5000 wsgi:application
```

<h3>José Ernesto Morales Ventura | San Cristóbal | República Dominicana</h3>

<span><span class="badge bg-primary">PYMES</span> Software and Consulting</span><br>
Website: <a href="https://www.softnow-ptv.homes" target="_blank">https://www.softnow-ptv.homes</a><br>
Email: <a href="mailto:craazybones@gmail.com , jomorales.ventura@gmail.com" target="_blank">craazybones@gmail.com , jomorales.ventura@gmail.com</a><br>
Github: <a href="https://github.com/ktalovmorx" target="_blank">https://github.com/ktalovmorx</a><br>
linkedin: <a href="https://www.linkedin.com/in/jomorales-ventura/" target="_blank">https://www.linkedin.com/in/jomorales-ventura/</a><br>