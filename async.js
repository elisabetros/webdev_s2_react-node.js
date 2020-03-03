
function ringingCustomerUp(name){
    console.log("we are ready to help you,", name)
}

function itHelpDesk(name, callback){
    callback(name)
}

const sayBye = (name) =>{
    console.log("Bye", name)
}

// itHelpDesk( "Jens", ringingCustomerUp);
// itHelpDesk( "Jens", sayBye);

new Promise((resolve, reject) => {
    try{
        setTimeout(()=>{
       resolve("jes")
    },4000);
    }catch(error){
        reject("wrong")
    }
}).then(message =>{
    // console.log(message)
}).catch(error=>{
    console.log(error)
});


 function myPromise(){
   return new Promise((resolve, reject)=>{
        
            resolve("it works");
        
    })
}
async function callMyPromise(){
    const message = await myPromise();
    console.log(message)
}

const asyncAwaitArrowFunc =  async () =>{
    const message = await myPromise();
    console.log(message)
}

