#include <iostream>
#include <cmath>
using namespace std;

double f(double x)
{
    // Define your function here
    return x * x; // Example function: x^2
}

double ternary_search(double left, double right, double epsilon)
{
    while (abs(right - left) > epsilon)
    {
        double mid1 = left + (right - left) / 3;
        double mid2 = right - (right - left) / 3;

        double f_mid1 = f(mid1);
        double f_mid2 = f(mid2);

        if (f_mid1 < f_mid2)
        {
            right = mid2;
        }
        else
        {
            left = mid1;
        }
    }

    return (left + right) / 2;
}

int main()
{
    double left = -10.0;   // Left bound of search interval
    double right = 10.0;   // Right bound of search interval
    double epsilon = 1e-9; // Desired precision

    double result = ternary_search(left, right, epsilon);

    cout << "The minimum of the function occurs at x = " << result << ", f(x) = " << f(result) << endl;

    return 0;
}
