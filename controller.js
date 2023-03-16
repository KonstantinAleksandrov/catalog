import {getElements,addElement,deleteElement,putElement} from './models.js'


export const getController = async (req,res) =>{
    const catalog = await getElements()
    res.send(catalog)
}
export const postController = async (req,res) =>{
    const elem = req.body
    const catalog = await addElement(elem)
    res.send(catalog)
}
export const deleteController = async (req,res) =>{
    const id = req.params.id
    console.log(req.params)
    if(!id || !+id){
        res.send('id не найдено или не корректно')
        return
    }
    const catalog = await deleteElement(id)
    res.send(catalog)
}

export const putController = async (req,res)=>{
    const id = req.body.id
    if(!id){
        res.send('поле id не найдено в запросе')
        return
    }
    const catalog = await putElement(req.body)
    res.send(catalog)   
}