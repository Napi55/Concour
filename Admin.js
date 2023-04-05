// aside bar event
const menu = document.querySelector(".menu");
const aside = document.querySelector(".aside");
const mainContent = document.querySelector(".main-content");

menu.onclick = function () {
  aside.classList.toggle("active");
  mainContent.classList.toggle("active");
};
// add button event
const add_admin_button = document.querySelector(".add-button");
const main = document.querySelector(".main");
const add_form = document.querySelector(".add-form");
const close = document.querySelector(".close");
const add_link = document.querySelector(".add-link");
const administrator_link = document.querySelector(".administrator-link");
const condidat_link = document.querySelector(".condidat-link");
const employee_link = document.querySelector(".employee-link");
//show add form

add_admin_button.onclick = function () {
  main.classList.toggle("active-add-form");
  menu.classList.toggle("active-add-form");
  add_form.classList.toggle("active-add-form");
};
//close add form
close.onclick = function () {
  main.classList.remove("active-add-form");
  menu.classList.remove("active-add-form");
  add_form.classList.remove("active-add-form");
  edit_form.classList.remove("active-add-form");
};

// edit form event
//show edit form
const edit_form = document.querySelector(".edit-form");
const edit_button = document.querySelectorAll(".edit-button");
for (i = 0; i < edit_button.length; i++) {
  edit_button[i].onclick = function () {
    main.classList.toggle("active-add-form");
    menu.classList.toggle("active-add-form");
    edit_form.classList.toggle("active-add-form");
  };
}
edit_button[1].onclick = function () {
  console.log(edit_button);
  main.classList.toggle("active-add-form");
  menu.classList.toggle("active-add-form");
  edit_form.classList.toggle("active-add-form");
};
//close edit form
const close_edit = document.querySelector(".close-edit");
close_edit.onclick = function () {
  main.classList.remove("active-add-form");
  menu.classList.remove("active-add-form");
  edit_form.classList.remove("active-add-form");
};

const table_employee = document.querySelector(".table.table-employee");
const table_admin = document.querySelector(".table.table-admin");
const table_condidat = document.querySelector(".table.table-condidat");
const list_title = document.querySelector(".list-title");
const btn = document.querySelector(".btn");
//employee list show

employee_link.onclick = function () {
  employee_link.classList.add("active-link");
  administrator_link.classList.remove("active-link");
  condidat_link.classList.remove("active-link");
  table_employee.style.display = "block";
  table_admin.style.display = "none";
  table_condidat.style.display = "none";
  list_title.innerHTML = "Employees";
};
//condidat list show

condidat_link.onclick = function () {
  employee_link.classList.remove("active-link");
  administrator_link.classList.remove("active-link");
  condidat_link.classList.add("active-link");
  table_employee.style.display = "none";
  table_admin.style.display = "none";
  table_condidat.style.display = "block";
  list_title.innerHTML = "Candidates";
};
//admin list show

administrator_link.onclick = function () {
  employee_link.classList.remove("active-link");
  administrator_link.classList.add("active-link");
  condidat_link.classList.remove("active-link");
  table_employee.style.display = "none";
  table_admin.style.display = "block";
  table_condidat.style.display = "none";
  list_title.innerHTML = "Admins";
};
