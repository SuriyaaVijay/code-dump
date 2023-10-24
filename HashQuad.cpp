#include<iostream>
#include<stdio.h>
using namespace std;
#define SIZE 10

int hashi(int key){
    return key%SIZE;
}
int Insertprobe(int H[],int key){
    int index=hashi(key);
    int i=0;
    while(H[(index+i*i)%SIZE]!=0){
        i++;
    }
    return (index+i*i)%SIZE;
}
void Insert(int H[],int key){
    int index=hashi(key);
    if(H[index]!=0){
        index=Insertprobe(H,key);
    }
    H[index]=key;
}
int Search(int H[],int key){
    int index=hashi(key);
    int i=0;
    while(H[(index+i*i)%SIZE]!=key){
        i++;
    }
    return (index+i*i)%SIZE;
}
int main(){
    int H[10]={0};
    Insert(H,23);
    Insert(H,43);
    Insert(H,13);
    Insert(H,27);
    cout<<"Key found at index= "<<Search(H,13);
    return 0;
}
