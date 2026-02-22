import java.util.*;

public class ExpenseTracker {

    static ArrayList<Expense> expenses = new ArrayList<>();
    static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {

        int choice;

        do {
            System.out.println("\n==== Expense Tracker ====");
            System.out.println("1. Add Expense");
            System.out.println("2. Total Spending");
            System.out.println("3. Category Report");
            System.out.println("4. Monthly Report");
            System.out.println("5. Show All");
            System.out.println("6. Exit");

            choice = sc.nextInt();
            sc.nextLine();

            switch(choice) {
                case 1: addExpense(); break;
                case 2: totalSpending(); break;
                case 3: categoryReport(); break;
                case 4: monthlyReport(); break;
                case 5: showAll(); break;
                case 6: System.out.println("Thank You"); break;
                default: System.out.println("Invalid Choice");
            }

        } while(choice != 6);
    }

    static void addExpense() {

        System.out.print("Enter Amount: ");
        double amount = sc.nextDouble();
        sc.nextLine();

        System.out.print("Enter Category: ");
        String category = sc.nextLine();

        System.out.print("Enter Month: ");
        String month = sc.nextLine();

        expenses.add(new Expense(amount, category, month));

        System.out.println("Expense Added!");
    }

    static void totalSpending() {

        double total = 0;

        for(Expense e : expenses) {
            total += e.amount;
        }

        System.out.println("Total Spending = " + total);
    }

    static void categoryReport() {

        System.out.print("Enter Category: ");
        String cat = sc.nextLine();

        double total = 0;

        for(Expense e : expenses) {
            if(e.category.equalsIgnoreCase(cat)) {
                total += e.amount;
            }
        }

        System.out.println("Total " + cat + " Spending = " + total);
    }

    static void monthlyReport() {

        System.out.print("Enter Month: ");
        String m = sc.nextLine();

        double total = 0;

        for(Expense e : expenses) {
            if(e.month.equalsIgnoreCase(m)) {
                total += e.amount;
            }
        }

        System.out.println("Total Spending in " + m + " = " + total);
    }

    static void showAll() {

        for(Expense e : expenses) {
            System.out.println(e.amount + " | " + e.category + " | " + e.month);
        }
    }
}