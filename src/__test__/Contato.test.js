const axios = require('axios')
jest.mock('axios')

test("mock", async () => {

    const mockedResponse = {data: {
        name:"minecraft",
        email:"baidy",
        phone:"266541"
    }}
    axios.get.mockResolvedValue(mockedResponse)
    const app = require('../Contatos')

    app.getData()
    expect(axios.get).toHaveBeenCalled()
    expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/contato/')


})