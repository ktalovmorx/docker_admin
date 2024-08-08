function run_instance(name){
    let c = confirm('Seguro que desea iniciar la instancia?');
    if (c){
      const data = {'name':name};
      fetch('/run_instance',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
          alert(data['message']);
          setTimeout(function() {location.reload();}, 2000);
        }).catch(error => {
          // Manejar cualquier error que ocurra
          console.error(error);
        });
    } 
}

function stop_instance(name){
    let c = confirm('Seguro que desea detener la instancia?');
    if (c){
      const data = {'name': name};
      fetch('/stop_instance',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
          alert(data['message']);
          setTimeout(function() {location.reload();}, 1000);
        }).catch(error => {
          // Manejar cualquier error que ocurra
          console.error(error);
        });
    }
}

function restart_instance(name){
  let c = confirm('Seguro que desea reiniciar la instancia?');
  if (c){
    const data = {'name': name};
    fetch('/restart_instance',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        alert(data['message']);
        setTimeout(function() {location.reload();}, 1000);
      }).catch(error => {
        // Manejar cualquier error que ocurra
        console.error(error);
      });
  }

}