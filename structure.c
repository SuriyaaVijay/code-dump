#include <stdio.h>
#include <string.h>
struct student
{
    int roll;
    float cgpa;
    char name[100];
};

int main()
{

    struct student s1;
    s1.roll = 25;
    strcpy(s1.name, "Faizan ahmad");
    s1.cgpa = 8.52;

    printf("name is %s \n", s1.name);
    printf("roll number is %d \n ", s1.roll);
    printf("CGPA is %f \n ", s1.cgpa);
    return 0;
}
