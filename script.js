console.log("this is todo app");

      let input = document.querySelector(".inputBox");
      let addTask = document.querySelector(".addTask");

      let count = 0;
      let comp = 0;

      let taskNum = document.querySelector(".left");
      let CompNum = document.querySelector(".right");

      function updateTaskCount() {
        taskNum.textContent = `${count} task(s)`;
      }

      function updateCompletedCount() {
        CompNum.textContent = `${comp} completed task(s)`;
      }

      updateTaskCount();
      updateCompletedCount();

      addTask.addEventListener("click", () => {
        if (input.value.trim() === "") {
          alert("💬Enter the task first to Add new Task");
          return;
        }

        count++;
        updateTaskCount();

        let div2 = document.querySelector(".taskList");

        let div = document.createElement("div");
        div.classList.add("taskCard");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkBox");

        let p = document.createElement("p");
        p.classList.add("pText");
        p.textContent = input.value;

        let button = document.createElement("button");
        button.classList.add("del");
        button.textContent = "Delete";

        button.addEventListener("click", () => {
          div.remove();
          count--;
          updateTaskCount();

          if (checkbox.checked) {
            comp--;
            updateCompletedCount();
          }
        });

        checkbox.addEventListener("change", () => {
          if (checkbox.checked) {
            comp++;
          } else {
            comp--;
          }
          updateCompletedCount();
        });

        div.appendChild(checkbox);
        div.appendChild(p);
        div.appendChild(button);

        div2.appendChild(div);

        input.value = "";
      });