#include <iostream>
#include <math.h>
using namespace std;
class rectangle{
  public:
        void set_rect(float p,float q)
        {   float x,t;
            c_x=p;
            c_y=q;
            x=sqrt(pow(c_x,2)+pow(c_y,2));
            t=c_y/c_x;
            cout<<"x and y coordinate of the point in rectangular form : "<<'{'<<c_x<<','<<c_y<<'}'<<endl;
            cout<<"Radial distance from origin and angle from x axis are : "<<'{'<<x<<','<<atan(t)<<'}'<<endl;

        }
  private:
  float c_x,c_y;
};
class polar{
  public:
        void pol(float r,float t)
        {float i,j;
         rad=r;
         the=t;
         cout<<"Given Radial distance and angle are : "<<'{'<<rad<<','<<the<<'}'<<endl;
         i=sqrt(pow(r,2)/(1+pow(tan(the),2)));
         j=i*tan(the);
         cout<<"X and Y coordinate of the point are :"<<'{'<<i<<','<<j<<'}'<<endl;
        }
  private:
    float rad,the;

};
int main()
{   float i,j,k,l;
    cout<<"Enter x and y coordinate :"<<endl;
    cin>>i>>j;
    cout<<"Enter radial distance and angle "<<endl;
    cin>>k>>l;
    rectangle obj;
    obj.set_rect(i,j);
    polar obj2;
    obj2.pol(k,l);
}
