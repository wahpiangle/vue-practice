export default defineEventHandler(async (event) => {

    //handle POST data
    const body = await readBody(event)
    return {
        hello: 'world'
    }
})