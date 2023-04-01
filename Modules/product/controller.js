import {getElements,addElement,deleteElement,putElement} from './models.js'


export const getProductsController = async (req,res) =>{
    const catalog = await getElements()
    res.send(catalog)
}
export const addProductController = async (req,res) =>{
    const elem = req.body
    const catalog = await addElement(elem.name,elem.price,elem.description)
    res.send(catalog)
}
export const deleteProductController = async (req,res) =>{
    const id = req.params.id
    if(!id || !+id){
        res.send('id не найдено или не корректно')
        return
    }
    const catalog = await deleteElement(id)
    res.send(catalog)
}

export const editProductController = async (req,res)=>{
    const id = req.body.id
    if(!id){
        res.send('поле id не найдено в запросе')
        return
    }
    if(Object.keys(req.body).length <= 1){
        res.send('нет изменяемых полей')
        return
    }
    for (let key in req.body){
        if(key != 'id' && key != 'name' && key != 'price' && key != 'description'){
            res.send(`поле ${key} не существует`)
            return
        }
    }
    const catalog = await putElement(req.body)
    res.send(catalog)   
}