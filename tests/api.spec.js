const { test, expect } = require('@playwright/test');

var user_id ;
test('get user CI/CD',async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users');

    expect(response.status()).toBe(200);
})
test('create user CI/CD',async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users',
    {
        data:{"name":"morpheus","job":"leader"},
        headers:{"Accept":"application/json"}
    });

    expect(response.status()).toBe(201);

    var res = await response.json();
    user_id = res.id;
})

test('delete user CI/CD',async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/'+user_id,);

    expect(response.status()).toBe(204);
})