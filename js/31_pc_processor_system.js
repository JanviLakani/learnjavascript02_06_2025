
function handleSubmit(){
    event.preventDefault();

    const processor=document.getElementsByName("processor");
    const ram=document.getElementsByName("ram");
    const memory=document.getElementsByName("memory");
    const Graphicscard=document.getElementsByName("Graphicscard");

    // console.log(processor ,ram ,memory ,Graphicscard);

    let errbox=false;

    // 1 processor 

    let processorvalue='';

    for(i=0; i<processor.length; i++) {
        if(processor[i].checked)
         processorvalue=parseInt(processor[i].value);
        console.log(processorvalue);  
    }

    if(processorvalue === '') {
        document.getElementById("processorerr").innerHTML='select your processor';
        errbox=true;
    } else {
        document.getElementById("processorerr").innerHTML=''; 
    }


    // 2 ram

    let ramvalue='';

    for(let i=0; i<ram.length; i++) {
        if(ram[i].checked)
        ramvalue=parseInt(ram[i].value);
    console.log(ramvalue);
    
    }

    if(ramvalue === '') {
         document.getElementById("ramerr").innerHTML='select your processor ram ';
          errbox=true;
    } else {
         document.getElementById("ramerr").innerHTML='';
    }


    // 3 memory 

    let memoryvalue='';

    for(i=0; i<memory.length; i++) {
        if(memory[i].checked)
        memoryvalue=parseInt(memory[i].value)
    }

    if(memoryvalue === '') {
         document.getElementById("memoryerr").innerHTML='select your processor memory';
          errbox=true;
    } else {
         document.getElementById("memoryerr").innerHTML='';
    }


    // 4 graphics card 


    let graphicscardvalue='';

    for(i=0; i<Graphicscard.length; i++) {
        if(Graphicscard[i].checked)
            graphicscardvalue=parseInt(Graphicscard[i].value)
        
    }


    if(graphicscardvalue === '') {
        document.getElementById("Graphicserr").innerHTML='do you want to add graphics card ';
         errbox=true;
    } else {
         document.getElementById("Graphicserr").innerHTML='';
    }

    if(!errbox) {
        console.log("table print");
        let pcname='';

        
        if(processorvalue <= 10000) {
            pcname='student pc'
        } else if(processorvalue <= 15000 ) {
            if(ramvalue >=2000) {
                pcname='professional pc'
            } else {
                pcname='student pc'
            }

        } else if(processorvalue <=20000) {
            if(ramvalue >= 3000 && memoryvalue >= 10000 && graphicscardvalue >=18000) {
                pcname='gaming pc'
            } else {
                pcname='professional pc'
            }

        }


        let total=processorvalue + ramvalue + memoryvalue + graphicscardvalue;

        document.getElementById("total_price").innerHTML=total;

        document.getElementById("pc_type_name").innerHTML=pcname;
















        
    } else {
        console.log("table not print");
        
    }
 





    

}