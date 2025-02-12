const productList = [];

document.getElementById("product-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const tableBody = document.querySelector("#table-data tbody");
  const inputName = document.getElementById("name-input");
  const inputDesc = document.getElementById("desc-input");
  const inputValue = document.getElementById("value-input");
  const available = document.querySelector(
    "input[name=available-product]:checked"
  );

  if (
    !inputName.value ||
    !inputDesc.value ||
    !inputValue.value ||
    !available.value
  ) {
    alert("Preencha todos os campos!");
    return;
  }

  const valueNumber = parseFloat(inputValue.value.replace(",", "."));

  if (isNaN(valueNumber)) {
    return alert("Digite um valor válido!");
  }

  const product = {
    name: inputName.value,
    value: valueNumber,
    available: available.value,
    desc: inputDesc.value,
  };

  productList.push(product);
  productList.sort((a, b) => a.value - b.value);

  tableBody.innerHTML = "";
  inputName.value = "";
  inputDesc.value = "";
  inputValue.value = "";
  available.checked = false;

  productList.forEach((product) => {
    const newRow = tableBody.insertRow();

    newRow.insertCell().innerText = product.name;
    newRow.insertCell().innerText = `R$ ${product.value.toFixed(2)}`;
    newRow.insertCell().innerText = product.available;
    newRow.insertCell().innerText = product.desc;
  });
});
