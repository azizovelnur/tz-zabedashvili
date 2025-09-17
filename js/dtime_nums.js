function dtime_nums(offset) {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  
  document.write(day + '-' + month + '-' + year);
}