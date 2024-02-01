export const priceProperty = (price) =>
        Number(price).toLocaleString('es-GT' ,{
            style: 'currency',
            currency: 'GTQ'
        })
    