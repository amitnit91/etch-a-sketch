        grid();
        
        //function to create grid of given size
        function grid(gridSize=16){
            const container=document.querySelector('#container');
            let row=gridSize;
            let col=gridSize;
            for(let i=1;i<=row;i++){
                const div=document.createElement('div');
                div.setAttribute('class','row');
                for(let j=1;j<=col;j++){
                    const box=document.createElement('div');
                    box.setAttribute('class','col');
                    box.addEventListener('mouseenter',changeColor);
                    div.appendChild(box);
                    
                }
                container.appendChild(div);  


            }
        }

        //function to change random color of square
        function changeColor(event){
            let x;
            let randomColor='#'+Math.floor(Math.random()*0xFFFFFF).toString(16).padStart(6,0).toUpperCase();
            event.target.style.backgroundColor=randomColor;
            


        }
        
        //function to ask user input about grid size and create new grid
        function userInput(){
            let rowNo=prompt('enter grid row number');
            if(parseInt(rowNo)>100){
                alert('enter less than 100 number');
            }
            else if(rowNo==null){
                alert("you canceled");
            }
            else if(rowNo==""){
                alert('you have not enterd anything');
            }
            else{              
                removeGrid();                
                grid(parseInt(rowNo));
            }
        }

        //function to remove the grid from container
        function removeGrid(){
            const container=document.querySelectorAll('.row');
            for(i=0;i<container.length;i++){
                container[i].remove();
            }
        }

        //function to reset the size of grid square
        function resetGrid(){
            removeGrid();
            grid();
        }

        //function to create a darkish grid square
        function darkGridSquare(){

        }

        
        