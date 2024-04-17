namespace EventInspector {

    console.log("Let's get started");

    window.addEventListener('load', handleLoad); 

    let span: HTMLElement = document.createElement("span"); 
    span.innerHTML = "span";
    span.className = "span";

    function handleLoad(_event: Event): void { 
        
        
        let div0: HTMLDivElement = <HTMLDivElement>(
        document.querySelector("#div0"));
        let div1: HTMLDivElement = <HTMLDivElement>(
        document.querySelector("#div1"));
        div0.addEventListener("keyup", logInfo);
        div0.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);
        div1.addEventListener("click", logInfo);

        
        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        let button: HTMLButtonElement = <HTMLButtonElement>(document.querySelector("button"));
        button.addEventListener("click", customEvent);
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("keyup", logInfo);
        document.addEventListener("click", logInfo);
        
        body.addEventListener("keyup", logInfo);
        body.addEventListener("click", logInfo);
    }

    
    function setInfoBox(_event: MouseEvent): void {
        let x: number = _event.pageX; 
        let y: number = _event.pageY; 
    
        
        let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span"); 
        span.style.left = x + 10 + "px" 
        span.style.top = y + 10 + "px" 
        span.innerHTML = "x: "+ x + "<br />" + " y: " + y + "<br />" + " target: " + _event.target; 
    }

    
    function logInfo(_event: Event): void {
        console.log(_event);
        console.log(_event.type);
        console.log(_event.currentTarget);
        console.log(_event.target);
    }

 
    function customEvent(_event: Event):void {
        console.log("Custom Event Ausgelöst");
        }

    
}