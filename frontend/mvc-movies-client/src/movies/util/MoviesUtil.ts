export default class MoviesUtil {
  public static formatToMoney(number: number): string {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    return formatter.format(number)
  }
}