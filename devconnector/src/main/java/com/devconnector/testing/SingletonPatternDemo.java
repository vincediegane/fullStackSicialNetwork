package com.devconnector.testing;

class Singleton {
    private static Singleton instance;

    private Singleton(){}

    public static Singleton getInstance() {
        if(instance == null) instance = new Singleton();
        return instance;
    }
    public void doSomething() {
        System.out.println("Inside Singleton Class::doSomething() method.");
    }
}

public class SingletonPatternDemo {
    public static void main(String...args) {
        Singleton instance = Singleton.getInstance();
        instance.doSomething();
    }
}
