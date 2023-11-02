import java.text.NumberFormat;
import java.util.Locale;
import java.util.Scanner;

public class Main {

    public static String mortgageCalculator(int principal, float annualRate, int monthTerm) {
        NumberFormat currency = NumberFormat.getCurrencyInstance(Locale.US);
        final byte MONTHS_IN_YEAR = 12;
        final byte PERCENT = 100;
        final float MONTHLY_RATE = (annualRate / PERCENT) / MONTHS_IN_YEAR;
        final double PLUS_ONE_WITH_POWER = Math.pow((1 + MONTHLY_RATE), monthTerm);
        double numerator = MONTHLY_RATE * PLUS_ONE_WITH_POWER;
        double denominator = PLUS_ONE_WITH_POWER - 1;
        return currency.format(principal * (numerator / denominator));
    }

    public static void main(String[] args) {
        Scanner scannerObj = new Scanner(System.in);
        System.out.print("Principal: ");
        final int principal = scannerObj.nextInt();
        System.out.print("Annual Interest Rate: ");
        final float interestRateAnnual = scannerObj.nextFloat();
        System.out.print("Period (Years): ");
        final int term = scannerObj.nextInt();
        mortgageCalculator(principal, interestRateAnnual, term);
    }
}
