const Admin = require('../../models/Admin')
it('should recieve a property in admin', () =>{
    expect(Admin.nome).not.toBe("")
})