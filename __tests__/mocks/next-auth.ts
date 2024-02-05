// export const auth = jest.fn().mockResolvedValue({
//     providers: [
//         {
//             name: 'credentials',
//             credentials: {
//                 email: { label: 'email', type: 'text' },
//                 password: { label: 'password', type: 'password' },
//                 role: { label: 'role', type: 'text' },
//                 organization: { label: 'organization', type: 'text' },
//             },
//             async authorize(credentials: any) {
//                 return {
//                     id: '1',
//                     name: 'username',
//                     email: 'test@gmail.com',
//                     password: 'test1234',
//                     role: 'admin',
//                     organization: '#12345',
//                 };
//             },
//         },
//     ],
// });

export const auth = jest.fn().mockResolvedValue({
    user: {
        id: '1',
        name: 'username',
        email: 'test@gmail.com',
        password: '1234678',
        role: 'admin',
        organization: '#12345',
    },
});
