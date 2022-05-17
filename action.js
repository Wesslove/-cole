
                    /*pour les icones menu et fermé*/
                    var navlinks=document.getElementById("action");
                    function fermé(){
                        action.style.right="0";
                    } 
                    function ouvrir(){
                        action.style.right="-386px";
                    }
                /*zone de la barre menu*/
                     window.addEventListener('scroll', function(){
                        const header=document.querySelector('nav');
                        header.classList.toggle("stricky", window.scrollY > 0);
                    });


                   
                