**Challenge**
![](../../media/Screen%20Shot%202022-08-29%20at%2010.32.40%20AM.png)

**Code**
``` swift
protocol Telephone {
    func makeCall()
    func hangUp()
}
extension Telephone {
    func makeCall() {
        //make a call
    }
    func hangUp() {
        //hang up a call
    }
}

//protocol inheriting protocols
protocol Landline: Telephone {
    //landline protocol inheriting telephone protocol
}

protocol Cellular: Telephone {
    //cellular protocol inheriting telephone protocol
    
    //additional method
    func sendSMS()
}
extension Cellular {
    func sendSMS() {
        //send SMS
    }
}

//remining of protocols
protocol Rotaryable {
    func rotaryInput()
}
protocol PushButtonable {
    func buttonInput()
}
extension PushButtonable {
    func buttonInput() {
        //button input
    }
}
protocol Touchable {
    func touchInput()
}
extension Touchable {
    func touchInput() {
        //touch input
    }
}
protocol Internetable {
    func accessInternet()
}
extension Internetable {
    func accessInternet() {
        //access internet
    }
}


//class inheriting protocols
class Rotary: Landline, Rotaryable {
    func rotaryInput() {
        //rotary input
    }
    
}
class PushButton: Landline, PushButtonable {
}

class NonSmart: Cellular, PushButtonable {
}
class iPhone: Cellular, Touchable, Internetable {
    func IOS() {
        //ios function
    }
}
class AndroidPhone: Cellular, Touchable, Internetable {
    func androidOS() {
        //android os
    }
}
class WindowPhone: Cellular, Touchable, Internetable {
    func windowOS() {
        //window os
    }
}


