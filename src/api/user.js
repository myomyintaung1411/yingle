import network from './request.js'

// export const testUser = () => network.post('/api/test', {}).then(res => {
//     if (res.status === 200) {
//         return res.data.data

//     }

// })

export function GetAgentInfo(data) {
   // console.log('data ... ', data)
    return network({
        url: '/getAgentInfo',
        method: 'post',
        data
    })
}
export function UserRegister(data) {
   // console.log('data ... ', data)
    return network({
        url: '/regist',
        method: 'post',
        data
    })
}
export function UserLogin(data) {
   // console.log('data ... ', data)
    return network({
        url: '/login',
        method: 'post',
        data
    })
}
export function GetScrollText(data) {
   // console.log('data ... ', data)
    return network({
        url: '/getBulletin',
        method: 'post',
        data
    })
}
export function GetUserBalance(data) {
   // console.log('data ... ', data)
    return network({
        url: '/getBalance ',
        method: 'post',
        data
    })
}