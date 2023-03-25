import connection from '../../db.js'

// const db = new Low(new JSONFile(path.join('dataBase','catalog.json')))

const sqlGetProducts = () => ({text: `SELECT * from public.products`, values: []})

const sqlAddProduct = (name, description, price, product_type) => ({
    text: 'INSERT INTO public.products(name, description, price, product_type) VALUES ($1, $2, $3, $4)',
    values: [name, description, price, product_type]
})

export const getElements = async () => {
    const {rows} = await connection.query(sqlGetProducts())
    return rows
}
export const addElement = async (name, description, price, product_type) => {
    await connection.query(sqlAddProduct(name, description, price, product_type))
    const {rows} = await connection.query(sqlGetProducts())
    return rows
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