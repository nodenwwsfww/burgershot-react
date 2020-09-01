export default function toCurrency(value) {
    return Number(value).toLocaleString('ru-RU', {style: 'currency', currency: 'rub'})
}