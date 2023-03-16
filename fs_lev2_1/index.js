import fs from 'fs'
import data from './data.json' assert {type: "json"}

/* fs.readFile('./data.json', 'utf8',(err,jsonString)=>{
    if(err){
        console.log('File read failed', err)
    }
    console.log('File data:', jsonString)
}) */

fs.writeFile('./data.txt',"",(err)=>{
    if (err) console.log(err)
    else{
        fs.open('./data.txt','a+',(err,fd)=>{
            if (err) console.log(err)
            else{
            data.forEach((data)=>{
                fs.write(fd,`${data.id} - ${data.title} \n ${data.description} \n \n`,(err)=>{
                    if (err) console.log(err)
                })
            })
        }})
    }
})