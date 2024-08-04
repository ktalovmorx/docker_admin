function run_instance(instance_name){
    alert(`Running ${instance_name}...`);

    const data = {'instance_name':instance_name};
    fetch('/run_instance',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
          //document.getElementById('report_win_btn').disabled = true;
          //document.getElementById('report_loss_btn').disabled = true;
          /*Swal.fire({
            title: 'Recibido',
            text: data.message,
            icon: "info",
            confirmButtonText: "OK"
          });*/
          /*Actualizar monto a colocar para que administrador sepa lo que ocurre*/
          console.log(data);
      }).catch(error => {
        // Manejar cualquier error que ocurra
        console.error(error);
      });
}

function stop_instance(instance_name){
    alert(`Stopping ${instance_name}...`);

    const data = {'instance_name': instance_name};
    fetch('/stop_instance',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
          //document.getElementById('report_win_btn').disabled = true;
          //document.getElementById('report_loss_btn').disabled = true;
          /*Swal.fire({
            title: 'Recibido',
            text: data.message,
            icon: "info",
            confirmButtonText: "OK"
          });*/
          /*Actualizar monto a colocar para que administrador sepa lo que ocurre*/
          console.log(data);
      }).catch(error => {
        // Manejar cualquier error que ocurra
        console.error(error);
      });
}