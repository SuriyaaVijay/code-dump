#include <bits/stdc++.h>
#include <iostream>
using namespace std;
typedef long long ll;
typedef vector<int> vi;
typedef pair<int, int> pi;
#define F first
#define S second
#define PB push_back
#define MP make_pair
#define forn(i, n) for (int i = 0; i < int(n); i++)

// freopen('input.txt', 'r', stdin);
// freopen('output.txt', 'w', stdout);
int main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);

    vector<string> Chess(8);
    forn(i, 8)
    {
        cin >> Chess[i];
    }
    int cnt = 0;
    vector<int> Col(8);
    iota(Col.begin(), Col.end(), 0); // fills the values 0 1 2 ...n in specifc loaction.

    do
    {
        bool valid = true;
        forn(i, 8)
        {
            if (Chess[i][Col[i]] != '.')
            {
                valid = false;
                break;
            }
        }
        vector<bool> diagonalOccupied(15, false);
        forn(i, 8)
        {
            if (diagonalOccupied[i + Col[i]])
                valid = false;
            diagonalOccupied[i + Col[i]] = true;
        }
        forn(i, 15) diagonalOccupied[i] = false;
        forn(i, 8)
        {
            if (diagonalOccupied[i + 7 - Col[i]])
                valid = false;
            diagonalOccupied[i + 7 - Col[i]] = true;
        }
        cnt += valid;
    } while (next_permutation(Col.begin(), Col.end()));
    cout << cnt;
    return 0;
}
