import {getElements,addElement,deleteElement,putElement} from './models.js'


export const getProductsController = async (req,res) =>{
    const catalog = await getElements()
    res.send(catalog)
}
export const addProductController = async (req,res) =>{
    const elem = req.body
    const catalog = await addElement(elem.name, elem.description, elem.price, elem.product_type)
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
    const catalog = await putElement(req.body)
    res.send(catalog)   
}