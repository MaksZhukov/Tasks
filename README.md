#1: Partial Application  
Implement function F that allows to do partial function application in a form of:  
*𝐺(𝑥,𝑦,𝑧 ...) = 𝑁*   
*𝐹(𝑥, 𝐺(𝑥,𝑦,𝑧 ...)) → 𝐻(𝑦,𝑧…) = 𝑁*   
F should accept any number of parameters to apply. G may accept any number of parameters.    
In order to solve this problem you have to be familiar with next concepts: 1. Partial Application 2. High-order and First-class functions 3. Activation Object and handling of variable number of function arguments  
#2: Currying  
Implement function curry that allows to do currying like:   
*𝑓(𝑥,𝑦,𝑧) = 𝑁,*   
*𝑐𝑢𝑟𝑟𝑦(𝑓) = 𝑥 → (𝑦 → (𝑧 → 𝑁))*    
Function f may accept any number of explicit parameters. Implicit parameters are not subject to curry.    
How is it differ from Partial Application?  
#3: Linear fold  
Implement linear fold function that works on arrays:  
*F(array, callback[, initialValue]),*   
callback: Function to execute on each value in the array, taking four arguments:   
previousValue: The value previously returned in the last invocation of the callback, or initialValue, if supplied.   
currentValue: The current element being processed in the array.   
index: The index of the current element being processed in the array.  
array: The array fold was called upon.   
initialValue: Object to use as the first argument to the first call of the callback.  
#4: Linear unfold  
Implement linear unfold function that returns a sequence that contains the elements generated by the given computation:   
*F(callback, initialValue)*   
callback: A function that takes the current state and returns a tuple consisting of the next element of the sequence and the next state value. Callback accepts current value   and produces new state and element. Unfold stops upon falsy value returned by callback.   
initialValue: The initial state value.  

#5: Lazy evaluation  
Implement a function that takes list of parameters and makes any given function lazy  
#6: Memoization  
Implement a function that for any given function F produces function G that caches its previous calling results. Function F accept single explicit parameter. Implicit parameters should not be taken into account. Watch out for NaN, undefined and circular references.  

