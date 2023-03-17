import fs from 'fs'

fs.mkdir('./assets',{recursive: false},(err)=>{
    if (err) console.log(err)
})

function fun(parameter){
    fs.access('./assets/hallo.txt',fs.F_OK,(err)=>{
        if(err){
            fs.writeFile('./assets/hallo.txt',parameter,(err)=>{
                if(err) console.log(err)
            })
        }else{
            fs.open('assets/hallo.txt','a+',(err,fd)=>{
                if(err) console.log(err)
                else{
                    fs.write(fd,parameter + '\n',(err)=>{
                        if(err) console.log(err)
                    })
                }
            })
        }
    })
}

/* fun("hallo? \n") */

function promiseFun (parameter){
    fs.promises.mkdir('./promise', {recursive:true},parameter)
.then(fs.promises.writeFile('./promise/promise.txt',parameter))}

promiseFun("promise?\n")