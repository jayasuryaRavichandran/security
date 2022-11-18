var id=1;
        function signup(event){
            
            id++;
            const firstname = document.getElementById("input").value;
            const lastname = document.getElementById("input1").value;
            const  email = document.getElementById("email").value;
            const password = document.getElementById("email1").value;
            const name={firstname:firstname,lastname:lastname,email:email,pwd:password,id:id};
            event.preventDefault();
           
            console.log(name);
            window.alert(name);
            
          fetch("http://localhost:8080/add-user",{
            method:"POST",
            body: JSON.stringify(name),
            headers: {
                
                "Content-Type" : "application/json",
            },
          })
            
            
        };