#include<iostream.h>


void main(){
	cout<< "CALCULATOR"
	while(true){
		int choice,i,j,res;
		cout<< "Enter the following key for the respective operations"<<
				"1 for Addition\n"<<
			   	"2 for Subtract\n"<<
			   	"3 for Devide\n"<<
			   	"4 for Multiply\n"<<
			   	"5 to Quit";

		cin>> choice;

		if(choice == 5)
			break;

		cout<<"\nEnter the first number";
		cin>> i;
		cout<<"\nEnter the first number";
		cin>> j;

		if(choice == 1)
			res = i + j;
		else if(choice == 2)
			res = i - j;
		else if(choice == 3)
			res = i / j;
		else if(choice == 4)
			res = i * j;

		cout<< "\n The result is:"<<res<<"\n\n";
	}
	cout<<"\nExit.."
}
