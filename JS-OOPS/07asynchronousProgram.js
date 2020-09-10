console.log("start");

let message=(setTimeout(()=>{
    console.log("This message is delayed by 5 sec.");
}),5000);

console.log("Finish");