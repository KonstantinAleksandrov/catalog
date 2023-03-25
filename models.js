import {Low} from "lowdb";
import {JSONFile} from "lowdb/node";
import path from "path"

const db = new Low(new JSONFile(path.join('dataBase','catalog.json')))

export const getElements = async () =>{
    await db.read()
    return db.data.catalog
}
export const addElement = async (elem) =>{
    await db.read()
    const arrElementsId = db.data.catalog.map((item)=>item.id)
    const maxId = Math.max.apply(null,arrElementsId)
    elem.id = maxId + 1
    db.data.catalog.push(elem)
    await db.write()
    return db.data.catalog
}
export const deleteElement = async (id) =>{
    await db.read()
    db.data.catalog = db.data.catalog.filter((elem)=>elem.id != id)
    await db.write()
    return db.data.catalog
}
export const putElement = async (data) =>{
    await db.read()
    db.data.catalog = db.data.catalog.map((element) => {
        if(element.id == data.id){
            element = {...element,...data}
        }
        return element
    })
    await db.write()
    return db.data.catalog
}