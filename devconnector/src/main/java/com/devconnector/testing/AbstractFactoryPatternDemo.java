package com.devconnector.testing;

interface Shape {
    void draw();
}

interface Color {
    void fill();
}

class Circle implements Shape {

    @Override
    public void draw() {
        System.out.println("Inside Circle class::draw() method.");
    }
}

class Rectangle implements Shape {

    @Override
    public void draw() {
        System.out.println("Inside Rectangle class::draw() method.");
    }
}

class Red implements Color {

    @Override
    public void fill() {
        System.out.println("Inside Red class::fill() method.");
    }
}

class Blue implements Color {

    @Override
    public void fill() {
        System.out.println("Inside Blue class::fill() method.");
    }
}

interface AbstractFactory {
    Shape createShape();
    Color createColor();
}

class ShapeFactory implements AbstractFactory {

    @Override
    public Shape createShape() {
        return new Circle();
    }

    @Override
    public Color createColor() {
        return new Red();
    }
}

class ColorFactory implements AbstractFactory {

    @Override
    public Shape createShape() {
        return new Rectangle();
    }

    @Override
    public Color createColor() {
        return new Blue();
    }
}

public class AbstractFactoryPatternDemo {
    public static void main(String...args) {
        AbstractFactory shapeFactory = new ShapeFactory();
        Shape shape = shapeFactory.createShape();
        shape.draw();
        System.out.println("------------------------");

        AbstractFactory colorFactory = new ColorFactory();
        Color color = colorFactory.createColor();
        color.fill();
    }
}
