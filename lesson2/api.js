let getData = async () => {
  let Drawdata = await fetch("https://static.pipezero.com/covid/data.json");

  let data = await Drawdata.json();

  let total = data.total;
  renderData(total.internal);

  let select = document.getElementById("b");
  select.addEventListener("change", () => {
    let value = select.value;
    if (value == "VN") {
      renderData(total.internal, "Việt Nam");
    } else if (value == "TG") {
      renderData(total.world, "Thế Giới");
    }
  });

  renderData(total.internal, "Việt Nam");
};

getData();
let renderData = (data, city) => {
  let dom = document.getElementById("a");
  let html = `<th scope="row">${city}</th>
    <td>${numb(data.death)}</td>
    <td>${numb(data.treating)}</td>
    <td>${numb(data.cases)}</td>
    <td>${numb(data.recovered)}</td>`;
  dom.innerHTML = html;
};

const numb = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
