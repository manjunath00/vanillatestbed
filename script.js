function myFunction(time) {
  const monthObj = {
    jan: "01",
    feb: "02",
    mar: "03",
    apr: "04",
    may: "05",
    jun: "06",
    jul: "07",
    aug: "08",
    sep: "09",
    oct: "10",
    nov: "11",
    dec: "12",
  };

  const month = monthObj[time.slice(3, 6)];
  const year = "20" + time.slice(7, 9);
  const day = time.slice(0, 2);

  const newDate = new Date();
  const hours = newDate.getHours();
  const min = newDate.getMinutes();
  const seconds = newDate.getSeconds();

  const dash = "-";
  const tea = "T";
  const colon = ":";

  const fulldate =
    year +
    dash +
    month +
    dash +
    day +
    tea +
    hours +
    colon +
    min +
    colon +
    seconds;

  document.getElementById("datetimeid").value = fulldate;
  return fulldate;
}

myFunction("31-dec-21");
