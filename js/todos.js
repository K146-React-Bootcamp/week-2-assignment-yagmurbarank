renderHeader();

const todosUrl = "https://jsonplaceholder.typicode.com/todos";
const root = document.querySelector("#root");
const editModal = document.querySelector("#editModal");
let todos = [];
let todo;
let curPage = 1; //son durumdaki sayfa
let rows = 20; //sayfadaki item sayisi

const renderTodos = (page = 1) => {   //default olarak ilk sayfa gorunur
	
	if (page == 1) {
		prevButton.style.visibility = "hidden";
	  } else {
		prevButton.style.visibility = "visible";
	  }
	  
  root.innerHTML = "";
  const table = document.createElement("table");
  table.setAttribute("class", "table table-hover");

  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th scope="col" id="Id_sort"><button id="id_btn" type="button" class="btn btn-light">id </button> </th>
      <th scope="col">Başlık</th>
      <th scope="col" id="userId_sort"><button id="userId_btn" type="button" class="btn btn-light" >Kullanıcı Adı </button> </th>
      <th scope="col">Durum</th>
      <th scope="col"></th>
    </tr>
  `;
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  const renderItem = (item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td>${item.userId}</td>
      <td>${item.completed ? "Tamamlandı" : "Yapılacak"}</td>
      <td>
        <button class="btn btn-xs btn-danger remove" data-id=${
          item.id
        }>Sil</button>
        <button class="btn btn-xs btn-warning edit" data-id=${
          item.id
        }>Düzenle</button>
      </td>
    `;
    tbody.appendChild(tr);
  };
 

  page--;
  
  let start = (curPage - 1) * rows;
  let end = curPage * rows;
  console.log({ start });


  console.log({ end });
  let paginatedItems = todos.slice(start, end);
  paginatedItems.forEach((item) => {
    renderItem(item);
  });

  table.appendChild(tbody);
  root.append(table);

  document.querySelectorAll(".remove").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = Number(e.currentTarget.getAttribute("data-id"));
      if (confirm("kaydı silmek istediğinize emin misiniz?")) {
        todos = todos.filter((x) => x.id !== id);
        renderTodos(curPage);
      }
    });
  });

  document.querySelectorAll(".edit").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = Number(e.currentTarget.getAttribute("data-id"));
      todo = todos.find((todo) => todo.id == id);
      editModal.querySelector("#title").value = todo.title;
      editModal.querySelector("#completed").checked = todo.completed;
      editModal.style.display = "block";
      editModal.classList.add("show");
    });
  });
  //id sıralama
  document.querySelector("#userId_btn").addEventListener("click", () => {
    todos.sort((a, b) => b.id - a.id);
    renderTodos(curPage);
    console.log(todos);
  });
  document.querySelector("#id_btn").addEventListener("click", () => {
    todos.sort((a, b) => a.id - b.id);
    renderTodos(curPage);
    console.log(todos);
  });

  //userId  sıralama
  document.querySelector("#id_btn").addEventListener("click", () => {
    todos.sort((a, b) => a.userId - b.userId);
    renderTodos(curPage);
    console.log(todos);
  });
  document.querySelector("#userId_btn").addEventListener("click", () => {
    todos.sort((a, b) => b.userId - a.userId);
    renderTodos(curPage);
    console.log(todos);
  });
};

//sayfalama
document.querySelectorAll(".page-link").forEach((btn) => {
  btn.addEventListener("click", () => {
    let data_id = btn.getAttribute("data-id");
    curPage = Number(data_id);
    renderTodos(curPage);
  });
});

editModal.querySelector("#save").addEventListener("click", () => {
  todo.title = editModal.querySelector("#title").value;
  todo.completed = editModal.querySelector("#completed").checked;
  const index = todos.findIndex((t) => t.id == todo.id);
  todos[index] = todo;
  renderTodos();
  editModal.style.display = "none";
  editModal.classList.remove("show");
});

editModal.querySelectorAll(".close").forEach((button) => {
  button.addEventListener("click", () => {
    editModal.style.display = "none";
    editModal.classList.remove("show");
  });
});

// function previousPage() {
// 	if (curPage > 1) {
// 	  curPage--;
// 	  renderTodos(curPage);
// 	}
//   }
  
//   function nextPage() {
// 	if ((curPage * rows) < todos.length) {
// 	  curPage++;
// 	  renderTodos(curPage);
// 	}
//   }
  
//   renderTodos()
  
//   function numPages() {
// 	return (todos.length / rows);
//   }
  
//   document.querySelector('#nextButton').addEventListener('click', nextPage, false);
//   document.querySelector('#prevButton').addEventListener('click', previousPage, false);

fetch(todosUrl)
  .then((resp) => resp.json())
  .then((data = []) => {
    todos = data;
    renderTodos();
  })
  .catch((error) => {
    errorLogger(error);
  });
	// sıralama ödevi algoritması
	// table thead kısmındaki sıralama yapılacak kolonlara event listener eklenecek.
	// event listener hangi kolon için tıklanıyorsa
	// sort metodu kullanılarak sıralama yapılacak
	// sıralanmış todos'todus içerisine atılacak
	// renderTodos metodu çalıştırılacak.
	
