window.addEventListener("load", 
    ()=> {
        
        let selectedOption;
        document.getElementById("select_list").addEventListener(
            "change",
            ()=> {
                let select_list=document.getElementById("select_list");
                selectedOption = select_list.options[select_list.selectedIndex].value; 
            },
            false
        );

        document.getElementById("btn_convert").addEventListener("click",
            ()=>{
                let inputValue = document.getElementById("text_input").value;
                switch(selectedOption) {
                    case "$ to ₹":
                        document.getElementById("para_text").innerHTML=inputValue*70;
                        break;
                    case "₹ to $":
                        document.getElementById("para_text").innerHTML=inputValue/70;
                        break;
                    default:
                        document.getElementById("para_text").innerHTML="Select One Option";
                        break;
                }
            }
        );
    }
);    





