#include <iostream>
#include <bits/stdc++.h>
using namespace std;


void eventLoop(stack<string> callStack, queue<string> callBackQueue){
    // Timer maintains time
    int timer = 0;

    // Task1 takes 2 unit time to complete and is popped at timer == 0 from callStack
    // Task2 takes 4 unit time to complete and is popped at timer == 2 from callStack
    // Task3 takes 1 unit time to complete and is popped at timer == 6 from callStack
    // Task4 takes 2 unit time to complete and is popped at timer == 7 from callStack

    // BrowserTask1 takes 2 unit time to complete
    // BrowserTask1 takes 3 unit time to complete

    while(callBackQueue.size() != 0 && callStack.size() != 0){
        while(callStack.size() != 0){
            cout << "Timer == " << timer << endl;
            if(timer == 0 || timer == 2 || timer == 6 || timer == 7 || timer == 9 || timer == 11){
                cout << callStack.top() << " is popped" << endl;
                callStack.pop();
            }
            timer++;
        }
        cout << callBackQueue.front() << "is pushed on to callStack from callBackQueue" << endl;
        callStack.push(callBackQueue.front());
        callBackQueue.pop();
    }
}

int main(){
    stack<string> callStack;
    queue<string> callBackQueue;

    callStack.push("Task1");
    callStack.push("Task2");
    callStack.push("Task3");
    callStack.push("Task4");

    callBackQueue.push("BrowserTask1");
    callBackQueue.push("BrowserTask2");

    eventLoop(callStack, callBackQueue);



}
