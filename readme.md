# Docker Grafics Controller
-by craazybones- from Softnow

![Alt text](https://github.com/ktalovmorx/docker_admin/blob/main/static/img/docker_logo.png?raw=true)
![Alt text](https://github.com/ktalovmorx/docker_admin/blob/main/static/img/front_end.png?raw=true)

<h3> Resumen </h3>

```
A mini graphical manager to control basic operations of our docker instances.
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
gunicorn --workers 1 --timeout 120 --bind 0.0.0.0:5000 wsgi:application

En segundo Plano
gunicorn --daemon --workers 1 --timeout 120 --bind 0.0.0.0:5000 wsgi:application

Numero Workers = 2 * Total_de_nucles_CPU + 1
Para mi caso utilizo solo 1 porque esto es un proyecto personal

```

<h2> Prueba de carga con Apache Bench</h2>

```
ab -n 1000 -c 50 http://localhost:5000/

-n 1000: Envía 1000 solicitudes en total.
-c 50: Usa 50 conexiones simultáneas.

```

<h3>José Ernesto Morales Ventura | San Cristóbal | República Dominicana</h3>

<span><span class="badge bg-primary">PYMES</span> Software and Consulting</span><br>
Website: <a href="https://www.softnow-ptv.homes" target="_blank">https://www.softnow-ptv.homes</a><br>
Email: <a href="mailto:craazybones@gmail.com , jomorales.ventura@gmail.com" target="_blank">craazybones@gmail.com , jomorales.ventura@gmail.com</a><br>
Github: <a href="https://github.com/ktalovmorx" target="_blank">https://github.com/ktalovmorx</a><br>
linkedin: <a href="https://www.linkedin.com/in/jomorales-ventura/" target="_blank">https://www.linkedin.com/in/jomorales-ventura/</a><br>