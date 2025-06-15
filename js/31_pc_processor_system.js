
function handleSubmit(){
    event.preventDefault();

    const processor=document.getElementsByName("processor");
    const ram=document.getElementsByName("ram");
    const memory=document.getElementsByName("memory");
    const Graphicscard=document.getElementsByName("Graphicscard");

    console.log(processor ,ram ,memory ,Graphicscard);

    let errbox=false;

    // 1 processor 

    let processorvalue=0;

    for(i=0; i<processor.length; i++) {
        if(processor[i].checked)
         processorvalue=parseInt(processor[i].value);
        console.log(processorvalue);  
    }

    if(processorvalue == '') {
        document.getElementById("processorerr").innerHTML='select your processor';
        errbox=true;
    } else {
        document.getElementById("processorerr").innerHTML=''; 
    }


    // 2 ram

    let ramvalue=0;

    for(let i=0; i<ram.length; i++) {
        if(ram[i].checked)
        ramvalue=parseInt(ram[i].value);
    console.log(ramvalue);
    
    }

    if(ramvalue == '') {
         document.getElementById("ramerr").innerHTML='select your processor ram ';
          errbox=true;
    } else {
         document.getElementById("ramerr").innerHTML='';
    }


    // 3 memory 

    let memoryvalue=0;

    for(i=0; i<memory.length; i++) {
        if(memory[i].checked)
        memoryvalue=parseInt(memory[i].value)
    }

    if(memoryvalue == '') {
         document.getElementById("memoryerr").innerHTML='select your processor ram ';
          errbox=true;
    } else {
         document.getElementById("memoryerr").innerHTML='';
    }


    // 4 graphics card 


    let graphicscardvalue=0;

    for(i=0; i<Graphicscard.length; i++) {
        if(Graphicscard[i].checked)
            graphicscardvalue=parseInt(Graphicscard[i].value)
        console.log("hello",graphicscardvalue);
        
    }


    if(graphicscardvalue == '') {
        document.getElementById("Graphicserr").innerHTML='do want to add graphics card ';
         errbox=true;
    } else {
         document.getElementById("Graphicserr").innerHTML='';
    }

    if(!errbox) {
        console.log("table print");

        
    let ramvalue=0;
        if(processorvalue <= 10000 && ramvalue <= 1500  && memoryvalue <= 5000 && graphicscardvalue <=  0)  {

        } else {

        }
















        
    } else {
        console.log("table not print");
        
    }
 





    

}