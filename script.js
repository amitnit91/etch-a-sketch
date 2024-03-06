grid();
        
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
                    // box.textContent=j;
                    box.addEventListener('mouseenter',changeColor);
                    div.appendChild(box);
                    
                }
                container.appendChild(div);  


            }
        }
        function changeColor(event){
            let randomColor='#'+Math.floor(Math.random()*0xFFFFFF).toString(16).padStart(6,0).toUpperCase();
            event.target.style.backgroundColor=randomColor;
        }
        
        function input(){
            let rowNo=prompt('enter grid row number');
            rowNo=parseInt(rowNo);
            if(rowNo>100){
                alert('enter less than 100 number');
            }
            else{

                const container=document.querySelectorAll('.row');
                for(i=0;i<container.length;i++){
                    container[i].remove();
                }
                
                grid(rowNo);
            }
        }
        
        