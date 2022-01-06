const getBtn = document.querySelector("#get");

document.querySelector(".submit").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.elements.textInput.value);

  axios
    .get(
      `http://api.weatherstack.com/current?access_key=46b3564eea96aac0bc5111fa8852c0d9&query=${e.target.elements.textInput.value}`
    )
    .then((res) => {
      try {
        console.log(res.data);
        const showTage = document.querySelector(".show--box");
        showTage.style.display = "flex";
        const p = document.querySelector(".show--box__counter--name");
        p.textContent = res.data.location.name;
        const p1 = document.querySelector(".show--box__city--name");
        p1.textContent = res.data.location.country;
        const p2 = document.querySelector(".show--box__temperers");
        p2.textContent = `${res.data.current.temperature}c`;
        const changeIcon = res.data.current.weather_icons.toString();
        console.log(changeIcon);
        const icon = document.querySelector(".icons");
        icon.src = `${changeIcon}`;
        icon.style.borderRadius = "50%";
        console.log(icon.src);
        document.querySelector(".show--box").appendChild(p);
        document.querySelector(".show--box").appendChild(p1);
        document.querySelector(".show--box").appendChild(p2);
        document.querySelector(".show--box").appendChild(icon);
      } catch (error) {
        alert("اشتباه وارد کردین");
      }
    });

  e.target.elements.textInput.value = "";
});
