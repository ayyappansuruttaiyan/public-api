const heading = document.createElement('h2');
heading.innerHTML = 'Users List';

const containerFluid = document.createElement('div');
containerFluid.className = 'container-fluid';
containerFluid.append(heading);

const container = document.createElement('div');
container.className = 'container';

const row = document.createElement('row');
row.className = 'row';
container.append(row);

document.body.append(containerFluid);
const url = 'https://jsonplaceholder.typicode.com/users';

async function users() {
  const response = await fetch(url);
  const data = await response.json();

  for (let i = 0; i < data.length; i++) {
    row.innerHTML += `<div class="col-3 col-md-3 col-lg-3 col-sm-2">
                    <div class="card strong">
                        <div class="card-body padding">
                          <h5 class="card-title">Name: ${data[i].name}</h5>
                          <p class="card-text">Email: ${data[i].email}</p>
                          <p class="card-text">Street: ${data[i].address.street}</p>
                          <p class="card-text">City: ${data[i].address.city}</p>
                        </div>
                      </div>
                  <div/>`;
  }
  containerFluid.append(container);
}
users();
