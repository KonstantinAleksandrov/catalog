import connection from '../../db.js'

// const db = new Low(new JSONFile(path.join('dataBase','catalog.json')))

const sqlGetProducts = () => ({text: `SELECT * from public.products`, values: []})

const sqlAddProduct = (name,price, description) => ({
    text: 'INSERT INTO public.products(name,price, description) VALUES ($1, $2, $3)',
    values: [name,price,description]
})

const sqlDelProduct = (id) =>({
    text : `DELETE FROM public.products WHERE id=${id}`,
    values : []
})
const sqlPutProduct = (id,name,price, description) =>({
    text : 
    `UPDATE public.products SET 
    ${name ? `name='${name}'`:''}
    ${!price ? '' : name ? `,price='${price}'` : `price='${price}'`}
    ${!description ? '': name || price ? `,description='${description}'`:`description='${description}'`} 
    WHERE id=${id}`,
    values : []
})
export const getElements = async () => {
    const {rows} = await connection.query(sqlGetProducts())
    return rows
}
export const addElement = async (name,price,description) => {
    await connection.query(sqlAddProduct(name,price,description))
    const {rows} = await connection.query(sqlGetProducts())
    return rows
}
export const deleteElement = async (id) =>{
    await connection.query(sqlDelProduct(id))
    const {rows} = await connection.query(sqlGetProducts())
    return rows
}
export const putElement = async (data) =>{
    const {id,name,price,description} = data
    await connection.query(sqlPutProduct(id,name,price,description))
    const {rows} = await connection.query(sqlGetProducts())
    return rows
}