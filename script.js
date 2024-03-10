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

        //function to change random color of square and darkneing of squares
        function changeColor(event){
            let randomColor='#'+Math.floor(Math.random()*0xFFFFFF).toString(16).padStart(6,0).toUpperCase();
            event.target.style.backgroundColor=randomColor;

            //code for darking the grid square
            let currentBrightness = parseFloat(event.target.style.filter.slice(11, -1));
            if (isNaN(currentBrightness)) {
                currentBrightness = 100;
            }

            if (currentBrightness > 0) {
            event.target.style.filter = `brightness(${currentBrightness - 10}%)`;
            } else {
            currentBrightness = 0;
            }


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

        
        