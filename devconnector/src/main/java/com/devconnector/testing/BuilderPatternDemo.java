package com.devconnector.testing;

public class BuilderPatternDemo {
    static class Pizza {
        private String dough;
        private String sauce;
        private String topping;

        @Override
        public String toString() {
            return "Pizza{" +
                    "dough='" + dough + '\'' +
                    ", sauce='" + sauce + '\'' +
                    ", topping='" + topping + '\'' +
                    '}';
        }

        public Pizza(Builder builder) {
            this.dough = builder.dough;
            this.sauce = builder.sauce;
            this.topping = builder.topping;
        }

        static class Builder {
            private String dough;
            private String sauce;
            private String topping;

            public Builder(){}

            public Builder dough(String dough) {
                this.dough = dough;
                return this;
            }

            public Builder sauce(String sauce) {
                this.sauce = sauce;
                return this;
            }

            public Builder topping(String topping) {
                this.topping = topping;
                return this;
            }

            public Pizza build() {
                return new Pizza(this);
            }
        }
    }

    public static void main(String...args) {
        Pizza pizza = new Pizza.Builder().dough("Dough").sauce("sauce").topping("topping").build();
        System.out.println(pizza.toString());
    }
}
