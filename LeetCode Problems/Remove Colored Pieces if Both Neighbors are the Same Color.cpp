class Solution {
public:
    bool winnerOfGame(string colors) {
        int alice = 0;
        int bob = 0;

        for(int i = 1; i<colors.size(); i++)
        {
            if(colors[i] == 'A' && colors[i-1]=='A' && colors[i+1]=='A')
            {
                alice++;
            }
            if(colors[i] == 'B' && colors[i-1]=='B' && colors[i+1]=='B')
            {
                bob++;
            }
        }
        return alice>bob;
    }
};