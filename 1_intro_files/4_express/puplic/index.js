// get all the persons and console.log them


// fetch("http://localhost:9090/persons").then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
  $.get("persons").then(res =>{
    console.log(res)
    lastID = res[res.length-1].id;
    res.map(person => {
                const personName=`
            <div class="personCard" id="person-${person.id}">
                <p class="id">ID: ${person.id ? person.id : "No ID"}</p>
                <p class="name">Name: ${person.name ? person.name: "no Name"}</p>
                <div class="udpateWrapper"><input name="txtUpdateName"><button onClick=updatePerson(${person.id})>Update Name</button></div>
                <button onClick=deletePerson(${person.id}) >X</button>
            </div>
        `;
        $("#personWrapper").append(personName); 
    });
    //  $("#personWrapper").on("click", "button", function(){
    //     console.log("deleteMe", event.target.parentElement.id)
    //     deletePerson(event.target.parentElement.id)
    // })       
  })

  function deletePerson(id){
      $.ajax({
        url: `persons/${id}`,
        type: 'DELETE', 
      }).done(res => {
          console.log(res)
          $(`#person-${id}`).remove()
      })
  }
  $('#addPersonBtn').click(addPerson)

  function addPerson(){
    //   let id = 
      let newPersonName = $('input[name=txtName]').val()
      console.log(newPersonName)
      let personID = ++lastID
      console.log(personID)
    $.ajax({
        url: `persons/`,
        type: 'POST', 
        data:{"name": newPersonName}
      }).done(res => {
          console.log(res.newPerson)
          const newPerson = `
          <div class="personCard" id="person-${res.newPerson.id}">
          <p class="id">ID: ${res.newPerson.id ? res.newPerson.id : "No ID"}</p>
          <p class="name">Name: ${res.newPerson.name ? res.newPerson.name: "no Name"}</p>
          <div class="udpateWrapper"><input name="txtUpdateName"><button onClick=updatePerson(${person.id})>Update Name</button></div>
          <button onClick=deletePerson(${res.newPerson.id}) >X</button>
      </div>
          `;
          $("#personWrapper").append(newPerson);

      })
  }

  function updatePerson(id){
      console.log("update person", id)
      let updatedName = $(`#person-${id}`).find("input").val()
      console.log(updatedName)
    $.ajax({
        url: `persons/${id}`,
        type: 'PUT', 
        data:{"name": updatedName}
      }).done(res => {
          console.log(res)
          $(`#person-${id}`).find(".name").text("Name: "+updatedName)
      })
  }
 
