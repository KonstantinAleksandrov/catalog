import Pg from 'pg'

const connection = (() => {
  const settings = {
    user: 'postgres',
    host: '159.69.22.219',
    database: 'catalog',
    password: 'blablabla5',
    port: 5432,
  }
  const myClient = new Pg.Client(settings)
  myClient.connect()
  return myClient
})()

export default connection