```
#include <bits/stdc++.h>
#define ll long long
using namespace std;

// Eg n=4
//       1
//     2 3 2
//   3 4 5 4 3
// 4 5 6 7 6 5 4

void palindromeTriangle(int rows) {	
	for (int i=1; i<=rows; i++) {
		for (int j=rows-1; j>=i; j--) cout << "  ";
		for (int j=i; j<2*i-1; j++) cout << j << " ";
		for (int j=2*i-1; j>=i; j--) cout << j << " ";
		cout << "\n";
	}
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);

	int n;
	cin >> n;
	palindromeTriangle(n);
	
	return 0; 
}	
```
