

export const  createId = () => {
    const random = Math.random().toString(36).substr(2)
    const date = Date.now().toString(36)

    return random + date
}

export const formatDate = date => {
    const newDate = new Date(date);
    const dateOptions = {
        year: 'numeric',
        month : 'long',
        day : '2-digit'
    }

    return newDate.toLocaleDateString('es-ES', dateOptions)
}

export const formatCurrency = amount => {
    return amount.toLocaleString('es-ES', {
        style: 'currency',
        currency: 'EUR'
    })
}