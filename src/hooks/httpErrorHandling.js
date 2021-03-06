import {useState, useEffect} from 'react'

export default httpClient => {
    const [error, setError] = useState(null)
    const reqInterceptorId = httpClient.interceptors.request.use(req => {
        setError(null)
        return req
    })
    const resInterceptorId = httpClient.interceptors.response.use(res => {
        setError(null)
        return res
    }, error => {
        setError(error)
        return Promise.reject(error)
    })

    useEffect(() => {
        return () => {
            httpClient.interceptors.request.eject(reqInterceptorId)
            httpClient.interceptors.response.eject(resInterceptorId)
        }
    }, [httpClient, reqInterceptorId, resInterceptorId])

    const clearError = () => {
        setError(null)
    }

    return [error, clearError]
}