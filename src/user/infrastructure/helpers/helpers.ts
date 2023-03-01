module.exports = {
    defaultResponse: function (success:boolean, data:any, message?:string) {
        return {
            success,
            data,
            message: message || (success ? 'OK' : 'Error')
        }
    },
    defaultResponseError: function (error:any) {
        return {
            success: false,
            data: error,
            message: 'Error'
        }
    },
}