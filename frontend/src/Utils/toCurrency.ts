export default function toCurrency(value: number) {
    return Number(value).toLocaleString('ru-RU', {style: 'currency', currency: 'rub'})
}