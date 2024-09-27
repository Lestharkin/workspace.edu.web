export default class MoviesUtil {
    static formatToMoney(number) {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        return formatter.format(number);
    }
}
