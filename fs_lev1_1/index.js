import fs from 'fs'

fs.open('./blog1.txt',(err)=>{
    if(err) console.log('can not open file',err)
})

fs.writeFile('./blog1.txt','Überschreibe Hallo Welt',(err)=>{
    if (err) console.log('can not overwrite content', err)
})

fs.appendFile('./blog2.txt','beliebiger Text',(err)=>{
    if(err) console.log('can not append new file', err)
})

fs.mkdir("./assets",{recursive:false}, (err)=>{
    if (err) {
        fs.rmdir("./assets",(err)=>{
            console.log(('cannot delete mkdir',err))
        })
    }
})

fs.writeFile('./delete.txt','',(err)=>{
    if(err) console.log('can not create file',err)
})

fs.access('./delete.txt',fs.F_OK,(err)=>{
    if(err){
        console.error(err)
    }else{
        fs.unlink('./delete.txt', (err=>{
            if(err) console.error(err)
        }))
    }
})

fs.writeFile('./hello.txt','Sommer,Sonne,Sonnenschein',err =>{
    if(err){
        console.log(err)
    }
})

fs.rename('./hello.txt','./HelloWorld.txt',err =>{
    if(err) console.log(err)
})