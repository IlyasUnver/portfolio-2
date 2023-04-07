const menu = document.getElementById("menu");
        menu.style.maxHeight = "0px";
        
        function myFunction(){
            if(menu.style.maxHeight =="0px"){
                menu.style.maxHeight = "200px";
            }
            else{
                menu.style.maxHeight="0px"
            }
        }

        const workBtn = document.querySelector(".workBtn");
        const background = document.querySelector(".container");

        workBtn.addEventListener("click", function(){
            background.classList.toggle("active");
        });
