> **Playground**
> 
> _Extension of dictionary: add two dictionary_
> 
> ``` swift
> extension Dictionary {
>     //union of two dictionaries
>     func add(other: Dictionary) -> Dictionary {
>         var returnDictionary: Dictionary = self
>         for (key, value) in other {
>             returnDictionary[key] = value
>         }
>         return returnDictionary
>     }
> }
> ```
>
> _Overloading the + operator_
> 
> ``` swift
> //can only join two dictionary with types [Stirng: String]
> func +(left: [String: String], right: [String: String]) -> [String: String] {
>     var returnDictionary: [String: String] = left
>     for (key, value) in right {
>         returnDictionary[key] = value
>     }
>     return returnDictionary
> }
> 
> //using generics
> func +<Key,Value>(left: [Key: Value], right: [Key: Value]) -> [Key: Value] {
>     var returnDictionary = left
>     for (key,value) in right {
>         returnDictionary[key] = value
>     }
>     return returnDictionary
> }
> ```

**Challenge**

![](../media/Screen%20Shot%202022-09-01%20at%209.43.37%20AM.png)

**Codes**

``` swift
func ==(left: [String: String], right: [String: String]) -> Bool {
    for (key, _) in left {
        if right[key] == nil {
            return false
        }
        if left[key] != right[key] {
            return false
        }
    }
    
    for (key, _) in right {
        if left[key] == nil {
            return false
        }
    }
    return true
}

var dict1: [String: String] = ["eng":"English",
                               "esp":"Spanish",
                               "ita":"Italian"]
var dict2: [String: String] = ["deu":"German",
                               "chi":"Chinese",
                               "fre":"French"]
var dict3: [String: String] = ["deu":"German",
                               "chi":"Chinese",
                               "fre":"French"]

var comb = dict1.add(other: dict2)
var comb2 = dict1 + dict2

print("Combination of the two dictionaries using union are: \(comb)")
print("Combination of the two dictionaries using overloaded +  operator are: \(comb2)")
print("The two dictionary \(dict1) and \(dict2) are equals? \(dict1 == dict2)")
print("The two dictionary \(dict2) and \(dict3) are equals? \(dict2 == dict3)")
```

**Output**

![](../media/Screen%20Shot%202022-09-01%20at%209.56.35%20AM.png)
