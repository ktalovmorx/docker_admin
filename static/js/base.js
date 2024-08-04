function run_instance(name){
    let c = confirm('Seguro que desea iniciar la instancia');
    if (c){
      alert(`Running ${name}...`);
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
          alert(data);
          setTimeout(function() {
              location.reload(); // Recarga la página actual
              }, 2000);
        }).catch(error => {
          // Manejar cualquier error que ocurra
          console.error(error);
        });
    } 
}

function stop_instance(name){
    let c = confirm('Seguro que desea iniciar la instancia');
    if (c){
      alert(`Stopping ${name}...`);
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
          alert(data);
          setTimeout(function() {
              location.reload(); // Recarga la página actual
              }, 2000);
        }).catch(error => {
          // Manejar cualquier error que ocurra
          console.error(error);
        });
    }
}

function restart_instance(name){
  alert(`Restarting ${name}...`);
  if (c){
    alert(`Stopping ${name}...`);
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
        alert(data);
        setTimeout(function() {
            location.reload(); // Recarga la página actual
            }, 2000);
      }).catch(error => {
        // Manejar cualquier error que ocurra
        console.error(error);
      });
  }

}